import manifestJson from "../../skills/manifest.json";

import { assertNever } from "@/lib/catalog";

export const hostKinds = ["web", "expo", "apple"] as const;

export type HostKind = (typeof hostKinds)[number];

export type SkillHost = HostKind | "any";

export type ManifestSkill = {
  slug: string;
  hosts: SkillHost[];
  required?: boolean;
};

export type SuiteManifest = {
  suite: string;
  version: string;
  role: string;
  replaces: string[];
  searchPaths: string[];
  skills: ManifestSkill[];
};

export const suiteManifest = manifestJson as SuiteManifest;

export function hostLabel(host: HostKind): string {
  switch (host) {
    case "web":
      return "Web";
    case "expo":
      return "Expo / React Native";
    case "apple":
      return "Apple / Swift";
    default: {
      return assertNever(host);
    }
  }
}

export function skillHostLabel(host: SkillHost): string {
  if (host === "any") {
    return "Cualquier sistema";
  }
  return hostLabel(host);
}

export function manifestSkill(slug: string): ManifestSkill | undefined {
  return suiteManifest.skills.find((skill) => skill.slug === slug);
}
