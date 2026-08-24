# Plantillas Typst AD3

Propuesta comercial y contrato de servicios con layout editorial. **No uses ReportLab, FPDF ni LaTeX.**

## Compilar

```bash
./scripts/install-typst.sh
npm run pdf
```

Salida: `public/documentos/propuesta-comercial.pdf` y `contrato-servicios.pdf`.

A mano:

```bash
./bin/typst compile --font-path typst/fonts typst/propuesta.typ propuesta.pdf
./bin/typst compile --font-path typst/fonts typst/contrato.typ contrato.pdf
```

## Archivos

| Archivo | Qué es |
| --- | --- |
| `theme.typ` | Letter, Inter, teal VetGroom `#08B1B4`, `#letterhead` `#badge` `#feature-cards` `#note` tablas firmas |
| `propuesta.typ` | Propuesta con tarjetas de valor, alcance, inversión + IVA 16 %, firmas |
| `contrato.typ` | Prestación de servicios, cláusulas, jurisdicción federal |
| `vetgroom-syba.typ` | Propuesta VetGroom → SyBA (mismo tema, montos reales separados) |
| `fonts/` | Inter (SIL OFL). Fallback: Liberation Sans, Arial. No Google Fonts. |

## Mercado por defecto

Estados Unidos Mexicanos, **ámbito federal**. Sin ciudad. Montos en MXN. IVA federal 16 %. Los RFC y las partes de ejemplo son placeholders. Las plantillas no son asesoría legal.

## Kits por proyecto

Cada cliente vive en `typst/kits/<proyecto>/` (`brief.md` + `brand.typ`). VetGroom es un kit, no la skill. Cadena: `ad3-scribe` → `ad3-doc-design` → `ad3-typst`.

## Skills

`skills/ad3-scribe/SKILL.md` · `skills/ad3-doc-design/SKILL.md` · `skills/ad3-typst/SKILL.md`
