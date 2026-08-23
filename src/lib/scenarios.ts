export type SkillScenarios = {
  use: string[];
  skip: string[];
};

export type ConfusionPair = {
  mistaken: string;
  actual: string;
  why: string;
};

/** Pares que un agente suele mezclar. El slug de `actual` es el que debe abrir. */
export const confusionPairs: ConfusionPair[] = [
  {
    mistaken: "ad3-craft-layer",
    actual: "ad3-using",
    why: "El índice de oficio no arranca una tarea. La puerta del suite es using.",
  },
  {
    mistaken: "ad3-build",
    actual: "ad3-plan",
    why: "Sin plan no hay implementación. Build espera un done-when.",
  },
  {
    mistaken: "ad3-plan",
    actual: "ad3-spec",
    why: "Sin objetivo escrito el plan inventa alcance. Spec primero.",
  },
  {
    mistaken: "ui-ux-polish",
    actual: "ad3-spec",
    why: "Polish no rediseña ni parte de una UI rota. Eso es spec (o build).",
  },
  {
    mistaken: "ui-ux-polish",
    actual: "ad3-review",
    why: "El review de producto lo hace la maestra. Polish es un pase plegado si la app ya funciona.",
  },
  {
    mistaken: "animate-expo",
    actual: "animate",
    why: "El host es web. animate-expo es solo Expo / React Native.",
  },
  {
    mistaken: "animate",
    actual: "animate-expo",
    why: "El host es Expo / RN. No portes CSS a ciegas.",
  },
  {
    mistaken: "review-animations",
    actual: "improve-animations",
    why: "Un review de un diff no es la auditoría de toda la app.",
  },
  {
    mistaken: "improve-animations",
    actual: "review-animations",
    why: "Hay un PR concreto con motion. No abras el roadmap entero.",
  },
  {
    mistaken: "find-animation-opportunities",
    actual: "improve-animations",
    why: "Ya hay motion malo. Find busca sitios nuevos; improve arregla lo existente.",
  },
  {
    mistaken: "animate",
    actual: "find-animation-opportunities",
    why: "Preguntaron qué se podría mover, no el código de una transición.",
  },
  {
    mistaken: "animate",
    actual: "animation-vocabulary",
    why: "Todavía no hay nombre. Primero la palabra, luego el CSS.",
  },
  {
    mistaken: "ask-sonner",
    actual: "pick-ui-library",
    why: "Aún no eligieron librería. Sonner es el how, no el which.",
  },
  {
    mistaken: "write-swift",
    actual: "apple-design",
    why: "Quieren un sheet web estilo Apple, no un paquete Swift.",
  },
  {
    mistaken: "apple-design",
    actual: "write-swift",
    why: "El host es Apple / Swift de lógica. apple-design no escribe Swift 6.",
  },
  {
    mistaken: "prototype",
    actual: "ad3-build",
    why: "Ya eligieron dirección. Prototype explora; no produce el componente final.",
  },
  {
    mistaken: "emil-design-eng",
    actual: "animate",
    why: "Pidieron UNA animación concreta, no la filosofía de oficio.",
  },
];


export const scenarios: Record<string, SkillScenarios> = {
  "ad3-using": {
    use: [
      "Empieza un chat nuevo: “monta el checkout” o “revisa este PR”.",
      "No sabes por qué eslabón entrar: using nombra el siguiente.",
      "Otro agente te pasó una tarea AD3 y no ha abierto ninguna maestra.",
    ],
    skip: [
      "Ya corriste using y recon en esta misma conversación.",
      "Solo quieres consultar una skill de oficio suelta (abre ad3-craft-layer).",
    ],
  },
  "ad3-recon": {
    use: [
      "El usuario propone “usa ui-ux-polish y write-swift” y hay que ver si existen.",
      "No está claro si el repo es Next, Expo o Swift.",
      "Antes de escribir spec o código: ¿qué skills están ready?",
    ],
    skip: [
      "El host y las skills ya se verificaron en este chat.",
      "Quieres implementar ya: eso es ad3-build, después de recon.",
    ],
  },
  "ad3-spec": {
    use: [
      "“Propón cómo debería verse el dashboard” — aún no hay código.",
      "Hay que acotar in/out de scope antes de planear un feature.",
      "Propuesta de look & feel sobre una app que ya funciona.",
    ],
    skip: [
      "La spec ya existe y está acordada → ad3-plan.",
      "Pidieron solo un review de un PR → ad3-review.",
    ],
  },
  "ad3-plan": {
    use: [
      "Hay spec y hay que partirla en pasos con done-when.",
      "Varias skills ready: hay que ordenar cuáles se usan en build vs review.",
      "El usuario pidió “hazme el plan, no implementes aún”.",
    ],
    skip: [
      "No hay spec ni objetivo escrito → ad3-spec primero.",
      "El plan ya está y pidieron código → ad3-build.",
    ],
  },
  "ad3-build": {
    use: [
      "El plan está listo: hay que escribir el componente o el endpoint.",
      "Un review rechazó el cambio y hay que aplicar los fixes.",
      "Hay que animar un modal en web: build + animate (si está ready).",
    ],
    skip: [
      "Todavía no hay plan → ad3-plan.",
      "Solo pidieron opinión visual → ad3-review o ad3-spec.",
    ],
  },
  "ad3-review": {
    use: [
      "“Revisa este PR” o el diff que acaba de escribir ad3-build.",
      "La UI ya funciona y piden un pase de pulido (ui-ux-polish si está ready).",
      "Hay que criticar motion: ease-in, scale(0), transition: all.",
    ],
    skip: [
      "La app está rota o sin estilos base → no abras ui-ux-polish; vuelve a spec/build.",
      "Todavía no hay diff ni propuesta → recon + spec.",
    ],
  },
  "ad3-ship": {
    use: [
      "El review aprobó y hay que cerrar con evidencia.",
      "“¿Están instaladas las 7 maestras?” — solo verificar.",
      "Hay que listar qué skills se usaron y cuáles se saltaron.",
    ],
    skip: [
      "Aún no hay veredicto de review en un cambio grande.",
      "Quieres empezar otra tarea: vuelve a ad3-using.",
    ],
  },
  "ad3-craft-layer": {
    use: [
      "Estás en build o review y no sabes qué skill de Emil abrir.",
      "Hay UI/motion y hace falta el índice de oficio, no la cadena.",
    ],
    skip: [
      "Arrancar una tarea AD3 → ad3-using, no esta.",
      "El host no tiene UI (script, API pura) y nadie pidió craft.",
    ],
  },
  "emil-design-eng": {
    use: [
      "“Que se sienta caro”: sombras vs bordes, detalles, veto de motion.",
      "Un componente se ve genérico y hay que subir el oficio.",
    ],
    skip: [
      "Hay que implementar UNA animación concreta → animate.",
      "Solo quieren el nombre de un efecto → animation-vocabulary.",
    ],
  },
  animate: {
    use: [
      "“Anima el dropdown / el modal / el toast” en web.",
      "Hay que elegir curva, duración y si ni siquiera debe animar.",
    ],
    skip: [
      "Es Expo/RN → animate-expo.",
      "Piden auditar toda la app → improve-animations.",
      "Hace falta un toast completo → pick-ui-library / ask-sonner.",
    ],
  },
  "animate-expo": {
    use: [
      "Sheet, gesto o transición de pantalla en Expo.",
      "La animación tartamudea en dispositivo y corre en el hilo JS.",
    ],
    skip: [
      "El proyecto es web → animate.",
      "No hay app nativa en el host (recon lo marca not-applicable).",
    ],
  },
  "review-animations": {
    use: [
      "Un PR toca CSS/Motion y hay que marcar fallos concretos.",
      "Alguien usó ease-in al entrar o scale(0).",
    ],
    skip: [
      "No hay motion en el diff → review de host / ad3-review sin esta.",
      "Quieren un plan de toda la app → improve-animations.",
    ],
  },
  "improve-animations": {
    use: [
      "“Audita el motion del producto y dame un roadmap”.",
      "Hay muchas animaciones y hay que priorizar fixes.",
    ],
    skip: [
      "Un solo componente → review-animations o animate.",
      "Piden que implementes ya → eso es ad3-build después del plan.",
    ],
  },
  "find-animation-opportunities": {
    use: [
      "“¿Qué se podría animar aquí?” sin pedir código.",
      "Quieren que se sienta más vivo, y hay que decir también qué NO mover.",
    ],
    skip: [
      "Ya hay animaciones malas que hay que arreglar → improve-animations.",
      "Pidieron implementar una transición concreta → animate.",
    ],
  },
  "animation-vocabulary": {
    use: [
      "“Esa cosa elástica cuando abres el menú… ¿cómo se llama?”",
      "Hay que dejar la palabra justa para el siguiente prompt.",
    ],
    skip: [
      "Ya tienen el nombre y quieren el código → animate.",
      "Es un review de un diff → review-animations.",
    ],
  },
  "apple-design": {
    use: [
      "Piden un sheet o drag “como iOS” en web.",
      "Materiales, springs, profundidad, no copiar pixels de Apple.",
    ],
    skip: [
      "No hay gesto ni sheet: es un form web normal → emil-design-eng.",
      "Es una app Swift nativa de lógica → write-swift.",
    ],
  },
  "pick-ui-library": {
    use: [
      "Hace falta un toast, drawer, command menu o chart y no hay que inventarlo.",
      "El agente iba a hand-rollear un dropdown sin focus management.",
    ],
    skip: [
      "El repo ya tiene el componente en su design system.",
      "El problema es solo Sonner ya instalado → ask-sonner.",
    ],
  },
  "ask-sonner": {
    use: [
      "El toast no aparece, aparece dos veces o queda detrás del modal.",
      "Hay que cablear <Toaster /> o un promise toast.",
    ],
    skip: [
      "Aún no decidieron la librería → pick-ui-library.",
      "No hay toasts en el alcance.",
    ],
  },
  prototype: {
    use: [
      "“Muéstrame 3 direcciones distintas de este header”.",
      "Hay que elegir con los ojos, no de memoria.",
    ],
    skip: [
      "Ya eligieron una dirección → ad3-build.",
      "Piden un único componente de producción ahora.",
    ],
  },
  "write-swift": {
    use: [
      "Escribir o revisar Swift 6 (actores, testing, value types).",
      "Un error de concurrencia o un retain cycle en un paquete Apple.",
    ],
    skip: [
      "El host es Next/Vite (recon: not-applicable).",
      "Solo quieren un sheet web estilo Apple → apple-design.",
    ],
  },
  "ui-ux-polish": {
    use: [
      "La app ya funciona y se ve decente: piden un review o propuesta de pulido.",
      "Hay que pasar desktop y mobile por separado, varias iteraciones.",
    ],
    skip: [
      "La UI está rota, sin design system, o piden un rediseño desde cero.",
      "Es un bug o un endpoint: eso no es polish.",
    ],
  },
};

export function scenariosFor(slug: string): SkillScenarios {
  return (
    scenarios[slug] ?? {
      use: [],
      skip: [],
    }
  );
}
