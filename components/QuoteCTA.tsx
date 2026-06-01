'use client'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import type { VariantProps } from 'class-variance-authority'
import type { buttonVariants } from '@/components/ui/button'

export function QuoteCTA({
  children,
  site_sub_section = 'inline',
  variant = 'cta',
  size,
  className,
}: {
  children: React.ReactNode
  site_sub_section?: string
  variant?: VariantProps<typeof buttonVariants>['variant']
  size?: VariantProps<typeof buttonVariants>['size']
  className?: string
}) {
  return (
    <Button asChild variant={variant} size={size} className={className}>
      <Link
        href="/quote"
        onClick={() => {
          window.dataLayer = window.dataLayer || []
          window.dataLayer.push({ event: 'cta_quote', site_section: document.title.split('|')[0].trim(), site_sub_section })
        }}
      >
        {children}
      </Link>
    </Button>
  )
}
