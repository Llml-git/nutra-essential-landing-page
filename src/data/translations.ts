export type Lang = "pt" | "en" | "es";

export const translations: Record<string, Record<Lang, string>> = {
  // Navbar
  navHome: { pt: "Início", en: "Home", es: "Inicio" },
  navProducts: { pt: "Produtos", en: "Products", es: "Productos" },
  navAbout: { pt: "Sobre", en: "About", es: "Sobre" },
  navContact: { pt: "Contato", en: "Contact", es: "Contacto" },

  // Hero
  heroTitle: {
    pt: "ENERGIA REAL.\nRESULTADOS REAIS.",
    en: "REAL ENERGY.\nREAL RESULTS.",
    es: "ENERGÍA REAL.\nRESULTADOS REALES.",
  },
  heroSubtitle: {
    pt: "Suplementos de alta performance para quem leva a sério cada treino.",
    en: "High-performance supplements for those who take every workout seriously.",
    es: "Suplementos de alto rendimiento para quienes toman en serio cada entrenamiento.",
  },
  heroCta: {
    pt: "Explorar Produtos",
    en: "Explore Products",
    es: "Explorar Productos",
  },

  // Brand positioning
  brandTitle: {
    pt: "POR QUE NUTRA ESSENTIAL?",
    en: "WHY NUTRA ESSENTIAL?",
    es: "¿POR QUÉ NUTRA ESSENTIAL?",
  },
  brandEnergy: { pt: "Energia", en: "Energy", es: "Energía" },
  brandPerformance: { pt: "Performance", en: "Performance", es: "Rendimiento" },
  brandRecovery: { pt: "Recuperação", en: "Recovery", es: "Recuperación" },
  brandEnergyDesc: {
    pt: "Fórmulas desenvolvidas para fornecer energia sustentável e explosiva quando você mais precisa.",
    en: "Formulas designed to provide sustainable and explosive energy when you need it most.",
    es: "Fórmulas desarrolladas para proporcionar energía sostenible y explosiva cuando más la necesitas.",
  },
  brandPerformanceDesc: {
    pt: "Ingredientes cientificamente comprovados para maximizar sua performance em cada treino.",
    en: "Scientifically proven ingredients to maximize your performance in every workout.",
    es: "Ingredientes científicamente probados para maximizar tu rendimiento en cada entrenamiento.",
  },
  brandRecoveryDesc: {
    pt: "Nutrientes essenciais para uma recuperação muscular mais rápida e eficiente.",
    en: "Essential nutrients for faster and more efficient muscle recovery.",
    es: "Nutrientes esenciales para una recuperación muscular más rápida y eficiente.",
  },
  brandCredibility: {
    pt: "Todos os nossos produtos são registrados na ANVISA e desenvolvidos com ingredientes de máxima qualidade, seguindo rigorosos padrões internacionais.",
    en: "All our products are ANVISA registered and developed with the highest quality ingredients, following rigorous international standards.",
    es: "Todos nuestros productos están registrados en ANVISA y desarrollados con ingredientes de máxima calidad, siguiendo rigurosos estándares internacionales.",
  },

  // Featured products
  featuredTitle: {
    pt: "PRODUTOS EM DESTAQUE",
    en: "FEATURED PRODUCTS",
    es: "PRODUCTOS DESTACADOS",
  },
  anvisaBadge: {
    pt: "Registro ANVISA",
    en: "ANVISA Approved",
    es: "Registro ANVISA",
  },
  viewDetails: {
    pt: "Ver Detalhes",
    en: "View Details",
    es: "Ver Detalles",
  },

  // Sales channels
  salesTitle: {
    pt: "ONDE ENCONTRAR",
    en: "WHERE TO BUY",
    es: "DÓNDE COMPRAR",
  },
  salesSubtitle: {
    pt: "Disponível nas maiores plataformas do Brasil",
    en: "Available on Brazil's largest platforms",
    es: "Disponible en las mayores plataformas de Brasil",
  },

  // Social proof
  proofTitle: {
    pt: "NÚMEROS QUE FALAM",
    en: "NUMBERS THAT SPEAK",
    es: "NÚMEROS QUE HABLAN",
  },
  proofAthletes: { pt: "Atletas confiam", en: "Athletes trust us", es: "Atletas confían" },
  proofProducts: { pt: "Produtos vendidos", en: "Products sold", es: "Productos vendidos" },
  proofStores: { pt: "Pontos de venda", en: "Points of sale", es: "Puntos de venta" },
  proofRating: { pt: "Avaliação média", en: "Average rating", es: "Calificación promedio" },
  testimonial1: {
    pt: "Desde que comecei a usar a Creatina Nutra Essential, meus ganhos de força aumentaram visivelmente. Produto de qualidade real!",
    en: "Since I started using Nutra Essential Creatine, my strength gains have visibly increased. Real quality product!",
    es: "Desde que empecé a usar la Creatina Nutra Essential, mis ganancias de fuerza han aumentado visiblemente. ¡Producto de calidad real!",
  },
  testimonial2: {
    pt: "O Pré-Treino é simplesmente o melhor que já testei. Energia limpa, sem crash. Recomendo para todos os meus alunos.",
    en: "The Pre-Workout is simply the best I've ever tried. Clean energy, no crash. I recommend it to all my students.",
    es: "El Pre-Entreno es simplemente el mejor que he probado. Energía limpia, sin bajón. Lo recomiendo a todos mis alumnos.",
  },

  // CTA
  ctaTitle: {
    pt: "ELEVE SUA PERFORMANCE HOJE",
    en: "BOOST YOUR PERFORMANCE TODAY",
    es: "ELEVA TU RENDIMIENTO HOY",
  },
  ctaSubtitle: {
    pt: "Descubra por que milhares de atletas escolhem Nutra Essential.",
    en: "Discover why thousands of athletes choose Nutra Essential.",
    es: "Descubre por qué miles de atletas eligen Nutra Essential.",
  },
  ctaButton: {
    pt: "Ver Todos os Produtos",
    en: "View All Products",
    es: "Ver Todos los Productos",
  },

  // Footer
  footerRights: {
    pt: "Todos os direitos reservados.",
    en: "All rights reserved.",
    es: "Todos los derechos reservados.",
  },
  footerProducts: { pt: "Produtos", en: "Products", es: "Productos" },
  footerCompany: { pt: "Empresa", en: "Company", es: "Empresa" },
  footerSupport: { pt: "Suporte", en: "Support", es: "Soporte" },
  footerAbout: { pt: "Sobre nós", en: "About us", es: "Sobre nosotros" },
  footerFaq: { pt: "Perguntas Frequentes", en: "FAQ", es: "Preguntas Frecuentes" },
  footerPrivacy: { pt: "Privacidade", en: "Privacy", es: "Privacidad" },
  footerTerms: { pt: "Termos de uso", en: "Terms of use", es: "Términos de uso" },

  // Products page
  productsPageTitle: {
    pt: "NOSSOS PRODUTOS",
    en: "OUR PRODUCTS",
    es: "NUESTROS PRODUCTOS",
  },
  filterAll: { pt: "Todos", en: "All", es: "Todos" },
  filterEnergy: { pt: "Energia", en: "Energy", es: "Energía" },
  filterMuscle: { pt: "Muscular", en: "Muscle", es: "Muscular" },
  filterPerformance: { pt: "Performance", en: "Performance", es: "Rendimiento" },

  // Modal
  modalFlavors: { pt: "Sabores", en: "Flavors", es: "Sabores" },
  modalIngredients: { pt: "Ingredientes", en: "Ingredients", es: "Ingredientes" },
  modalBenefits: { pt: "Benefícios", en: "Benefits", es: "Beneficios" },
  modalUsage: { pt: "Modo de Uso", en: "How to Use", es: "Modo de Uso" },
  modalWarnings: { pt: "Avisos", en: "Warnings", es: "Advertencias" },
  modalNutrition: { pt: "Informação Nutricional", en: "Nutrition Facts", es: "Información Nutricional" },
  modalNutritionServings: { pt: "Porções por embalagem", en: "Servings per container", es: "Porciones por envase" },
  modalNutritionServing: { pt: "Porção", en: "Serving size", es: "Porción" },
  modalNutritionNutrient: { pt: "Nutriente", en: "Nutrient", es: "Nutriente" },
  modalNutritionAmount: { pt: "Quantidade", en: "Amount", es: "Cantidad" },
  modalNutritionVd: { pt: "%VD*", en: "%DV*", es: "%VD*" },
  modalNutritionFootnote: { pt: "* Percentual de valores diários fornecidos pela porção.", en: "* Percent Daily Values based on a standard diet.", es: "* Porcentaje de valores diarios proporcionados por la porción." },
  modalBuyNow: { pt: "Comprar Agora", en: "Buy Now", es: "Comprar Ahora" },
  modalClose: { pt: "Fechar", en: "Close", es: "Cerrar" },
};
