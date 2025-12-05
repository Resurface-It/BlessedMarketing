import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/constants'
import { FAQSchema } from '@/app/(components)/seo/StructuredData'
import { faqs } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Contact Us | Get in Touch with Blessed Marketing',
  description: 'Contact Blessed Marketing to discuss your marketing needs. Schedule a strategy call or send us a message. We\'ll respond within 1-2 business days.',
  keywords: [
    'contact marketing agency',
    'marketing consultation',
    'free marketing consultation',
    'marketing strategy call',
  ],
  openGraph: {
    title: 'Contact Us | Get in Touch with Blessed Marketing',
    description: 'Let\'s talk about your growth. Contact us for a strategy call or send a message. We respond within 1-2 business days.',
    url: `${SITE_URL}/contact`,
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Contact Us | Blessed Marketing',
    description: 'Get in touch to discuss your marketing needs.',
  },
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <FAQSchema faqs={faqs.slice(0, 3)} />
      {children}
    </>
  )
}

