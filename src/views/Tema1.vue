<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Fundamentos de la transición agroecológica y la planificación participativa
    
    .bg-color-6.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema1/1.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") La transición agroecológica implica mucho más que una modificación técnica en los sistemas productivos. Supone un cambio profundo en la forma de habitar y organizar el territorio, integrando dimensiones sociales, culturales, económicas y ecológicas. En este contexto, la planificación participativa se convierte en una herramienta clave para construir propuestas colectivas de transformación desde lo local.
    
    separador
    
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1 El plan de acción como herramienta de transformación territorial

    p.mb-5 A continuación, se presenta un análisis del plan de acción agroecológico como herramienta de transformación territorial, destacando su carácter participativo, su enfoque integral y su potencial para promover procesos sostenibles y dignos en el ámbito rural.


    .row
      .col-lg-5.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/2.png", data-aos="zoom-in")
      .col-lg-7.order-lg-1
        .bg-color-7.tarjeta.mb-5
          .p-4
            .row.justify-content-center.align-items-center
              .col-lg-5.mb-3.mb-lg-0
                figure
                  img(src="@/assets/curso/tema1/3.svg", data-aos="zoom-in")
              .col-lg-7
                h2(data-aos="fade-left").mb-4.text-white Pódcast
        
                TarjetaAudio.color-acento-botones.bg-color-white.mb-3(
                  texto="El plan de acción como herramienta de transformación territorial"
                  tiempo
                  :audio="require('../assets/curso/podcast/podcast1.mp3')"
                )
    
    .bg-full-width.bg-color-19
      .px-4.px-md-5
        separador
        
        #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 1.2 Enfoque participativo en el acompañamiento rural

        p.mb-5 Históricamente, la extensión rural se ha entendido como una práctica de transferencia técnica, donde el conocimiento se entrega desde fuera y las comunidades lo reciben pasivamente. Esta lógica vertical, criticada por Paulo Freire en Extensión o comunicación, reproduce relaciones de dependencia y niega la capacidad creadora de las familias campesinas (Freire, 1984).

        .row.mb-5
          .col-lg-5.order-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema1/4.png", data-aos="zoom-in")
          .col-lg-7.order-lg-1
            .row.align-items-center.mb-3
              .col-lg-auto.mb-3.mb-lg-0
                img(src="@/assets/curso/tema1/5.png", style="max-width: 190px").mx-auto
              .col-lg
                p.mb-0  Desde la agroecología, el acompañamiento rural se redefine como un proceso horizontal, dialógico y situado, que reconoce a las familias como querientes del agroecosistema, es decir, como sujetos activos del conocimiento y de la transformación. No se trata de aplicar recetas, sino de construir caminos propios, integrando saberes locales, científicos, normativos y ancestrales.
            .bg-color-4.p-4.mb-5.tarjeta(data-aos="fade-up")
              p(data-aos="fade-left") Las personas que acompañan técnicamente, como promotores, gestores y extensionistas, asumen el rol de facilitadores rurales. Se guían por principios como la escucha activa, el respeto por los ritmos comunitarios, la claridad en los propósitos, la transparencia metodológica y la disposición a aprender junto con las personas. Facilitar no es dirigir ni imponer, sino crear condiciones para que las comunidades piensen, decidan y actúen desde su realidad (Gelifus, 1997).

        .row.mb-5.align-items-center
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema1/6.png", data-aos="zoom-in")
          .col-lg-8
            .bg-color-20.tarjeta.p-4(data-aos="fade-left")
              .row.align-items-center
                .col-lg-auto.mb-3.mb-lg-0
                  img(src="@/assets/curso/tema1/7.svg", style="max-width: 90px").mx-auto
                .col-lg
                  p.mb-0 Este enfoque participativo promueve la lectura integral del agroecosistema, el fortalecimiento de capacidades locales y la validación territorial de las propuestas. Se utilizan herramientas como cartografías sociales, recorridos interpretativos, talleres vivenciales y ejercicios de sistematización, que permiten comprender el territorio desde adentro y proyectar acciones con sentido colectivo.
        
        p.mb-5 En el marco del IPPTA, el acompañamiento rural se articula con el plan de acción predial, la formación agroecológica y la organización comunitaria. Cada visita, cada conversación y cada práctica se convierte en una oportunidad para aprender, compartir y transformar. El territorio no se interviene: se escucha, se dialoga y se construye con él. A continuación, se presentan los principios fundamentales que orientan el acompañamiento rural agroecológico desde una perspectiva participativa y territorial:

        .bg-full-width.bg-fondo-slider.mb-5
          .p-4.p-md-5
            SlyderA(tipo="b").bg-color-5.p-4.tarjeta
              .row.align-items-center.p-4.p-md-5
                .col-lg-5.order-2
                  figure
                    img(src="@/assets/curso/tema1/8.png")
                .col-lg-7.order-1.mb-3.mb-lg-0
                  h5 Atención plena
                  p Reconocer los saberes, tiempos y formas de expresión de cada familia y comunidad, sin imponer diagnósticos ni soluciones externas.
              .row.align-items-center.p-4.p-md-5
                .col-lg-5.order-2
                  figure
                    img(src="@/assets/curso/tema1/9.png")
                .col-lg-7.order-1.mb-3.mb-lg-0
                  h5 Diálogo de saberes
                  p Facilitar encuentros entre conocimientos locales, científicos, normativos y ancestrales, valorando la diversidad como fuente de aprendizaje.
              .row.align-items-center.p-4.p-md-5
                .col-lg-5.order-2
                  figure
                    img(src="@/assets/curso/tema1/10.png")
                .col-lg-7.order-1.mb-3.mb-lg-0
                  h5 Territorio como aula viva
                  p Leer el agroecosistema desde adentro, observando sus dinámicas, relaciones y potenciales como base para el diseño predial y la acción colectiva.
              .row.align-items-center.p-4.p-md-5
                .col-lg-5.order-2
                  figure
                    img(src="@/assets/curso/tema1/11.png")
                .col-lg-7.order-1.mb-3.mb-lg-0
                  h5 Participación consciente y situada
                  p Promover la implicación real de mujeres, jóvenes y mayores en todas las etapas del proceso, desde el diagnóstico hasta la evaluación.
              .row.align-items-center.p-4.p-md-5
                .col-lg-5.order-2
                  figure
                    img(src="@/assets/curso/tema1/12.png")
                .col-lg-7.order-1.mb-3.mb-lg-0
                  h5 Facilitación horizontal
                  p Acompañar sin dirigir, creando condiciones para que las comunidades piensen, decidan y actúen desde su realidad.
              .row.align-items-center.p-4.p-md-5
                .col-lg-5.order-2
                  figure
                    img(src="@/assets/curso/tema1/13.png")
                .col-lg-7.order-1.mb-3.mb-lg-0
                  h5 Claridad metodológica
                  p Explicar con transparencia los objetivos, herramientas y límites del acompañamiento, generando confianza y corresponsabilidad.
              .row.align-items-center.p-4.p-md-5
                .col-lg-5.order-2
                  figure
                    img(src="@/assets/curso/tema1/14.png")
                .col-lg-7.order-1.mb-3.mb-lg-0
                  h5 Reconocimiento de la subjetividad
                  p Acompañar también los procesos personales, emocionales y simbólicos que emergen en la transición agroecológica.
              .row.align-items-center.p-4.p-md-5
                .col-lg-5.order-2
                  figure
                    img(src="@/assets/curso/tema1/15.png")
                .col-lg-7.order-1.mb-3.mb-lg-0
                  h5 Flexibilidad y adaptación
                  p Ajustar las estrategias según el contexto, los ritmos del territorio y las prioridades de las familias, sin rigidez técnica.
              .row.align-items-center.p-4.p-md-5
                .col-lg-5.order-2
                  figure
                    img(src="@/assets/curso/tema1/16.png")
                .col-lg-7.order-1.mb-3.mb-lg-0
                  h5 Seguimiento con sentido pedagógico
                  p Convertir cada visita, conversación y práctica en una oportunidad de aprendizaje mutuo, reflexión crítica y fortalecimiento de capacidades.
              .row.align-items-center.p-4.p-md-5
                .col-lg-5.order-2
                  figure
                    img(src="@/assets/curso/tema1/17.png")
                .col-lg-7.order-1.mb-3.mb-lg-0
                  h5 Proyección política del acompañamiento
                  p Visibilizar las apuestas del territorio, fortalecer la organización comunitaria y contribuir a la incidencia en políticas públicas rurales.
              



        
            

 
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
