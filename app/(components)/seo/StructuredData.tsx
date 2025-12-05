import { SITE_NAME, SITE_URL, SITE_EMAIL } from '@/lib/constants'

interface OrganizationSchemaProps {
  name?: string
  url?: string
  logo?: string
  description?: string
  email?: string
}

export function OrganizationSchema({
  name = SITE_NAME,
  url = SITE_URL,
  logo = `${SITE_URL}/logo.png`,
  description = 'Performance marketing agency specializing in paid traffic management, ROAS optimization, and done-for-you marketing services.',
  email = SITE_EMAIL,
}: OrganizationSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name,
    url,
    logo,
    description,
    email,
    sameAs: [
      // Add social media profiles when available
      // 'https://www.facebook.com/blessedmarketing',
      // 'https://www.linkedin.com/company/blessedmarketing',
      // 'https://twitter.com/blessedmarketing',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email,
      contactType: 'Customer Service',
      areaServed: 'US',
      availableLanguage: 'English',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

interface ServiceSchemaProps {
  name: string
  description: string
  provider?: string
  areaServed?: string
}

export function ServiceSchema({
  name,
  description,
  provider = SITE_NAME,
  areaServed = 'US',
}: ServiceSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'Organization',
      name: provider,
      url: SITE_URL,
    },
    areaServed: {
      '@type': 'Country',
      name: areaServed,
    },
    serviceType: 'Marketing Service',
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

interface FAQSchemaProps {
  faqs: Array<{ question: string; answer: string }>
}

export function FAQSchema({ faqs }: FAQSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

interface ReviewSchemaProps {
  reviews: Array<{
    author: string
    reviewBody: string
    rating?: number
    datePublished?: string
  }>
}

export function ReviewSchema({ reviews }: ReviewSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: reviews.length.toString(),
    },
    review: reviews.map((review) => ({
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: review.author,
      },
      reviewBody: review.reviewBody,
      reviewRating: review.rating
        ? {
            '@type': 'Rating',
            ratingValue: review.rating.toString(),
            bestRating: '5',
          }
        : undefined,
      datePublished: review.datePublished || new Date().toISOString(),
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

interface BreadcrumbSchemaProps {
  items: Array<{ name: string; url: string }>
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

