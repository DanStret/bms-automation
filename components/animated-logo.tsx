"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, useAnimation } from "framer-motion"

interface AnimatedLogoProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
}

export function AnimatedLogo({ src, alt, width, height, className }: AnimatedLogoProps) {
  const [isHovered, setIsHovered] = useState(false)
  const controls = useAnimation()

  useEffect(() => {
    if (isHovered) {
      controls.start({
        rotate: [0, -10, 10, -10, 10, 0],
        transition: { duration: 0.5 },
      })
    }
  }, [isHovered, controls])

  return (
    <motion.div
      className={className}
      whileHover={{ scale: 1.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      animate={controls}
    >
      <Image src={src || "/placeholder.svg"} alt={alt} width={width} height={height} className="h-full w-full" />
    </motion.div>
  )
}
