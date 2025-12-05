'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { SectionHeader } from '@/app/(components)/ui/SectionHeader'
import { TestimonialCard } from '@/app/(components)/ui/TestimonialCard'
import { Card } from '@/app/(components)/ui/Card'
import { Button } from '@/app/(components)/ui/Button'
import { Breadcrumbs } from '@/app/(components)/seo/Breadcrumbs'
import { testimonials } from '@/lib/data'

export default function ResultsPage() {
  const [filter, setFilter] = useState('All')

  const filters = ['All', 'Ecommerce', 'Local Services', 'Education']

  return (
    <div className="pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumbs items={[{ name: 'Results', href: '/results' }]} />
      </div>
      {/* Intro */}
      <section className="py-20 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="The work we're proud of"
            description="Real results from real brands we've helped scale."
          />
        </div>
      </section>

      {/* Filters & Results */}
      <section className="py-20 bg-bg-elevated">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  filter === f
                    ? 'bg-primary text-slate-950'
                    : 'bg-bg text-text-muted hover:text-primary border border-border-subtle'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <TestimonialCard {...testimonial} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sticky Sidebar CTA (desktop) */}
      <section className="py-20 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-text-main mb-4">
              Want to be our next case study?
            </h2>
            <p className="text-text-muted mb-6">
              Apply to work with Blessed Marketing and let's build something worth talking about.
            </p>
            <Button href="/apply" variant="primary">
              Apply Now
            </Button>
          </Card>
        </div>
      </section>
    </div>
  )
}

