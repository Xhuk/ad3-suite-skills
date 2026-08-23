import fs from "node:fs";
import path from "node:path";

import { hostKinds, type HostKind } from "@/lib/manifest";
import type { DetectedHost } from "@/lib/status-types";

export type { DetectedHost };

function exists(root: string, relative: string): boolean {
  return fs.existsSync(path.join(root, relative));
}

function readPackageJson(root: string): Record<string, unknown> | null {
  const file = path.join(root, "package.json");
  if (!fs.existsSync(file)) {
    return null;
  }

  try {
    return JSON.parse(fs.readFileSync(file, "utf8")) as Record<string, unknown>;
  } catch {
    return null;
  }
}

function dependencyNames(pkg: Record<string, unknown> | null): string[] {
  if (!pkg) {
    return [];
  }

  const bags = [pkg.dependencies, pkg.devDependencies, pkg.peerDependencies];
  return bags.flatMap((bag) =>
    bag && typeof bag === "object" ? Object.keys(bag) : []
  );
}

function looksLikeXcode(root: string): boolean {
  if (exists(root, "Package.swift") || exists(root, "Package.resolved")) {
    return true;
  }

  try {
    return fs
      .readdirSync(root)
      .some(
        (name) => name.endsWith(".xcodeproj") || name.endsWith(".xcworkspace")
      );
  } catch {
    return false;
  }
}

export function detectHost(root: string): DetectedHost {
  const pkg = readPackageJson(root);
  const deps = dependencyNames(pkg);
  const hosts = new Set<HostKind>();
  const stack: string[] = [];
  const evidence: string[] = [];

  if (deps.includes("next") || exists(root, "next.config.ts") || exists(root, "next.config.js") || exists(root, "next.config.mjs")) {
    hosts.add("web");
    stack.push("Next.js");
    evidence.push("next");
  }

  if (deps.includes("vite") || exists(root, "vite.config.ts") || exists(root, "vite.config.js")) {
    hosts.add("web");
    stack.push("Vite");
    evidence.push("vite");
  }

  if (deps.includes("nuxt") || exists(root, "nuxt.config.ts")) {
    hosts.add("web");
    stack.push("Nuxt");
    evidence.push("nuxt");
  }

  if (deps.includes("expo") || exists(root, "app.json") || exists(root, "app.config.ts")) {
    const appJson = path.join(root, "app.json");
    let expoConfig = deps.includes("expo");
    if (fs.existsSync(appJson)) {
      try {
        const parsed = JSON.parse(fs.readFileSync(appJson, "utf8")) as {
          expo?: unknown;
        };
        expoConfig = expoConfig || Boolean(parsed.expo);
      } catch {
        expoConfig = expoConfig;
      }
    }
    if (expoConfig || deps.includes("expo")) {
      hosts.add("expo");
      stack.push("Expo");
      evidence.push("expo");
    }
  }

  if (deps.includes("react-native") && !hosts.has("expo")) {
    hosts.add("expo");
    stack.push("React Native");
    evidence.push("react-native");
  }

  if (deps.includes("react") && !hosts.has("web") && !hosts.has("expo")) {
    hosts.add("web");
    stack.push("React");
    evidence.push("react");
  }

  if (looksLikeXcode(root)) {
    hosts.add("apple");
    stack.push("Swift / Xcode");
    evidence.push("xcode-or-spm");
  }

  const detected = hostKinds.filter((host) => hosts.has(host));

  return {
    hosts: detected,
    stack: stack.length > 0 ? stack : ["Desconocido"],
    evidence,
    unknown: detected.length === 0,
  };
}
