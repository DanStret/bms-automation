"use client"

import { type ReactNode, useRef, useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface ScrollAnimationProps {
  children: ReactNode
  className?: string
}

export function ScrollAnimation({ children, className }: ScrollAnimationProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [elementTop, setElementTop] = useState(0)
  const [clientHeight, setClientHeight] = useState(0)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const updatePosition = () => {
      const rect = element.getBoundingClientRect()
      setElementTop(rect.top + window.scrollY)
      setClientHeight(window.innerHeight)
    }

    updatePosition()
    window.addEventListener("resize", updatePosition)
    return () => window.removeEventListener("resize", updatePosition)
  }, [])

  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [elementTop - clientHeight, elementTop], [50, 0])
  const opacity = useTransform(scrollY, [elementTop - clientHeight, elementTop], [0, 1])

  return (
    <motion.div ref={ref} style={{ y, opacity }} className={className}>
      {children}
    </motion.div>
  )
}
