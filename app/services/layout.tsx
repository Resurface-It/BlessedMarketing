import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/constants'
import { ServiceSchema } from '@/app/(components)/seo/StructuredData'
import { services } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Marketing Services | Paid Traffic, Funnels, Creative & Analytics',
  description: 'Comprehensive marketing services including paid traffic management (Meta, Google, TikTok), funnel optimization, creative strategy, and analytics. Everything you need to scale your business.',
  keywords: [
    'paid traffic management',
    'Facebook ads management',
    'Google ads services',
    'TikTok advertising',
    'funnel optimization',
    'landing page optimization',
    'creative strategy',
    'marketing analytics',
    'conversion rate optimization',
  ],
  openGraph: {
    title: 'Marketing Services | Paid Traffic, Funnels & Creative Strategy',
    description: 'Full-service marketing agency offering paid traffic management, funnel optimization, creative strategy, and analytics. Scale your business with proven marketing services.',
    url: `${SITE_URL}/services`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marketing Services | Blessed Marketing',
    description: 'Paid traffic management, funnel optimization, and creative strategy services.',
  },
  alternates: {
    canonical: `${SITE_URL}/services`,
  },
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {services.map((service) => (
        <ServiceSchema
          key={service.title}
          name={service.title}
          description={service.tagline}
        />
      ))}
      {children}
    </>
  )
}

