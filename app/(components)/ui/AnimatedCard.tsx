'use client'

import { motion } from 'framer-motion'
import { Card } from './Card'

interface AnimatedCardProps {
  children: React.ReactNode
  index?: number
  className?: string
}

export function AnimatedCard({ children, index = 0, className }: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className={className}>{children}</Card>
    </motion.div>
  )
}

