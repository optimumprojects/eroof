import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy | eRoof.ca',
  description: 'How eRoof Inc. collects, uses, and protects your personal information, including our SMS messaging program.',
  alternates: { canonical: 'https://www.eroof.ca/privacy' },
}

const sections = [
  { title: '1. Who We Are', body: 'This Privacy Policy explains how eRoof.ca ("eRoof," "we," "us," "our"), operated by eRoof Inc., collects, uses, and protects your personal information when you visit eroof.ca, use our online estimator, request a Roof Verification & Education Visit, or communicate with us. By using our website or services, you agree to this Privacy Policy.' },
  { title: '2. Information We Collect', body: 'We collect information you provide directly, such as your name, email address, phone number, home address, and project details when you request a quote or book a visit. We also collect usage data automatically, including IP address, browser type, and pages visited, to improve our website and services.' },
  { title: '3. How We Use Your Information', body: 'We use your personal information to provide and improve our services, including generating roof estimates, scheduling visits, communicating about your project, and sending relevant updates. We may also use your information for internal analytics to improve our website experience.' },
  { title: '4. SMS Communications', body: 'If you provide your phone number and give express consent by ticking the SMS consent checkbox on our forms, you consent to receive text messages from eRoof.ca relating to the estimate or visit you requested. This includes confirmation of your request, appointment scheduling and reminders, and follow-up about your own project. Message frequency varies. Message and data rates may apply. Reply STOP to opt out at any time, or HELP for help. Consent to receive text messages is not a condition of purchase, and you can request and receive your estimate without opting in to SMS.' },
  { title: '5. Mobile Information and Third Parties', body: 'No mobile information will be sold, rented, or shared with third parties or affiliates for marketing or promotional purposes. Mobile opt-in data and consent are never shared with any third party for marketing. Information may be shared only with service providers who help us operate our business and deliver the messages you asked for, and who are bound to protect it.' },
  { title: '6. Sharing and Disclosure', body: 'We may share your information with trusted service providers only as needed to operate our business. We do not sell or rent your personal information to third parties.' },
  { title: '7. Your Choices and Rights', body: 'You may opt out of text messages at any time by replying STOP. You may unsubscribe from email at any time using the link in any message. You may ask us to access, correct, or delete the personal information we hold about you by contacting us using the details below.' },
  { title: '8. Data Security and Retention', body: 'We use reasonable administrative and technical safeguards to protect your information, and retain it only as long as needed for the purposes described here or as required by law.' },
]

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-black text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl md:text-5xl font-black mb-3">Privacy Policy</h1>
          <p className="font-paragraph text-white/60">Last updated: August 27, 2026</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {sections.map((s, i) => (
            <div key={i}>
              <h2 className="font-heading text-xl font-bold text-black mb-2">{s.title}</h2>
              <p className="font-paragraph text-gray-700 leading-relaxed">{s.body}</p>
            </div>
          ))}

          <div>
            <h2 className="font-heading text-xl font-bold text-black mb-2">9. Contact Us</h2>
            <div className="font-paragraph text-gray-700 space-y-1">
              <p><strong>eRoof.ca</strong> (eRoof Inc.)</p>
              <p>21 King St W, Hamilton, ON L8P 4W7, Canada</p>
              <p>Phone: <a href="tel:6478237663" className="text-black underline hover:no-underline">647-823-7663</a></p>
              <p>Email: <a href="mailto:info@eroof.ca" className="text-black underline hover:no-underline">info@eroof.ca</a></p>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <p className="font-paragraph text-sm text-gray-600">
              See also our <Link href="/terms" className="text-black underline hover:no-underline">Terms of Service &amp; SMS Terms</Link>.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
