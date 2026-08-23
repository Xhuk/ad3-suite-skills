import { NextResponse } from "next/server";

import { catalogCoverage, inspectSuite } from "@/lib/verify";

function parseProposed(url: URL): string[] {
  const raw = url.searchParams.get("propose") ?? url.searchParams.get("skills") ?? "";
  return raw
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

export function GET(request: Request) {
  const url = new URL(request.url);
  const proposed = parseProposed(url);
  const status = inspectSuite(process.cwd(), proposed);
  const coverage = catalogCoverage();

  return NextResponse.json({
    ...status,
    coverage,
    endpoints: {
      status: "/api/status",
      propose: "/api/status?propose=ui-ux-polish,animate,write-swift",
    },
  });
}
