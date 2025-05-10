import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ArrowRight,
  Building2,
  Fan,
  Flame,
  Thermometer,
  Cpu,
  Zap,
  Droplets,
  CircuitBoard,
  RefreshCw,
  BarChart3,
} from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { AnimatedCard } from "@/components/animated-card"
import { AnimatedList } from "@/components/animated-list"
import { AnimatedImage } from "@/components/animated-image"

const solutions = [
  {
    title: "Sistema Presurización de Escaleras",
    description:
      "Sistemas que mantienen las escaleras libres de humo durante incendios, garantizando rutas de evacuación seguras.",
    icon: Building2,
    href: "/soluciones/presurizacion-escaleras",
  },
  {
    title: "Sistema Extracción de Monóxido y CO2",
    description: "Sistemas de ventilación que eliminan gases tóxicos en estacionamientos y áreas cerradas.",
    icon: Fan,
    href: "/soluciones/extraccion-monoxido",
  },
  {
    title: "Aire Acondicionado",
    description:
      "Soluciones de climatización con tecnología Chiller, VRF, UMAs y Rooftop para todo tipo de edificaciones.",
    icon: Thermometer,
    href: "/soluciones/aire-acondicionado",
  },
  {
    title: "Sistema contra incendio",
    description: "Sistemas de detección y extinción de incendios para proteger vidas y propiedades.",
    icon: Flame,
    href: "/soluciones/sistema-contra-incendio",
  },
  {
    title: "Sistema de inyección y renovación de aire fresco",
    description:
      "Soluciones para mantener la calidad del aire interior mediante la renovación constante de aire fresco.",
    icon: RefreshCw,
    href: "/soluciones/inyeccion-aire",
  },
  {
    title: "Sistema de bombeo y presión constante de agua",
    description: "Sistemas que garantizan un suministro de agua constante y a la presión adecuada en todo momento.",
    icon: Droplets,
    href: "/soluciones/bombeo-presion",
  },
  {
    title: "Reparación de tarjetas electrónicas",
    description:
      "Servicio especializado de reparación de tarjetas electrónicas para equipos industriales y de automatización.",
    icon: CircuitBoard,
    href: "/soluciones/reparacion-tarjetas",
  },
  {
    title: "Transferencia Automática",
    description:
      "Sistemas que garantizan la continuidad del suministro eléctrico mediante la conmutación automática entre fuentes.",
    icon: Zap,
    href: "/soluciones/transferencia-automatica",
  },
  {
    title: "Calidad de Energía",
    description:
      "Soluciones para mejorar la calidad de la energía eléctrica, reduciendo perturbaciones y optimizando el consumo.",
    icon: BarChart3,
    href: "/soluciones/calidad-energia",
  },
  {
    title: "Implementación e Integración de Sistema BMS",
    description:
      "Sistemas de gestión de edificios que integran y controlan todos los sistemas para una operación eficiente.",
    icon: Cpu,
    href: "/soluciones/sistema-bms",
  },
]

export default function SolucionesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-cyan-500 to-teal-500">
        <div className="container px-4 md:px-6">
          <AnimatedSection className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                Nuestras Soluciones
              </h1>
              <p className="max-w-[600px] text-white md:text-xl">
                Ofrecemos una amplia gama de soluciones de automatización para edificios e industrias, diseñadas para
                mejorar la eficiencia, seguridad y confort.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <AnimatedList className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" itemClassName="h-full">
            {solutions.map((solution, index) => {
              const Icon = solution.icon
              return (
                <AnimatedCard key={index} className="h-full">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Icon className="h-6 w-6 text-cyan-500" />
                      <CardTitle>{solution.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{solution.description}</p>
                    <Link
                      href={solution.href}
                      className="mt-4 inline-flex items-center text-sm font-medium text-cyan-600"
                    >
                      Más información
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardContent>
                </AnimatedCard>
              )
            })}
          </AnimatedList>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <AnimatedSection delay={0.2}>
              <div className="flex items-center justify-center">
                <AnimatedImage
                  src="/pensando.png?height=400&width=400"
                  width={400}
                  height={400}
                  alt="Soluciones de automatización"
                  className="rounded-lg"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.4}>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                    ¿No estás seguro de qué solución necesitas?
                  </h2>
                  <p className="text-muted-foreground md:text-xl/relaxed">
                    Nuestro equipo de expertos puede ayudarte a identificar las soluciones más adecuadas para tus
                    necesidades específicas. Contáctanos para una consulta personalizada.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/contacto">
                    <Button size="lg">
                      Solicitar consulta
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  )
}
