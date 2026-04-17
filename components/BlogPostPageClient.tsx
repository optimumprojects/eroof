'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Calendar, Clock, ArrowLeft, ArrowRight, Share2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/cards'
import { marked } from 'marked'
import type { BlogPost } from '@/lib/types'

const FALLBACK_POSTS: BlogPost[] = [
  {
    _id: '1',
    title: 'How Much Does a Roof Replacement Cost in Ontario in 2026?',
    slug: 'roof-replacement-cost-hamilton-2026',
    shortDescription: 'Wondering how much a new roof costs in Ontario in 2026? Learn real price ranges, what affects cost, and how to avoid surprises.',
    content: `Getting a new roof is one of the biggest investments you'll make as a homeowner. In 2026, Ontario roof replacement costs vary widely depending on several key factors — and understanding them puts you in control.

## What Does a Roof Replacement Cost in 2026?

For a typical Ontario home (1,200–2,500 sq ft), expect to pay between **$8,000 and $18,000** for a standard asphalt shingle replacement. Premium materials or complex roof designs push that range higher.

## Key Factors That Affect Price

- **Roof size and pitch** — steeper roofs require more safety equipment and labour time
- **Material choice** — basic 3-tab shingles cost less than architectural or designer shingles
- **Number of layers to remove** — tearing off multiple layers adds disposal costs
- **Ventilation and flashing** — upgrading these during replacement adds value but also cost
- **Accessibility** — tight lots or multi-storey homes can increase labour rates

## How to Avoid Surprise Costs

The most common complaint homeowners have is getting a final bill that doesn't match the quote. Here's how to protect yourself:

- Get everything in writing before work begins
- Ask if disposal, flashing, and underlayment are included
- Avoid companies that won't give you a price without an in-home visit
- Use an online estimator like eRoof.ca to get a transparent ballpark first

## The eRoof.ca Approach

At eRoof.ca, our all-in pricing covers tear-off, disposal, underlayment, drip edge, flashing, and full cleanup. No surprise line items. Get your instant online quote today and see why hundreds of Ontario homeowners are choosing the modern way to buy a roof.`,
    featuredImage: 'https://static.wixstatic.com/media/b690e6_fcb32723586d4acb80b3b087986a621f~mv2.png',
    publishDate: '2026-03-01',
  },
  {
    _id: '2',
    title: 'Subcontractors vs. In-House Crews: Which Model Delivers?',
    slug: 'subcontractors-vs-in-house-crews',
    shortDescription: 'Explore the pros and cons of subcontractors vs in-house crews and how eRoof.ca ensures quality.',
    content: `When you hire a roofing company, you might assume the crew that shows up works directly for them. In many cases, that's not true. Understanding the difference between subcontractor and in-house crew models helps you make a smarter choice.

## The In-House Crew Model

Large roofing companies often employ their own crews full-time. The advantages include:

- Consistent training and quality standards
- Direct oversight from the company
- Crews who know the company's processes inside out

The downside? These companies carry massive overhead — offices, vehicles, HR departments, and management layers. That overhead gets baked into your quote.

## The Subcontractor Model

Many companies, including eRoof.ca, work with vetted subcontractor crews. When managed well, this model delivers:

- **Lower overhead** — savings get passed to the homeowner
- **Specialized expertise** — crews who focus exclusively on installation
- **Flexibility** — the right crew matched to the right project

The risk with subcontractors comes when there's no quality control. Some companies hand off the job and walk away.

## How eRoof.ca Does It Differently

We use vetted sub-crews who follow one clear playbook. Every job gets the same materials, same cleanup protocol, and same finish standard. A salaried project manager oversees every installation — not to sell you anything, but to ensure the work meets our specs.

The result is the quality of an in-house operation at a price that reflects the efficiency of the subcontractor model.`,
    featuredImage: 'https://static.wixstatic.com/media/b690e6_91e05c774d534b228516728807796ee5~mv2.png',
    publishDate: '2026-02-15',
  },
  {
    _id: '3',
    title: 'What Makes a Good Roofing System?',
    slug: 'what-makes-a-good-roofing-system',
    shortDescription: 'Learn what actually makes a quality roofing system — it\'s more than just shingles.',
    content: `Most homeowners think a roof is just shingles. In reality, a quality roofing system is made up of multiple layers that work together to protect your home from water, wind, and ice.

## The Layers of a Roofing System

A complete roofing system includes:

- **Decking** — the plywood or OSB base that everything sits on
- **Underlayment** — a waterproof barrier between the decking and shingles
- **Ice and water shield** — applied at eaves, valleys, and penetrations for extra protection
- **Drip edge** — metal flashing along the roof edges to direct water into gutters
- **Shingles** — the visible layer that takes the brunt of weather exposure
- **Ventilation** — ridge vents and soffit vents that regulate attic temperature and moisture

## Why Ventilation Matters

Poor ventilation is the silent roof killer. Without proper airflow, heat and moisture build up in your attic, causing:

- Premature shingle deterioration from underneath
- Ice dams in winter that force water under shingles
- Mold and wood rot on the decking

A good roofing company will assess your ventilation during the quoting process, not after installation has started.

## What to Ask Your Roofer

Before signing any contract, make sure you understand what's included:

- Is the underlayment being replaced or reused?
- Are they installing ice and water shield in valleys and at eaves?
- Will they replace damaged decking if they find rot?
- Is new drip edge included?

At eRoof.ca, all of these components are included in our standard installation. No surprises, no add-ons mid-project.`,
    featuredImage: 'https://static.wixstatic.com/media/b690e6_cb7e81395d3f482495d301ce0afc0446~mv2.jpg',
    publishDate: '2026-01-28',
  },
  {
    _id: '4',
    title: 'The Truth About Roofing Quotes',
    slug: 'the-truth-about-roofing-quotes',
    shortDescription: 'What contractors don\'t tell you about roofing quotes in Ontario.',
    content: `Getting a roofing quote should be simple — but for most Ontario homeowners, it's anything but. The traditional quoting process is designed to get a salesperson into your home, not to give you clear information.

## How Traditional Quotes Work

Here's the typical experience with most roofing companies:

- You call or fill out a form requesting a quote
- A salesperson schedules a visit — often with a 4-hour arrival window
- They spend 30–60 minutes in your home, measuring and inspecting
- The quote comes with pressure to sign on the spot
- If you don't sign, expect follow-up calls for weeks

The price you see often doesn't include everything. Common exclusions that inflate the final bill include disposal fees, flashing replacement, and decking repairs.

## What a Good Quote Should Include

A transparent roofing quote covers:

- **Tear-off and disposal** of existing materials
- **Underlayment and ice shield** installation
- **New drip edge and flashing**
- **Shingle installation** with manufacturer specs
- **Cleanup and debris removal**
- **Warranty details** — both manufacturer and workmanship

If any of these items are listed as "additional" or "TBD," you're likely to see a higher final bill.

## The eRoof.ca Approach

Our instant online estimator gives you a real ballpark in minutes using satellite imagery and local pricing data. When a project manager visits, it's to verify scope — not to pressure you into signing. The price you see is the price you pay.`,
    featuredImage: 'https://static.wixstatic.com/media/b690e6_cacebfd7006640f79e29eedf729c0d49~mv2.jpeg',
    publishDate: '2026-01-20',
  },
  {
    _id: '5',
    title: "Why You Don't Need a Roofing Salesperson Anymore",
    slug: 'no-roofing-salesperson-needed',
    shortDescription: 'How eRoof.ca eliminates high-pressure sales tactics from the roofing process.',
    content: `The roofing industry has relied on door-to-door and in-home salespeople for decades. For homeowners, this model means pressure, wasted time, and prices inflated by commissions.

## The Problem With Commission Sales

When your roofer's first touchpoint is a commissioned salesperson, the incentives are misaligned:

- They're motivated to **upsell you** on products you may not need
- They often quote **high initially** to leave room for "discount" negotiations
- Follow-up calls feel aggressive because their income depends on closing you
- The price includes **15–25% in sales commissions** that add no value to your roof

## What Homeowners Actually Want

Based on thousands of interactions, here's what homeowners tell us they want:

- A clear price without having to sit through a presentation
- Time to make a decision without pressure
- Confidence that the price is fair and complete
- A professional who answers questions without a sales agenda

## How eRoof.ca Eliminates the Salesperson

Our process is built around transparency, not transactions:

- **Start online** — get an instant estimate using our satellite-powered tool
- **PM visit, not a sales call** — a salaried project manager verifies scope in about 15 minutes
- **No commission, no pressure** — our PMs are paid to ensure accuracy, not to close deals
- **Follow up on your terms** — we don't chase you with calls

The result is a better price and a dramatically less stressful experience. You stay in control from start to finish.`,
    featuredImage: 'https://static.wixstatic.com/media/b690e6_eac614728c4147dba14150e8cd4bb7b3~mv2.png',
    publishDate: '2026-01-10',
  },
  {
    _id: '6',
    title: 'The eRoof.ca Instant Quote: How It Works',
    slug: 'eroof-ca-instant-quote-how-it-works',
    shortDescription: "How eRoof.ca's instant online quote system works — from satellite imagery to final price.",
    content: `One of the most common questions we get is: "How can you give me a quote without visiting my home?" The answer lies in modern technology and a smarter business model.

## Step 1: Enter Your Address

When you visit our quote page, you simply enter your home address. Our system pulls satellite imagery and property data to calculate your roof's dimensions, pitch, and complexity.

## Step 2: Get Your Instant Estimate

Within minutes, you receive a ballpark estimate based on:

- **Your roof's measured area** from satellite data
- **Local material and labour costs** for your region
- **Standard inclusions** — tear-off, disposal, underlayment, flashing, and cleanup

This estimate is a real starting point, not a teaser number designed to get you on the phone.

## Step 3: Project Manager Verification

If you'd like to proceed, a certified project manager visits your property for about 15 minutes. They:

- Verify the satellite measurements on-site
- Check attic ventilation and existing damage
- Note any special conditions (skylights, chimneys, valleys)
- Finalize your quote with any adjustments

## Step 4: Book and Build

Once you approve the final quote, you pick your preferred installation date. Our vetted crews handle everything from tear-off to final cleanup — typically completed in one to two days.

No callbacks to wait for, no salesperson in your kitchen, and no surprises on your invoice. That's roofing, modernized.`,
    featuredImage: 'https://static.wixstatic.com/media/b690e6_00f7d888a41d4c4abf3a7884bcf8aacc~mv2.png',
    publishDate: '2025-12-20',
  },
  {
    _id: '7',
    title: 'Why Choose eRoof.ca? Our Unique Approach to Roofing',
    slug: 'why-choose-eroof-ca-unique-approach',
    shortDescription: "What makes eRoof.ca different from traditional roofing companies in Hamilton and Burlington.",
    content: `The roofing industry in Hamilton hasn't fundamentally changed in 30 years. Salespeople show up at your door. They pressure you to sign. The price you see on day one is rarely the price you pay on install day. We built eRoof.ca to fix that.

## Start With an Instant Quote

Our online estimator uses your address, satellite imagery, and local pricing data to generate a real ballpark within minutes. No waiting for a callback. No salesperson in your kitchen.

## A PM Visit to Verify — Not to Sell

After you get your quote, a certified project manager visits for about 15 minutes. They verify the scope, check the attic ventilation, and answer your questions. They're paid a salary, not commission. They have no reason to upsell you anything.

## Vetted Crews, One Standard

We work with vetted sub-crews who follow one clear playbook:

- Same premium materials on every job
- Same cleanup protocol and finish standard
- Direct oversight from a salaried project manager
- Consistent quality without showroom overhead

## The Math Is Simple

No showroom. No commission sales force. No aggressive follow-up call centre. Those costs get passed back to you as a better price and a less stressful experience. That's the eRoof.ca difference.`,
    featuredImage: 'https://static.wixstatic.com/media/b690e6_f6b850c1f8174610a3a7e8da0139af39~mv2.png',
    publishDate: '2025-12-01',
  },
  {
    _id: '8',
    title: 'Understanding Roofing Costs in Hamilton',
    slug: 'understanding-roofing-costs-hamilton',
    shortDescription: "What drives roofing costs in Hamilton and how to get a fair price.",
    content: `If you've started getting roofing quotes in Hamilton, you've probably noticed the prices vary wildly. One company quotes $9,000, another quotes $18,000 for the same house. Understanding what actually drives cost helps you separate fair pricing from inflated margins.

## The Biggest Cost Drivers

Roofing costs in Hamilton come down to a handful of factors:

- **Roof area** — measured in squares (1 square = 100 sq ft). Most Hamilton homes are 15–25 squares.
- **Pitch and complexity** — steep roofs, multiple dormers, and valleys all increase labour time
- **Material grade** — basic shingles vs. premium architectural shingles vs. designer lines
- **Access and height** — multi-storey homes or properties with tight lot lines cost more to service
- **Existing damage** — rotted decking or inadequate ventilation add to the scope

## Why Quotes Vary So Much

The materials and labour for a given roof are relatively consistent across companies. The big difference comes from overhead:

- Companies with showrooms, fleets of vehicles, and commissioned sales teams build those costs into every quote
- Storm-chaser companies offer low prices but cut corners on materials and cleanup
- Local operators with lean business models can offer competitive pricing without sacrificing quality

## How to Compare Quotes Fairly

When evaluating quotes, make sure each one includes the same scope:

- Full tear-off and disposal
- New underlayment and ice shield
- Drip edge and flashing replacement
- Manufacturer-spec installation
- Workmanship warranty details

At eRoof.ca, our quotes are all-inclusive by default. No line-item surprises, no hidden fees.`,
    featuredImage: 'https://static.wixstatic.com/media/b690e6_831032ed490041d587ff90bdecef28cf~mv2.png',
    publishDate: '2025-11-15',
  },
  {
    _id: '9',
    title: 'How Much Does a Roof Replacement Cost in Hamilton in 2025?',
    slug: 'roof-replacement-cost-hamilton-2025',
    shortDescription: "Roof replacement cost factors in Hamilton for 2025 — a straight-talk breakdown.",
    content: `Roof replacement is one of the largest home improvement investments most Hamilton homeowners will make. Yet most get their first price from a salesperson who walked up uninvited and never explained what drives the number.

## Size Comes First

Most Hamilton homes range from 1,200 to 2,500 square feet of living space. Roof area is typically 1.3 to 1.6x your floor area depending on pitch and complexity. A 1,500 sq ft bungalow might have 1,800–2,000 sq ft of actual roof surface.

## Material Choice Is the Biggest Lever

Your material choice has the largest impact on price:

- **Entry-level asphalt shingles** (IKO Cambridge, CertainTeed Landmark) typically run $3.50–$5.00 per sq ft installed
- **Premium architectural shingles** add 20–35% to that base cost
- **Metal roofing** is 2–3x the cost of asphalt but lasts 40–70 years

## What eRoof Charges

For a typical 1,500–2,000 sq ft Hamilton home, an asphalt shingle replacement with eRoof runs **$7,500–$12,000 all-in**. That includes:

- Complete tear-off and disposal
- New underlayment and ice shield
- Drip edge and flashing
- Full cleanup

The big traditional companies in Hamilton typically quote the same job at $15,000–$22,000. The difference isn't the materials or the craftsmanship — it's the overhead model.`,
    featuredImage: 'https://static.wixstatic.com/media/b690e6_fcb32723586d4acb80b3b087986a621f~mv2.png',
    publishDate: '2025-01-14',
  },
  {
    _id: '10',
    title: 'Signs Your Home Needs a New Roof',
    slug: 'signs-you-need-new-roof',
    shortDescription: "Key signs your Hamilton home might need a new roof — what to look for inside and out.",
    content: `Most homeowners don't think about their roof until something goes wrong. But catching problems early can save you thousands in emergency repairs and interior damage. Here are the key signs it's time for a replacement.

## Visible Exterior Warning Signs

Walk around your property and look for:

- **Curling or buckling shingles** — shingles that are lifting at the edges or bubbling in the middle have lost their seal
- **Missing shingles** — gaps in your roof leave the underlayment and decking exposed to water
- **Granule loss** — check your gutters for dark, sand-like granules; heavy loss means shingles are wearing out
- **Sagging roof sections** — this can indicate structural damage to the decking underneath
- **Damaged flashing** — cracked or rusted flashing around chimneys, vents, and valleys lets water in

## Interior Warning Signs

Don't forget to check inside your home:

- **Water stains on ceilings** — brown or yellow spots indicate active or past leaks
- **Daylight through the roof boards** — visible from the attic, this means gaps exist in your roof
- **Mold or mildew in the attic** — a sign of moisture intrusion from a failing roof
- **Rising energy bills** — poor roof insulation and ventilation force your HVAC system to work harder

## Age Is a Factor

Most asphalt shingle roofs last 20–25 years. If your roof is approaching that age and showing any of the signs above, it's time to start planning. Waiting for a full failure usually means emergency pricing and potential interior damage.

## What to Do Next

If you've spotted any of these warning signs, get a professional assessment. At eRoof.ca, you can start with a free instant online estimate to understand your options and costs before committing to anything.`,
    featuredImage: 'https://static.wixstatic.com/media/b690e6_7f82b4802d2a4a7da4b026927874e923~mv2.png',
    publishDate: '2024-11-01',
  },
  {
    _id: '11',
    title: 'Beyond Shingles: Other Roofing Services from eRoof.ca',
    slug: 'beyond-shingles-other-roofing-services',
    shortDescription: "eRoof.ca offers more than shingle replacement — explore our full range of roofing services.",
    content: `While asphalt shingle replacement is our most requested service, a complete roofing project often involves more than just the shingles. Here's a look at the full range of services eRoof.ca provides.

## Roof Repairs

Not every roof problem requires a full replacement. We handle targeted repairs including:

- **Leak repairs** — finding and fixing the source, not just patching the symptom
- **Storm damage** — replacing sections damaged by wind, hail, or fallen branches
- **Flashing repairs** — resealing around chimneys, skylights, and wall junctions
- **Emergency tarping** — temporary protection while permanent repairs are scheduled

## Skylights

Adding or replacing skylights transforms dark spaces with natural light. Our skylight services include:

- New skylight installation with proper flashing
- Replacement of aging or leaking skylights
- Tubular skylight options for smaller spaces

## Ventilation

Proper attic ventilation extends the life of your roof and reduces energy costs. We install and upgrade:

- Ridge vents for continuous airflow along the peak
- Soffit vents to allow cool air intake
- Powered attic ventilators for homes that need extra airflow

## Soffits, Fascia, and Gutters

The trim around your roofline protects against water damage and pests. We offer:

- Aluminum soffit and fascia installation
- Gutter installation and replacement
- Gutter guard systems to prevent clogs

Every service follows the same eRoof.ca standard — transparent pricing, professional installation, and no pressure. Visit our services page or get an instant quote to learn more.`,
    featuredImage: 'https://static.wixstatic.com/media/b690e6_3a0261d2944342af84c619664c950d1d~mv2.png',
    publishDate: '2024-10-15',
  },
  {
    _id: '12',
    title: 'Seasonal Roof Maintenance Tips for Hamilton Homeowners',
    slug: 'seasonal-roof-maintenance-hamilton',
    shortDescription: "Keep your roof in top shape year-round with these seasonal maintenance tips for Hamilton's climate.",
    content: `Hamilton's climate puts roofs through a lot — ice storms in winter, heavy rain in spring, intense heat in summer, and falling debris in autumn. A little seasonal maintenance goes a long way toward extending your roof's lifespan.

## Spring Checklist

After winter, your roof needs a thorough check:

- **Inspect for winter damage** — look for missing, cracked, or lifted shingles
- **Clean gutters and downspouts** — clear the debris that accumulated over winter
- **Check flashing** — look for gaps or rust around chimneys, vents, and skylights
- **Trim overhanging branches** — prevent damage from spring storms

## Summer Checklist

Summer is the best time for repairs and upgrades:

- **Check attic ventilation** — ensure ridge and soffit vents are unblocked
- **Look for algae or moss growth** — dark streaks indicate moisture-retaining organisms
- **Inspect caulking and sealants** — heat causes expansion that can crack old sealant
- **Schedule any needed repairs** — dry weather makes summer ideal for roofing work

## Fall Checklist

Prepare your roof before winter arrives:

- **Clean gutters again** — remove fallen leaves before freeze-up
- **Check for loose or damaged shingles** — fix them before ice and snow make it worse
- **Inspect attic insulation** — proper insulation prevents ice dams
- **Clear debris from valleys** — leaves and branches in valleys trap water

## Winter Checklist

During winter, focus on monitoring:

- **Watch for ice dams** — ridges of ice at the eaves indicate heat loss from the attic
- **Remove heavy snow loads** — use a roof rake from the ground if accumulation is excessive
- **Check for interior leaks** — inspect ceilings and attic spaces after storms
- **Avoid walking on your roof** — icy surfaces are extremely dangerous

## When Maintenance Isn't Enough

If your seasonal inspections consistently reveal new problems, your roof may be approaching the end of its life. Start planning your replacement early to avoid emergency situations. Get an instant estimate at eRoof.ca to understand your options.`,
    featuredImage: 'https://static.wixstatic.com/media/b690e6_b832f176e4444e419210a46d6321eb80~mv2.png',
    publishDate: '2024-09-20',
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
          <div dangerouslySetInnerHTML={{ __html: marked(post.content || '') }} className="prose prose-lg max-w-none" />
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
              <Link href="/quote">Get A Real Quote In Minutes!<ArrowRight className="h-4 w-4 ml-2" /></Link>
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
