export default {
  global: {
    Name: 'Diseño del Plan de Acción para la Transición Agroecológica',
    Description:
      'Este componente permite formular propuestas de acción agroecológica como resultado del proceso de diagnóstico, valoración y sistematización realizado en los componentes anteriores. A partir de la lectura integrada de los indicadores y el estado de transición del predio, se definen actividades prioritarias, tiempos, recursos y actores responsables. Se promueve una planificación estratégica participativa, articulada con el marco normativo nacional y con enfoque territorial, cultural y ecológico.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo:
          'Fundamentos de la transición agroecológica y la planificación participativa',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo:
              'El plan de acción como herramienta de transformación territorial',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Enfoque participativo en el acompañamiento rural',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Insumos para la formulación del plan de acción',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo:
              'Articulación entre diagnóstico, valoración y planificación',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Criterios para priorizar actividades',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Herramientas para secuenciar acciones y estimar costos',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Construcción del plan agroecológico',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo:
              'Estructura del plan: actividades, tiempos, responsabilidades y costos',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo:
              'Formulación de cronogramas y estrategias de acompañamiento',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Presentación del plan y ajustes finales',
            hash: 't_3_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema:
        'Fundamentos de la transición agroecológica y la planificación participativa',
      referencia:
        'FAO & Ministerio de Agricultura y Desarrollo Rural de Colombia. (2021). <em>Guía de transición agroecológica para extensionistas y promotores rurales</em>. FAO Colombia.',
      tipo: 'Cartilla',
      link:
        'https://tapipedia.org/sites/default/files/af-guia_de_agroecologia-web_1.pdf',
    },
    {
      tema: 'Construcción del plan de acción agroecológico',
      referencia:
        'FAO & Sembrando Capacidades. (2021). <em>Transiciones agroecológicas: prácticas y experiencias en Colombia</em>. Organización de las Naciones Unidas para la Alimentación y la Agricultura.',
      tipo: 'Cartilla',
      link: 'https://sembrandocapacidades.fao.org.co',
    },
  ],
  glosario: [
    {
      termino: 'Agroecosistema',
      significado:
        'Sistema vivo conformado por las relaciones entre suelo, agua, cultivos, animales, clima y familias rurales. Es la unidad de análisis y transformación en la transición agroecológica.',
    },
    {
      termino: 'Autonomía alimentaria',
      significado:
        'Capacidad de las familias y comunidades rurales para producir, decidir y consumir alimentos sanos, diversos y culturalmente apropiados, sin depender de insumos externos ni mercados dominantes.',
    },
    {
      termino: 'Diagnóstico predial',
      significado:
        'Proceso participativo que permite leer integralmente el estado del predio en dimensiones ecológicas, sociales, económicas y culturales, utilizando herramientas como los 21 indicadores IPPTA.',
    },
    {
      termino: 'Diálogo de saberes',
      significado:
        'Encuentro horizontal entre conocimientos locales, científicos, normativos y ancestrales, que orienta la construcción colectiva de propuestas agroecológicas.',
    },
    {
      termino: 'Estado de Transición Agroecológico',
      significado:
        'Nivel de avance del predio en su proceso de transformación agroecológica, evaluado mediante el diagrama radial IPPTA y la lectura de indicadores críticos.',
    },
    {
      termino: 'Planificación participativa',
      significado:
        'Metodología que involucra activamente a las familias rurales en la toma de decisiones, priorización de acciones y diseño de estrategias de transformación territorial.',
    },
    {
      termino: 'Puntos críticos',
      significado:
        'Aspectos del agroecosistema con baja valoración o alto impacto sistémico que requieren atención prioritaria en el plan de acción (ej. manejo de suelos, agua, semillas).',
    },
    {
      termino: 'Transición agroecológica',
      significado:
        'Proceso gradual y multidimensional de cambio hacia sistemas agroalimentarios sostenibles, justos y culturalmente arraigados, que se vive en la finca, la comunidad y el paisaje.',
    },
  ],
  referencias: [
    {
      referencia:
        'Agencia de Desarrollo Rural. (2024). <em>IPPTA – Instrumento de Planificación Predial para la Transición Agroecológica</em>. StoryMap.',
      link:
        'https://storymaps.arcgis.com/stories/f93c00c8f99b41f8bdbc669dac71f592',
    },
    {
      referencia:
        'Altieri, M., y Rosset, P. (2020). <em>Agroecología: ciencia y política</em>.',
      link:
        'https://celia.agroeco.org/wp-content/uploads/2018/12/Rosset-y-Altieri-texto-completo-sin-portada-1.pdf',
    },
    {
      referencia:
        'Buraschi, D., y Oldano, N. (2021). <em>La herencia de Paulo Freire en las prácticas participativas dialógicas</em>. Revista de Educación Social, (35).',
      link:
        'https://www.eduso.net/res/revista/35/miscelanea/la-herencia-de-paulo-freire-en-las-practicas-participativas-dialogicas',
    },
    {
      referencia:
        'FAO y Sembrando Capacidades. (2021). <em>Transiciones agroecológicas: prácticas y experiencias en Colombia</em>. Organización de las Naciones Unidas para la Alimentación y la Agricultura.',
      link: '',
    },
    {
      referencia:
        'FAO y Sembrando Capacidades. (2022). <em>Experiencias de transición agroecológica en Colombia</em>. Organización de las Naciones Unidas para la Alimentación y la Agricultura.',
      link:
        'https://sembrandocapacidades.fao.org.co/wp-content/uploads/2022/01/11_Experiencias-de-transicion-agroecologica-en-Colombia_compressed.pdf',
    },
    {
      referencia:
        'FAO. (2024). <em>Guía de transición a la agroecología para extensionistas y promotores rurales en Colombia</em>. Agroecology Knowledge Hub.',
      link: 'https://www.fao.org/agroecology/database/detail/en/c/1711004/',
    },
    {
      referencia:
        'FAO. (2024). <em>Guía de transición agroecológica para extensionistas y promotores rurales</em>. FAO Colombia.',
      link:
        'https://tapipedia.org/es/content/gu%C3%ADa-de-transici%C3%B3n-la-para-extensionistas-y-promotores-rurales-en-colombia',
    },
    {
      referencia:
        'Freire, P. (1984). <em>¿Extensión o comunicación? La concientización en el medio rural</em>. Siglo XXI Editores.',
      link: '',
    },
    {
      referencia:
        'Geilfus, F. (1997). <em>80 herramientas para el desarrollo participativo: diagnóstico, planificación, monitoreo y evaluación</em>. IICA – Laderas C.A.',
      link: '',
    },
    {
      referencia:
        'León Sicard, T. E. (2021). <em>La Estructura Agroecológica Principal de los agroecosistemas: perspectivas teórico-prácticas</em>. Universidad Nacional de Colombia – IDEA.',
      link:
        'https://research.unipd.it/retrieve/e14fb26f-0f39-3de1-e053-1705fe0ac030/LIbroEAP_Final_Publicado.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
