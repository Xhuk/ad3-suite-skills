---
name: ad3-doc-design
description: Use when a commercial brief exists and the document must be designed like a landing page or product UI before it becomes a PDF template; when the next project needs its own look, not yesterday’s client. Not for writing copy or compiling Typst.
---

# AD3 · Document design (landing → PDF kit)

Craft satellite. Open after `ad3-scribe`. Next is `ad3-typst`.

This skill designs **a page**. The Typst skill freezes that page as the **project template**. VetGroom is today’s kit. Tomorrow the kit is another product.

## When to open / when not

**Open when**

- `typst/kits/<project>/brief.md` exists (or the scribe just wrote it).
- The PDF must feel like the product UI or a conversion landing, not like a Word memo.
- A new client/project needs its own visual system.

**Do not open when**

- There is no offer, parties, or money yet → `ad3-scribe`.
- Copy and kit already exist and you only compile → `ad3-typst`.
- The job is an app screen, not a document → Emil / `ui-ux-polish`.

## Principle

Design the commercial document the way you would design a landing:

1. **Hero** — who it is for, one promise, status badge.
2. **Value** — three cards. What the buyer gains, not a changelog.
3. **Scope** — in / out. Short.
4. **Pricing** — one-time block, then recurring blocks. Same honesty as a pricing page.
5. **Proof / next step** — demo, guarantee, signatures.

Do not start from a 400-line HTML file or from Chrome print. Sketch the page, then hand sections to Typst components.

## Brand comes from the project

Sample the **current** product. Do not reuse VetGroom teal because the last kit used it.

| Source | Take |
| --- | --- |
| Logo / `theme-color` / active nav | Primary |
| App canvas | Page wash |
| Headings in the UI | Ink / slate |
| Official mark | `mark` image, OFL or owned file in the kit |

Write `typst/kits/<project>/brand.typ`:

```typst
#let kit = (
  name: "Nombre del producto",
  primary: rgb("#HHHHHH"),
  primary-deep: rgb("#HHHHHH"),
  wash: rgb("#HHHHHH"),
  page: rgb("#F4F6F9"),
  ink: rgb("#0F172A"),
  mark: "mark.png",
)
```

Put the mark next to that file (or under `typst/assets/`). If there is no mark, omit it. Do not generate a fake logo.

Headings still follow the scribe: **no hyphens in titles**.

## Map landing → components

| Landing block | Typst |
| --- | --- |
| Top bar / identity | `#letterhead` + optional `mark` |
| Hero headline | `#kicker` + `#lead` |
| Status pill | `#badge` |
| Three benefits | `#feature-cards` |
| Fine print / guarantee | `#note` |
| Price | `#money-table` (once) / `#data-table` (recurring) |
| Close | `#signatures` |

Do not invent a second geometry. `theme.typ` is the engine. The kit only supplies tokens + the landing content file.

## What you hand to Typst

A kit folder, not a novel:

```
typst/kits/<project>/
  KB.md         ← optional but preferred: durable commercial knowledge
  brief.md      ← scribe
  brand.typ     ← this skill
  mark.png      ← optional
```

For VetGroom, agents must read `typst/kits/vetgroom/KB.md` before changing prices or naming.

Then say: compile `typst/<project>-….typ` (or `kits/<project>/propuesta.typ`) as **this project’s template**. Later quotes and contracts in the same project `#import` the same `brand.typ`.

## Common mistakes

| Mistake | Fix |
| --- | --- |
| Baking VetGroom into the skill | The skill has no client palette. The kit does. |
| Dark “studio” look because the catalog app was dark | Match the **product** frontend the buyer already uses. |
| One table that sums VPS + implementation | Pricing page: separate plans. |
| Designing in Playwright and screenshotting | Design in components; Typst paginates. |

## After this skill

Open `ad3-typst`. It turns this kit into the reusable template. Do not open `ui-ux-polish` on a PDF.
