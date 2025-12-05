import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Our Marketing Process | How We Scale Your Business',
  description: 'Learn how Blessed Marketing scales businesses through our proven 4-step process: kickoff, strategy, launch, and optimization. See what to expect month by month.',
  keywords: [
    'marketing process',
    'campaign launch process',
    'marketing agency workflow',
    'paid advertising process',
    'ROAS optimization process',
    'marketing strategy process',
  ],
  openGraph: {
    title: 'Our Marketing Process | How We Scale Your Business',
    description: 'Discover our proven 4-step marketing process that helps businesses achieve 3-5x ROAS. From kickoff to optimization, see how we scale your campaigns.',
    url: `${SITE_URL}/process`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Marketing Process | Blessed Marketing',
    description: 'Proven 4-step process for scaling paid traffic campaigns.',
  },
  alternates: {
    canonical: `${SITE_URL}/process`,
  },
}

export default function ProcessLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

