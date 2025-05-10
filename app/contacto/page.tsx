"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react"

export default function ContactoPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    empresa: "",
    mensaje: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el formulario
    console.log("Formulario enviado:", formData)
    setFormSubmitted(true)
    // Resetear el formulario después de enviar
    setFormData({
      nombre: "",
      email: "",
      telefono: "",
      empresa: "",
      mensaje: "",
    })
    // Mostrar el mensaje de éxito por 5 segundos
    setTimeout(() => {
      setFormSubmitted(false)
    }, 5000)
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-cyan-500 to-teal-500">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                Contáctanos
              </h1>
              <p className="max-w-[600px] text-white md:text-xl">
                Estamos aquí para ayudarte. Ponte en contacto con nuestro equipo para obtener más información sobre
                nuestras soluciones y servicios.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ponte en contacto con nosotros</h2>
                <p className="text-muted-foreground md:text-xl/relaxed">
                  Completa el formulario y nos pondremos en contacto contigo lo antes posible.
                </p>
              </div>
              <div className="grid gap-4">
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-cyan-500" />
                  <div>
                    <h3 className="font-bold">Email</h3>
                    <p className="text-sm text-muted-foreground">trysperu7@gmail.com</p>
                    <p className="text-sm text-muted-foreground">gpsventastrys@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-cyan-500" />
                  <div>
                    <h3 className="font-bold">Sitio Web</h3>
                    <p className="text-sm text-muted-foreground">www.smart-general.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-cyan-500" />
                  <div>
                    <h3 className="font-bold">Redes Sociales</h3>
                    <p className="text-sm text-muted-foreground">Facebook: TRYS PERU</p>
                    <p className="text-sm text-muted-foreground">YouTube: Canal Oficial</p>
                  </div>
                </div>
              </div>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Formulario de Contacto</CardTitle>
                <CardDescription>Completa el formulario para solicitar información o una cotización.</CardDescription>
              </CardHeader>
              <CardContent>
                {formSubmitted ? (
                  <div className="flex flex-col items-center justify-center space-y-2 py-6 text-center">
                    <CheckCircle className="h-12 w-12 text-green-500" />
                    <h3 className="text-xl font-bold">¡Mensaje enviado!</h3>
                    <p className="text-muted-foreground">
                      Gracias por contactarnos. Nos pondremos en contacto contigo lo antes posible.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="grid gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="nombre">Nombre completo</Label>
                      <Input
                        id="nombre"
                        name="nombre"
                        placeholder="Tu nombre"
                        required
                        value={formData.nombre}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="email">Correo electrónico</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="tu@email.com"
                        required
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="telefono">Teléfono</Label>
                      <Input
                        id="telefono"
                        name="telefono"
                        placeholder="Tu número de teléfono"
                        value={formData.telefono}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="empresa">Empresa</Label>
                      <Input
                        id="empresa"
                        name="empresa"
                        placeholder="Nombre de tu empresa"
                        value={formData.empresa}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="mensaje">Mensaje</Label>
                      <Textarea
                        id="mensaje"
                        name="mensaje"
                        placeholder="¿En qué podemos ayudarte?"
                        required
                        className="min-h-[120px]"
                        value={formData.mensaje}
                        onChange={handleChange}
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Enviar mensaje
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Nuestra Ubicación</h2>
              <p className="text-muted-foreground md:text-xl/relaxed">
                Visítanos en nuestras oficinas para conocer más sobre nuestras soluciones.
              </p>
            </div>
          </div>
          <div className="mt-8 overflow-hidden rounded-lg border">
            <div className="aspect-[16/9] w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1200.804104598836!2d-77.04764452434543!3d-11.93523738526764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x45467dafd41ffeeb%3A0x14d29167e88e0ee0!2sSmart%20Automation%20SAC!5e1!3m2!1ses-419!2spe!4v1746901575772!5m2!1ses-419!2spe"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                style={{ border: 0 }}
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full"
              ></iframe>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}
