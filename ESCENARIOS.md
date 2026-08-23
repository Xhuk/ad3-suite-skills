# Escenarios: cuándo abrir cada skill

Para que un agente **no mezcle** maestras con oficio, ni skills hermanas entre sí.

Fuente canónica en código: `src/lib/scenarios.ts`.  
Catálogo: `/escenarios` · API: `GET /api/escenarios`.

Regla corta:

1. Una tarea nueva entra por `ad3-using` → `ad3-recon`.
2. Luego **una** maestra: spec, plan, build, review o ship.
3. El oficio (Emil, `ui-ux-polish`) solo se abre desde spec/build/review si está `ready`.
4. Si dudabas entre dos slugs, mira la tabla de confusiones y el “no abras” de cada skill.

## Si pensabas abrir A, abre B

| Pensabas abrir | Abre en realidad | Porque |
| --- | --- | --- |
| `ad3-craft-layer` | `ad3-using` | El índice de oficio no arranca una tarea. La puerta es using. |
| `ad3-build` | `ad3-plan` | Sin plan no hay implementación. |
| `ad3-plan` | `ad3-spec` | Sin objetivo escrito el plan inventa alcance. |
| `ui-ux-polish` | `ad3-spec` | Polish no rediseña ni parte de una UI rota. |
| `ui-ux-polish` | `ad3-review` | El review lo hace la maestra. Polish se pliega si la app ya funciona. |
| `animate-expo` | `animate` | El host es web. |
| `animate` | `animate-expo` | El host es Expo / React Native. |
| `review-animations` | `improve-animations` | Pedían auditoría de toda la app, no un diff. |
| `improve-animations` | `review-animations` | Hay un PR concreto con motion. |
| `find-animation-opportunities` | `improve-animations` | Ya hay motion malo; find busca sitios nuevos. |
| `animate` | `find-animation-opportunities` | Preguntaron qué se podría mover, no el código. |
| `animate` | `animation-vocabulary` | Todavía no hay nombre. |
| `ask-sonner` | `pick-ui-library` | Aún no eligieron librería. |
| `write-swift` | `apple-design` | Quieren un sheet web estilo Apple. |
| `apple-design` | `write-swift` | El host es Swift de lógica. |
| `prototype` | `ad3-build` | Ya eligieron dirección. |
| `emil-design-eng` | `animate` | Pidieron una animación concreta. |
| `ui-ux-polish` | `ad3-typst` | El entregable es un PDF, no el pulido de una UI. |

## Maestras (obligatorias)

### `ad3-using` — puerta (1/7)

Ábrela cuando:

- Empieza un chat nuevo: “monta el checkout” o “revisa este PR”.
- No sabes por qué eslabón entrar: using nombra el siguiente.
- Otro agente te pasó una tarea AD3 y no ha abierto ninguna maestra.

No la abras cuando:

- Ya corriste using y recon en esta misma conversación.
- Solo quieres consultar una skill de oficio suelta (abre `ad3-craft-layer`).

### `ad3-recon` — host + instalación (2/7)

Ábrela cuando:

- El usuario propone “usa ui-ux-polish y write-swift” y hay que ver si existen.
- No está claro si el repo es Next, Expo o Swift.
- Antes de escribir spec o código: ¿qué skills están `ready`?

No la abras cuando:

- El host y las skills ya se verificaron en este chat.
- Quieres implementar ya: eso es `ad3-build`, después de recon.

### `ad3-spec` — objetivo escrito (3/7)

Ábrela cuando:

- “Propón cómo debería verse el dashboard” — aún no hay código.
- Hay que acotar in/out de scope antes de planear un feature.
- Propuesta de look & feel sobre una app que ya funciona.

No la abras cuando:

- La spec ya existe y está acordada → `ad3-plan`.
- Pidieron solo un review de un PR → `ad3-review`.

### `ad3-plan` — pasos con done-when (4/7)

Ábrela cuando:

- Hay spec y hay que partirla en pasos con done-when.
- Varias skills `ready`: hay que ordenar cuáles se usan en build vs review.
- El usuario pidió “hazme el plan, no implementes aún”.

No la abras cuando:

- No hay spec ni objetivo escrito → `ad3-spec` primero.
- El plan ya está y pidieron código → `ad3-build`.

### `ad3-build` — implementar (5/7)

Ábrela cuando:

- El plan está listo: hay que escribir el componente o el endpoint.
- Un review rechazó el cambio y hay que aplicar los fixes.
- Hay que animar un modal en web: build + `animate` (si está `ready`).

No la abras cuando:

- Todavía no hay plan → `ad3-plan`.
- Solo pidieron opinión visual → `ad3-review` o `ad3-spec`.

### `ad3-review` — veredicto (6/7)

Ábrela cuando:

- “Revisa este PR” o el diff que acaba de escribir `ad3-build`.
- La UI ya funciona y piden un pase de pulido (`ui-ux-polish` si está `ready`).
- Hay que criticar motion: ease-in, `scale(0)`, `transition: all`.

No la abras cuando:

- La app está rota o sin estilos base → no abras `ui-ux-polish`; vuelve a spec/build.
- Todavía no hay diff ni propuesta → recon + spec.

### `ad3-ship` — cierre (7/7)

Ábrela cuando:

- El review aprobó y hay que cerrar con evidencia.
- “¿Están instaladas las 7 maestras?” — solo verificar.
- Hay que listar qué skills se usaron y cuáles se saltaron.

No la abras cuando:

- Aún no hay veredicto de review en un cambio grande.
- Quieres empezar otra tarea: vuelve a `ad3-using`.

## Oficio (satélites)

### `ad3-craft-layer` — índice, no la puerta

Ábrela cuando:

- Estás en build o review y no sabes qué skill de Emil abrir.
- Hay UI/motion y hace falta el índice de oficio, no la cadena.

No la abras cuando:

- Arrancar una tarea AD3 → `ad3-using`, no esta.
- El host no tiene UI (script, API pura) y nadie pidió craft.

### `emil-design-eng` — gusto, no una animación suelta

Ábrela cuando:

- “Que se sienta caro”: sombras vs bordes, detalles, veto de motion.
- Un componente se ve genérico y hay que subir el oficio.

No la abras cuando:

- Hay que implementar UNA animación concreta → `animate`.
- Solo quieren el nombre de un efecto → `animation-vocabulary`.

### `animate` — una transición web

Ábrela cuando:

- “Anima el dropdown / el modal / el toast” en web.
- Hay que elegir curva, duración y si ni siquiera debe animar.

No la abras cuando:

- Es Expo/RN → `animate-expo`.
- Piden auditar toda la app → `improve-animations`.
- Hace falta un toast completo → `pick-ui-library` / `ask-sonner`.

### `animate-expo` — lo mismo en React Native

Ábrela cuando:

- Sheet, gesto o transición de pantalla en Expo.
- La animación tartamudea en dispositivo y corre en el hilo JS.

No la abras cuando:

- El proyecto es web → `animate`.
- No hay app nativa en el host (recon lo marca `not-applicable`).

### `review-animations` — un diff de motion

Ábrela cuando:

- Un PR toca CSS/Motion y hay que marcar fallos concretos.
- Alguien usó ease-in al entrar o `scale(0)`.

No la abras cuando:

- No hay motion en el diff → review de host / `ad3-review` sin esta.
- Quieren un plan de toda la app → `improve-animations`.

### `improve-animations` — auditoría + roadmap

Ábrela cuando:

- “Audita el motion del producto y dame un roadmap”.
- Hay muchas animaciones y hay que priorizar fixes.

No la abras cuando:

- Un solo componente → `review-animations` o `animate`.
- Piden que implementes ya → eso es `ad3-build` después del plan.

### `find-animation-opportunities` — qué mover (y qué no)

Ábrela cuando:

- “¿Qué se podría animar aquí?” sin pedir código.
- Quieren que se sienta más vivo, y hay que decir también qué NO mover.

No la abras cuando:

- Ya hay animaciones malas que hay que arreglar → `improve-animations`.
- Pidieron implementar una transición concreta → `animate`.

### `animation-vocabulary` — nombrar el efecto

Ábrela cuando:

- “Esa cosa elástica cuando abres el menú… ¿cómo se llama?”
- Hay que dejar la palabra justa para el siguiente prompt.

No la abras cuando:

- Ya tienen el nombre y quieren el código → `animate`.
- Es un review de un diff → `review-animations`.

### `apple-design` — sheet / spring en web

Ábrela cuando:

- Piden un sheet o drag “como iOS” en web.
- Materiales, springs, profundidad, no copiar pixels de Apple.

No la abras cuando:

- No hay gesto ni sheet: es un form web normal → `emil-design-eng`.
- Es una app Swift nativa de lógica → `write-swift`.

### `pick-ui-library` — qué paquete usar

Ábrela cuando:

- Hace falta un toast, drawer, command menu o chart y no hay que inventarlo.
- El agente iba a hand-rollear un dropdown sin focus management.

No la abras cuando:

- El repo ya tiene el componente en su design system.
- El problema es solo Sonner ya instalado → `ask-sonner`.

### `ask-sonner` — toasts Sonner

Ábrela cuando:

- El toast no aparece, aparece dos veces o queda detrás del modal.
- Hay que cablear `<Toaster />` o un promise toast.

No la abras cuando:

- Aún no decidieron la librería → `pick-ui-library`.
- No hay toasts en el alcance.

### `prototype` — varias direcciones

Ábrela cuando:

- “Muéstrame 3 direcciones distintas de este header”.
- Hay que elegir con los ojos, no de memoria.

No la abras cuando:

- Ya eligieron una dirección → `ad3-build`.
- Piden un único componente de producción ahora.

### `write-swift` — Swift 6

Ábrela cuando:

- Escribir o revisar Swift 6 (actores, testing, value types).
- Un error de concurrencia o un retain cycle en un paquete Apple.

No la abras cuando:

- El host es Next/Vite (recon: `not-applicable`).
- Solo quieren un sheet web estilo Apple → `apple-design`.

### `ui-ux-polish` — pulido de una app que ya funciona

Ábrela cuando:

- La app ya funciona y se ve decente: piden un review o propuesta de pulido.
- Hay que pasar desktop y mobile por separado, varias iteraciones.

No la abras cuando:

- La UI está rota, sin design system, o piden un rediseño desde cero.
- Es un bug o un endpoint: eso no es polish.
- El entregable es un PDF de propuesta o contrato → `ad3-typst`.

### `ad3-typst` — PDF editorial

Ábrela cuando:

- “Ármame la propuesta comercial / el contrato en PDF”.
- El agente iba a importar ReportLab, FPDF o un preámbulo LaTeX.
- Hay que desglosar MXN + IVA federal y dejar bloques de firma.

No la abras cuando:

- El trabajo es una UI web o motion → oficio de Emil / polish.
- Pidieron asesoría legal, no el diseño del documento.
- Arrancar la tarea AD3 → `ad3-using`, no esta skill.

Las copias upstream de Emil y Flywheel en `vendor/` no se modifican. Los escenarios de esas skills viven aquí, en el catálogo y en la API.
