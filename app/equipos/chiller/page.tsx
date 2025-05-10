"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, CheckCircle, Thermometer, Zap, BarChart3 } from "lucide-react"

// Imágenes de ejemplo para la galería
const galleryImages = [
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
]

export default function ChillerPage() {
  const [selectedImage, setSelectedImage] = useState(galleryImages[0])

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-cyan-500 to-teal-500">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                  HVAC-R CHILLER
                </h1>
                <p className="max-w-[600px] text-white md:text-xl">
                  Sistemas de enfriamiento de agua para aplicaciones de aire acondicionado y procesos industriales con
                  alta eficiencia energética.
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
                src="/placeholder.svg?height=400&width=400&text=Chiller"
                width={400}
                height={400}
                alt="HVAC-R CHILLER"
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
                Explora nuestros sistemas HVAC-R CHILLER desde diferentes ángulos.
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
              <p className="text-muted-foreground">
                Los chillers son equipos de refrigeración que enfrían el agua para su uso en sistemas de aire
                acondicionado o procesos industriales. Utilizan un ciclo de refrigeración por compresión de vapor para
                transferir el calor del agua a otro medio, generalmente el aire exterior.
              </p>
              <div className="grid grid-cols-5 gap-2">
                {galleryImages.map((image, index) => (
                  <button
                    key={index}
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
                Conoce más sobre nuestros sistemas HVAC-R CHILLER y sus características.
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
                  <h3 className="text-xl font-bold">¿Qué es un CHILLER?</h3>
                  <p>
                    Un chiller es un sistema de refrigeración que enfría un fluido, generalmente agua o una mezcla de
                    agua y glicol, que luego se utiliza para enfriar el aire o equipos en diversas aplicaciones. El
                    término "chiller" proviene del inglés "to chill", que significa enfriar.
                  </p>
                  <p>
                    Estos equipos funcionan mediante un ciclo de refrigeración por compresión de vapor, similar al que
                    se encuentra en los refrigeradores domésticos, pero a una escala mucho mayor. El sistema utiliza un
                    refrigerante que absorbe el calor del agua y lo transfiere al aire exterior a través de un
                    condensador.
                  </p>
                  <p>
                    Los chillers son fundamentales en sistemas de aire acondicionado de gran escala, como los que se
                    encuentran en edificios comerciales, hospitales, hoteles y centros de datos, así como en procesos
                    industriales que requieren enfriamiento preciso.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="caracteristicas" className="p-4 border rounded-md mt-4">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-start gap-4">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-100">
                        <CheckCircle className="h-4 w-4 text-cyan-600" />
                      </div>
                      <div>
                        <h3 className="font-bold">Alta Eficiencia Energética</h3>
                        <p className="text-sm text-muted-foreground">
                          Diseñados para optimizar el consumo de energía, reduciendo costos operativos y minimizando el
                          impacto ambiental.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-100">
                        <CheckCircle className="h-4 w-4 text-cyan-600" />
                      </div>
                      <div>
                        <h3 className="font-bold">Control Preciso de Temperatura</h3>
                        <p className="text-sm text-muted-foreground">
                          Mantienen la temperatura del agua con una precisión de ±0.5°C, ideal para aplicaciones que
                          requieren control estricto.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-100">
                        <CheckCircle className="h-4 w-4 text-cyan-600" />
                      </div>
                      <div>
                        <h3 className="font-bold">Operación Silenciosa</h3>
                        <p className="text-sm text-muted-foreground">
                          Tecnología de reducción de ruido que minimiza las molestias en entornos sensibles al ruido.
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
                        <h3 className="font-bold">Monitoreo Remoto</h3>
                        <p className="text-sm text-muted-foreground">
                          Sistemas de control avanzados que permiten la supervisión y ajuste a distancia, facilitando el
                          mantenimiento preventivo.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-100">
                        <CheckCircle className="h-4 w-4 text-cyan-600" />
                      </div>
                      <div>
                        <h3 className="font-bold">Refrigerantes Ecológicos</h3>
                        <p className="text-sm text-muted-foreground">
                          Utilizan refrigerantes de bajo impacto ambiental, cumpliendo con las normativas
                          internacionales de protección del medio ambiente.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-100">
                        <CheckCircle className="h-4 w-4 text-cyan-600" />
                      </div>
                      <div>
                        <h3 className="font-bold">Diseño Modular</h3>
                        <p className="text-sm text-muted-foreground">
                          Facilita la instalación, el mantenimiento y la expansión futura según las necesidades
                          cambiantes.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="aplicaciones" className="p-4 border rounded-md mt-4">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <Card>
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
                        <h3 className="text-lg font-bold">Edificios Comerciales</h3>
                        <p className="text-sm text-muted-foreground">
                          Oficinas, centros comerciales, hoteles y hospitales que requieren sistemas de climatización
                          centralizados.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
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
                            <rect width="20" height="14" x="2" y="3" rx="2"></rect>
                            <line x1="8" x2="16" y1="21" y2="21"></line>
                            <line x1="12" x2="12" y1="17" y2="21"></line>
                          </svg>
                        </div>
                        <h3 className="text-lg font-bold">Centros de Datos</h3>
                        <p className="text-sm text-muted-foreground">
                          Enfriamiento preciso para servidores y equipos informáticos que generan gran cantidad de
                          calor.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
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
                            <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path>
                            <path d="M17 18h1"></path>
                            <path d="M12 18h1"></path>
                            <path d="M7 18h1"></path>
                          </svg>
                        </div>
                        <h3 className="text-lg font-bold">Industria Farmacéutica</h3>
                        <p className="text-sm text-muted-foreground">
                          Control preciso de temperatura para procesos de fabricación y almacenamiento de medicamentos.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
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
                            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                            <polyline points="14 2 14 8 20 8"></polyline>
                            <path d="M12 18v-6"></path>
                            <path d="M8 18v-1"></path>
                            <path d="M16 18v-3"></path>
                          </svg>
                        </div>
                        <h3 className="text-lg font-bold">Industria Alimentaria</h3>
                        <p className="text-sm text-muted-foreground">
                          Enfriamiento para procesos de producción, almacenamiento y conservación de alimentos.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
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
                            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                            <polyline points="3.29 7 12 12 20.71 7"></polyline>
                            <line x1="12" y1="22" x2="12" y2="12"></line>
                          </svg>
                        </div>
                        <h3 className="text-lg font-bold">Industria Plástica</h3>
                        <p className="text-sm text-muted-foreground">
                          Enfriamiento de moldes y maquinaria en procesos de inyección y extrusión de plásticos.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
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
                            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                          </svg>
                        </div>
                        <h3 className="text-lg font-bold">Sector Hospitalario</h3>
                        <p className="text-sm text-muted-foreground">
                          Climatización de quirófanos, laboratorios y áreas críticas que requieren condiciones
                          ambientales controladas.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="especificaciones" className="p-4 border rounded-md mt-4">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold mb-4">Especificaciones Técnicas</h3>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="rounded-lg border p-4">
                        <h4 className="font-bold flex items-center">
                          <Thermometer className="h-5 w-5 mr-2 text-cyan-600" />
                          Capacidad de Enfriamiento
                        </h4>
                        <ul className="mt-2 space-y-1 text-sm">
                          <li>• Rango: 20 a 500 toneladas de refrigeración</li>
                          <li>• Modulación: 10% a 100% de capacidad</li>
                          <li>• Temperatura de salida de agua: 5°C a 15°C</li>
                        </ul>
                      </div>
                      <div className="rounded-lg border p-4">
                        <h4 className="font-bold flex items-center">
                          <Zap className="h-5 w-5 mr-2 text-cyan-600" />
                          Eficiencia Energética
                        </h4>
                        <ul className="mt-2 space-y-1 text-sm">
                          <li>• COP (Coeficiente de rendimiento): 3.2 a 6.5</li>
                          <li>• EER (Ratio de eficiencia energética): 10.9 a 22.0</li>
                          <li>• IPLV (Valor integrado de carga parcial): 15.0 a 30.0</li>
                        </ul>
                      </div>
                      <div className="rounded-lg border p-4">
                        <h4 className="font-bold flex items-center">
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
                            className="h-5 w-5 mr-2 text-cyan-600"
                          >
                            <path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0"></path>
                            <path d="M12 8v8"></path>
                            <path d="M8 12h8"></path>
                          </svg>
                          Compresores
                        </h4>
                        <ul className="mt-2 space-y-1 text-sm">
                          <li>• Tipos: Scroll, tornillo o centrífugo</li>
                          <li>• Cantidad: 1 a 8 compresores por unidad</li>
                          <li>• Refrigerantes: R-134a, R-410A, R-513A (ecológicos)</li>
                        </ul>
                      </div>
                      <div className="rounded-lg border p-4">
                        <h4 className="font-bold flex items-center">
                          <BarChart3 className="h-5 w-5 mr-2 text-cyan-600" />
                          Control y Monitoreo
                        </h4>
                        <ul className="mt-2 space-y-1 text-sm">
                          <li>• Pantalla táctil de 10" con interfaz gráfica</li>
                          <li>• Conectividad: BACnet, Modbus, LonWorks</li>
                          <li>• Monitoreo remoto vía web o aplicación móvil</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">Dimensiones y Peso</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-muted">
                            <th className="border p-2 text-left">Modelo</th>
                            <th className="border p-2 text-left">Capacidad (TR)</th>
                            <th className="border p-2 text-left">Largo (mm)</th>
                            <th className="border p-2 text-left">Ancho (mm)</th>
                            <th className="border p-2 text-left">Alto (mm)</th>
                            <th className="border p-2 text-left">Peso (kg)</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border p-2">CH-100</td>
                            <td className="border p-2">100</td>
                            <td className="border p-2">3,200</td>
                            <td className="border p-2">1,400</td>
                            <td className="border p-2">2,100</td>
                            <td className="border p-2">3,500</td>
                          </tr>
                          <tr className="bg-muted/50">
                            <td className="border p-2">CH-200</td>
                            <td className="border p-2">200</td>
                            <td className="border p-2">4,100</td>
                            <td className="border p-2">1,800</td>
                            <td className="border p-2">2,300</td>
                            <td className="border p-2">5,200</td>
                          </tr>
                          <tr>
                            <td className="border p-2">CH-300</td>
                            <td className="border p-2">300</td>
                            <td className="border p-2">4,800</td>
                            <td className="border p-2">2,200</td>
                            <td className="border p-2">2,500</td>
                            <td className="border p-2">7,800</td>
                          </tr>
                          <tr className="bg-muted/50">
                            <td className="border p-2">CH-400</td>
                            <td className="border p-2">400</td>
                            <td className="border p-2">5,500</td>
                            <td className="border p-2">2,400</td>
                            <td className="border p-2">2,700</td>
                            <td className="border p-2">9,500</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
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
            {[
              {
                name: "Serie Eco-Chill",
                description: "Chillers de alta eficiencia energética con tecnología inverter",
                capacity: "30 - 120 TR",
                image: "/placeholder.svg?height=200&width=300&text=Eco-Chill",
              },
              {
                name: "Serie Industrial",
                description: "Diseñados para aplicaciones industriales de alta demanda",
                capacity: "100 - 500 TR",
                image: "/placeholder.svg?height=200&width=300&text=Industrial",
              },
              {
                name: "Serie Compact",
                description: "Soluciones compactas para espacios reducidos",
                capacity: "20 - 80 TR",
                image: "/placeholder.svg?height=200&width=300&text=Compact",
              },
              {
                name: "Serie Modular",
                description: "Sistemas modulares escalables para crecimiento futuro",
                capacity: "40 - 400 TR",
                image: "/placeholder.svg?height=200&width=300&text=Modular",
              },
              {
                name: "Serie Silent",
                description: "Chillers de operación ultra silenciosa para zonas sensibles al ruido",
                capacity: "30 - 200 TR",
                image: "/placeholder.svg?height=200&width=300&text=Silent",
              },
              {
                name: "Serie Premium",
                description: "Máxima eficiencia y control avanzado para aplicaciones críticas",
                capacity: "50 - 300 TR",
                image: "/placeholder.svg?height=200&width=300&text=Premium",
              },
            ].map((model, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-video w-full overflow-hidden">
                  <Image
                    src={model.image || "/placeholder.svg"}
                    width={300}
                    height={200}
                    alt={model.name}
                    className="h-full w-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-bold">{model.name}</h3>
                  <p className="text-sm text-muted-foreground">{model.description}</p>
                  <p className="mt-2 text-sm font-medium">Capacidad: {model.capacity}</p>
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
              ¿Necesitas un sistema CHILLER para tu proyecto?
            </h2>
            <p className="text-white md:text-xl/relaxed">
              Contáctanos hoy mismo para una consulta personalizada y descubre cómo nuestros sistemas CHILLER pueden
              mejorar la eficiencia de tu edificio o proceso industrial.
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
