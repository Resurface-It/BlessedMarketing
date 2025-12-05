import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -4, transition: { duration: 0.2 } } : undefined}
      className={cn(
        'bg-bg-elevated border border-border-subtle rounded-2xl p-6',
        'shadow-lg hover:shadow-xl hover:shadow-primary/10',
        className
      )}
    >
      {children}
    </motion.div>
  )
}

