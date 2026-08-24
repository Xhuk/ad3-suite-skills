# Plan: SyBA proposal PDF (spec 2026-08-24)

## Goal

Ship the 6-page Typst PDF from the approved design, with partner rename **Continuidad Operativa VetGroom**.

## Files

| File | Role |
| --- | --- |
| `docs/superpowers/specs/2026-08-24-vetgroom-syba-proposal-design.md` | Mark accepted; rename Continuidad |
| `typst/kits/vetgroom/brief.md` | Commercial truth for the kit |
| `typst/theme.typ` | Add `#plan-cards` for Shared vs VPS year-1 offers |
| `typst/vetgroom-syba.typ` | Six-page document |
| `public/documentos/vetgroom-syba.pdf` (+ `-p1.png`) | Compile output |
| `src/app/documentos/page.tsx` | Blurb matches model |

## Tasks

1. Update design spec status + naming.
2. Rewrite brief.
3. Add `#plan-cards` (title, price, bullets, optional badge).
4. Write `vetgroom-syba.typ` with explicit `pagebreak` after pages 1–5.
5. `npm run pdf`, spot-check page count ≥ 6, commit, push.

## Verify

- Shared \$27,999 · VPS \$30,999 · diferencia \$3,000
- Continuidad Operativa VetGroom \$12,999 (not “licencia”)
- VPS branches 2–4: Continuidad only (no Alta operativa) · Shared→VPS at branch 2 · IVA on majors · demo page 1
