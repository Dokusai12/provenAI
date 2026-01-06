import type { Metadata } from 'next'

const baseUrl = 'https://provenai.io'

export const defaultMetadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'ProvenAI | AI Governance Evidence for Procurement',
    template: '%s | ProvenAI',
  },
  description: 'Turn scattered AI usage into procurement-ready proof. Produce AI inventory, ownership documentation, risk classifications, and exportable Evidence Packs that buyers can review.',
  keywords: ['AI governance', 'AI evidence', 'procurement', 'EU AI Act', 'AI inventory', 'risk classification', 'evidence pack'],
  authors: [{ name: 'ProvenAI' }],
  creator: 'ProvenAI',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    siteName: 'ProvenAI',
    title: 'ProvenAI | AI Governance Evidence for Procurement',
    description: 'Turn scattered AI usage into procurement-ready proof. Produce AI inventory, ownership documentation, risk classifications, and exportable Evidence Packs that buyers can review.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ProvenAI | AI Governance Evidence for Procurement',
    description: 'Turn scattered AI usage into procurement-ready proof. Produce AI inventory, ownership documentation, risk classifications, and exportable Evidence Packs that buyers can review.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'android-chrome-192x192',
        url: '/android-chrome-192x192.png',
      },
      {
        rel: 'android-chrome-512x512',
        url: '/android-chrome-512x512.png',
      },
    ],
  },
  manifest: '/site.webmanifest',
}

export function createPageMetadata({
  title,
  description,
  path = '',
  keywords = [],
}: {
  title: string
  description: string
  path?: string
  keywords?: string[]
}): Metadata {
  const url = `${baseUrl}${path}`
  
  return {
    title,
    description,
    keywords: keywords.length > 0 ? keywords : defaultMetadata.keywords,
    openGraph: {
      ...defaultMetadata.openGraph,
      title,
      description,
      url,
    },
    twitter: {
      ...defaultMetadata.twitter,
      title,
      description,
    },
    alternates: {
      canonical: url,
    },
  }
}

