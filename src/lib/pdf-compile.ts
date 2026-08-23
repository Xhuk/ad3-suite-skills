import { execFileSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

export function findTypst(root = process.cwd()): string {
  const candidates = [
    process.env.TYPST_BIN,
    path.join(root, "bin", "typst"),
    "typst",
  ].filter((value): value is string => Boolean(value));

  for (const candidate of candidates) {
    try {
      execFileSync(candidate, ["--version"], { stdio: "pipe" });
      return candidate;
    } catch {
      continue;
    }
  }

  throw new Error(
    "No está Typst. Corre ./scripts/install-typst.sh — no uses ReportLab, FPDF ni LaTeX."
  );
}

export function compileTypst(source: string, root = process.cwd()): Buffer {
  const typst = findTypst(root);
  const fontsDir = path.join(root, "typst", "fonts");
  const theme = path.join(root, "typst", "theme.typ");
  const work = fs.mkdtempSync(path.join(os.tmpdir(), "ad3-pdf-"));

  try {
    fs.copyFileSync(theme, path.join(work, "theme.typ"));
    fs.writeFileSync(path.join(work, "doc.typ"), source, "utf8");
    const output = path.join(work, "doc.pdf");
    execFileSync(
      typst,
      ["compile", "--font-path", fontsDir, path.join(work, "doc.typ"), output],
      { stdio: "pipe" }
    );
    const pdf = fs.readFileSync(output);
    if (!pdf.subarray(0, 5).equals(Buffer.from("%PDF-"))) {
      throw new Error("Typst no produjo un PDF.");
    }
    return pdf;
  } finally {
    fs.rmSync(work, { recursive: true, force: true });
  }
}
