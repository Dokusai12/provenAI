'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import Button from './ui/Button'
import { cn } from '@/lib/utils'
import StaggerContainer from './animations/StaggerContainer'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/standards', label: 'Standards' },
  { href: '/resources', label: 'Resources' },
  { href: '/directory', label: 'Directory' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="sticky top-0 z-50 bg-primary-white border-b border-gray-medium">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-h3 font-bold">ProvenAI</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'text-body hover:text-primary-black transition-colors duration-200 relative',
                  pathname === link.href && 'font-medium'
                )}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-black"
                    layoutId="activeIndicator"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}
            <Link href="/apply">
              <Button variant="primary" size="sm">
                Get Certified
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-dark focus:outline-none focus:ring-2 focus:ring-primary-black min-h-[44px] min-w-[44px]"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                onClick={() => setIsOpen(false)}
              />
              <motion.div
                className="md:hidden py-4 border-t border-gray-medium bg-primary-white relative z-50"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
              >
                <StaggerContainer staggerDelay={0.05}>
                  <div className="flex flex-col space-y-4">
                    {navLinks.map((link) => (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: navLinks.indexOf(link) * 0.05 }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className={cn(
                            'text-body hover:text-primary-black transition-colors block py-2',
                            pathname === link.href && 'font-medium border-l-4 border-primary-black pl-4'
                          )}
                        >
                          {link.label}
                        </Link>
                      </motion.div>
                    ))}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: navLinks.length * 0.05 }}
                    >
                      <Link href="/apply" onClick={() => setIsOpen(false)}>
                        <Button variant="primary" size="sm" className="w-full min-h-[44px]">
                          Get Certified
                        </Button>
                      </Link>
                    </motion.div>
                  </div>
                </StaggerContainer>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

