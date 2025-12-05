import type { Metadata } from 'next'
import { Hero } from './(sections)/hero/Hero'
import { Trust } from './(sections)/trust/Trust'
import { ServicesOverview } from './(sections)/servicesOverview/ServicesOverview'
import { ProcessOverview } from './(sections)/processOverview/ProcessOverview'
import { ResultsPreview } from './(sections)/resultsPreview/ResultsPreview'
import { PricingPreview } from './(sections)/pricingPreview/PricingPreview'
import { FAQ } from './(sections)/faq/FAQ'
import { CTABand } from './(sections)/ctaBand/CTABand'
import { SITE_URL } from '@/lib/constants'
import { OrganizationSchema, ServiceSchema, FAQSchema } from './(components)/seo/StructuredData'
import { services, faqs } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Performance Marketing Agency | Paid Traffic Management | Blessed Marketing',
  description: 'Blessed Marketing is your done-for-you performance marketing agency. We manage paid traffic campaigns on Meta, Google, and TikTok to deliver clear ROI and predictable growth. Get 3-5x ROAS with our proven process.',
  keywords: [
    'performance marketing agency',
    'paid traffic management',
    'Facebook ads management',
    'Google ads agency',
    'TikTok advertising',
    'ROAS optimization',
    'done-for-you marketing',
    'ecommerce marketing agency',
  ],
  openGraph: {
    title: 'Performance Marketing Agency | Paid Traffic Management | Blessed Marketing',
    description: 'Your done-for-you growth team managing paid traffic campaigns for 3-5x ROAS. We handle Meta, Google, and TikTok ads so you can focus on your business.',
    url: SITE_URL,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Performance Marketing Agency | Blessed Marketing',
    description: 'Done-for-you paid traffic management delivering 3-5x ROAS. Meta, Google, TikTok campaigns.',
  },
  alternates: {
    canonical: SITE_URL,
  },
}

export default function HomePage() {
  return (
    <>
      <OrganizationSchema />
      {services.map((service) => (
        <ServiceSchema
          key={service.title}
          name={service.title}
          description={service.tagline}
        />
      ))}
      <FAQSchema faqs={faqs} />
      <Hero />
      <Trust />
      <ServicesOverview />
      <ProcessOverview />
      <ResultsPreview />
      <PricingPreview />
      <FAQ />
      <CTABand />
    </>
  )
}

