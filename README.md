# AD3 · PDFs editoriales

Si solo quieres un PDF con buen diseño: no uses ReportLab, FPDF ni LaTeX.

```bash
./scripts/install-typst.sh
npm install
npm run dev
```

Abre http://127.0.0.1:43187 — ves la propuesta comercial y pulsas **Descargar PDF**.

```bash
# La plantilla editorial, sin el formulario
curl -OJ "http://127.0.0.1:43187/api/pdf?template=propuesta"
```

API: `GET /api/pdf?template=propuesta` (PDF) · `GET /api/pdf?template=propuesta&format=png&page=1` (vista previa) · `POST /api/pdf` (JSON del formulario).

---

Pack de skills para agentes (opcional). **No sustituye** Stripe, datos, infra ni ninguna skill del host.

Instalación en cualquier repo:

```bash
npx skills@latest add Xhuk/ad3-suite-skills
```

Repo público: https://github.com/Xhuk/ad3-suite-skills

## Qué es

El suite son **7 skills maestras linkeadas**. El oficio (Emil, `ui-ux-polish`) es satélite: se abre desde build o review si está instalado.

```
ad3-using → ad3-recon → ad3-spec → ad3-plan → ad3-build → ad3-review → ad3-ship
```

| # | Maestra | Hace |
| --- | --- | --- |
| 1 | `ad3-using` | Puerta. Enlaza las otras seis. |
| 2 | `ad3-recon` | Analiza host y verifica skills propuestas. |
| 3 | `ad3-spec` | Spec o propuesta. |
| 4 | `ad3-plan` | Plan ejecutable solo con skills `ready`. |
| 5 | `ad3-build` | Implementa. Puede abrir una skill de oficio. |
| 6 | `ad3-review` | Review. Puede abrir `ui-ux-polish` o `review-animations`. |
| 7 | `ad3-ship` | Verifica y cierra. |

Satélites (no sustituyen la cadena):

- `ad3-craft-layer` — índice de oficio
- Skills de [Emil Kowalski](https://github.com/emilkowalski/skills) (MIT)
- `ui-ux-polish` ([Agent Flywheel](https://github.com/Dicklesworthstone/agent_flywheel_clawdbot_skills_and_integrations), MIT con rider)

AD3 funciona en **cualquier sistema**: web, Expo / React Native, Apple / Swift, o un host desconocido. Si una skill propuesta no está en disco, lo dice y sigue.

## Prerrequisitos

Lee [PREREQUISITOS.md](./PREREQUISITOS.md). En corto:

| Para | Necesitas |
| --- | --- |
| Instalar las skills | Node.js 20+ y npm o pnpm |
| Usarlas en un agente | Cursor, Claude Code, Codex u otro cliente que lea `SKILL.md` |
| Verificar instalación | Node.js 20+ (`npm run verify`) |
| Ver el catálogo local | Node.js 20+, npm, y las deps de este repo |
| Host web | Un proyecto con Next, Vite, React, etc. (opcional) |
| Host Expo | Expo o React Native (opcional) |
| Host Apple | Xcode / Swift Package (opcional) |

No hace falta API key. No hace falta base de datos. No hace falta que el host sea este catálogo.

## Instalar solo las skills (recomendado para otros desarrolladores)

En el repo destino:

```bash
npx skills@latest add Xhuk/ad3-suite-skills
```

O a mano:

```bash
git clone https://github.com/Xhuk/ad3-suite-skills.git
cp -R ad3-suite-skills/skills/* TU_PROYECTO/.cursor/skills/
cp ad3-suite-skills/skills/manifest.json TU_PROYECTO/skills/manifest.json
cp ad3-suite-skills/scripts/ad3-verify.mjs TU_PROYECTO/scripts/
```

Luego verifica:

```bash
node scripts/ad3-verify.mjs . --propose ui-ux-polish,animate,write-swift
```

Rutas que AD3 busca: `.cursor/skills`, `.agents/skills`, `.claude/skills`, `.codex/skills`, `skills`.

## Skills incluidas

| Skill | Host | Para qué |
| --- | --- | --- |
| `ad3-using` … `ad3-ship` | cualquiera | Las 7 maestras. Obligatorias. |
| `ad3-craft-layer` | cualquiera | Índice de oficio (satélite). |
| `emil-design-eng` | web, expo | Oficio de UI y motion |
| `animate` | web | Construir una animación |
| `animate-expo` | expo | Lo mismo en React Native |
| `review-animations` | web, expo | Review estricto de motion |
| `improve-animations` | web, expo | Auditoría y plan |
| `find-animation-opportunities` | web, expo | Qué animar y qué no |
| `animation-vocabulary` | cualquiera | Nombrar un efecto |
| `apple-design` | web, expo, apple | Interfaz fluida estilo Apple |
| `pick-ui-library` | web | Elegir librería, no inventarla |
| `ask-sonner` | web | Toasts Sonner |
| `prototype` | web | Varias variantes de UI |
| `write-swift` | apple | Swift 6 |
| `ui-ux-polish` | web | Review / propuesta de pulido |
| `ad3-scribe` | cualquiera | Escriba comercial. Brief para el cliente. Títulos sin guiones |
| `ad3-doc-design` | cualquiera | Diseña el documento como landing. Kit por proyecto |
| `ad3-typst` | cualquiera | Congela el kit en plantilla Typst. Nunca ReportLab/FPDF/LaTeX/HTML-to-PDF |

## Escenarios (para no confundir skills)

Cada skill tiene ejemplos de **cuándo abrirla** y **cuándo no**. Léelos antes de cargar un segundo archivo.

- Documento: [ESCENARIOS.md](./ESCENARIOS.md)
- Catálogo: `/escenarios` (con la app local)
- API: `GET /api/escenarios`

Confusiones típicas:

| Pensabas abrir | Abre en realidad |
| --- | --- |
| `ad3-craft-layer` al empezar | `ad3-using` |
| `ui-ux-polish` en una UI rota | `ad3-spec` / `ad3-build` |
| `animate` en Expo | `animate-expo` |
| `review-animations` para toda la app | `improve-animations` |
| `ask-sonner` sin haber elegido librería | `pick-ui-library` |
| `write-swift` para un sheet web | `apple-design` |
| `ui-ux-polish` para un PDF | `ad3-scribe` → `ad3-doc-design` → `ad3-typst` |

## Documentos PDF (Typst)

No uses ReportLab, FPDF ni LaTeX. Las plantillas editoriales están en `typst/`.

```bash
./scripts/install-typst.sh
npm run pdf
```

- Propuesta: `typst/propuesta.typ` → `public/documentos/propuesta-comercial.pdf`
- Contrato: `typst/contrato.typ` → `public/documentos/contrato-servicios.pdf`
- Skills: `ad3-scribe` → `ad3-doc-design` → `ad3-typst`
- Kit de ejemplo: `typst/kits/vetgroom/` · **KB:** [typst/kits/vetgroom/KB.md](./typst/kits/vetgroom/KB.md)
- Preview local: http://127.0.0.1:43187/documentos

Página letter, márgenes 2 cm × 2.5 cm, Inter, slate `#0F172A`, teal VetGroom `#08B1B4`. Componentes: badge, letterhead, feature-cards, note. Si no hay país, mercado **México federal** (MXN, IVA 16 %, sin ciudad). Detalle en [typst/README.md](./typst/README.md). MCP opcional (Docker `typst-mcp`); el CLI oficial basta. No uses Chrome ni Playwright para “compilar” el PDF.

## Cómo debe usarlo un agente

1. Resuelve la tarea con las skills del **host** (producto, pagos, datos).
2. Analiza el sistema y verifica instalación: `GET /api/status` o `npm run verify`.
3. Lee `skills/ad3-craft-layer/SKILL.md`.
4. Abre **solo** una skill instalada que aplique a este host.
5. Mejora esa misma respuesta. No escribas un segundo informe de diseño.
6. Si la skill dice que no hay que animar, o que no hay que pulir una UI rota, esa es la mejora.

## Catálogo local (opcional)

Este repo también trae una app Next.js para navegar el pack:

```bash
npm install
npm run dev
```

- Catálogo: http://127.0.0.1:43187
- Escenarios (abre / no abras): http://127.0.0.1:43187/escenarios
- Documentos Typst: http://127.0.0.1:43187/documentos
- Sistema (análisis + verificación): http://127.0.0.1:43187/sistema
- API: `GET /api/skills`, `GET /api/escenarios`, `GET /api/status?propose=ui-ux-polish,animate`

## Publicar en GitHub (repo público)

Repo: https://github.com/Xhuk/ad3-suite-skills

```bash
./scripts/publish-github.sh Xhuk
```

Otros instalan con `npx skills@latest add Xhuk/ad3-suite-skills`.

## Licencias

- Código AD3 (`ad3-craft-layer`, catálogo, verificador): MIT. Ver [LICENSE](./LICENSE).
- Skills de Emil: MIT. Ver [vendor/emilkowalski/LICENSE](./vendor/emilkowalski/LICENSE).
- `ui-ux-polish`: MIT con rider (OpenAI / Anthropic). Ver [vendor/agent-flywheel/LICENSE](./vendor/agent-flywheel/LICENSE). Incluye ese aviso sin modificar.

Detalle en [NOTICE.md](./NOTICE.md).
