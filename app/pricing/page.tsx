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
    answer: 'We bill monthly in advance. Your monthly fee covers all management, optimization, strategy, and the services included in your plan tier.',
  },
  {
    question: 'Are there long-term contracts?',
    answer: 'No. We work on month-to-month agreements. We believe in earning your business every month through results, not contracts.',
  },
  {
    question: 'What\'s included in each plan?',
    answer: 'Each plan builds on the previous tier. Starter covers the essentials for new businesses. Scale adds full-funnel strategy and advanced retargeting. Standard includes unlimited campaigns and daily optimization. Premium Partnership provides direct access, full funnel builds, and multi-platform scaling.',
  },
  {
    question: 'Who qualifies for the Premium Partnership?',
    answer: 'Premium Partnership is for businesses with at least $10k/month in revenue, a proven offer, and the willingness to scale ad spend alongside results. We only partner with 5 premium clients at a time to maintain elite performance and direct access.',
  },
  {
    question: 'What if I\'m not sure which plan is right for me?',
    answer: 'Apply and we\'ll review your business, funnel, and goals to recommend the right plan. We\'ll never upsell you to a tier you don\'t need.',
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
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-h3 font-bold text-text-main">
                        <span className="mr-2">{tier.emoji}</span>
                        {tier.name}
                      </h3>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      {tier.popular && (
                        <span className="px-2 py-1 bg-primary/10 text-primary text-tiny font-bold rounded-sm border border-primary/30">
                          MOST POPULAR
                        </span>
                      )}
                      {tier.limited && (
                        <span className="px-2 py-1 bg-amber-500/10 text-amber-500 text-tiny font-bold rounded-sm border border-amber-500/30">
                          LIMITED SPOTS
                        </span>
                      )}
                    </div>
                    <p className="text-body-sm text-text-muted mb-1">Goal: {tier.goal}</p>
                    <p className="text-body-sm text-text-muted mb-4">{tier.perfectFor}</p>
                    <div className="mb-2">
                      <div className="text-3xl font-bold text-primary">
                        ${tier.price.toLocaleString()}/month
                      </div>
                    </div>
                  </div>
                  <ul className="space-y-3 flex-1 mb-6">
                    {tier.bullets.map((bullet, i) => (
                      <li key={i} className="text-body-sm text-text-muted flex items-start gap-2">
                        <span className="text-primary mt-1">✔</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    href={tier.limited ? '/apply' : '/contact'} 
                    variant={tier.popular || tier.limited ? 'primary' : 'secondary'} 
                    className="w-full"
                  >
                    {tier.limited ? 'Apply Now' : 'Get Started'}
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Who This Is NOT For section */}
          <div className="max-w-2xl mx-auto mt-12">
            <Card className="bg-bg-surface border-red-500/20">
              <h3 className="text-h4 font-bold text-text-main mb-4">❌ Who This Is NOT For</h3>
              <ul className="space-y-2 text-body-sm text-text-muted">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">✖</span>
                  <span>Businesses under $10k/month in revenue (for Premium tier)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">✖</span>
                  <span>No proven offer or poor fulfillment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">✖</span>
                  <span>Looking for "set it and forget it" ads</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">✖</span>
                  <span>Not willing to scale ad spend alongside results</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">✖</span>
                  <span>Want cheap management instead of a growth partner</span>
                </li>
              </ul>
            </Card>
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

