'use client'
import Link from 'next/link'
import { useMemo, useState } from 'react'
import { Calculator, Shield, CheckCircle, Phone, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/cards'
import { GoogleReviewsBadge } from '@/components/GoogleReviewsBadge'
import { BBBSeal } from '@/components/BBBSeal'

export function QuotePageClient() {
  const [iframeError] = useState(false)

  const iframeSrc = useMemo(() => {
    if (typeof window === 'undefined') return 'https://app.roofr.com/instant-estimator/83a57bb5-2938-4ca6-8743-5221ef74c322/eRoofca'
    const base = 'https://app.roofr.com/instant-estimator/83a57bb5-2938-4ca6-8743-5221ef74c322/eRoofca'
    const urlParams = new URLSearchParams(window.location.search)
    const gclid = urlParams.get('gclid') || localStorage.getItem('gclid') || ''
    if (urlParams.get('gclid')) localStorage.setItem('gclid', urlParams.get('gclid')!)
    const qs = new URLSearchParams()
    if (gclid) qs.set('gclid', gclid)
    ;['utm_source','utm_medium','utm_campaign','utm_content','utm_term'].forEach(k => { const v = urlParams.get(k); if (v) qs.set(k, v) })
    return qs.toString() ? `${base}?${qs.toString()}` : base
  }, [])

  return (
    <div className="min-h-screen">

      {/* Yellow hero bar */}
      <div className="bg-dark-card py-8">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <h1 className="font-heading text-3xl md:text-5xl font-black text-white">Get Your Instant Roof Quote</h1>
          <p className="font-paragraph text-lg text-white/70 max-w-2xl mx-auto">Get an accurate estimate in just a few minutes. No phone calls, no sales visit required.</p>
          <div className="flex justify-center">
            <GoogleReviewsBadge />
          </div>
        </div>
      </div>

      {/* Dark content area */}
      <div className="bg-dark-card py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {iframeError && (
            <Card className="mb-8 border-red-400 bg-red-900/20">
              <CardContent className="p-6 text-center">
                <h3 className="font-heading text-lg font-bold text-white mb-2">Quote Calculator Unavailable</h3>
                <p className="font-paragraph text-white/70 mb-4">Please contact us directly.</p>
                <div className="flex gap-4 justify-center">
                  <Button asChild variant="cta"><a href="tel:6478237663"><Phone className="h-4 w-4 mr-2" />(647) 82-EROOF</a></Button>
                  <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-black"><a href="mailto:info@eroof.ca"><Mail className="h-4 w-4 mr-2" />Email Us</a></Button>
                </div>
              </CardContent>
            </Card>
          )}

          {!iframeError && (
            <div className="bg-white rounded-lg overflow-hidden mb-12">
              <iframe src={iframeSrc} width="100%" height="600" style={{ border: 0, display: 'block' }} title="Roofr Instant Estimator — eRoof.ca Hamilton Burlington" />
              <div className="bg-white px-6 py-4 border-t border-gray-100">
                <p className="text-sm text-gray-600 text-center max-w-2xl mx-auto">
                  <strong>eRoof.ca may send you text messages about the estimate you requested</strong> — confirmation, appointment scheduling and reminders, and follow-up about your own project.
                  Message frequency varies. Message and data rates may apply. Reply STOP to opt out at any time, HELP for help.
                  Text messages are optional and are never a condition of purchase.{' '}
                  <Link href="/book" className="underline font-semibold text-black">Prefer to opt in explicitly? Book your visit here.</Link>{' '}
                  See our <Link href="/privacy" className="underline">Privacy Policy</Link> and <Link href="/terms#sms-terms" className="underline">SMS Terms</Link>.
                </p>
              </div>
            </div>
          )}

          {/* Trust cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: Calculator, title: 'Instant Estimates', desc: 'Get accurate pricing in minutes, not days' },
              { icon: Shield, title: 'No Pressure Sales', desc: 'Our quotes speak for themselves' },
              { icon: CheckCircle, title: 'Insured & Certified', desc: 'Fully certified Hamilton roofers' },
            ].map((item, i) => (
              <div key={i} className="text-center p-6 bg-white/10 rounded-lg">
                <item.icon className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="font-heading text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="font-paragraph text-white/60">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center mb-16"><BBBSeal height={92} /></div>

          {/* Legal — full policies live at their own URLs */}
          <div className="border-t border-white/20 pt-12">
            <div className="space-y-4 text-white/70">
              <h2 className="font-heading text-2xl font-black text-white">Your privacy and our SMS program</h2>
              <p className="font-paragraph">
                eRoof.ca (eRoof Inc.) only sends text messages about an estimate or visit you asked us for. Message frequency varies.
                Message and data rates may apply. Reply STOP to opt out at any time, HELP for help. Text messages are optional and never a condition of purchase.
                No mobile information is sold, rented, or shared with third parties or affiliates for marketing purposes.
              </p>
              <p className="font-paragraph">
                Read the full <Link href="/privacy" className="text-secondary hover:underline font-semibold">Privacy Policy</Link> and{' '}
                <Link href="/terms#sms-terms" className="text-secondary hover:underline font-semibold">SMS Terms</Link>.
              </p>
              <div className="pt-2 space-y-1 text-sm">
                <p><strong className="text-white">eRoof.ca</strong> (eRoof Inc.)</p>
                <p>21 King St W, Hamilton, ON L8P 4W7</p>
                <p>Phone: <a href="tel:6478237663" className="text-secondary hover:underline">647-823-7663</a></p>
                <p>Email: <a href="mailto:info@eroof.ca" className="text-secondary hover:underline">info@eroof.ca</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
