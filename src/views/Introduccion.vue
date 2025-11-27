<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .bg-full-width.bg-color-3
      .px-4.px-md-5
        .row.mb-5
          .col-lg-4.order-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/intro/1.png", data-aos="zoom-in")
          .col-lg-8.order-lg-1
            .bg-color-6.mb-3(data-aos="fade-up")
              .row.justify-content-center.align-items-center
                .col-lg-auto.mb-3.mb-lg-0
                  figure
                    img(src='@/assets/curso/intro/2.png', alt='')
                .col-lg
                  .p-4
                    p.mb-0(data-aos="fade-up") La transición agroecológica representa un proceso profundo de transformación que involucra lo productivo, lo social, lo cultural y lo ecológico. No se limita a modificar prácticas agrícolas, sino que impulsa un modo distinto de habitar los territorios, fortalecer la autonomía campesina y consolidar sistemas prediales más resilientes. En este horizonte, la planificación participativa adquiere un papel fundamental al permitir que las decisiones se construyan colectivamente, articulando saberes locales, experiencias familiares y criterios técnicos.
            p(data-aos="fade-left") En este marco, el plan de acción agroecológico se consolida como una herramienta central para orientar los cambios dentro del predio. Su construcción integra el diagnóstico con los 21 indicadores IPPTA, la valoración del estado de transición agroecológica y la identificación de puntos críticos, generando rutas de acción coherentes con las necesidades reales de cada familia. Este proceso, además de técnico, es pedagógico y organizativo: potencia capacidades locales, promueve el diálogo intergeneracional y fortalece el compromiso comunitario con el cuidado de la vida y del territorio.

        .row.mb-5.align-items-center
          .col-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/intro/3.svg", data-aos="zoom-in")
          .col-lg-10
            .bg-color-16.tarjeta.px-5.py-4(data-aos="fade-up")
              p.mb-0 Asimismo, el acompañamiento rural participativo redefine el rol de quienes facilitan los procesos agroecológicos. Lejos de enfoques verticales, se impulsa una relación horizontal basada en la escucha, la claridad metodológica y la co-creación. Herramientas como las cartografías sociales, los recorridos interpretativos, los talleres vivenciales y las bitácoras de campo permiten comprender el agroecosistema desde adentro y avanzar hacia propuestas viables, arraigadas y sostenibles. Esta introducción prepara el camino para profundizar en los fundamentos, los insumos y las estrategias que estructuran la construcción del plan agroecológico predial.
        
      
           

</template>

<script>
export default {
  name: 'Introduccion',
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
