# AD3 · Capa de oficio

Pack complementario para el suite AD3. Incluye las [skills de Emil Kowalski](https://github.com/emilkowalski/skills) (MIT) y una skill propia, `ad3-craft-layer`, que enseña a los agentes **cuándo abrirlas** y **cómo plegarlas en la respuesta que AD3 ya iba a dar**.

No sustituyen Stripe, datos, infra, React Doctor ni ninguna otra skill del suite. Viven al lado, a la mano, para subir el oficio de UI y motion.

## Qué hay aquí

- `.cursor/skills/` — skills descubribles por Cursor, incluida `ad3-craft-layer`
- `vendor/emilkowalski/` — copia upstream con su `LICENSE`
- App Next.js — catálogo, playbook y API para que un agente las consulte

## Cómo correrla

```bash
npm install
npm run dev
```

La app queda en [http://127.0.0.1:43187](http://127.0.0.1:43187).

- `/` catálogo
- `/playbook` qué skill abrir según la respuesta
- `/agents` brief para pegar en un agente
- `GET /api/skills` catálogo JSON
- `GET /api/skills/:slug` markdown completo
- `GET /api/playbook` tabla de situaciones

## Cómo debe usarlas un agente de AD3

1. Resuelve la tarea con las skills del suite que ya correspondan.
2. Si la respuesta incluye UI, motion o elección de componente, lee `.cursor/skills/ad3-craft-layer/SKILL.md`.
3. Abre solo la skill de craft que indique esa tabla.
4. Mejora *esa* respuesta. No escribas un segundo informe de diseño.
5. Si el craft dice que no hay que animar, esa es la mejora.

Instalación upstream, si quieres el pack también en otro repo:

```bash
npx skills@latest add emilkowalski/skills
```

## Créditos

Skills de oficio: [Emil Kowalski](https://github.com/emilkowalski/skills), MIT. Ver `vendor/emilkowalski/LICENSE`.
