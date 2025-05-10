import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Cpu, Building2, CheckCircle, ArrowRight } from "lucide-react"

export default function SistemaBMSPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-cyan-500 to-teal-500">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                  Sistema BMS
                </h1>
                <p className="max-w-[600px] text-white md:text-xl">
                  Implementación e integración de sistemas de gestión de edificios para un control centralizado y
                  eficiente.
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
                alt="Sistema BMS"
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
                alt="Sistema BMS en acción"
                className="rounded-lg object-cover"
              />
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">¿Qué es un Sistema BMS?</h2>
                <p className="text-muted-foreground md:text-xl/relaxed">
                  Un Sistema de Gestión de Edificios (BMS, por sus siglas en inglés) es una plataforma de control
                  centralizado que integra y automatiza los sistemas mecánicos y eléctricos de un edificio, incluyendo
                  ventilación, iluminación, sistemas de energía, seguridad y protección contra incendios.
                </p>
                <p className="text-muted-foreground md:text-xl/relaxed">
                  Nuestras soluciones BMS permiten monitorear, controlar y optimizar el rendimiento de todos los
                  sistemas del edificio desde una interfaz única, mejorando la eficiencia energética, reduciendo costos
                  operativos y aumentando el confort de los ocupantes.
                </p>
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Beneficios de nuestro Sistema BMS</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                Descubre cómo nuestras soluciones BMS pueden transformar la gestión de tu edificio.
              </p>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
            <div className="flex flex-col items-start gap-2 rounded-lg border p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-100">
                <Cpu className="h-6 w-6 text-cyan-600" />
              </div>
              <h3 className="text-lg font-bold">Control Centralizado</h3>
              <p className="text-sm text-muted-foreground">
                Gestiona todos los sistemas del edificio desde una única interfaz intuitiva, facilitando la operación y
                el mantenimiento.
              </p>
            </div>
            <div className="flex flex-col items-start gap-2 rounded-lg border p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-100">
                <Building2 className="h-6 w-6 text-cyan-600" />
              </div>
              <h3 className="text-lg font-bold">Eficiencia Energética</h3>
              <p className="text-sm text-muted-foreground">
                Optimiza el consumo de energía mediante la automatización inteligente, reduciendo costos operativos y la
                huella de carbono.
              </p>
            </div>
            <div className="flex flex-col items-start gap-2 rounded-lg border p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-100">
                <CheckCircle className="h-6 w-6 text-cyan-600" />
              </div>
              <h3 className="text-lg font-bold">Mantenimiento Predictivo</h3>
              <p className="text-sm text-muted-foreground">
                Anticipa fallos y programa mantenimientos preventivos gracias a la monitorización constante de todos los
                sistemas.
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
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <h3 className="text-lg font-bold">Análisis de Datos</h3>
              <p className="text-sm text-muted-foreground">
                Obtén informes detallados y análisis de tendencias para tomar decisiones basadas en datos reales de
                operación.
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
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                </svg>
              </div>
              <h3 className="text-lg font-bold">Seguridad Mejorada</h3>
              <p className="text-sm text-muted-foreground">
                Integra sistemas de seguridad y control de acceso para una protección completa del edificio y sus
                ocupantes.
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
                  <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"></path>
                  <path d="M10 8a1 1 0 0 1 2 0v4a1 1 0 0 1-2 0z"></path>
                  <path d="M10 16a1 1 0 1 1 2 0 1 1 0 0 1-2 0z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-bold">Confort Optimizado</h3>
              <p className="text-sm text-muted-foreground">
                Mantén condiciones ambientales óptimas en todo momento, mejorando la satisfacción y productividad de los
                ocupantes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Características de nuestro Sistema BMS
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                Nuestras soluciones BMS están diseñadas para adaptarse a las necesidades específicas de cada edificio.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-100">
                    <CheckCircle className="h-4 w-4 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="font-bold">Integración de Sistemas</h3>
                    <p className="text-sm text-muted-foreground">
                      Integración perfecta con sistemas HVAC, iluminación, seguridad, control de acceso y más.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-100">
                    <CheckCircle className="h-4 w-4 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="font-bold">Interfaz Intuitiva</h3>
                    <p className="text-sm text-muted-foreground">
                      Plataforma de control fácil de usar con visualización gráfica y acceso remoto.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-100">
                    <CheckCircle className="h-4 w-4 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="font-bold">Automatización Avanzada</h3>
                    <p className="text-sm text-muted-foreground">
                      Programación de escenarios y respuestas automáticas basadas en condiciones predefinidas.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-100">
                    <CheckCircle className="h-4 w-4 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="font-bold">Monitorización en Tiempo Real</h3>
                    <p className="text-sm text-muted-foreground">
                      Seguimiento continuo de todos los sistemas con alertas instantáneas ante anomalías.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-100">
                    <CheckCircle className="h-4 w-4 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="font-bold">Escalabilidad</h3>
                    <p className="text-sm text-muted-foreground">
                      Soluciones adaptables que crecen con las necesidades de tu edificio o instalación.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-100">
                    <CheckCircle className="h-4 w-4 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="font-bold">Informes y Análisis</h3>
                    <p className="text-sm text-muted-foreground">
                      Generación de informes detallados sobre consumo energético, rendimiento y más.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-cyan-500">
        <div className="container px-4 md:px-6 text-center">
          <div className="mx-auto max-w-3xl space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
              ¿Listo para implementar un Sistema BMS?
            </h2>
            <p className="text-white md:text-xl/relaxed">
              Contáctanos hoy mismo para una consulta personalizada y descubre cómo nuestras soluciones BMS pueden
              transformar tu edificio.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center pt-4">
              <Link href="/contacto">
                <Button size="lg" className="bg-white text-cyan-600 hover:bg-gray-100">
                  Solicitar una demostración
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
