import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { NavBar } from '@/components/NavBar'
import { Footer } from '@/components/Footer'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700', '900'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.eroof.ca'),
  title: {
    default: 'Roofing Company Hamilton & Burlington | Instant Online Quote | eRoof.ca',
    template: '%s',
  },
  description: "Get an instant roof quote online in minutes — no sales visit, no pressure, no surprises. Hamilton and Burlington's modern roofing company. CertainTeed certified. Call (647) 82-EROOF.",
  openGraph: {
    siteName: 'eRoof.ca',
    images: ['https://static.wixstatic.com/media/b690e6_463649724ea14c39b1b440d4fd4a5282~mv2.png'],
  },
  icons: {
    icon: 'https://static.wixstatic.com/media/b690e6_463649724ea14c39b1b440d4fd4a5282~mv2.png',
    shortcut: 'https://static.wixstatic.com/media/b690e6_463649724ea14c39b1b440d4fd4a5282~mv2.png',
    apple: 'https://static.wixstatic.com/media/b690e6_463649724ea14c39b1b440d4fd4a5282~mv2.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
