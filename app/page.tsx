import type { Metadata } from 'next'
import { HomePageClient } from '@/components/HomePageClient'

export const metadata: Metadata = {
  title: 'Roofing Company Hamilton & Burlington | Instant Online Quote | eRoof.ca',
  description: 'Get an instant roof quote online in minutes — no sales visit, no pressure, no surprises. Hamilton and Burlington\'s modern roofing company. CertainTeed certified. Call (647) 82-EROOF.',
  alternates: { canonical: 'https://www.eroof.ca' },
  openGraph: {
    title: 'Roofing Company Hamilton & Burlington | Instant Online Quote | eRoof.ca',
    description: 'Get an instant roof quote online in minutes — no sales visit, no pressure, no surprises.',
    url: 'https://www.eroof.ca',
    type: 'website',
  },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'RoofingContractor',
  name: 'eRoof.ca',
  url: 'https://www.eroof.ca',
  telephone: '+16478237663',
  email: 'info@eroof.ca',
  description: 'Hamilton and Burlington\'s modern roofing company. Instant online roof quotes, no sales pressure, certified installation.',
  areaServed: ['Hamilton', 'Burlington', 'Ancaster', 'Dundas', 'Stoney Creek', 'Waterdown', 'Brantford', 'Grimsby'],
  priceRange: '$$',
  founder: [{ '@type': 'Person', name: 'Erick Ko' }, { '@type': 'Person', name: 'Greg Henderson' }],
  award: 'CCN National AWO Contest Winner – Category 7 (2023)',
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <HomePageClient />
    </>
  )
}
