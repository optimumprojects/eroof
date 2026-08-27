'use client'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail } from 'lucide-react'
import { BBBSeal } from '@/components/BBBSeal'

export function Footer() {
  return (
    <footer className="bg-black text-secondary">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Image src="/media/b690e6_463649724ea14c39b1b440d4fd4a5282~mv2.png" alt="eRoof.ca" width={120} height={40} className="h-10 w-auto" />
            <p className="font-paragraph text-sm text-white/70">Hamilton and Burlington&apos;s modern roofing company. Instant quotes, no pressure sales, professional installation.</p>
            <a href="tel:6478237663" onClick={() => { window.dataLayer = window.dataLayer || []; window.dataLayer.push({ event: 'click_phone', clicked_phone: '(647) 82-EROOF', site_section: 'footer' }); }} className="flex items-center space-x-2 hover:text-white transition-colors"><Phone className="h-4 w-4" /><span className="font-paragraph font-semibold">(647) 82-EROOF</span></a>
            <a href="mailto:info@eroof.ca" onClick={() => { window.dataLayer = window.dataLayer || []; window.dataLayer.push({ event: 'click_email', clicked_email: 'info@eroof.ca', site_section: 'footer' }); }} className="flex items-center space-x-2 hover:text-white transition-colors"><Mail className="h-4 w-4" /><span className="font-paragraph font-semibold">info@eroof.ca</span></a>
            <BBBSeal height={72} className="inline-block pt-1" />
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-2 font-paragraph text-sm text-white/70">
              {['Asphalt Shingle Replacement','Roof Repairs','Soffits & Fascia','Skylights','Ventilation','Gutters'].map(s => (
                <li key={s}><Link href="/services" onClick={() => { window.dataLayer = window.dataLayer || []; window.dataLayer.push({ event: 'footer_navigation', footer_section: s }); }} className="hover:text-secondary transition-colors">{s}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4 text-white">Service Areas</h3>
            <ul className="space-y-2 font-paragraph text-sm text-white/70">
              {['Hamilton','Ancaster','Dundas','Stoney Creek','Waterdown','Burlington','Brantford','Grimsby'].map(a => <li key={a}>{a}</li>)}
            </ul>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2 font-paragraph text-sm text-white/70">
              {[{label:'Get Instant Quote',href:'/quote'},{label:'Recent Projects',href:'/projects'},{label:'Blog',href:'/blog'},{label:'About Us',href:'/about'},{label:'Services',href:'/services'}].map(l => (
                <li key={l.label}><Link href={l.href} onClick={() => { window.dataLayer = window.dataLayer || []; window.dataLayer.push({ event: 'footer_navigation', footer_section: l.label }); if (l.href === '/quote') { window.dataLayer.push({ event: 'cta_quote', site_section: 'footer', site_sub_section: 'footer' }); } }} className="hover:text-secondary transition-colors">{l.label}</Link></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-white/20 mt-8 pt-8 text-center space-y-3">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-paragraph text-sm text-white/60">
            <Link href="/privacy" className="hover:text-secondary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-secondary transition-colors">Terms of Service</Link>
            <Link href="/terms#sms-terms" className="hover:text-secondary transition-colors">SMS Terms</Link>
            <Link href="/book" className="hover:text-secondary transition-colors">Book a Visit</Link>
          </div>
          <p className="font-paragraph text-sm text-white/40">© 2026 eRoof.ca (eRoof Inc.) — Serving since 2025. All rights reserved.</p>
          <p className="font-paragraph text-xs text-white/30">21 King St W, Hamilton, ON L8P 4W7 · No mobile information is sold or shared with third parties for marketing.</p>
        </div>
      </div>
    </footer>
  )
}
