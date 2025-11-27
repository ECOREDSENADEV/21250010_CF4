<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Construcción del plan agroecológico
    
    .bg-full-width.bg-color-19
      .px-4.px-md-5
        .row.mb-5.align-items-center
          .col-lg-4.order-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema3/1.png", data-aos="zoom-in")
          .col-lg-8.order-lg-1
            p(data-aos="fade-left") El plan de acción agroecológico es el resultado articulado de todo el proceso participativo llevado a cabo con la metodología IPPTA. Se construye a partir del diagnóstico con los 21 indicadores, se enriquece con la valoración del estado de transición agroecológica (diagrama radial) y se proyecta en acciones concretas orientadas a transformar el sistema predial. Su construcción es:
            .bg-color-2.p-4.tarjeta(data-aos="fade-left")
              .row.align-items-center
                .col-lg-auto.mb-3.mb-lg-0
                  img(src="@/assets/curso/tema3/2.svg", style="max-width: 222px").mx-auto
                .col-lg
                  div.bg-color-white.p-3.tarjeta
                    ul.lista-ul--color.mb-0
                      li.mb-0.d-flex
                        i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                        p
                          span.text-bold Participativa <br>
                          | Incluye la visión, saberes y decisiones de la familia.
                      li.mb-0.d-flex
                        i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                        p
                          span.text-bold Situada <br>
                          | Responde al contexto ecológico, social y cultural de cada finca.
                      li.mb-0.d-flex
                        i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                        p
                          span.text-bold Pedagógica <br>
                          | Aprender haciendo, reflexionando y ajustando en el camino.

        p.mb-5 El plan debe reflejar las prioridades familiares, los puntos críticos del agroecosistema y las posibilidades reales de implementación, con metas claras y viables.

        separador
        
        #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 3.1 Estructura del plan: actividades, tiempos, responsabilidades y costos
        
        p.mb-5 Una vez identificados los indicadores críticos en el diagnóstico IPPTA, se seleccionan acciones concretas que respondan directamente a las problemáticas más relevantes. En particular, se priorizan aquellos indicadores que presenten baja calificación o alta relevancia sistémica (FAO, 2024). A continuación, se presentan ejemplos de actividades vinculadas a indicadores clave, que sirven como referencia para construir planes prediales pertinentes y bien fundamentados:

        .bg-full-width.bg-fondo-slider.mb-5
          .p-4.p-md-5
            SlyderA(tipo="b").bg-color-5.p-4.tarjeta
              .row.align-items-center.p-4.p-md-5
                .col-lg-5.order-2
                  figure
                    img(src="@/assets/curso/tema3/3.png")
                .col-lg-7.order-1.mb-3.mb-lg-0
                  h5 Manejo de suelos
                  ul.lista-ul--color.mb-0
                    li.mb-0.d-flex
                      i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                      p.mb-0 Construcción de composteras
                    li.mb-0.d-flex
                      i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                      p.mb-0 Incorporación de materia orgánica
                    li.mb-0.d-flex
                      i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                      p.mb-0 Cobertura vegetal permanente
                    li.mb-0.d-flex
                      i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                      p.mb-0 Terrazas vivas en zonas de pendiente
              .row.align-items-center.p-4.p-md-5
                .col-lg-5.order-2
                  figure
                    img(src="@/assets/curso/tema3/4.png")
                .col-lg-7.order-1.mb-3.mb-lg-0
                  h5 Manejo del agua
                  ul.lista-ul--color.mb-0
                    li.mb-0.d-flex
                      i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                      p.mb-0 Cosecha de agua lluvia
                    li.mb-0.d-flex
                      i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                      p.mb-0 Canalización comunitaria
                    li.mb-0.d-flex
                      i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                      p.mb-0 Protección de nacimientos
                    li.mb-0.d-flex
                      i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                      p.mb-0 Instalación de reservorios familiares
              .row.align-items-center.p-4.p-md-5
                .col-lg-5.order-2
                  figure
                    img(src="@/assets/curso/tema3/5.png")
                .col-lg-7.order-1.mb-3.mb-lg-0
                  h5 Diversificación productiva
                  ul.lista-ul--color.mb-0
                    li.mb-0.d-flex
                      i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                      p.mb-0 Diseño de huertas mixtas
                    li.mb-0.d-flex
                      i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                      p.mb-0 Rotación de cultivos
                    li.mb-0.d-flex
                      i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                      p.mb-0 Integración de especies medicinales y alimenticias
                    li.mb-0.d-flex
                      i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                      p.mb-0 Policultivos con enfoque nutricional
              .row.align-items-center.p-4.p-md-5
                .col-lg-5.order-2
                  figure
                    img(src="@/assets/curso/tema3/6.png")
                .col-lg-7.order-1.mb-3.mb-lg-0
                  h5 Bioinsumos y reducción de agroquímicos
                  ul.lista-ul--color.mb-0
                    li.mb-0.d-flex
                      i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                      p.mb-0 Producción de biopreparados
                    li.mb-0.d-flex
                      i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                      p.mb-0 Talleres de formulación
                    li.mb-0.d-flex
                      i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                      p.mb-0 Sustitución progresiva de insumos externose
                    li.mb-0.d-flex
                      i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                      p.mb-0 Validación de recetas locales
              .row.align-items-center.p-4.p-md-5
                .col-lg-5.order-2
                  figure
                    img(src="@/assets/curso/tema3/7.png")
                .col-lg-7.order-1.mb-3.mb-lg-0
                  h5 Semillas nativas y criollas
                  ul.lista-ul--color.mb-0
                    li.mb-0.d-flex
                      i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                      p.mb-0 Recuperación de variedades locales
                    li.mb-0.d-flex
                      i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                      p.mb-0 Creación de bancos familiares y comunitarios
                    li.mb-0.d-flex
                      i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                      p.mb-0 Intercambios de semillas
                    li.mb-0.d-flex
                      i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                      p.mb-0 Registro participativo
              .row.align-items-center.p-4.p-md-5
                .col-lg-5.order-2
                  figure
                    img(src="@/assets/curso/tema3/8.png")
                .col-lg-7.order-1.mb-3.mb-lg-0
                  h5 Organización y cultura agroecológica
                  ul.lista-ul--color.mb-0
                    li.mb-0.d-flex
                      i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                      p.mb-0 Formación de jóvenes
                    li.mb-0.d-flex
                      i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                      p.mb-0 Aulas vivas
                    li.mb-0.d-flex
                      i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                      p.mb-0 Sistematización de saberes
                    li.mb-0.d-flex
                      i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                      p.mb-0 Cartografías culturales
                    li.mb-0.d-flex
                      i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                      p.mb-0 Fortalecimiento de semilleros
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/4.png")
        h3.titulo-con-imagen__texto Justificación de las actividades
    
    .bg-full-width.bg-color-19
      .px-4.px-md-5
        p.mb-5 Cada actividad seleccionada debe estar justificada con base en:

        .row.mb-5.align-items-center
          .col-lg-4.order-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema3/9.png", data-aos="zoom-in")
          .col-lg-8.order-lg-1
            .bg-color-24.p-4.tarjeta(data-aos="fade-left")
              .row.align-items-center
                .col-lg-auto.mb-3.mb-lg-0
                  img(src="@/assets/curso/tema3/10.svg", style="max-width: 222px").mx-auto
                .col-lg
                  div.bg-color-white.p-3.tarjeta
                    ul.lista-ul--color.mb-0
                      li.mb-0.d-flex
                        i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                        p El diagrama radial IPPTA, que muestra los niveles de avance o rezago en cada indicador.
                      li.mb-0.d-flex
                        i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                        p Los mapas del sistema predial, que permiten ubicar territorialmente las intervenciones.
                      li.mb-0.d-flex
                        i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                        p Los acuerdos familiares, que aseguran pertinencia, compromiso y sostenibilidad.

        p.mb-5 Así, el plan agroecológico se convierte en una herramienta estratégica de transición, con acciones organizadas, pertinentes y con sentido transformador.

        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/4.png")
            h3.titulo-con-imagen__texto Tiempos de ejecución
        
        p.mb-5 Se define un cronograma agroecológico que articula las actividades con los ciclos productivos, los ritmos familiares y los momentos comunitarios. Se recomienda usar tres horizontes:

        .row.mb-5.align-items-center
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema3/11.png", data-aos="zoom-in")
          .col-lg-8
            .bg-color-25.p-4.tarjeta(data-aos="fade-left")
              .row.align-items-center
                .col-lg-auto.mb-3.mb-lg-0.order-2
                  img(src="@/assets/curso/tema3/12.svg", style="max-width: 222px").mx-auto
                .col-lg.order-1.mb-3.mb-lg-0
                  div.bg-color-white.p-3.tarjeta
                    ul.lista-ul--color.mb-0
                      li.mb-0.d-flex
                        i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                        p
                          span.text-bold Corto plazo (0–6 meses) <br>
                          | Acciones inmediatas, visibles y de bajo costo.
                      li.mb-0.d-flex
                        i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                        p
                          span.text-bold Mediano plazo (6–18 meses) <br>
                          | Consolidación de prácticas, formación técnica, articulación institucional.
                      li.mb-0.d-flex
                        i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                        p
                          span.text-bold Consolidación de prácticas, formación técnica, articulación institucional. <br>
                          | Transformaciones estructurales, escalamiento territorial, incidencia política.

        p.mb-5 Este cronograma puede representarse en formato de calendario mural, tabla por trimestres o línea de tiempo.

        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/4.png")
            h3.titulo-con-imagen__texto Responsables

        p.mb-5 Se asignan responsabilidades claras para cada actividad, reconociendo los roles familiares, comunitarios e institucionales:

        .bg-color-13.p-5.tarjeta(data-aos="fade-left").mb-5
          .row.align-items-center
            .col-lg-4.mb-3.mb-lg-0.order-lg-2
              figure
                img(src="@/assets/curso/tema3/13.png", data-aos="zoom-in")
            .col-lg-8.order-lg-1
              div.bg-color-white.tarjeta.p-4.mb-3
                ul.lista-ul--color.mb-0
                  li.mb-3.d-flex
                    i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                    p.mb-0 Familia campesina (ejecución directa, seguimiento, toma de decisiones)
                  li.mb-3.d-flex
                    i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                    p.mb-0 Facilitador agroecológico (acompañamiento técnico, sistematización, formación)
                  li.mb-3.d-flex
                    i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                    p.mb-0 Semillero o red local (apoyo pedagógico, intercambio de saberes)
                  li.mb-3.d-flex
                    i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                    p.mb-0 Organización comunitaria (gestión de recursos, articulación territorial)
                  li.mb-3.d-flex
                    i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                    p.mb-0 Entidad pública o aliada (apoyo logístico, formación, cofinanciación)
              p La corresponsabilidad fortalece la autonomía y evita la dependencia técnica.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/4.png")
        h3.titulo-con-imagen__texto Costos estimados
    
    p.mb-5 A continuación, se presentan los principales tipos de costos a considerar para la implementación de un plan agroecológico comunitario:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-color-5.p-4.tarjeta
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/15.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Insumos materiales
              ul.lista-ul--color.mb-0
                li.mb-0.d-flex
                  i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                  p.mb-0 Semillas nativas y criollas
                li.mb-0.d-flex
                  i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                  p.mb-0 Herramientas básicas (palas, azadones, regaderas, mallas)
                li.mb-0.d-flex
                  i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                  p.mb-0 Materiales para bioinsumos (melaza, cal, ceniza, microorganismos locales)
                li.mb-0.d-flex
                  i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                  p.mb-0 Elementos para infraestructura ecológica (madera, guadua, plástico reciclado, geomembrana)
                li.mb-0.d-flex
                  i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                  p.mb-0 Material vegetal para cercas vivas, huertas y corredores ecológicos
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/16.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Mano de obra
              ul.lista-ul--color.mb-0
                li.mb-0.d-flex
                  i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                  p.mb-0 Trabajo familiar (horas invertidas en actividades productivas y de formación)
                li.mb-0.d-flex
                  i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                  p.mb-0 Mano de obra comunitaria (mingas, trueques, apoyo mutuo)
                li.mb-0.d-flex
                  i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                  p.mb-0 Mano de obra comunitaria (mingas, trueques, apoyo mutuo)
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/17.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Formación y acompañamiento técnico
              ul.lista-ul--color.mb-0
                li.mb-0.d-flex
                  i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                  p.mb-0 Talleres vivenciales, materiales pedagógicos, cartillas, bitácoras
                li.mb-0.d-flex
                  i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                  p.mb-0 Honorarios de facilitadores, transporte y alimentación en salidas de campo
                li.mb-0.d-flex
                  i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                  p.mb-0 Participación en eventos como ECOVIDA, intercambios territoriales, aulas vivas
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/18.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Logística y operación
              ul.lista-ul--color.mb-0
                li.mb-0.d-flex
                  i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                  p.mb-0 Transporte de materiales y personas
                li.mb-0.d-flex
                  i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                  p.mb-0 Alimentación durante jornadas comunitarias
                li.mb-0.d-flex
                  i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                  p.mb-0 Alojamiento en actividades regionales o nacionales
                li.mb-0.d-flex
                  i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                  p.mb-0 Comunicación, impresión de materiales, registro audiovisual
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/19.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Gestión institucional y solidaria
              ul.lista-ul--color.mb-0
                li.mb-0.d-flex
                  i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                  p.mb-0 Aportes de la vereda, la junta, el cabildo u otra forma de organización
                li.mb-0.d-flex
                  i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                  p.mb-0 Aportes de programas públicos (bioinsumos, semillas, formación)
                li.mb-0.d-flex
                  i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                  p.mb-0 Donaciones o convenios con ONGs, universidades, redes agroecológicas
                li.mb-0.d-flex
                  i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                  p.mb-0 Intercambios solidarios (trueque de semillas, herramientas compartidas, saberes)

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/4.png")
        h3.titulo-con-imagen__texto Herramientas para organizar los costos
    
    p.mb-5 Para facilitar la planificación y el seguimiento financiero, se pueden emplear las siguientes herramientas:

    .row.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema3/20.png", alt="").mb-4.mb-lg-0
      .col-lg-8.order-lg-1
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .div(titulo="Matriz de costos por actividad")
            p Cada acción priorizada se desglosa en insumos, mano de obra, formación y logística, con valores estimados y fuentes de financiación posibles.
          .div(titulo="Presupuesto por componente agroecológico")
            p Los costos se agrupan por ejes: suelo, agua, biodiversidad, economía, organización y cultura.
          .div(titulo="Ficha técnica de inversión territorial")
            p Resume el total estimado del plan, diferenciando lo que puede cubrir la familia, lo que requiere gestión comunitaria y lo que se propone para apoyo institucional.
    
    .bg-full-width.bg-color-19
      .px-4.px-md-5
        .row.mb-5.align-items-center
          .col-lg-5.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema3/21.png", data-aos="zoom-in")
          .col-lg-7
            p Un presupuesto participativo, transparente y argumentado permite implementar el plan de acción con claridad financiera, facilita la gestión de apoyos y fortalece la corresponsabilidad entre actores. Además, este componente sirve como base para:
            .bg-color-24.p-4.tarjeta(data-aos="fade-left")
              .row.align-items-center
                .col-lg
                  div.bg-color-white.p-3.tarjeta
                    ul.lista-ul--color.mb-0
                      li.mb-0.d-flex
                        i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                        p Solicitudes institucionales.
                      li.mb-0.d-flex
                        i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                        p Informes de avance.
                      li.mb-0.d-flex
                        i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                        p Evaluación del impacto agroecológico.
        
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/4.png")
            h3.titulo-con-imagen__texto Ejemplo aplicado: sistema de captación de agua lluvia

        .row.mb-5.align-items-center
          .col-lg-4.order-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema3/22.png", data-aos="zoom-in")
          .col-lg-8.order-lg-1
            p.mb-5 La planificación de costos en proyectos agroecológicos debe traducirse en acciones concretas y viables, adaptadas al contexto y a las prioridades del territorio. A continuación, se presenta un ejemplo aplicado que permite visualizar cómo se organiza un presupuesto estimado para una actividad priorizada, integrando componentes técnicos, comunitarios y formativos. Este caso se basa en una necesidad identificada a través del diagnóstico participativo IPPTA y muestra el desglose de costos asociados a la instalación de un sistema de cosecha de agua lluvia.
            .bg-color-25.p-4.tarjeta(data-aos="fade-left")
              .row.align-items-center
                .col-lg-auto.mb-3.mb-lg-0
                  img(src="@/assets/curso/tema3/23.png", style="max-width: 222px").mx-auto
                .col-lg
                  div.bg-color-white.p-3.tarjeta
                    p.text-bold Actividad priorizada
                    ul.lista-ul--color.mb-0
                      li.mb-0.d-flex
                        i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                        p <b>Diagnóstico</b>: IPPTA
                      li.mb-0.d-flex
                        i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                        p <b>Indicador asociado</b>: Manejo del agua
                      li.mb-0.d-flex
                        i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                        p <b>Objetivo</b>: Mejorar la disponibilidad y gestión del recurso hídrico en el predio mediante la instalación de un sistema de captación de agua lluvia, aprovechando techos existentes y almacenando el agua en reservorios para uso agrícola, doméstico y ecológico.

        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/4.png")
            h3.titulo-con-imagen__texto Desglose de costos estimados
        
        p.mb-5 A continuación se presenta el desglose detallado de los costos asociados a la instalación de un sistema de cosecha de agua lluvia, elaborado de manera participativa para facilitar la planificación financiera y la toma de decisiones en el predio. Este cálculo integra materiales, procesos formativos y aportes comunitarios, permitiendo estimar de forma clara los recursos necesarios para su implementación.

    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 2.
          span Costos de instalación del sistema de cosecha de agua lluvia
        .tabla-a.color-acento-botones.mb-5.tab
          table
            thead
              tr
                th.bg-color-2 Componente
                th.bg-color-2 Detalle
                th.bg-color-2 Costo estimado (COP)
            tbody.bg-color-white
              tr.bg-color-sintesis
                td Canaletas de PVC
                td Canales de PVC de 12 m × 3 in
                td $100.000
              tr
                td Codos y bajantes
                td Conexiones y tubería de entrada
                td $48.000
              tr.bg-color-sintesis
                td Filtro lento
                td Balde con grava, arena y carbón activado
                td $40.000
              tr
                td Tanque plástico
                td Tanque de 1.000 L con tapa
                td $500.000
              tr.bg-color-sintesis
                td Materiales menores
                td Tornillos, abrazaderas, sellantes
                td $30.000
              tr
                td Transporte
                td Flete desde el centro urbano
                td $50.000
              tr.bg-color-sintesis
                td Alimentación de la minga
                td Refrigerio y almuerzo para 5 personas
                td $70.000
              tr
                td Taller de formación técnica
                td Facilitador con experiencia en cosecha de agua
                td $80.000
              tr.bg-color-sintesis
                td TOTAL
                td 
                td $918.000

    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/4.png")
        h3.titulo-con-imagen__texto Fuentes de financiación
    
    p.mb-5 Un componente clave en la implementación de sistemas agroecológicos es la identificación clara de las fuentes de financiación. Estas pueden combinar esfuerzos familiares, comunitarios e institucionales, promoviendo así la corresponsabilidad y la sostenibilidad a largo plazo.

    .row.mb-5.justify-content-center
      .col-sm-6.col-lg-4.mb-4.mb-lg-0(data-aos="fade-down")
        .tarjeta--boton.bg-color-1.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema3/24.svg', alt='Texto que describa la imagen')
          h5.text-center Aporte familiar
          p.text-center Materiales locales (ej. madera o piedras disponibles), mano de obra directa de la familia 
      .col-sm-6.col-lg-4.mb-4.mb-lg-0(data-aos="fade-up")
        .tarjeta--boton.bg-color-1.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema3/25.svg', alt='Texto que describa la imagen')
          h5.text-center Aporte comunitario
          p.text-center Trabajo colectivo mediante mingas, uso de herramientas compartidas y apoyo mutuo   
      .col-sm-6.col-lg-4.mb-4.mb-sm-0(data-aos="fade-down")
        .tarjeta--boton.bg-color-1.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema3/26.svg', alt='Texto que describa la imagen')
          h5.text-center Gestión institucional
          p.text-center Apoyo técnico y logístico a través del programa de extensión agropecuaria y del semillero, incluyendo facilitador especializado
    
    p.mb-5 Este ejemplo ilustra cómo estructurar un presupuesto agroecológico desde una perspectiva participativa, argumentada y orientada a la acción. La claridad financiera fortalece la gestión colectiva, facilita el acceso a apoyos institucionales y promueve la sostenibilidad de las iniciativas comunitarias.

    separador
    
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2 Formulación de cronogramas y estrategias de acompañamiento

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema3/27.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") La formulación del cronograma y las estrategias de acompañamiento permite organizar el tiempo y definir los mecanismos de apoyo al plan de acción agroecológico. Se trata de establecer cuándo se desarrollan las actividades, cómo se acompaña el proceso y qué herramientas permiten el seguimiento, la adaptación y el fortalecimiento territorial.
    
        .bg-color-6.tarjeta.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto.mb-3.mb-lg-0
              img(src="@/assets/curso/tema3/28.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Esta etapa convierte el plan en una ruta viva, con ritmos, momentos y vínculos que sostienen la transición agroecológica desde lo familiar, comunitario e institucional.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/4.png")
        h3.titulo-con-imagen__texto ¿Cuándo se va a hacer cada actividad?
    
    .row.mb-5.align-items-center
      .col-lg-5.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/29.png", data-aos="zoom-in")
      .col-lg-7.order-lg-1
        p Se construye un calendario adaptativo, articulado con:
        .row.align-items-center
          .col-lg-auto.mb-3.mb-lg-0
            img(src="@/assets/curso/tema3/30.svg", style="max-width: 222px").mx-auto
          .col-lg
            .bg-color-13.p-4.tarjeta(data-aos="fade-left")
              div.bg-color-white.p-3.tarjeta
                ul.lista-ul--color.mb-0
                  li.mb-0.d-flex
                    i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                    p Los ciclos productivos del territorio.
                  li.mb-0.d-flex
                    i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                    p Los tiempos familiares y comunitarios.
                  li.mb-0.d-flex
                    i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                    p Los procesos formativos e institucionales.

    p.mb-5 Este cronograma puede representarse en distintos formatos:

    .row.align-items-center.mb-5
      .col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/31.png", alt="").mb-4.mb-lg-0
      .col-lg-9
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .div(titulo="Calendario por trimestres o semestres")
            p Visualiza qué se hace en cada periodo, quién lo ejecuta y qué recursos se requieren.
          .div(titulo="Línea de tiempo 6/18/36 meses")
            p Divide el plan en tres horizontes temporales:
            ul.lista-ul--color.mb-0
              li.mb-0.d-flex
                i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                p Corto plazo (0-6 meses): acciones inmediatas, visibles y de bajo costo.
              li.mb-0.d-flex
                i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                p Mediano plazo (6-18 meses): consolidación de prácticas, formación técnica, articulación institucional.
              li.mb-0.d-flex
                i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                p Largo plazo (18-36 meses): transformaciones estructurales, escalamiento territorial, incidencia política.
          .div(titulo="Integración con calendarios locales")
            p Se vinculan fechas simbólicas, eventos comunitarios, ciclos de lluvia y cosecha, reforzando el arraigo territorial y cultural.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/4.png")
        h3.titulo-con-imagen__texto ¿Cómo se va a acompañar el proceso?
    
    p.mb-5 Se definen estrategias técnicas y pedagógicas que aseguran el sostenimiento del plan, fortalecen capacidades locales y evitan la fragmentación del proceso. Estas estrategias incluyen acompañamiento directo, espacios formativos, herramientas de registro y articulaciones territoriales.

    .bg-full-width.bg-fondo-1
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.p-4.align-items-center.mb-5
          .col-lg-9.mb-3.mb-lg-0.order-lg-2.p-4
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema3/33.svg' alt='AvatarTop' , style="max-width: 136px").mx-auto.mb-3
                h4.text-center.mb-4 Visitas técnicas periódicas
                p.text-center Acompañamiento en campo para revisar avances, ajustar prácticas y resolver dificultades. Se recomienda mínimo una visita por trimestre.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema3/34.svg' alt='AvatarTop' , style="max-width: 136px").mx-auto.mb-3
                h4.text-center.mb-4 Talleres vivenciales / aulas vivas
                p.text-center Espacios de formación práctica donde se comparten saberes, se validan experiencias y se fortalecen vínculos entre familias y actores locales.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema3/35.svg' alt='AvatarTop' , style="max-width: 136px").mx-auto.mb-3
                h4.text-center.mb-4 Bitácora de campo
                p.text-center Registro participativo de actividades, observaciones, aprendizajes y ajustes. Puede incluir fotos, mapas, fichas técnicas y reflexiones.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema3/36.svg' alt='AvatarTop' , style="max-width: 136px").mx-auto.mb-3
                h4.text-center.mb-4 Devoluciones y ajustes del plan
                p.text-center Espacios de revisión colectiva para evaluar avances, reorganizar prioridades y adaptar estrategias a nuevos contextos o aprendizajes.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema3/37.svg' alt='AvatarTop' , style="max-width: 136px").mx-auto.mb-3
                h4.text-center.mb-4 Articulación territorial
                p.text-center Vínculo con semilleros, redes agroecológicas y entidades públicas que aportan formación, recursos, visibilidad y respaldo político.
          .col-lg-3.order-lg-1
            figure
              img(src='@/assets/curso/tema3/32.png', alt='')

        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/4.png")
            h3.titulo-con-imagen__texto Herramientas complementarias para el seguimiento
    
    p.mb-5 El seguimiento del plan requiere instrumentos que faciliten la evaluación por componentes y la documentación de actores involucrados.

    .row.mb-5.justify-content-center
      .col-sm-6.col-lg-4.mb-4.mb-lg-0(data-aos="fade-down")
        .tarjeta--boton.bg-color-11.p-5.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema3/38.svg', alt='Texto que describa la imagen')
          h5.text-center Matriz de seguimiento por componente
          p.text-center Registra avances por eje agroecológico (suelo, agua, biodiversidad, economía, organización) con indicadores simples.
      .col-sm-6.col-lg-4.mb-4.mb-lg-0(data-aos="fade-up")
        .tarjeta--boton.bg-color-11.p-5.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema3/39.svg', alt='Texto que describa la imagen')
          h5.text-center Formatos de acompañamiento institucional
          p.text-center Formatos de acompañamiento institucional
      .col-sm-6.col-lg-4.mb-4.mb-sm-0(data-aos="fade-down")
        figure
          img(src='@/assets/curso/tema3/40.png', alt='Texto que describa la imagen')

    p.mb-5 Un cronograma claro, flexible y contextualizado, junto con estrategias pedagógicas y técnicas apropiadas, refuerza la autonomía del sistema agroecológico, la apropiación comunitaria y la sostenibilidad del proceso. Este componente convierte el plan de acción en un proceso vivo, colectivo y transformador.

    separador
    
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.3 Presentación del plan y ajustes finales

    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/41.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La presentación del plan agroecológico predial marca el cierre de la fase de planificación y el inicio de su implementación. Este momento es técnico, simbólico y organizativo, pues permite validar colectivamente el plan construido, fortalecer su pertinencia territorial y asegurar su viabilidad en el tiempo. El plan deja de ser solo un documento: se convierte en una propuesta viva, compartida y proyectada hacia el futuro.
  
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/4.png")
        h3.titulo-con-imagen__texto Presentación del plan agroecológico

    p.mb-5 La forma de presentar el plan debe responder al contexto, los actores involucrados y los objetivos pedagógicos o territoriales. A continuación, se describen los principales formatos:

    TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
      .p-3.p-md-4(titulo="Socialización familiar o comunitaria")
        .row.justify-content-center.align-items-center
          .col-lg-6.mb-4.mb-md-0.order-2
            h4 Socialización familiar o comunitaria
            p Se comparte el diagnóstico, los mapas prediales y el plan de acción con la familia o comunidad. Favorece el reconocimiento mutuo y la apropiación colectiva.
          .col-lg-5.order-1.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema3/42.png', alt='Texto que describa la imagen')
      .p-3.p-md-4(titulo="Entrega institucional o pedagógica")
        .row.justify-content-center.align-items-center
          .col-lg-6.mb-4.mb-md-0.order-2
            h4 Entrega institucional o pedagógica
            p Presentación ante docentes, facilitadores o entidades aliadas. Útil para sistematización, evaluación o articulación técnica.
          .col-lg-5.order-1.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema3/43.png', alt='Texto que describa la imagen')
      .p-3.p-md-4(titulo="Exposición pública")
        .row.justify-content-center.align-items-center
          .col-lg-6.mb-4.mb-md-0.order-2
            h4 Exposición pública
            p Uso de cartografías, bitácoras, guías o materiales audiovisuales. Visibiliza el proceso y convoca a nuevos actores territoriales.
          .col-lg-5.order-1.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema3/44.png', alt='Texto que describa la imagen')
      
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/4.png")
        h3.titulo-con-imagen__texto Ajustes finales del plan
  
    p.mb-5 La presentación del plan no es un cierre definitivo, sino una oportunidad para ajustar, mejorar y fortalecer el proceso. Los ajustes finales permiten asegurar que el plan sea contextualizado, funcional y legítimo.

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-color-5.p-4.tarjeta
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/45.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Retroalimentación técnica o comunitaria
              p Observaciones sobre la viabilidad de las acciones, cronogramas, indicadores o metodologías.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/46.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Cambios en el contexto territorial
              p Adaptaciones frente a variaciones climáticas, conflictos de uso del suelo, emergencias o nuevas oportunidades institucionales.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/47.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Revisión pedagógica o metodológica
              p Mejoras en redacción, secuencia de actividades, presentación visual o integración de saberes locales.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/48.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Incorporación de nuevos actores o recursos
              p Inclusión de entidades, redes o proyectos que fortalecen el alcance y sostenibilidad del plan.
    
    .bg-color-4.tarjeta.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto.mb-3.mb-lg-0
            img(src="@/assets/curso/tema3/49.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Un plan agroecológico predial validado, ajustado y apropiado por quienes lo construyen y lo ejecutan, no se cierra, se proyecta. Queda listo para ser implementado, acompañado y fortalecido en el tiempo como parte de un proceso más amplio de transición agroecológica territorial.
       


</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
