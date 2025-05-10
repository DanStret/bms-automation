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
    src: "/placeholder.svg?height=400&width=600&text=VRF+Unidad+Exterior",
    alt: "VRF Unidad Exterior",
    width: 600,
    height: 400,
  },
  {
    src: "/placeholder.svg?height=400&width=600&text=VRF+Unidad+Interior",
    alt: "VRF Unidad Interior",
    width: 600,
    height: 400,
  },
  {
    src: "/placeholder.svg?height=400&width=600&text=VRF+Instalación",
    alt: "VRF Instalación",
    width: 600,
    height: 400,
  },
  {
    src: "/placeholder.svg?height=400&width=600&text=VRF+Controlador",
    alt: "VRF Controlador",
    width: 600,
    height: 400,
  },
  {
    src: "/placeholder.svg?height=400&width=600&text=VRF+Diagrama+Sistema",
    alt: "VRF Diagrama del Sistema",
    width: 600,
    height: 400,
  },
]

export default function VRFPage() {
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
                  HVAC-R VRF
                </h1>
                <p className="max-w-[600px] text-white md:text-xl">
                  Sistemas de flujo de refrigerante variable que ofrecen control individual de zonas y alta eficiencia
                  energética para edificios modernos.
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
                src="/placeholder.svg?height=400&width=400&text=VRF"
                width={400}
                height={400}
                alt="HVAC-R VRF"
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
                Explora nuestros sistemas HVAC-R VRF desde diferentes ángulos.
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
                Los sistemas VRF (Variable Refrigerant Flow) son una tecnología avanzada de climatización que permite
                controlar de manera independiente la temperatura de múltiples zonas de un edificio. Utilizan una unidad
                exterior conectada a múltiples unidades interiores, ajustando el flujo de refrigerante según las
                necesidades específicas de cada zona.
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
                Conoce más sobre nuestros sistemas HVAC-R VRF y sus características.
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
                  <h3 className="text-xl font-bold">¿Qué es un sistema VRF?</h3>
                  <p>
                    Un sistema VRF (Variable Refrigerant Flow) o Flujo de Refrigerante Variable es una tecnología
                    avanzada de climatización que permite controlar de manera independiente la temperatura de múltiples
                    zonas de un edificio, ofreciendo calefacción y refrigeración simultáneas según sea necesario.
                  </p>
                  <p>
                    Estos sistemas utilizan una unidad exterior conectada a múltiples unidades interiores a través de
                    tuberías de refrigerante. La tecnología VRF ajusta continuamente el flujo de refrigerante a cada
                    unidad interior según la demanda específica de cada zona, lo que resulta en un control preciso de la
                    temperatura y una mayor eficiencia energética.
                  </p>
                  <p>
                    A diferencia de los sistemas tradicionales, los sistemas VRF pueden proporcionar calefacción y
                    refrigeración simultáneas a diferentes zonas del edificio, recuperando el calor de las áreas que
                    requieren refrigeración y transfiriéndolo a las áreas que necesitan calefacción, maximizando así la
                    eficiencia energética.
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
                        <h3 className="font-bold">Control Zonal Independiente</h3>
                        <p className="text-sm text-muted-foreground">
                          Permite controlar la temperatura de cada zona de forma independiente, maximizando el confort
                          de los ocupantes.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-100">
                        <CheckCircle className="h-4 w-4 text-cyan-600" />
                      </div>
                      <div>
                        <h3 className="font-bold">Alta Eficiencia Energética</h3>
                        <p className="text-sm text-muted-foreground">
                          Tecnología inverter que ajusta la capacidad según la demanda, reduciendo significativamente el
                          consumo energético.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-100">
                        <CheckCircle className="h-4 w-4 text-cyan-600" />
                      </div>
                      <div>
                        <h3 className="font-bold">Operación Simultánea</h3>
                        <p className="text-sm text-muted-foreground">
                          Capacidad para proporcionar calefacción y refrigeración simultáneas a diferentes zonas del
                          edificio.
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
                        <h3 className="font-bold">Diseño Flexible</h3>
                        <p className="text-sm text-muted-foreground">
                          Amplia gama de unidades interiores compatibles (cassette, pared, conducto, suelo) para
                          adaptarse a cualquier espacio.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-100">
                        <CheckCircle className="h-4 w-4 text-cyan-600" />
                      </div>
                      <div>
                        <h3 className="font-bold">Control Centralizado</h3>
                        <p className="text-sm text-muted-foreground">
                          Sistemas de control avanzados que permiten la gestión centralizada de todas las unidades desde
                          una interfaz única.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-100">
                        <CheckCircle className="h-4 w-4 text-cyan-600" />
                      </div>
                      <div>
                        <h3 className="font-bold">Instalación Simplificada</h3>
                        <p className="text-sm text-muted-foreground">
                          Requiere menos espacio y componentes que los sistemas tradicionales, facilitando la
                          instalación y reduciendo costos.
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
                        <h3 className="text-lg font-bold">Edificios de Oficinas</h3>
                        <p className="text-sm text-muted-foreground">
                          Ideal para edificios con múltiples oficinas que requieren diferentes temperaturas según la
                          ocupación y orientación.
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
                            <path d="M19 7h.01"></path>
                            <path d="M22 19H2a5 5 0 0 1 5-5h10a5 5 0 0 1 5 5Z"></path>
                            <path d="M12 4h.01"></path>
                            <path d="M5 7h.01"></path>
                            <path d="M4 14h.01"></path>
                            <path d="M20 14h.01"></path>
                            <path d="M12 14h.01"></path>
                          </svg>
                        </div>
                        <h3 className="text-lg font-bold">Hoteles</h3>
                        <p className="text-sm text-muted-foreground">
                          Perfecto para hoteles donde cada habitación puede requerir una temperatura diferente según las
                          preferencias del huésped.
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
                            <path d="M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"></path>
                            <path d="M8 7V5c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2"></path>
                          </svg>
                        </div>
                        <h3 className="text-lg font-bold">Centros Comerciales</h3>
                        <p className="text-sm text-muted-foreground">
                          Solución eficiente para grandes espacios comerciales con diferentes tiendas y áreas comunes.
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
                            <path d="M4 22V4c0-.5.2-1 .6-1.4C5 2.2 5.5 2 6 2h12c.5 0 1 .2 1.4.6.4.4.6.9.6 1.4v18H4Z"></path>
                            <path d="M2 22h20"></path>
                            <path d="M10 6h4"></path>
                            <path d="M10 10h4"></path>
                            <path d="M10 14h4"></path>
                            <path d="M10 18h4"></path>
                          </svg>
                        </div>
                        <h3 className="text-lg font-bold">Edificios Residenciales</h3>
                        <p className="text-sm text-muted-foreground">
                          Excelente para edificios de apartamentos donde cada vivienda requiere control independiente.
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
                            <path d="M19 7h.01"></path>
                            <path d="M22 19H2a5 5 0 0 1 5-5h10a5 5 0 0 1 5 5Z"></path>
                            <path d="M12 4h.01"></path>
                            <path d="M5 7h.01"></path>
                            <path d="M4 14h.01"></path>
                            <path d="M20 14h.01"></path>
                            <path d="M12 14h.01"></path>
                          </svg>
                        </div>
                        <h3 className="text-lg font-bold">Hospitales</h3>
                        <p className="text-sm text-muted-foreground">
                          Adecuado para instalaciones médicas donde diferentes áreas requieren condiciones específicas
                          de temperatura y humedad.
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
                            <path d="M22 9a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2z"></path>
                            <path d="M14 8v1"></path>
                            <path d="M12 8v1"></path>
                            <path d="M10 8v1"></path>
                            <path d="M8 8v1"></path>
                            <path d="M4 13h16"></path>
                            <path d="M22 13h-1"></path>
                            <path d="M4 13h-1"></path>
                          </svg>
                        </div>
                        <h3 className="text-lg font-bold">Restaurantes</h3>
                        <p className="text-sm text-muted-foreground">
                          Ideal para establecimientos con diferentes áreas (cocina, comedor, bar) que requieren
                          condiciones específicas.
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
                          Capacidad
                        </h4>
                        <ul className="mt-2 space-y-1 text-sm">
                          <li>• Unidades exteriores: 5 a 30 HP (14 a 84 kW)</li>
                          <li>• Conexión de hasta 64 unidades interiores por sistema</li>
                          <li>• Longitud de tubería: hasta 1,000 metros en total</li>
                        </ul>
                      </div>
                      <div className="rounded-lg border p-4">
                        <h4 className="font-bold flex items-center">
                          <Zap className="h-5 w-5 mr-2 text-cyan-600" />
                          Eficiencia Energética
                        </h4>
                        <ul className="mt-2 space-y-1 text-sm">
                          <li>• COP (Calefacción): 4.0 a 5.2</li>
                          <li>• EER (Refrigeración): 3.8 a 5.0</li>
                          <li>• SEER: Hasta 28.0</li>
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
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                          </svg>
                          Refrigerante
                        </h4>
                        <ul className="mt-2 space-y-1 text-sm">
                          <li>• Tipo: R-410A (ecológico)</li>
                          <li>• Carga variable según la demanda</li>
                          <li>• Sistema de detección de fugas integrado</li>
                        </ul>
                      </div>
                      <div className="rounded-lg border p-4">
                        <h4 className="font-bold flex items-center">
                          <BarChart3 className="h-5 w-5 mr-2 text-cyan-600" />
                          Control y Monitoreo
                        </h4>
                        <ul className="mt-2 space-y-1 text-sm">
                          <li>• Control centralizado con pantalla táctil</li>
                          <li>• Conectividad BACnet, LonWorks y Modbus</li>
                          <li>• Control remoto vía aplicación móvil o web</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">Unidades Interiores Compatibles</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-muted">
                            <th className="border p-2 text-left">Tipo</th>
                            <th className="border p-2 text-left">Capacidad (kW)</th>
                            <th className="border p-2 text-left">Nivel Sonoro (dB)</th>
                            <th className="border p-2 text-left">Aplicación Recomendada</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border p-2">Cassette de 4 vías</td>
                            <td className="border p-2">2.2 - 14.0</td>
                            <td className="border p-2">28 - 36</td>
                            <td className="border p-2">Oficinas, tiendas, restaurantes</td>
                          </tr>
                          <tr className="bg-muted/50">
                            <td className="border p-2">Conducto de alta presión</td>
                            <td className="border p-2">5.6 - 28.0</td>
                            <td className="border p-2">30 - 42</td>
                            <td className="border p-2">Grandes espacios, salas de conferencias</td>
                          </tr>
                          <tr>
                            <td className="border p-2">Pared</td>
                            <td className="border p-2">1.7 - 7.1</td>
                            <td className="border p-2">25 - 34</td>
                            <td className="border p-2">Habitaciones de hotel, oficinas pequeñas</td>
                          </tr>
                          <tr className="bg-muted/50">
                            <td className="border p-2">Suelo / Techo</td>
                            <td className="border p-2">3.6 - 14.0</td>
                            <td className="border p-2">32 - 40</td>
                            <td className="border p-2">Espacios con techos bajos, vitrinas</td>
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
                name: "Serie Mini VRF",
                description: "Soluciones compactas para espacios pequeños y medianos",
                capacity: "12 - 38 kW",
                image: "/placeholder.svg?height=200&width=300&text=Mini+VRF",
              },
              {
                name: "Serie Estándar",
                description: "Equilibrio perfecto entre rendimiento y eficiencia",
                capacity: "22 - 135 kW",
                image: "/placeholder.svg?height=200&width=300&text=Estándar+VRF",
              },
              {
                name: "Serie High Efficiency",
                description: "Máxima eficiencia energética para proyectos sostenibles",
                capacity: "22 - 168 kW",
                image: "/placeholder.svg?height=200&width=300&text=High+Efficiency",
              },
              {
                name: "Serie Heat Recovery",
                description: "Recuperación de calor para calefacción y refrigeración simultáneas",
                capacity: "22 - 168 kW",
                image: "/placeholder.svg?height=200&width=300&text=Heat+Recovery",
              },
              {
                name: "Serie Water-Cooled",
                description: "Sistemas refrigerados por agua para aplicaciones especiales",
                capacity: "28 - 224 kW",
                image: "/placeholder.svg?height=200&width=300&text=Water-Cooled",
              },
              {
                name: "Serie Individual",
                description: "Unidades individuales para aplicaciones residenciales y pequeños comercios",
                capacity: "5 - 14 kW",
                image: "/placeholder.svg?height=200&width=300&text=Individual",
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
              ¿Necesitas un sistema VRF para tu proyecto?
            </h2>
            <p className="text-white md:text-xl/relaxed">
              Contáctanos hoy mismo para una consulta personalizada y descubre cómo nuestros sistemas VRF pueden mejorar
              la eficiencia y el confort de tu edificio.
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
