import { NextResponse } from "next/server";

import { catalog, playbook } from "@/lib/catalog";

export function GET() {
  return NextResponse.json({
    suite: "AD3",
    role: "complementary-craft-layer",
    replaces: [],
    note: "These skills do not replace any AD3 or domain skill. They sit beside the suite so an agent can improve a UI, motion, review, or proposal it was already going to write.",
    source: {
      local: ".cursor/skills",
      upstream: [
        {
          name: "emilkowalski/skills",
          url: "https://github.com/emilkowalski/skills",
          license: "MIT",
        },
        {
          name: "ui-ux-polish",
          url: "https://github.com/Dicklesworthstone/agent_flywheel_clawdbot_skills_and_integrations/blob/main/skills/ui-ux-polish/SKILL.md",
          license: "MIT with OpenAI/Anthropic rider — see vendor/agent-flywheel/LICENSE",
        },
      ],
    },
    skills: catalog,
    playbookCount: playbook.length,
  });
}
