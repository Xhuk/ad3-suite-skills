import { NextResponse } from "next/server";

import {
  compileTemplate,
  compileTypst,
  isTemplateName,
  renderPreviewPages,
  type TemplateName,
} from "@/lib/pdf-compile";
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

function pageNumber(request: Request): number {
  const raw = new URL(request.url).searchParams.get("page");
  const page = Number(raw ?? "1");
  return Number.isFinite(page) && page >= 1 ? Math.floor(page) : 1;
}

function wantsPng(request: Request): boolean {
  const format = new URL(request.url).searchParams.get("format");
  const accept = request.headers.get("accept") ?? "";
  return format === "png" || accept.includes("image/png");
}

function pdfResponse(pdf: Buffer, folio: string) {
  const filename = `${folio.replace(/[^\w.-]+/g, "-")}.pdf`;
  return new NextResponse(new Uint8Array(pdf), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${filename}"`,
      "Cache-Control": "no-store",
    },
  });
}

function pngResponse(pages: Buffer[], page: number) {
  const image = pages[page - 1];
  if (!image) {
    return NextResponse.json(
      { error: "Esa página no existe.", pages: pages.length },
      { status: 404 }
    );
  }
  return new NextResponse(new Uint8Array(image), {
    headers: {
      "Content-Type": "image/png",
      "X-Pdf-Pages": String(pages.length),
      "Cache-Control": "no-store",
    },
  });
}

function fromTemplate(name: TemplateName, asPng: boolean, page: number) {
  if (asPng) {
    return pngResponse(renderPreviewPages({ template: name }), page);
  }
  return pdfResponse(compileTemplate(name), name);
}

function fromDocument(
  input: unknown,
  asPng: boolean,
  page: number
) {
  const doc = parseDocument(input);
  const source = generateTypst(doc);
  if (asPng) {
    return pngResponse(renderPreviewPages({ source }), page);
  }
  return pdfResponse(compileTypst(source), doc.folio);
}

export function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const template = url.searchParams.get("template");
    const asPng = wantsPng(request);
    const page = pageNumber(request);

    if (isTemplateName(template)) {
      return fromTemplate(template, asPng, page);
    }

    const kind = asKind(url.searchParams.get("kind"));
    if (kind !== "nota" && isTemplateName(kind) && url.searchParams.get("source") !== "form") {
      return fromTemplate(kind, asPng, page);
    }

    return fromDocument(sampleDocument(kind), asPng, page);
  } catch (error) {
    const message = error instanceof Error ? error.message : "No se pudo generar el PDF.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    return fromDocument(body, wantsPng(request), pageNumber(request));
  } catch (error) {
    const message = error instanceof Error ? error.message : "No se pudo generar el PDF.";
    const status = message.startsWith("Falta") ? 400 : 500;
    return NextResponse.json({ error: message }, { status });
  }
}
