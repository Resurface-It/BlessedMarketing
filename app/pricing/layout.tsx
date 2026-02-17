import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/constants'
import { FAQSchema } from '@/app/(components)/seo/StructuredData'

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
]

export const metadata: Metadata = {
  title: 'Pricing | Transparent Marketing Agency Pricing',
  description: 'Simple, transparent pricing for marketing services. Starter plans from $499/month, Scale from $999.99/month, Standard from $1,249/month, Premium Partnership from $2,500/month. No long-term contracts.',
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
    description: 'Simple, transparent pricing starting at $499/month. No long-term contracts. See our Starter, Scale, Standard, and Premium Partnership plans.',
    url: `${SITE_URL}/pricing`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pricing | Blessed Marketing',
    description: 'Transparent pricing starting at $499/month. No contracts.',
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

