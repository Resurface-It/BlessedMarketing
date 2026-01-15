'use client'

import { motion } from 'framer-motion'
import { SectionHeader } from '@/app/(components)/ui/SectionHeader'
import { Card } from '@/app/(components)/ui/Card'
import { Button } from '@/app/(components)/ui/Button'
import { FAQAccordion } from '@/app/(components)/ui/FAQAccordion'
import { Breadcrumbs } from '@/app/(components)/seo/Breadcrumbs'
import { pricingTiers } from '@/lib/data'

const pricingFAQs = [
  {
    question: 'How does billing work?',
    answer: 'We bill monthly in advance. The base fee covers our management and strategy work. Performance incentives are calculated monthly based on agreed-upon metrics (typically ROAS or revenue targets).',
  },
  {
    question: 'Are there long-term contracts?',
    answer: 'No. We work on month-to-month agreements. We believe in earning your business every month through results, not contracts.',
  },
  {
    question: 'What are the minimum ad spend requirements?',
    answer: 'Starter tier requires a minimum of $5k/month in ad spend. Growth tier requires $10k+/month, and Scale tier requires $50k+/month. These minimums ensure we can properly optimize and scale your campaigns.',
  },
  {
    question: 'How are performance incentives calculated?',
    answer: 'Performance incentives are based on agreed-upon metrics (typically ROAS targets or revenue milestones). We structure these to align our success with yours—we only win when you win.',
  },
]

export default function PricingPage() {
  return (
    <div className="pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumbs items={[{ name: 'Pricing', href: '/pricing' }]} />
      </div>
      {/* Hero */}
      <section className="py-20 bg-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Simple, transparent pricing tuned to growth"
            description="We structure fees around performance, not busywork."
          />
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 bg-bg-elevated">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col">
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-h3 font-bold text-text-main">{tier.name}</h3>
                      {tier.discountPercent && (
                        <span className="px-2 py-1 bg-bg-surface text-primary text-tiny font-bold rounded-sm border border-primary/30">
                          {tier.discountPercent}% OFF
                        </span>
                      )}
                    </div>
                    <p className="text-body-sm text-text-muted mb-4">{tier.perfectFor}</p>
                    <div className="mb-2">
                      {tier.originalPrice && (
                        <div className="text-body-sm text-text-muted line-through mb-1">
                          ${tier.originalPrice.toLocaleString()}/month
                        </div>
                      )}
                      <div className="text-3xl font-bold text-primary">
                        ${tier.discountedPrice.toLocaleString()}/month
                      </div>
                    </div>
                  </div>
                  <ul className="space-y-3 flex-1 mb-6">
                    {tier.bullets.map((bullet, i) => (
                      <li key={i} className="text-body-sm text-text-muted flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <Button href="/contact" variant={tier.name === 'Growth' ? 'primary' : 'secondary'} className="w-full">
                    Get Started
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-bg">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Pricing FAQ"
            description="Common questions about our pricing and billing."
          />
          <FAQAccordion faqs={pricingFAQs} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-bg-elevated">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-h2 font-bold text-text-main mb-4">
            Not sure which tier you fit?
          </h2>
          <p className="text-body-lg text-text-muted mb-8">
            Apply now and we'll review your brand, funnel, and numbers to recommend the right path.
          </p>
          <Button href="/contact" variant="primary">
            Apply now and we'll recommend a path
          </Button>
        </div>
      </section>
    </div>
  )
}

