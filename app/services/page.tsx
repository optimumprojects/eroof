import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Shield, Clock, CheckCircle, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Roofing Services Hamilton & Burlington | Shingles, Repairs, Gutters',
  description: 'Full-service roofing in Hamilton, Burlington, Ancaster and surrounding areas. Asphalt shingle replacement, repairs, soffits, fascia, skylights, and gutters. CertainTeed ShingleMaster certified.',
  alternates: { canonical: 'https://www.eroof.ca/services' },
}

const services = [
  { id: 'shingles', name: 'Asphalt Shingle Replacement', description: 'Complete roof replacement with high-quality asphalt shingles. Our most popular service offering excellent value, durability, and weather protection for Hamilton homes.', timeline: '1 Day Installation', image: 'https://static.wixstatic.com/media/b690e6_583e75f6299e4c6593b457def92d2852~mv2.png', features: ['Complete tear-off and disposal','Premium asphalt shingles','New underlayment and flashing','Ventilation assessment','Gutter cleaning included'], badge: { label: 'Most Popular', color: 'bg-action-orange text-black' } },
  { id: 'repairs', name: 'Roof Repairs', description: 'Professional roof repairs for leaks, damaged shingles, flashing issues, and storm damage. Emergency repairs available with same-day service.', timeline: 'Same Day - 3 Days', image: 'https://static.wixstatic.com/media/b690e6_ca6de0236e7844608dfb9b87bc621746~mv2.png', features: ['Emergency leak repairs','Shingle replacement','Flashing repair/replacement','Chimney and vent sealing','Storm damage assessment'], badge: { label: 'Emergency Service', color: 'bg-red-500 text-white' } },
  { id: 'skylights', name: 'Skylights', description: 'Professional skylight installation and replacement. Add natural light to your home while maintaining energy efficiency and weather protection.', timeline: '4-6 Hours', image: 'https://static.wixstatic.com/media/b690e6_efe16e5e94b1425289d0291fcbeb7711~mv2.png', features: ['Energy-efficient models','Proper flashing installation','Interior finishing','Ventilation options available','Custom sizing available'] },
  { id: 'ventilation', name: 'Roof Ventilation', description: "Proper roof ventilation systems to improve energy efficiency, prevent ice dams, and extend roof life. Essential for Hamilton's climate.", timeline: '2-4 Hours', image: 'https://static.wixstatic.com/media/b690e6_237655bb10144975874b7ce0632b00e0~mv2.png', features: ['Ridge vent installation','Soffit vent installation','Exhaust fan installation','Ventilation assessment','Energy efficiency improvement'] },
  { id: 'soffits-fascia', name: 'Soffits & Fascia', description: "Professional soffit and fascia installation and repair. Protect your roof edges and improve ventilation while enhancing your home's curb appeal.", timeline: '1-2 Days', image: 'https://static.wixstatic.com/media/b690e6_e8e46bc011f3446ea983fd0100ae7f8f~mv2.png', features: ['Vented and solid soffit options','Aluminum or vinyl fascia boards','Proper ventilation integration','Colour matching to existing trim','Seamless installation'] },
  { id: 'gutters', name: 'Gutter Systems', description: "Professional gutter installation, repair, and cleaning services. Protect your home's foundation and landscaping with proper water management.", timeline: '4-8 Hours', image: 'https://static.wixstatic.com/media/b690e6_e56147e9341d4570a0b0825f5ae0e819~mv2.png', features: ['Seamless aluminum gutters','Downspout installation','Gutter guards available','Proper slope calculation','Colour matching available'] },
]

const benefits = [
  { icon: Star, title: 'Transparent Pricing', description: "No hidden fees or surprise costs. You know exactly what you're paying for." },
  { icon: Shield, title: 'Quality Guarantee', description: 'Licensed, insured, and certified installers with comprehensive warranties.' },
  { icon: Clock, title: 'Fast Installation', description: 'Most projects completed in one day with minimal disruption.' },
  { icon: CheckCircle, title: 'Local Expertise', description: 'Hamilton-based team that understands local weather and building requirements.' },
]

const faqs = [
  { question: 'How accurate are your instant quotes?', answer: 'Our instant quotes are typically within 5-10% of the final price. We use advanced algorithms considering roof size, condition, materials, and local pricing. The final quote is confirmed after our free verification visit.' },
  { question: 'What happens if it rains during installation?', answer: 'We monitor weather closely and will reschedule if heavy rain is expected. If light rain occurs during work, we have tarps and protective measures to keep your home dry.' },
  { question: 'How long do your warranties last?', answer: 'Material warranties range from 15-50 years depending on the product. Our workmanship warranty is 10 years on full replacements and 5 years on repairs.' },
  { question: 'Do you handle insurance claims?', answer: 'Yes, we work directly with insurance companies and can help you navigate the claims process for storm damage or other covered events.' },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <section className="bg-black text-white py-20">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto">
          <h1 className="font-heading text-4xl md:text-5xl font-black mb-6">Professional Roofing Services</h1>
          <p className="font-paragraph text-xl mb-8 text-white/80">Transparent pricing and quality workmanship on every project in Hamilton and Burlington.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="cta"><Link href="/quote">Get A Real Quote Online In Minutes!</Link></Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black"><Link href="/projects">View Our Work</Link></Button>
          </div>
        </div>
      </section>

      {/* Services List - dark cards */}
      <section className="py-20 bg-white">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {services.map((service, index) => (
              <div key={service.id} className={`grid lg:grid-cols-2 rounded-xl overflow-hidden border border-gray-200 ${index % 2 === 1 ? '' : ''}`}>
                <div className={`relative aspect-video lg:aspect-auto min-h-64 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <Image src={service.image} alt={`${service.name} — eRoof.ca Hamilton`} fill className="object-cover" />
                  {service.badge && <span className={`absolute top-4 left-4 ${service.badge.color} text-sm font-bold px-3 py-1 rounded`}>{service.badge.label}</span>}
                </div>
                <div className={`p-8 flex flex-col justify-center bg-dark-card ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <h2 className="font-heading text-2xl md:text-3xl font-black mb-3 text-white">{service.name}</h2>
                  <p className="font-paragraph text-white/70 mb-4">{service.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="bg-white/10 text-white text-sm px-3 py-1 rounded">{service.timeline}</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((f, i) => (
                      <li key={i} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0" />
                        <span className="font-paragraph text-white/80">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant="cta"><Link href="/quote">Get a Quote<ArrowRight className="h-4 w-4 ml-2" /></Link></Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose - TEAL */}
      <section className="py-20 bg-secondary">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-black text-black mb-4">Why GTA Homeowners Choose eRoof.ca</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((b, i) => (
              <div key={i} className="text-center">
                <div className="bg-black/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <b.icon className="h-8 w-8 text-black" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-3 text-black">{b.title}</h3>
                <p className="font-paragraph text-black/70">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands - white */}
      <section className="py-20 bg-white">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-black text-black mb-4">Premium Materials & Trusted Brands</h2>
            <p className="font-paragraph text-xl text-gray-600 max-w-2xl mx-auto">We partner with industry-leading manufacturers to ensure your roof stands up to Hamilton&apos;s weather.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[{name:'IKO',desc:'Premium asphalt shingles'},{name:'CertainTeed',desc:'Trusted roofing materials'},{name:'Gentek',desc:'Premium soffit, fascia & eavestrough'},{name:'VELUX',desc:'World leader in skylights'}].map((brand, i) => (
              <div key={i} className="text-center border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="bg-gray-100 h-20 rounded flex items-center justify-center mb-4">
                  <span className="font-heading text-lg font-bold text-black">{brand.name}</span>
                </div>
                <p className="font-paragraph text-sm text-gray-600">{brand.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ - DARK */}
      <section className="py-20 bg-dark-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-black text-white mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white/10 border border-white/20 rounded-lg p-6">
                <h3 className="font-heading text-lg font-bold text-white mb-3">{faq.question}</h3>
                <p className="font-paragraph text-white/70">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-black mb-4">Ready to Get Started?</h2>
          <p className="font-paragraph text-xl mb-8 max-w-2xl mx-auto text-white/80">Get your instant quote today and join hundreds of satisfied homeowners.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="cta"><Link href="/quote">Get A Real Quote Online In Minutes!<ArrowRight className="h-4 w-4 ml-2" /></Link></Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black"><Link href="/projects">View Recent Projects</Link></Button>
          </div>
        </div>
      </section>

    </div>
  )
}
