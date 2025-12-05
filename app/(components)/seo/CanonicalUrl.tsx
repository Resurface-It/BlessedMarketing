import { SITE_URL } from '@/lib/constants'

interface CanonicalUrlProps {
  path: string
}

export function CanonicalUrl({ path }: CanonicalUrlProps) {
  const canonicalUrl = `${SITE_URL}${path === '/' ? '' : path}`

  return <link rel="canonical" href={canonicalUrl} />
}

