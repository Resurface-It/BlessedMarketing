import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Apply to Work With Us | Blessed Marketing Application',
  description: 'Apply to work with Blessed Marketing. We work with a limited number of brands to protect focus and results. Submit your application and we\'ll review within 1-2 business days.',
  keywords: [
    'apply to marketing agency',
    'marketing agency application',
    'work with marketing agency',
    'hire marketing agency',
  ],
  openGraph: {
    title: 'Apply to Work With Us | Blessed Marketing',
    description: 'Apply to work with our performance marketing agency. Limited client spots available. We\'ll review your application within 1-2 business days.',
    url: `${SITE_URL}/apply`,
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Apply to Work With Us | Blessed Marketing',
    description: 'Apply to work with our performance marketing agency.',
  },
  alternates: {
    canonical: `${SITE_URL}/apply`,
  },
}

export default function ApplyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

