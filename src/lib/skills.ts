import fs from "node:fs";
import path from "node:path";

import { catalog, skillBySlug, type CatalogSkill } from "@/lib/catalog";

const skillsRoot = path.join(process.cwd(), ".cursor", "skills");

export type SkillFile = {
  name: string;
  markdown: string;
};

export type LoadedSkill = {
  meta: CatalogSkill;
  files: SkillFile[];
};

function stripFrontmatter(markdown: string): string {
  if (!markdown.startsWith("---")) {
    return markdown;
  }

  const closing = markdown.indexOf("\n---", 3);
  if (closing === -1) {
    return markdown;
  }

  return markdown.slice(closing + 4).replace(/^\s+/, "");
}

function readSkillDir(slug: string): SkillFile[] {
  const dir = path.join(skillsRoot, slug);
  if (!fs.existsSync(dir)) {
    return [];
  }

  return fs
    .readdirSync(dir)
    .filter((name) => name.endsWith(".md"))
    .sort((left, right) => {
      if (left === "SKILL.md") return -1;
      if (right === "SKILL.md") return 1;
      return left.localeCompare(right);
    })
    .map((name) => {
      const raw = fs.readFileSync(path.join(dir, name), "utf8");
      return {
        name,
        markdown: name === "SKILL.md" ? stripFrontmatter(raw) : raw,
      };
    });
}

export function listSkillSlugs(): string[] {
  return catalog.map((skill) => skill.slug);
}

export function loadSkill(slug: string): LoadedSkill | null {
  const meta = skillBySlug(slug);
  if (!meta) {
    return null;
  }

  const files = readSkillDir(slug);
  if (files.length === 0) {
    return null;
  }

  return { meta, files };
}

