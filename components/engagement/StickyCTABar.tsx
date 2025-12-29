'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import { motion, AnimatePresence } from 'framer-motion'

interface StickyCTABarProps {
  ctaText?: string
  ctaHref?: string
}

export default function StickyCTABar({ ctaText = 'Get Certified', ctaHref = '/apply' }: StickyCTABarProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
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
  }, [lastScrollY])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-primary-white border-t-2 border-primary-black shadow-lg"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <div className="flex items-center justify-between">
              <div className="hidden sm:block">
                <p className="text-body font-medium">Ready to get certified?</p>
              </div>
              <Link href={ctaHref}>
                <Button variant="primary" size="sm">
                  {ctaText}
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

