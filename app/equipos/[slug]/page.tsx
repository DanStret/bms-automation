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

export default function EquipoPage({ params }: EquipoPageProps) {
  const { slug } = params
  const equipo = equipos[slug]

  if (!equipo) {
    notFound()
  }

  return <EquipoClientPage params={params} />
}
