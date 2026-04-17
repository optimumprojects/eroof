'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, Menu, X, Calculator, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Projects', href: '/projects' },
  { name: 'Blog', href: '/blog' },
  { name: 'Get Quote', href: '/quote' },
]

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-black shadow-lg">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="https://static.wixstatic.com/media/b690e6_463649724ea14c39b1b440d4fd4a5282~mv2.png"
              alt="eRoof.ca - Instant Roofing Quotes Hamilton Burlington"
              width={180}
              height={56}
              className="h-16 w-auto"
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href} className="font-paragraph text-sm font-medium text-white hover:text-secondary transition-colors">
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-6">
            <a href="tel:6478237663" className="flex items-center space-x-2 text-secondary hover:text-white transition-colors">
              <Phone className="h-4 w-4" />
              <span className="font-paragraph font-semibold">(647) 82-EROOF</span>
            </a>
            <Button asChild variant="cta" size="default">
              <Link href="/quote">
                <Calculator className="size-4" />
                Get Instant Quote
              </Link>
            </Button>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2 text-white hover:text-secondary transition-colors">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-white/20">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href} onClick={() => setIsMenuOpen(false)} className="font-paragraph text-sm font-medium text-white hover:text-secondary transition-colors">
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-white/20 space-y-4">
                <a href="tel:6478237663" className="flex items-center space-x-2 text-secondary hover:text-white transition-colors">
                  <Phone className="h-4 w-4" />
                  <span className="font-paragraph font-semibold">(647) 82-EROOF</span>
                </a>
                <a href="mailto:info@eroof.ca" className="flex items-center space-x-2 text-white hover:text-secondary transition-colors">
                  <Mail className="h-4 w-4" />
                  <span className="font-paragraph font-semibold">info@eroof.ca</span>
                </a>
                <Button asChild variant="cta" className="w-full">
                  <Link href="/quote" onClick={() => setIsMenuOpen(false)}>
                    <Calculator className="size-4" />
                    Get Instant Quote
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
