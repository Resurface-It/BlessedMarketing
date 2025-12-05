import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/constants'
import { ReviewSchema } from '@/app/(components)/seo/StructuredData'
import { testimonials } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Case Studies & Results | Marketing Agency Success Stories',
  description: 'See real results from Blessed Marketing clients: 3-5x ROAS improvements, 3x lead volume increases, and $250k+ revenue from optimized campaigns. Read our case studies.',
  keywords: [
    'marketing agency case studies',
    'ROAS case studies',
    'paid advertising results',
    'marketing success stories',
    'Facebook ads results',
    'Google ads case studies',
    'ecommerce marketing results',
  ],
  openGraph: {
    title: 'Case Studies & Results | Marketing Agency Success Stories',
    description: 'Real results from real clients: 3-5x ROAS, increased lead volume, and revenue growth. See how we\'ve helped businesses scale with paid traffic.',
    url: `${SITE_URL}/results`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Case Studies & Results | Blessed Marketing',
    description: 'Real client results: 3-5x ROAS improvements and revenue growth.',
  },
  alternates: {
    canonical: `${SITE_URL}/results`,
  },
}

export default function ResultsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const reviews = testimonials.map((t) => ({
    author: t.name,
    reviewBody: t.description,
    rating: 5,
  }))

  return (
    <>
      <ReviewSchema reviews={reviews} />
      {children}
    </>
  )
}

