import { NextResponse } from "next/server";

import { compileTypst } from "@/lib/pdf-compile";
import {
  documentKinds,
  parseDocument,
  sampleDocument,
  type DocumentKind,
} from "@/lib/pdf-document";
import { generateTypst } from "@/lib/pdf-typst";

function asKind(value: string | null): DocumentKind {
  return documentKinds.includes(value as DocumentKind)
    ? (value as DocumentKind)
    : "propuesta";
}

function pdfResponse(pdf: Buffer, folio: string) {
  const filename = `${folio.replace(/[^\w.-]+/g, "-")}.pdf`;
  return new NextResponse(new Uint8Array(pdf), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `inline; filename="${filename}"`,
      "Cache-Control": "no-store",
    },
  });
}

export function GET(request: Request) {
  try {
    const kind = asKind(new URL(request.url).searchParams.get("kind"));
    const doc = parseDocument(sampleDocument(kind));
    return pdfResponse(compileTypst(generateTypst(doc)), doc.folio);
  } catch (error) {
    const message = error instanceof Error ? error.message : "No se pudo generar el PDF.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const doc = parseDocument(body);
    return pdfResponse(compileTypst(generateTypst(doc)), doc.folio);
  } catch (error) {
    const message = error instanceof Error ? error.message : "No se pudo generar el PDF.";
    const status = message.startsWith("Falta") ? 400 : 500;
    return NextResponse.json({ error: message }, { status });
  }
}
