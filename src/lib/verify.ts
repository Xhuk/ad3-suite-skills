import fs from "node:fs";
import path from "node:path";

import { catalog, skillBySlug } from "@/lib/catalog";
import { detectHost } from "@/lib/host";
import {
  suiteManifest,
  type HostKind,
  type SkillHost,
} from "@/lib/manifest";
import type {
  InstallHit,
  ProposedSkill,
  SkillVerdict,
  SuiteStatus,
} from "@/lib/status-types";

export type {
  InstallHit,
  ProposedSkill,
  SkillVerdict,
  SuiteStatus,
} from "@/lib/status-types";

export function appliesToHost(hosts: SkillHost[], detected: HostKind[]): boolean {
  if (hosts.includes("any")) {
    return true;
  }
  if (detected.length === 0) {
    return true;
  }
  return hosts.some((host) => host !== "any" && detected.includes(host));
}

function isSafeRoot(root: string): boolean {
  const resolved = path.resolve(root);
  return path.isAbsolute(resolved) && resolved !== "/" && !resolved.includes("\0");
}

export function findInstalledSkills(root: string): InstallHit[] {
  const hits: InstallHit[] = [];
  const seen = new Set<string>();

  for (const searchPath of suiteManifest.searchPaths) {
    const dir = path.join(root, searchPath);
    if (!fs.existsSync(dir) || !fs.statSync(dir).isDirectory()) {
      continue;
    }

    let entries: string[] = [];
    try {
      entries = fs.readdirSync(dir);
    } catch {
      continue;
    }

    for (const slug of entries) {
      const skillFile = path.join(dir, slug, "SKILL.md");
      if (!fs.existsSync(skillFile) || seen.has(slug)) {
        continue;
      }
      seen.add(slug);
      hits.push({
        slug,
        path: path.relative(root, skillFile),
        searchPath,
      });
    }
  }

  return hits.sort((left, right) => left.slug.localeCompare(right.slug));
}

function hostsOf(slug: string): SkillHost[] {
  const manifest = suiteManifest.skills.find((skill) => skill.slug === slug);
  return manifest?.hosts ?? ["any"];
}

function verdictFor(input: {
  inSuite: boolean;
  installed: boolean;
  applicable: boolean;
}): SkillVerdict {
  if (!input.inSuite && !input.installed) {
    return "unknown-skill";
  }
  if (!input.installed) {
    return "missing";
  }
  if (!input.applicable) {
    return "not-applicable";
  }
  return "ready";
}

export function inspectSuite(root: string, proposed: string[] = []): SuiteStatus {
  const resolved = path.resolve(root);
  if (!isSafeRoot(resolved)) {
    throw new Error("Invalid project root");
  }

  const host = detectHost(resolved);
  const installed = findInstalledSkills(resolved);
  const installedSlugs = new Set(installed.map((hit) => hit.slug));
  const suiteSlugs = suiteManifest.skills.map((skill) => skill.slug);
  const missing = suiteSlugs.filter((slug) => !installedSlugs.has(slug));
  const requiredMissing = suiteManifest.skills
    .filter((skill) => skill.required && !installedSlugs.has(skill.slug))
    .map((skill) => skill.slug);

  const applicable: string[] = [];
  const skippedHere: string[] = [];

  for (const skill of suiteManifest.skills) {
    if (!appliesToHost(skill.hosts, host.hosts)) {
      skippedHere.push(skill.slug);
      continue;
    }
    if (installedSlugs.has(skill.slug)) {
      applicable.push(skill.slug);
    }
  }

  const proposedVerdicts = proposed
    .map((slug) => slug.trim())
    .filter(Boolean)
    .map((slug) => {
      const inSuite = suiteSlugs.includes(slug) || Boolean(skillBySlug(slug));
      const hit = installed.find((item) => item.slug === slug);
      const hosts = hostsOf(slug);
      const applicableHere = appliesToHost(hosts, host.hosts);
      const item: ProposedSkill = {
        slug,
        installed: Boolean(hit),
        applicable: applicableHere,
        verdict: verdictFor({
          inSuite,
          installed: Boolean(hit),
          applicable: applicableHere,
        }),
        path: hit?.path ?? null,
        hosts,
        inSuite,
      };
      return item;
    });

  const readyProposed = proposedVerdicts.filter((item) => item.verdict === "ready");
  const blocked = proposedVerdicts.filter((item) => item.verdict !== "ready");

  const decision =
    proposedVerdicts.length === 0
      ? host.unknown
        ? "Host no identificado. AD3 sigue siendo usable: abre solo skills instaladas y no asumas un stack."
        : `Sistema ${host.stack.join(" + ")}. AD3 usa las ${applicable.length} skills instaladas que aplican aquí y omite las ${skippedHere.length} que son de otro host.`
      : blocked.length === 0
        ? `Las ${readyProposed.length} skills propuestas están instaladas y aplican a este sistema. AD3 puede usarlas.`
        : `AD3 no finge skills ausentes. Listas: ${readyProposed.map((item) => item.slug).join(", ") || "ninguna"}. Bloqueadas: ${blocked.map((item) => `${item.slug} (${item.verdict})`).join(", ")}.`;

  return {
    suite: suiteManifest.suite,
    adaptable: true,
    replaces: suiteManifest.replaces,
    root: resolved,
    host,
    searchPaths: suiteManifest.searchPaths,
    installed,
    missing,
    requiredMissing,
    applicable,
    skippedHere,
    proposed: proposedVerdicts,
    decision,
  };
}

export function catalogCoverage(): { extra: string[]; missingFromCatalog: string[] } {
  const catalogSlugs = new Set(catalog.map((skill) => skill.slug));
  const manifestSlugs = new Set(suiteManifest.skills.map((skill) => skill.slug));

  return {
    extra: catalog.filter((skill) => !manifestSlugs.has(skill.slug)).map((skill) => skill.slug),
    missingFromCatalog: suiteManifest.skills
      .filter((skill) => !catalogSlugs.has(skill.slug))
      .map((skill) => skill.slug),
  };
}

