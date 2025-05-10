"use client"

import { type ReactNode, useRef } from "react"
import { motion, useInView } from "framer-motion"

interface AnimatedListProps {
  children: ReactNode[]
  className?: string
  itemClassName?: string
}

export function AnimatedList({ children, className, itemClassName }: AnimatedListProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 20 } },
  }

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      className={className}
    >
      {children.map((child, index) => (
        <motion.div key={index} variants={item} className={itemClassName}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  )
}
