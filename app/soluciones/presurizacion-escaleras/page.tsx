import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Fan, CheckCircle, ArrowRight, Shield } from "lucide-react"

export default function PresurizacionEscalerasPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-cyan-500 to-teal-500">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                  Sistema Presurización de Escaleras
                </h1>
                <p className="max-w-[600px] text-white md:text-xl">
                  Sistemas que mantienen las escaleras libres de humo durante incendios, garantizando rutas de
                  evacuación seguras para los ocupantes del edificio.
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
                alt="Sistema de Presurización de Escaleras"
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
                alt="Sistema de Presurización en funcionamiento"
                className="rounded-lg object-cover"
              />
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  ¿Qué es un Sistema de Presurización de Escaleras?
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed">
                  Un Sistema de Presurización de Escaleras es una solución de seguridad contra incendios diseñada para
                  mantener las escaleras y rutas de evacuación libres de humo durante un incendio.
                </p>
                <p className="text-muted-foreground md:text-xl/relaxed">
                  El sistema funciona creando una presión positiva en las cajas de escaleras, evitando que el humo
                  ingrese a estos espacios críticos y permitiendo que los ocupantes del edificio puedan evacuar de
                  manera segura, incluso cuando otras áreas están comprometidas por el humo y el fuego.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">¿Cómo funciona?</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                Nuestros sistemas de presurización utilizan tecnología avanzada para garantizar la seguridad de los
                ocupantes durante una emergencia.
              </p>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
            <div className="flex flex-col items-start gap-2 rounded-lg border p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-100">
                <Fan className="h-6 w-6 text-cyan-600" />
              </div>
              <h3 className="text-lg font-bold">Ventiladores de Presurización</h3>
              <p className="text-sm text-muted-foreground">
                Potentes ventiladores inyectan aire fresco en las cajas de escaleras, creando una presión positiva que
                impide la entrada de humo.
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
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
              </div>
              <h3 className="text-lg font-bold">Sensores de Presión Diferencial</h3>
              <p className="text-sm text-muted-foreground">
                Monitorean constantemente la diferencia de presión entre las escaleras y las áreas adyacentes, ajustando
                automáticamente el sistema.
              </p>
            </div>
            <div className="flex flex-col items-start gap-2 rounded-lg border p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-100">
                <Shield className="h-6 w-6 text-cyan-600" />
              </div>
              <h3 className="text-lg font-bold">Activación Automática</h3>
              <p className="text-sm text-muted-foreground">
                El sistema se activa automáticamente al detectar una alarma de incendio, garantizando una respuesta
                inmediata en caso de emergencia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Beneficios de nuestro Sistema de Presurización
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                Nuestras soluciones ofrecen múltiples ventajas para la seguridad de su edificio.
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
                    <h3 className="font-bold">Mayor Seguridad para los Ocupantes</h3>
                    <p className="text-sm text-muted-foreground">
                      Garantiza rutas de evacuación libres de humo, reduciendo significativamente el riesgo de
                      intoxicación durante un incendio.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-100">
                    <CheckCircle className="h-4 w-4 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="font-bold">Cumplimiento Normativo</h3>
                    <p className="text-sm text-muted-foreground">
                      Nuestros sistemas cumplen con las normativas nacionales e internacionales de seguridad contra
                      incendios.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-100">
                    <CheckCircle className="h-4 w-4 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="font-bold">Facilita la Labor de los Bomberos</h3>
                    <p className="text-sm text-muted-foreground">
                      Proporciona a los equipos de emergencia acceso seguro al edificio para realizar operaciones de
                      rescate y extinción.
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
                    <h3 className="font-bold">Monitoreo Constante</h3>
                    <p className="text-sm text-muted-foreground">
                      Sistemas equipados con monitoreo continuo que garantizan su funcionamiento óptimo en todo momento.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-100">
                    <CheckCircle className="h-4 w-4 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="font-bold">Integración con Sistemas BMS</h3>
                    <p className="text-sm text-muted-foreground">
                      Posibilidad de integración con sistemas de gestión de edificios para un control centralizado.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-100">
                    <CheckCircle className="h-4 w-4 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="font-bold">Mantenimiento Simplificado</h3>
                    <p className="text-sm text-muted-foreground">
                      Diseño que facilita las tareas de mantenimiento preventivo y correctivo, garantizando la
                      longevidad del sistema.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Especificaciones Técnicas</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                Nuestros sistemas de presurización están diseñados con los más altos estándares de calidad y tecnología.
              </p>
            </div>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="p-6">
                <h3 className="text-lg font-bold">Componentes del Sistema</h3>
                <ul className="mt-4 grid gap-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-cyan-600" />
                    <span>Ventiladores centrífugos de alta presión</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-cyan-600" />
                    <span>Sensores de presión diferencial</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-cyan-600" />
                    <span>Panel de control con interfaz intuitiva</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-cyan-600" />
                    <span>Sistema de respaldo de energía</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-cyan-600" />
                    <span>Compuertas motorizadas para control de flujo</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="p-6">
                <h3 className="text-lg font-bold">Normativas y Certificaciones</h3>
                <ul className="mt-4 grid gap-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-cyan-600" />
                    <span>NFPA 92: Sistemas de Control de Humo</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-cyan-600" />
                    <span>EN 12101: Sistemas para el control de humo y calor</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-cyan-600" />
                    <span>Reglamento Nacional de Edificaciones (RNE)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-cyan-600" />
                    <span>ISO 21927: Dispositivos para control de humo y calor</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-cyan-600" />
                    <span>Certificación UL para componentes críticos</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Proyectos Destacados</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                Algunos de nuestros proyectos más relevantes en sistemas de presurización de escaleras.
              </p>
            </div>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="overflow-hidden rounded-lg border">
                <div className="aspect-video w-full overflow-hidden">
                  <Image
                    src={`/placeholder.svg?height=300&width=400&text=Proyecto+${i}`}
                    width={400}
                    height={300}
                    alt={`Proyecto ${i}`}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold">Edificio Corporativo {i}</h3>
                  <p className="text-sm text-muted-foreground">
                    Sistema de presurización para 12 pisos con integración BMS y monitoreo remoto.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-cyan-500">
        <div className="container px-4 md:px-6 text-center">
          <div className="mx-auto max-w-3xl space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
              ¿Necesitas un Sistema de Presurización para tu Edificio?
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
