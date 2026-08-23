# Prerrequisitos — AD3 Suite Skills

AD3 no pide un stack único. Estos son los requisitos según lo que quieras hacer.

## Mínimo para usar las skills

- **Node.js 20 o superior** (solo si instalas con `npx skills` o corres el verificador)
- Un cliente de agente que lea `SKILL.md`:
  - [Cursor](https://cursor.com) (`.cursor/skills`)
  - Claude Code (`.claude/skills` o `.agents/skills`)
  - Codex (`.codex/skills`)
  - Cualquier otro que busque `skills/<nombre>/SKILL.md`
- Un repo de trabajo. Puede ser web, Expo, Swift, o vacío.

No se necesita:

- Cuenta de Stripe, Firebase, Azure, etc. (esas skills del host, si las hay, siguen siendo del host)
- Base de datos
- Variables de entorno
- GPU
- Este catálogo Next.js

## Para instalar el pack

```bash
node -v   # v20+
npx skills@latest add Xhuk/ad3-suite-skills
```

Si `npx skills` no está disponible, copia a mano la carpeta `skills/` a `.cursor/skills/` del proyecto destino.

## Para verificar si una skill propuesta está instalada

- Node.js 20+
- El archivo `skills/manifest.json`
- El script `scripts/ad3-verify.mjs`

```bash
node scripts/ad3-verify.mjs . --propose ui-ux-polish,animate
```

Código de salida `1` si falta `ad3-craft-layer` o si alguna skill propuesta no está lista (ausente, desconocida o de otro host).

## Para el catálogo (esta app)

- Node.js 20+
- npm 10+
- `npm install` en la raíz de este repo

```bash
npm install
npm run dev      # http://127.0.0.1:43187
npm run verify
npm run lint
```

## Según el host del proyecto destino

AD3 **detecta** el sistema. No tienes que instalar todo el pack.

| Si el repo destino es… | AD3 usará sobre todo… | Puedes omitir |
| --- | --- | --- |
| Next, Vite, React, Nuxt | `emil-design-eng`, `animate`, `ui-ux-polish`, librerías | `animate-expo`, `write-swift` |
| Expo / React Native | `animate-expo`, `emil-design-eng` | `ask-sonner`, `write-swift` |
| Swift / Xcode | `write-swift`, `apple-design` | `animate`, `ask-sonner` |
| Desconocido | Solo skills `any` + las que estén instaladas | Nada: AD3 no asume stack |

`ad3-craft-layer` es la única requerida en todos los hosts.

## Red y licencias

- Clonar o instalar desde GitHub necesita red la primera vez.
- Redistribuir `ui-ux-polish` implica el rider de `vendor/agent-flywheel/LICENSE` (no otorga derechos a OpenAI ni Anthropic como entidades restringidas). Lee ese archivo antes de publicarlo en un entorno corporativo.

## Publicar este repo

- Cuenta de GitHub
- [GitHub CLI](https://cli.github.com/) (`gh`) autenticado
- Git

```bash
gh auth login
./scripts/publish-github.sh Xhuk
```
