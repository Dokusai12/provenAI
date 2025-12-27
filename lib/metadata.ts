import type { Metadata } from 'next'

const baseUrl = 'https://provenai.io'

export const defaultMetadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'ProvenAI | Stop AI Washing. Certify Real AI.',
    template: '%s | ProvenAI',
  },
  description: 'ProvenAI verifies legitimate AI companies. Get certified to stand out from scammers.',
  keywords: ['AI certification', 'AI verification', 'AI companies', 'AI agencies', 'stop AI washing'],
  authors: [{ name: 'ProvenAI' }],
  creator: 'ProvenAI',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    siteName: 'ProvenAI',
    title: 'ProvenAI | Stop AI Washing. Certify Real AI.',
    description: 'ProvenAI verifies legitimate AI companies. Get certified to stand out from scammers.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ProvenAI | Stop AI Washing. Certify Real AI.',
    description: 'ProvenAI verifies legitimate AI companies. Get certified to stand out from scammers.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

