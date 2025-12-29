import type { Metadata } from 'next'

const baseUrl = 'https://provenai.io'

export const defaultMetadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'AI Safety & Compliance Certification | ProvenAI',
    template: '%s | ProvenAI',
  },
  description: 'ProvenAI provides AI safety, compliance, and risk assurance certification. Get certified to demonstrate EU AI Act readiness, ISO 42001 alignment, and NIST AI RMF compliance.',
  keywords: ['AI certification', 'AI compliance', 'EU AI Act', 'ISO 42001', 'NIST AI RMF', 'AI safety', 'AI risk management', 'AI governance', 'AI compliance certification'],
  authors: [{ name: 'ProvenAI' }],
  creator: 'ProvenAI',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    siteName: 'ProvenAI',
    title: 'AI Safety & Compliance Certification | ProvenAI',
    description: 'ProvenAI provides AI safety, compliance, and risk assurance certification. Get certified to demonstrate EU AI Act readiness and reduce procurement risk.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Safety & Compliance Certification | ProvenAI',
    description: 'ProvenAI provides AI safety, compliance, and risk assurance certification. Get certified to demonstrate EU AI Act readiness and reduce procurement risk.',
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

