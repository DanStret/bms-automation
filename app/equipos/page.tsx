import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Thermometer, Fan, Cpu, Navigation, Smartphone } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { AnimatedCard } from "@/components/animated-card"
import { AnimatedList } from "@/components/animated-list"
import { AnimatedImage } from "@/components/animated-image"

const equipments = [
  {
    title: "HVAC-R CHILLER",
    description: "Sistemas de enfriamiento de agua para aplicaciones de aire acondicionado y procesos industriales.",
    icon: Thermometer,
    href: "/equipos/chiller",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "HVAC-R VRF",
    description:
      "Sistemas de flujo de refrigerante variable que ofrecen control individual de zonas y alta eficiencia energética.",
    icon: Thermometer,
    href: "/equipos/vrf",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "HVAC-R ROOFTOP",
    description:
      "Unidades compactas de aire acondicionado diseñadas para instalación en azoteas, ideales para grandes espacios.",
    icon: Thermometer,
    href: "/equipos/rooftop",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "HVAC-R UMA",
    description: "Unidades manejadoras de aire que procesan y distribuyen aire acondicionado a través de ductos.",
    icon: Fan,
    href: "/equipos/uma",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "VARIADORES VFD",
    description: "Dispositivos que controlan la velocidad de motores eléctricos para optimizar el consumo energético.",
    icon: Cpu,
    href: "/equipos/variadores",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "GPS Personas",
    description: "Sistemas de localización y seguimiento para garantizar la seguridad de personas en tiempo real.",
    icon: Navigation,
    href: "/equipos/gps-personas",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "GPS Mascotas",
    description: "Dispositivos de seguimiento diseñados específicamente para monitorear la ubicación de mascotas.",
    icon: Smartphone,
    href: "/equipos/gps-mascotas",
    image: "/placeholder.svg?height=200&width=300",
  },
]

export default function EquiposPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-cyan-500 to-teal-500">
        <div className="container px-4 md:px-6">
          <AnimatedSection className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                Nuestros Equipos
              </h1>
              <p className="max-w-[600px] text-white md:text-xl">
                Ofrecemos equipos de alta calidad y tecnología avanzada para sistemas de climatización, automatización y
                seguridad.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Equipment Grid */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <AnimatedList className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3" itemClassName="h-full">
            {equipments.map((equipment, index) => {
              const Icon = equipment.icon
              return (
                <AnimatedCard key={index} className="h-full">
                  <div className="aspect-video w-full overflow-hidden">
                    <AnimatedImage
                      src={equipment.image || "/placeholder.svg"}
                      width={300}
                      height={200}
                      alt={equipment.title}
                      className="h-full w-full"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Icon className="h-6 w-6 text-cyan-500" />
                      <CardTitle>{equipment.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{equipment.description}</p>
                    <Link
                      href={equipment.href}
                      className="mt-4 inline-flex items-center text-sm font-medium text-cyan-600"
                    >
                      Ver detalles
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
        <div className="container px-4 md:px-6 text-center">
          <AnimatedSection className="mx-auto max-w-3xl space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              ¿Necesitas asesoría sobre nuestros equipos?
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed">
              Nuestro equipo técnico está disponible para ayudarte a seleccionar los equipos más adecuados para tus
              necesidades específicas.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center pt-4">
              <Link href="/contacto">
                <Button size="lg">
                  Contactar a un especialista
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/soluciones">
                <Button size="lg" variant="outline">
                  Ver nuestras soluciones
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
