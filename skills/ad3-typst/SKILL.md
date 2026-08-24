---
name: ad3-typst
description: Use when a commercial kit (brief + brand) is ready to become a Typst PDF template for that project; when an agent reaches for ReportLab, FPDF, LaTeX, HTML-to-PDF, Chrome print, or Playwright. Not for writing the offer or inventing the look.
---

# AD3 · Typst (project template)

Craft satellite. Open after `ad3-doc-design` (or after `ad3-scribe` if the kit already exists).

This skill does **not** own the offer and does **not** own the look. It freezes the designed landing as the Typst template for **this** project so every later document shares it.

## When to open / when not

**Open when**

- `typst/kits/<project>/brief.md` and `brand.typ` exist.
- You must emit `.typ` and compile with the official CLI.
- An agent was about to use ReportLab, FPDF, LaTeX, WeasyPrint, jsPDF, Chrome `--print-to-pdf`, or Playwright.

**Do not open when**

- There is no client copy yet → `ad3-scribe`.
- There is no brand kit yet → `ad3-doc-design`.
- The job is a web UI → Emil / polish.
- Legal advice → host counsel.

## Pipeline

```
ad3-scribe          facts + client copy     → kits/<project>/brief.md
ad3-doc-design      landing + tokens        → kits/<project>/brand.typ
ad3-typst           template + compile      → .typ + PDF
```

A new project = a new kit folder. Do not edit this skill to hardcode a client.

## Engine

`#import "theme.typ": *` (or `../../theme.typ` from a kit). Letter, margins `x: 2cm` `y: 2.5cm`, Inter vendored in `typst/fonts/`. Apply the kit’s primary / wash / mark on `#letterhead`, `#badge`, `#feature-cards`, `#note`.

```typst
#letterhead(kind: "Propuesta comercial", folio: "...", issued: "...",
  brand: kit.name, tagline: "...", mark: image(kit.mark, height: 34pt),
  issuer: (...), recipient: (...))
#kicker[...]
#lead[...]
#feature-cards(((num: "01", title: "...", body: [...]), ...))
#note(title: "...")[...]
#money-table(...)   // one-time only
#data-table(...)    // recurring
#signatures(...)
```

Rules:

1. Headings come from the brief. No `-` `–` `—` `·` in titles. Folios may keep hyphens.
2. Escape `$` as `\$`.
3. One-time and recurring money stay in separate tables.
4. Footer / “Página N de M” come from `editorial`. Never hardcode “Página 1 de 1”.
5. Default market if none in the brief: federal Mexico, MXN, IVA 16 %, no city.

## Compile

```bash
./scripts/install-typst.sh
npm run pdf
./bin/typst compile --font-path typst/fonts typst/vetgroom-syba.typ out.pdf
```

Missing Docker MCP is not a failure.

## After this skill

Return to `ad3-review` or `ad3-ship`. Attach the PDF. The kit remains the template for the next document in this project. Do not claim legal advice.
