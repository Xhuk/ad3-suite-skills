#!/usr/bin/env node
/**
 * Compiles the editorial Typst samples and asserts they are real PDFs.
 * Used as the red/green gate for the document templates.
 */
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const typstDir = path.join(root, "typst");
const fontsDir = path.join(typstDir, "fonts");
const outDir = path.join(root, "public", "documentos");

const documents = [
  { source: "propuesta.typ", output: "propuesta-comercial.pdf" },
  { source: "contrato.typ", output: "contrato-servicios.pdf" },
  { source: "vetgroom-syba.typ", output: "vetgroom-syba.pdf" },
];

function findTypst() {
  const candidates = [
    process.env.TYPST_BIN,
    path.join(root, "bin", "typst"),
    "typst",
  ].filter(Boolean);

  for (const candidate of candidates) {
    try {
      execFileSync(candidate, ["--version"], { stdio: "pipe" });
      return candidate;
    } catch {
      continue;
    }
  }

  throw new Error(
    "Typst CLI not found. Install the official binary (not ReportLab/FPDF/LaTeX). See typst/README.md."
  );
}

function assertPdf(file) {
  if (!fs.existsSync(file)) {
    throw new Error(`Missing PDF: ${file}`);
  }
  const bytes = fs.readFileSync(file);
  if (bytes.length < 2_000) {
    throw new Error(`${file} is too small to be an editorial PDF (${bytes.length} bytes)`);
  }
  if (!bytes.subarray(0, 5).equals(Buffer.from("%PDF-"))) {
    throw new Error(`${file} is not a PDF`);
  }
}

function main() {
  const required = ["theme.typ", "propuesta.typ", "contrato.typ", "vetgroom-syba.typ"];
  for (const name of required) {
    const file = path.join(typstDir, name);
    if (!fs.existsSync(file)) {
      throw new Error(`RED: missing ${path.relative(root, file)}`);
    }
  }

  const typst = findTypst();
  fs.mkdirSync(outDir, { recursive: true });

  for (const document of documents) {
    const source = path.join(typstDir, document.source);
    const output = path.join(outDir, document.output);
    execFileSync(
      typst,
      ["compile", "--font-path", fontsDir, source, output],
      { stdio: "inherit" }
    );
    assertPdf(output);
    console.log(`ok ${path.relative(root, output)}`);
  }
}

try {
  main();
} catch (error) {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
}
