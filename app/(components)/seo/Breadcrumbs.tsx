'use client'

import Link from 'next/link'
import { SITE_URL } from '@/lib/constants'
import { BreadcrumbSchema } from './StructuredData'

interface BreadcrumbItem {
  name: string
  href: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const allItems = [
    { name: 'Home', href: '/' },
    ...items,
  ]

  return (
    <>
      <BreadcrumbSchema
        items={allItems.map((item) => ({
          name: item.name,
          url: `${SITE_URL}${item.href}`,
        }))}
      />
      <nav aria-label="Breadcrumb" className="mb-8">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-text-muted">
          {allItems.map((item, index) => (
            <li key={item.href} className="flex items-center gap-2">
              {index > 0 && <span className="text-border-subtle">/</span>}
              {index === allItems.length - 1 ? (
                <span className="text-text-main font-medium" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}

