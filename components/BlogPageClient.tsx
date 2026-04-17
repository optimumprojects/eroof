'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, ArrowRight, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/cards'

const posts = [
  { _id:'1', slug:'roof-replacement-cost-hamilton-2026', title:'How Much Does a Roof Replacement Cost in Ontario in 2026?', shortDescription:'Wondering how much a new roof costs in Ontario in 2026? Learn real price ranges, what affects cost, and how to avoid surprises.', featuredImage:'https://static.wixstatic.com/media/b690e6_fcb32723586d4acb80b3b087986a621f~mv2.png', publishDate:'2026-03-01' },
  { _id:'2', slug:'subcontractors-vs-in-house-crews', title:'Subcontractors vs. In-House Crews: Which Construction Model Actually Delivers?', shortDescription:'Explore the pros and cons of subcontractors vs in-house crews in construction — and how eRoof.ca ensures quality and accountability.', featuredImage:'https://static.wixstatic.com/media/b690e6_91e05c774d534b228516728807796ee5~mv2.png', publishDate:'2026-02-15' },
  { _id:'3', slug:'what-makes-a-good-roofing-system', title:"What Makes a Good Roofing System? (It's More Than Just Shingles)", shortDescription:"Learn what actually makes a quality roofing system and why materials, installation, and the details matter more than brand alone.", featuredImage:'https://static.wixstatic.com/media/b690e6_cb7e81395d3f482495d301ce0afc0446~mv2.jpg', publishDate:'2026-01-28' },
  { _id:'4', slug:'the-truth-about-roofing-quotes', title:"The Truth About Roofing Quotes: What Contractors Don't Tell You", shortDescription:"Getting roofing quotes in Ontario? Here's what many contractors won't tell you: hidden costs, vague scopes, and commission tricks.", featuredImage:'https://static.wixstatic.com/media/b690e6_cacebfd7006640f79e29eedf729c0d49~mv2.jpeg', publishDate:'2026-01-20' },
  { _id:'5', slug:'no-roofing-salesperson-needed', title:"Why You Don't Need a Roofing Salesperson Anymore", shortDescription:"Discover how eRoof.ca's innovative online quoting system eliminates high-pressure sales tactics, making your roofing experience stress-free.", featuredImage:'https://static.wixstatic.com/media/b690e6_eac614728c4147dba14150e8cd4bb7b3~mv2.png', publishDate:'2026-01-10' },
  { _id:'6', slug:'eroof-ca-instant-quote-how-it-works', title:"The eRoof.ca Instant Quote: How It Works (and Why It's Changing Roofing)", shortDescription:"Learn how eRoof.ca's revolutionary instant online quote system works, providing you with a transparent roofing estimate in minutes.", featuredImage:'https://static.wixstatic.com/media/b690e6_00f7d888a41d4c4abf3a7884bcf8aacc~mv2.png', publishDate:'2025-12-20' },
  { _id:'7', slug:'why-choose-eroof-ca-unique-approach', title:'Why Choose eRoof.ca? Our Unique Approach', shortDescription:"Discover what makes eRoof.ca different: instant quotes, no-pressure sales, and fast professional installation for Hamilton homeowners.", featuredImage:'https://static.wixstatic.com/media/b690e6_f6b850c1f8174610a3a7e8da0139af39~mv2.png', publishDate:'2025-12-01' },
  { _id:'8', slug:'understanding-roofing-costs-hamilton', title:'Understanding Roofing Costs in Hamilton', shortDescription:"Demystifying roofing costs in Hamilton: understand the factors that influence your new roof's price and how eRoof.ca offers transparent pricing.", featuredImage:'https://static.wixstatic.com/media/b690e6_831032ed490041d587ff90bdecef28cf~mv2.png', publishDate:'2025-11-15' },
  { _id:'9', slug:'roof-replacement-cost-hamilton-2025', title:'How Much Does a Roof Replacement Cost in Hamilton in 2025?', shortDescription:"Understand the factors influencing roof replacement costs in Hamilton for 2025 and how eRoof.ca offers transparent, instant quotes.", featuredImage:'https://static.wixstatic.com/media/b690e6_fcb32723586d4acb80b3b087986a621f~mv2.png', publishDate:'2025-01-14' },
  { _id:'10', slug:'signs-you-need-new-roof', title:'Signs Your Home Needs a New Roof', shortDescription:"Learn the key signs that indicate your Hamilton home might need a new roof, from missing shingles to a sagging roofline.", featuredImage:'https://static.wixstatic.com/media/b690e6_7f82b4802d2a4a7da4b026927874e923~mv2.png', publishDate:'2024-11-01' },
  { _id:'11', slug:'beyond-shingles-other-roofing-services', title:'Beyond Shingles: Exploring Other Roofing Services from eRoof.ca', shortDescription:"Discover eRoof.ca's full range of services beyond shingle replacement, including repairs, skylight installation, ventilation, and more.", featuredImage:'https://static.wixstatic.com/media/b690e6_3a0261d2944342af84c619664c950d1d~mv2.png', publishDate:'2024-10-15' },
  { _id:'12', slug:'seasonal-roof-maintenance-hamilton', title:'Seasonal Roof Maintenance Tips for Hamilton Homeowners', shortDescription:"Keep your roof in top shape year-round with our essential seasonal maintenance tips for Hamilton homeowners.", featuredImage:'https://static.wixstatic.com/media/b690e6_b832f176e4444e419210a46d6321eb80~mv2.png', publishDate:'2024-09-20' },
]

const formatDate = (d: string) => new Date(d).toLocaleDateString('en-CA', { year:'numeric', month:'long', day:'numeric' })

export function BlogPageClient() {
  const [search, setSearch] = useState('')
  const filtered = search ? posts.filter(p => p.title.toLowerCase().includes(search.toLowerCase()) || p.shortDescription.toLowerCase().includes(search.toLowerCase())) : posts
  const featured = filtered[0]
  const rest = filtered.slice(1)

  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <section className="bg-black text-white py-20">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto">
          <h1 className="font-heading text-4xl md:text-5xl font-black mb-6">Roofing Insights & Tips</h1>
          <p className="font-paragraph text-xl mb-8 text-white/80">Expert advice and helpful tips for Hamilton homeowners from the eRoof.ca team.</p>
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white/50" />
            <input type="text" placeholder="Search articles..." value={search} onChange={e => setSearch(e.target.value)} className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 text-white placeholder:text-white/50 rounded focus:outline-none focus:ring-2 focus:ring-secondary" />
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="py-20 bg-white">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <div className="text-center py-16">
              <h2 className="font-heading text-2xl font-black text-black mb-4">No posts found</h2>
              <Button onClick={() => setSearch('')} variant="outline">Clear Search</Button>
            </div>
          ) : (
            <>
              {featured && (
                <div className="mb-16">
                  <h2 className="font-heading text-2xl font-black text-black mb-8">Featured Article</h2>
                  <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="grid lg:grid-cols-2">
                      <div className="relative aspect-video lg:aspect-auto min-h-64">
                        <Image src={featured.featuredImage} alt={featured.title} fill className="object-cover" unoptimized />
                        <span className="absolute top-4 left-4 bg-action-orange text-black text-sm font-bold px-3 py-1 rounded">Featured</span>
                      </div>
                      <div className="p-8 flex flex-col justify-center">
                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                          <Calendar className="h-4 w-4" />{formatDate(featured.publishDate)}
                        </div>
                        <h3 className="font-heading text-2xl md:text-3xl font-black text-black mb-4">{featured.title}</h3>
                        <p className="font-paragraph text-gray-600 mb-6 leading-relaxed">{featured.shortDescription}</p>
                        <Button asChild variant="default" className="w-fit bg-black text-white hover:bg-black/80">
                          <Link href={`/blog/${featured.slug}`}>Read More<ArrowRight className="h-4 w-4 ml-2" /></Link>
                        </Button>
                      </div>
                    </div>
                  </Card>
                </div>
              )}

              {rest.length > 0 && (
                <div>
                  <h2 className="font-heading text-2xl font-black text-black mb-8">Recent Articles</h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {rest.map(post => (
                      <Card key={post._id} className="overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="relative aspect-video overflow-hidden">
                          <Image src={post.featuredImage} alt={post.title} fill className="object-cover" unoptimized />
                        </div>
                        <CardContent className="p-6 space-y-3">
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <Calendar className="h-4 w-4" />{formatDate(post.publishDate)}
                          </div>
                          <h3 className="font-heading text-lg font-black text-black line-clamp-2">{post.title}</h3>
                          <p className="font-paragraph text-gray-600 text-sm line-clamp-3">{post.shortDescription}</p>
                          <Button asChild variant="outline" size="sm" className="w-full border-black text-black hover:bg-black hover:text-white">
                            <Link href={`/blog/${post.slug}`}>Read More<ArrowRight className="h-4 w-4 ml-2" /></Link>
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Stay Updated - TEAL */}
      <section className="py-20 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-black text-black mb-4">Stay Updated</h2>
          <p className="font-paragraph text-xl text-black/70 mb-8">Get the latest roofing tips and industry insights delivered to your inbox.</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-3 rounded border border-black/20 focus:outline-none focus:ring-2 focus:ring-black" />
            <Button variant="default" className="bg-black text-white hover:bg-black/80">Subscribe</Button>
          </div>
          <p className="font-paragraph text-sm text-black/50 mt-4">No spam, unsubscribe at any time.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-black mb-4">Need Roofing Help?</h2>
          <p className="font-paragraph text-xl mb-8 max-w-2xl mx-auto text-white/80">Get expert advice and a free quote from Hamilton&apos;s trusted roofing professionals.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="cta"><Link href="/quote">Get A Real Quote Online In Minutes!<ArrowRight className="h-4 w-4 ml-2" /></Link></Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black"><Link href="/about">Contact Our Experts</Link></Button>
          </div>
        </div>
      </section>

    </div>
  )
}
