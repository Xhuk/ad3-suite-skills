import assert from "node:assert/strict";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { compileTypst } from "../src/lib/pdf-compile";
import { parseDocument, sampleDocument } from "../src/lib/pdf-document";
import { generateTypst, typstString } from "../src/lib/pdf-typst";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

assert.equal(typstString('a "b"\n#'), String.raw`"a \"b\"\n#"`);

for (const kind of ["propuesta", "contrato", "nota"] as const) {
  const doc = parseDocument({
    ...sampleDocument(kind),
    title: `${sampleDocument(kind).title} con $ y #`,
  });
  const source = generateTypst(doc);
  assert.match(source, /#import "theme.typ"/);
  const pdf = compileTypst(source, root);
  assert.ok(pdf.length > 2_000, `${kind} PDF too small`);
  console.log(`ok ${kind} ${pdf.length} bytes`);
}
