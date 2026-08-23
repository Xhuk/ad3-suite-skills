import { NextResponse } from "next/server";

import { catalog, playbook } from "@/lib/catalog";

export function GET() {
  return NextResponse.json({
    suite: "AD3",
    role: "complementary-craft-layer",
    replaces: [],
    note: "These skills do not replace any AD3 or domain skill. They sit beside the suite so an agent can improve a UI/motion response it was already going to write.",
    source: {
      upstream: "https://github.com/emilkowalski/skills",
      license: "MIT",
      local: ".cursor/skills",
    },
    skills: catalog,
    playbookCount: playbook.length,
  });
}
