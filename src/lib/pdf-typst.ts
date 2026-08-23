import {
  formatMxn,
  kindLabel,
  moneyBreakdown,
  type PdfDocument,
  type PdfSection,
} from "./pdf-document";

const CLAUSE_ORDINALS = [
  "Primera",
  "Segunda",
  "Tercera",
  "Cuarta",
  "Quinta",
  "Sexta",
  "Séptima",
  "Octava",
  "Novena",
  "Décima",
  "Décima primera",
  "Décima segunda",
];

export function typstString(value: string): string {
  return `"${value
    .replace(/\\/g, "\\\\")
    .replace(/"/g, '\\"')
    .replace(/\n/g, "\\n")}"`;
}

function textCmd(value: string): string {
  return `#text(${typstString(value)})`;
}

function emitBody(body: string): string {
  const blocks = body
    .split(/\n{2,}/)
    .map((block) => block.trim())
    .filter(Boolean);

  if (blocks.length === 0) {
    return "";
  }

  return blocks
    .map((block) => {
      const lines = block
        .split("\n")
        .map((line) => line.trim())
        .filter(Boolean);
      const bullets = lines.every(
        (line) => line.startsWith("- ") || line.startsWith("* ")
      );
      if (bullets) {
        const items = lines
          .map((line) => line.slice(2).trim())
          .map((item) => `[${textCmd(item)}]`);
        return `#list(\n${items.map((item) => `  ${item}`).join(",\n")}\n)`;
      }
      return `#par[${textCmd(lines.join(" "))}]`;
    })
    .join("\n");
}

function emitSection(section: PdfSection, asClause: boolean, index: number): string {
  const body = emitBody(section.body);
  if (asClause) {
    const ordinal = CLAUSE_ORDINALS[index] ?? `${index + 1}`;
    const heading = section.heading || "Disposición";
    return `#clause(${typstString(ordinal)}, ${typstString(heading)}, [
${body || textCmd("—")}
])`;
  }

  const heading = section.heading
    ? `= ${textCmd(section.heading)}\n`
    : "";
  return `${heading}${body}`;
}

function emitMoney(doc: PdfDocument): string {
  const rows = doc.items.filter((item) => item.concept || item.amount > 0);
  if (rows.length === 0) {
    return "";
  }

  const { subtotal, tax, total } = moneyBreakdown(rows, doc.includeTax);
  const tableRows = rows
    .map((item) => {
      const base = item.amount;
      const iva = doc.includeTax ? base * 0.16 : 0;
      return `    ([${textCmd(item.concept)}], [${textCmd(formatMxn(base))}], [${textCmd(formatMxn(iva))}], [${textCmd(formatMxn(base + iva))}])`;
    })
    .join(",\n");

  const totals = [
    `(label: ${typstString("Subtotal")}, value: ${typstString(formatMxn(subtotal))})`,
  ];
  if (doc.includeTax) {
    totals.push(
      `(label: ${typstString("IVA federal 16 %")}, value: ${typstString(formatMxn(tax))})`
    );
  }
  totals.push(
    `(label: ${typstString("Total")}, value: ${typstString(formatMxn(total))}, strong: true)`
  );

  return `
= ${textCmd("Inversión")}
#money-table(
  ([Concepto], [Importe], [IVA], [Total]),
  (
${tableRows},
  ),
  (
    ${totals.join(",\n    ")},
  ),
)
`;
}

function emitSignatures(doc: PdfDocument): string {
  if (!doc.leftSignName && !doc.rightSignName) {
    return "";
  }

  const left = {
    name: doc.leftSignName || " ",
    role: doc.leftSignRole || " ",
  };
  const right = {
    name: doc.rightSignName || " ",
    role: doc.rightSignRole || " ",
  };

  return `
#signatures(
  (name: ${typstString(left.name)}, role: ${typstString(left.role)}),
  (name: ${typstString(right.name)}, role: ${typstString(right.role)}),
)
`;
}

export function generateTypst(doc: PdfDocument): string {
  const asClause = doc.kind === "contrato";
  const sections = doc.sections
    .map((section, index) => emitSection(section, asClause, index))
    .filter(Boolean)
    .join("\n\n");

  const note = doc.note ? `#note[${textCmd(doc.note)}]\n` : "";
  const intro = doc.intro ? `#lead[${textCmd(doc.intro)}]\n` : "";

  return `#import "theme.typ": *

#show: editorial.with(
  kind: ${typstString(kindLabel[doc.kind])},
  folio: ${typstString(doc.folio)},
  issued: ${typstString(doc.issued)},
  issuer: ${typstString(doc.issuerName)},
)

#letterhead(
  kind: ${typstString(kindLabel[doc.kind])},
  folio: ${typstString(doc.folio)},
  issued: ${typstString(doc.issued)},
  brand: ${typstString(doc.brand)},
  issuer: (name: ${typstString(doc.issuerName)}, detail: ${typstString(doc.issuerDetail)}),
  recipient: (name: ${typstString(doc.recipientName || "—")}, detail: ${typstString(doc.recipientDetail)}),
)

#kicker(${typstString(doc.title)})
${intro}${note}
${doc.kind === "contrato" ? `= ${textCmd("Cláusulas")}\n` : ""}${sections}
${emitMoney(doc)}
${emitSignatures(doc)}
`;
}
