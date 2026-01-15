import { Card } from './Card'

interface TestimonialCardProps {
  clientType: string
  metric: string
  description: string
  name: string
  role: string
}

export function TestimonialCard({
  clientType,
  metric,
  description,
  name,
  role,
}: TestimonialCardProps) {
  return (
    <Card>
      <div className="space-y-4">
        <div className="text-body-sm text-primary font-medium tracking-wide">{clientType}</div>
        <div className="text-h3 font-bold text-text-main">{metric}</div>
        <p className="text-text-muted leading-relaxed">{description}</p>
        <div className="pt-4 border-t border-border">
          <div className="font-semibold text-text-main">{name}</div>
          <div className="text-body-sm text-text-muted">{role}</div>
        </div>
      </div>
    </Card>
  )
}

