#import "theme.typ": *

#show: editorial.with(
  kind: "Propuesta comercial",
  folio: "VG-PROP-SYBA-2026-001",
  issued: "24 de agosto de 2026",
  issuer: "VetGroom",
)

#letterhead(
  kind: "Propuesta comercial",
  folio: "VG-PROP-SYBA-2026-001",
  issued: "24 de agosto de 2026",
  brand: "VetGroom",
  tagline: "Plataforma operativa para grooming y sucursales · cobertura federal",
  mark: image("assets/vetgroom-logo.png", height: 34pt, width: 34pt),
  issuer: (
    name: "VetGroom",
    detail: [Pack SyBA · Estados Unidos Mexicanos, ámbito federal],
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
  funcionalidades: es demostrar cómo la operación diaria de SyBA puede
  ejecutarse dentro de una plataforma preparada para crecer con el negocio.
]

#note[
  *Esta propuesta cubre* qué incluye la implementación, cómo funciona la
  operación anual y cuál es el costo de crecimiento para futuras sucursales.
  Montos en MXN. El IVA se desglosa a la tasa federal vigente (16 %).
  Mercado: Estados Unidos Mexicanos, ámbito federal. Demo ya entregado:
  #link("https://demo.vetgroom.com.mx/demo/syba?demo_access_token=SYBA-2026-30D")[demo.vetgroom.com.mx/demo/syba].
]

= Propuesta de valor

SyBA obtiene una sola plataforma para la jornada, no un conjunto de
herramientas sueltas. Tres capas trabajan juntas:

#feature-cards((
  (
    num: "01",
    title: "Control operativo",
    body: [Clientes, mascotas, grooming, jaulas, recolecciones, cobros e historial en un solo panel. Menos trabajo manual, operación diaria estandarizada.],
  ),
  (
    num: "02",
    title: "Planeación inteligente",
    body: [Duración estimada por mascota, capacidad según groomers y organización de rutas con datos históricos, no con estimaciones a mano.],
  ),
  (
    num: "03",
    title: "VetBoard operativo",
    body: [Mascotas en proceso, groomer, jaula, prioridad e instrucciones especiales en tiempo real. Una sola visión de la jornada.],
  ),
))

= Alcance de la implementación

Esta implementación incorpora los requerimientos identificados en las
sesiones de análisis y reflejados en el ambiente demostrativo entregado.
El alcance son las funcionalidades aprobadas y validadas en esa etapa
de diseño.

== Incluye (inversión inicial)

- Personalización funcional del Pack SyBA.
- Configuración de la plataforma.
- Capacitación inicial.
- Puesta en marcha y validación operativa.
- Acompañamiento de arranque.
- VetBoard y reportes incluidos en el alcance aprobado.
- Reglas de negocio desarrolladas para el Pack SyBA.

== Fuera de alcance

- Reimplementar el Pack SyBA cuando una sucursal nueva opera con los
  mismos procesos (eso se cubre con alta de sucursal, más abajo).
- Infraestructura distinta a la VPS recomendada.
- Horas de soporte más allá de las contratadas en el plan de
  acompañamiento.
- Asesoría legal, fiscal o laboral.

= Inversión inicial

La inversión inicial cubre el proceso completo de adopción e
implementación. Se realiza *una sola vez*.

#money-table(
  ([Concepto], [Unidad], [Importe], [Importe + IVA]),
  (
    ([Implementación Pack SyBA (personalización, configuración, capacitación, puesta en marcha y arranque)], [1 lote], [\$24,999.00], [\$28,998.84]),
  ),
  (
    (label: "Subtotal", value: "$24,999.00"),
    (label: "IVA federal 16 %", value: "$3,999.84"),
    (label: "Total a pagar ahora", value: "$28,998.84 MXN", strong: true),
  ),
)

#note(title: "Condiciones comerciales y garantía")[
  Esquema de pago: 50 % al anticipo y 50 % contra entrega y liberación en
  productivo. Oferta válida por 15 días hábiles. Ámbito federal de los
  Estados Unidos Mexicanos. La VPS anual no forma parte de esta inversión
  inicial: se cotiza en la tabla siguiente.
]

= Infraestructura recomendada

La VPS no es una licencia. Es el ambiente donde opera la solución de SyBA:
independiente, más estable, con capacidad de crecimiento y libertad para
futuras personalizaciones. Hasta *cuatro sucursales* pueden compartir
la misma infraestructura.

#data-table(
  ([Concepto], [Periodicidad], [Importe], [Notas]),
  (
    ([VPS dedicada], [Anual], [\$6,000.00 MXN], [Hasta 4 sucursales]),
  ),
  alignments: (left, left, right, left),
)

= Qué sucede el segundo año

== Lo que no se vuelve a cobrar

La inversión inicial no se repite. No se vuelve a cobrar implementación,
configuración inicial, personalización del alcance aprobado, VetBoard,
reportes incluidos ni las reglas de negocio del Pack SyBA.

== Lo que se renueva

#data-table(
  ([Concepto], [Base], [Importe]),
  (
    ([Licencia], [Por sucursal activa, por año], [\$12,999.00 MXN]),
    ([Infraestructura VPS], [Anual], [\$6,000.00 MXN]),
    ([Soporte Esencial (opcional)], [20 horas anuales], [\$6,000.00 MXN]),
    ([Soporte Plus (opcional)], [40 horas anuales], [\$12,000.00 MXN]),
  ),
  alignments: (left, left, right),
)

El plan de acompañamiento no es “mantener encendido el sistema”. Es
acompañar la operación, resolver dudas, capacitar usuarios y atender
incidencias con prioridad.

= Diseñado para crecer

Si una sucursal nueva opera con los mismos procesos, no se vuelve a pagar
la implementación ni el desarrollo del Pack SyBA. No se reconstruye la
solución.

#data-table(
  ([Concepto], [Tipo], [Importe]),
  (
    ([Alta de sucursal], [Pago único], [\$3,000.00 MXN]),
    ([Licencia anual], [Por sucursal], [\$12,999.00 MXN]),
  ),
  alignments: (left, left, right),
)

Mientras SyBA permanezca dentro de la capacidad de la VPS contratada, no
hace falta infraestructura adicional.

= Cómo avanzar

En VetGroom creemos que la mejor forma de elegir una plataforma no es
una presentación comercial, sino validar una solución cercana a la
realidad del negocio. Por eso construimos el ambiente demostrativo
*antes* de solicitar un compromiso económico.

Los invitamos a revisar el demo, confirmar que refleja cómo opera SyBA
hoy y, una vez aprobada esa visión, avanzar juntos a la implementación
productiva:

#link("https://demo.vetgroom.com.mx/demo/syba?demo_access_token=SYBA-2026-30D")[
  https://demo.vetgroom.com.mx/demo/syba
]

Nuestro compromiso es acompañar el crecimiento de SyBA con transparencia
sobre qué incluye la plataforma, qué incluye el soporte y cómo evolucionará
la solución.

#signatures(
  (
    name: "Representante de VetGroom",
    role: "Emisor · Propuesta VG-PROP-SYBA-2026-001",
  ),
  (
    name: "Representante de SyBA",
    role: "Receptor · Aceptación de alcance e inversión",
  ),
  caption: "Aceptación",
)
