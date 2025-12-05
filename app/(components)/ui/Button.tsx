'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  href?: string
  children: React.ReactNode
}

export function Button({ variant = 'primary', href, children, className, ...props }: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-bg'
  
  const variants = {
    primary: 'bg-primary text-slate-950 hover:bg-primary-dark hover:scale-105 hover:shadow-lg hover:shadow-primary/50',
    secondary: 'bg-bg-elevated text-text-main border border-primary hover:bg-primary/10 hover:border-primary-dark',
    ghost: 'bg-transparent text-primary border border-primary/30 hover:bg-primary/10 hover:border-primary',
  }

  if (href) {
    return (
      <Link href={href} className="inline-block">
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={cn(baseStyles, variants[variant], className)}
        >
          {children}
        </motion.div>
      </Link>
    )
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </motion.button>
  )
}
