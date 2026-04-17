import type { Metadata } from 'next'
import { ProjectsPageClient } from '@/components/ProjectsPageClient'

export const metadata: Metadata = {
  title: 'Roofing Projects Hamilton & Burlington | Recent Work | eRoof.ca',
  description: 'See eRoof.ca\'s recent roofing installations across Hamilton, Burlington, Ancaster, and Stoney Creek. Real projects, real results, CertainTeed certified craftsmanship.',
  alternates: { canonical: 'https://www.eroof.ca/projects' },
  openGraph: {
    title: 'Roofing Projects Hamilton & Burlington | eRoof.ca',
    description: 'Browse our completed roofing projects across Hamilton and Burlington. Quality work, certified installers.',
    url: 'https://www.eroof.ca/projects',
  },
}

export default function ProjectsPage() {
  return <ProjectsPageClient />
}
