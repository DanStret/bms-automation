import { notFound } from "next/navigation"
import equipos from "@/data/equipos"
import EquipoClientPage from "./EquipoClientPage"

interface EquipoPageProps {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  return Object.keys(equipos).map((slug) => ({
    slug,
  }))
}

export default async function EquipoPage({ params }: EquipoPageProps) {
  // En Next.js 15, los params son ahora objetos Promise
  const resolvedParams = await params
  const { slug } = resolvedParams

  const equipo = equipos[slug]

  if (!equipo) {
    notFound()
  }

  return <EquipoClientPage params={resolvedParams} />
}
