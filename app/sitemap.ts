import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.eroof.ca'
  const now = new Date()

  const staticPages = [
    { url: base, priority: 1.0, changeFrequency: 'weekly' as const },
    { url: `${base}/about`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${base}/services`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${base}/quote`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${base}/projects`, priority: 0.7, changeFrequency: 'weekly' as const },
    { url: `${base}/blog`, priority: 0.8, changeFrequency: 'weekly' as const },
  ]

  const blogSlugs = [
    'roof-replacement-cost-hamilton-2026',
    'subcontractors-vs-in-house-crews',
    'what-makes-a-good-roofing-system',
    'the-truth-about-roofing-quotes',
    'no-roofing-salesperson-needed',
    'eroof-ca-instant-quote-how-it-works',
    'why-choose-eroof-ca-unique-approach',
    'understanding-roofing-costs-hamilton',
    'roof-replacement-cost-hamilton-2025',
    'signs-you-need-new-roof',
    'beyond-shingles-other-roofing-services',
    'seasonal-roof-maintenance-hamilton',
  ]

  const blogPages = blogSlugs.map(slug => ({
    url: `${base}/blog/${slug}`,
    priority: 0.6,
    changeFrequency: 'monthly' as const,
    lastModified: now,
  }))

  return [...staticPages.map(p => ({ ...p, lastModified: now })), ...blogPages]
}
