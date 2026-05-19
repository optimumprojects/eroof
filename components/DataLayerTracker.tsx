'use client'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[]
  }
}

export function DataLayerTracker() {
  const pathname = usePathname()

  useEffect(() => {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
      event: 'virtual_page_view',
      page_location: window.location.href,
      page_title: document.title,
    })
  }, [pathname])

  return null
}
