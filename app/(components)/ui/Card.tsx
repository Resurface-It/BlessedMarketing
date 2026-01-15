'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  glow?: boolean
}

export function Card({ children, className, hover = true, glow = false }: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -4, transition: { duration: 0.2 } } : undefined}
      className={cn(
        'bg-bg-elevated border border-border rounded-md p-6',
        'shadow-card',
        hover && 'hover:shadow-card-hover hover:border-border-glow',
        glow && 'shadow-glow-soft',
        className
      )}
    >
      {children}
    </motion.div>
  )
}

