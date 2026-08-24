---
name: ad3-typst
description: Use when writing a commercial proposal, contract, quote, or brochure-style PDF; when an agent reaches for ReportLab, FPDF, LaTeX, HTML-to-PDF, CSS Paged Media, Chrome --print-to-pdf, Puppeteer, or Playwright; or when a 400-line HTML template looks like the document engine. Not for web UI, motion, or legal advice.
---

# AD3 · Typst (editorial documents)

Craft satellite, not a master. Open from `ad3-build` (or `ad3-spec` if the PDF is the deliverable).

Do **not** start an AD3 task here. Do **not** replace legal, tax, or domain skills.

## When to open / when not

**Open when**

- The user wants a commercial proposal, contract, quote, or similar PDF.
- An agent was about to reach for ReportLab, FPDF, WeasyPrint, jsPDF, LaTeX, Chrome `--print-to-pdf`, Puppeteer, or Playwright.
- The “engine” looks like a pasted HTML5 + CSS Paged Media file with Google Fonts.
- You need letter-size layout with feature cards, MXN + IVA tables, and signature blocks.

**Do not open when**

- The job is a web UI, motion, or a Swift package → the other craft skills.
- They only asked for the legal *advice* behind a contract → host counsel, not this file.
- You would start the task here → `ad3-using` first.

## Why this is not an HTML skill

The brochure look (badge, two-column letterhead, 3-column value cards, dark table headers, guarantee callout) lives in `typst/theme.typ`. Agents import those functions. They do not paste a client HTML document into a skill.

HTML-to-PDF fails as a skill because:

| Smell | What actually happens |
| --- | --- |
| A 400-line `propuesta.html` inside SKILL.md | The agent copies VetGroom copy, indigo, and a fake total instead of filling *this* client. |
| Google Fonts (`fonts.googleapis.com`) | Headless Chrome often prints fallback metrics; Inter is already vendored under SIL OFL in `typst/fonts/`. |
| `@page { margin: 0 }` + `.page { min-height: 100vh }` | Pagination is guessed. Typst owns page breaks and “Página N de M”. |
| Playwright / Puppeteer as “instant, no deps” | That *is* a browser. The official Typst CLI in `./bin/typst` is the compiler. |
| Mixing annual VPS into “inversión inicial” | Recurring fees and one-time fees stay in separate tables. |

Keep Inter. Do not switch to Plus Jakarta Sans unless the OFL files sit next to Inter and the theme is updated.

## Tokens

Do not invent a second palette. Import `theme.typ`.

| Token | Value | Use |
| --- | --- | --- |
| Page | `us-letter`, margins `x: 2cm`, `y: 2.5cm` | Never zero-margin CSS pages |
| Face | Inter → Liberation Sans → Arial | Vendored; no network fonts |
| Slate `#0F172A` | Headers, brand, table head | 60 |
| Wash `#F8FAFC` / hair `#E2E8F0` | Cards, callouts, rules | 30 |
| Indigo `#4F46E5` | Badge, H1 bar, card top rule, numbers | 10 |
| Cobalt `#2563EB` | Page rule, callout edge, totals rule | Conversion accent |
| Ink `#1E293B` / muted `#64748B` | Body / meta | |

## Components

Start from `typst/propuesta.typ` or `typst/contrato.typ`. `#import "theme.typ": *`. Fill names, folio, amounts. Do not fork page geometry.

```typst
#letterhead(
  kind: "Propuesta comercial",
  folio: "VG-PROP-2026-001",
  issued: "24 de agosto de 2026",
  brand: "Cliente",
  tagline: "Una línea de oficio, no un slogan vacío",
  issuer: (name: "...", detail: [...]),
  recipient: (name: "...", detail: [...]),
)

#feature-cards((
  (num: "01", title: "Control", body: [Qué gana el receptor. Una frase.]),
  (num: "02", title: "Capacidad", body: [Qué gana. Sin relleno.]),
  (num: "03", title: "Visibilidad", body: [Qué gana.]),
))

#note(title: "Condiciones y garantía")[
  Pago, vigencia, IVA. No mezclar un cargo anual aquí.
]

#money-table(headers, rows, totals)   // one-time only
#data-table(headers, rows, alignments: (left, left, right))
#signatures(left, right, caption: "Aceptación")
```

Rules for those functions:

1. **Letterhead** is identity left, badge + folio + date right, then issuer / recipient. `#badge` is not a second status widget.
2. **Feature cards** are three columns (wraps after three). Top indigo rule + number. They are value, not a price list.
3. **Tables** always go through `#data-table` / `#money-table`. Numeric columns right-aligned. Escape `$` as `\$` so Typst does not enter math mode.
4. **Callout** is `#note`, not a `<div class="callout">`. Optional `title`. Keep it for terms, guarantee, or jurisdiction — not for repeating the kicker.
5. **Signatures** are `#signatures` → two-column grid. `page-break-inside: avoid` is `breakable: false` on the theme blocks; do not hand-roll CSS.
6. **Footer / page numbers** come from `editorial`. Never hardcode “Página 1 de 1”.

## Money (do not collapse lines)

- Default market: **Estados Unidos Mexicanos, ámbito federal**. No city, municipio, or local court unless the user names one. Currency MXN. IVA 16 % unless they say otherwise.
- One-time implementation and recurring fees (VPS, license, support) are **separate tables**. Do not sum an annual line into “inversión total inicial”.
- RFC and party names in samples are placeholders. This pack is editorial, not counsel — say so when the text looks legal.

## Compile

```bash
./scripts/install-typst.sh
npm run pdf
./bin/typst compile --font-path typst/fonts typst/propuesta.typ out.pdf
```

Optional Docker MCP does not replace the CLI. Missing MCP is not a failure of AD3.

## After this skill

Return to `ad3-review` (or `ad3-ship` if the user only wanted the PDF). Attach the compiled file. Do not claim the text is legal advice.
