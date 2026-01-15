import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'primary' | 'muted'
}

export function Badge({ children, className, variant = 'default' }: BadgeProps) {
  const variants = {
    default: 'bg-bg-elevated text-text-main border border-border',
    primary: 'bg-bg-elevated text-primary border border-primary/30 shadow-glow-soft',
    muted: 'bg-bg-elevated text-text-muted border border-border-subtle',
  }
  
  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium',
        'tracking-wide',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  )
}

