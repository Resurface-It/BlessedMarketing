'use client'

import { motion } from 'framer-motion'
import { SectionHeader } from '@/app/(components)/ui/SectionHeader'
import { StepTimeline } from '@/app/(components)/ui/StepTimeline'
import { Card } from '@/app/(components)/ui/Card'
import { Button } from '@/app/(components)/ui/Button'
import { Breadcrumbs } from '@/app/(components)/seo/Breadcrumbs'
import { processSteps } from '@/lib/data'

export default function ProcessPage() {
  return (
    <div className="pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumbs items={[{ name: 'Process', href: '/process' }]} />
      </div>
      {/* Overview Hero */}
      <section className="py-20 bg-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Our process is built to find winners and scale them"
            description="We focus on momentum, compounding improvements, and clear communication every step of the way."
          />
        </div>
      </section>

      {/* Detailed Step Timeline */}
      <section className="py-20 bg-bg-elevated">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <StepTimeline steps={processSteps} />
        </div>
      </section>

      {/* What to Expect Month by Month */}
      <section className="py-20 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="What to expect month by month"
            description="A realistic timeline for what happens when you work with us."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                period: 'Month 1',
                title: 'Foundation & Launch',
                description: 'We audit your current setup, build the strategy, and launch initial campaigns. Expect daily communication and rapid iteration.',
              },
              {
                period: 'Month 2-3',
                title: 'Optimization & Proof of Concept',
                description: 'We cut what\'s not working, double down on winners, and refine creative and targeting. This is where we prove the model.',
              },
              {
                period: 'Month 4+',
                title: 'Scale & Systemization',
                description: 'Once we have a winning formula, we scale it systematically. We build processes, expand to new platforms, and compound growth.',
              },
            ].map((item, index) => (
              <motion.div
                key={item.period}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <div className="text-body-sm text-primary font-medium mb-2 tracking-wide">{item.period}</div>
                  <h3 className="text-h4 font-bold text-text-main mb-3">{item.title}</h3>
                  <p className="text-text-muted">{item.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-bg-elevated">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-h2 font-bold text-text-main mb-4">
            Ready to start the process?
          </h2>
          <p className="text-body-lg text-text-muted mb-8">
            Apply to work with us and we'll review your brand, funnel, and numbers.
          </p>
          <Button href="/contact" variant="primary">
            Apply to work with us
          </Button>
        </div>
      </section>
    </div>
  )
}

