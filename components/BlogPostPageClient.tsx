'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Calendar, Clock, ArrowLeft, ArrowRight, Share2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/cards'
import type { BlogPost } from '@/lib/types'

const FALLBACK_POSTS: BlogPost[] = [
  {
    _id: '1',
    title: 'How Much Does a Roof Replacement Cost in Hamilton in 2026?',
    slug: 'roof-replacement-cost-hamilton-2025',
    shortDescription: 'A straight-talk breakdown of what drives roof replacement costs in Hamilton — materials, size, labour, and what the big companies don\'t tell you.',
    content: `Roof replacement is one of the largest home improvement investments most Hamilton homeowners will make. Yet most get their first price from a salesperson who walked in the door uninvited and never explained what drives the number.\n\nHere's what actually determines your roof replacement cost in Hamilton.\n\n**Size comes first**\nMost Hamilton homes range from 1,200 to 2,500 square feet of living space. Roof area is typically 1.3 to 1.6x your floor area depending on pitch and complexity. A 1,500 sq ft bungalow might have 1,800–2,000 sq ft of actual roof surface.\n\n**Material choice is the biggest lever**\nEntry-level asphalt shingles (IKO Cambridge, CertainTeed Landmark) typically run $3.50–$5.00 per sq ft installed. Premium architectural shingles add 20–35% to that. Metal roofing is 2–3x asphalt but lasts 40–70 years.\n\n**What eRoof charges**\nFor a typical 1,500–2,000 sq ft Hamilton home, an asphalt shingle replacement with eRoof runs $7,500–$12,000 all-in. That includes tear-off, disposal, new underlayment, drip edge, flashing, and cleanup. No surprise line items.\n\nThe big traditional companies in Hamilton typically quote the same job at $15,000–$22,000. The difference isn't the materials or the craftsmanship — it's the overhead model.`,
    featuredImage: 'https://static.wixstatic.com/media/b690e6_2bf40990cb8a4f69898d5e1facae875e~mv2.png',
    publishDate: '2026-01-14',
  },
  {
    _id: '2',
    title: 'Why Choose eRoof.ca? Our Unique Approach to Roofing',
    slug: 'why-choose-eroof-ca-unique-approach',
    shortDescription: 'How we built Hamilton\'s first fully digital roofing company — and why the no-pressure model is better for homeowners and crews alike.',
    content: `The roofing industry in Hamilton hasn't fundamentally changed in 30 years. Salespeople show up at your door. They pressure you to sign. The price you see on day one is rarely the price you pay on install day.\n\nWe built eRoof.ca to fix that.\n\n**Start with an instant quote**\nOur online estimator uses your address, satellite imagery, and local pricing data to generate a real ballpark within minutes. No waiting for a callback. No salesperson in your kitchen.\n\n**A PM visit to verify — not to sell**\nAfter you get your quote, a certified project manager visits for about 15 minutes. They verify the scope, check the attic ventilation, and answer your questions. They're paid a salary, not commission. They have no reason to upsell you anything.\n\n**Vetted crews, one standard**\nWe work with vetted sub-crews who follow one clear playbook. Same materials, same cleanup protocol, same finish standard on every job. This is how you get consistent quality without the showroom overhead.\n\n**The math is simple**\nNo showroom. No commission sales force. No aggressive follow-up call centre. Those costs get passed back to you as a better price and a less stressful experience.`,
    featuredImage: 'https://static.wixstatic.com/media/b690e6_93c3af64687a494dba7d06e6bcdf5c8a~mv2.png',
    publishDate: '2025-12-01',
  },
]

const formatDate = (date: Date | string | undefined) => {
  if (!date) return ''
  return new Date(date).toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' })
}

const getReadingTime = (content?: string) => {
  if (!content) return '3 min read'
  return `${Math.ceil(content.split(' ').length / 200)} min read`
}

export function BlogPostPageClient({ slug }: { slug: string }) {
  const router = useRouter()
  const [post, setPost] = useState<BlogPost | null>(null)
  const [related, setRelated] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const found = FALLBACK_POSTS.find(p => p.slug === slug)
    if (found) {
      setPost(found)
      setRelated(FALLBACK_POSTS.filter(p => p._id !== found._id).slice(0, 3))
    } else {
      router.replace('/blog')
    }
    setLoading(false)
  }, [slug, router])

  const handleShare = () => {
    if (typeof navigator !== 'undefined') {
      if (navigator.share) {
        navigator.share({ title: post?.title, text: post?.shortDescription, url: window.location.href })
      } else {
        navigator.clipboard.writeText(window.location.href)
      }
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary" />
      </div>
    )
  }

  if (!post) return null

  return (
    <div className="min-h-screen bg-white">

      {/* ── Back nav ── */}
      <section className="py-6 bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button asChild variant="ghost">
            <Link href="/blog"><ArrowLeft className="h-4 w-4 mr-2" />Back to Blog</Link>
          </Button>
        </div>
      </section>

      {/* ── Header ── */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <span className="flex items-center gap-1"><Calendar className="h-4 w-4" />{formatDate(post.publishDate)}</span>
              <span className="flex items-center gap-1"><Clock className="h-4 w-4" />{getReadingTime(post.content)}</span>
            </div>
            <Button onClick={handleShare} variant="outline" size="sm">
              <Share2 className="h-4 w-4 mr-2" />Share
            </Button>
          </div>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight">{post.title}</h1>
          {post.shortDescription && (
            <p className="font-paragraph text-xl text-gray-600 leading-relaxed">{post.shortDescription}</p>
          )}
        </div>
      </section>

      {/* ── Featured image ── */}
      {post.featuredImage && (
        <section className="pb-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image src={post.featuredImage} alt={post.title} fill className="object-cover" />
            </div>
          </div>
        </section>
      )}

      {/* ── Content ── */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="font-paragraph text-gray-700 leading-relaxed text-lg whitespace-pre-wrap">
            {post.content}
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <section className="py-8 bg-gray-50 border-t">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-paragraph text-sm text-gray-500">Published on {formatDate(post.publishDate)}</p>
          <Button onClick={handleShare} variant="outline">
            <Share2 className="h-4 w-4 mr-2" />Share this article
          </Button>
        </div>
      </section>

      {/* ── Related posts ── */}
      {related.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-12 text-center">Related Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {related.map(p => (
                <Card key={p._id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative aspect-video overflow-hidden">
                    <Image src={p.featuredImage || 'https://static.wixstatic.com/media/b690e6_93c3af64687a494dba7d06e6bcdf5c8a~mv2.png'} alt={p.title} fill className="object-cover" />
                  </div>
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1"><Calendar className="h-4 w-4" />{formatDate(p.publishDate)}</span>
                      <span className="flex items-center gap-1"><Clock className="h-4 w-4" />{getReadingTime(p.content)}</span>
                    </div>
                    <h3 className="font-heading text-lg font-bold text-primary line-clamp-2">{p.title}</h3>
                    <p className="font-paragraph text-gray-600 text-sm line-clamp-3">{p.shortDescription}</p>
                    <Button asChild variant="outline" size="sm" className="w-full">
                      <Link href={`/blog/${p.slug}`}>Read More<ArrowRight className="h-4 w-4 ml-2" /></Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <section className="py-20 bg-gradient-to-r from-primary to-dark-blue text-white">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Need Professional Roofing Services?</h2>
          <p className="font-paragraph text-xl mb-8 max-w-2xl mx-auto">Get expert advice and a free quote from Hamilton&apos;s trusted roofing professionals.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="cta">
              <Link href="/quote">Get A Real Quote Online In Minutes!<ArrowRight className="h-4 w-4 ml-2" /></Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              <Link href="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

    </div>
  )
}
