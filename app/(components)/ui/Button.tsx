'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onDrag' | 'onDragEnd' | 'onDragStart'> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  children: React.ReactNode
}

export function Button({ variant = 'primary', size = 'md', href, children, className, ...props }: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg'
  
  const sizeStyles = {
    sm: 'px-4 py-2 text-sm rounded-sm',
    md: 'px-6 py-3 text-base rounded-sm',
    lg: 'px-8 py-4 text-lg rounded-sm',
  }
  
  const variants = {
    primary: 'bg-bg-elevated text-text-main border border-border hover:bg-bg-surface hover:border-primary hover:shadow-glow-soft hover:shadow-primary-glow-soft',
    secondary: 'bg-bg-elevated text-text-main border border-border hover:bg-bg-surface hover:border-primary hover:shadow-glow-soft',
    ghost: 'bg-transparent text-text-main border border-border-subtle hover:bg-bg-elevated hover:border-primary hover:shadow-glow-soft',
  }

  if (href) {
    return (
      <Link href={href} className="inline-block">
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={cn(baseStyles, sizeStyles[size], variants[variant], className)}
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
      className={cn(baseStyles, sizeStyles[size], variants[variant], className)}
      {...(props as any)}
    >
      {children}
    </motion.button>
  )
}
