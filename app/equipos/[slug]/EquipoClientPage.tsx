"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, CheckCircle, Thermometer, Zap, BarChart3 } from "lucide-react"
import equipos from "@/data/equipos"

interface EquipoPageProps {
  params: {
    slug: string
  }
}

export default function EquipoClientPage({ params }: EquipoPageProps) {
  const { slug } = params
  const equipo = equipos[slug]

  if (!equipo) {
    notFound()
  }

  const [selectedImage, setSelectedImage] = useState(equipo.galeria[0])

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-cyan-500 to-teal-500">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                  {equipo.titulo}
                </h1>
                <p className="max-w-[600px] text-white md:text-xl">{equipo.descripcionCorta}</p>
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
                src={equipo.imagen || "/placeholder.svg"}
                width={400}
                height={400}
                alt={equipo.titulo}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Galería de Imágenes</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                Explora nuestros sistemas {equipo.titulo} desde diferentes ángulos.
              </p>
            </div>
          </div>
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <div className="flex items-center justify-center">
              <div className="overflow-hidden rounded-lg border">
                <Image
                  src={selectedImage.src || "/placeholder.svg"}
                  width={selectedImage.width}
                  height={selectedImage.height}
                  alt={selectedImage.alt}
                  className="h-full w-full object-cover transition-all hover:scale-105"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <h3 className="text-2xl font-bold">{selectedImage.alt}</h3>
              <p className="text-muted-foreground">{equipo.tabs.descripcion[0]}</p>
              <div className="grid grid-cols-5 gap-2">
                {equipo.galeria.map((image) => (
                  <button
                    key={image.src}
                    className={`overflow-hidden rounded-md border ${
                      selectedImage.src === image.src ? "ring-2 ring-cyan-500" : ""
                    }`}
                    onClick={() => setSelectedImage(image)}
                  >
                    <Image
                      src={image.src || "/placeholder.svg"}
                      width={100}
                      height={100}
                      alt={image.alt}
                      className="h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Descripción General</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                Conoce más sobre nuestros sistemas {equipo.titulo} y sus características.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <Tabs defaultValue="descripcion" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="descripcion">Descripción</TabsTrigger>
                <TabsTrigger value="caracteristicas">Características</TabsTrigger>
                <TabsTrigger value="aplicaciones">Aplicaciones</TabsTrigger>
                <TabsTrigger value="especificaciones">Especificaciones</TabsTrigger>
              </TabsList>
              <TabsContent value="descripcion" className="p-4 border rounded-md mt-4">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">¿Qué es un {equipo.titulo}?</h3>
                  {equipo.tabs.descripcion.map((parrafo,index) => (
                    <p key={index}>{parrafo}</p>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="caracteristicas" className="p-4 border rounded-md mt-4">
                <div className="grid gap-6 sm:grid-cols-2">
                  {equipo.tabs.caracteristicas.map((caracteristica) => (
                    <div key={caracteristica.titulo} className="flex items-start gap-4">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-100">
                        <CheckCircle className="h-4 w-4 text-cyan-600" />
                      </div>
                      <div>
                        <h3 className="font-bold">{caracteristica.titulo}</h3>
                        <p className="text-sm text-muted-foreground">{caracteristica.descripcion}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="aplicaciones" className="p-4 border rounded-md mt-4">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {equipo.tabs.aplicaciones.map((aplicacion) => (
                    <Card key={aplicacion.titulo}>
                      <CardContent className="p-6">
                        <div className="flex flex-col items-center gap-2 text-center">
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
                              <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"></path>
                              <path d="M3 9V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4"></path>
                              <path d="M12 12h.01"></path>
                            </svg>
                          </div>
                          <h3 className="text-lg font-bold">{aplicacion.titulo}</h3>
                          <p className="text-sm text-muted-foreground">{aplicacion.descripcion}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="especificaciones" className="p-4 border rounded-md mt-4">
                <div className="space-y-6">
                  {equipo.tabs.especificaciones.map((especificacion) => (
                    <div key={especificacion.titulo}>
                      <h3 className="text-xl font-bold mb-4">{especificacion.titulo}</h3>
                      <div className="grid gap-4 sm:grid-cols-2">
                        {especificacion.items.map((item) => (
                          <div key={item.subtitulo} className="rounded-lg border p-4">
                            <h4 className="font-bold flex items-center">
                              <BarChart3 className="h-5 w-5 mr-2 text-cyan-600" />
                              {item.subtitulo}
                            </h4>
                            <ul className="mt-2 space-y-1 text-sm">
                              {item.contenido.map((linea) => (
                                <li key={linea}>• {linea}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Models Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Modelos Disponibles</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                Ofrecemos una amplia gama de modelos para adaptarse a sus necesidades específicas.
              </p>
            </div>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {equipo.modelos.map((modelo) => (
              <Card key={modelo.nombre} className="overflow-hidden">
                <div className="aspect-video w-full overflow-hidden">
                  <Image
                    src={modelo.imagen || "/placeholder.svg"}
                    width={300}
                    height={200}
                    alt={modelo.nombre}
                    className="h-full w-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-bold">{modelo.nombre}</h3>
                  <p className="text-sm text-muted-foreground">{modelo.descripcion}</p>
                  <p className="mt-2 text-sm font-medium">Capacidad: {modelo.capacidad}</p>
                  <Link href="/contacto" className="mt-4 inline-flex items-center text-sm font-medium text-cyan-600">
                    Solicitar información
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-cyan-500">
        <div className="container px-4 md:px-6 text-center">
          <div className="mx-auto max-w-3xl space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
              ¿Necesitas un sistema {equipo.titulo} para tu proyecto?
            </h2>
            <p className="text-white md:text-xl/relaxed">
              Contáctanos hoy mismo para una consulta personalizada y descubre cómo nuestros sistemas {equipo.titulo} pueden mejorar la eficiencia de tu edificio o proceso industrial.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center pt-4">
              <Link href="/contacto">
                <Button size="lg" className="bg-white text-cyan-600 hover:bg-gray-100">
                  Solicitar una cotización
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/equipos">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                  Explorar otros equipos
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
