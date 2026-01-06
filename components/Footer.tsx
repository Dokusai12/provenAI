import React from 'react'
import Link from 'next/link'
import { DISPLAY_EMAIL, CONTACT_EMAIL } from '@/lib/constants'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary-white border-t border-gray-medium mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 text-small">
            <Link href="/evidence-engine" className="hover:text-primary-black transition-colors">
              Evidence Engine
            </Link>
            <Link href="/evidence-pack" className="hover:text-primary-black transition-colors">
              Evidence Pack
            </Link>
            <Link href="/certification" className="hover:text-primary-black transition-colors">
              Certification
            </Link>
            <Link href="/directory" className="hover:text-primary-black transition-colors">
              Directory
            </Link>
            <Link href="/standards" className="hover:text-primary-black transition-colors">
              Standards
            </Link>
            <Link href="/resources" className="hover:text-primary-black transition-colors">
              Resources
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
        <div className="mt-8 pt-8 border-t border-[rgba(0,0,0,0.08)] text-center text-small text-gray-subtle">
          <p>ProvenAI © {currentYear} | AI Governance Evidence for Procurement</p>
        </div>
      </div>
    </footer>
  )
}

