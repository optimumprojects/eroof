'use client'
import { useMemo, useState } from 'react'
import { Calculator, Shield, CheckCircle, Phone, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/cards'
import { GoogleReviewsBadge } from '@/components/GoogleReviewsBadge'

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
                  <strong>By submitting your address or quote request, you agree to receive text messages from eRoof.ca. Message and data rates may apply. Reply STOP to unsubscribe at any time.</strong>
                </p>
              </div>
            </div>
          )}

          {/* Trust cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: Calculator, title: 'Instant Estimates', desc: 'Get accurate pricing in minutes, not days' },
              { icon: Shield, title: 'No Pressure Sales', desc: 'Our quotes speak for themselves' },
              { icon: CheckCircle, title: 'Licensed & Insured', desc: 'Fully certified Hamilton roofers' },
            ].map((item, i) => (
              <div key={i} className="text-center p-6 bg-white/10 rounded-lg">
                <item.icon className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="font-heading text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="font-paragraph text-white/60">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Privacy Policy */}
          <div className="border-t border-white/20 pt-12">
            <div className="space-y-6 text-white/70">
              <div>
                <h2 className="font-heading text-2xl font-black text-white mb-1">eRoof.ca Privacy Policy</h2>
                <p className="text-sm text-white/40">Last updated: January 30, 2026</p>
              </div>
              {[
                { title: '1. Who We Are', body: 'This Privacy Policy explains how eRoof.ca ("eRoof," "we," "us," "our") collects, uses, and protects your personal information when you visit eroof.ca, use our online estimator, request an inspection, or communicate with us. By using our website or services, you agree to this Privacy Policy.' },
                { title: '4. SMS Communications', body: 'By providing your phone number and opting in, you consent to receive SMS messages from eRoof about your estimate, inspection, scheduling, or project. Reply STOP to opt out at any time. Message and data rates may apply. We do not sell your phone number or share mobile information with third parties for marketing.' },
                { title: '5. Sharing and Disclosure', body: 'We may share your information with trusted service providers only as needed to operate our business. We do not sell or rent your personal information to third parties.' },
                { title: '13. Contact Us', body: '' },
              ].map((s, i) => (
                <div key={i}>
                  <h3 className="font-heading text-lg font-bold text-white mb-2">{s.title}</h3>
                  {s.body ? <p className="font-paragraph">{s.body}</p> : (
                    <div className="space-y-1">
                      <p><strong className="text-white">eRoof.ca</strong> (eRoof Inc.)</p>
                      <p>21 King St W, Hamilton, ON L8P 4W7</p>
                      <p>Phone: <a href="tel:6478237663" className="text-secondary hover:underline">647-823-7663</a></p>
                      <p>Email: <a href="mailto:info@eroof.ca" className="text-secondary hover:underline">info@eroof.ca</a></p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
