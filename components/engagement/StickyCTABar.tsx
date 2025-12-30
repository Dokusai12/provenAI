'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import { motion, AnimatePresence } from 'framer-motion'

interface StickyCTABarProps {
  ctaText?: string
  ctaHref?: string
}

const STORAGE_KEY = 'sticky-cta-dismissed'
const STORAGE_EXPIRY_DAYS = 7 // Dismissal expires after 7 days

const getStoredDismissal = (): boolean => {
  if (typeof window === 'undefined') return false
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) return false
    
    const { dismissed, expiry } = JSON.parse(stored)
    if (expiry && Date.now() > expiry) {
      localStorage.removeItem(STORAGE_KEY)
      return false
    }
    return dismissed === true
  } catch {
    return false
  }
}

const setStoredDismissal = (dismissed: boolean) => {
  if (typeof window === 'undefined') return
  try {
    const expiry = dismissed ? Date.now() + (STORAGE_EXPIRY_DAYS * 24 * 60 * 60 * 1000) : null
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ dismissed, expiry }))
  } catch (error) {
    // Handle quota exceeded or other storage errors
    console.error('Failed to save dismissal preference:', error)
  }
}

export default function StickyCTABar({ ctaText = 'Get Certified', ctaHref = '/apply' }: StickyCTABarProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    setIsDismissed(getStoredDismissal())

    const handleScroll = () => {
      if (isDismissed) return
      
      const currentScrollY = window.scrollY
      
      // Show bar when scrolling down past hero section (500px)
      if (currentScrollY > 500 && currentScrollY > lastScrollY) {
        setIsVisible(true)
      } else if (currentScrollY < lastScrollY || currentScrollY < 500) {
        setIsVisible(false)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY, isDismissed])

  const handleDismiss = () => {
    setIsVisible(false)
    setIsDismissed(true)
    setStoredDismissal(true)
  }

  return (
    <AnimatePresence>
      {isVisible && !isDismissed && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-primary-white border-t-2 border-primary-black shadow-lg"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <div className="flex items-center justify-between gap-4">
              <div className="hidden sm:block flex-1">
                <p className="text-body font-medium">Ready to get certified?</p>
              </div>
              <div className="flex items-center gap-3">
                <Link href={ctaHref}>
                  <Button variant="primary" size="sm">
                    {ctaText}
                  </Button>
                </Link>
                <button
                  onClick={handleDismiss}
                  className="p-2 hover:bg-gray-very-light rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary-black focus:ring-offset-2"
                  aria-label="Close notification"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

