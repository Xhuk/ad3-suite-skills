import { execFileSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

export const templateNames = ["propuesta", "contrato"] as const;

export type TemplateName = (typeof templateNames)[number];

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

function runTypst(
  typst: string,
  fontsDir: string,
  source: string,
  output: string
) {
  execFileSync(typst, ["compile", "--font-path", fontsDir, source, output], {
    stdio: "pipe",
  });
}

function assertPdf(file: string): Buffer {
  const pdf = fs.readFileSync(file);
  if (!pdf.subarray(0, 5).equals(Buffer.from("%PDF-"))) {
    throw new Error("Typst no produjo un PDF.");
  }
  return pdf;
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
    runTypst(typst, fontsDir, path.join(work, "doc.typ"), output);
    return assertPdf(output);
  } finally {
    fs.rmSync(work, { recursive: true, force: true });
  }
}

export function compileTemplate(
  name: TemplateName,
  root = process.cwd()
): Buffer {
  const typst = findTypst(root);
  const fontsDir = path.join(root, "typst", "fonts");
  const source = path.join(root, "typst", `${name}.typ`);
  if (!fs.existsSync(source)) {
    throw new Error(`No está la plantilla typst/${name}.typ`);
  }
  const work = fs.mkdtempSync(path.join(os.tmpdir(), "ad3-tpl-"));
  try {
    const output = path.join(work, `${name}.pdf`);
    runTypst(typst, fontsDir, source, output);
    return assertPdf(output);
  } finally {
    fs.rmSync(work, { recursive: true, force: true });
  }
}

export function renderPreviewPages(
  target: { source: string } | { template: TemplateName },
  root = process.cwd()
): Buffer[] {
  const typst = findTypst(root);
  const fontsDir = path.join(root, "typst", "fonts");
  const work = fs.mkdtempSync(path.join(os.tmpdir(), "ad3-png-"));

  try {
    let source = "";
    if ("template" in target) {
      source = path.join(root, "typst", `${target.template}.typ`);
    } else {
      fs.copyFileSync(
        path.join(root, "typst", "theme.typ"),
        path.join(work, "theme.typ")
      );
      source = path.join(work, "doc.typ");
      fs.writeFileSync(source, target.source, "utf8");
    }

    const pattern = path.join(work, "page-{p}.png");
    execFileSync(
      typst,
      ["compile", "--font-path", fontsDir, "--format", "png", "--ppi", "128", source, pattern],
      { stdio: "pipe" }
    );

    return fs
      .readdirSync(work)
      .filter((name) => name.startsWith("page-") && name.endsWith(".png"))
      .sort()
      .map((name) => fs.readFileSync(path.join(work, name)));
  } finally {
    fs.rmSync(work, { recursive: true, force: true });
  }
}

export function isTemplateName(value: string | null): value is TemplateName {
  return templateNames.includes(value as TemplateName);
}
