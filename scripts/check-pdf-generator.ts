import assert from "node:assert/strict";
import path from "node:path";
import { fileURLToPath } from "node:url";

import {
  compileTemplate,
  compileTypst,
  renderPreviewPages,
} from "../src/lib/pdf-compile";
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

const editorial = compileTemplate("propuesta", root);
assert.ok(editorial.subarray(0, 5).equals(Buffer.from("%PDF-")));
assert.ok(editorial.length > 20_000, "editorial proposal too small");
console.log(`ok template propuesta ${editorial.length} bytes`);

const pages = renderPreviewPages({ template: "propuesta" }, root);
assert.ok(pages.length >= 2, "proposal template should be more than one page");
assert.ok(pages[0].subarray(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a])));
console.log(`ok preview propuesta ${pages.length} pages`);
