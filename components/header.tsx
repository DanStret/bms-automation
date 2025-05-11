"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation" // Importa usePathname
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { AnimatedLogo } from "@/components/animated-logo"

const menuItems = [
  { name: "INICIO", href: "/" },
  {
    name: "SOLUCIONES",
    href: "/soluciones",
    submenu: [
      { name: "Sistema Presurización de Escaleras", href: "/soluciones/presurizacion-escaleras" },
      { name: "Sistema Extracción de Monóxido y CO2", href: "/soluciones/extraccion-monoxido" },
      { name: "Aire Acondicionado", href: "/soluciones/aire-acondicionado" },
      { name: "Sistema contra incendio", href: "/soluciones/sistema-contra-incendio" },
      { name: "Sistema de inyección y renovación de aire fresco", href: "/soluciones/inyeccion-aire" },
      { name: "Sistema de bombeo y presión constante de agua", href: "/soluciones/bombeo-presion" },
      { name: "Reparación de tarjetas electrónicas", href: "/soluciones/reparacion-tarjetas" },
      { name: "Transferencia Automática", href: "/soluciones/transferencia-automatica" },
      { name: "Calidad de Energía", href: "/soluciones/calidad-energia" },
      { name: "Implementación e Integración de Sistema BMS", href: "/soluciones/sistema-bms" },
    ],
  },
  {
    name: "EQUIPOS",
    href: "/equipos",
    submenu: [
      { name: "HVAC-R CHILLER", href: "/equipos/chiller" },
      { name: "HVAC-R VRF", href: "/equipos/vrf" },
      { name: "HVAC-R ROOFTOP", href: "/equipos/rooftop" },
      { name: "HVAC-R UMA", href: "/equipos/uma" },
      { name: "VARIADORES VFD", href: "/equipos/variadores" },
      { name: "GPS Personas", href: "/equipos/gps-personas" },
      { name: "GPS Mascotas", href: "/equipos/gps-mascotas" },
    ],
  },
  { name: "CONTACTO", href: "/contacto" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)
  const pathname = usePathname() // Obtiene la ruta actual

  const toggleSubmenu = (name: string) => {
    setActiveSubmenu(activeSubmenu === name ? null : name)
  }

  // Función para verificar si un enlace está activo
  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === href
    }
    return pathname.startsWith(href)
  }

  // Función para verificar si un elemento del submenú está activo
  const isSubItemActive = (href: string) => {
    return pathname === href
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <AnimatedLogo src="/logo.png" alt="SMART AUTOMATION" width={40} height={40} className="h-10 w-auto" />
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="font-bold sm:inline-block"
            >
              SMART AUTOMATION
            </motion.span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.name}
              className="relative group"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link 
                href={item.href} 
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  isActive(item.href) && "text-primary font-semibold" // Aplica estilo si está activo
                )}
              >
                {item.name}
              </Link>

              {item.submenu && (
                <motion.div
                  className="absolute left-0 top-full mt-2 w-56 origin-top-right rounded-md bg-white p-2 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50"
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 0, y: 10, scale: 0.95 }}
                  whileHover={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="py-1">
                    {item.submenu.map((subItem) => (
                      <motion.div key={subItem.name} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                        <Link
                          href={subItem.href}
                          className={cn(
                            "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900",
                            isSubItemActive(subItem.href) && "bg-gray-100 text-gray-900 font-medium" // Estilo para submenú activo
                          )}
                        >
                          {subItem.name}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </nav>

        {/* Mobile menu button */}
        <Button variant="ghost" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in md:hidden bg-background",
          mobileMenuOpen ? "slide-in-from-bottom-80" : "hidden",
        )}
      >
        <div className="relative z-20 grid gap-6 rounded-md bg-background p-4">
          <nav className="grid grid-flow-row auto-rows-max text-sm">
            {menuItems.map((item) => (
              <div key={item.name} className="py-2">
                {item.submenu ? (
                  <>
                    <button
                      onClick={() => toggleSubmenu(item.name)}
                      className={cn(
                        "flex w-full items-center justify-between font-medium transition-colors hover:text-primary",
                        isActive(item.href) && "text-primary font-semibold" // Estilo para menú móvil activo
                      )}
                    >
                      {item.name}
                      <span className="ml-1">{activeSubmenu === item.name ? "−" : "+"}</span>
                    </button>

                    {activeSubmenu === item.name && (
                      <div className="mt-2 ml-4 grid gap-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className={cn(
                              "text-sm transition-colors hover:text-primary",
                              isSubItemActive(subItem.href) && "text-primary font-medium" // Estilo para submenú móvil activo
                            )}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "font-medium transition-colors hover:text-primary",
                      isActive(item.href) && "text-primary font-semibold" // Estilo para opción móvil activa
                    )}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}