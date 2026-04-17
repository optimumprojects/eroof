import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Shield, Users, Award, MapPin, Phone, Mail, ArrowRight, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/cards'

export const metadata: Metadata = {
  title: 'About Us | No-Pressure Roofing Hamilton & Burlington',
  description: "Meet Erick and Greg — 20+ years of roofing experience behind a better model. No commission salespeople. No surprises. Transparent pricing and certified craftsmanship in Hamilton and Burlington.",
  alternates: { canonical: 'https://www.eroof.ca/about' },
}

const values = [
  { icon: Shield, title: 'Transparency', description: 'No hidden fees, no surprise costs. You know exactly what you\'re paying for before we start.' },
  { icon: Users, title: 'No Pressure', description: 'Our quotes speak for themselves. No high-pressure sales tactics or pushy follow-ups.' },
  { icon: Award, title: 'Quality First', description: 'Licensed, insured, and certified installers using premium materials with comprehensive warranties.' },
  { icon: MapPin, title: 'Local Commitment', description: 'Hamilton-based and Hamilton-focused. We\'re your neighbours, not a faceless corporation.' },
]
const certifications = [
  { name: 'CertainTeed ShingleMaster Accredited', description: 'Master Craftsman Installer' },
  { name: 'IKO ROOFPRO Advantage Installers', description: 'Professional certification program' },
  { name: 'WSIB Coverage', description: 'Full workplace safety insurance' },
  { name: 'Licensed & Certified', description: 'Fully licensed roofing contractor' },
]
const promises = ['Instant, accurate online quotes','No high-pressure sales tactics','Transparent, upfront pricing','Professional, timely installation','Complete cleanup and debris removal','10-year workmanship warranty']
const donts = ['Door-to-door sales visits','High-pressure follow-up calls','Hidden fees or surprise costs','Subcontract to unlicensed workers','Leave messes behind','Disappear after installation']
const serviceAreas = ['Oakville','Mississauga','Milton','Grimsby','Burlington','St. Catharines','Hamilton','Brantford']


export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-black text-white py-20">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-heading text-4xl md:text-5xl font-black mb-6">Revolutionizing Roofing in The GTA</h1>
              <p className="font-paragraph text-xl mb-8 text-white/80">We&apos;re changing how homeowners buy roofing services — making it as easy as shopping online, with transparent pricing and zero pressure sales.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" variant="cta"><Link href="/quote">Get A Real Quote Online In Minutes!</Link></Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black"><Link href="/projects">See Our Work</Link></Button>
              </div>
            </div>
            <div>
              <Image src="https://static.wixstatic.com/media/b690e6_9c0995b03c26486c9377bfdab4f665bf~mv2.png" alt="eRoof.ca team working on a Hamilton home roof replacement" width={600} height={467} className="rounded-lg shadow-2xl w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-black text-black mb-6">Our Story</h2>
          </div>
          <div className="space-y-8 font-paragraph text-lg text-gray-700 leading-relaxed">
            <p>At eRoof.ca, we set out to change the way Hamilton homeowners experience roofing. With over 30 years of combined experience in the roofing and home improvement industry, we were frustrated by the outdated practices that defined the market — high-pressure sales tactics, hidden fees, and confusing quotes that left homeowners feeling stressed and misled.</p>
            <p>As homeowners ourselves, we know how stressful it can be: multiple salespeople showing up unannounced, inconsistent pricing with little explanation, and constant follow-up calls that feel more like buying a used car than protecting your home.</p>
            <p>That&apos;s why we launched eRoof.ca with one clear mission: to make roof replacement in Hamilton and the surrounding communities transparent, efficient, and hassle-free. With instant online quotes, clear upfront pricing, and zero high-pressure sales, we deliver the stress-free experience homeowners deserve.</p>
            <p>Every project is backed by professional installation, superior materials, and a process designed around your schedule and peace of mind. Today, eRoof.ca is proud to be Hamilton&apos;s first truly modern roofing company.</p>
          </div>
        </div>
      </section>

      {/* Values - TEAL bg */}
      <section className="py-20 bg-secondary">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-black text-black mb-4">What We Stand For</h2>
            <p className="font-paragraph text-xl text-black/70 max-w-2xl mx-auto">Our values guide every interaction and decision we make.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <div key={i} className="text-center">
                <div className="bg-black/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-black" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-3 text-black">{value.title}</h3>
                <p className="font-paragraph text-black/70">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Licensed - DARK bg */}
      <section className="py-20 bg-dark-card">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-black text-white mb-4">Licensed & Certified</h2>
            <p className="font-paragraph text-xl text-white/70 max-w-2xl mx-auto">We maintain the highest industry standards and partner with leading manufacturers.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {certifications.map((cert, i) => (
              <div key={i} className="bg-white/10 rounded-lg p-6 border border-white/20">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-heading font-semibold mb-1 text-white">{cert.name}</h3>
                    <p className="font-paragraph text-sm text-white/60">{cert.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <h3 className="font-heading text-2xl font-bold text-center mb-8 text-white">Trusted Brand Partners</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['CertainTeed','IKO','Gentek','VELUX'].map(brand => (
              <div key={brand} className="bg-white rounded-lg p-6 text-center">
                <div className="font-heading text-xl font-bold text-black">{brand}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promise */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-black text-black mb-6">Our Promise to You</h2>
          </div>
          <div className="bg-gray-50 rounded-lg p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="font-heading text-xl font-bold text-black">What We Promise:</h3>
                <ul className="space-y-3">
                  {promises.map((p, i) => (
                    <li key={i} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-trust-green flex-shrink-0" />
                      <span className="font-paragraph text-gray-700">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="font-heading text-xl font-bold text-black">What We Don&apos;t Do:</h3>
                <ul className="space-y-3">
                  {donts.map((d, i) => (
                    <li key={i} className="flex items-center space-x-2">
                      <div className="w-4 h-4 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0"><span className="text-white text-xs font-bold">✕</span></div>
                      <span className="font-paragraph text-gray-700">{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area - TEAL bg */}
      <section className="py-20 bg-secondary">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-black text-black mb-6">Serving the GTA & Golden Horseshoe</h2>
              <p className="font-paragraph text-xl text-black/70 mb-8">We proudly serve customers in the GTA and Golden Horseshoe, extending west of Toronto to St. Catharines.</p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {serviceAreas.map(area => (
                  <div key={area} className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-black" />
                    <span className="font-paragraph text-black">{area}</span>
                  </div>
                ))}
              </div>
              <Button asChild variant="default" size="lg" className="bg-black text-white hover:bg-black/80">
                <Link href="/services">Check our services<ArrowRight className="h-4 w-4 ml-2" /></Link>
              </Button>
            </div>
            <div>
              <Image src="https://static.wixstatic.com/media/b690e6_d3e962b4973a43b688fe4dcaa56b701d~mv2.png" alt="eRoof.ca service area map" width={600} height={400} className="rounded-lg shadow-lg w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-black text-black mb-4">Get in Touch</h2>
            <p className="font-paragraph text-xl text-gray-600">Ready to experience the eRoof.ca difference?</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Phone, title: 'Call Us', desc: 'Speak with our team directly', cta: <a href="tel:6478237663" className="font-semibold text-black hover:underline">(647) 82-EROOF</a> },
              { icon: Mail, title: 'Email Us', desc: 'Send us your questions', cta: <a href="mailto:info@eroof.ca" className="font-semibold text-black hover:underline">info@eroof.ca</a> },
              { icon: Shield, title: 'Get a Quote', desc: 'Instant online pricing', cta: <Button asChild variant="cta"><Link href="/quote">Start Here</Link></Button> },
            ].map((item, i) => (
              <div key={i} className="text-center p-8 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                <item.icon className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="font-heading text-lg font-bold mb-2 text-black">{item.title}</h3>
                <p className="font-paragraph mb-4 text-gray-600">{item.desc}</p>
                {item.cta}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-black mb-4">Experience the eRoof.ca Difference</h2>
          <p className="font-paragraph text-xl mb-8 max-w-2xl mx-auto text-white/80">Join hundreds of satisfied homeowners who chose the modern, hassle-free way to get a new roof.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="cta"><Link href="/quote">Get A Real Quote Online In Minutes!<ArrowRight className="h-4 w-4 ml-2" /></Link></Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black"><Link href="/projects">See Our Recent Work</Link></Button>
          </div>
          <p className="font-paragraph text-sm text-white/40 mt-6">Transparent pricing · No pressure sales · Professional installation · 10-year warranty</p>
        </div>
      </section>

    </div>
  )
}
