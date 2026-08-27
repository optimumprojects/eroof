import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Shield, Clock } from 'lucide-react'
import { BookVisitForm } from '@/components/BookVisitForm'

export const metadata: Metadata = {
  title: 'Book Your Roof Verification & Education Visit | eRoof.ca',
  description: 'Request a Roof Verification & Education Visit from eRoof Inc., a residential roofing company serving Hamilton, Burlington and the surrounding area. No pressure, no sales pitch.',
  alternates: { canonical: 'https://www.eroof.ca/book' },
}

export default function BookPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-black text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl md:text-5xl font-black mb-4">Book Your Roof Verification &amp; Education Visit</h1>
          <p className="font-paragraph text-xl text-white/80 max-w-2xl">Tell us about your roof and we&apos;ll come take a proper look — drone footage, a walkthrough of what we find, and honest answers. No sales pitch.</p>
        </div>
      </section>

      {/* Business context — required so this reads as a real business page, not a bare form */}
      <section className="py-10 bg-gray-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-black text-black mb-3">About eRoof.ca</h2>
          <p className="font-paragraph text-gray-700 leading-relaxed mb-6">
            <strong>eRoof Inc.</strong> is a residential roofing company based at 21 King St W, Hamilton, Ontario. We replace and repair roofs for homeowners across Hamilton, Burlington, Oakville, Mississauga, Grimsby, St. Catharines and the surrounding area. We are known for instant online estimates, transparent pricing, and no commission salespeople.
            Reach us at <a href="tel:6478237663" className="underline font-semibold">647-823-7663</a> or <a href="mailto:info@eroof.ca" className="underline font-semibold">info@eroof.ca</a>.
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: Clock, t: 'Fast turnaround', d: 'Most roofs completed in 1-3 days' },
              { icon: MapPin, t: 'Local team', d: 'Hamilton, Burlington and surrounding areas' },
              { icon: Shield, t: 'Insured & certified', d: 'CertainTeed ShingleMaster accredited' },
            ].map((x, i) => (
              <div key={i} className="flex items-start gap-3">
                <x.icon className="h-6 w-6 text-black shrink-0 mt-0.5" />
                <div>
                  <p className="font-heading font-bold text-black">{x.t}</p>
                  <p className="font-paragraph text-sm text-gray-600">{x.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <BookVisitForm />
          <p className="font-paragraph text-sm text-gray-600 text-center mt-8">
            Prefer an instant ballpark first? <Link href="/quote" className="underline font-semibold">Try the online estimator</Link>.
          </p>
        </div>
      </section>
    </div>
  )
}
