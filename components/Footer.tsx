'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { DISPLAY_EMAIL, CONTACT_EMAIL } from '@/lib/constants'
import Input from './ui/Input'
import Button from './ui/Button'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, this would submit to your email service
    setSubscribed(true)
    setEmail('')
    setTimeout(() => setSubscribed(false), 3000)
  }

  return (
    <footer className="bg-primary-white border-t border-gray-medium mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Newsletter Signup */}
        <div className="mb-12 pb-12 border-b border-gray-medium">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-h3 font-bold mb-2">Get Weekly EU AI Act Updates</h3>
            <p className="text-body text-gray-subtle mb-4">
              Stay informed with curated compliance news and regulatory updates
            </p>
            {subscribed ? (
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                <p className="text-body font-medium">✓ Successfully subscribed!</p>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 items-center sm:items-center">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 w-full sm:w-auto h-[44px]"
                />
                <Button type="submit" variant="primary" size="md" className="w-full sm:w-auto">
                  Subscribe
                </Button>
              </form>
            )}
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 text-small">
            <Link href="/about" className="hover:text-primary-black transition-colors">
              About
            </Link>
            <Link href="/standards" className="hover:text-primary-black transition-colors">
              Standards
            </Link>
            <Link href="/resources" className="hover:text-primary-black transition-colors">
              Resources
            </Link>
            <Link href="/directory" className="hover:text-primary-black transition-colors">
              Directory
            </Link>
            <Link href="/contact" className="hover:text-primary-black transition-colors">
              Contact
            </Link>
            <Link href="/terms" className="hover:text-primary-black transition-colors">
              Terms
            </Link>
            <Link href="/privacy" className="hover:text-primary-black transition-colors">
              Privacy
            </Link>
          </div>

          {/* Contact & Social */}
          <div className="flex flex-col items-center md:items-end space-y-2 text-small">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="hover:text-primary-black transition-colors"
            >
              {DISPLAY_EMAIL}
            </a>
            <a
              href="https://linkedin.com/company/provenai"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-black transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-medium text-center text-caption text-gray-subtle">
          <p>ProvenAI © {currentYear} | Verifying Legitimate AI</p>
        </div>
      </div>
    </footer>
  )
}

