export interface BlogPost {
  _id: string
  title: string
  slug: string
  shortDescription?: string
  content?: string
  featuredImage?: string
  publishDate?: string | Date
  author?: string
  tags?: string[]
}
