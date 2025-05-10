"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

interface AnimatedImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
}

export function AnimatedImage({ src, alt, width, height, className }: AnimatedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <motion.div
      className={`overflow-hidden ${className}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.9 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.5 }}>
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          width={width}
          height={height}
          className="h-full w-full object-cover"
          onLoad={() => setIsLoaded(true)}
        />
      </motion.div>
    </motion.div>
  )
}
