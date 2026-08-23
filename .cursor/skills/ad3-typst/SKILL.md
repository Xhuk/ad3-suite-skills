---
name: ad3-typst
description: Complementary AD3 skill for editorial PDFs. Use when the agent must write a commercial proposal, contract, or similar document. Generate Typst (.typ) only. Never ReportLab, FPDF, or LaTeX. Compile with the official Typst CLI. Default market is federal Mexico if no country is given.
---

# AD3 · Typst (editorial documents)

This is a **craft satellite**, not a master. Open it from `ad3-build` (or `ad3-spec` if the deliverable is the document itself) when the user-facing output is a PDF.

Do **not** start an AD3 task here. Do **not** replace legal, tax, or domain skills.

## When to open / when not

**Open when**

- The user wants a commercial proposal, contract, quote, or similar PDF.
- An agent was about to reach for ReportLab, FPDF, WeasyPrint, jsPDF, or LaTeX.
- You need a letter-size executive layout with tables, IVA, and signature blocks.

**Do not open when**

- The job is a web UI, motion, or a Swift package → the other craft skills.
- They only asked for the legal *advice* behind a contract → host counsel, not this file.
- You would start the task here → `ad3-using` first.

## Hard rules

1. **Typst only.** Emit `.typ` source. Compile with the official CLI. Never ReportLab, FPDF, LaTeX, HTML-to-PDF dumps, or screenshot-as-PDF.
2. **Start from the pack templates.** Copy `typst/propuesta.typ` or `typst/contrato.typ` and `#import "theme.typ": *`. Do not invent a new page geometry.
3. **Page.** `us-letter`, margins `x: 2cm`, `y: 2.5cm`. Fonts: Inter, then Liberation Sans, then Arial. Colors: slate `#0F172A`, accent `#2563EB`, ink `#1E293B`.
4. **Tables.** Always `#table` (via `data-table` / `money-table`) with styled header, hairline stroke, zebra fill. Escape `$` as `\$` so Typst does not enter math mode.
5. **Signatures.** `#signatures` → `#grid(columns: (1fr, 1fr))`.
6. **Market.** If no country or region is given, use the **federal** market of the Estados Unidos Mexicanos. Do not invent a city, municipio, or local court. Currency MXN. IVA at the federal rate (16 % unless the user says otherwise).
7. **This is editorial, not counsel.** Say so in the document when the text looks legal. RFC and party names in the samples are placeholders.
8. **Verify the compiler.** `typst --version` or `./bin/typst --version`. If missing: `./scripts/install-typst.sh`. Then `npm run pdf`.

## Compile

```bash
./scripts/install-typst.sh          # once; official binary, not cargo-required
npm run pdf                         # compiles both samples → public/documentos/
# or
./bin/typst compile --font-path typst/fonts typst/propuesta.typ out.pdf
```

Optional MCP (does not replace the CLI in this pack):

```json
{
  "mcpServers": {
    "typst": {
      "command": "docker",
      "args": ["run", "--rm", "-i", "ghcr.io/johannesbrandenburger/typst-mcp:latest"]
    }
  }
}
```

If Docker MCP is not available, use the CLI. Missing MCP is not a failure of AD3.

## What to write

| Document | Start from | Must include |
| --- | --- | --- |
| Commercial proposal | `typst/propuesta.typ` | Value, scope in/out, MXN + IVA table, timeline, signature grid |
| Services contract | `typst/contrato.typ` | Parties, declarations, clauses, tax table, federal jurisdiction, signatures |

Fill real names, folios, and amounts. Keep the theme functions. Keep the Mexico-federal default unless the user names another market.

## After this skill

Return to `ad3-review` (or `ad3-ship` if the user only wanted the PDF). Attach the compiled file. Do not claim the text is legal advice.
