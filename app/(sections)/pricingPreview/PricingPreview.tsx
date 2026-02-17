'use client'

import { motion } from 'framer-motion'
import { SectionHeader } from '@/app/(components)/ui/SectionHeader'
import { Card } from '@/app/(components)/ui/Card'
import { Button } from '@/app/(components)/ui/Button'
import { pricingTiers } from '@/lib/data'

export function PricingPreview() {
  return (
    <section className="py-20 bg-bg-elevated">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="We structure fees around performance, not busywork"
          description="Simple, transparent pricing you can explain to your accountant."
        />

        <div className="mb-8 space-y-3 max-w-2xl mx-auto text-center">
          <p className="text-text-muted flex items-center justify-center gap-2 text-body-sm">
            <span className="text-primary">✓</span> No long-term contracts by default
          </p>
          <p className="text-text-muted flex items-center justify-center gap-2 text-body-sm">
            <span className="text-primary">✓</span> Plans for every stage of growth
          </p>
          <p className="text-text-muted flex items-center justify-center gap-2 text-body-sm">
            <span className="text-primary">✓</span> Simple, transparent pricing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className={`h-full flex flex-col ${tier.popular ? 'ring-2 ring-primary' : ''} ${tier.limited ? 'ring-2 ring-amber-500' : ''}`}>
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-h4 font-bold text-text-main">
                      <span className="mr-1">{tier.emoji}</span>
                      {tier.name}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 mb-2 min-h-[24px]">
                    {tier.popular && (
                      <span className="px-2 py-0.5 bg-primary/10 text-primary text-tiny font-bold rounded-sm border border-primary/30">
                        POPULAR
                      </span>
                    )}
                    {tier.limited && (
                      <span className="px-2 py-0.5 bg-amber-500/10 text-amber-500 text-tiny font-bold rounded-sm border border-amber-500/30">
                        LIMITED
                      </span>
                    )}
                  </div>
                  <p className="text-body-sm text-text-muted mb-1">Goal: {tier.goal}</p>
                  <div className="mb-4">
                    <div className="text-2xl font-bold text-primary">
                      ${tier.price.toLocaleString()}/mo
                    </div>
                  </div>
                </div>
                <ul className="space-y-2 flex-1">
                  {tier.bullets.slice(0, 4).map((bullet, i) => (
                    <li key={i} className="text-body-sm text-text-muted flex items-start gap-2">
                      <span className="text-primary mt-1">✔</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                  {tier.bullets.length > 4 && (
                    <li className="text-body-sm text-text-muted flex items-start gap-2">
                      <span className="text-primary mt-1">+</span>
                      <span>{tier.bullets.length - 4} more features</span>
                    </li>
                  )}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button href="/pricing" variant="secondary">
            See full pricing details →
          </Button>
        </div>
      </div>
    </section>
  )
}

