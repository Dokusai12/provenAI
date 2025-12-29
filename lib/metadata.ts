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
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
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

