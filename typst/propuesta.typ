#import "theme.typ": *

#show: editorial.with(
  kind: "Propuesta comercial",
  folio: "AD3-PROP-2026-0041",
  issued: "23 de agosto de 2026",
  issuer: "AD3 Studio, S.A. de C.V.",
)

#letterhead(
  kind: "Propuesta comercial",
  folio: "AD3-PROP-2026-0041",
  issued: "23 de agosto de 2026",
  issuer: (
    name: "AD3 Studio, S.A. de C.V.",
    detail: [RFC ADS260101XXX · Personas morales · Estados Unidos Mexicanos],
  ),
  recipient: (
    name: "Norte Digital, S.A.P.I. de C.V.",
    detail: [RFC NDI850101XXX · Atención: Dirección de producto],
  ),
)

#kicker[Capa de oficio para agentes, lista para operar]
#lead[
  Propuesta para instalar, verificar y usar el suite AD3 con documentos
  editoriales en Typst. El alcance es federal: no depende de una plaza
  local y no sustituye las skills de dominio que Norte Digital ya tenga
  (pagos, datos, infra).
]

#note[
  *Mercado por defecto.* Si no se acuerda otra jurisdicción, aplica el
  mercado de los Estados Unidos Mexicanos a nivel federal. Esta plantilla
  no cita ciudades ni oficinas locales. Las cifras están en pesos
  mexicanos (MXN) e incluyen el desglose del IVA federal (16 %).
]

= Propuesta de valor

AD3 no promete un rediseño de producto. Promete un proceso que el agente
puede ejecutar sin alucinar librerías de PDF rotas:

#feature-cards((
  (
    num: "01",
    title: "Cadena linkeada",
    body: [Using → recon → spec → plan → build → review → ship. El oficio entra solo si está en disco.],
  ),
  (
    num: "02",
    title: "Oficio editorial",
    body: [Propuestas y contratos salen de Typst: badge, tarjetas, tablas con IVA y firmas. Nunca ReportLab, FPDF, LaTeX ni HTML-to-PDF.],
  ),
  (
    num: "03",
    title: "Host adaptable",
    body: [Web, Expo o Swift. El suite decide con lo instalado y no inventa una skill que no existe.],
  ),
))

Los entregables de esta propuesta son operables en el primer ciclo: pack
instalado, verificador en verde, y dos PDFs (propuesta + contrato) que
Norte Digital puede rellenar.

= Alcance

== Incluye

- Instalación del pack AD3 en el entorno de agentes que designe el cliente.
- Verificación de las siete maestras y de las skills de oficio propuestas.
- Plantilla Typst de propuesta comercial y de contrato de servicios.
- Un pase de capacitación de dos horas para el equipo que opera los agentes.
- Cierre con evidencia: `npm run verify` y `npm run pdf`.

== Fuera de alcance

- Asesoría legal, fiscal o laboral. El contrato anexo es una *plantilla
  editorial*, no un dictamen.
- Integración con pasarelas de pago, ERPs o firma electrónica avanzada.
- Rediseño de producto, marca o sitio público del cliente.
- Hosting, dominio o infraestructura distinta a la que el cliente ya opera.

= Inversión

Montos en MXN. El IVA se calcula a la tasa federal vigente (16 %). No se
agregan impuestos locales.

#money-table(
  ([Concepto], [Unidad], [Importe], [Importe + IVA]),
  (
    ([Implementación del suite y plantillas Typst], [1 lote], [\$85,000.00], [\$98,600.00]),
    ([Capacitación operativa (2 h)], [1 sesión], [\$18,500.00], [\$21,460.00]),
  ),
  (
    (label: "Subtotal", value: "$103,500.00"),
    (label: "IVA federal 16 %", value: "$16,560.00"),
    (label: "Total a pagar", value: "$120,060.00 MXN", strong: true),
  ),
)

Condiciones de pago: 50 % a la aceptación de esta propuesta y 50 % contra
entrega verificada. Vigencia de la oferta: 15 días hábiles a partir de la
fecha de emisión. Forma de pago: transferencia interbancaria en territorio
nacional, a la cuenta que AD3 Studio indique por escrito.

= Calendario

#data-table(
  ([Fase], [Duración], [Done-when]),
  (
    ([Recon e instalación], [2 días hábiles], [Las 7 maestras reportan `ready`]),
    ([Plantillas y primer PDF], [3 días hábiles], [`npm run pdf` genera ambos documentos]),
    ([Capacitación y handoff], [1 día hábil], [El equipo cliente compiló un folio propio]),
  ),
  alignments: (left, left, left),
)

= Condiciones comerciales

- La propuesta no crea exclusividad. El cliente puede usar otras skills
  de host sin autorización de AD3.
- Los archivos Typst se entregan con licencia MIT del pack, salvo las
  fuentes Inter (SIL OFL) y cualquier skill de terceros ya avisada en
  `NOTICE.md`.
- Cualquier trabajo fuera de alcance se cotiza en una adenda con el mismo
  formato editorial.
- La aceptación se documenta con las firmas de la siguiente página o con
  un correo de la persona facultada, en ambos casos a nivel federal.

#signatures(
  (
    name: "Mariana Solís Rivera",
    role: "Directora general · AD3 Studio, S.A. de C.V.",
    id: "RFC ADS260101XXX",
  ),
  (
    name: "Héctor Valdés Nava",
    role: "Apoderado · Norte Digital, S.A.P.I. de C.V.",
    id: "RFC NDI850101XXX",
  ),
  caption: "Aceptación",
)
