import type { Metadata } from 'next'
import { BlogPostPageClient } from '@/components/BlogPostPageClient'
import type { BlogPost } from '@/lib/types'

// Static post data for metadata generation — mirrors fallback in client
const STATIC_POSTS = [
  { slug: 'roof-replacement-cost-hamilton-2026', title: 'How Much Does a Roof Replacement Cost in Ontario in 2026?', shortDescription: 'Wondering how much a new roof costs in Ontario in 2026? Learn real price ranges, what affects cost, and how to avoid surprises.', featuredImage: 'https://static.wixstatic.com/media/b690e6_fcb32723586d4acb80b3b087986a621f~mv2.png', publishDate: '2026-03-01' },
  { slug: 'subcontractors-vs-in-house-crews', title: 'Subcontractors vs. In-House Crews: Which Model Delivers?', shortDescription: 'Explore the pros and cons of subcontractors vs in-house crews and how eRoof.ca ensures quality.', featuredImage: 'https://static.wixstatic.com/media/b690e6_91e05c774d534b228516728807796ee5~mv2.png', publishDate: '2026-02-15' },
  { slug: 'what-makes-a-good-roofing-system', title: "What Makes a Good Roofing System?", shortDescription: "Learn what actually makes a quality roofing system.", featuredImage: 'https://static.wixstatic.com/media/b690e6_cb7e81395d3f482495d301ce0afc0446~mv2.jpg', publishDate: '2026-01-28' },
  { slug: 'the-truth-about-roofing-quotes', title: "The Truth About Roofing Quotes", shortDescription: "What contractors don't tell you about roofing quotes in Ontario.", featuredImage: 'https://static.wixstatic.com/media/b690e6_cacebfd7006640f79e29eedf729c0d49~mv2.jpeg', publishDate: '2026-01-20' },
  { slug: 'no-roofing-salesperson-needed', title: "Why You Don't Need a Roofing Salesperson Anymore", shortDescription: "How eRoof.ca eliminates high-pressure sales tactics.", featuredImage: 'https://static.wixstatic.com/media/b690e6_eac614728c4147dba14150e8cd4bb7b3~mv2.png', publishDate: '2026-01-10' },
  { slug: 'eroof-ca-instant-quote-how-it-works', title: "The eRoof.ca Instant Quote: How It Works", shortDescription: "How eRoof.ca's instant online quote system works.", featuredImage: 'https://static.wixstatic.com/media/b690e6_00f7d888a41d4c4abf3a7884bcf8aacc~mv2.png', publishDate: '2025-12-20' },
  { slug: 'why-choose-eroof-ca-unique-approach', title: 'Why Choose eRoof.ca? Our Unique Approach', shortDescription: "What makes eRoof.ca different from traditional roofing companies.", featuredImage: 'https://static.wixstatic.com/media/b690e6_f6b850c1f8174610a3a7e8da0139af39~mv2.png', publishDate: '2025-12-01' },
  { slug: 'understanding-roofing-costs-hamilton', title: 'Understanding Roofing Costs in Hamilton', shortDescription: "What drives roofing costs in Hamilton and how to get a fair price.", featuredImage: 'https://static.wixstatic.com/media/b690e6_831032ed490041d587ff90bdecef28cf~mv2.png', publishDate: '2025-11-15' },
  { slug: 'roof-replacement-cost-hamilton-2025', title: 'How Much Does a Roof Replacement Cost in Hamilton in 2025?', shortDescription: "Roof replacement cost factors in Hamilton for 2025.", featuredImage: 'https://static.wixstatic.com/media/b690e6_fcb32723586d4acb80b3b087986a621f~mv2.png', publishDate: '2025-01-14' },
  { slug: 'signs-you-need-new-roof', title: 'Signs Your Home Needs a New Roof', shortDescription: "Key signs your Hamilton home might need a new roof.", featuredImage: 'https://static.wixstatic.com/media/b690e6_7f82b4802d2a4a7da4b026927874e923~mv2.png', publishDate: '2024-11-01' },
  { slug: 'beyond-shingles-other-roofing-services', title: 'Beyond Shingles: Other Roofing Services from eRoof.ca', shortDescription: "eRoof.ca's full range of services beyond shingle replacement.", featuredImage: 'https://static.wixstatic.com/media/b690e6_3a0261d2944342af84c619664c950d1d~mv2.png', publishDate: '2024-10-15' },
  { slug: 'seasonal-roof-maintenance-hamilton', title: 'Seasonal Roof Maintenance Tips for Hamilton Homeowners', shortDescription: "Keep your roof in top shape year-round.", featuredImage: 'https://static.wixstatic.com/media/b690e6_b832f176e4444e419210a46d6321eb80~mv2.png', publishDate: '2024-09-20' },
]
export async function generateStaticParams() {
  return STATIC_POSTS.map(post => ({ slug: post.slug }))
}

type Props = { params: { slug: string } }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = STATIC_POSTS.find(p => p.slug === params.slug)
  if (!post) {
    return {
      title: 'Article Not Found | eRoof.ca Blog',
      description: 'This article could not be found. Browse our roofing tips and guides for Hamilton homeowners.',
    }
  }
  return {
    title: `${post.title} | eRoof.ca`,
    description: post.shortDescription,
    alternates: { canonical: `https://www.eroof.ca/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.shortDescription,
      url: `https://www.eroof.ca/blog/${post.slug}`,
      type: 'article',
      images: post.featuredImage ? [post.featuredImage] : [],
      publishedTime: post.publishDate ? new Date(post.publishDate).toISOString() : undefined,
    },
  }
}

export default function BlogPostPage({ params }: Props) {
  return <BlogPostPageClient slug={params.slug} />
}
