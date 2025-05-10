import { Thermometer } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { Cpu, Navigation, Smartphone } from "lucide-react"

export interface Modelo {
  nombre: string
  descripcion: string
  capacidad: string
  imagen: string
}

export interface Especificacion {
  titulo: string
  items: string[]
}

export interface TabContenido {
  descripcion: string[]
  caracteristicas: {
    titulo: string
    descripcion: string
  }[]
  aplicaciones: {
    titulo: string
    descripcion: string
    icono: string
  }[]
  especificaciones: {
    titulo: string
    items: {
      subtitulo: string
      contenido: string[]
    }[]
  }[]
}

export interface Equipo {
  id: string
  titulo: string
  descripcionCorta: string
  icon: LucideIcon
  imagen: string
  galeria: {
    src: string
    alt: string
    width: number
    height: number
  }[]
  tabs: TabContenido
  modelos: Modelo[]
}

const equipos: Record<string, Equipo> = {
  chiller: {
    id: "chiller",
    titulo: "HVAC-R CHILLER",
    descripcionCorta:
      "Sistemas de enfriamiento de agua para aplicaciones de aire acondicionado y procesos industriales con alta eficiencia energética.",
    icon: Thermometer,
    imagen: "/placeholder.svg?height=400&width=400&text=Chiller",
    galeria: [
      {
        src: "/placeholder.svg?height=400&width=600&text=Chiller+Vista+Frontal",
        alt: "Chiller Vista Frontal",
        width: 600,
        height: 400,
      },
      {
        src: "/placeholder.svg?height=400&width=600&text=Chiller+Vista+Lateral",
        alt: "Chiller Vista Lateral",
        width: 600,
        height: 400,
      },
      {
        src: "/placeholder.svg?height=400&width=600&text=Chiller+Componentes",
        alt: "Chiller Componentes",
        width: 600,
        height: 400,
      },
      {
        src: "/placeholder.svg?height=400&width=600&text=Chiller+Instalación",
        alt: "Chiller Instalación",
        width: 600,
        height: 400,
      },
      {
        src: "/placeholder.svg?height=400&width=600&text=Chiller+Panel+Control",
        alt: "Chiller Panel de Control",
        width: 600,
        height: 400,
      },
    ],
    tabs: {
      descripcion: [
        'Un chiller es un sistema de refrigeración que enfría un fluido, generalmente agua o una mezcla de agua y glicol, que luego se utiliza para enfriar el aire o equipos en diversas aplicaciones. El término "chiller" proviene del inglés "to chill", que significa enfriar.',
        "Estos equipos funcionan mediante un ciclo de refrigeración por compresión de vapor, similar al que se encuentra en los refrigeradores domésticos, pero a una escala mucho mayor. El sistema utiliza un refrigerante que absorbe el calor del agua y lo transfiere al aire exterior a través de un condensador.",
        "Los chillers son fundamentales en sistemas de aire acondicionado de gran escala, como los que se encuentran en edificios comerciales, hospitales, hoteles y centros de datos, así como en procesos industriales que requieren enfriamiento preciso.",
      ],
      caracteristicas: [
        {
          titulo: "Alta Eficiencia Energética",
          descripcion:
            "Diseñados para optimizar el consumo de energía, reduciendo costos operativos y minimizando el impacto ambiental.",
        },
        {
          titulo: "Control Preciso de Temperatura",
          descripcion:
            "Mantienen la temperatura del agua con una precisión de ±0.5°C, ideal para aplicaciones que requieren control estricto.",
        },
        {
          titulo: "Operación Silenciosa",
          descripcion: "Tecnología de reducción de ruido que minimiza las molestias en entornos sensibles al ruido.",
        },
        {
          titulo: "Monitoreo Remoto",
          descripcion:
            "Sistemas de control avanzados que permiten la supervisión y ajuste a distancia, facilitando el mantenimiento preventivo.",
        },
        {
          titulo: "Refrigerantes Ecológicos",
          descripcion:
            "Utilizan refrigerantes de bajo impacto ambiental, cumpliendo con las normativas internacionales de protección del medio ambiente.",
        },
        {
          titulo: "Diseño Modular",
          descripcion:
            "Facilita la instalación, el mantenimiento y la expansión futura según las necesidades cambiantes.",
        },
      ],
      aplicaciones: [
        {
          titulo: "Edificios Comerciales",
          descripcion:
            "Oficinas, centros comerciales, hoteles y hospitales que requieren sistemas de climatización centralizados.",
          icono: "building",
        },
        {
          titulo: "Centros de Datos",
          descripcion:
            "Enfriamiento preciso para servidores y equipos informáticos que generan gran cantidad de calor.",
          icono: "server",
        },
        {
          titulo: "Industria Farmacéutica",
          descripcion: "Control preciso de temperatura para procesos de fabricación y almacenamiento de medicamentos.",
          icono: "pill",
        },
        {
          titulo: "Industria Alimentaria",
          descripcion: "Enfriamiento para procesos de producción, almacenamiento y conservación de alimentos.",
          icono: "food",
        },
        {
          titulo: "Industria Plástica",
          descripcion: "Enfriamiento de moldes y maquinaria en procesos de inyección y extrusión de plásticos.",
          icono: "box",
        },
        {
          titulo: "Sector Hospitalario",
          descripcion:
            "Climatización de quirófanos, laboratorios y áreas críticas que requieren condiciones ambientales controladas.",
          icono: "heart",
        },
      ],
      especificaciones: [
        {
          titulo: "Especificaciones Técnicas",
          items: [
            {
              subtitulo: "Capacidad de Enfriamiento",
              contenido: [
                "Rango: 20 a 500 toneladas de refrigeración",
                "Modulación: 10% a 100% de capacidad",
                "Temperatura de salida de agua: 5°C a 15°C",
              ],
            },
            {
              subtitulo: "Eficiencia Energética",
              contenido: [
                "COP (Coeficiente de rendimiento): 3.2 a 6.5",
                "EER (Ratio de eficiencia energética): 10.9 a 22.0",
                "IPLV (Valor integrado de carga parcial): 15.0 a 30.0",
              ],
            },
            {
              subtitulo: "Compresores",
              contenido: [
                "Tipos: Scroll, tornillo o centrífugo",
                "Cantidad: 1 a 8 compresores por unidad",
                "Refrigerantes: R-134a, R-410A, R-513A (ecológicos)",
              ],
            },
            {
              subtitulo: "Control y Monitoreo",
              contenido: [
                'Pantalla táctil de 10" con interfaz gráfica',
                "Conectividad: BACnet, Modbus, LonWorks",
                "Monitoreo remoto vía web o aplicación móvil",
              ],
            },
          ],
        },
        {
          titulo: "Dimensiones y Peso",
          items: [
            {
              subtitulo: "Tabla de Modelos",
              contenido: [
                "CH-100: 100 TR, 3,200 x 1,400 x 2,100 mm, 3,500 kg",
                "CH-200: 200 TR, 4,100 x 1,800 x 2,300 mm, 5,200 kg",
                "CH-300: 300 TR, 4,800 x 2,200 x 2,500 mm, 7,800 kg",
                "CH-400: 400 TR, 5,500 x 2,400 x 2,700 mm, 9,500 kg",
              ],
            },
          ],
        },
      ],
    },
    modelos: [
      {
        nombre: "Serie Eco-Chill",
        descripcion: "Chillers de alta eficiencia energética con tecnología inverter",
        capacidad: "30 - 120 TR",
        imagen: "/placeholder.svg?height=200&width=300&text=Eco-Chill",
      },
      {
        nombre: "Serie Industrial",
        descripcion: "Diseñados para aplicaciones industriales de alta demanda",
        capacidad: "100 - 500 TR",
        imagen: "/placeholder.svg?height=200&width=300&text=Industrial",
      },
      {
        nombre: "Serie Compact",
        descripcion: "Soluciones compactas para espacios reducidos",
        capacidad: "20 - 80 TR",
        imagen: "/placeholder.svg?height=200&width=300&text=Compact",
      },
      {
        nombre: "Serie Modular",
        descripcion: "Sistemas modulares escalables para crecimiento futuro",
        capacidad: "40 - 400 TR",
        imagen: "/placeholder.svg?height=200&width=300&text=Modular",
      },
      {
        nombre: "Serie Silent",
        descripcion: "Chillers de operación ultra silenciosa para zonas sensibles al ruido",
        capacidad: "30 - 200 TR",
        imagen: "/placeholder.svg?height=200&width=300&text=Silent",
      },
      {
        nombre: "Serie Premium",
        descripcion: "Máxima eficiencia y control avanzado para aplicaciones críticas",
        capacidad: "50 - 300 TR",
        imagen: "/placeholder.svg?height=200&width=300&text=Premium",
      },
    ],
  },
  vrf: {
    id: "vrf",
    titulo: "HVAC-R VRF",
    descripcionCorta:
      "Sistemas de flujo de refrigerante variable que ofrecen control individual de zonas y alta eficiencia energética para edificios modernos.",
    icon: Thermometer,
    imagen: "/placeholder.svg?height=400&width=400&text=VRF",
    galeria: [
      {
        src: "/placeholder.svg?height=400&width=600&text=VRF+Unidad+Exterior",
        alt: "VRF Unidad Exterior",
        width: 600,
        height: 400,
      },
      {
        src: "/placeholder.svg?height=400&width=600&text=VRF+Unidad+Interior",
        alt: "VRF Unidad Interior",
        width: 600,
        height: 400,
      },
      {
        src: "/placeholder.svg?height=400&width=600&text=VRF+Instalación",
        alt: "VRF Instalación",
        width: 600,
        height: 400,
      },
      {
        src: "/placeholder.svg?height=400&width=600&text=VRF+Controlador",
        alt: "VRF Controlador",
        width: 600,
        height: 400,
      },
      {
        src: "/placeholder.svg?height=400&width=600&text=VRF+Diagrama+Sistema",
        alt: "VRF Diagrama del Sistema",
        width: 600,
        height: 400,
      },
    ],
    tabs: {
      descripcion: [
        "Un sistema VRF (Variable Refrigerant Flow) o Flujo de Refrigerante Variable es una tecnología avanzada de climatización que permite controlar de manera independiente la temperatura de múltiples zonas de un edificio, ofreciendo calefacción y refrigeración simultáneas según sea necesario.",
        "Estos sistemas utilizan una unidad exterior conectada a múltiples unidades interiores a través de tuberías de refrigerante. La tecnología VRF ajusta continuamente el flujo de refrigerante a cada unidad interior según la demanda específica de cada zona, lo que resulta en un control preciso de la temperatura y una mayor eficiencia energética.",
        "A diferencia de los sistemas tradicionales, los sistemas VRF pueden proporcionar calefacción y refrigeración simultáneas a diferentes zonas del edificio, recuperando el calor de las áreas que requieren refrigeración y transfiriéndolo a las áreas que necesitan calefacción, maximizando así la eficiencia energética.",
      ],
      caracteristicas: [
        {
          titulo: "Control Zonal Independiente",
          descripcion:
            "Permite controlar la temperatura de cada zona de forma independiente, maximizando el confort de los ocupantes.",
        },
        {
          titulo: "Alta Eficiencia Energética",
          descripcion:
            "Tecnología inverter que ajusta la capacidad según la demanda, reduciendo significativamente el consumo energético.",
        },
        {
          titulo: "Operación Simultánea",
          descripcion:
            "Capacidad para proporcionar calefacción y refrigeración simultáneas a diferentes zonas del edificio.",
        },
        {
          titulo: "Diseño Flexible",
          descripcion:
            "Amplia gama de unidades interiores compatibles (cassette, pared, conducto, suelo) para adaptarse a cualquier espacio.",
        },
        {
          titulo: "Control Centralizado",
          descripcion:
            "Sistemas de control avanzados que permiten la gestión centralizada de todas las unidades desde una interfaz única.",
        },
        {
          titulo: "Instalación Simplificada",
          descripcion:
            "Requiere menos espacio y componentes que los sistemas tradicionales, facilitando la instalación y reduciendo costos.",
        },
      ],
      aplicaciones: [
        {
          titulo: "Edificios de Oficinas",
          descripcion:
            "Ideal para edificios con múltiples oficinas que requieren diferentes temperaturas según la ocupación y orientación.",
          icono: "building",
        },
        {
          titulo: "Hoteles",
          descripcion:
            "Perfecto para hoteles donde cada habitación puede requerir una temperatura diferente según las preferencias del huésped.",
          icono: "hotel",
        },
        {
          titulo: "Centros Comerciales",
          descripcion: "Solución eficiente para grandes espacios comerciales con diferentes tiendas y áreas comunes.",
          icono: "shopping",
        },
        {
          titulo: "Edificios Residenciales",
          descripcion: "Excelente para edificios de apartamentos donde cada vivienda requiere control independiente.",
          icono: "home",
        },
        {
          titulo: "Hospitales",
          descripcion:
            "Adecuado para instalaciones médicas donde diferentes áreas requieren condiciones específicas de temperatura y humedad.",
          icono: "hospital",
        },
        {
          titulo: "Restaurantes",
          descripcion:
            "Ideal para establecimientos con diferentes áreas (cocina, comedor, bar) que requieren condiciones específicas.",
          icono: "restaurant",
        },
      ],
      especificaciones: [
        {
          titulo: "Especificaciones Técnicas",
          items: [
            {
              subtitulo: "Capacidad",
              contenido: [
                "Unidades exteriores: 5 a 30 HP (14 a 84 kW)",
                "Conexión de hasta 64 unidades interiores por sistema",
                "Longitud de tubería: hasta 1,000 metros en total",
              ],
            },
            {
              subtitulo: "Eficiencia Energética",
              contenido: ["COP (Calefacción): 4.0 a 5.2", "EER (Refrigeración): 3.8 a 5.0", "SEER: Hasta 28.0"],
            },
            {
              subtitulo: "Refrigerante",
              contenido: [
                "Tipo: R-410A (ecológico)",
                "Carga variable según la demanda",
                "Sistema de detección de fugas integrado",
              ],
            },
            {
              subtitulo: "Control y Monitoreo",
              contenido: [
                "Control centralizado con pantalla táctil",
                "Conectividad BACnet, LonWorks y Modbus",
                "Control remoto vía aplicación móvil o web",
              ],
            },
          ],
        },
        {
          titulo: "Unidades Interiores Compatibles",
          items: [
            {
              subtitulo: "Tipos y Capacidades",
              contenido: [
                "Cassette de 4 vías: 2.2 - 14.0 kW, 28 - 36 dB",
                "Conducto de alta presión: 5.6 - 28.0 kW, 30 - 42 dB",
                "Pared: 1.7 - 7.1 kW, 25 - 34 dB",
                "Suelo / Techo: 3.6 - 14.0 kW, 32 - 40 dB",
              ],
            },
          ],
        },
      ],
    },
    modelos: [
      {
        nombre: "Serie Mini VRF",
        descripcion: "Soluciones compactas para espacios pequeños y medianos",
        capacidad: "12 - 38 kW",
        imagen: "/placeholder.svg?height=200&width=300&text=Mini+VRF",
      },
      {
        nombre: "Serie Estándar",
        descripcion: "Equilibrio perfecto entre rendimiento y eficiencia",
        capacidad: "22 - 135 kW",
        imagen: "/placeholder.svg?height=200&width=300&text=Estándar+VRF",
      },
      {
        nombre: "Serie High Efficiency",
        descripcion: "Máxima eficiencia energética para proyectos sostenibles",
        capacidad: "22 - 168 kW",
        imagen: "/placeholder.svg?height=200&width=300&text=High+Efficiency",
      },
      {
        nombre: "Serie Heat Recovery",
        descripcion: "Recuperación de calor para calefacción y refrigeración simultáneas",
        capacidad: "22 - 168 kW",
        imagen: "/placeholder.svg?height=200&width=300&text=Heat+Recovery",
      },
      {
        nombre: "Serie Water-Cooled",
        descripcion: "Sistemas refrigerados por agua para aplicaciones especiales",
        capacidad: "28 - 224 kW",
        imagen: "/placeholder.svg?height=200&width=300&text=Water-Cooled",
      },
      {
        nombre: "Serie Individual",
        descripcion: "Unidades individuales para aplicaciones residenciales y pequeños comercios",
        capacidad: "5 - 14 kW",
        imagen: "/placeholder.svg?height=200&width=300&text=Individual",
      },
    ],
  },
  rooftop: {
    id: "rooftop",
    titulo: "HVAC-R ROOFTOP",
    descripcionCorta:
      "Unidades compactas de aire acondicionado diseñadas para instalación en azoteas, ideales para grandes espacios.",
    icon: Thermometer,
    imagen: "/placeholder.svg?height=400&width=400&text=Rooftop",
    galeria: [
      {
        src: "/placeholder.svg?height=400&width=600&text=Rooftop+Vista+General",
        alt: "Rooftop Vista General",
        width: 600,
        height: 400,
      },
      {
        src: "/placeholder.svg?height=400&width=600&text=Rooftop+Instalación",
        alt: "Rooftop Instalación",
        width: 600,
        height: 400,
      },
      {
        src: "/placeholder.svg?height=400&width=600&text=Rooftop+Componentes",
        alt: "Rooftop Componentes",
        width: 600,
        height: 400,
      },
      {
        src: "/placeholder.svg?height=400&width=600&text=Rooftop+Panel+Control",
        alt: "Rooftop Panel de Control",
        width: 600,
        height: 400,
      },
      {
        src: "/placeholder.svg?height=400&width=600&text=Rooftop+Diagrama",
        alt: "Rooftop Diagrama",
        width: 600,
        height: 400,
      },
    ],
    tabs: {
      descripcion: [
        "Las unidades Rooftop son sistemas de aire acondicionado compactos y autónomos diseñados específicamente para ser instalados en azoteas o exteriores. Estos equipos integran en una sola unidad todos los componentes necesarios para la climatización: compresor, condensador, evaporador, ventiladores y controles.",
        "Su diseño compacto y su instalación exterior permiten aprovechar al máximo el espacio interior del edificio, mientras que su capacidad para manejar grandes volúmenes de aire los hace ideales para espacios amplios como centros comerciales, supermercados, naves industriales y grandes oficinas.",
        "Las unidades Rooftop modernas incorporan tecnologías avanzadas como compresores de velocidad variable, recuperación de calor y sistemas de filtración de alta eficiencia, ofreciendo un equilibrio óptimo entre confort, calidad del aire interior y eficiencia energética.",
      ],
      caracteristicas: [
        {
          titulo: "Diseño Compacto Todo-en-Uno",
          descripcion:
            "Integra todos los componentes del sistema de climatización en una sola unidad, simplificando la instalación y el mantenimiento.",
        },
        {
          titulo: "Instalación Exterior",
          descripcion:
            "Se instala en la azotea o exterior del edificio, liberando espacio interior valioso y reduciendo el ruido en las áreas ocupadas.",
        },
        {
          titulo: "Alta Capacidad",
          descripcion:
            "Diseñado para climatizar grandes espacios con volúmenes significativos de aire, ideal para áreas abiertas y diáfanas.",
        },
        {
          titulo: "Economizador",
          descripcion:
            "Sistema que aprovecha el aire exterior cuando las condiciones son favorables, reduciendo el consumo energético.",
        },
        {
          titulo: "Ventilación Controlada",
          descripcion:
            "Permite la renovación del aire interior con aire fresco exterior, mejorando la calidad del aire y cumpliendo con normativas.",
        },
        {
          titulo: "Control Avanzado",
          descripcion:
            "Sistemas de control inteligente que optimizan el funcionamiento según las condiciones ambientales y la ocupación.",
        },
      ],
      aplicaciones: [
        {
          titulo: "Centros Comerciales",
          descripcion:
            "Ideal para grandes espacios comerciales con múltiples tiendas y áreas comunes de gran afluencia.",
          icono: "shopping",
        },
        {
          titulo: "Supermercados",
          descripcion: "Perfectos para espacios amplios con necesidades específicas de temperatura y ventilación.",
          icono: "cart",
        },
        {
          titulo: "Naves Industriales",
          descripcion: "Solución eficiente para grandes espacios industriales con altas cargas térmicas.",
          icono: "factory",
        },
        {
          titulo: "Cines y Teatros",
          descripcion:
            "Adecuados para espacios de entretenimiento con ocupación variable y necesidades específicas de confort.",
          icono: "film",
        },
        {
          titulo: "Gimnasios",
          descripcion:
            "Proporcionan climatización y ventilación adecuadas para espacios deportivos con alta generación de calor y humedad.",
          icono: "dumbbell",
        },
        {
          titulo: "Grandes Oficinas",
          descripcion: "Solución centralizada para espacios de oficina de planta abierta con múltiples zonas.",
          icono: "briefcase",
        },
      ],
      especificaciones: [
        {
          titulo: "Especificaciones Técnicas",
          items: [
            {
              subtitulo: "Capacidad",
              contenido: [
                "Rango: 3 a 150 toneladas de refrigeración (10 a 530 kW)",
                "Caudal de aire: 1,500 a 30,000 CFM",
                "Alcance: hasta 3,000 m² por unidad",
              ],
            },
            {
              subtitulo: "Eficiencia Energética",
              contenido: ["EER: 9.5 a 12.5", "IEER: 13.0 a 19.0", "Clasificación energética: A+ a A+++"],
            },
            {
              subtitulo: "Características Técnicas",
              contenido: [
                "Compresores: Scroll, Digital Scroll o Inverter",
                "Refrigerante: R-410A o R-32 (ecológicos)",
                "Ventiladores: EC (Electronically Commutated) de alta eficiencia",
                "Filtración: MERV 8 a MERV 13",
              ],
            },
            {
              subtitulo: "Control y Conectividad",
              contenido: [
                "Control por microprocesador con pantalla táctil",
                "Conectividad BACnet, Modbus, LonWorks",
                "Monitoreo remoto vía web o aplicación móvil",
                "Integración con sistemas BMS",
              ],
            },
          ],
        },
        {
          titulo: "Dimensiones y Peso",
          items: [
            {
              subtitulo: "Según Capacidad",
              contenido: [
                "10 TR: 2.5 x 2.2 x 1.2 m, 800 kg",
                "25 TR: 3.2 x 2.5 x 1.5 m, 1,200 kg",
                "50 TR: 4.5 x 2.8 x 1.8 m, 1,800 kg",
                "100 TR: 6.0 x 3.2 x 2.2 m, 2,500 kg",
              ],
            },
          ],
        },
      ],
    },
    modelos: [
      {
        nombre: "Serie Compact",
        descripcion: "Unidades compactas para espacios comerciales medianos",
        capacidad: "3 - 20 TR",
        imagen: "/placeholder.svg?height=200&width=300&text=Compact+Rooftop",
      },
      {
        nombre: "Serie Commercial",
        descripcion: "Soluciones estándar para aplicaciones comerciales",
        capacidad: "15 - 50 TR",
        imagen: "/placeholder.svg?height=200&width=300&text=Commercial+Rooftop",
      },
      {
        nombre: "Serie High Efficiency",
        descripcion: "Máxima eficiencia energética con tecnología inverter",
        capacidad: "10 - 70 TR",
        imagen: "/placeholder.svg?height=200&width=300&text=HE+Rooftop",
      },
      {
        nombre: "Serie Industrial",
        descripcion: "Diseñadas para grandes espacios industriales y comerciales",
        capacidad: "40 - 150 TR",
        imagen: "/placeholder.svg?height=200&width=300&text=Industrial+Rooftop",
      },
      {
        nombre: "Serie Fresh Air",
        descripcion: "Con sistema avanzado de renovación de aire para mejor calidad interior",
        capacidad: "10 - 60 TR",
        imagen: "/placeholder.svg?height=200&width=300&text=Fresh+Air+Rooftop",
      },
      {
        nombre: "Serie Hybrid",
        descripcion: "Combinan refrigeración eléctrica con calefacción a gas para mayor eficiencia",
        capacidad: "15 - 80 TR",
        imagen: "/placeholder.svg?height=200&width=300&text=Hybrid+Rooftop",
      },
    ],
  },
  uma: {
    id: "uma",
    titulo: "HVAC-R UMA",
    descripcionCorta: "Unidades manejadoras de aire que procesan y distribuyen aire acondicionado a través de ductos.",
    icon: Thermometer,
    imagen: "/placeholder.svg?height=400&width=400&text=UMA",
    galeria: [
      {
        src: "/placeholder.svg?height=400&width=600&text=UMA+Vista+General",
        alt: "UMA Vista General",
        width: 600,
        height: 400,
      },
      {
        src: "/placeholder.svg?height=400&width=600&text=UMA+Componentes+Internos",
        alt: "UMA Componentes Internos",
        width: 600,
        height: 400,
      },
      {
        src: "/placeholder.svg?height=400&width=600&text=UMA+Instalación",
        alt: "UMA Instalación",
        width: 600,
        height: 400,
      },
      {
        src: "/placeholder.svg?height=400&width=600&text=UMA+Panel+Control",
        alt: "UMA Panel de Control",
        width: 600,
        height: 400,
      },
      {
        src: "/placeholder.svg?height=400&width=600&text=UMA+Sistema+Ductos",
        alt: "UMA Sistema de Ductos",
        width: 600,
        height: 400,
      },
    ],
    tabs: {
      descripcion: [
        "Las Unidades Manejadoras de Aire (UMA) son equipos centralizados de tratamiento de aire diseñados para acondicionar y distribuir el aire a través de un sistema de ductos. Estas unidades son componentes fundamentales en sistemas HVAC de edificios medianos y grandes, donde se requiere un control preciso de las condiciones ambientales.",
        "Una UMA típica consta de ventiladores, serpentines de calefacción y refrigeración, filtros, humidificadores, deshumidificadores y secciones de mezcla de aire. Estos componentes trabajan en conjunto para tratar el aire antes de distribuirlo a las diferentes zonas del edificio, garantizando la temperatura, humedad y calidad del aire adecuadas.",
        "Las UMAs modernas incorporan tecnologías avanzadas como motores EC de alta eficiencia, recuperadores de calor y sistemas de filtración de alta eficacia, ofreciendo un equilibrio óptimo entre confort, calidad del aire interior y eficiencia energética.",
      ],
      caracteristicas: [
        {
          titulo: "Tratamiento Completo del Aire",
          descripcion:
            "Capacidad para filtrar, calentar, enfriar, humidificar y deshumidificar el aire en una sola unidad.",
        },
        {
          titulo: "Distribución Centralizada",
          descripcion:
            "Sistema que permite distribuir aire acondicionado a múltiples zonas a través de una red de ductos.",
        },
        {
          titulo: "Flexibilidad de Configuración",
          descripcion: "Diseño modular que permite adaptar la unidad a las necesidades específicas de cada proyecto.",
        },
        {
          titulo: "Control Preciso",
          descripcion:
            "Sistemas de control avanzados que permiten ajustar con precisión las condiciones del aire suministrado.",
        },
        {
          titulo: "Recuperación de Energía",
          descripcion:
            "Opciones con recuperadores de calor que aprovechan la energía del aire de retorno para precondicionamiento.",
        },
        {
          titulo: "Filtración Avanzada",
          descripcion:
            "Múltiples etapas de filtración disponibles, desde filtros básicos hasta HEPA para aplicaciones críticas.",
        },
      ],
      aplicaciones: [
        {
          titulo: "Hospitales",
          descripcion:
            "Ideal para áreas que requieren control estricto de condiciones ambientales y alta calidad del aire.",
          icono: "heart",
        },
        {
          titulo: "Edificios de Oficinas",
          descripcion:
            "Solución centralizada para climatización de múltiples pisos y zonas con diferentes necesidades.",
          icono: "building",
        },
        {
          titulo: "Centros Educativos",
          descripcion: "Proporciona confort y ventilación adecuada en aulas, auditorios y espacios comunes.",
          icono: "book",
        },
        {
          titulo: "Laboratorios",
          descripcion: "Control preciso de temperatura, humedad y presión para entornos de investigación y producción.",
          icono: "flask",
        },
        {
          titulo: "Hoteles",
          descripcion:
            "Climatización centralizada para habitaciones, salones y áreas comunes con diferentes requisitos.",
          icono: "bed",
        },
        {
          titulo: "Industria Farmacéutica",
          descripcion: "Cumplimiento de estándares GMP con control preciso de condiciones ambientales y filtración.",
          icono: "pill",
        },
      ],
      especificaciones: [
        {
          titulo: "Especificaciones Técnicas",
          items: [
            {
              subtitulo: "Capacidad",
              contenido: [
                "Caudal de aire: 1,000 a 100,000 CFM",
                "Capacidad de refrigeración: 5 a 500 TR",
                "Capacidad de calefacción: 10 kW a 1,000 kW",
              ],
            },
            {
              subtitulo: "Características Técnicas",
              contenido: [
                "Ventiladores: Centrífugos, Plug Fan o EC",
                "Serpentines: Agua fría, expansión directa, agua caliente, vapor o eléctricos",
                "Filtración: G4 a H14 (MERV 8 a HEPA)",
                "Recuperación: Rueda entálpica, placas o tubos de calor",
              ],
            },
            {
              subtitulo: "Configuraciones",
              contenido: [
                "Horizontal o vertical",
                "Flujo simple o doble",
                "Interior o exterior (weatherproof)",
                "Modular o compacta",
              ],
            },
            {
              subtitulo: "Control y Monitoreo",
              contenido: [
                "Control por microprocesador con HMI táctil",
                "Conectividad BACnet, Modbus, LonWorks",
                "Monitoreo remoto vía web o aplicación móvil",
                "Integración con sistemas BMS",
              ],
            },
          ],
        },
        {
          titulo: "Dimensiones y Materiales",
          items: [
            {
              subtitulo: "Construcción",
              contenido: [
                "Paneles: Acero galvanizado con aislamiento de 25 a 50 mm",
                "Acabados: Pintura epóxica, acero inoxidable o aluminio",
                "Bandejas de condensados: Acero inoxidable con doble pendiente",
                "Puertas de acceso con visores y cierres de seguridad",
              ],
            },
          ],
        },
      ],
    },
    modelos: [
      {
        nombre: "Serie Compact",
        descripcion: "Unidades compactas para espacios con limitaciones de espacio",
        capacidad: "1,000 - 10,000 CFM",
        imagen: "/placeholder.svg?height=200&width=300&text=Compact+UMA",
      },
      {
        nombre: "Serie Standard",
        descripcion: "Equilibrio entre rendimiento y costo para aplicaciones generales",
        capacidad: "5,000 - 30,000 CFM",
        imagen: "/placeholder.svg?height=200&width=300&text=Standard+UMA",
      },
      {
        nombre: "Serie High Efficiency",
        descripcion: "Máxima eficiencia energética con motores EC y recuperación de calor",
        capacidad: "8,000 - 50,000 CFM",
        imagen: "/placeholder.svg?height=200&width=300&text=HE+UMA",
      },
      {
        nombre: "Serie Hospital",
        descripcion: "Diseñadas para cumplir con estándares hospitalarios y áreas críticas",
        capacidad: "5,000 - 40,000 CFM",
        imagen: "/placeholder.svg?height=200&width=300&text=Hospital+UMA",
      },
      {
        nombre: "Serie Industrial",
        descripcion: "Robustas y de alta capacidad para aplicaciones industriales exigentes",
        capacidad: "20,000 - 100,000 CFM",
        imagen: "/placeholder.svg?height=200&width=300&text=Industrial+UMA",
      },
      {
        nombre: "Serie Modular",
        descripcion: "Configuración personalizable según necesidades específicas del proyecto",
        capacidad: "Variable según configuración",
        imagen: "/placeholder.svg?height=200&width=300&text=Modular+UMA",
      },
    ],
  },
  variadores: {
    id: "variadores",
    titulo: "VARIADORES VFD",
    descripcionCorta:
      "Dispositivos que controlan la velocidad de motores eléctricos para optimizar el consumo energético.",
    icon: Cpu,
    imagen: "/placeholder.svg?height=400&width=400&text=Variadores+VFD",
    galeria: [
      {
        src: "/placeholder.svg?height=400&width=600&text=VFD+Vista+Frontal",
        alt: "VFD Vista Frontal",
        width: 600,
        height: 400,
      },
      {
        src: "/placeholder.svg?height=400&width=600&text=VFD+Panel+Control",
        alt: "VFD Panel de Control",
        width: 600,
        height: 400,
      },
      {
        src: "/placeholder.svg?height=400&width=600&text=VFD+Instalación",
        alt: "VFD Instalación",
        width: 600,
        height: 400,
      },
      {
        src: "/placeholder.svg?height=400&width=600&text=VFD+Aplicación+HVAC",
        alt: "VFD Aplicación HVAC",
        width: 600,
        height: 400,
      },
      {
        src: "/placeholder.svg?height=400&width=600&text=VFD+Diagrama+Conexión",
        alt: "VFD Diagrama de Conexión",
        width: 600,
        height: 400,
      },
    ],
    tabs: {
      descripcion: [
        "Los Variadores de Frecuencia (VFD, por sus siglas en inglés) son dispositivos electrónicos que controlan la velocidad y el par de motores eléctricos de corriente alterna mediante la variación de la frecuencia y el voltaje suministrados. Esta tecnología permite ajustar la velocidad del motor según las necesidades reales de la aplicación, lo que resulta en importantes ahorros energéticos y mejoras operativas.",
        "A diferencia de los métodos tradicionales que operan los motores a velocidad constante, los VFD permiten una operación a velocidad variable, eliminando el desperdicio de energía y reduciendo el desgaste mecánico. Además, proporcionan arranques y paradas suaves que prolongan la vida útil del motor y reducen los picos de corriente en la red eléctrica.",
        "Los variadores modernos incorporan funciones avanzadas como protecciones integradas, comunicación con sistemas de control, capacidad de regeneración de energía y algoritmos de optimización que maximizan la eficiencia en todo el rango de operación.",
      ],
      caracteristicas: [
        {
          titulo: "Control Preciso de Velocidad",
          descripcion:
            "Ajuste continuo de la velocidad del motor desde 0% hasta 100% según la demanda real del sistema.",
        },
        {
          titulo: "Ahorro Energético",
          descripcion:
            "Reducción del consumo eléctrico de hasta 70% en aplicaciones de par variable como bombas y ventiladores.",
        },
        {
          titulo: "Arranque y Parada Suaves",
          descripcion: "Eliminación de picos de corriente y estrés mecánico durante los arranques y paradas del motor.",
        },
        {
          titulo: "Protecciones Integradas",
          descripcion: "Funciones de protección para sobrecarga, sobretensión, cortocircuito y fallas a tierra.",
        },
        {
          titulo: "Comunicación Avanzada",
          descripcion: "Interfaces de comunicación para integración con sistemas BMS, SCADA y PLC.",
        },
        {
          titulo: "Programación Flexible",
          descripcion:
            "Múltiples parámetros configurables para adaptar el funcionamiento a cada aplicación específica.",
        },
      ],
      aplicaciones: [
        {
          titulo: "Sistemas HVAC",
          descripcion: "Control de ventiladores, bombas y compresores en sistemas de climatización para edificios.",
          icono: "thermometer",
        },
        {
          titulo: "Bombeo de Agua",
          descripcion: "Sistemas de presión constante, abastecimiento de agua y tratamiento de aguas residuales.",
          icono: "droplet",
        },
        {
          titulo: "Industria Manufacturera",
          descripcion: "Control de cintas transportadoras, mezcladoras, extrusoras y maquinaria de producción.",
          icono: "factory",
        },
        {
          titulo: "Sistemas de Ventilación",
          descripcion: "Extracción de humos, renovación de aire y presurización de escaleras en edificios.",
          icono: "fan",
        },
        {
          titulo: "Torres de Enfriamiento",
          descripcion:
            "Control de ventiladores en torres de refrigeración para optimizar el rendimiento según condiciones ambientales.",
          icono: "tower",
        },
        {
          titulo: "Elevación y Transporte",
          descripcion: "Aplicaciones en ascensores, escaleras mecánicas y sistemas de transporte de materiales.",
          icono: "arrow-up",
        },
      ],
      especificaciones: [
        {
          titulo: "Especificaciones Técnicas",
          items: [
            {
              subtitulo: "Rangos de Potencia",
              contenido: [
                "Micro VFD: 0.2 kW a 2.2 kW",
                "Compactos: 0.75 kW a 22 kW",
                "Estándar: 15 kW a 250 kW",
                "Alta potencia: 200 kW a 1,500 kW",
              ],
            },
            {
              subtitulo: "Características Eléctricas",
              contenido: [
                "Alimentación: Monofásica 220V o Trifásica 220V/380V/440V/480V",
                "Frecuencia de salida: 0 a 400 Hz",
                "Factor de potencia: >0.95 (con inductancia DC)",
                "Eficiencia: >97% a carga nominal",
              ],
            },
            {
              subtitulo: "Funciones de Control",
              contenido: [
                "Métodos de control: V/f, V/f con compensación, vectorial sin sensor, vectorial con realimentación",
                "Entradas/Salidas: Digitales, analógicas, relés y pulsos",
                "PID integrado con múltiples referencias",
                "Funciones de ahorro de energía y optimización",
              ],
            },
            {
              subtitulo: "Comunicación",
              contenido: [
                "Protocolos: Modbus RTU/TCP, BACnet MS/TP/IP, LonWorks, Profibus, DeviceNet",
                "Puertos: RS-485, Ethernet, USB para programación",
                "Monitoreo remoto vía web o aplicación móvil",
                "Integración con sistemas BMS y SCADA",
              ],
            },
          ],
        },
        {
          titulo: "Protecciones y Ambiente",
          items: [
            {
              subtitulo: "Protecciones",
              contenido: [
                "Sobrecorriente, sobretensión, subtensión",
                "Sobretemperatura, sobrecarga",
                "Falla a tierra, cortocircuito",
                "Pérdida de fase, bloqueo del motor",
              ],
            },
            {
              subtitulo: "Condiciones Ambientales",
              contenido: [
                "Temperatura de operación: -10°C a 50°C (hasta 60°C con derating)",
                "Humedad relativa: 5% a 95% sin condensación",
                "Altitud: hasta 1000m sin derating (hasta 4000m con derating)",
                "Grado de protección: IP20 estándar (IP21, IP54, IP55 disponibles)",
              ],
            },
          ],
        },
      ],
    },
    modelos: [
      {
        nombre: "Serie Micro",
        descripcion: "Variadores compactos para aplicaciones simples de baja potencia",
        capacidad: "0.2 - 2.2 kW",
        imagen: "/placeholder.svg?height=200&width=300&text=Micro+VFD",
      },
      {
        nombre: "Serie Standard",
        descripcion: "Equilibrio entre funcionalidad y costo para aplicaciones generales",
        capacidad: "0.75 - 90 kW",
        imagen: "/placeholder.svg?height=200&width=300&text=Standard+VFD",
      },
      {
        nombre: "Serie HVAC",
        descripcion: "Diseñados específicamente para aplicaciones de climatización y ventilación",
        capacidad: "1.5 - 250 kW",
        imagen: "/placeholder.svg?height=200&width=300&text=HVAC+VFD",
      },
      {
        nombre: "Serie Pump",
        descripcion: "Optimizados para sistemas de bombeo con funciones específicas",
        capacidad: "0.75 - 400 kW",
        imagen: "/placeholder.svg?height=200&width=300&text=Pump+VFD",
      },
      {
        nombre: "Serie High Performance",
        descripcion: "Control vectorial avanzado para aplicaciones que requieren alta precisión",
        capacidad: "0.75 - 500 kW",
        imagen: "/placeholder.svg?height=200&width=300&text=HP+VFD",
      },
      {
        nombre: "Serie Industrial",
        descripcion: "Robustos y de alta potencia para entornos industriales exigentes",
        capacidad: "90 - 1,500 kW",
        imagen: "/placeholder.svg?height=200&width=300&text=Industrial+VFD",
      },
    ],
  },
  "gps-personas": {
    id: "gps-personas",
    titulo: "GPS Personas",
    descripcionCorta: "Sistemas de localización y seguimiento para garantizar la seguridad de personas en tiempo real.",
    icon: Navigation,
    imagen: "/placeholder.svg?height=400&width=400&text=GPS+Personas",
    galeria: [
      {
        src: "/placeholder.svg?height=400&width=600&text=GPS+Personas+Dispositivo",
        alt: "GPS Personas Dispositivo",
        width: 600,
        height: 400,
      },
      {
        src: "/placeholder.svg?height=400&width=600&text=GPS+Personas+App",
        alt: "GPS Personas Aplicación Móvil",
        width: 600,
        height: 400,
      },
      {
        src: "/placeholder.svg?height=400&width=600&text=GPS+Personas+Plataforma",
        alt: "GPS Personas Plataforma de Seguimiento",
        width: 600,
        height: 400,
      },
      {
        src: "/placeholder.svg?height=400&width=600&text=GPS+Personas+Uso",
        alt: "GPS Personas en Uso",
        width: 600,
        height: 400,
      },
      {
        src: "/placeholder.svg?height=400&width=600&text=GPS+Personas+Funciones",
        alt: "GPS Personas Funciones",
        width: 600,
        height: 400,
      },
    ],
    tabs: {
      descripcion: [
        "Los sistemas de GPS para personas son soluciones avanzadas de localización y seguimiento diseñadas para garantizar la seguridad y el bienestar de individuos en tiempo real. Estos dispositivos combinan tecnología GPS, comunicación celular y sensores adicionales para proporcionar información precisa sobre la ubicación y el estado de la persona que lo porta.",
        "A diferencia de las aplicaciones de localización en smartphones, estos dispositivos están específicamente diseñados para funcionar de manera autónoma, con baterías de larga duración, construcción robusta y funciones de emergencia dedicadas. Pueden ser utilizados como dispositivos independientes o como complemento a un teléfono móvil, ofreciendo una capa adicional de seguridad.",
        "Nuestros sistemas de GPS para personas incluyen tanto el hardware (dispositivo de localización) como el software (plataforma de seguimiento y aplicación móvil), proporcionando una solución integral para el monitoreo de personas vulnerables, trabajadores solitarios, personal de campo o cualquier persona que requiera supervisión por motivos de seguridad.",
      ],
      caracteristicas: [
        {
          titulo: "Localización en Tiempo Real",
          descripcion:
            "Seguimiento preciso de la ubicación con actualización constante y visualización en mapas detallados.",
        },
        {
          titulo: "Botón SOS de Emergencia",
          descripcion:
            "Permite enviar alertas inmediatas a contactos predefinidos en situaciones de peligro o emergencia.",
        },
        {
          titulo: "Geocercas",
          descripcion:
            "Creación de zonas virtuales que generan alertas cuando el usuario entra o sale de áreas predefinidas.",
        },
        {
          titulo: "Comunicación Bidireccional",
          descripcion:
            "Capacidad de comunicación de voz o mensajes entre el usuario del dispositivo y sus supervisores.",
        },
        {
          titulo: "Batería de Larga Duración",
          descripcion:
            "Diseñados para funcionar durante días o semanas con una sola carga, dependiendo del modelo y configuración.",
        },
        {
          titulo: "Resistencia y Durabilidad",
          descripcion: "Construcción robusta con resistencia al agua, golpes y condiciones ambientales adversas.",
        },
      ],
      aplicaciones: [
        {
          titulo: "Adultos Mayores",
          descripcion: "Monitoreo de personas de la tercera edad para brindar independencia con seguridad.",
          icono: "user",
        },
        {
          titulo: "Niños",
          descripcion:
            "Seguimiento de menores para tranquilidad de los padres durante actividades escolares o recreativas.",
          icono: "child",
        },
        {
          titulo: "Trabajadores Solitarios",
          descripcion: "Protección para empleados que realizan tareas en solitario o en zonas de riesgo.",
          icono: "briefcase",
        },
        {
          titulo: "Personal de Campo",
          descripcion: "Seguimiento y coordinación de equipos que trabajan en exteriores o zonas remotas.",
          icono: "users",
        },
        {
          titulo: "Personas con Necesidades Especiales",
          descripcion:
            "Monitoreo de personas con condiciones médicas, cognitivas o de movilidad que requieren supervisión.",
          icono: "heart",
        },
        {
          titulo: "Actividades de Aventura",
          descripcion: "Seguridad para excursionistas, montañistas y practicantes de deportes en zonas remotas.",
          icono: "mountain",
        },
      ],
      especificaciones: [
        {
          titulo: "Especificaciones Técnicas",
          items: [
            {
              subtitulo: "Tecnologías de Localización",
              contenido: [
                "GPS de alta sensibilidad (±2 metros)",
                "A-GPS para arranque rápido",
                "GLONASS/Galileo/BeiDou para mayor cobertura",
                "WiFi y Bluetooth para posicionamiento en interiores",
                "Triangulación celular como respaldo",
              ],
            },
            {
              subtitulo: "Comunicación",
              contenido: [
                "GSM/GPRS/3G/4G LTE según modelo",
                "Tarjeta SIM integrada con roaming internacional",
                "Bluetooth para conexión con smartphone",
                "WiFi para transmisión de datos en zonas con cobertura",
              ],
            },
            {
              subtitulo: "Sensores y Funciones",
              contenido: [
                "Acelerómetro para detección de caídas",
                "Sensor de movimiento para ahorro de batería",
                "Micrófono y altavoz para comunicación",
                "Vibración para alertas táctiles",
                "LED indicadores de estado",
              ],
            },
            {
              subtitulo: "Batería y Autonomía",
              contenido: [
                "Batería recargable de litio de 800-2500 mAh",
                "Autonomía: 2-14 días según modelo y uso",
                "Carga rápida vía USB o base de carga",
                "Modo de ahorro de energía automático",
              ],
            },
          ],
        },
        {
          titulo: "Plataforma de Seguimiento",
          items: [
            {
              subtitulo: "Funcionalidades",
              contenido: [
                "Visualización en tiempo real en mapas detallados",
                "Historial de recorridos con reproducción",
                "Configuración de geocercas y alertas",
                "Gestión de múltiples dispositivos",
                "Reportes y estadísticas de uso",
              ],
            },
            {
              subtitulo: "Acceso",
              contenido: [
                "Aplicación móvil para iOS y Android",
                "Plataforma web responsive",
                "API para integración con otros sistemas",
                "Notificaciones push, SMS y correo electrónico",
              ],
            },
          ],
        },
      ],
    },
    modelos: [
      {
        nombre: "GPS Senior",
        descripcion: "Diseñado específicamente para adultos mayores con interfaz simplificada",
        capacidad: "Batería hasta 5 días",
        imagen: "/placeholder.svg?height=200&width=300&text=GPS+Senior",
      },
      {
        nombre: "GPS Kids",
        descripcion: "Versión para niños con diseño atractivo y funciones de seguridad avanzadas",
        capacidad: "Batería hasta 3 días",
        imagen: "/placeholder.svg?height=200&width=300&text=GPS+Kids",
      },
      {
        nombre: "GPS Pro",
        descripcion: "Para profesionales y trabajadores con funciones avanzadas de reporte",
        capacidad: "Batería hasta 7 días",
        imagen: "/placeholder.svg?height=200&width=300&text=GPS+Pro",
      },
      {
        nombre: "GPS Mini",
        descripcion: "Versión ultracompacta y discreta para uso general",
        capacidad: "Batería hasta 2 días",
        imagen: "/placeholder.svg?height=200&width=300&text=GPS+Mini",
      },
      {
        nombre: "GPS Watch",
        descripcion: "Formato de reloj inteligente con funciones GPS integradas",
        capacidad: "Batería hasta 48 horas",
        imagen: "/placeholder.svg?height=200&width=300&text=GPS+Watch",
      },
      {
        nombre: "GPS Extreme",
        descripcion: "Para condiciones extremas y aventuras al aire libre",
        capacidad: "Batería hasta 14 días",
        imagen: "/placeholder.svg?height=200&width=300&text=GPS+Extreme",
      },
    ],
  },
  "gps-mascotas": {
    id: "gps-mascotas",
    titulo: "GPS Mascotas",
    descripcionCorta: "Dispositivos de seguimiento diseñados específicamente para monitorear la ubicación de mascotas.",
    icon: Smartphone,
    imagen: "/placeholder.svg?height=400&width=400&text=GPS+Mascotas",
    galeria: [
      {
        src: "/placeholder.svg?height=400&width=600&text=GPS+Mascotas+Collar",
        alt: "GPS Mascotas Collar",
        width: 600,
        height: 400,
      },
      {
        src: "/placeholder.svg?height=400&width=600&text=GPS+Mascotas+App",
        alt: "GPS Mascotas Aplicación Móvil",
        width: 600,
        height: 400,
      },
      {
        src: "/placeholder.svg?height=400&width=600&text=GPS+Mascotas+Plataforma",
        alt: "GPS Mascotas Plataforma de Seguimiento",
        width: 600,
        height: 400,
      },
      {
        src: "/placeholder.svg?height=400&width=600&text=GPS+Mascotas+Uso",
        alt: "GPS Mascotas en Uso",
        width: 600,
        height: 400,
      },
      {
        src: "/placeholder.svg?height=400&width=600&text=GPS+Mascotas+Funciones",
        alt: "GPS Mascotas Funciones",
        width: 600,
        height: 400,
      },
    ],
    tabs: {
      descripcion: [
        "Los sistemas de GPS para mascotas son dispositivos de localización especialmente diseñados para el seguimiento de animales domésticos. Estos dispositivos combinan tecnología GPS, comunicación celular y sensores adicionales en un formato compacto, ligero y resistente, adaptado a las necesidades y comportamientos de las mascotas.",
        "A diferencia de los microchips convencionales que solo permiten identificar a la mascota cuando es escaneada, los GPS para mascotas ofrecen localización en tiempo real, permitiendo a los dueños conocer la ubicación exacta de su animal de compañía en cualquier momento a través de una aplicación móvil o plataforma web.",
        "Nuestros sistemas de GPS para mascotas incluyen tanto el hardware (collar o dispositivo de localización) como el software (plataforma de seguimiento y aplicación móvil), proporcionando una solución integral para prevenir pérdidas, monitorear la actividad física y garantizar la seguridad de perros, gatos y otras mascotas.",
      ],
      caracteristicas: [
        {
          titulo: "Localización en Tiempo Real",
          descripcion:
            "Seguimiento preciso de la ubicación de la mascota con actualización constante en mapas detallados.",
        },
        {
          titulo: "Geocercas Virtuales",
          descripcion:
            "Creación de zonas seguras que generan alertas cuando la mascota sale de los límites establecidos.",
        },
        {
          titulo: "Monitoreo de Actividad",
          descripcion:
            "Seguimiento de los niveles de actividad, descanso y comportamiento de la mascota a lo largo del día.",
        },
        {
          titulo: "Diseño Adaptado a Mascotas",
          descripcion:
            "Dispositivos ligeros, compactos y resistentes al agua, diseñados específicamente para el confort animal.",
        },
        {
          titulo: "Batería de Larga Duración",
          descripcion:
            "Optimizados para funcionar durante días con una sola carga, con modos de ahorro de energía inteligentes.",
        },
        {
          titulo: "Historial de Recorridos",
          descripcion:
            "Registro de las rutas y lugares visitados por la mascota para análisis de comportamiento y hábitos.",
        },
      ],
      aplicaciones: [
        {
          titulo: "Perros",
          descripcion: "Seguimiento de perros durante paseos, en parques o para prevenir fugas del hogar.",
          icono: "dog",
        },
        {
          titulo: "Gatos",
          descripcion: "Monitoreo de gatos que salen al exterior para conocer sus rutas y territorios habituales.",
          icono: "cat",
        },
        {
          titulo: "Mascotas Fugitivas",
          descripcion: "Localización rápida de mascotas que tienden a escaparse o perderse con frecuencia.",
          icono: "search",
        },
        {
          titulo: "Entrenamiento",
          descripcion: "Apoyo en el entrenamiento de perros de caza o trabajo mediante seguimiento de recorridos.",
          icono: "target",
        },
        {
          titulo: "Mascotas en Viajes",
          descripcion: "Seguridad adicional durante viajes o vacaciones en entornos desconocidos para la mascota.",
          icono: "map",
        },
        {
          titulo: "Animales de Granja",
          descripcion: "Seguimiento de animales de granja pequeños o de valor en espacios abiertos.",
          icono: "farm",
        },
      ],
      especificaciones: [
        {
          titulo: "Especificaciones Técnicas",
          items: [
            {
              subtitulo: "Tecnologías de Localización",
              contenido: [
                "GPS de alta sensibilidad (±5 metros)",
                "A-GPS para arranque rápido",
                "WiFi y Bluetooth para posicionamiento en interiores",
                "Triangulación celular como respaldo",
              ],
            },
            {
              subtitulo: "Comunicación",
              contenido: [
                "GSM/GPRS/3G/4G LTE según modelo",
                "Tarjeta SIM integrada con cobertura nacional",
                "Bluetooth para conexión con smartphone",
                "Luz LED para visibilidad nocturna",
              ],
            },
            {
              subtitulo: "Sensores y Funciones",
              contenido: [
                "Acelerómetro para monitoreo de actividad",
                "Sensor de temperatura para prevenir golpes de calor",
                "Alertas de movimiento y vibración",
                "Resistencia al agua IP67/IP68",
              ],
            },
            {
              subtitulo: "Batería y Autonomía",
              contenido: [
                "Batería recargable de litio de 400-1200 mAh",
                "Autonomía: 2-10 días según modelo y uso",
                "Carga rápida vía USB o base magnética",
                "Alertas de batería baja en la aplicación",
              ],
            },
          ],
        },
        {
          titulo: "Plataforma de Seguimiento",
          items: [
            {
              subtitulo: "Funcionalidades",
              contenido: [
                "Visualización en tiempo real en mapas detallados",
                "Historial de recorridos con reproducción",
                "Configuración de geocercas y alertas",
                "Estadísticas de actividad y comportamiento",
                "Compartir ubicación con otros usuarios",
              ],
            },
            {
              subtitulo: "Acceso",
              contenido: [
                "Aplicación móvil para iOS y Android",
                "Plataforma web responsive",
                "Notificaciones push, SMS y correo electrónico",
                "Soporte para múltiples mascotas en una sola cuenta",
              ],
            },
          ],
        },
      ],
    },
    modelos: [
      {
        nombre: "PetTracker Mini",
        descripcion: "Versión ultraligera para mascotas pequeñas y gatos",
        capacidad: "Batería hasta 3 días",
        imagen: "/placeholder.svg?height=200&width=300&text=PetTracker+Mini",
      },
      {
        nombre: "DogGuard Pro",
        descripcion: "Diseñado específicamente para perros con collar reforzado",
        capacidad: "Batería hasta 7 días",
        imagen: "/placeholder.svg?height=200&width=300&text=DogGuard+Pro",
      },
      {
        nombre: "CatTracker",
        descripcion: "Optimizado para el comportamiento y tamaño de los gatos",
        capacidad: "Batería hasta 5 días",
        imagen: "/placeholder.svg?height=200&width=300&text=CatTracker",
      },
      {
        nombre: "PetFinder Basic",
        descripcion: "Modelo económico con funciones esenciales de localización",
        capacidad: "Batería hasta 4 días",
        imagen: "/placeholder.svg?height=200&width=300&text=PetFinder+Basic",
      },
      {
        nombre: "PetTracker Activity",
        descripcion: "Con funciones avanzadas de monitoreo de actividad y salud",
        capacidad: "Batería hasta 5 días",
        imagen: "/placeholder.svg?height=200&width=300&text=PetTracker+Activity",
      },
      {
        nombre: "PetGuard Extreme",
        descripcion: "Para mascotas activas en entornos rurales o extremos",
        capacidad: "Batería hasta 10 días",
        imagen: "/placeholder.svg?height=200&width=300&text=PetGuard+Extreme",
      },
    ],
  },
}

export default equipos
