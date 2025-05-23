import {
  Building2,
  Fan,
  Thermometer,
  Flame,
  RefreshCw,
  Droplets,
  CircuitBoard,
  Zap,
  BarChart3,
  Cpu,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

export interface Beneficio {
  titulo: string
  descripcion: string
}

export interface Caracteristica {
  titulo: string
  descripcion: string
}

export interface Especificacion {
  titulo: string
  items: string[]
}

export interface Solucion {
  id: string
  titulo: string
  descripcionCorta: string
  descripcionLarga: string
  icon: LucideIcon
  imagenPrincipal: string
  imagenSecundaria: string
  beneficios: Beneficio[]
  caracteristicas: Caracteristica[]
  especificaciones?: Especificacion[]
  proyectosDestacados?: boolean
}

const soluciones: Record<string, Solucion> = {
  "presurizacion-escaleras": {
    id: "presurizacion-escaleras",
    titulo: "Sistema Presurización de Escaleras",
    descripcionCorta:
      "Sistemas que mantienen las escaleras libres de humo durante incendios, garantizando rutas de evacuación seguras.",
    descripcionLarga:
      "Un Sistema de Presurización de Escaleras es una solución de seguridad contra incendios diseñada para mantener las escaleras y rutas de evacuación libres de humo durante un incendio. El sistema funciona creando una presión positiva en las cajas de escaleras, evitando que el humo ingrese a estos espacios críticos y permitiendo que los ocupantes del edificio puedan evacuar de manera segura, incluso cuando otras áreas están comprometidas por el humo y el fuego.",
    icon: Building2,
    imagenPrincipal: "/soluciones/presurizacionInico.png",
    imagenSecundaria: "/soluciones/SmartPresurizacion600x600.png",
    beneficios: [
      {
        titulo: "Mayor Seguridad para los Ocupantes",
        descripcion:
          "Garantiza rutas de evacuación libres de humo, reduciendo significativamente el riesgo de intoxicación durante un incendio.",
      },
      {
        titulo: "Cumplimiento Normativo",
        descripcion:
          "Nuestros sistemas cumplen con las normativas nacionales e internacionales de seguridad contra incendios.",
      },
      {
        titulo: "Facilita la Labor de los Bomberos",
        descripcion:
          "Proporciona a los equipos de emergencia acceso seguro al edificio para realizar operaciones de rescate y extinción.",
      },
      {
        titulo: "Monitoreo Constante",
        descripcion:
          "Sistemas equipados con monitoreo continuo que garantizan su funcionamiento óptimo en todo momento.",
      },
      {
        titulo: "Integración con Sistemas BMS",
        descripcion: "Posibilidad de integración con sistemas de gestión de edificios para un control centralizado.",
      },
      {
        titulo: "Mantenimiento Simplificado",
        descripcion:
          "Diseño que facilita las tareas de mantenimiento preventivo y correctivo, garantizando la longevidad del sistema.",
      },
    ],
    caracteristicas: [
      {
        titulo: "Ventiladores de Presurización",
        descripcion:
          "Potentes ventiladores inyectan aire fresco en las cajas de escaleras, creando una presión positiva que impide la entrada de humo.",
      },
      {
        titulo: "Sensores de Presión Diferencial",
        descripcion:
          "Monitorean constantemente la diferencia de presión entre las escaleras y las áreas adyacentes, ajustando automáticamente el sistema.",
      },
      {
        titulo: "Activación Automática",
        descripcion:
          "El sistema se activa automáticamente al detectar una alarma de incendio, garantizando una respuesta inmediata en caso de emergencia.",
      },
    ],
    especificaciones: [
      {
        titulo: "Componentes del Sistema",
        items: [
          "Ventiladores centrífugos de alta presión",
          "Sensores de presión diferencial",
          "Panel de control con interfaz intuitiva",
          "Sistema de respaldo de energía",
          "Compuertas motorizadas para control de flujo",
        ],
      },
      {
        titulo: "Normativas y Certificaciones",
        items: [
          "NFPA 92: Sistemas de Control de Humo",
          "EN 12101: Sistemas para el control de humo y calor",
          "Reglamento Nacional de Edificaciones (RNE)",
          "ISO 21927: Dispositivos para control de humo y calor",
          "Certificación UL para componentes críticos",
        ],
      },
    ],
    proyectosDestacados: true,
  },
  "extraccion-monoxido": {
    id: "extraccion-monoxido",
    titulo: "Sistema Extracción de Monóxido y CO2",
    descripcionCorta: "Sistemas de ventilación que eliminan gases tóxicos en estacionamientos y áreas cerradas.",
    descripcionLarga:
      "Un Sistema de Extracción de Monóxido y CO2 es una solución diseñada para detectar y eliminar gases tóxicos en espacios cerrados como estacionamientos subterráneos, túneles y áreas industriales. Estos sistemas utilizan sensores avanzados para monitorear constantemente los niveles de monóxido de carbono (CO) y dióxido de carbono (CO2), activando automáticamente los extractores cuando los niveles superan los límites seguros, garantizando así un ambiente saludable para las personas.",
    icon: Fan,
    imagenPrincipal: "/soluciones/SmartExtraccion600x600.png",
    imagenSecundaria: "/soluciones/monoxidoyco2.png",
    beneficios: [
      {
        titulo: "Protección de la Salud",
        descripcion:
          "Garantiza un ambiente seguro para los usuarios, eliminando los riesgos asociados a la inhalación de gases tóxicos.",
      },
      {
        titulo: "Cumplimiento Normativo",
        descripcion:
          "Nuestros sistemas cumplen con las normativas nacionales e internacionales de seguridad y calidad del aire.",
      },
      {
        titulo: "Eficiencia Energética",
        descripcion:
          "Sistemas inteligentes que operan solo cuando es necesario, optimizando el consumo de energía y reduciendo costos.",
      },
      {
        titulo: "Monitoreo Continuo",
        descripcion:
          "Vigilancia constante de los niveles de gases, proporcionando tranquilidad y seguridad las 24 horas.",
      },
      {
        titulo: "Mantenimiento Simplificado",
        descripcion:
          "Diseño que facilita las tareas de mantenimiento preventivo y correctivo, garantizando la longevidad del sistema.",
      },
      {
        titulo: "Adaptabilidad",
        descripcion:
          "Soluciones personalizadas que se adaptan a las características específicas de cada espacio y sus necesidades.",
      },
    ],
    caracteristicas: [
      {
        titulo: "Indetectable por los Sentidos",
        descripcion:
          "El CO es incoloro, inodoro e insípido, lo que hace imposible su detección sin equipos especializados.",
      },
      {
        titulo: "Altamente Tóxico",
        descripcion:
          "Incluso en concentraciones bajas, puede causar dolores de cabeza, mareos, náuseas y, en casos graves, la muerte.",
      },
      {
        titulo: "Acumulación Rápida",
        descripcion:
          "En espacios cerrados como estacionamientos, el CO puede acumularse rápidamente hasta niveles peligrosos.",
      },
    ],
    proyectosDestacados: false,
  },
  "aire-acondicionado": {
    id: "aire-acondicionado",
    titulo: "Aire Acondicionado",
    descripcionCorta:
      "Soluciones de climatización con tecnología Chiller, VRF, UMAs y Rooftop para todo tipo de edificaciones.",
    descripcionLarga:
      "Nuestros sistemas de aire acondicionado ofrecen soluciones completas de climatización para todo tipo de edificaciones, desde pequeñas oficinas hasta grandes complejos comerciales e industriales. Utilizamos tecnologías avanzadas como Chiller, VRF, UMAs y Rooftop, adaptadas a las necesidades específicas de cada proyecto para garantizar el máximo confort, eficiencia energética y calidad del aire interior.",
    icon: Thermometer,
    imagenPrincipal: "/soluciones/SmartAireAcondicionadohvac600x600.png",
    imagenSecundaria: "/soluciones/aireacondicionado.png",
    beneficios: [
      {
        titulo: "Confort Óptimo",
        descripcion:
          "Mantiene condiciones ambientales ideales durante todo el año, mejorando el bienestar y la productividad.",
      },
      {
        titulo: "Eficiencia Energética",
        descripcion:
          "Sistemas diseñados para minimizar el consumo energético, reduciendo costos operativos y el impacto ambiental.",
      },
      {
        titulo: "Calidad del Aire Interior",
        descripcion:
          "Filtración avanzada que elimina contaminantes, alérgenos y partículas, mejorando la salud de los ocupantes.",
      },
      {
        titulo: "Control Preciso",
        descripcion:
          "Tecnología que permite ajustar con precisión la temperatura y humedad en diferentes zonas según necesidades específicas.",
      },
      {
        titulo: "Operación Silenciosa",
        descripcion:
          "Diseñados para funcionar con niveles mínimos de ruido, creando ambientes tranquilos y productivos.",
      },
      {
        titulo: "Integración con BMS",
        descripcion:
          "Compatibilidad total con sistemas de gestión de edificios para un control centralizado y optimizado.",
      },
    ],
    caracteristicas: [
      {
        titulo: "Sistemas Chiller",
        descripcion: "Soluciones centralizadas de enfriamiento de agua para grandes edificios con múltiples zonas.",
      },
      {
        titulo: "Tecnología VRF",
        descripcion:
          "Sistemas de flujo de refrigerante variable que ofrecen control individual de zonas y alta eficiencia.",
      },
      {
        titulo: "Unidades Rooftop",
        descripcion: "Equipos compactos para instalación en azoteas, ideales para grandes espacios comerciales.",
      },
      {
        titulo: "Unidades Manejadoras de Aire (UMA)",
        descripcion:
          "Sistemas que procesan y distribuyen aire acondicionado a través de ductos para un control preciso del ambiente.",
      },
    ],
    proyectosDestacados: true,
  },
  "sistema-contra-incendio": {
    id: "sistema-contra-incendio",
    titulo: "Sistema contra incendio",
    descripcionCorta: "Sistemas de detección y extinción de incendios para proteger vidas y propiedades.",
    descripcionLarga:
      "Nuestros sistemas contra incendios proporcionan protección integral mediante la detección temprana y la respuesta rápida ante situaciones de emergencia. Combinamos tecnologías avanzadas de detección, alarma y extinción para crear soluciones personalizadas que cumplen con las normativas más exigentes, garantizando la seguridad de las personas y la protección de los bienes en todo tipo de edificaciones.",
    icon: Flame,
    imagenPrincipal: "/soluciones/SmartContraincendio600x600.png?height=400&width=400",
    imagenSecundaria: "/soluciones/contraincendio.png",
    beneficios: [
      {
        titulo: "Detección Temprana",
        descripcion:
          "Sensores avanzados que detectan incendios en sus etapas iniciales, permitiendo una respuesta rápida.",
      },
      {
        titulo: "Protección Integral",
        descripcion: "Sistemas que combinan detección, alarma y extinción para una protección completa del edificio.",
      },
      {
        titulo: "Cumplimiento Normativo",
        descripcion:
          "Diseñados para cumplir con las normativas locales e internacionales de seguridad contra incendios.",
      },
      {
        titulo: "Monitoreo 24/7",
        descripcion:
          "Vigilancia constante que garantiza la seguridad en todo momento, incluso cuando el edificio está desocupado.",
      },
      {
        titulo: "Integración con BMS",
        descripcion:
          "Compatibilidad con sistemas de gestión de edificios para una respuesta coordinada ante emergencias.",
      },
      {
        titulo: "Mantenimiento Preventivo",
        descripcion: "Programas de mantenimiento que aseguran el funcionamiento óptimo del sistema en todo momento.",
      },
    ],
    caracteristicas: [
      {
        titulo: "Detección Automática",
        descripcion:
          "Sensores de humo, calor y llama estratégicamente ubicados para detectar incendios en sus etapas iniciales.",
      },
      {
        titulo: "Sistemas de Alarma",
        descripcion:
          "Alertas visuales y sonoras que notifican a los ocupantes sobre la emergencia y facilitan la evacuación.",
      },
      {
        titulo: "Extinción Automática",
        descripcion:
          "Sistemas de rociadores, agentes limpios o espuma que se activan automáticamente para controlar el fuego.",
      },
      {
        titulo: "Control de Humo",
        descripcion:
          "Sistemas que gestionan el movimiento del humo para mantener las rutas de evacuación libres y seguras.",
      },
    ],
    especificaciones: [
      {
        titulo: "Componentes del Sistema",
        items: [
          "Panel de control centralizado",
          "Detectores de humo y calor",
          "Pulsadores manuales de alarma",
          "Sirenas y luces estroboscópicas",
          "Rociadores automáticos",
          "Sistemas de extinción por agentes limpios",
          "Bombas contra incendios",
        ],
      },
      {
        titulo: "Normativas y Certificaciones",
        items: [
          "NFPA 72: Código Nacional de Alarmas de Incendio",
          "NFPA 13: Instalación de Sistemas de Rociadores",
          "EN 54: Sistemas de detección y alarma de incendios",
          "Reglamento Nacional de Edificaciones (RNE)",
          "Certificación UL para componentes críticos",
        ],
      },
    ],
    proyectosDestacados: false,
  },
  "inyeccion-aire": {
    id: "inyeccion-aire",
    titulo: "Sistema de inyección y renovación de aire fresco",
    descripcionCorta:
      "Soluciones para mantener la calidad del aire interior mediante la renovación constante de aire fresco.",
    descripcionLarga:
      "Nuestros sistemas de inyección y renovación de aire fresco están diseñados para mantener una óptima calidad del aire interior, eliminando contaminantes, reduciendo la concentración de CO2 y proporcionando un ambiente saludable y confortable. Mediante la introducción controlada de aire exterior filtrado y la extracción del aire viciado, estos sistemas garantizan una ventilación adecuada en todo tipo de edificaciones, desde oficinas y centros comerciales hasta hospitales y centros educativos.",
    icon: RefreshCw,
    imagenPrincipal: "/soluciones/SmartSistemaInyecciondeAire600x600.png",
    imagenSecundaria: "/soluciones/inyecciondeairefresco.png",
    beneficios: [
      {
        titulo: "Mejor Calidad del Aire",
        descripcion:
          "Reduce la concentración de contaminantes, alérgenos y patógenos, creando ambientes más saludables.",
      },
      {
        titulo: "Mayor Productividad",
        descripcion: "Un aire más limpio y fresco mejora el rendimiento cognitivo y reduce la fatiga de los ocupantes.",
      },
      {
        titulo: "Eficiencia Energética",
        descripcion: "Sistemas con recuperación de calor que minimizan el impacto energético de la ventilación.",
      },
      {
        titulo: "Control de Humedad",
        descripcion: "Ayuda a mantener niveles óptimos de humedad, previniendo problemas de condensación y moho.",
      },
      {
        titulo: "Reducción de Olores",
        descripcion: "Elimina eficazmente los olores desagradables, mejorando el confort de los ocupantes.",
      },
      {
        titulo: "Cumplimiento Normativo",
        descripcion: "Diseñados para cumplir con los estándares de ventilación ASHRAE y otras normativas locales.",
      },
    ],
    caracteristicas: [
      {
        titulo: "Ventilación Controlada",
        descripcion:
          "Sistemas que regulan automáticamente el caudal de aire según la ocupación y las necesidades del espacio.",
      },
      {
        titulo: "Filtración Avanzada",
        descripcion:
          "Filtros de alta eficiencia que eliminan partículas, polen, bacterias y otros contaminantes del aire exterior.",
      },
      {
        titulo: "Recuperación de Energía",
        descripcion:
          "Intercambiadores de calor que recuperan la energía del aire extraído, reduciendo el consumo energético.",
      },
      {
        titulo: "Monitoreo de CO2",
        descripcion:
          "Sensores que miden constantemente los niveles de CO2 para ajustar la ventilación según sea necesario.",
      },
    ],
    proyectosDestacados: false,
  },
  "bombeo-presion": {
    id: "bombeo-presion",
    titulo: "Sistema de bombeo y presión constante de agua",
    descripcionCorta:
      "Sistemas que garantizan un suministro de agua constante y a la presión adecuada en todo momento.",
    descripcionLarga:
      "Nuestros sistemas de bombeo y presión constante de agua están diseñados para garantizar un suministro confiable y eficiente en todo tipo de edificaciones. Mediante el uso de bombas de velocidad variable, tanques hidroneumáticos y controles avanzados, estos sistemas mantienen la presión de agua óptima en todos los puntos de consumo, independientemente de las variaciones en la demanda o el suministro principal, asegurando el confort de los usuarios y la eficiencia operativa de las instalaciones.",
    icon: Droplets,
    imagenPrincipal: "/soluciones/SmartPresionConstante600x600.png",
    imagenSecundaria: "/soluciones/bombeoypresion.png",
    beneficios: [
      {
        titulo: "Presión Constante",
        descripcion:
          "Mantiene la presión de agua estable en todos los puntos de consumo, independientemente de la demanda.",
      },
      {
        titulo: "Eficiencia Energética",
        descripcion:
          "Bombas de velocidad variable que ajustan su funcionamiento según la demanda, optimizando el consumo energético.",
      },
      {
        titulo: "Mayor Vida Útil",
        descripcion:
          "Reduce el desgaste de las bombas y componentes del sistema, minimizando averías y costos de mantenimiento.",
      },
      {
        titulo: "Operación Silenciosa",
        descripcion:
          "Diseñados para funcionar con niveles mínimos de ruido y vibraciones, mejorando el confort acústico.",
      },
      {
        titulo: "Protección contra Golpe de Ariete",
        descripcion: "Sistemas que previenen los daños causados por cambios bruscos de presión en la red de tuberías.",
      },
      {
        titulo: "Monitoreo Remoto",
        descripcion:
          "Posibilidad de supervisión y control a distancia, facilitando la gestión y el mantenimiento preventivo.",
      },
    ],
    caracteristicas: [
      {
        titulo: "Bombas de Velocidad Variable",
        descripcion:
          "Ajustan automáticamente su velocidad según la demanda, manteniendo la presión constante y ahorrando energía.",
      },
      {
        titulo: "Tanques Hidroneumáticos",
        descripcion:
          "Almacenan agua a presión para satisfacer demandas instantáneas sin necesidad de arrancar las bombas.",
      },
      {
        titulo: "Controladores Inteligentes",
        descripcion:
          "Gestionan el funcionamiento del sistema, alternando bombas y optimizando su operación según la demanda.",
      },
      {
        titulo: "Sistemas de Respaldo",
        descripcion:
          "Configuraciones redundantes que garantizan el suministro de agua incluso en caso de fallo de algún componente.",
      },
    ],
    especificaciones: [
      {
        titulo: "Componentes del Sistema",
        items: [
          "Bombas centrífugas multietapa",
          "Variadores de frecuencia",
          "Tanques hidroneumáticos",
          "Sensores de presión",
          "Válvulas de control",
          "Panel de control con PLC",
          "Sistema de monitoreo remoto",
        ],
      },
      {
        titulo: "Capacidades",
        items: [
          "Caudal: 1 a 100 m³/h",
          "Presión: hasta 10 bar",
          "Potencia: 0.5 a 30 HP",
          "Configuraciones: simplex, dúplex, tríplex",
          "Conexión a BMS vía Modbus, BACnet o LonWorks",
        ],
      },
    ],
    proyectosDestacados: false,
  },
  "reparacion-tarjetas": {
    id: "reparacion-tarjetas",
    titulo: "Reparación de tarjetas electrónicas",
    descripcionCorta:
      "Servicio especializado de reparación de tarjetas electrónicas para equipos industriales y de automatización.",
    descripcionLarga:
      "Nuestro servicio de reparación de tarjetas electrónicas ofrece soluciones rápidas y efectivas para restaurar el funcionamiento de equipos industriales y de automatización. Contamos con técnicos altamente capacitados y laboratorios equipados con tecnología de punta para diagnosticar y reparar todo tipo de tarjetas electrónicas, desde controladores de equipos HVAC hasta sistemas de control industrial, prolongando la vida útil de los equipos y evitando costosos reemplazos.",
    icon: CircuitBoard,
    imagenPrincipal: "/soluciones/tarjetaselectronicas.png",
    imagenSecundaria: "/soluciones/SmartReparaciondeTarjetasElectronicashvac600x600.png",
    beneficios: [
      {
        titulo: "Ahorro de Costos",
        descripcion:
          "La reparación suele costar una fracción del precio de una tarjeta nueva, especialmente en equipos descontinuados.",
      },
      {
        titulo: "Rapidez",
        descripcion:
          "Tiempos de respuesta ágiles que minimizan el tiempo de inactividad de los equipos y los procesos.",
      },
      {
        titulo: "Garantía de Servicio",
        descripcion:
          "Todas nuestras reparaciones incluyen garantía, asegurando la confiabilidad de los componentes reparados.",
      },
      {
        titulo: "Ingeniería Inversa",
        descripcion:
          "Capacidad para recrear tarjetas descontinuadas cuando la reparación no es posible, evitando el reemplazo completo del equipo.",
      },
      {
        titulo: "Diagnóstico Preciso",
        descripcion: "Equipos de prueba avanzados que permiten identificar con exactitud los componentes defectuosos.",
      },
      {
        titulo: "Mejoras y Actualizaciones",
        descripcion:
          "Posibilidad de implementar mejoras en las tarjetas originales para aumentar su fiabilidad y rendimiento.",
      },
    ],
    caracteristicas: [
      {
        titulo: "Diagnóstico Completo",
        descripcion:
          "Análisis exhaustivo de la tarjeta para identificar todos los componentes defectuosos y problemas potenciales.",
      },
      {
        titulo: "Reparación a Nivel Componente",
        descripcion:
          "Sustitución precisa de los componentes dañados, desde resistencias y capacitores hasta microcontroladores.",
      },
      {
        titulo: "Pruebas Rigurosas",
        descripcion:
          "Verificación del funcionamiento correcto mediante simuladores y equipos de prueba especializados.",
      },
      {
        titulo: "Servicio de Emergencia",
        descripcion:
          "Disponibilidad de servicio urgente para situaciones críticas que requieren una solución inmediata.",
      },
    ],
    proyectosDestacados: false,
  },
  "transferencia-automatica": {
    id: "transferencia-automatica",
    titulo: "Transferencia Automática",
    descripcionCorta:
      "Sistemas que garantizan la continuidad del suministro eléctrico mediante la conmutación automática entre fuentes.",
    descripcionLarga:
      "Nuestros sistemas de transferencia automática proporcionan una solución confiable para garantizar la continuidad del suministro eléctrico en instalaciones críticas. Estos sistemas monitorean constantemente la red eléctrica principal y, en caso de fallo, conmutan automáticamente a fuentes alternativas como generadores o UPS, minimizando las interrupciones y protegiendo equipos sensibles. Diseñados con componentes de alta calidad y controles avanzados, nuestros sistemas de transferencia automática son esenciales para hospitales, centros de datos, industrias y cualquier instalación donde la continuidad eléctrica sea crucial.",
    icon: Zap,
    imagenPrincipal: "/soluciones/SmartSistemaTransferenciaElectrica600x600.png",
    imagenSecundaria: "/soluciones/transferenciaautomatica.png",
    beneficios: [
      {
        titulo: "Continuidad Operativa",
        descripcion:
          "Minimiza el tiempo de inactividad durante cortes eléctricos, manteniendo la operación de equipos críticos.",
      },
      {
        titulo: "Protección de Equipos",
        descripcion:
          "Previene daños en equipos sensibles causados por interrupciones abruptas del suministro eléctrico.",
      },
      {
        titulo: "Operación Automática",
        descripcion:
          "Funciona sin intervención humana, garantizando una respuesta inmediata ante cualquier fallo eléctrico.",
      },
      {
        titulo: "Monitoreo Constante",
        descripcion:
          "Supervisa continuamente parámetros como voltaje, frecuencia y fase para detectar anomalías en la red.",
      },
      {
        titulo: "Flexibilidad",
        descripcion:
          "Compatible con diferentes fuentes de respaldo como generadores, UPS o sistemas de energía renovable.",
      },
      {
        titulo: "Integración con BMS",
        descripcion: "Posibilidad de conexión con sistemas de gestión de edificios para un control centralizado.",
      },
    ],
    caracteristicas: [
      {
        titulo: "Conmutación Rápida",
        descripcion: "Tiempos de transferencia optimizados para minimizar la interrupción del suministro eléctrico.",
      },
      {
        titulo: "Protecciones Integradas",
        descripcion: "Sistemas de protección contra sobretensiones, subtensiones, sobrecarga y cortocircuitos.",
      },
      {
        titulo: "Interfaz Intuitiva",
        descripcion:
          "Panel de control con indicadores claros y controles accesibles para monitoreo y operación manual si es necesario.",
      },
      {
        titulo: "Comunicación Avanzada",
        descripcion:
          "Capacidad de comunicación con generadores, UPS y sistemas de monitoreo remoto vía protocolos estándar.",
      },
    ],
    especificaciones: [
      {
        titulo: "Capacidades",
        items: [
          "Corriente nominal: 40A a 3200A",
          "Tensión: 220V, 380V, 440V",
          "Fases: Monofásico y trifásico",
          "Tiempo de transferencia: 0.1 a 10 segundos (configurable)",
          "Modos de operación: Automático, Manual, Prueba",
        ],
      },
      {
        titulo: "Características Técnicas",
        items: [
          "Controlador microprocesado",
          "Interruptores motorizados o contactores",
          "Enclavamiento mecánico y eléctrico",
          "Protección contra retorno de energía",
          "Pantalla LCD para visualización de parámetros",
          "Registro de eventos y alarmas",
          "Comunicación Modbus RTU/TCP",
        ],
      },
    ],
    proyectosDestacados: false,
  },
  "calidad-energia": {
    id: "calidad-energia",
    titulo: "Calidad de Energía",
    descripcionCorta:
      "Soluciones para mejorar la calidad de la energía eléctrica, reduciendo perturbaciones y optimizando el consumo.",
    descripcionLarga:
      "Nuestras soluciones de calidad de energía están diseñadas para identificar, mitigar y prevenir problemas en el suministro eléctrico que pueden afectar el rendimiento y la vida útil de equipos sensibles. Mediante el análisis detallado de la red eléctrica y la implementación de tecnologías como filtros activos, bancos de capacitores y UPS, mejoramos la estabilidad del voltaje, corregimos el factor de potencia, eliminamos armónicos y protegemos contra transitorios, garantizando un suministro eléctrico limpio y confiable para todo tipo de instalaciones.",
    icon: BarChart3,
    imagenPrincipal: "/soluciones/SmartCalidaddeenergia600x600.png",
    imagenSecundaria: "/soluciones/CalidaddeEnergía.png",
    beneficios: [
      {
        titulo: "Mayor Fiabilidad",
        descripcion:
          "Reduce fallos y mal funcionamiento de equipos causados por perturbaciones en el suministro eléctrico.",
      },
      {
        titulo: "Ahorro Energético",
        descripcion:
          "La corrección del factor de potencia y la reducción de armónicos disminuyen el consumo y las pérdidas eléctricas.",
      },
      {
        titulo: "Prolongación de Vida Útil",
        descripcion:
          "Protege los equipos contra sobretensiones, subtensiones y otros fenómenos que aceleran su deterioro.",
      },
      {
        titulo: "Eliminación de Penalizaciones",
        descripcion: "Evita recargos por bajo factor de potencia y exceso de demanda en la factura eléctrica.",
      },
      {
        titulo: "Cumplimiento Normativo",
        descripcion: "Ayuda a cumplir con estándares como IEEE 519 y EN 50160 sobre calidad de energía eléctrica.",
      },
      {
        titulo: "Diagnóstico Continuo",
        descripcion: "Sistemas de monitoreo que permiten identificar problemas potenciales antes de que causen daños.",
      },
    ],
    caracteristicas: [
      {
        titulo: "Análisis de Red",
        descripcion:
          "Estudios detallados que identifican problemas como armónicos, fluctuaciones de voltaje y factor de potencia.",
      },
      {
        titulo: "Filtros Activos",
        descripcion:
          "Eliminan armónicos y compensan reactiva en tiempo real, adaptándose a las condiciones cambiantes de la red.",
      },
      {
        titulo: "Bancos de Capacitores",
        descripcion:
          "Corrigen el factor de potencia, reduciendo pérdidas y optimizando la capacidad de la instalación eléctrica.",
      },
      {
        titulo: "Supresores de Transitorios",
        descripcion:
          "Protegen contra sobretensiones causadas por rayos, maniobras en la red o conmutación de cargas inductivas.",
      },
    ],
    especificaciones: [
      {
        titulo: "Soluciones Disponibles",
        items: [
          "Filtros activos: 30A a 300A por fase",
          "Bancos de capacitores: 25 kVAr a 1000 kVAr",
          "UPS: 1 kVA a 500 kVA",
          "Supresores de transitorios: Clase I, II y III",
          "Analizadores de red fijos y portátiles",
        ],
      },
      {
        titulo: "Servicios Complementarios",
        items: [
          "Auditorías de calidad de energía",
          "Termografía de instalaciones eléctricas",
          "Análisis de armónicos",
          "Estudios de carga",
          "Balanceo de fases",
          "Puesta a tierra y equipotencialidad",
        ],
      },
    ],
    proyectosDestacados: false,
  },
  "sistema-bms": {
    id: "sistema-bms",
    titulo: "Implementación e Integración de Sistema BMS",
    descripcionCorta:
      "Sistemas de gestión de edificios que integran y controlan todos los sistemas para una operación eficiente.",
    descripcionLarga:
      "Un Sistema de Gestión de Edificios (BMS, por sus siglas en inglés) es una plataforma de control centralizado que integra y automatiza los sistemas mecánicos y eléctricos de un edificio, incluyendo ventilación, iluminación, sistemas de energía, seguridad y protección contra incendios. Nuestras soluciones BMS permiten monitorear, controlar y optimizar el rendimiento de todos los sistemas del edificio desde una interfaz única, mejorando la eficiencia energética, reduciendo costos operativos y aumentando el confort de los ocupantes.",
    icon: Cpu,
    imagenPrincipal: "/soluciones/SmartSistemaBMS600x600.png",
    imagenSecundaria: "/soluciones/BMS.png",
    beneficios: [
      {
        titulo: "Control Centralizado",
        descripcion:
          "Gestiona todos los sistemas del edificio desde una única interfaz intuitiva, facilitando la operación y el mantenimiento.",
      },
      {
        titulo: "Eficiencia Energética",
        descripcion:
          "Optimiza el consumo de energía mediante la automatización inteligente, reduciendo costos operativos y la huella de carbono.",
      },
      {
        titulo: "Mantenimiento Predictivo",
        descripcion:
          "Anticipa fallos y programa mantenimientos preventivos gracias a la monitorización constante de todos los sistemas.",
      },
      {
        titulo: "Análisis de Datos",
        descripcion:
          "Obtén informes detallados y análisis de tendencias para tomar decisiones basadas en datos reales de operación.",
      },
      {
        titulo: "Seguridad Mejorada",
        descripcion:
          "Integra sistemas de seguridad y control de acceso para una protección completa del edificio y sus ocupantes.",
      },
      {
        titulo: "Confort Optimizado",
        descripcion:
          "Mantén condiciones ambientales óptimas en todo momento, mejorando la satisfacción y productividad de los ocupantes.",
      },
    ],
    caracteristicas: [
      {
        titulo: "Integración de Sistemas",
        descripcion: "Integración perfecta con sistemas HVAC, iluminación, seguridad, control de acceso y más.",
      },
      {
        titulo: "Interfaz Intuitiva",
        descripcion: "Plataforma de control fácil de usar con visualización gráfica y acceso remoto.",
      },
      {
        titulo: "Automatización Avanzada",
        descripcion: "Programación de escenarios y respuestas automáticas basadas en condiciones predefinidas.",
      },
      {
        titulo: "Monitorización en Tiempo Real",
        descripcion: "Seguimiento continuo de todos los sistemas con alertas instantáneas ante anomalías.",
      },
      {
        titulo: "Escalabilidad",
        descripcion: "Soluciones adaptables que crecen con las necesidades de tu edificio o instalación.",
      },
      {
        titulo: "Informes y Análisis",
        descripcion: "Generación de informes detallados sobre consumo energético, rendimiento y más.",
      },
    ],
    proyectosDestacados: true,
  },
}

export default soluciones
