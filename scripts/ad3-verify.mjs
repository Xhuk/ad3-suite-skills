#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const packRoot = path.resolve(here, "..");
const manifestPath = path.join(packRoot, "skills", "manifest.json");

function readManifest() {
  if (!fs.existsSync(manifestPath)) {
    throw new Error(`Missing ${manifestPath}. Copy skills/manifest.json with the suite.`);
  }
  return JSON.parse(fs.readFileSync(manifestPath, "utf8"));
}

function parseArgs(argv) {
  const proposed = [];
  let root = process.cwd();

  for (let index = 2; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === "--propose" || arg === "-p") {
      const value = argv[index + 1] ?? "";
      index += 1;
      proposed.push(...value.split(",").map((item) => item.trim()).filter(Boolean));
      continue;
    }
    if (!arg.startsWith("-")) {
      root = path.resolve(arg);
    }
  }

  return { root, proposed };
}

function exists(root, relative) {
  return fs.existsSync(path.join(root, relative));
}

function detectHost(root, hostKinds) {
  const hosts = new Set();
  const stack = [];

  const pkgFile = path.join(root, "package.json");
  let deps = [];
  if (fs.existsSync(pkgFile)) {
    try {
      const pkg = JSON.parse(fs.readFileSync(pkgFile, "utf8"));
      deps = [
        ...Object.keys(pkg.dependencies ?? {}),
        ...Object.keys(pkg.devDependencies ?? {}),
      ];
    } catch {
      deps = [];
    }
  }

  if (deps.includes("next") || exists(root, "next.config.ts") || exists(root, "next.config.js")) {
    hosts.add("web");
    stack.push("Next.js");
  }
  if (deps.includes("vite") || exists(root, "vite.config.ts")) {
    hosts.add("web");
    stack.push("Vite");
  }
  if (deps.includes("expo") || deps.includes("react-native")) {
    hosts.add("expo");
    stack.push(deps.includes("expo") ? "Expo" : "React Native");
  }
  if (exists(root, "Package.swift") || fs.readdirSync(root).some((name) => name.endsWith(".xcodeproj"))) {
    hosts.add("apple");
    stack.push("Swift / Xcode");
  }

  const detected = hostKinds.filter((host) => hosts.has(host));
  return {
    hosts: detected,
    stack: stack.length > 0 ? stack : ["Desconocido"],
    unknown: detected.length === 0,
  };
}

function applies(skillHosts, detected) {
  if (skillHosts.includes("any") || detected.length === 0) {
    return true;
  }
  return skillHosts.some((host) => detected.includes(host));
}

function findInstalled(root, searchPaths) {
  const hits = [];
  const seen = new Set();

  for (const searchPath of searchPaths) {
    const dir = path.join(root, searchPath);
    if (!fs.existsSync(dir) || !fs.statSync(dir).isDirectory()) {
      continue;
    }
    for (const slug of fs.readdirSync(dir)) {
      const skillFile = path.join(dir, slug, "SKILL.md");
      if (!fs.existsSync(skillFile) || seen.has(slug)) {
        continue;
      }
      seen.add(slug);
      hits.push({ slug, path: path.relative(root, skillFile) });
    }
  }

  return hits;
}

function main() {
  const manifest = readManifest();
  const { root, proposed } = parseArgs(process.argv);
  const hostKinds = ["web", "expo", "apple"];
  const host = detectHost(root, hostKinds);
  const installed = findInstalled(root, manifest.searchPaths);
  const installedSlugs = new Set(installed.map((hit) => hit.slug));

  const missing = manifest.skills
    .filter((skill) => !installedSlugs.has(skill.slug))
    .map((skill) => skill.slug);
  const requiredMissing = manifest.skills
    .filter((skill) => skill.required && !installedSlugs.has(skill.slug))
    .map((skill) => skill.slug);

  const report = {
    suite: manifest.suite,
    adaptable: true,
    root,
    host,
    installed: installed.map((hit) => hit.slug),
    missing,
    requiredMissing,
    proposed: proposed.map((slug) => {
      const skill = manifest.skills.find((item) => item.slug === slug);
      const isInstalled = installedSlugs.has(slug);
      const applicable = applies(skill?.hosts ?? ["any"], host.hosts);
      let verdict = "ready";
      if (!skill && !isInstalled) verdict = "unknown-skill";
      else if (!isInstalled) verdict = "missing";
      else if (!applicable) verdict = "not-applicable";
      return { slug, installed: isInstalled, applicable, verdict };
    }),
  };

  process.stdout.write(`${JSON.stringify(report, null, 2)}\n`);

  const blocked = report.proposed.filter((item) => item.verdict !== "ready");
  if (requiredMissing.length > 0 || blocked.length > 0) {
    process.exitCode = 1;
  }
}

main();
