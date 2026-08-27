'use client'
import { useState } from 'react'
import Link from 'next/link'
import { CheckCircle, AlertCircle } from 'lucide-react'

type Status = 'idle' | 'sending' | 'done' | 'error'

// GHL inbound webhook (eRoof sub-account). Public by design — this is a NEXT_PUBLIC value either way.
const WEBHOOK =
  process.env.NEXT_PUBLIC_GHL_INBOUND_WEBHOOK ||
  'https://services.leadconnectorhq.com/hooks/bW7LdzUa5JS7s6PszwPd/webhook-trigger/71ba0bef-3f91-4ba7-86ff-1eaffbab9109'

const SMS_CONSENT_TEXT =
  'I agree to receive text messages from eRoof.ca about my estimate and appointment. Message frequency varies. Message and data rates may apply. Reply STOP to opt out, HELP for help.'
const MARKETING_CONSENT_TEXT =
  'I would also like to receive occasional seasonal roofing tips and offers from eRoof.ca by text.'

export function BookVisitForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [smsConsent, setSmsConsent] = useState(false) // unchecked by default — A2P requirement
  const [marketingConsent, setMarketingConsent] = useState(false) // separate + unchecked — unbundled consent (A2P 30913)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    const fd = new FormData(e.currentTarget)
    const payload = {
      first_name: fd.get('first_name'),
      last_name: fd.get('last_name'),
      email: fd.get('email'),
      phone: fd.get('phone'),
      address: fd.get('address'),
      city: fd.get('city'),
      postal_code: fd.get('postal_code'),
      project_details: fd.get('project_details'),
      sms_consent: smsConsent,
      sms_consent_text: smsConsent ? SMS_CONSENT_TEXT : '',
      sms_consent_at: smsConsent ? new Date().toISOString() : '',
      marketing_consent: marketingConsent,
      marketing_consent_text: marketingConsent ? MARKETING_CONSENT_TEXT : '',
      marketing_consent_at: marketingConsent ? new Date().toISOString() : '',
      source: 'eroof.ca/book',
    }
    try {
      const res = await fetch(WEBHOOK, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error('bad response')
      window.dataLayer = window.dataLayer || []
      window.dataLayer.push({ event: 'book_visit_submit', sms_consent: smsConsent, marketing_consent: marketingConsent })
      setStatus('done')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'done') {
    return (
      <div className="bg-white rounded-lg p-8 text-center border border-gray-200">
        <CheckCircle className="h-12 w-12 text-trust-green mx-auto mb-4" />
        <h3 className="font-heading text-2xl font-bold text-black mb-2">Request received</h3>
        <p className="font-paragraph text-gray-700">Thanks — we&apos;ll be in touch shortly to confirm your Roof Verification &amp; Education Visit. If it&apos;s urgent, call us at <a href="tel:6478237663" className="underline">647-823-7663</a>.</p>
      </div>
    )
  }

  const inputCls = 'w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary font-paragraph text-black'

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg p-6 md:p-8 border border-gray-200 space-y-5">
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="first_name" className="block font-paragraph text-sm font-semibold text-black mb-1">First name *</label>
          <input id="first_name" name="first_name" required className={inputCls} />
        </div>
        <div>
          <label htmlFor="last_name" className="block font-paragraph text-sm font-semibold text-black mb-1">Last name *</label>
          <input id="last_name" name="last_name" required className={inputCls} />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className="block font-paragraph text-sm font-semibold text-black mb-1">Email *</label>
          <input id="email" name="email" type="email" required className={inputCls} />
        </div>
        <div>
          <label htmlFor="phone" className="block font-paragraph text-sm font-semibold text-black mb-1">Phone *</label>
          <input id="phone" name="phone" type="tel" required placeholder="905-555-0123" className={inputCls} />
        </div>
      </div>

      <div>
        <label htmlFor="address" className="block font-paragraph text-sm font-semibold text-black mb-1">Property address *</label>
        <input id="address" name="address" required className={inputCls} />
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="city" className="block font-paragraph text-sm font-semibold text-black mb-1">City *</label>
          <input id="city" name="city" required className={inputCls} />
        </div>
        <div>
          <label htmlFor="postal_code" className="block font-paragraph text-sm font-semibold text-black mb-1">Postal code</label>
          <input id="postal_code" name="postal_code" className={inputCls} />
        </div>
      </div>

      <div>
        <label htmlFor="project_details" className="block font-paragraph text-sm font-semibold text-black mb-1">Tell us about your roof (optional)</label>
        <textarea id="project_details" name="project_details" rows={3} className={inputCls} />
      </div>

      {/* ── SMS CONSENT — unchecked by default, optional, all four disclosures adjacent ── */}
      <div className="bg-gray-50 border border-gray-300 rounded-lg p-5">
        <div className="flex items-start gap-3">
          <input
            id="sms_consent"
            name="sms_consent"
            type="checkbox"
            checked={smsConsent}
            onChange={e => setSmsConsent(e.target.checked)}
            className="mt-1 h-5 w-5 shrink-0 accent-black cursor-pointer"
          />
          <label htmlFor="sms_consent" className="font-paragraph text-sm text-gray-800 cursor-pointer">
            <span className="font-semibold text-black">I agree to receive text messages from eRoof.ca about my estimate and appointment.</span>{' '}
            Message frequency varies. Message and data rates may apply. Reply STOP to opt out at any time, HELP for help.
            See our <Link href="/privacy" className="underline">Privacy Policy</Link> and <Link href="/terms#sms-terms" className="underline">SMS Terms</Link>.
          </label>
        </div>
        <p className="font-paragraph text-xs text-gray-600 mt-3 md:pl-8">
          This box is optional and unchecked by default. Consent to receive text messages is not a condition of any purchase.
          You can submit this form and get your estimate without agreeing to text messages.
        </p>

        {/* Separate, independent consent for promotional messages — never bundled with the above (A2P 30913) */}
        <div className="mt-5 pt-5 border-t border-gray-300">
          <div className="flex items-start gap-3">
            <input
              id="marketing_consent"
              name="marketing_consent"
              type="checkbox"
              checked={marketingConsent}
              onChange={e => setMarketingConsent(e.target.checked)}
              className="mt-1 h-5 w-5 shrink-0 accent-black cursor-pointer"
            />
            <label htmlFor="marketing_consent" className="font-paragraph text-sm text-gray-800 cursor-pointer">
              <span className="font-semibold text-black">Optional:</span> I&apos;d also like occasional seasonal roofing tips and offers by text.
              Separate from the above — you can say yes to one and no to the other. Message frequency varies. Message and data rates may apply. Reply STOP to opt out, HELP for help.
            </label>
          </div>
        </div>
      </div>

      {status === 'error' && (
        <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-lg p-4">
          <AlertCircle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
          <p className="font-paragraph text-sm text-red-800">
            Sorry — we couldn&apos;t submit that. Please call <a href="tel:6478237663" className="underline font-semibold">647-823-7663</a> or email <a href="mailto:info@eroof.ca" className="underline font-semibold">info@eroof.ca</a> and we&apos;ll get you booked.
          </p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full bg-action-orange text-black font-heading font-bold text-lg py-4 rounded hover:opacity-90 transition-opacity disabled:opacity-60"
      >
        {status === 'sending' ? 'Sending…' : 'Request My Visit'}
      </button>

      <p className="font-paragraph text-xs text-gray-500 text-center">
        By submitting this form you agree to our <Link href="/terms" className="underline">Terms of Service</Link> and <Link href="/privacy" className="underline">Privacy Policy</Link>.
      </p>
    </form>
  )
}
