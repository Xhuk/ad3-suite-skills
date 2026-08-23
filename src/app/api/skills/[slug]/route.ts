import { NextResponse } from "next/server";

import { scenariosFor } from "@/lib/scenarios";
import { loadSkill } from "@/lib/skills";

type RouteContext = {
  params: Promise<{ slug: string }>;
};

export async function GET(_request: Request, context: RouteContext) {
  const { slug } = await context.params;
  const skill = loadSkill(slug);

  if (!skill) {
    return NextResponse.json(
      {
        error: "Skill not in the AD3 craft layer",
        hint: "GET /api/skills for the catalog. Do not invent a replacement skill.",
      },
      { status: 404 }
    );
  }

  return NextResponse.json({
    suite: "AD3",
    role: "complementary-craft-layer",
    replaces: [],
    meta: skill.meta,
    scenarios: scenariosFor(skill.meta.slug),
    files: skill.files,
  });
}
