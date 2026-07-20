import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { NavBar } from '@/components/NavBar'
import { Footer } from '@/components/Footer'
import { DataLayerTracker } from '@/components/DataLayerTracker'

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
    images: ['/media/b690e6_463649724ea14c39b1b440d4fd4a5282~mv2.png'],
  },
  icons: {
    icon: '/media/b690e6_463649724ea14c39b1b440d4fd4a5282~mv2.png',
    shortcut: '/media/b690e6_463649724ea14c39b1b440d4fd4a5282~mv2.png',
    apple: '/media/b690e6_463649724ea14c39b1b440d4fd4a5282~mv2.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.variable}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-T6NFK34M');`,
          }}
        />
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T6NFK34M"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <DataLayerTracker />
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
