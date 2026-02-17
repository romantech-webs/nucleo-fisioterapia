export const clinic = {
  name: "Núcleo Fisioterapia",
  logo: "/images/logo.png",
  tagline: "Tu recuperación en manos expertas en A Coruña",
  description: "Núcleo Fisioterapia es tu clínica de confianza en A Coruña, dirigida por Hugo, fisioterapeuta con amplia experiencia en tratamiento personalizado de lesiones y dolencias. Valoración de 5 estrellas con 28 reseñas en Google. Nos especializamos en fisioterapia manual, tratamientos deportivos y programas de ejercicios terapéuticos adaptados a cada paciente. Instalaciones modernas y siempre impecables donde recibirás un trato cercano y profesional para tu completa recuperación.",
  colors: {
    primary: "#fff400",
    secondary: "#4d4900",
    accent: "#fcea04",
    neutral: "#fffeeb"
  },
  phone: "610 68 56 36",
  whatsapp: "+34610685636",
  whatsappMessage: "Hola, me gustaría solicitar información sobre vuestros tratamientos de fisioterapia.",
  email: "",
  address: {
    street: "Rua Enrique Dequidt Hevia, 14, 1º izda, 15005 A Coruña, España",
    city: "A Coruña",
    province: "Álava",
    postalCode: "15005",
    country: "España"
  },
  googleMapsUrl: "https://maps.google.com/?cid=16939249135109889079&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA",
  googleMapsEmbed: "https://maps.google.com/maps?q=N%C3%BAcleo%20Fisioterapia%20%4043.3625%2C-8.40961&z=16&output=embed",
  coordinates: {
    lat: 43.3625,
    lng: -8.40961
  },
  schedule: [
    {
      days: "lunes - martes",
      hours: "9:30–13:30, 16:00–20:00"
    },
    {
      days: "miércoles",
      hours: "9:30–14:30, 15:30–18:00"
    },
    {
      days: "jueves",
      hours: "9:30–13:30, 16:00–20:00"
    },
    {
      days: "viernes",
      hours: "9:00–14:00"
    },
    {
      days: "sábado - domingo",
      hours: "Cerrado"
    }
  ],
  social: {
    instagram: null,
    facebook: null,
    linkedin: null,
    tiktok: null
  },
  reviews: {
    rating: 5,
    count: 28,
    url: "https://maps.google.com/?cid=16939249135109889079&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA",
    featured: [
      {
        author: "Susy",
        rating: 5,
        text: "Sin ninguna duda el mejor fisioterapeuta que uno pueda necesitar.  A parte de ser un gran profesional, Hugo tiene una gran calidad humana. Lleva años tratándome de distintas dolencias que he tenido y siempre me ha  ayudado y tutelado con ejercicios que han mejorado mis problemas.",
        date: "Hace 3 años"
      },
      {
        author: "Lucia Naveira Carballeira",
        rating: 5,
        text: "Hugo es un excelente profesional, se nota que disfruta su trabajo. Estudia tu caso al detalle y te hace un tratamiento personalizado. Además, es siempre muy agradable. Sin duda, el mejor fisio de Coruña. Recomendado 100%",
        date: "Hace 3 años"
      },
      {
        author: "Lucía RC",
        rating: 5,
        text: "Gran profesional y muy atento con sus pacientes. Te hace una valoración previa y suele proponerte ejercicios para mejorar tus dolencias.\nLas instalaciones estan muy bien y siempre limpias.\nRecomendable 100%",
        date: "Hace 3 años"
      },
      {
        author: "Rocío Romero Otero",
        rating: 5,
        text: "Hugo es el mejor fisio de Coruña! Muy profesional, paciente para explicar las cosas y súper majete. He probado muchos fisios y ya no me planteo cambiar a otro desde que di con él. Súper recomendado!",
        date: "Hace un año"
      },
      {
        author: "Kevin",
        rating: 5,
        text: "Hugo, un profesional, soy cliente desde hace unos meses y he mejorado muchisimo.\nDesde luego mi fisio en mi ciudad, sin duda.\nBusca un hueco si tienes in problema, una maravilla",
        date: "Hace un año"
      }
    ]
  },
  services: [
    {
      id: "fisioterapia-manual",
      name: "Fisioterapia Manual",
      description: "Técnicas manuales especializadas aplicadas con precisión para aliviar el dolor y mejorar la movilidad articular. Tratamiento directo sobre músculos, articulaciones y tejidos blandos para recuperar tu funcionalidad. Cada sesión se adapta a tu evolución y necesidades específicas.",
      benefits: [
        "Alivio inmediato del dolor muscular y articular",
        "Mejora significativa de la movilidad",
        "Tratamiento sin fármacos ni efectos secundarios"
      ],
      icon: "Hand"
    },
    {
      id: "fisioterapia-deportiva",
      name: "Fisioterapia Deportiva",
      description: "Recuperación especializada de lesiones deportivas con técnicas avanzadas para deportistas de todos los niveles. Prevención de recaídas mediante programas de fortalecimiento específicos. Te ayudamos a volver a tu actividad deportiva de forma segura y efectiva.",
      benefits: [
        "Recuperación más rápida de lesiones deportivas",
        "Prevención de futuras lesiones",
        "Vuelta segura a tu actividad deportiva"
      ],
      icon: "Dumbbell"
    },
    {
      id: "programas-ejercicios",
      name: "Programas de Ejercicios Terapéuticos",
      description: "Diseñamos rutinas de ejercicios personalizados que complementan tu tratamiento y aceleran tu recuperación. Te enseñamos y tutelamos en cada ejercicio para que puedas realizarlos correctamente en casa. Seguimiento continuo para ajustar tu programa según tu evolución.",
      benefits: [
        "Ejercicios adaptados a tu dolencia específica",
        "Mejora progresiva y sostenible en el tiempo",
        "Autonomía para gestionar tu propia recuperación"
      ],
      icon: "Activity"
    },
    {
      id: "tratamiento-contracturas",
      name: "Tratamiento de Contracturas",
      description: "Eliminación efectiva de contracturas musculares y puntos gatillo que causan dolor crónico. Combinamos técnicas manuales con terapias específicas para liberar la tensión muscular. Resultados visibles desde las primeras sesiones.",
      benefits: [
        "Eliminación de contracturas persistentes",
        "Reducción del dolor crónico muscular",
        "Recuperación de la flexibilidad perdida"
      ],
      icon: "Target"
    },
    {
      id: "rehabilitacion-personalizada",
      name: "Rehabilitación Personalizada",
      description: "Programas de rehabilitación diseñados específicamente para tu caso tras valoración detallada. Tratamos desde lesiones agudas hasta problemas crónicos con enfoque integral. Seguimiento constante hasta alcanzar tus objetivos de recuperación completa.",
      benefits: [
        "Plan de tratamiento diseñado solo para ti",
        "Atención continuada en todo el proceso",
        "Recuperación completa de la funcionalidad"
      ],
      icon: "Heart"
    },
    {
      id: "valoracion-funcional",
      name: "Valoración Funcional Completa",
      description: "Evaluación exhaustiva de tu estado físico antes de comenzar cualquier tratamiento. Estudiamos tu caso al detalle para identificar la causa real de tu dolencia. Con esta información diseñamos el plan terapéutico más efectivo para ti.",
      benefits: [
        "Diagnóstico preciso de tu problema",
        "Tratamiento dirigido a la causa real",
        "Mayor efectividad en la recuperación"
      ],
      icon: "Activity"
    },
    {
      id: "tratamiento-dolencias-cronicas",
      name: "Tratamiento de Dolencias Crónicas",
      description: "Especialización en problemas persistentes que no han mejorado con otros tratamientos. Abordaje integral que combina terapia manual, ejercicios y seguimiento prolongado. Te acompañamos a largo plazo hasta conseguir mejoras significativas y duraderas.",
      benefits: [
        "Solución para dolores que no mejoran",
        "Enfoque integral y personalizado",
        "Mejora sostenible de tu calidad de vida"
      ],
      icon: "Heart"
    },
    {
      id: "electroterapia",
      name: "Electroterapia",
      description: "Tecnología avanzada con corrientes eléctricas terapéuticas para acelerar tu proceso de recuperación. Complementa perfectamente el tratamiento manual potenciando sus efectos. Tratamientos indoloros y muy efectivos para diversos tipos de lesiones.",
      benefits: [
        "Aceleración del proceso de curación",
        "Reducción de la inflamación y el dolor",
        "Recuperación más rápida del tejido lesionado"
      ],
      icon: "Zap"
    }
  ],
  process: [
    {
      step: 1,
      title: "Solicita tu Cita",
      description: "Contacta con nosotros por teléfono al 610 68 56 36 o WhatsApp para reservar tu primera cita. Te atenderemos de forma cercana y encontraremos el mejor horario para ti."
    },
    {
      step: 2,
      title: "Valoración Detallada",
      description: "Hugo estudiará tu caso al detalle en la primera consulta, evaluando tu estado físico, historial y dolencias. Con esta información diseñaremos un plan de tratamiento completamente personalizado para ti."
    },
    {
      step: 3,
      title: "Tratamiento Personalizado",
      description: "Aplicamos las técnicas manuales más adecuadas para tu recuperación y te enseñamos ejercicios específicos para complementar el tratamiento. Cada sesión se adapta a tu evolución particular."
    },
    {
      step: 4,
      title: "Seguimiento y Recuperación",
      description: "Te acompañamos en todo el proceso con seguimiento continuo, ajustando el tratamiento según tus progresos. Te tutelamos con ejercicios y pautas hasta lograr tu completa recuperación."
    }
  ],
  whyUs: [
    {
      title: "5 Estrellas en Google",
      description: "Valoración perfecta de 5 estrellas con 28 reseñas verificadas en Google. Nuestros pacientes destacan la profesionalidad, la calidad humana y los resultados efectivos. Somos la clínica de fisioterapia mejor valorada de A Coruña por la confianza y recuperación que ofrecemos.",
      icon: "Award"
    },
    {
      title: "Tratamiento 100% Personalizado",
      description: "Hugo estudia tu caso al detalle antes de comenzar cualquier tratamiento. No aplicamos protocolos estándar: diseñamos un plan específico para tu dolencia, combinando terapia manual con ejercicios adaptados a ti. Cada sesión se ajusta según tu evolución particular.",
      icon: "Target"
    },
    {
      title: "Seguimiento Continuo",
      description: "Te acompañamos en todo el proceso de recuperación con seguimiento constante hasta que alcances tus objetivos. Te tutelamos con ejercicios, resolvemos tus dudas y ajustamos el tratamiento según tus progresos. No estás solo en tu recuperación.",
      icon: "Heart"
    },
    {
      title: "Instalaciones Modernas",
      description: "Clínica con equipamiento avanzado en instalaciones siempre impecables y limpias. Ambiente profesional y acogedor donde te sentirás cómodo durante tu tratamiento. Ubicación en A Coruña con fácil acceso para tu comodidad.",
      icon: "CheckCircle"
    }
  ],
  team: [
    {
      name: "Hugo",
      role: "Fisioterapeuta",
      image: "/images/team/placeholder.jpg",
      bio: "Profesionales apasionados por la fisioterapia y la rehabilitación. En Núcleo Fisioterapia nos dedicamos a devolver la calidad de vida a nuestros pacientes con tratamientos personalizados y tecnología avanzada."
    }
  ],
  gallery: [
    {
      src: "/images/hero.webp",
      alt: "Núcleo Fisioterapia - Imagen 1"
    },
    {
      src: "/images/gallery/2.webp",
      alt: "Núcleo Fisioterapia - Imagen 2"
    },
    {
      src: "/images/gallery/3.webp",
      alt: "Núcleo Fisioterapia - Imagen 3"
    },
    {
      src: "/images/gallery/4.webp",
      alt: "Núcleo Fisioterapia - Imagen 4"
    },
    {
      src: "/images/gallery/5.webp",
      alt: "Núcleo Fisioterapia - Imagen 5"
    },
    {
      src: "/images/gallery/6.webp",
      alt: "Núcleo Fisioterapia - Imagen 6"
    },
    {
      src: "/images/gallery/7.webp",
      alt: "Núcleo Fisioterapia - Imagen 7"
    }
  ],
  faq: [
    {
      question: "¿Qué hace diferente a Núcleo Fisioterapia?",
      answer: "En Núcleo Fisioterapia no aplicamos tratamientos estándar. Hugo estudia cada caso al detalle y diseña un plan completamente personalizado que combina terapia manual con programas de ejercicios específicos. Nuestros pacientes destacan la calidad humana, la paciencia para explicar cada proceso y el seguimiento continuo hasta la recuperación completa. Con 5 estrellas en 28 reseñas de Google, somos la clínica mejor valorada de A Coruña."
    },
    {
      question: "¿Cuánto dura una sesión de fisioterapia?",
      answer: "Las sesiones en Núcleo Fisioterapia suelen durar entre 45 y 60 minutos, dependiendo de tu caso particular y el tratamiento necesario. En la primera consulta realizamos una valoración más exhaustiva que puede extenderse algo más. Dedicamos el tiempo necesario a cada paciente sin prisas, porque creemos que la calidad del tratamiento es lo más importante para tu recuperación."
    },
    {
      question: "¿Necesito que me derive mi médico?",
      answer: "No es necesaria ninguna derivación médica para acudir a Núcleo Fisioterapia. Puedes solicitar cita directamente llamando al 610 68 56 36 o por WhatsApp. En tu primera visita realizaremos una valoración completa de tu caso y diseñaremos el plan de tratamiento más adecuado para ti. Si tienes informes médicos o pruebas diagnósticas previas, tráelos para tener una visión más completa."
    },
    {
      question: "¿Tratáis lesiones deportivas?",
      answer: "Sí, en Núcleo Fisioterapia tenemos amplia experiencia en el tratamiento de lesiones deportivas de todo tipo. Aplicamos técnicas especializadas para deportistas y diseñamos programas de ejercicios que aceleran la recuperación y previenen recaídas. Te ayudamos a volver a tu actividad deportiva de forma segura, trabajando tanto la recuperación de la lesión como el fortalecimiento para evitar futuras molestias."
    },
    {
      question: "¿Qué tipo de dolencias tratáis?",
      answer: "En Núcleo Fisioterapia tratamos una amplia variedad de problemas: dolores musculares y articulares, contracturas, lesiones deportivas, problemas crónicos, rehabilitación post-quirúrgica, dolores de espalda, cervicales, lumbalgias y muchas otras dolencias. Hugo tiene años de experiencia tratando casos diversos y diseña siempre un tratamiento específico para cada problema. Si tienes dudas sobre tu caso concreto, llámanos y te asesoraremos sin compromiso."
    },
    {
      question: "¿Cuántas sesiones necesitaré?",
      answer: "El número de sesiones varía según tu dolencia, su gravedad y tu evolución particular. Tras la valoración inicial en Núcleo Fisioterapia, Hugo te explicará el plan de tratamiento estimado para tu caso. Algunos pacientes notan mejoría desde las primeras sesiones, mientras que problemas crónicos pueden requerir más tiempo. Lo importante es que hacemos un seguimiento continuo y ajustamos el tratamiento según tus progresos reales."
    },
    {
      question: "¿Dónde está ubicada la clínica?",
      answer: "Núcleo Fisioterapia está ubicada en A Coruña, en unas instalaciones modernas y siempre impecables que nuestros pacientes destacan especialmente. Contamos con el equipamiento necesario para ofrecerte los mejores tratamientos en un ambiente limpio y profesional. Para conocer la dirección exacta y cómo llegar, puedes llamarnos al 610 68 56 36 o consultarnos por WhatsApp."
    },
    {
      question: "¿Ofrecéis ejercicios para hacer en casa?",
      answer: "Sí, una parte fundamental del tratamiento en Núcleo Fisioterapia son los programas de ejercicios personalizados. Hugo te enseña y tutela ejercicios específicos para tu dolencia que complementan las sesiones y aceleran tu recuperación. Te explicamos cada ejercicio con paciencia para que lo hagas correctamente en casa, y ajustamos el programa según tu evolución. Muchos de nuestros pacientes destacan cómo estos ejercicios han mejorado significativamente sus problemas."
    }
  ],
  seo: {
    titleTemplate: "%s | Núcleo Fisioterapia",
    defaultTitle: "Núcleo Fisioterapia A Coruña | Fisio 5★ en Google",
    defaultDescription: "Clínica de fisioterapia en A Coruña con 5★ en Google. Tratamientos personalizados, fisioterapia manual, deportiva y ejercicios terapéuticos. Pide cita: 610 68 56 36",
    keywords: [
      "fisioterapia A Coruña",
      "Núcleo Fisioterapia",
      "fisioterapeuta A Coruña",
      "clínica fisioterapia A Coruña",
      "fisioterapia deportiva A Coruña",
      "tratamiento contracturas A Coruña",
      "rehabilitación A Coruña",
      "fisioterapia manual A Coruña",
      "ejercicios terapéuticos A Coruña",
      "mejor fisio A Coruña",
      "fisioterapia Álava",
      "Hugo fisioterapeuta A Coruña"
    ],
    ogImage: "/og-image.jpg"
  },
  legal: {
    companyName: "Núcleo Fisioterapia",
    cif: "",
    registeredAddress: "Rua Enrique Dequidt Hevia, 14, 1º izda, 15005 A Coruña, España, A Coruña, Álava"
  },
  heroHeadline: [
    "Tu Centro de",
    "Fisioterapia",
    "en A Coruña"
  ],
  heroDescription: "En Núcleo Fisioterapia combinamos técnicas manuales avanzadas con programas de ejercicios personalizados para tratar tus dolencias de forma efectiva. Hugo, nuestro fisioterapeuta, estudia tu caso al detalle y diseña un tratamiento específico para ti, acompañándote en cada paso hasta tu recuperación completa.",
  specialty: "Fisioterapia Personalizada",
  ctaLabel: "Tu Recuperación",
  ctaHeadline: "¿Listo para decir adiós al dolor?",
  ctaDescription: "Contacta ahora con Núcleo Fisioterapia y descubre por qué somos la clínica mejor valorada de A Coruña. Primera valoración personalizada para diseñar tu plan de recuperación.",
  statsLabel: "Pacientes",
  schemaType: "PhysicalTherapy",
  sectionCopy: {
    servicesLabel: "Nuestros Servicios",
    servicesTitle: "Tratamientos especializados",
    servicesDescription: "Soluciones profesionales adaptadas a tus necesidades de salud.",
    processLabel: "Cómo Trabajamos",
    processTitle: "Tu camino hacia la recuperación en 4 pasos",
    processDescription: "Un proceso simple y transparente diseñado para tu comodidad.",
    whyUsLabel: "Por Qué Elegirnos",
    whyUsTitle: "Tu salud, nuestra prioridad",
    whyUsDescription: "Combinamos experiencia, las mejores técnicas y un trato personalizado para cuidar de tu salud.",
    reviewsLabel: "Opiniones",
    reviewsTitle: "Lo que dicen nuestros pacientes",
    galleryLabel: "Instalaciones",
    galleryTitle: "Conoce nuestra clínica",
    galleryDescription: "Un espacio diseñado para tu bienestar y recuperación",
    faqLabel: "FAQ",
    faqTitle: "Preguntas frecuentes",
    faqDescription: "Resolvemos las dudas más comunes de nuestros pacientes.",
    locationLabel: "Ubicación",
    locationTitle: "Cómo llegar",
    teamLabel: "Nuestro Equipo",
    teamTitle: "Profesionales especializados",
    teamDescription: "Experiencia y dedicación al servicio de tu salud"
  }
}

export type Clinic = typeof clinic
