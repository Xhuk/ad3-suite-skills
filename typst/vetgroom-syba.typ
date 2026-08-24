#import "theme.typ": *
#import "kits/vetgroom/brand.typ": kit

#show: editorial.with(
  kind: "Propuesta comercial",
  folio: "VG-PROP-SYBA-2026-001",
  issued: "24 de agosto de 2026",
  issuer: kit.name,
)

#letterhead(
  kind: "Propuesta comercial",
  folio: "VG-PROP-SYBA-2026-001",
  issued: "24 de agosto de 2026",
  brand: kit.name,
  tagline: "Plataforma operativa para grooming y sucursales. Cobertura federal.",
  mark: image(kit.mark, height: 34pt, width: 34pt),
  issuer: (
    name: kit.name,
    detail: [Pack SyBA. Estados Unidos Mexicanos, ámbito federal.],
  ),
  recipient: (
    name: "SyBA",
    detail: [Atención: dirección operativa],
  ),
)

#kicker[Una plataforma diseñada alrededor de la operación de SyBA]
#lead[
  Analizamos los procesos de SyBA y construimos un ambiente demostrativo
  con esos flujos. No pedimos un compromiso a ciegas: SyBA ya puede ver
  cómo queda la jornada diaria antes de pagar la implementación.
]

#note(title: "Qué cubre este documento")[
  La implementación de una sola vez, la operación anual y el costo de
  abrir otra sucursal. Montos en MXN. IVA federal 16 %. Mercado: Estados
  Unidos Mexicanos, ámbito federal. Demo entregado:
  #link("https://demo.vetgroom.com.mx/demo/syba?demo_access_token=SYBA-2026-30D")[demo.vetgroom.com.mx/demo/syba].
]

= Qué gana SyBA

Una sola plataforma para la jornada. Tres capas, no tres herramientas.

#feature-cards((
  (
    num: "01",
    title: "Control operativo",
    body: [Clientes, mascotas, grooming, jaulas, recolecciones, cobros e historial en un panel. Menos trabajo manual. Operación diaria estandarizada.],
  ),
  (
    num: "02",
    title: "Planeación inteligente",
    body: [Duración estimada por mascota, capacidad según groomers y rutas con datos históricos. Deja de estimar a mano.],
  ),
  (
    num: "03",
    title: "VetBoard operativo",
    body: [Mascotas en proceso, groomer, jaula, prioridad e instrucciones en tiempo real. Una visión de la jornada.],
  ),
))

= Qué incluye esta implementación

El alcance son las funciones aprobadas en el análisis y validadas en el
demo. No es un rediseño abierto.

== Dentro de la inversión inicial

- Personalización funcional del Pack SyBA.
- Configuración de la plataforma.
- Capacitación inicial.
- Puesta en marcha y validación operativa.
- Acompañamiento de arranque.
- VetBoard y reportes del alcance aprobado.
- Reglas de negocio desarrolladas para el Pack SyBA.

== Qué no incluye

- Rehacer el Pack SyBA cuando una sucursal nueva opera con los mismos
  procesos. Eso es un alta de sucursal, más abajo.
- Infraestructura distinta a la VPS recomendada.
- Horas de soporte no contratadas.
- Asesoría legal, fiscal o laboral.

= Qué se paga una vez

La adopción e implementación se pagan *una sola vez*.

#money-table(
  ([Concepto], [Unidad], [Importe], [Importe + IVA]),
  (
    ([Implementación Pack SyBA: personalización, configuración, capacitación, puesta en marcha y arranque], [1 lote], [\$24,999.00], [\$28,998.84]),
  ),
  (
    (label: "Subtotal", value: "$24,999.00"),
    (label: "IVA federal 16 %", value: "$3,999.84"),
    (label: "Total a pagar ahora", value: "$28,998.84 MXN", strong: true),
  ),
)

#note(title: "Condiciones y garantía")[
  Pago: 50 % al anticipo y 50 % al liberar el ambiente productivo.
  Oferta válida 15 días hábiles. Ámbito federal de los Estados Unidos
  Mexicanos. La VPS anual no entra en este total: va en la tabla siguiente.
]

= Dónde corre la plataforma

La VPS no es una licencia. Es el ambiente de SyBA: aislado, estable y
listo para personalizar. Hasta *cuatro sucursales* comparten esa
infraestructura.

#data-table(
  ([Concepto], [Periodicidad], [Importe], [Notas]),
  (
    ([VPS dedicada], [Anual], [\$6,000.00 MXN], [Hasta 4 sucursales]),
  ),
  alignments: (left, left, right, left),
)

= El segundo año

== Lo que no se vuelve a cobrar

No se cobra de nuevo la implementación, la configuración inicial, la
personalización del alcance aprobado, VetBoard, los reportes incluidos
ni las reglas de negocio del Pack SyBA.

== Lo que se renueva

#data-table(
  ([Concepto], [Base], [Importe]),
  (
    ([Licencia], [Por sucursal activa, por año], [\$12,999.00 MXN]),
    ([Infraestructura VPS], [Anual], [\$6,000.00 MXN]),
    ([Soporte esencial, opcional], [20 horas anuales], [\$6,000.00 MXN]),
    ([Soporte plus, opcional], [40 horas anuales], [\$12,000.00 MXN]),
  ),
  alignments: (left, left, right),
)

El acompañamiento no es “dejar el sistema encendido”. Es resolver dudas,
capacitar y atender incidencias con prioridad.

= Cuando SyBA abra otra sucursal

Si opera con los mismos procesos, no se vuelve a pagar la implementación
ni el desarrollo del Pack. No se reconstruye la solución.

#data-table(
  ([Concepto], [Tipo], [Importe]),
  (
    ([Alta de sucursal], [Pago único], [\$3,000.00 MXN]),
    ([Licencia anual], [Por sucursal], [\$12,999.00 MXN]),
  ),
  alignments: (left, left, right),
)

Mientras quepa en la VPS contratada, no hace falta más infraestructura.

= Siguiente paso

La mejor forma de elegir no es una lámina comercial: es validar un
ambiente cercano a la operación real. El demo ya está. Si refleja cómo
trabaja SyBA hoy, el paso siguiente es el productivo.

#link("https://demo.vetgroom.com.mx/demo/syba?demo_access_token=SYBA-2026-30D")[
  https://demo.vetgroom.com.mx/demo/syba
]

#signatures(
  (
    name: "Representante de VetGroom",
    role: "Emisor. Propuesta VG-PROP-SYBA-2026-001",
  ),
  (
    name: "Representante de SyBA",
    role: "Receptor. Aceptación de alcance e inversión",
  ),
  caption: "Aceptación",
)
