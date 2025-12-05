import { Badge } from './Badge'
import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  badge?: string
  title: string
  description?: string
  className?: string
}

export function SectionHeader({ badge, title, description, className }: SectionHeaderProps) {
  return (
    <div className={cn('text-center max-w-3xl mx-auto mb-12', className)}>
      {badge && (
        <div className="mb-4">
          <Badge>{badge}</Badge>
        </div>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-main mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-text-muted">{description}</p>
      )}
    </div>
  )
}

