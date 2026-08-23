import type { HostKind, SkillHost } from "@/lib/manifest";

export type DetectedHost = {
  hosts: HostKind[];
  stack: string[];
  evidence: string[];
  unknown: boolean;
};

export type InstallHit = {
  slug: string;
  path: string;
  searchPath: string;
};

export type SkillVerdict =
  | "ready"
  | "missing"
  | "not-applicable"
  | "unknown-skill";

export type ProposedSkill = {
  slug: string;
  installed: boolean;
  applicable: boolean;
  verdict: SkillVerdict;
  path: string | null;
  hosts: SkillHost[];
  inSuite: boolean;
};

export type SuiteStatus = {
  suite: string;
  adaptable: true;
  replaces: string[];
  root: string;
  host: DetectedHost;
  searchPaths: string[];
  installed: InstallHit[];
  missing: string[];
  requiredMissing: string[];
  applicable: string[];
  skippedHere: string[];
  proposed: ProposedSkill[];
  decision: string;
};
