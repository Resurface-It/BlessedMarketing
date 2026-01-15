'use client'

import { motion } from 'framer-motion'
import { SectionHeader } from '@/app/(components)/ui/SectionHeader'
import { StepTimeline } from '@/app/(components)/ui/StepTimeline'
import { Button } from '@/app/(components)/ui/Button'
import { processSteps } from '@/lib/data'

export function ProcessOverview() {
  return (
    <section className="py-20 bg-bg-secondary border-y border-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Here's how it works"
          description="A proven marketing process designed to find winning campaigns and scale them fast. Our performance marketing agency uses a data-driven approach to optimize ROAS and deliver predictable growth."
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <StepTimeline steps={processSteps} />
        </motion.div>

        <div className="text-center mt-12">
          <Button href="/process" variant="secondary">
            View the detailed process →
          </Button>
        </div>
      </div>
    </section>
  )
}

