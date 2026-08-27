import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service & SMS Terms | eRoof.ca',
  description: 'Terms of service for eRoof Inc., including the terms of our SMS messaging program.',
  alternates: { canonical: 'https://www.eroof.ca/terms' },
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-black text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl md:text-5xl font-black mb-3">Terms of Service</h1>
          <p className="font-paragraph text-white/60">Last updated: August 27, 2026</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div>
            <h2 className="font-heading text-xl font-bold text-black mb-2">1. About These Terms</h2>
            <p className="font-paragraph text-gray-700 leading-relaxed">These Terms govern your use of eroof.ca and the services provided by eRoof Inc. (&quot;eRoof&quot;), a residential roofing company based in Hamilton, Ontario, Canada. By using our website, requesting an estimate, or booking a Roof Verification &amp; Education Visit, you agree to these Terms.</p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-black mb-2">2. Estimates and Quotes</h2>
            <p className="font-paragraph text-gray-700 leading-relaxed">Online estimates are preliminary and based on available measurement data. Final pricing is confirmed after a Roof Verification &amp; Education Visit, where we assess the roof and confirm scope. Nothing on this website constitutes a binding offer or a guarantee of price, timeline, or scope.</p>
          </div>

          {/* ── SMS PROGRAM TERMS (A2P) ── */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6" id="sms-terms">
            <h2 className="font-heading text-2xl font-black text-black mb-4">3. SMS Messaging Terms</h2>
            <div className="space-y-4 font-paragraph text-gray-700 leading-relaxed">
              <p><strong>Program description.</strong> eRoof.ca operates a customer care text messaging program. If you give express consent, we send text messages about the roof estimate or visit you requested from us. This includes confirmation of your request, appointment scheduling and reminders for your Roof Verification &amp; Education Visit, and follow-up about your own project. We do not send promotional or marketing text messages, and we never message purchased, rented, or third-party lists.</p>

              <p><strong>How you opt in.</strong> You opt in by ticking the SMS consent checkbox on a form on this website. The checkbox is not ticked by default and is entirely optional. <strong>Consent to receive text messages is not a condition of any purchase or service</strong> — you can request and receive your estimate, and book a visit, without opting in to text messages.</p>

              <p><strong>Message frequency.</strong> Message frequency varies based on your project and the stage it is at. You can expect roughly 2 to 8 messages per month while your estimate or project is active.</p>

              <p><strong>Cost.</strong> Message and data rates may apply. eRoof does not charge for the messages themselves; charges depend on your mobile carrier and plan.</p>

              <p><strong>How to stop.</strong> Reply <strong>STOP</strong> to any message to opt out at any time. You will receive a single confirmation message and then no further texts. You may opt back in by texting <strong>START</strong> or by ticking the consent checkbox again on a form.</p>

              <p><strong>How to get help.</strong> Reply <strong>HELP</strong> to any message, call us at <a href="tel:6478237663" className="text-black underline hover:no-underline">647-823-7663</a>, or email <a href="mailto:info@eroof.ca" className="text-black underline hover:no-underline">info@eroof.ca</a>.</p>

              <p><strong>Carriers.</strong> Mobile carriers are not liable for delayed or undelivered messages. Delivery is subject to carrier and device conditions.</p>

              <p><strong>Privacy.</strong> No mobile information is sold, rented, or shared with third parties or affiliates for marketing or promotional purposes. See our <Link href="/privacy" className="text-black underline hover:no-underline">Privacy Policy</Link>.</p>
            </div>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-black mb-2">4. Email Communications</h2>
            <p className="font-paragraph text-gray-700 leading-relaxed">If you contact us or request an estimate, we may send email relating to your request. Every email includes an unsubscribe link, and we honour unsubscribe requests promptly, consistent with Canada&apos;s Anti-Spam Legislation (CASL).</p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-black mb-2">5. Contact</h2>
            <div className="font-paragraph text-gray-700 space-y-1">
              <p><strong>eRoof.ca</strong> (eRoof Inc.)</p>
              <p>21 King St W, Hamilton, ON L8P 4W7, Canada</p>
              <p>Phone: <a href="tel:6478237663" className="text-black underline hover:no-underline">647-823-7663</a></p>
              <p>Email: <a href="mailto:info@eroof.ca" className="text-black underline hover:no-underline">info@eroof.ca</a></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
