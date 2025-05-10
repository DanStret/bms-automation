"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Building2, Gauge, Thermometer } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { AnimatedCard } from "@/components/animated-card"
import { AnimatedCounter } from "@/components/animated-counter"
import { AnimatedList } from "@/components/animated-list"
import { AnimatedImage } from "@/components/animated-image"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-cyan-500 to-teal-500">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <AnimatedSection delay={0.1}>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                    Soluciones de Automatización Inteligente
                  </h1>
                  <p className="max-w-[600px] text-white md:text-xl">
                    Especialistas en sistemas de automatización, HVAC, sistemas contra incendios y soluciones BMS para
                    edificios inteligentes.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/soluciones">
                    <Button size="lg" className="bg-white text-cyan-600 hover:bg-gray-100">
                      Nuestras Soluciones
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/contacto">
                    <Button size="lg" variant="outline" className="border-white text-black hover:bg-white/20">
                      Contáctanos
                    </Button>
                  </Link>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <div className="flex items-center justify-center">
                <AnimatedImage
                  src="/homeimage.png?height=500&width=500"
                  width={500}
                  height={500}
                  alt="Smart Building Automation"
                  className="rounded-lg"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <AnimatedSection className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-cyan-100 px-3 py-1 text-sm text-cyan-600">
                Nuestras Especialidades
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Soluciones Integrales de Automatización
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Ofrecemos soluciones completas para la automatización de edificios y sistemas industriales, mejorando la
                eficiencia y seguridad.
              </p>
            </div>
          </AnimatedSection>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <AnimatedList className="grid gap-6">
              <div className="flex items-start gap-4">
                <Building2 className="h-8 w-8 text-cyan-500" />
                <div>
                  <h3 className="text-xl font-bold">Sistema BMS</h3>
                  <p className="text-muted-foreground">
                    Implementación e integración de sistemas de gestión de edificios para un control centralizado y
                    eficiente.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Thermometer className="h-8 w-8 text-cyan-500" />
                <div>
                  <h3 className="text-xl font-bold">HVAC Avanzado</h3>
                  <p className="text-muted-foreground">
                    Soluciones de climatización con tecnología de punta: Chiller, VRF, UMAs y Rooftop.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Gauge className="h-8 w-8 text-cyan-500" />
                <div>
                  <h3 className="text-xl font-bold">Sistemas de Seguridad</h3>
                  <p className="text-muted-foreground">
                    Presurización de escaleras, extracción de monóxido y sistemas contra incendios.
                  </p>
                </div>
              </div>
            </AnimatedList>
            <AnimatedSection delay={0.4}>
              <div className="flex items-center justify-center">
                <AnimatedImage
                  src="/fancoilcontrol.png?height=400&width=400"
                  width={400}
                  height={400}
                  alt="Building Management System"
                  className="rounded-lg"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Solutions Preview */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <AnimatedSection className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Nuestras Soluciones</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Descubre nuestra amplia gama de soluciones diseñadas para mejorar la eficiencia, seguridad y confort de
                tu edificio.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedList
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8"
            itemClassName="h-full"
          >
            <AnimatedCard>
              <CardHeader className="pb-2">
                <CardTitle>Presurización de Escaleras</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Sistemas que mantienen las escaleras libres de humo durante incendios, garantizando rutas de
                  evacuación seguras.
                </p>
                <Link
                  href="/soluciones/presurizacion-escaleras"
                  className="mt-4 inline-flex items-center text-sm font-medium text-cyan-600"
                >
                  Más información
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </AnimatedCard>
            <AnimatedCard>
              <CardHeader className="pb-2">
                <CardTitle>Extracción de Monóxido</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Sistemas de ventilación que eliminan gases tóxicos en estacionamientos y áreas cerradas.
                </p>
                <Link
                  href="/soluciones/extraccion-monoxido"
                  className="mt-4 inline-flex items-center text-sm font-medium text-cyan-600"
                >
                  Más información
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </AnimatedCard>
            <AnimatedCard>
              <CardHeader className="pb-2">
                <CardTitle>Aire Acondicionado</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Soluciones de climatización con tecnología Chiller, VRF, UMAs y Rooftop para todo tipo de
                  edificaciones.
                </p>
                <Link
                  href="/soluciones/aire-acondicionado"
                  className="mt-4 inline-flex items-center text-sm font-medium text-cyan-600"
                >
                  Más información
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </AnimatedCard>
            <AnimatedCard>
              <CardHeader className="pb-2">
                <CardTitle>Sistema BMS</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Implementación e integración de sistemas de gestión de edificios para un control centralizado.
                </p>
                <Link
                  href="/soluciones/sistema-bms"
                  className="mt-4 inline-flex items-center text-sm font-medium text-cyan-600"
                >
                  Más información
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </AnimatedCard>
          </AnimatedList>
          <AnimatedSection delay={0.6} className="flex justify-center mt-8">
            <Link href="/soluciones">
              <Button>
                Ver todas las soluciones
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-cyan-600 to-teal-600 text-white">
        <div className="container px-4 md:px-6">
          <AnimatedSection className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Nuestra Experiencia</h2>
              <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Respaldados por años de experiencia y proyectos exitosos
              </p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            <AnimatedSection delay={0.2} className="flex flex-col items-center text-center">
              <div className="text-4xl font-bold mb-2">
                <AnimatedCounter from={0} to={150} formatter={(value) => `+${Math.round(value)}`} />
              </div>
              <p className="text-sm md:text-base">Proyectos Completados</p>
            </AnimatedSection>
            <AnimatedSection delay={0.3} className="flex flex-col items-center text-center">
              <div className="text-4xl font-bold mb-2">
                <AnimatedCounter from={0} to={15} formatter={(value) => `+${Math.round(value)}`} />
              </div>
              <p className="text-sm md:text-base">Años de Experiencia</p>
            </AnimatedSection>
            <AnimatedSection delay={0.4} className="flex flex-col items-center text-center">
              <div className="text-4xl font-bold mb-2">
                <AnimatedCounter from={0} to={50} formatter={(value) => `+${Math.round(value)}`} />
              </div>
              <p className="text-sm md:text-base">Clientes Satisfechos</p>
            </AnimatedSection>
            <AnimatedSection delay={0.5} className="flex flex-col items-center text-center">
              <div className="text-4xl font-bold mb-2">
                <AnimatedCounter from={0} to={24} formatter={(value) => `${Math.round(value)}/7`} />
              </div>
              <p className="text-sm md:text-base">Soporte Técnico</p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Nuestros Clientes</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Empresas que confían en nuestras soluciones de automatización.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-center mt-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="flex items-center justify-center">
                <Image
                  src="/placeholder-logo.svg"
                  width={120}
                  height={60}
                  alt={`Cliente ${i + 1}`}
                  className="opacity-70 hover:opacity-100 transition-opacity"
                />
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
              ¿Listo para automatizar tu edificio?
            </h2>
            <p className="text-white md:text-xl/relaxed">
              Contáctanos hoy mismo para una consulta personalizada y descubre cómo nuestras soluciones pueden
              transformar tu edificio.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center pt-4">
              <Link href="/contacto">
                <Button size="lg" className="bg-white text-cyan-600 hover:bg-gray-100">
                  Contáctanos ahora
                </Button>
              </Link>
              <Link href="/soluciones">
                <Button size="lg" variant="outline" className="border-white text-black hover:bg-white/20">
                  Explorar soluciones
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
