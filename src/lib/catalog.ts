export const skillKinds = [
  "layer",
  "philosophy",
  "build",
  "review",
  "audit",
  "language",
  "design",
  "library",
  "explore",
  "native",
] as const;

export type SkillKind = (typeof skillKinds)[number];

export type SkillOrigin = "ad3" | "emilkowalski";

export type CatalogSkill = {
  slug: string;
  name: string;
  kind: SkillKind;
  origin: SkillOrigin;
  summary: string;
  improves: string;
  when: string;
  doesNotReplace: string;
  invocation: "auto" | "explicit";
};

export type PlaybookEntry = {
  id: string;
  situation: string;
  keepDoing: string;
  reachFor: string[];
  why: string;
};

export const catalog: CatalogSkill[] = [
  {
    slug: "ad3-craft-layer",
    name: "ad3-craft-layer",
    kind: "layer",
    origin: "ad3",
    summary:
      "Capa del suite AD3: decide cuándo abrir una skill de oficio y cómo plegarla en la respuesta que AD3 ya iba a dar.",
    improves:
      "El enrutado. AD3 no cambia de dueño de la tarea; solo sabe qué archivo de craft abrir y qué no tocar.",
    when: "Antes de escribir o pulir cualquier respuesta con UI, motion o elección de componente.",
    doesNotReplace:
      "Ninguna skill del suite. Es el índice, no el trabajo de Stripe, datos, infra o review de producto.",
    invocation: "auto",
  },
  {
    slug: "emil-design-eng",
    name: "emil-design-eng",
    kind: "philosophy",
    origin: "emilkowalski",
    summary:
      "Filosofía de design engineering de Emil: gusto, detalles invisibles, sombras frente a bordes, y cuándo una animación merece existir.",
    improves:
      "El criterio visual de la respuesta: menos slop, mejores defaults, más veto a lo que no debería moverse.",
    when: "UI, pulido, componentes, o cuando AD3 está a punto de “dejarlo bonito” sin un estándar.",
    doesNotReplace:
      "Las skills de producto o de código del suite. Solo sube el listón de oficio de esa misma respuesta.",
    invocation: "auto",
  },
  {
    slug: "animate",
    name: "animate",
    kind: "build",
    origin: "emilkowalski",
    summary:
      "Construye una animación web en orden: ¿debe animar?, propósito, herramienta, propiedades, curva, duración, interrupción y salida.",
    improves:
      "El CSS o Motion que AD3 escribe: ease-out al entrar, sin scale(0), duraciones nombradas, reduced-motion incluido.",
    when: "El usuario pide animar, dar vida a un componente o una transición concreta en web.",
    doesNotReplace:
      "Review, auditoría ni Expo. Tampoco sustituye a pick-ui-library si lo que hace falta es un toast o un drawer.",
    invocation: "auto",
  },
  {
    slug: "animate-expo",
    name: "animate-expo",
    kind: "build",
    origin: "emilkowalski",
    summary:
      "La misma barra para React Native y Expo: hilo de UI, gestos, sheets, haptics y transiciones de pantalla.",
    improves:
      "Implementaciones nativas que no tartamudean en dispositivo real, no solo en el simulador.",
    when: "Motion, gestos o sheets en una app Expo / React Native.",
    doesNotReplace:
      "animate (web) ni las skills de producto de AD3. Es el mismo trabajo, en otra plataforma.",
    invocation: "auto",
  },
  {
    slug: "review-animations",
    name: "review-animations",
    kind: "review",
    origin: "emilkowalski",
    summary:
      "Review estricto de motion. El aprobado se gana. Por defecto, marca defectos.",
    improves:
      "Los comentarios de review de AD3: fallos concretos (ease-in, transition: all, hover sin gate) en vez de “se siente raro”.",
    when: "Hay un diff o un componente con animación que hay que criticar.",
    doesNotReplace:
      "Review de lógica, seguridad o producto. Solo el tramo de motion del mismo review.",
    invocation: "explicit",
  },
  {
    slug: "improve-animations",
    name: "improve-animations",
    kind: "audit",
    origin: "emilkowalski",
    summary:
      "Audita el motion de un codebase y deja planes priorizados, ejecutables por otro agente.",
    improves:
      "La hoja de ruta que AD3 entrega: qué arreglar primero y con qué valores, no un “añade más animación”.",
    when: "Piden mejorar las animaciones de una app entera o un plan de motion.",
    doesNotReplace:
      "La ejecución del plan ni el review de un solo diff. Esta skill planea; no aplica.",
    invocation: "auto",
  },
  {
    slug: "find-animation-opportunities",
    name: "find-animation-opportunities",
    kind: "audit",
    origin: "emilkowalski",
    summary:
      "Busca sitios que deberían moverse — y rechaza los que no. Solo propone, no implementa.",
    improves:
      "La contención de AD3: recetas precisas donde el motion ayuda, y un no claro donde sobra.",
    when: "“¿Qué se podría animar?” o “que se sienta más vivo”, sin pedir aún el código.",
    doesNotReplace:
      "animate ni improve-animations. Encuentra; no construye ni audita lo que ya existe.",
    invocation: "auto",
  },
  {
    slug: "animation-vocabulary",
    name: "animation-vocabulary",
    kind: "language",
    origin: "emilkowalski",
    summary:
      "Pasa de “la cosa elástica esa” al término exacto, para que el siguiente prompt sea nítido.",
    improves:
      "El lenguaje de la respuesta de AD3: el usuario y el agente quedan con la misma palabra.",
    when: "Alguien describe un efecto y no sabe cómo se llama.",
    doesNotReplace:
      "Diseñar o implementar el efecto. Nombra; no anima.",
    invocation: "auto",
  },
  {
    slug: "apple-design",
    name: "apple-design",
    kind: "design",
    origin: "emilkowalski",
    summary:
      "Principios de Apple (WWDC) traducidos a la web: interfaces fluidas, materiales, springs, gestos.",
    improves:
      "Sheets, drags y profundidad cuando AD3 apunta a esa sensación, sin copiar pixels de iOS a ciegas.",
    when: "Gestos, springs, sheets, materiales o “que se sienta como Apple”.",
    doesNotReplace:
      "Las guidelines de producto de AD3. Es oficio de interfaz, no de marca.",
    invocation: "auto",
  },
  {
    slug: "pick-ui-library",
    name: "pick-ui-library",
    kind: "library",
    origin: "emilkowalski",
    summary:
      "Elige una librería de confianza (toast, drawer, menú, charts…) en vez de inventar el componente.",
    improves:
      "La recomendación de AD3: un paquete vivo y con foco, no un dropdown a mano sin focus management.",
    when: "Hace falta un componente de UI que ya existe bien resuelto.",
    doesNotReplace:
      "El design system o las primitivas que AD3 ya usa. Elige librería; no sustituye el suite.",
    invocation: "explicit",
  },
  {
    slug: "ask-sonner",
    name: "ask-sonner",
    kind: "library",
    origin: "emilkowalski",
    summary:
      "Guía de Sonner: Toaster, recetas, estilos y los fallos habituales (doble toast, z-index, dark mode).",
    improves:
      "Las respuestas de AD3 sobre toasts: setup correcto y fixes concretos, no un toast inventado.",
    when: "Trabajo o debug de Sonner.",
    doesNotReplace:
      "pick-ui-library (qué librería usar) ni el resto del suite. Solo Sonner.",
    invocation: "auto",
  },
  {
    slug: "prototype",
    name: "prototype",
    kind: "explore",
    origin: "emilkowalski",
    summary:
      "Construye varias versiones distintas de una pieza de UI, con un switcher para elegir en vivo.",
    improves:
      "La exploración de AD3: alternativas reales, no un único mock que se hace pasar por decisión.",
    when: "Quieren ver caminos distintos antes de comprometerse.",
    doesNotReplace:
      "La decisión de producto. Prototipa; no elige por el usuario.",
    invocation: "explicit",
  },
  {
    slug: "write-swift",
    name: "write-swift",
    kind: "native",
    origin: "emilkowalski",
    summary:
      "Swift moderno: value types, concurrencia Swift 6, generics, rendimiento y Swift Testing.",
    improves:
      "El código Swift que AD3 escribe o revisa, con patrones actuales en vez de recetas viejas.",
    when: "Escribir, revisar o migrar Swift.",
    doesNotReplace:
      "Las skills de arquitectura o de producto del suite. Es lenguaje, no el resto del stack.",
    invocation: "auto",
  },
];

export const playbook: PlaybookEntry[] = [
  {
    id: "ui-from-scratch",
    situation: "AD3 va a generar o restylear una interfaz",
    keepDoing: "Las skills de producto, datos y stack que ya tiene el suite",
    reachFor: ["ad3-craft-layer", "emil-design-eng", "animate"],
    why: "El suite sigue resolviendo el qué. El craft evita ease-in, bordes sólidos y motion de relleno.",
  },
  {
    id: "review-pr",
    situation: "AD3 revisa un PR que toca motion o componentes",
    keepDoing: "Review de lógica, tests, seguridad y producto",
    reachFor: ["ad3-craft-layer", "review-animations"],
    why: "El comentario de motion se vuelve un fallo concreto, no un “se siente off”.",
  },
  {
    id: "feel-alive",
    situation: "Piden que la app “se sienta más viva”",
    keepDoing: "El alcance y las constraints del suite",
    reachFor: [
      "ad3-craft-layer",
      "find-animation-opportunities",
      "improve-animations",
    ],
    why: "Primero qué merece moverse; después un plan. No animar atajos de teclado.",
  },
  {
    id: "pick-component",
    situation: "Hace falta un toast, drawer, menú o chart",
    keepDoing: "Convenciones y librerías que el repo ya usa",
    reachFor: ["ad3-craft-layer", "pick-ui-library", "ask-sonner"],
    why: "AD3 recomienda un paquete de confianza en vez de fabricar el componente.",
  },
  {
    id: "name-the-motion",
    situation: "El usuario describe un efecto sin saber el nombre",
    keepDoing: "La conversación de producto",
    reachFor: ["ad3-craft-layer", "animation-vocabulary"],
    why: "Con la palabra justa, la siguiente respuesta de AD3 deja de adivinar.",
  },
  {
    id: "apple-sheet",
    situation: "Quieren un sheet, spring o gesto al estilo Apple",
    keepDoing: "El modelo de datos y la navegación del suite",
    reachFor: ["ad3-craft-layer", "apple-design", "animate"],
    why: "Principios de interfaz fluida, implementados con la receta web correcta.",
  },
  {
    id: "expo",
    situation: "Motion en Expo o React Native",
    keepDoing: "Las skills nativas o de producto que ya apliquen",
    reachFor: ["ad3-craft-layer", "animate-expo"],
    why: "Misma barra de oficio, en el hilo de UI, no un port ciego de CSS.",
  },
  {
    id: "variants",
    situation: "Hay que explorar varias direcciones de UI",
    keepDoing: "El brief y las constraints de AD3",
    reachFor: ["ad3-craft-layer", "prototype"],
    why: "Variantes distintas de verdad, para que el suite elija con los ojos, no de memoria.",
  },
];

export const kindLabel: Record<SkillKind, string> = {
  layer: "Capa AD3",
  philosophy: "Oficio",
  build: "Construir",
  review: "Revisar",
  audit: "Auditar",
  language: "Vocabulario",
  design: "Diseño",
  library: "Librerías",
  explore: "Explorar",
  native: "Nativo",
};

export function skillBySlug(slug: string): CatalogSkill | undefined {
  return catalog.find((skill) => skill.slug === slug);
}

export function assertNever(value: never): never {
  throw new Error(`Unhandled skill kind: ${String(value)}`);
}

export function kindTone(kind: SkillKind): "default" | "secondary" | "outline" {
  switch (kind) {
    case "layer":
      return "default";
    case "philosophy":
    case "design":
      return "secondary";
    case "build":
    case "review":
    case "audit":
    case "language":
    case "library":
    case "explore":
    case "native":
      return "outline";
    default: {
      return assertNever(kind);
    }
  }
}
