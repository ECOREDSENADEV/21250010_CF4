<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Insumos para la formulación del plan de acción 
    
    .bg-full-width.bg-color-19
      .px-4.px-md-5
        .row.mb-5
          .col-lg-5.order-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema2/1.png", data-aos="zoom-in")
          .col-lg-7.order-lg-1
            .row.align-items-center.mb-3
              .col-lg-auto.mb-3.mb-lg-0
                img(src="@/assets/curso/tema2/2.svg", style="max-width: 190px").mx-auto
              .col-lg
                p.mb-0  La formulación del plan de acción agroecológico requiere integrar diversos insumos que permiten pasar del análisis integral del agroecosistema al diseño predial con sentido transformador. Estos elementos incluyen el diagnóstico participativo con los 21 indicadores IPPTA, la valoración del estado de transición agroecológica mediante el diagrama radial, la identificación de puntos críticos, los mapas actuales y futuros del sistema predial, así como los criterios de priorización construidos con la familia.
            .bg-color-4.p-4.mb-5.tarjeta(data-aos="fade-up")
              p(data-aos="fade-left") Cada componente aporta información técnica, simbólica y organizativa que, al articularse, permite construir un plan coherente, viable y arraigado en el territorio. De este modo, el diseño predial no se reduce a una lista de actividades, sino que se convierte en una hoja de ruta agroecológica que orienta el cambio, fortalece la autonomía y proyecta escenarios sostenibles desde lo local.
        
        separador
        
        #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 2.1 Articulación entre diagnóstico, valoración y planificación
        
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/3.png')})`}"
          )(data-aos="zoom-in")
          .bloque-texto-g__texto.p-4
            p.mb-0 La construcción del plan de acción en el marco del IPPTA se desarrolla a través de cuatro momentos interdependientes: diagnóstico participativo, valoración del estado de transición agroecológica, elaboración de mapas del sistema y planificación predial. Esta secuencia no es lineal ni rígida; es un proceso dialógico, situado y pedagógico, donde cada etapa alimenta a la siguiente y permite que las decisiones técnicas estén arraigadas en el territorio, los saberes locales y las prioridades familiares. A continuación, se describen los principales insumos de esta articulación metodológica:
        
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/4.png")
            h3.titulo-con-imagen__texto Diagnóstico participativo con los 21 indicadores IPPTA

        .row.mb-5
          .col-lg-5.order-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema2/4.png", data-aos="zoom-in")
          .col-lg-7.order-lg-1
            p(data-aos="fade-left") Este diagnóstico permite una lectura integral del agroecosistema en sus dimensiones ecológica, productiva, social, cultural, económica y organizativa, aplicando los 21 indicadores IPPTA. No solo evalúan prácticas, sino que revelan relaciones, tensiones y potencialidades del sistema predial.
        
            .bg-color-6.p-5.tarjeta(data-aos="fade-left")
              div.bg-color-white.tarjeta.p-3
                ul.lista-ul--color.mb-0
                  li.mb-0.d-flex
                    i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                    p.mb-0 Se aplican directamente en campo mediante recorridos interpretativos, entrevistas familiares, cartografías sociales y observaciones directas.
                  li.mb-0.d-flex
                    i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                    p.mb-0 Cada indicador se puntúa en una escala de 1 a 5, que refleja el nivel de avance agroecológico (de prácticas convencionales a prácticas consolidadas).
                  li.mb-0.d-flex
                    i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                    p.mb-0 El proceso es completamente participativo: la familia interpreta los resultados junto con el facilitador, aportando contexto, memoria y sentido.

        p.mb-5 La aplicación de estos indicadores se desarrolla más a fondo en los otros tres cursos o Estaciones de la Ruta de Formación IPPTA.

        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/4.png")
            h3.titulo-con-imagen__texto Valoración del Estado de Transición Agroecológica (ETA)
        
        p.mb-5 Una vez completado el diagnóstico, se construye el diagrama radial IPPTA, que representa gráficamente el estado del predio en cada dimensión evaluada. Esta herramienta permite visualizar fortalezas, brechas y desequilibrios de forma clara, generando condiciones para la reflexión colectiva.

        .row.mb-5.align-items-center
          .col-lg-5.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema2/5.png", data-aos="zoom-in")
          .col-lg-7
            .bg-color-13.p-5.tarjeta(data-aos="fade-left")
              div.bg-color-white.tarjeta.p-4
                ul.lista-ul--color.mb-0
                  li.mb-0.d-flex
                    i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                    p.mb-0 El diagrama no es únicamente técnico; actúa como instrumento pedagógico, ayudando a la familia a ver su finca como un sistema vivo.
                  li.mb-0.d-flex
                    i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                    p.mb-0 A partir de la figura resultante, se identifican puntos críticos, es decir, indicadores con baja puntuación o alto impacto sistémico, como el manejo de suelos, agua, semillas, salud animal o comercialización.
                  li.mb-0.d-flex
                    i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                    p.mb-0 La sumatoria de los indicadores permite estimar un Estado de Transición Agroecológica.
                  li.mb-0.d-flex
                    i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                    p.mb-0 Esta valoración trasciende lo técnico y considera también aspectos simbólicos, organizativos y culturales que influyen directamente en la transición.  

        p.mb-5 Este diagrama sintetiza la valoración participativa del agroecosistema y permite identificar fortalezas, brechas y prioridades para orientar la transición agroecológica del predio.

        .row.justify-content-center.mb-5
          .col-lg-10
            .titulo-sexto.color-acento-contenido
              h5 Figura 1.
              span Diagrama radial del estado de transición agroecológica en la finca
            figure
              img(src="@/assets/curso/tema2/6.png", data-aos="zoom-in", alt="Gráfico de radar con 21 indicadores sobre prácticas agroecológicas en fincas, que evalúan aspectos como manejo del suelo y agua, biodiversidad, producción, participación familiar, autosuficiencia alimentaria y conservación del entorno. ")
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/4.png")
        h3.titulo-con-imagen__texto Planificación predial con énfasis en los puntos críticos
    
    p.mb-5 La planificación agroecológica se construye a partir de los resultados del diagnóstico y la valoración, priorizando acciones que respondan a los puntos críticos identificados. No se trata de hacer muchas cosas, sino de hacer lo necesario con sentido, coherencia y viabilidad. Esta planificación contempla los siguientes elementos:

    .bg-full-width.bg-fondo-slider
      .p-4.p-md-5
        SlyderA(tipo="b").bg-color-5.p-4.tarjeta
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/7.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Actividades por componente
              p Se establecen acciones concretas distribuidas en los componentes suelo, agua, biodiversidad, economía y organización, garantizando coherencia con las necesidades detectadas en el diagnóstico.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/8.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Cronograma tentativo
              p Se estructura un orden temporal que armoniza las acciones con los ciclos productivos, los tiempos familiares y los momentos comunitarios, evitando sobrecargas y favoreciendo la planificación colectiva.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/9.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Recursos y responsabilidades
              p Se precisan los materiales, la mano de obra y el apoyo institucional requeridos. Además, se asignan responsabilidades compartidas para asegurar corresponsabilidad en la ejecución.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/10.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Metas por horizonte temporal
              p Se formulan metas para el corto, mediano y largo plazo, reconociendo que la transición requiere continuidad, ajustes periódicos y una lectura constante del proceso.
    
    separador
    
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Criterios para priorizar actividades
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/11.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p.mb-5(data-aos="fade-left") Una vez realizado el diagnóstico con los 21 indicadores IPPTA y valorado el estado de transición agroecológica mediante el diagrama radial, el siguiente paso es decidir qué actividades se deben implementar primero en el predio.
    
        .bg-color-1.tarjeta.p-4(data-aos="fade-left")
          .row.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              img(src="@/assets/curso/tema2/12.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Esta priorización no se basa únicamente en la urgencia técnica, sino en un conjunto de criterios que permiten orientar la planificación con coherencia agroecológica, viabilidad territorial y sentido pedagógico. Priorizar no es descartar lo demás: es reconocer qué acciones tienen mayor capacidad de transformación, aprendizaje y sostenibilidad, en el contexto específico de cada finca y familia.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/4.png")
        h3.titulo-con-imagen__texto ¿Cómo se prioriza?
    
    p.mb-5 Para orientar esta decisión de manera clara y efectiva, se consideran criterios clave que permiten evaluar cada actividad propuesta en función de su relevancia ecológica, su viabilidad y su contribución a la transformación del agroecosistema. A continuación se presentan los principales criterios de priorización, junto con preguntas orientadoras:

    .row.mb-5
      .col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/13.png", data-aos="zoom-in")
      .col-lg-9
        LineaTiempoD.color-secundario
          p(numero="1" titulo="Impacto ecológico") ¿La actividad mejora la salud del suelo, la biodiversidad, el manejo del agua o la resiliencia del agroecosistema?
          p(numero="2" titulo="Viabilidad técnica y económica") ¿Es posible implementarla con los recursos, capacidades y tiempos disponibles? ¿Requiere apoyo externo o puede iniciarse con medios locales?
          p(numero="3" titulo="Urgencia territorial") ¿Responde a una necesidad crítica del predio (erosión, contaminación, pérdida de semillas, inseguridad alimentaria)?
          p(numero="4" titulo="Potencial pedagógico y demostrativo") ¿Puede convertirse en aula viva, experiencia replicable o referente comunitario?
          p(numero="5" titulo="Coherencia agroecológica") ¿Está alineada con los principios de la agroecología y contribuye a la transición en más de una dimensión (técnica, social, cultural)?
          p(numero="6" titulo="Fortalecimiento organizativo") ¿Promueve la participación familiar, el diálogo intergeneracional, el rol de mujeres y jóvenes, o la articulación comunitaria?
          p(numero="7" titulo="Articulación institucional") ¿Puede conectarse con programas públicos, políticas agroecológicas, apoyos técnicos o circuitos de comercialización?

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/4.png")
        h3.titulo-con-imagen__texto Herramientas para aplicar los criterios
    
    p.mb-5 Para hacer operativa la priorización, se recomienda el uso de herramientas participativas que faciliten el análisis colectivo:

    .row.align-items-center.mb-5
      .col-lg-3.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema2/14.png", alt="").mb-4.mb-lg-0
      .col-lg-9.order-lg-1
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .div(titulo="Matriz de priorización participativa")
            p Se elabora junto con la familia y asigna puntajes a cada actividad según los criterios acordados. Facilita la identificación de las acciones con mayor capacidad de transformación dentro del predio.
          .div(titulo="Semáforo de viabilidad")
            p Clasifica cada actividad según su posibilidad de ejecución inmediata.
            p
              span.bg-color-21 Verde:
              |  puede hacerse ya
            p
              span.bg-color-22 Amarillo:
              |  requiere ajustes o apoyo
            p
              span.bg-color-23 Rojo:
              |  no viable en el corto plazo
          .div(titulo="Mapa de puntos críticos")
            p Ubica en el espacio los problemas prioritarios del predio, como zonas erosionadas, sectores sin cobertura vegetal o áreas con contaminación. Esta representación facilita orientar decisiones de intervención territorial.
          .div(titulo="Línea de tiempo agroecológica")
            p Articula las actividades priorizadas con los ciclos productivos, los tiempos familiares y los momentos comunitarios. Permite organizar las acciones sin generar sobrecarga y en coherencia con los ritmos del agroecosistema.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/4.png")
        h3.titulo-con-imagen__texto Ejemplo de aplicación
    
    p.mb-5 Supongamos que el diagnóstico IPPTA revela:

    .row.mb-5.justify-content-center
      .col-sm-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-down")
        .tarjeta--boton.bg-color-1.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema2/16.svg', alt='Texto que describa la imagen')
          p.text-center Baja puntuación en manejo de suelos.    
      .col-sm-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-up")
        .tarjeta--boton.bg-color-1.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema2/17.svg', alt='Texto que describa la imagen')
          p.text-center Escasa diversidad de cultivos.    
      .col-sm-6.col-lg-3.mb-4.mb-sm-0(data-aos="fade-down")
        .tarjeta--boton.bg-color-1.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema2/18.svg', alt='Texto que describa la imagen')
          p.text-center Alta dependencia de agroquímicos.
      .col-sm-6.col-lg-3.mb-4.mb-sm-0(data-aos="fade-down")
        figure
          img(src='@/assets/curso/tema2/15.png', alt='Texto que describa la imagen')

    p.mb-5 La familia propone las siguientes acciones: compostaje, huerta diversificada, bioinsumos, cercas vivas, recuperación de semillas. La siguiente tabla reúne las actividades priorizadas con su justificación y nivel de importancia, facilitando decisiones claras para orientar la transición agroecológica del predio.

    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1.
          span Priorización de actividades para la transición agroecológicaa
        .tabla-a.color-acento-botones.mb-5.tab
          table
            thead
              tr
                th.bg-color-2 Actividad
                th.bg-color-2 Justificación según criterios
                th.bg-color-2 Prioridad
            tbody.bg-color-white
              tr.bg-color-sintesis
                td Compostaje
                td Alto impacto ecológico, viable con recursos locales, urgente por erosión
                td Alta
              tr
                td Huerta diversificada
                td Alto valor pedagógico, requiere reorganización del tiempo familiar
                td Media
              tr.bg-color-sintesis
                td Bioinsumos
                td Requiere capacitación y materiales específicos
                td Media-baja
              tr
                td Cercas vivas
                td Contribuye a la conservación y mejora del paisaje agroecológico
                td Alta
              tr.bg-color-sintesis
                td Recuperación de semillas
                td Alto valor cultural, pero requiere redes y articulación externa
                td Media


    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/4.png")
        h3.titulo-con-imagen__texto Validación y planificación
    
    p.mb-5 La lista de actividades priorizadas, con justificación clara, orienta la planificación predial y permite avanzar paso a paso en la transición agroecológica. Esta lista debe:

    .row.mb-5.align-items-center
      .col-lg-7.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema2/19.png", data-aos="zoom-in")
      .col-lg-5.order-lg-1
        .bg-color-13.p-5.tarjeta(data-aos="fade-left")
          div.bg-color-white.tarjeta.p-4
            ul.lista-ul--color.mb-0
              li.mb-0.d-flex
                i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                p.mb-0 Estar validada por la familia.
              li.mb-0.d-flex
                i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                p.mb-0 Quedar documentada en el plan de acción.
              li.mb-0.d-flex
                i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                p.mb-0 Estar articulada con el cronograma y el presupuesto.

    separador
    
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.3 Herramientas para secuenciar acciones y estimar costos

    .row.mb-5
      .col-lg-3.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/20.png", data-aos="zoom-in")
      .col-lg-9.order-lg-1
        p(data-aos="fade-left") Una vez priorizadas las actividades agroecológicas en función de los puntos críticos del diagnóstico IPPTA y de los criterios construidos con la familia, es necesario organizarlas en el tiempo y estimar los recursos requeridos. Esta etapa convierte las ideas en acciones concretas, viables y sostenibles, permitiendo que el plan de acción predial se convierta en una hoja de ruta clara y ejecutable.
        .bg-color-13.tarjeta.p-4(data-aos="fade-left")
          div.bg-color-white.p-4.tarjeta
            .row.align-items-center
              .col-lg-auto.mb-3.mb-lg-0
                img(src="@/assets/curso/tema2/21.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 La secuenciación y el presupuesto no son trámites administrativos: son herramientas pedagógicas que ayudan a distribuir esfuerzos, evitar sobrecargas, anticipar necesidades y fortalecer la corresponsabilidad entre actores.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/4.png")
        h3.titulo-con-imagen__texto ¿Cómo secuenciar las actividades agroecológicas?
    
    p.mb-5 A continuación, se presentan herramientas que permiten organizar las acciones priorizadas en el tiempo y en el espacio, articulándolas con los ciclos productivos, los calendarios familiares y los ritmos comunitarios:

    .bg-full-width.bg-fondo-slider
      .p-4.p-md-5
        SlyderA(tipo="b").bg-color-5.p-4.tarjeta
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/22.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Cronograma agroecológico
              p Organiza las actividades según los ciclos productivos, estaciones, fases lunares o momentos comunitarios. Puede elaborarse como calendario mural, tabla trimestral o línea de tiempo. Permite visualizar qué se hace en cada mes, quién lo hace y qué se necesita.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/23.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Línea de tiempo 6/18/36 meses
              p Divide el plan en tres horizontes: corto plazo (acciones inmediatas), mediano plazo (consolidación de prácticas) y largo plazo (transformaciones estructurales). Ayuda a proyectar metas escalonadas y revisar avances periódicamente.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/24.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Mapa de implementación
              p Ubica espacialmente las acciones dentro del predio: compostera, huerta, cercas vivas, reservorio, etc. Se construye sobre el mapa futuro del sistema predial, y permite coordinar tareas con claridad territorial.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/25.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Bitácora de campo (cuaderno de seguimiento)
              p Registro sencillo de actividades realizadas, observaciones, aprendizajes y ajustes. Fortalece la memoria del proceso y permite evaluar avances en conjunto con la familia.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/4.png")
        h3.titulo-con-imagen__texto ¿Cómo estimar los costos y recursos necesarios
    
    p.mb-5 Una vez que las actividades han sido secuenciadas, es indispensable estimar los costos asociados y definir fuentes de apoyo. Las siguientes herramientas permiten realizar este ejercicio de manera participativa y contextualizada:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-color-5.p-4.tarjeta
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/26.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Presupuesto participativo
              p Se construye con la familia, diferenciando los siguientes rubros:
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                  p.mb-0 Insumos materiales (semillas, herramientas, bioinsumos)	
                li.mb-0.d-flex
                  i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                  p.mb-0 Mano de obra (propia, contratada, comunitaria)	
                li.mb-0.d-flex
                  i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                  p.mb-0 Aportes institucionales (si los hay)
                li.mb-0.d-flex
                  i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                  p.mb-0 Intercambios solidarios (trueque, apoyo mutuo)	
              p Permite identificar qué puede hacerse con recursos propios y qué requiere gestión externa.	
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/27.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Ficha técnica por actividad
              p Detalla cada acción con: objetivos, pasos, materiales, tiempos, riesgos y costos estimados. Facilita la planificación detallada y la búsqueda de apoyos específicos.	
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/28.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Matriz de recursos y aliados
              p Relaciona cada actividad con posibles fuentes de apoyo externo, como: programas públicos, organizaciones locales, redes comunitarias y mercados solidarios. Ayuda a articular el plan con el entorno institucional y organizativo.
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/29.png", data-aos="zoom-in")
      .col-lg-8    
        .bg-color-13.tarjeta.p-4(data-aos="fade-left")
          p.text-bold Resultado esperado
          p Una planificación predial clara, secuenciada y presupuestada permite avanzar paso a paso en la transición agroecológica, garantizando:
          ul.lista-ul--color
            li.mb-0.d-flex
              i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
              p.mb-0 Metas realistas	
            li.mb-0.d-flex
              i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
              p.mb-0 Responsabilidades compartidas
            li.mb-0.d-flex
              i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
              p.mb-0 Capacidad de adaptación
          p Este conjunto de herramientas convierte el plan de acción en un instrumento técnico, político y pedagógico, al servicio de la autonomía familiar y la transformación territorial.
    

    



</template>

<script>
export default {
  name: 'Tema2',
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
