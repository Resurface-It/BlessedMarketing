'use client'

import { SectionHeader } from '@/app/(components)/ui/SectionHeader'
import { FAQAccordion } from '@/app/(components)/ui/FAQAccordion'
import { faqs } from '@/lib/data'

export function FAQ() {
  return (
    <section className="py-20 bg-bg">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Common questions"
          description="Everything you need to know about working with Blessed Marketing."
        />
        <FAQAccordion faqs={faqs} />
      </div>
    </section>
  )
}

