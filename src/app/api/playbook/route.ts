import { NextResponse } from "next/server";

import { playbook } from "@/lib/catalog";

export function GET() {
  return NextResponse.json({
    suite: "AD3",
    role: "complementary-craft-layer",
    replaces: [],
    playbook,
  });
}
