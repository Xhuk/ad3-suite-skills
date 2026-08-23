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
| `theme.typ` | Página letter, márgenes 2 cm × 2.5 cm, Inter, tablas, firmas |
| `propuesta.typ` | Propuesta con valor, alcance, inversión + IVA 16 %, calendario, firmas |
| `contrato.typ` | Prestación de servicios, cláusulas, jurisdicción federal |
| `fonts/` | Inter (SIL OFL). Fallback: Liberation Sans, Arial |

## Mercado por defecto

Estados Unidos Mexicanos, **ámbito federal**. Sin ciudad. Montos en MXN. IVA federal 16 %. Los RFC y las partes de ejemplo son placeholders. Las plantillas no son asesoría legal.

## Skill del agente

`skills/ad3-typst/SKILL.md`
