import type { Metadata } from 'next'
import Script from 'next/script'
import { Inter } from 'next/font/google'
import { JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { defaultMetadata } from '@/lib/metadata'
import ProgressIndicator from '@/components/animations/ProgressIndicator'
import PageTransition from '@/components/ux/PageTransition'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = defaultMetadata

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">
        {/* Skip to content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary-black focus:text-primary-white focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2"
        >
          Skip to main content
        </a>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-3V5HNKE0K7"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3V5HNKE0K7');
          `}
        </Script>
        <ProgressIndicator />
        <Navigation />
        <PageTransition>{children}</PageTransition>
        <Footer />
      </body>
    </html>
  )
}

