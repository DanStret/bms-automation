import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Fan, CheckCircle, ArrowRight, AlertTriangle, Gauge } from "lucide-react"

export default function ExtraccionMonoxidoPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-cyan-500 to-teal-500">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                  Sistema Extracción de Monóxido y CO2
                </h1>
                <p className="max-w-[600px] text-white md:text-xl">
                  Sistemas de ventilación que eliminan gases tóxicos en estacionamientos y áreas cerradas, protegiendo
                  la salud de las personas.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/contacto">
                  <Button size="lg" className="bg-white text-cyan-600 hover:bg-gray-100">
                    Solicitar información
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=400&width=400"
                width={400}
                height={400}
                alt="Sistema de Extracción de Monóxido"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=400&width=400"
                width={400}
                height={400}
                alt="Sistema de Extracción en funcionamiento"
                className="rounded-lg object-cover"
              />
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  ¿Qué es un Sistema de Extracción de Monóxido?
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed">
                  Un Sistema de Extracción de Monóxido y CO2 es una solución diseñada para detectar y eliminar gases
                  tóxicos en espacios cerrados como estacionamientos subterráneos, túneles y áreas industriales.
                </p>
                <p className="text-muted-foreground md:text-xl/relaxed">
                  Estos sistemas utilizan sensores avanzados para monitorear constantemente los niveles de monóxido de
                  carbono (CO) y dióxido de carbono (CO2), activando automáticamente los extractores cuando los niveles
                  superan los límites seguros, garantizando así un ambiente saludable para las personas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Danger Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">¿Por qué es importante?</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                El monóxido de carbono es conocido como el "asesino silencioso" debido a sus características.
              </p>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
            <div className="flex flex-col items-start gap-2 rounded-lg border p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-100">
                <AlertTriangle className="h-6 w-6 text-cyan-600" />
              </div>
              <h3 className="text-lg font-bold">Indetectable por los Sentidos</h3>
              <p className="text-sm text-muted-foreground">
                El CO es incoloro, inodoro e insípido, lo que hace imposible su detección sin equipos especializados.
              </p>
            </div>
            <div className="flex flex-col items-start gap-2 rounded-lg border p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-cyan-600"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="m15 9-6 6"></path>
                  <path d="m9 9 6 6"></path>
                </svg>
              </div>
              <h3 className="text-lg font-bold">Altamente Tóxico</h3>
              <p className="text-sm text-muted-foreground">
                Incluso en concentraciones bajas, puede causar dolores de cabeza, mareos, náuseas y, en casos graves, la
                muerte.
              </p>
            </div>
            <div className="flex flex-col items-start gap-2 rounded-lg border p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-cyan-600"
                >
                  <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-bold">Acumulación Rápida</h3>
              <p className="text-sm text-muted-foreground">
                En espacios cerrados como estacionamientos, el CO puede acumularse rápidamente hasta niveles peligrosos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">¿Cómo funciona nuestro sistema?</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                Nuestros sistemas de extracción utilizan tecnología avanzada para garantizar ambientes seguros.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-100">
                    <Gauge className="h-4 w-4 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="font-bold">Detección Continua</h3>
                    <p className="text-sm text-muted-foreground">
                      Sensores de CO y CO2 distribuidos estratégicamente monitorean constantemente los niveles de gases
                      en el ambiente.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 text-cyan-600"
                    >
                      <path d="M12 2v8"></path>
                      <path d="m4.93 10.93 1.41 1.41"></path>
                      <path d="M2 18h2"></path>
                      <path d="M20 18h2"></path>
                      <path d="m19.07 10.93-1.41 1.41"></path>
                      <path d="M22 22H2"></path>
                      <path d="m16 6-4 4-4-4"></path>
                      <path d="M16 18a4 4 0 0 0 0-8H8a4 4 0 0 0 0 8"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold">Activación Automática</h3>
                    <p className="text-sm text-muted-foreground">
                      Cuando los niveles superan los límites seguros, el sistema activa automáticamente los extractores
                      para renovar el aire.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-100">
                    <Fan className="h-4 w-4 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="font-bold">Extracción Eficiente</h3>
                    <p className="text-sm text-muted-foreground">
                      Potentes extractores eliminan rápidamente los gases tóxicos, reemplazándolos con aire fresco del
                      exterior.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 text-cyan-600"
                    >
                      <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"></path>
                      <path d="M12 8v-2"></path>
                      <path d="M12 18v-2"></path>
                      <path d="M8 12H6"></path>
                      <path d="M18 12h-2"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold">Control Inteligente</h3>
                    <p className="text-sm text-muted-foreground">
                      Sistema de control que ajusta la velocidad de los extractores según los niveles detectados,
                      optimizando el consumo energético.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 text-cyan-600"
                    >
                      <path d="M10 2h4"></path>
                      <path d="M12 14v-4"></path>
                      <path d="M4 13a8 8 0 0 1 8-7 8 8 0 0 1 8 7"></path>
                      <path d="M18.09 16.7a8 8 0 0 1-12.18 0"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold">Alertas y Notificaciones</h3>
                    <p className="text-sm text-muted-foreground">
                      Sistema de alarmas visuales y sonoras que alertan sobre niveles peligrosos, además de
                      notificaciones remotas.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 text-cyan-600"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold">Integración con BMS</h3>
                    <p className="text-sm text-muted-foreground">
                      Posibilidad de integración con sistemas de gestión de edificios para un control centralizado y
                      monitoreo remoto.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Beneficios de nuestro Sistema de Extracción
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                Nuestras soluciones ofrecen múltiples ventajas para la seguridad y eficiencia de su edificio.
              </p>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
            <div className="flex flex-col items-start gap-2 rounded-lg border p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-100">
                <CheckCircle className="h-6 w-6 text-cyan-600" />
              </div>
              <h3 className="text-lg font-bold">Protección de la Salud</h3>
              <p className="text-sm text-muted-foreground">
                Garantiza un ambiente seguro para los usuarios, eliminando los riesgos asociados a la inhalación de
                gases tóxicos.
              </p>
            </div>
            <div className="flex flex-col items-start gap-2 rounded-lg border p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-100">
                <CheckCircle className="h-6 w-6 text-cyan-600" />
              </div>
              <h3 className="text-lg font-bold">Cumplimiento Normativo</h3>
              <p className="text-sm text-muted-foreground">
                Nuestros sistemas cumplen con las normativas nacionales e internacionales de seguridad y calidad del
                aire.
              </p>
            </div>
            <div className="flex flex-col items-start gap-2 rounded-lg border p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-100">
                <CheckCircle className="h-6 w-6 text-cyan-600" />
              </div>
              <h3 className="text-lg font-bold">Eficiencia Energética</h3>
              <p className="text-sm text-muted-foreground">
                Sistemas inteligentes que operan solo cuando es necesario, optimizando el consumo de energía y
                reduciendo costos.
              </p>
            </div>
            <div className="flex flex-col items-start gap-2 rounded-lg border p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-100">
                <CheckCircle className="h-6 w-6 text-cyan-600" />
              </div>
              <h3 className="text-lg font-bold">Monitoreo Continuo</h3>
              <p className="text-sm text-muted-foreground">
                Vigilancia constante de los niveles de gases, proporcionando tranquilidad y seguridad las 24 horas.
              </p>
            </div>
            <div className="flex flex-col items-start gap-2 rounded-lg border p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-100">
                <CheckCircle className="h-6 w-6 text-cyan-600" />
              </div>
              <h3 className="text-lg font-bold">Mantenimiento Simplificado</h3>
              <p className="text-sm text-muted-foreground">
                Diseño que facilita las tareas de mantenimiento preventivo y correctivo, garantizando la longevidad del
                sistema.
              </p>
            </div>
            <div className="flex flex-col items-start gap-2 rounded-lg border p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-100">
                <CheckCircle className="h-6 w-6 text-cyan-600" />
              </div>
              <h3 className="text-lg font-bold">Adaptabilidad</h3>
              <p className="text-sm text-muted-foreground">
                Soluciones personalizadas que se adaptan a las características específicas de cada espacio y sus
                necesidades.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-cyan-500">
        <div className="container px-4 md:px-6 text-center">
          <div className="mx-auto max-w-3xl space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
              ¿Necesitas un Sistema de Extracción de Monóxido?
            </h2>
            <p className="text-white md:text-xl/relaxed">
              Contáctanos hoy mismo para una consulta personalizada y descubre cómo nuestras soluciones pueden mejorar
              la seguridad de tu edificio.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center pt-4">
              <Link href="/contacto">
                <Button size="lg" className="bg-white text-cyan-600 hover:bg-gray-100">
                  Solicitar una cotización
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/soluciones">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                  Explorar otras soluciones
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
