import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/constants'
import { FAQSchema } from '@/app/(components)/seo/StructuredData'

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

export const metadata: Metadata = {
  title: 'Pricing | Transparent Marketing Agency Pricing',
  description: 'Simple, transparent pricing for marketing services. Starter plans from $1,200/month, Growth from $2,500/month, Scale from $5,000/month. No long-term contracts. Performance-based pricing.',
  keywords: [
    'marketing agency pricing',
    'paid advertising pricing',
    'PPC management pricing',
    'social media advertising cost',
    'marketing services cost',
    'performance marketing pricing',
  ],
  openGraph: {
    title: 'Pricing | Transparent Marketing Agency Pricing',
    description: 'Simple, transparent pricing starting at $1,200/month. No long-term contracts. Performance-based fees. See our Starter, Growth, and Scale plans.',
    url: `${SITE_URL}/pricing`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pricing | Blessed Marketing',
    description: 'Transparent pricing starting at $1,200/month. No contracts.',
  },
  alternates: {
    canonical: `${SITE_URL}/pricing`,
  },
}

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <FAQSchema faqs={pricingFAQs} />
      {children}
    </>
  )
}

