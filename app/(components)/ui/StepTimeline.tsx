import { Card } from './Card'
import { Badge } from './Badge'

interface Step {
  step: number
  title: string
  description: string
  details?: string[]
}

interface StepTimelineProps {
  steps: Step[]
}

export function StepTimeline({ steps }: StepTimelineProps) {
  return (
    <div className="space-y-8">
      {steps.map((step, index) => (
        <div key={step.step} className="relative">
          {index < steps.length - 1 && (
            <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-border hidden md:block" />
          )}
          <div className="flex gap-6">
            <div className="flex-shrink-0">
              <Badge className="w-12 h-12 rounded-full flex items-center justify-center p-0 text-lg">
                {step.step}
              </Badge>
            </div>
            <div className="flex-1 pb-8">
              <Card>
                <h3 className="text-h4 font-bold text-text-main mb-2">{step.title}</h3>
                <p className="text-text-muted mb-4">{step.description}</p>
                {step.details && (
                  <ul className="space-y-2">
                    {step.details.map((detail, i) => (
                      <li key={i} className="text-text-muted text-body-sm flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </Card>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

