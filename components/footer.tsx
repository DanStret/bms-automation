import Link from "next/link"
import Image from "next/image"
import { Facebook, Mail, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container grid gap-8 py-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="SMART AUTOMATION" width={40} height={40} className="h-10 w-auto" />
            <span className="font-bold">SMART AUTOMATION</span>
          </Link>
          <p className="text-sm text-muted-foreground">
            Especialistas en soluciones de automatización inteligente para edificios y sistemas industriales.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-medium">Servicios</h3>
          <ul className="grid gap-2 text-sm">
            <li>
              <Link href="/soluciones/sistema-bms" className="text-muted-foreground hover:text-foreground">
                Sistema BMS
              </Link>
            </li>
            <li>
              <Link href="/soluciones/aire-acondicionado" className="text-muted-foreground hover:text-foreground">
                Aire Acondicionado
              </Link>
            </li>
            <li>
              <Link href="/soluciones/sistema-contra-incendio" className="text-muted-foreground hover:text-foreground">
                Sistema contra incendio
              </Link>
            </li>
            <li>
              <Link href="/soluciones/presurizacion-escaleras" className="text-muted-foreground hover:text-foreground">
                Presurización de Escaleras
              </Link>
            </li>
            <li>
              <Link href="/soluciones" className="text-muted-foreground hover:text-foreground">
                Ver todos los servicios
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-medium">Equipos</h3>
          <ul className="grid gap-2 text-sm">
            <li>
              <Link href="/equipos/chiller" className="text-muted-foreground hover:text-foreground">
                HVAC-R CHILLER
              </Link>
            </li>
            <li>
              <Link href="/equipos/vrf" className="text-muted-foreground hover:text-foreground">
                HVAC-R VRF
              </Link>
            </li>
            <li>
              <Link href="/equipos/rooftop" className="text-muted-foreground hover:text-foreground">
                HVAC-R ROOFTOP
              </Link>
            </li>
            <li>
              <Link href="/equipos/uma" className="text-muted-foreground hover:text-foreground">
                HVAC-R UMA
              </Link>
            </li>
            <li>
              <Link href="/equipos" className="text-muted-foreground hover:text-foreground">
                Ver todos los equipos
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-medium">Contacto</h3>
          <ul className="grid gap-3 text-sm">
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <a href="mailto:trysperu7@gmail.com" className="text-muted-foreground hover:text-foreground">
                trysperu7@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <a href="mailto:gpsventastrys@gmail.com" className="text-muted-foreground hover:text-foreground">
                gpsventastrys@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Youtube className="h-4 w-4" />
              <a href="https://youtube.com" className="text-muted-foreground hover:text-foreground">
                Canal de YouTube
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Facebook className="h-4 w-4" />
              <a href="https://facebook.com" className="text-muted-foreground hover:text-foreground">
                TRYS PERU
              </a>
            </li>
            <li className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"></path>
                <path d="M2 12h20"></path>
                <path d="M12 2a15 15 0 0 1 4 10 15 15 0 0 1-4 10 15 15 0 0 1-4-10 15 15 0 0 1 4-10z"></path>
              </svg>
              <a href="https://www.smart-general.com" className="text-muted-foreground hover:text-foreground">
                www.smart-general.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} SMART AUTOMATION. Todos los derechos reservados.
          </p>
          <div className="flex gap-4">
            <a href="https://facebook.com" aria-label="Facebook">
              <Facebook className="h-5 w-5 text-muted-foreground hover:text-foreground" />
            </a>
            <a href="https://youtube.com" aria-label="YouTube">
              <Youtube className="h-5 w-5 text-muted-foreground hover:text-foreground" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
