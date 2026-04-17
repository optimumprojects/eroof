import type { Metadata } from 'next'
import { QuotePageClient } from '@/components/QuotePageClient'

export const metadata: Metadata = {
  title: 'Get Your Instant Roof Quote Online | No Salesperson | eRoof.ca',
  description: 'Get a real roof replacement price online in under 2 minutes. No salesperson, no home visit required. eRoof.ca serves Hamilton, Burlington, and the surrounding GTA. Instant. Transparent. Honest.',
  alternates: { canonical: 'https://www.eroof.ca/quote' },
  openGraph: {
    title: 'Get Your Instant Roof Quote | eRoof.ca',
    description: 'Real roof pricing online in minutes. No sales pressure. Serving Hamilton and Burlington.',
    url: 'https://www.eroof.ca/quote',
  },
}

export default function QuotePage() {
  return <QuotePageClient />
}
