# Design: Propuesta comercial VetGroom → SyBA (opción A + steers)

**Status:** accepted 2026-08-24 (owner + partner). Implement PDF.  
**Naming lock:** primary year-2+ product label is **Continuidad Operativa VetGroom** (not “Anual”, not “licencia”).

## Goal

A client-facing commercial proposal that visually answers:

> Why year 1 is ~\$27,999–\$30,999 and year 2 is Continuidad Operativa \$12,999 per branch?

Story the buyer must leave with:

| Phase | Meaning | Money |
| --- | --- | --- |
| Year 1 | Construction | Pack + infra (Shared default or VPS recommended) |
| Year 2+ | Continuity | Continuidad Operativa VetGroom + infra + optional L1 |
| New branch (on VPS) | Expansion | Continuidad only; no Alta operativa for branches 2–4; migrate Shared → VPS at branch 2 |
| VPS | Growth infra | Up to 4 branches · 8 services (Vet+Groom each) |
| Shared | Entry infra | One branch · two services only |

## Non-goals

- Do not expose internal deploy details (containers, memory caps, how Shared is hosted). Client language only.
- Do not call year-2 money “licencia” in headings or primary labels. Use **Continuidad Operativa VetGroom**.
- Do not discount branch 2/3/4 Continuidad.

## Visual system (existing kit)

- Brand: VetGroom teal `#08B1B4` / deep `#0E7C7E`, wash `#F4F6F9`, ink `#0F172A`
- Mark: `typst/assets/vetgroom-logo.png`
- Components: `#letterhead`, `#badge`, `#kicker`, `#lead`, `#feature-cards`, `#note`, `#money-table`, `#data-table`, `#signatures`
- Titles: no hyphens / middle dots in headings; `hyphenate: false` on kickers and H1/H2
- Market: Estados Unidos Mexicanos, federal; MXN; IVA called out as **+ IVA** on every major price block
- Look: light product UI, not dark studio

## Page map (6 pages)

### Page 1 — Hero + value + demo

**Kicker:** VetGroom para SyBA  
**Headline:** Una plataforma diseñada para acompañar el crecimiento de SyBA

**Lead (no prices):**  
Executive tone — demo built from SyBA processes; validate before investment; operate better today, grow without starting over.

**Value framing:** «Más que una colección de módulos… sistema operativo de la operación diaria.» Feature cards: Operación centralizada · Planeación inteligente · VetBoard operativo.

**Demo:** visible from page 1  
`https://demo.vetgroom.com.mx/demo/syba?demo_access_token=SYBA-2026-30D`

### Page 2 — Year 1 Construction

Explain: year 1 is **not** buying a license. It pays analysis, customization, configuration, training, go-live, VetBoard, reports, operational rules, validation.

**Two offer cards (side by side):**

| | Opción Base · Shared | Opción Recomendada · VPS |
| --- | --- | --- |
| Total year 1 | **\$27,999 + IVA** | **\$30,999 + IVA** |
| Includes | Pack SyBA + Shared year 1 + implementación | Pack SyBA + VPS year 1 + capacity to 4 branches |

**Callout in large type:** La diferencia real entre ambas opciones es de \$3,000 al año — de una operación a infra preparada para cuatro sucursales.

**Internal math (do not spell out as three line items to the client on this page):**  
Shared \$3,000 + Pack \$24,999 = \$27,999 · VPS \$6,000 + Pack \$24,999 = \$30,999.

**Payment (must appear on this page):**  
50 % anticipo · 50 % liberación productiva · vigencia **15 días naturales**.

### Page 3 — Continuidad Operativa VetGroom

**Framing:** Continuidad is \$12,999 + IVA per active branch (always). Not “year 2”.

**Already paid / never again:** Pack SyBA, personalización, VetBoard, reportes, configuración inicial.

**Optional L1:** 20 h \$6,000 + IVA · 40 h \$12,000 + IVA.

### Page 4 — Growth and expansion

**Headline lock:** Las dos primeras sucursales financian la infraestructura dedicada de la organización. Las sucursales tercera y cuarta aprovechan esa capacidad ya instalada.

Client language: infraestructura dedicada / capacidad ya instalada. Never servers, containers, memory.

| Sucursal | Continuidad | Infra VPS | Total |
| --- | --- | --- | --- |
| 1 | \$12,999 | \$3,000 | \$15,999 |
| 2 | \$12,999 | \$3,000 | \$15,999 |
| 3 | \$12,999 | Incluida | \$12,999 |
| 4 | \$12,999 | Incluida | \$12,999 |

Organization example: 1 → \$15,999 · 2 → \$31,998 · 3 → \$44,997 · 4 → \$57,996.

If year 1 was VPS: branches 2–4 add Continuidad only (\$12,999).

### Page 5 — Scope, support, out of scope (short)

**Not included:** native mobile apps · integrations not in scope · WhatsApp Business API costs · Google Maps costs · third-party licenses · bulk historical migrations.

**Future development:** estimated block from \$4,000 + IVA (~up to 8 hours) or quote by scope.

**Support:** with hour pack → priority · without pack → under availability (non-critical ~1 week; critical as soon as available). Always open to dialogue before misunderstandings.

### Page 6 — Next steps + close + signatures

1. Review demo  
2. Validate scope  
3. Choose Shared or VPS  
4. Choose support  
5. Sign scope  
6. Start implementation  

**Close (Nuestro compromiso):**  
Nuestro objetivo no es vender software. Nuestro objetivo es ayudar a SyBA a construir una operación más ordenada, visible y escalable, acompañando el crecimiento de la organización durante los próximos años.

Signatures: VetGroom · SyBA.

## Copy / naming rules

| Avoid | Prefer |
| --- | --- |
| Licencia (primary label) | Continuidad Operativa VetGroom |
| Pack SyBA as year-2 charge | Pack only in year-1 construction |
| Shared \$3k / VPS \$6k as year-1 headline | Bundled \$27,999 / \$30,999 |
| Container / memory / internal hosting | Ambiente propio / dedicado / capacidad de crecimiento |
| Hyphenated titles | Phrases without `-` `–` `—` `·` |

## Implementation notes (after acceptance)

1. Rewrite `typst/kits/vetgroom/brief.md` to match this spec.  
2. Rewrite `typst/vetgroom-syba.typ` to six intentional pages (`pagebreak` where needed).  
3. Recompile PDF + page-1 PNG; update `/documentos` blurb.  
4. Do not change `ad3-scribe` / `ad3-doc-design` skills for this client’s numbers — kit only.

## Open items (none blocking)

- Demo token remains as currently issued.  
- RFC / legal names stay placeholders or omitted.  
- Development block \$4,000 / ~8 h kept as estimate language from partner.

## Acceptance checklist

- [x] User accepts this written spec (this file)
- [x] Then: brief + Typst + PDF
- [x] Spot-check: year-1 Shared \$27,999 · VPS \$30,999 · Continuidad Operativa VetGroom \$12,999 · VPS branches 2–4: Continuidad only (no Alta operativa) · Shared→VPS at branch 2 · IVA on major lines · demo on page 1 · no “licencia” as primary year-2 label
