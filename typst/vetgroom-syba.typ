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
    detail: [Programa de implementación SyBA. Estados Unidos Mexicanos, ámbito federal.],
  ),
  recipient: (
    name: "SyBA",
    detail: [Atención: dirección operativa],
  ),
)

#kicker[Una plataforma diseñada alrededor de la operación de SyBA]
#lead[
  Antes de presentar una propuesta económica, analizamos los procesos
  compartidos por SyBA y construimos un ambiente demostrativo funcional
  basado en ellos. El objetivo no es vender una promesa ni una lista de
  módulos: es demostrar cómo la operación diaria de SyBA puede ejecutarse
  dentro de una plataforma preparada para crecer con el negocio.
]

#note(title: "Qué cubre este documento")[
  Qué incluye el primer año (programa con licencia incluida y VPS aparte),
  qué se renueva el segundo y el tercero, y cómo crecen las sucursales.
  Montos en MXN. IVA federal 16 %. Mercado: Estados Unidos Mexicanos,
  ámbito federal. Demo entregado:
  #link("https://demo.vetgroom.com.mx/demo/syba?demo_access_token=SYBA-2026-30D")[demo.vetgroom.com.mx/demo/syba].
]

= Qué gana SyBA

Una sola plataforma para la jornada. Tres capas, alineadas al pedido
operativo de SyBA (catálogo, historial, capacidad, rutas, VetBoard y
reportes).

#feature-cards((
  (
    num: "01",
    title: "Control operativo",
    body: [Clientes y mascotas, grooming, jaulas, recolecciones y entregas, historial y reportes en un panel. Menos trabajo manual. Operación diaria estandarizada.],
  ),
  (
    num: "02",
    title: "Planeación inteligente",
    body: [Duración estimada por mascota, capacidad según groomers y rutas con datos históricos. Decisiones con datos, no con estimaciones a mano.],
  ),
  (
    num: "03",
    title: "VetBoard operativo",
    body: [Mascotas en proceso, groomer, jaula, prioridad e instrucciones en tiempo real. Todo el equipo ve la misma jornada.],
  ),
))

= Programa de implementación SyBA

Esta implementación incorpora los requerimientos identificados en el
análisis y reflejados en el demo. El alcance son las funciones aprobadas
en esa etapa, tal como las describe el pedido de software de SyBA:
catálogo con raza, corte, dirección e indicaciones; historial y tiempos;
capacidad por groomers; rutas y reportes por WhatsApp; reporte diario
con jaula; reporte por estilista; pantalla operativa; historial de
incidencias y productos.

== Dentro del programa

- Personalización funcional del Programa SyBA.
- Licencia anual de la primera sucursal (incluida en el primer año).
- Configuración de la plataforma.
- Capacitación inicial.
- Puesta en marcha y validación operativa.
- Acompañamiento de arranque.
- VetBoard y reportes del alcance aprobado.
- Reglas de negocio desarrolladas para SyBA.

== Qué no incluye

- La VPS (va en la tabla siguiente: es infraestructura, no el programa).
- Horas de soporte L1 no contratadas.
- Asesoría legal, fiscal o laboral.
- Volver a cobrar el programa cuando una sucursal nueva opera con los
  mismos procesos (eso es activación + licencia).

= Qué se paga el primer año

El primer año SyBA compra dos cosas distintas: el *programa* (personalización
más la licencia de esa sucursal) y, aparte, la *VPS* para aislar el ambiente
y soportar lo que el pedido de software exige.

#money-table(
  ([Concepto], [Unidad], [Importe], [Importe + IVA]),
  (
    ([Programa de implementación SyBA: personalización, configuración, capacitación, puesta en marcha, arranque y licencia anual de la primera sucursal], [1 lote], [\$24,999.00], [\$28,998.84]),
  ),
  (
    (label: "Subtotal del programa", value: "$24,999.00"),
    (label: "IVA federal 16 %", value: "$3,999.84"),
    (label: "Total del programa ahora", value: "$28,998.84 MXN", strong: true),
  ),
)

#note(title: "Condiciones del programa")[
  Pago: 50 % al anticipo y 50 % al liberar el ambiente productivo.
  Oferta válida 15 días hábiles. Ámbito federal de los Estados Unidos
  Mexicanos. El primer año *no* se cobra una licencia aparte: ya va
  dentro del programa. La VPS no entra en este total.
]

= Por qué la VPS va aparte

La VPS no es una licencia. Es el ambiente donde corre la solución de
SyBA: aislado, estable y con espacio para personalizaciones y ajustes.
Así SyBA tiene exactamente lo que necesita el pedido de software, sin
compartir recursos con otros clientes.

Hasta *cuatro sucursales* pueden compartir esa infraestructura.

#data-table(
  ([Concepto], [Periodicidad], [Importe], [Notas]),
  (
    ([VPS dedicada], [Anual], [\$6,000.00 MXN], [Hasta 4 sucursales · 8 servicios]),
  ),
  alignments: (left, left, right, left),
)

= Qué incluye cada licencia

Cada licencia anual cubre *dos servicios* de la sucursal: vet y groom.
Con la VPS al límite de cuatro sucursales, eso son *ocho servicios*
operando bajo el mismo ambiente.

Del segundo año en adelante, la licencia se cobra por sucursal activa.
El programa de implementación del primer año no se vuelve a cobrar.

= Qué cambia el segundo año

== Lo que ya no se vuelve a cobrar

No se cobra de nuevo el Programa de implementación SyBA, la
personalización del alcance aprobado, VetBoard, los reportes incluidos
ni las reglas de negocio desarrolladas para SyBA.

== Ejemplo con sucursal 1 y alta de sucursal 2

#data-table(
  ([Concepto], [Base], [Importe]),
  (
    ([Licencia sucursal 1], [Anual · vet y groom], [\$12,999.00 MXN]),
    ([Activación sucursal 2], [Pago único], [\$3,000.00 MXN]),
    ([Licencia sucursal 2], [Anual · vet y groom], [\$12,999.00 MXN]),
    ([VPS dedicada], [Anual], [\$6,000.00 MXN]),
  ),
  alignments: (left, left, right),
)

Mientras SyBA quepa en las cuatro sucursales de la VPS, no hace falta
infraestructura adicional.

= Un año sin sucursal nueva

Si el tercer año (u otro posterior) no abre sucursal, solo se renuevan
las licencias activas y la VPS. El programa no regresa.

#data-table(
  ([Concepto], [Base], [Importe]),
  (
    ([Licencia sucursal 1], [Anual], [\$12,999.00 MXN]),
    ([Licencia sucursal 2], [Anual], [\$12,999.00 MXN]),
    ([VPS dedicada], [Anual], [\$6,000.00 MXN]),
  ),
  alignments: (left, left, right),
)

= Acompañamiento L1 opcional

El soporte L1 no es obligatorio. Si SyBA compra un bloque de horas,
esas horas se *diluyen entre las sucursales activas*. Expiran al cierre
de cada año. Estamos siempre dispuestos a dialogar antes de cualquier
malentendido.

#data-table(
  ([Plan], [Horas], [Importe]),
  (
    ([Acompañamiento esencial], [20 horas anuales], [\$6,000.00 MXN]),
    ([Acompañamiento plus], [40 horas anuales], [\$12,000.00 MXN]),
  ),
  alignments: (left, left, right),
)

Si no se compra bloque de horas, aplican los SLAs base:

- Asuntos no críticos: respuesta en alrededor de una semana.
- Asuntos críticos: tan pronto haya disponibilidad.

El plan no es “mantener encendido el sistema”. Es acompañar la operación,
resolver dudas, capacitar y atender incidencias con prioridad cuando hay
horas contratadas.

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
