import { NextResponse } from "next/server";

import { catalog } from "@/lib/catalog";
import { confusionPairs, scenarios } from "@/lib/scenarios";

export function GET() {
  return NextResponse.json({
    suite: "AD3",
    role: "when-to-open",
    note: "Use these examples so the agent does not mix masters with craft, or sibling craft skills with each other.",
    confusionPairs,
    skills: catalog.map((skill) => ({
      slug: skill.slug,
      kind: skill.kind,
      ...scenarios[skill.slug],
    })),
  });
}
