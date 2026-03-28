export interface NutritionalRow {
  nutrient: string;
  amount: string;
  vd?: string;
}

export interface NutritionalInfo {
  servingsPerContainer: string;
  servingSize: string;
  rows: NutritionalRow[];
  note?: string;
}

export interface Product {
  id: string;
  name: Record<string, string>;
  shortBenefit: Record<string, string>;
  description: Record<string, string>;
  ingredients: string[];
  benefits: Record<string, string[]>;
  usage: Record<string, string>;
  warnings: Record<string, string>;
  category: string[];
  weight: string;
  anvisaRegistered: boolean;
  image: string;
  color: string;
  cardBg: string;
  flavors?: Record<string, string[]>;
  nutritionalInfo?: NutritionalInfo;
  buyLinks: { platform: string; url: string }[];
}

export const products: Product[] = [
  {
    id: "creatina-pura",
    name: {
      pt: "Creatina Monohidratada 100% Pura 300g",
      en: "100% Pure Creatine Monohydrate 300g",
      es: "Creatina Monohidratada 100% Pura 300g",
    },
    shortBenefit: {
      pt: "Energia, força e desempenho em cada dose",
      en: "Energy, strength and performance in every serving",
      es: "Energía, fuerza y rendimiento en cada dosis",
    },
    description: {
      pt: "A Creatina Monohidratada 100% Pura Nutra Essential é um suplemento de alta qualidade, desenvolvido para quem busca melhorar a performance física, aumentar a força muscular e potencializar os resultados nos treinos. Com fórmula pura e sem adição de sabor, ela se adapta facilmente à sua rotina, podendo ser misturada em água, sucos ou shakes sem alterar o gosto.",
      en: "100% Pure Creatine Monohydrate by Nutra Essential is a high-quality supplement designed for those seeking to improve physical performance, increase muscle strength, and maximize training results. With a pure, unflavored formula, it easily fits into your routine and can be mixed with water, juices, or shakes without altering the taste.",
      es: "La Creatina Monohidratada 100% Pura de Nutra Essential es un suplemento de alta calidad, desarrollado para quienes buscan mejorar el rendimiento físico, aumentar la fuerza muscular y potenciar los resultados en los entrenamientos. Con fórmula pura y sin sabor, se adapta fácilmente a tu rutina.",
    },
    ingredients: [
      "Creatina Monohidratada (3000mg por dose)",
    ],
    benefits: {
      pt: [
        "Aumento da força e explosão muscular",
        "Melhora da recuperação entre séries e treinos",
        "Maior resistência e desempenho físico prolongado",
        "Produto 100% puro, sem aditivos, corantes ou conservantes",
        "Sem sabor, combina com qualquer bebida ou shake",
      ],
      en: [
        "Increased muscle strength and explosive power",
        "Improved recovery between sets and workouts",
        "Greater endurance and prolonged physical performance",
        "100% pure product, no additives, colorants, or preservatives",
        "Unflavored, mixes with any beverage or shake",
      ],
      es: [
        "Aumento de fuerza y explosión muscular",
        "Mejora de la recuperación entre series y entrenamientos",
        "Mayor resistencia y rendimiento físico prolongado",
        "Producto 100% puro, sin aditivos, colorantes ni conservantes",
        "Sin sabor, combina con cualquier bebida o batido",
      ],
    },
    usage: {
      pt: "Diluir 3g (1/2 dosador, conforme graduação) em 200ml de água ou suco de sua preferência. Consumir imediatamente após o preparo. Consumir 1 vez ao dia.",
      en: "Dilute 3g (1/2 scoop, as marked) in 200ml of water or juice of your choice. Consume immediately after preparation. Take once daily.",
      es: "Diluir 3g (1/2 dosificador, según graduación) en 200ml de agua o jugo de su preferencia. Consumir inmediatamente después de la preparación. Consumir 1 vez al día.",
    },
    warnings: {
      pt: "Este produto não é um medicamento. Não exceder a recomendação diária de consumo. Manter fora do alcance de crianças. Gestantes, nutrizes e crianças devem consultar o médico antes do uso.",
      en: "This product is not a medicine. Do not exceed the daily recommended intake. Keep out of reach of children. Pregnant women, nursing mothers, and children should consult a doctor before use.",
      es: "Este producto no es un medicamento. No exceder la recomendación diaria de consumo. Mantener fuera del alcance de los niños.",
    },
    category: ["muscle", "performance"],
    weight: "300g",
    anvisaRegistered: true,
    image: "/images/products/creatina-pura.png",
    color: "#fb6a10",
    cardBg: "#fff3eb",
    nutritionalInfo: {
      servingsPerContainer: "100",
      servingSize: "3g (1/2 dosador, conforme graduação)",
      rows: [
        { nutrient: "Creatina (mg)", amount: "3000", vd: "" },
      ],
      note: "Não contém quantidades significativas de valor energético, carboidratos, açúcares totais, açúcares adicionados, proteínas, gorduras totais, gorduras saturadas, gordura trans, fibras alimentares e sódio.",
    },
    buyLinks: [
      { platform: "Amazon", url: "https://www.amazon.com.br/" },
      { platform: "Mercado Livre", url: "https://www.mercadolivre.com.br/" },
      { platform: "Shopee", url: "https://shopee.com.br/" },
      { platform: "Ultrafarma", url: "https://www.ultrafarma.com.br/" },
      { platform: "Magalu", url: "https://www.magazineluiza.com.br/" },
      { platform: "TikTok Shop", url: "https://seller-br.tiktok.com/" },
      { platform: "Bandshop", url: "https://www.bandshop.com.br/" },
    ],
  },
  {
    id: "creabolic",
    name: {
      pt: "Creabolic 300g",
      en: "Creabolic 300g",
      es: "Creabolic 300g",
    },
    shortBenefit: {
      pt: "Energia, força e recuperação em um só produto",
      en: "Energy, strength and recovery in one product",
      es: "Energía, fuerza y recuperación en un solo producto",
    },
    description: {
      pt: "O Creabolic Nutra Essential foi desenvolvido para quem busca resultados superiores nos treinos, combinando três nutrientes essenciais em uma única fórmula: Creatina, BCAA e Peptídeos de Colágeno. Essa combinação exclusiva potencializa a força, melhora a recuperação muscular e contribui para a saúde das articulações, oferecendo suporte completo para atletas e praticantes de atividades físicas.",
      en: "Creabolic by Nutra Essential was developed for those seeking superior training results, combining three essential nutrients in a single formula: Creatine, BCAA, and Collagen Peptides. This exclusive combination enhances strength, improves muscle recovery, and supports joint health, providing complete support for athletes and fitness practitioners.",
      es: "El Creabolic de Nutra Essential fue desarrollado para quienes buscan resultados superiores en los entrenamientos, combinando tres nutrientes esenciales en una sola fórmula: Creatina, BCAA y Péptidos de Colágeno. Esta combinación exclusiva potencia la fuerza, mejora la recuperación muscular y contribuye a la salud de las articulaciones.",
    },
    ingredients: [
      "Creatina Monohidratada (3000mg)",
      "BCAA — Leucina (500mg), Isoleucina (250mg), Valina (250mg)",
      "Peptídeos de Colágeno (4,8g)",
    ],
    benefits: {
      pt: [
        "Mais força e energia para treinos intensos",
        "Recuperação muscular acelerada entre sessões",
        "Proteção articular e suporte estrutural com colágeno",
        "Produto sem sabor, versátil para misturar em água, sucos ou shakes",
        "Rendimento econômico: 30 doses por embalagem",
      ],
      en: [
        "More strength and energy for intense workouts",
        "Accelerated muscle recovery between sessions",
        "Joint protection and structural support with collagen",
        "Unflavored product, versatile to mix with water, juices, or shakes",
        "Economical yield: 30 servings per container",
      ],
      es: [
        "Más fuerza y energía para entrenamientos intensos",
        "Recuperación muscular acelerada entre sesiones",
        "Protección articular y soporte estructural con colágeno",
        "Producto sin sabor, versátil para mezclar con agua, jugos o batidos",
        "Rendimiento económico: 30 dosis por envase",
      ],
    },
    usage: {
      pt: "Diluir 10g (2 dosadores) em 200ml de água ou suco de sua preferência. Consumir imediatamente após o preparo. Consumir 1 vez ao dia.",
      en: "Dilute 10g (2 scoops) in 200ml of water or juice of your choice. Consume immediately after preparation. Take once daily.",
      es: "Diluir 10g (2 dosificadores) en 200ml de agua o jugo de su preferencia. Consumir inmediatamente después de la preparación. Consumir 1 vez al día.",
    },
    warnings: {
      pt: "Este produto não é um medicamento. Não exceder a recomendação diária. Consulte seu médico antes do uso. Alérgicos: contém derivados de colágeno bovino.",
      en: "This product is not a medicine. Do not exceed the daily recommendation. Consult your doctor before use. Allergen info: contains bovine collagen derivatives.",
      es: "Este producto no es un medicamento. No exceder la recomendación diaria. Consulte a su médico antes del uso.",
    },
    category: ["muscle", "performance"],
    weight: "300g",
    anvisaRegistered: true,
    image: "/images/products/creabolic.png",
    color: "#3b82f6",
    cardBg: "#ebf0ff",
    nutritionalInfo: {
      servingsPerContainer: "30",
      servingSize: "10g (2 dosadores)",
      rows: [
        { nutrient: "Valor energético (kcal)", amount: "17", vd: "1" },
        { nutrient: "Carboidratos (g)", amount: "0", vd: "0" },
        { nutrient: "Açúcares totais (g)", amount: "0", vd: "" },
        { nutrient: "Açúcares adicionados (g)", amount: "0", vd: "0" },
        { nutrient: "Proteínas (g)", amount: "4,3", vd: "9" },
        { nutrient: "Creatina (g)", amount: "3,0", vd: "" },
        { nutrient: "Colágeno (g)", amount: "4,8", vd: "" },
        { nutrient: "Leucina (mg)", amount: "500", vd: "" },
        { nutrient: "Isoleucina (mg)", amount: "250", vd: "" },
        { nutrient: "Valina (mg)", amount: "250", vd: "" },
        { nutrient: "Sódio (mg)", amount: "25", vd: "1" },
      ],
      note: "Não contém quantidades significativas de Gorduras totais, Gorduras saturadas, Gorduras trans e Fibras alimentares.",
    },
    buyLinks: [
      { platform: "Amazon", url: "https://www.amazon.com.br/" },
      { platform: "Mercado Livre", url: "https://www.mercadolivre.com.br/" },
      { platform: "Shopee", url: "https://shopee.com.br/" },
      { platform: "Ultrafarma", url: "https://www.ultrafarma.com.br/" },
      { platform: "Magalu", url: "https://www.magazineluiza.com.br/" },
      { platform: "TikTok Shop", url: "https://seller-br.tiktok.com/" },
      { platform: "Bandshop", url: "https://www.bandshop.com.br/" },
    ],
  },
  {
    id: "pre-treino",
    name: {
      pt: "PRE Workout 300g",
      en: "PRE Workout 300g",
      es: "PRE Workout 300g",
    },
    shortBenefit: {
      pt: "Energia, foco e desempenho em cada dose",
      en: "Energy, focus and performance in every serving",
      es: "Energía, enfoque y rendimiento en cada dosis",
    },
    description: {
      pt: "O PRE Workout Nutra Essential foi desenvolvido para quem busca máxima performance nos treinos, oferecendo uma fórmula equilibrada e eficaz que combina ingredientes de alta qualidade. Cada porção reúne 2000mg de beta-alanina, 1000mg de arginina, 250mg de tirosina e 150mg de cafeína, criando uma sinergia poderosa que potencializa energia, resistência e foco.",
      en: "PRE Workout by Nutra Essential was developed for those seeking maximum training performance, offering a balanced and effective formula combining high-quality ingredients. Each serving contains 2000mg beta-alanine, 1000mg arginine, 250mg tyrosine, and 150mg caffeine, creating a powerful synergy that enhances energy, endurance, and focus.",
      es: "El PRE Workout de Nutra Essential fue desarrollado para quienes buscan máximo rendimiento en los entrenamientos, ofreciendo una fórmula equilibrada y eficaz que combina ingredientes de alta calidad. Cada porción reúne 2000mg de beta-alanina, 1000mg de arginina, 250mg de tirosina y 150mg de cafeína.",
    },
    ingredients: [
      "Beta-Alanina (2000mg)",
      "Arginina (1000mg)",
      "Taurina (1000mg)",
      "Tirosina (250mg)",
      "Cafeína (150mg)",
    ],
    benefits: {
      pt: [
        "Mais energia e disposição para treinos intensos",
        "Aumento da resistência muscular para séries mais longas",
        "Maior foco e concentração na execução dos exercícios",
        "Melhora da circulação e entrega de nutrientes aos músculos",
      ],
      en: [
        "More energy and drive for intense workouts",
        "Increased muscle endurance for longer sets",
        "Greater focus and concentration during exercises",
        "Improved circulation and nutrient delivery to muscles",
      ],
      es: [
        "Más energía y disposición para entrenamientos intensos",
        "Aumento de la resistencia muscular para series más largas",
        "Mayor enfoque y concentración en la ejecución de ejercicios",
        "Mejora de la circulación y entrega de nutrientes a los músculos",
      ],
    },
    usage: {
      pt: "Diluir 10g (2 medidas dosadoras) em 200ml de água. Consumir imediatamente após o preparo. Consumir 1 vez ao dia, antes do treino.",
      en: "Dilute 10g (2 scoops) in 200ml of water. Consume immediately after preparation. Take once daily, before training.",
      es: "Diluir 10g (2 medidas dosificadoras) en 200ml de agua. Consumir inmediatamente después de la preparación. Consumir 1 vez al día, antes del entrenamiento.",
    },
    warnings: {
      pt: "Contém cafeína (150mg por dose). Não recomendado para gestantes, nutrizes, crianças e pessoas sensíveis à cafeína. Não exceder 1 dose por dia. Este produto não é um medicamento.",
      en: "Contains caffeine (150mg per serving). Not recommended for pregnant women, nursing mothers, children, and caffeine-sensitive individuals. Do not exceed 1 serving per day.",
      es: "Contiene cafeína (150mg por dosis). No recomendado para embarazadas, madres lactantes, niños y personas sensibles a la cafeína.",
    },
    category: ["energy", "performance"],
    weight: "300g",
    anvisaRegistered: true,
    image: "/images/products/pre-treino.png",
    color: "#7c3aed",
    cardBg: "#f3edff",
    flavors: {
      pt: ["Frutas Vermelhas"],
      en: ["Red Berries"],
      es: ["Frutos Rojos"],
    },
    nutritionalInfo: {
      servingsPerContainer: "30",
      servingSize: "10g (2 medidas dosadoras)",
      rows: [
        { nutrient: "Valor energético (kcal)", amount: "16", vd: "1" },
        { nutrient: "Carboidratos (g)", amount: "4,0", vd: "1" },
        { nutrient: "Açúcares totais (g)", amount: "4,0", vd: "" },
        { nutrient: "Açúcares adicionados (g)", amount: "4,0", vd: "8" },
        { nutrient: "Beta Alanina (mg)", amount: "2000", vd: "" },
        { nutrient: "Arginina (mg)", amount: "1000", vd: "" },
        { nutrient: "Taurina (mg)", amount: "1000", vd: "" },
        { nutrient: "Tirosina (mg)", amount: "250", vd: "" },
        { nutrient: "Cafeína (mg)", amount: "150", vd: "" },
      ],
      note: "Não contém quantidades significativas de Proteínas, Gorduras totais, Gorduras saturadas, Gorduras trans, Fibras alimentares e Sódio.",
    },
    buyLinks: [
      { platform: "Amazon", url: "https://www.amazon.com.br/" },
      { platform: "Mercado Livre", url: "https://www.mercadolivre.com.br/" },
      { platform: "Shopee", url: "https://shopee.com.br/" },
      { platform: "Ultrafarma", url: "https://www.ultrafarma.com.br/" },
      { platform: "Magalu", url: "https://www.magazineluiza.com.br/" },
      { platform: "TikTok Shop", url: "https://seller-br.tiktok.com/" },
      { platform: "Bandshop", url: "https://www.bandshop.com.br/" },
    ],
  },
  {
    id: "cimevitan-testo",
    name: {
      pt: "Cimevitan Testo Man 60 cápsulas",
      en: "Cimevitan Testo Man 60 capsules",
      es: "Cimevitan Testo Man 60 cápsulas",
    },
    shortBenefit: {
      pt: "Fórmula exclusiva para performance masculina",
      en: "Exclusive formula for male performance",
      es: "Fórmula exclusiva para rendimiento masculino",
    },
    description: {
      pt: "O Cimevitan Testo Man Nutra Essential é um suplemento desenvolvido especialmente para homens que buscam mais energia, vitalidade e equilíbrio hormonal. Sua fórmula exclusiva combina ingredientes naturais e nutrientes essenciais — Arginina, Taurina, Feno-grego, Pinus pinaster, Guaraná, Vitamina D e Zinco — que atuam em sinergia para promover bem-estar físico e mental.",
      en: "Cimevitan Testo Man by Nutra Essential is a supplement specially developed for men seeking more energy, vitality, and hormonal balance. Its exclusive formula combines natural ingredients and essential nutrients — Arginine, Taurine, Fenugreek, Pinus pinaster, Guarana, Vitamin D, and Zinc — working synergistically to promote physical and mental well-being.",
      es: "El Cimevitan Testo Man de Nutra Essential es un suplemento desarrollado especialmente para hombres que buscan más energía, vitalidad y equilibrio hormonal. Su fórmula exclusiva combina ingredientes naturales y nutrientes esenciales — Arginina, Taurina, Fenogreco, Pinus pinaster, Guaraná, Vitamina D y Zinc.",
    },
    ingredients: [
      "Arginina (40mg)",
      "Taurina (60mg)",
      "Feno-grego — Saponinas/Glicosídeos de furostanol (330mg)",
      "Pinus pinaster — Procianidinas (32,5mg)",
      "Guaraná",
      "Vitamina D (50mcg)",
      "Zinco (1,65mg)",
    ],
    benefits: {
      pt: [
        "Aumento da energia e disposição diária",
        "Apoio ao desempenho físico e resistência",
        "Contribui para o equilíbrio hormonal masculino",
        "Melhora da circulação e saúde cardiovascular",
        "Fortalecimento do sistema imunológico",
        "Proteção contra radicais livres",
      ],
      en: [
        "Increased daily energy and vitality",
        "Support for physical performance and endurance",
        "Contributes to male hormonal balance",
        "Improved circulation and cardiovascular health",
        "Immune system strengthening",
        "Protection against free radicals",
      ],
      es: [
        "Aumento de la energía y disposición diaria",
        "Apoyo al rendimiento físico y resistencia",
        "Contribuye al equilibrio hormonal masculino",
        "Mejora de la circulación y salud cardiovascular",
        "Fortalecimiento del sistema inmunológico",
        "Protección contra radicales libres",
      ],
    },
    usage: {
      pt: "Ingerir 2 (duas) cápsulas ao dia. Rendimento: 30 porções por embalagem.",
      en: "Take 2 (two) capsules per day. Yield: 30 servings per container.",
      es: "Ingerir 2 (dos) cápsulas al día. Rendimiento: 30 porciones por envase.",
    },
    warnings: {
      pt: "Este produto não é um medicamento. Não exceder a dose recomendada. Produto destinado exclusivamente ao público masculino adulto. Consulte seu médico antes do uso.",
      en: "This product is not a medicine. Do not exceed the recommended dose. Product intended exclusively for adult males. Consult your doctor before use.",
      es: "Este producto no es un medicamento. No exceder la dosis recomendada. Producto destinado exclusivamente al público masculino adulto.",
    },
    category: ["energy", "performance"],
    weight: "60 cápsulas",
    anvisaRegistered: true,
    image: "/images/products/cimevitan-testo.png",
    color: "#dc2626",
    cardBg: "#ffebeb",
    nutritionalInfo: {
      servingsPerContainer: "30",
      servingSize: "1,2g (2 cápsulas)",
      rows: [
        { nutrient: "Vitamina D (mcg)", amount: "50", vd: "333" },
        { nutrient: "Zinco (mg)", amount: "1,65", vd: "15" },
        { nutrient: "Saponinas/Glicosídeos de furostanol (mg)", amount: "330", vd: "" },
        { nutrient: "Procianidinas (mg)", amount: "32,5", vd: "" },
        { nutrient: "Arginina (mg)", amount: "40", vd: "" },
        { nutrient: "Taurina (mg)", amount: "60", vd: "" },
      ],
      note: "Não contém quantidades significativas de valor energético, carboidratos, açúcares totais, açúcares adicionados, proteínas, gorduras totais, gorduras saturadas, gordura trans, fibras alimentares e sódio.",
    },
    buyLinks: [
      { platform: "Amazon", url: "https://www.amazon.com.br/" },
      { platform: "Mercado Livre", url: "https://www.mercadolivre.com.br/" },
      { platform: "Shopee", url: "https://shopee.com.br/" },
      { platform: "Ultrafarma", url: "https://www.ultrafarma.com.br/" },
      { platform: "Magalu", url: "https://www.magazineluiza.com.br/" },
      { platform: "TikTok Shop", url: "https://seller-br.tiktok.com/" },
      { platform: "Bandshop", url: "https://www.bandshop.com.br/" },
    ],
  },
];
