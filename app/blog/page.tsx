import type { Metadata } from 'next'
import { BlogPageClient } from '@/components/BlogPageClient'

export const metadata: Metadata = {
  title: 'Roofing Tips & Guides for Hamilton Homeowners | eRoof.ca Blog',
  description: 'Learn everything about roof replacement, costs, shingles, and what to watch out for when hiring a roofing company in Hamilton and Burlington. Straight talk from 20+ year industry veterans.',
  alternates: { canonical: 'https://www.eroof.ca/blog' },
  openGraph: {
    title: 'Roofing Tips & Guides | eRoof.ca Blog',
    description: 'Expert roofing advice for Hamilton and Burlington homeowners. No jargon, no fluff.',
    url: 'https://www.eroof.ca/blog',
  },
}

export default function BlogPage() {
  return <BlogPageClient />
}
