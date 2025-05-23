import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight } from "lucide-react"
import soluciones from "@/data/soluciones"

interface SolucionPageProps {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  return Object.keys(soluciones).map((slug) => ({
    slug,
  }))
}

export default function SolucionPage({ params }: SolucionPageProps) {
  const { slug } = params
  const solucion = soluciones[slug]

  if (!solucion) {
    notFound()
  }

  const {
    titulo,
    descripcionCorta,
    descripcionLarga,
    icon: Icon,
    imagenPrincipal,
    imagenSecundaria,
    beneficios,
    caracteristicas,
    especificaciones,
    proyectosDestacados,
  } = solucion

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-cyan-500 to-teal-500">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                  {titulo}
                </h1>
                <p className="max-w-[600px] text-white md:text-xl">{descripcionCorta}</p>
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
                src={imagenPrincipal || "/placeholder.svg"}
                width={400}
                height={400}
                alt={titulo}
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
                src={imagenSecundaria || "/placeholder.svg"}
                width={400}
                height={400}
                alt={`${titulo} en funcionamiento`}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">¿Qué es un {titulo}?</h2>
                <p className="text-muted-foreground md:text-xl/relaxed">{descripcionLarga}</p>
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
                Nuestros sistemas utilizan tecnología avanzada para garantizar el mejor rendimiento.
              </p>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
            {caracteristicas.map((caracteristica, index) => {
              return (
                <div key={index} className="flex flex-col items-start gap-2 rounded-lg border p-6 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-100">
                    {index === 0 ? (
                      <Icon className="h-6 w-6 text-cyan-600" />
                    ) : (
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
                    )}
                  </div>
                  <h3 className="text-lg font-bold">{caracteristica.titulo}</h3>
                  <p className="text-sm text-muted-foreground">{caracteristica.descripcion}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Beneficios de nuestro {titulo}</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                Nuestras soluciones ofrecen múltiples ventajas para su edificio o instalación.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="flex flex-col gap-4">
                {beneficios.slice(0, Math.ceil(beneficios.length / 2)).map((beneficio, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-100">
                      <CheckCircle className="h-4 w-4 text-cyan-600" />
                    </div>
                    <div>
                      <h3 className="font-bold">{beneficio.titulo}</h3>
                      <p className="text-sm text-muted-foreground">{beneficio.descripcion}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-4">
                {beneficios.slice(Math.ceil(beneficios.length / 2)).map((beneficio, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-100">
                      <CheckCircle className="h-4 w-4 text-cyan-600" />
                    </div>
                    <div>
                      <h3 className="font-bold">{beneficio.titulo}</h3>
                      <p className="text-sm text-muted-foreground">{beneficio.descripcion}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      {especificaciones && (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Especificaciones Técnicas</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Nuestros sistemas están diseñados con los más altos estándares de calidad y tecnología.
                </p>
              </div>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {especificaciones.map((especificacion, index) => (
                <div key={index} className="rounded-lg border bg-card text-card-foreground shadow-sm">
                  <div className="p-6">
                    <h3 className="text-lg font-bold">{especificacion.titulo}</h3>
                    <ul className="mt-4 grid gap-2">
                      {especificacion.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-cyan-600" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Projects Section */}
      {proyectosDestacados && (
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Proyectos Destacados</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Algunos de nuestros proyectos más relevantes en {titulo.toLowerCase()}.
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
                      Implementación de {titulo.toLowerCase()} con integración BMS y monitoreo remoto.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-cyan-500">
        <div className="container px-4 md:px-6 text-center">
          <div className="mx-auto max-w-3xl space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
              ¿Necesitas un {titulo} para tu edificio?
            </h2>
            <p className="text-white md:text-xl/relaxed">
              Contáctanos hoy mismo para una consulta personalizada y descubre cómo nuestras soluciones pueden mejorar
              la eficiencia y seguridad de tu edificio.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center pt-4">
              <Link href="/contacto">
                <Button size="lg" className="bg-white text-cyan-600 hover:bg-gray-100">
                  Solicitar una cotización
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/soluciones">
                <Button size="lg" variant="outline" className="border-white text-black hover:bg-white/20">
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
