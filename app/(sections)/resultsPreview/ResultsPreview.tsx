'use client'

import { motion } from 'framer-motion'
import { SectionHeader } from '@/app/(components)/ui/SectionHeader'
import { TestimonialCard } from '@/app/(components)/ui/TestimonialCard'
import { Button } from '@/app/(components)/ui/Button'
import { testimonials } from '@/lib/data'

export function ResultsPreview() {
  return (
    <section className="py-20 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="The work we're proud of"
          description="Real results from real brands we've helped scale. See how our performance marketing agency delivers 3-5x ROAS through paid traffic management and campaign optimization."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.slice(0, 3).map((testimonial, index) => (
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

        <div className="text-center">
          <Button href="/results" variant="secondary">
            View more results →
          </Button>
        </div>
      </div>
    </section>
  )
}

