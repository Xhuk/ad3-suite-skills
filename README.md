# AD3 Suite Skills

Pack público de skills para agentes. **No sustituye** Stripe, datos, infra ni ninguna skill del host. AD3 las tiene a la mano para mejorar reviews, propuestas y respuestas de UI.

Instalación en cualquier repo:

```bash
npx skills@latest add TU_USUARIO/ad3-suite-skills
```

Sustituye `TU_USUARIO` por tu usuario de GitHub cuando el repo esté publicado.

## Qué es

- `ad3-craft-layer` — capa del suite: analiza el host, verifica qué hay instalado y decide qué abrir
- Skills de oficio de [Emil Kowalski](https://github.com/emilkowalski/skills) (MIT)
- `ui-ux-polish` para reviews y propuestas cuando la app ya funciona ([Agent Flywheel](https://github.com/Dicklesworthstone/agent_flywheel_clawdbot_skills_and_integrations), MIT con rider)

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
npx skills@latest add TU_USUARIO/ad3-suite-skills
```

O a mano:

```bash
git clone https://github.com/TU_USUARIO/ad3-suite-skills.git
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
| `ad3-craft-layer` | cualquiera | Índice. Obligatoria. |
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
- Sistema (análisis + verificación): http://127.0.0.1:43187/sistema
- API: `GET /api/skills`, `GET /api/status?propose=ui-ux-polish,animate`

## Publicar en GitHub (repo público)

Este entorno no tiene sesión de GitHub. En tu máquina, con `gh` autenticado:

```bash
gh auth login
./scripts/publish-github.sh TU_USUARIO
```

Eso crea `https://github.com/TU_USUARIO/ad3-suite-skills` como **público** y hace push de `main`.

A mano:

```bash
gh repo create ad3-suite-skills --public --source=. --remote=github --push --description "AD3 suite skills — complementary craft layer for any host"
```

Después, otros instalan con `npx skills@latest add TU_USUARIO/ad3-suite-skills`.

## Licencias

- Código AD3 (`ad3-craft-layer`, catálogo, verificador): MIT. Ver [LICENSE](./LICENSE).
- Skills de Emil: MIT. Ver [vendor/emilkowalski/LICENSE](./vendor/emilkowalski/LICENSE).
- `ui-ux-polish`: MIT con rider (OpenAI / Anthropic). Ver [vendor/agent-flywheel/LICENSE](./vendor/agent-flywheel/LICENSE). Incluye ese aviso sin modificar.

Detalle en [NOTICE.md](./NOTICE.md).
