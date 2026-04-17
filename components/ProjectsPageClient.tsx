'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Clock, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/cards'

const BASE = 'https://static.wixstatic.com/media/'

const projectImages = [
  { url: BASE + 'b690e6_a5780f7f975a4315a239e42b4545f307~mv2.jpg', title: 'Oakville Executive Home', location: 'Oakville' },
  { url: BASE + 'b690e6_36d200d177f24384a5b2093a38db657b~mv2.jpg', title: 'Oakville Executive Home — Detail', location: 'Oakville' },
  { url: BASE + 'b690e6_2b48f7e8e063463ea36fe750117fd56f~mv2.jpg', title: 'Carlisle Custom Home', location: 'Carlisle' },
  { url: BASE + 'b690e6_7aae055b86aa4e31a322142b52e8fbca~mv2.jpg', title: 'Carlisle Custom Home — Rear', location: 'Carlisle' },
  { url: BASE + 'b690e6_995479546ce8402e852ff7776c5006bf~mv2.jpg', title: 'Black Bull Tavern', location: 'Hamilton' },
  { url: BASE + 'b690e6_13563e43018f47c0a0f460979da7881d~mv2.jpg', title: 'Black Bull Tavern — Complete', location: 'Hamilton' },
  { url: BASE + 'b690e6_00d7cf02d6434126983adf90c7295bbb~mv2.jpg', title: 'Georgetown Custom Home', location: 'Georgetown' },
  { url: BASE + 'b690e6_a84ffa83de1d4b0287a0a9f473c20a46~mv2.jpg', title: 'St. Catharines Home', location: 'St. Catharines' },
  { url: BASE + 'b690e6_3a5ae7c711c146a0aad1bf7f7e4a8371~mv2.jpg', title: 'Hamilton Home', location: 'Hamilton' },
  { url: BASE + 'b690e6_dd6a1fe6747c431da40932accc8cc62a~mv2.jpg', title: 'Townhouse Block', location: 'Burlington' },
  { url: BASE + 'b690e6_bafa7404aa074e9e8f55b0daf292d4c9~mv2.jpg', title: 'Commercial Flat Roof', location: 'Hamilton' },
  { url: BASE + 'b690e6_09fefe8f0b8348df87eb9f3f5b54286a~mv2.jpg', title: 'Commercial Flat Roof — Skylight', location: 'Hamilton' },
]

const stats = [
  { label: 'Projects Completed', value: '500+' },
  { label: 'Average Timeline', value: '1-3 Days' },
  { label: 'Customer Satisfaction', value: '5.0★' },
  { label: 'Warranty Coverage', value: 'Up to 50 Year' },
]

const processSteps = [
  { step: '1', title: 'Instant Quote', description: 'Get your ballpark price online in 60 seconds', icon: '💻' },
  { step: '2', title: 'Verification Visit', description: '15-minute assessment to confirm details', icon: '🔍' },
  { step: '3', title: 'Schedule & Prepare', description: 'Book your date and prepare materials', icon: '📅' },
  { step: '4', title: 'Professional Installation', description: 'Expert installation with cleanup included', icon: '🏠' },
]

export function ProjectsPageClient() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const next = () => setCurrentIndex(p => (p + 1) % projectImages.length)
  const prev = () => setCurrentIndex(p => (p - 1 + projectImages.length) % projectImages.length)
  const THUMB_COLS = 6

  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <section className="bg-black text-white py-20">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto">
          <h1 className="font-heading text-4xl md:text-5xl font-black mb-6">Recent Roofing Projects</h1>
          <p className="font-paragraph text-xl mb-12 text-white/80">See the quality of our work across Hamilton, Burlington, Oakville and the Golden Horseshoe.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="font-heading text-3xl font-black text-action-orange mb-2">{stat.value}</div>
                <div className="font-paragraph text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery header */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-2xl font-black text-black mb-2">Our Past Projects Gallery</h2>
          <p className="font-paragraph text-gray-600">Browse completed roofing projects across Hamilton and surrounding areas</p>
        </div>
      </section>

      {/* Carousel */}
      <section className="py-12 bg-white">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative mb-6">
            <Card className="overflow-hidden">
              <div className="relative aspect-video md:aspect-[21/9]">
                <Image src={projectImages[currentIndex].url} alt={projectImages[currentIndex].title} fill className="object-cover" unoptimized />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <span className="inline-flex items-center bg-action-orange text-black text-sm font-bold px-3 py-1 rounded mb-3">
                      <MapPin className="h-3 w-3 mr-1" />{projectImages[currentIndex].location}
                    </span>
                    <h3 className="font-heading text-2xl md:text-3xl font-black">{projectImages[currentIndex].title}</h3>
                  </div>
                </div>
                <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all" aria-label="Previous"><ChevronLeft className="h-6 w-6 text-white" /></button>
                <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all" aria-label="Next"><ChevronRight className="h-6 w-6 text-white" /></button>
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm">{currentIndex + 1} / {projectImages.length}</div>
              </div>
            </Card>
          </div>

          {/* Thumbnails */}
          <div className="grid grid-cols-6 gap-2 mb-12">
            {projectImages.map((img, i) => (
              <button key={i} onClick={() => setCurrentIndex(i)} className={`relative aspect-video rounded overflow-hidden transition-all ${i === currentIndex ? 'ring-2 ring-action-orange ring-offset-1' : 'hover:opacity-80'}`}>
                <Image src={img.url} alt={img.title} fill className="object-cover" unoptimized />
                {i === currentIndex && <div className="absolute inset-0 bg-action-orange/20" />}
              </button>
            ))}
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Clock, title: 'Fast Installation', desc: 'Most projects completed in 1-3 days', color: 'text-action-orange' },
              { icon: MapPin, title: 'Local Expertise', desc: 'Serving Hamilton, Burlington and surrounding areas', color: 'text-secondary' },
            ].map((item, i) => (
              <Card key={i}>
                <CardContent className="p-6 text-center">
                  <item.icon className={`h-12 w-12 ${item.color} mx-auto mb-4`} />
                  <h3 className="font-heading text-lg font-bold mb-2 text-black">{item.title}</h3>
                  <p className="font-paragraph text-gray-600">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
            <Card>
              <CardContent className="p-6 text-center">
                <div className="h-12 w-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-black text-lg font-black">5★</span>
                </div>
                <h3 className="font-heading text-lg font-bold mb-2 text-black">Quality Guaranteed</h3>
                <p className="font-paragraph text-gray-600">Licensed, insured, and certified installers</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process - TEAL */}
      <section className="py-20 bg-secondary">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-black text-black mb-4">Our Project Process</h2>
            <p className="font-paragraph text-xl text-black/70 max-w-2xl mx-auto">Every project follows our proven process for quality results.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <div key={i} className="text-center bg-white/20 rounded-lg p-8">
                <div className="text-4xl mb-4">{step.icon}</div>
                <div className="font-heading text-2xl font-black text-action-orange mb-2">{step.step}</div>
                <h3 className="font-heading text-lg font-bold mb-2 text-black">{step.title}</h3>
                <p className="font-paragraph text-black/70">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-black mb-4">Ready to Start Your Project?</h2>
          <p className="font-paragraph text-xl mb-8 max-w-2xl mx-auto text-white/80">Join our growing list of satisfied customers.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="cta"><Link href="/quote">Get A Real Quote Online In Minutes!<ArrowRight className="h-4 w-4 ml-2" /></Link></Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black"><Link href="/services">View Our Services</Link></Button>
          </div>
          <p className="font-paragraph text-sm text-white/40 mt-6">Most quotes approved same day · No pressure sales · Up to 50-year warranty</p>
        </div>
      </section>
    </div>
  )
}
