export const documentKinds = ["propuesta", "contrato", "nota"] as const;

export type DocumentKind = (typeof documentKinds)[number];

export type PdfSection = {
  heading: string;
  body: string;
};

export type PdfItem = {
  concept: string;
  amount: number;
};

export type PdfDocument = {
  kind: DocumentKind;
  title: string;
  folio: string;
  issued: string;
  brand: string;
  issuerName: string;
  issuerDetail: string;
  recipientName: string;
  recipientDetail: string;
  intro: string;
  note: string;
  sections: PdfSection[];
  items: PdfItem[];
  includeTax: boolean;
  leftSignName: string;
  leftSignRole: string;
  rightSignName: string;
  rightSignRole: string;
};

export const kindLabel: Record<DocumentKind, string> = {
  propuesta: "Propuesta comercial",
  contrato: "Contrato de servicios",
  nota: "Documento",
};

export const FEDERAL_IVA = 0.16;

const MAX_TEXT = 4_000;
const MAX_SECTIONS = 12;
const MAX_ITEMS = 20;

export function formatMxn(amount: number): string {
  const safe = Number.isFinite(amount) ? amount : 0;
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
  }).format(safe);
}

export function moneyBreakdown(items: PdfItem[], includeTax: boolean) {
  const subtotal = items.reduce((sum, item) => sum + (Number(item.amount) || 0), 0);
  const tax = includeTax ? subtotal * FEDERAL_IVA : 0;
  return {
    subtotal,
    tax,
    total: subtotal + tax,
  };
}

function clip(value: unknown, max = MAX_TEXT): string {
  return String(value ?? "")
    .replace(/\r\n/g, "\n")
    .slice(0, max)
    .trim();
}

function asAmount(value: unknown): number {
  const amount = typeof value === "number" ? value : Number(value);
  if (!Number.isFinite(amount)) {
    return 0;
  }
  return Math.max(0, Math.min(amount, 99_999_999));
}

export function sampleDocument(kind: DocumentKind = "propuesta"): PdfDocument {
  const issued = "23 de agosto de 2026";

  if (kind === "contrato") {
    return {
      kind,
      title: "Contrato de prestación de servicios",
      folio: "AD3-CTR-2026-0017",
      issued,
      brand: "Estudio Norte",
      issuerName: "Estudio Norte, S.A. de C.V.",
      issuerDetail: "RFC ENO260101XXX · Prestador",
      recipientName: "Casa Lumen, S.A.P.I. de C.V.",
      recipientDetail: "RFC CLU850101XXX · Cliente",
      intro:
        "Celebrado en los Estados Unidos Mexicanos, en el ámbito federal. Este modelo no cita ciudad ni fuero local.",
      note: "Plantilla editorial. No es asesoría legal. Revíselo un abogado facultado antes de firmarlo como contrato.",
      sections: [
        {
          heading: "Objeto",
          body: "El Prestador diseñará y entregará documentos editoriales en PDF a partir de las instrucciones del Cliente.",
        },
        {
          heading: "Contraprestación",
          body: "El Cliente pagará la cantidad desglosada en la tabla, en pesos mexicanos, con IVA a la tasa federal vigente.",
        },
        {
          heading: "Jurisdicción",
          body: "Las partes se someten a los tribunales federales competentes de los Estados Unidos Mexicanos.",
        },
      ],
      items: [
        { concept: "Diseño editorial de documentos", amount: 42000 },
        { concept: "Ajustes de una ronda", amount: 8000 },
      ],
      includeTax: true,
      leftSignName: "Ana Ríos Beltrán",
      leftSignRole: "Representante del Prestador",
      rightSignName: "Luis Ortega Cano",
      rightSignRole: "Representante del Cliente",
    };
  }

  if (kind === "nota") {
    return {
      kind,
      title: "Confirmación de alcance",
      folio: "AD3-DOC-2026-0108",
      issued,
      brand: "Estudio Norte",
      issuerName: "Estudio Norte",
      issuerDetail: "Documentos editoriales",
      recipientName: "Casa Lumen",
      recipientDetail: "Dirección de operaciones",
      intro:
        "Confirmamos el alcance acordado. El entregable es un PDF con diseño editorial, compilado en Typst.",
      note: "",
      sections: [
        {
          heading: "Qué incluye",
          body: "- Portada y foliado\n- Tabla de montos en MXN\n- Bloque de firmas en dos columnas",
        },
      ],
      items: [],
      includeTax: false,
      leftSignName: "Ana Ríos Beltrán",
      leftSignRole: "Estudio Norte",
      rightSignName: "",
      rightSignRole: "",
    };
  }

  return {
    kind: "propuesta",
    title: "Diseño editorial para sus documentos",
    folio: "AD3-PROP-2026-0041",
    issued,
    brand: "Estudio Norte",
    issuerName: "Estudio Norte, S.A. de C.V.",
    issuerDetail: "RFC ENO260101XXX",
    recipientName: "Casa Lumen, S.A.P.I. de C.V.",
    recipientDetail: "Dirección de producto",
    intro:
      "Propuesta para dejar sus contratos y cotizaciones con un diseño limpio: tipografía Inter, tablas claras y firmas alineadas. Sin ReportLab ni LaTeX.",
    note: "Montos en MXN. IVA federal 16 %. Mercado: Estados Unidos Mexicanos, ámbito federal.",
    sections: [
      {
        heading: "Qué entrega",
        body: "- PDF letter con márgenes editoriales\n- Desglose financiero con IVA\n- Bloque de firmas en grid",
      },
      {
        heading: "Fuera de alcance",
        body: "Asesoría legal, firma electrónica avanzada e integración con un ERP.",
      },
    ],
    items: [
      { concept: "Sistema de plantillas y primer PDF", amount: 48000 },
      { concept: "Capacitación de una hora", amount: 7500 },
    ],
    includeTax: true,
    leftSignName: "Ana Ríos Beltrán",
    leftSignRole: "Dirección · Estudio Norte",
    rightSignName: "Luis Ortega Cano",
    rightSignRole: "Apoderado · Casa Lumen",
  };
}

export function parseDocument(input: unknown): PdfDocument {
  const raw =
    input && typeof input === "object" ? (input as Record<string, unknown>) : {};
  const kind = documentKinds.includes(raw.kind as DocumentKind)
    ? (raw.kind as DocumentKind)
    : "propuesta";

  const sections = Array.isArray(raw.sections)
    ? raw.sections.slice(0, MAX_SECTIONS).map((section) => {
        const row =
          section && typeof section === "object"
            ? (section as Record<string, unknown>)
            : {};
        return {
          heading: clip(row.heading, 120),
          body: clip(row.body),
        };
      })
    : [];

  const items = Array.isArray(raw.items)
    ? raw.items.slice(0, MAX_ITEMS).map((item) => {
        const row =
          item && typeof item === "object" ? (item as Record<string, unknown>) : {};
        return {
          concept: clip(row.concept, 160),
          amount: asAmount(row.amount),
        };
      })
    : [];

  const parsed: PdfDocument = {
    kind,
    title: clip(raw.title, 180),
    folio: clip(raw.folio, 48),
    issued: clip(raw.issued, 80),
    brand: clip(raw.brand, 40) || "Documento",
    issuerName: clip(raw.issuerName, 120),
    issuerDetail: clip(raw.issuerDetail, 180),
    recipientName: clip(raw.recipientName, 120),
    recipientDetail: clip(raw.recipientDetail, 180),
    intro: clip(raw.intro),
    note: clip(raw.note, 600),
    sections: sections.filter((section) => section.heading || section.body),
    items: items.filter((item) => item.concept || item.amount > 0),
    includeTax: raw.includeTax !== false,
    leftSignName: clip(raw.leftSignName, 80),
    leftSignRole: clip(raw.leftSignRole, 120),
    rightSignName: clip(raw.rightSignName, 80),
    rightSignRole: clip(raw.rightSignRole, 120),
  };

  if (!parsed.title) {
    throw new Error("Falta el título del documento.");
  }
  if (!parsed.issuerName) {
    throw new Error("Falta quién emite el documento.");
  }

  if (!parsed.folio) {
    parsed.folio = `AD3-${kind.slice(0, 3).toUpperCase()}-${Date.now().toString().slice(-6)}`;
  }
  if (!parsed.issued) {
    parsed.issued = new Intl.DateTimeFormat("es-MX", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(new Date());
  }

  return parsed;
}
