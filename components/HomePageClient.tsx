'use client'
import { GoogleReviewsBadge } from '@/components/GoogleReviewsBadge'
import { useMemo, useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  Calculator, Clock, Shield, Star, CheckCircle, MapPin, Phone,
  ArrowRight, Zap, Ban, Calendar, DollarSign, ChevronLeft, ChevronRight
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, Badge } from '@/components/ui/cards'

const services = [
  { name: 'Asphalt Shingle Replacement', description: 'Most popular, 25-year warranty', image: 'https://static.wixstatic.com/media/b690e6_8e72df8dcf424e89ba147a06d3edf066~mv2.png', href: '/services' },
  { name: 'Roof Repairs', description: 'Fix leaks fast, same-week service', image: 'https://static.wixstatic.com/media/b690e6_ddf8f0d4048b4cf089fbd26b7928d3cd~mv2.png', href: '/services' },
  { name: 'Skylights', description: 'Brighten your home naturally', image: 'https://static.wixstatic.com/media/b690e6_1ff4d36a28a9437388df33694f267a48~mv2.png', href: '/services' },
  { name: 'Ventilation', description: 'Reduce energy costs, prevent damage', image: 'https://static.wixstatic.com/media/b690e6_84e9b825de5e4edb9874eb41a5afb24e~mv2.png', href: '/services' },
  { name: 'Soffits & Fascia', description: 'Complete exterior trim protection', image: 'https://static.wixstatic.com/media/b690e6_e8e46bc011f3446ea983fd0100ae7f8f~mv2.png', href: '/services' },
  { name: 'Gutters', description: 'Complete water management solutions', image: 'https://static.wixstatic.com/media/b690e6_e92e86b7227040c78a518badbfcb6d67~mv2.png', href: '/services' },
]

const staticProjects = [
  { url: 'https://drive.google.com/uc?export=view&id=1UgS0pItw_94DHBY7VqVVqeCXHrTphwNe', title: 'Hamilton East Roof Replacement', location: 'Hamilton East', description: 'Full asphalt shingle replacement completed in one day.' },
  { url: 'https://drive.google.com/uc?export=view&id=1ZQM-eCl78A8gDd4-N5sOZFR2_Lcf3w-f', title: 'Ancaster Premium Shingles', location: 'Ancaster', description: 'Premium shingle installation with full cleanup.' },
  { url: 'https://drive.google.com/uc?export=view&id=132f0mqWuDW9GywF4iiweqGRZy7eaAVeL', title: 'Dundas Repair & Skylights', location: 'Dundas', description: 'Roof repair plus skylight installation.' },
]

const valueProps = [
  { icon: Zap, title: 'Instant Online Quotes', description: 'No waiting for callbacks' },
  { icon: Ban, title: 'No High-Pressure Sales', description: 'Ditch the sales pitch & commission reps' },
  { icon: Calendar, title: 'Fast Installation', description: 'Most roofs completed in 1-2 days' },
  { icon: DollarSign, title: 'Transparent Pricing', description: 'No hidden fees or surprises' },
]

const serviceAreas = ['Oakville', 'Mississauga', 'Milton', 'Grimsby', 'Burlington', 'St. Catharines', 'Hamilton', 'Brantford']

export function HomePageClient() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const projectImages = staticProjects

  const iframeSrc = useMemo(() => {
    if (typeof window === 'undefined') return 'https://app.roofr.com/instant-estimator/83a57bb5-2938-4ca6-8743-5221ef74c322/eRoofca'
    const base = 'https://app.roofr.com/instant-estimator/83a57bb5-2938-4ca6-8743-5221ef74c322/eRoofca'
    const urlParams = new URLSearchParams(window.location.search)
    const gclid = urlParams.get('gclid') || localStorage.getItem('gclid') || ''
    if (urlParams.get('gclid')) localStorage.setItem('gclid', urlParams.get('gclid')!)
    const utm_source = urlParams.get('utm_source') || ''
    const utm_medium = urlParams.get('utm_medium') || ''
    const utm_campaign = urlParams.get('utm_campaign') || ''
    const utm_content = urlParams.get('utm_content') || ''
    const utm_term = urlParams.get('utm_term') || ''
    const qs = new URLSearchParams()
    if (gclid) qs.set('gclid', gclid)
    if (utm_source) qs.set('utm_source', utm_source)
    if (utm_medium) qs.set('utm_medium', utm_medium)
    if (utm_campaign) qs.set('utm_campaign', utm_campaign)
    if (utm_content) qs.set('utm_content', utm_content)
    if (utm_term) qs.set('utm_term', utm_term)
    return qs.toString() ? `${base}?${qs.toString()}` : base
  }, [])

  const nextImage = () => setCurrentImageIndex(p => (p + 1) % projectImages.length)
  const prevImage = () => setCurrentImageIndex(p => (p - 1 + projectImages.length) % projectImages.length)

  return (
    <div className="min-h-screen">

      {/* ── Hero ── */}
      <section className="relative bg-gradient-to-br from-dark-blue to-primary min-h-screen flex items-center overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="https://storage.googleapis.com/msgsndr/bW7LdzUa5JS7s6PszwPd/media/695e45010597df1b9c84de0d.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/35" />
        <div className="relative z-10 max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="text-center max-w-4xl mx-auto text-white space-y-8">
            <div className="space-y-4">
              <h1 className="font-heading text-4xl md:text-7xl font-black leading-tight tracking-tight">
                The Easy Way To <br />
                <span className="text-secondary">Buy A Roof</span>
              </h1>
              <p className="font-paragraph text-xl md:text-2xl text-white/90">
                eRoof.ca lets you price, book, and plan your roof online in minutes.
              </p>
            </div>
            <div className="py-12">
              <Button asChild size="lg" variant="cta">
                <Link href="/quote">
                  <Calculator className="size-5" />
                  Get A Real Quote In Minutes!
                </Link>
              </Button>
            </div>
            <p className="font-paragraph text-white text-lg">
              Our certified project managers and local crews handle everything from inspection, installation to final walkthrough.
            </p>
            <div className="inline-flex flex-row justify-center gap-2 sm:gap-4 flex-wrap">
              <Badge><Star className="size-4 mr-2 stroke-secondary" /><span>Hundreds of Roofs Installed</span></Badge>
              <Badge><CheckCircle className="size-4 mr-2 stroke-secondary shrink-0" /><span>Certified Installers</span></Badge>
              <Badge><Shield className="size-4 mr-2 stroke-secondary shrink-0" /><span>Up to 50-Year Warranties</span></Badge>
            </div>
            <GoogleReviewsBadge />
          </div>
        </div>
      </section>

      {/* ── VSL Video ── */}
      <section className="py-16 bg-secondary">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">See Why Homeowners Love eRoof.ca</h2>
            <p className="font-paragraph text-lg text-gray-600 max-w-2xl mx-auto">Watch our introduction to see how we&apos;re changing the roofing experience in Hamilton and Burlington</p>
          </div>
          <div className="relative w-full max-w-4xl mx-auto">
            <div className="relative aspect-video bg-black rounded-lg overflow-hidden shadow-lg">
              <video controls className="w-full h-full" poster="https://storage.googleapis.com/msgsndr/bW7LdzUa5JS7s6PszwPd/media/695d3983b75f6f37624015bc.png">
                <source src="https://storage.googleapis.com/msgsndr/bW7LdzUa5JS7s6PszwPd/media/695d5c1c89c99d7ad312bd83.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
          <div className="text-center mt-12">
            <p className="font-paragraph text-sm font-semibold text-primary mb-3">Ready to get started?</p>
            <Button asChild size="lg" variant="cta">
              <Link href="/quote"><Calculator className="h-5 w-5" />Get A Real Quote In Minutes!</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Value Props ── */}
      <section className="bg-white py-16">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">Why Choose eRoof.ca?</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {valueProps.map((item, i) => (
              <div key={i} className="text-center">
                <div className="bg-black/10 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-6">
                  <item.icon className="h-8 w-8 md:h-10 md:w-10 text-secondary stroke-2" />
                </div>
                <h3 className="font-heading text-sm md:text-xl font-semibold text-black mb-2">{item.title}</h3>
                <p className="font-paragraph text-xs md:text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works Video ── */}
      <section id="how-it-works" className="py-16 bg-white">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">How It Works</h2>
            <p className="font-paragraph text-xl text-gray-600 max-w-2xl mx-auto">From quote to completion in 4 simple steps</p>
          </div>
          <div className="relative w-full max-w-4xl mx-auto">
            <div className="relative aspect-video bg-black rounded-lg overflow-hidden shadow-lg">
              <video controls className="w-full h-full" poster="https://storage.googleapis.com/msgsndr/bW7LdzUa5JS7s6PszwPd/media/695d3983b75f6f37624015bc.png">
                <source src="https://storage.googleapis.com/msgsndr/bW7LdzUa5JS7s6PszwPd/media/695d397da88e870f56baf2d8.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
          <div className="text-center mt-12">
            <p className="font-paragraph text-sm font-semibold text-primary mb-3">Click Below For Your Instant Quote</p>
            <Button asChild size="lg" variant="cta">
              <Link href="/quote"><Calculator className="size-5" />Get A Real Quote In Minutes!</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Instant Estimate iframe ── */}
      <section id="online-booking" className="py-16 bg-secondary">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">Get Your Instant Estimate</h2>
            <p className="font-paragraph text-xl text-gray-600">Use our free online quote tool to get an instant estimate and schedule your roofing project</p>
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-4xl">
              <iframe src={iframeSrc} width="100%" height="600" style={{ border: 0, display: 'block' }} title="Roofr Instant Estimator — eRoof.ca Hamilton Burlington" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section className="bg-white py-16">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">Our Services</h2>
            <p className="font-paragraph text-xl text-gray-600">Complete roofing solutions for every need</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <Link key={i} href={service.href} className="group">
                <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow">
                  <div className="relative aspect-video overflow-hidden">
                    <Image src={service.image} alt={service.name} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-heading text-xl font-semibold text-primary mb-2">{service.name}</h3>
                    <p className="font-paragraph text-gray-600">{service.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Project Gallery ── */}
      <section className="py-20 bg-white">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">Project Gallery</h2>
            <p className="font-paragraph text-xl text-gray-600">See the quality of our work across Hamilton and Burlington</p>
          </div>
          <div className="relative mb-12">
            <Card className="overflow-hidden">
              <div className="relative aspect-video md:aspect-[21/9]">
                <Image src={projectImages[currentImageIndex].url} alt={projectImages[currentImageIndex].title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <span className="inline-flex items-center rounded-full bg-action-orange/90 px-3 py-1 text-sm font-medium text-white mb-3">
                      <MapPin className="h-3 w-3 mr-1" />{projectImages[currentImageIndex].location}
                    </span>
                    <h3 className="font-heading text-2xl md:text-3xl font-bold mb-2">{projectImages[currentImageIndex].title}</h3>
                    <p className="font-paragraph text-white/90">{projectImages[currentImageIndex].description}</p>
                  </div>
                </div>
                <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all" aria-label="Previous project">
                  <ChevronLeft className="h-6 w-6 text-white" />
                </button>
                <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all" aria-label="Next project">
                  <ChevronRight className="h-6 w-6 text-white" />
                </button>
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm">
                  {currentImageIndex + 1} / {projectImages.length}
                </div>
              </div>
            </Card>
          </div>
          <div className="grid grid-cols-3 gap-2 mb-8">
            {projectImages.map((image, index) => (
              <button key={index} onClick={() => setCurrentImageIndex(index)} className={`relative aspect-video rounded-lg overflow-hidden transition-all ${index === currentImageIndex ? 'ring-2 ring-action-orange ring-offset-2' : 'hover:opacity-80'}`}>
                <Image src={image.url} alt={image.title} fill className="object-cover" />
              </button>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Clock, title: 'Fast Installation', desc: 'Most projects completed in 1-3 days', color: 'text-action-orange' },
              { icon: MapPin, title: 'Local Expertise', desc: 'Serving Hamilton, Burlington and surrounding areas', color: 'text-trust-green' },
              { icon: Star, title: 'Quality Guaranteed', desc: 'Licensed, insured, and certified installers', color: 'text-secondary' },
            ].map((stat, i) => (
              <Card key={i}>
                <CardContent className="p-6 text-center">
                  <stat.icon className={`h-12 w-12 ${stat.color} mx-auto mb-4`} />
                  <h3 className="font-heading text-lg font-semibold mb-2 text-primary">{stat.title}</h3>
                  <p className="font-paragraph text-gray-600">{stat.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link href="/projects">View All Projects<ArrowRight className="h-4 w-4 ml-2" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Reviews ── */}
      <section id="reviews" className="py-20 bg-secondary">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">What Our Customers Say</h2>
          </div>
          <div
            className="w-full overflow-hidden"
            dangerouslySetInnerHTML={{
              __html: `<iframe class="lc_reviews_widget" src="https://reputationhub.site/reputation/widgets/review_widget/DhRomlhoBYATrYUQFE8f" frameborder="0" scrolling="no" style="width:100%;height:600px;border:none;display:block;"></iframe>`
            }}
          />
        </div>
      </section>

      {/* ── Service Area ── */}
      <section className="py-20 bg-white">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-6">Serving the GTA & Golden Horseshoe</h2>
              <p className="font-paragraph text-xl text-gray-600 mb-8">We proudly serve customers across the GTA and Golden Horseshoe, extending west of Toronto to St. Catharines.</p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {serviceAreas.map(area => (
                  <div key={area} className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-primary-foreground" />
                    <span className="font-paragraph">{area}</span>
                  </div>
                ))}
              </div>
              <Button asChild variant="outline" size="lg">
                <Link href="/services">See all services<ArrowRight className="h-4 w-4 ml-2" /></Link>
              </Button>
            </div>
            <div className="relative">
              <Image
                src="https://static.wixstatic.com/media/b690e6_d3e962b4973a43b688fe4dcaa56b701d~mv2.png"
                alt="eRoof.ca service area map — Hamilton, Burlington and surrounding GTA communities"
                width={600}
                height={400}
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-20 bg-gradient-to-r from-primary to-dark-blue text-white">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Ready for a Hassle-Free Roofing Experience?</h2>
          <p className="font-paragraph text-xl mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied Hamilton homeowners who chose the modern way to get a new roof.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" variant="cta">
              <Link href="/quote"><Calculator className="size-5" />Get A Real Quote In Minutes!</Link>
            </Button>
            <span className="font-paragraph text-white/80">or</span>
            <a href="tel:6478237663" className="flex items-center space-x-2 text-white hover:text-primary-foreground transition-colors">
              <Phone className="h-5 w-5" />
              <span className="font-paragraph text-lg font-semibold">Call (647) 82-EROOF</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}
