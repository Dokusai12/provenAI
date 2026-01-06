'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'

interface PageTransitionProps {
  children: React.ReactNode
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname()
  const [displayLocation, setDisplayLocation] = useState(pathname)
  const [isLoading, setIsLoading] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    if (pathname !== displayLocation) {
      setIsLoading(true)
      // Small delay to allow the animation to show
      const timer = setTimeout(() => {
        setDisplayLocation(pathname)
        setIsLoading(false)
        // Scroll to top on route change (only if not same anchor)
        if (!pathname.includes('#')) {
          window.scrollTo({ top: 0, behavior: shouldReduceMotion ? 'auto' : 'smooth' })
        }
      }, 150)

      return () => clearTimeout(timer)
    }
  }, [pathname, displayLocation, shouldReduceMotion])

  // Respect prefers-reduced-motion
  if (shouldReduceMotion) {
    return <main id="main-content">{children}</main>
  }

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.main
          id="main-content"
          key={displayLocation}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{
            duration: 0.2,
            ease: [0.4, 0, 0.2, 1],
          }}
        >
          {children}
        </motion.main>
      </AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed top-16 left-0 right-0 h-1 bg-gray-very-light z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="h-full bg-primary-black"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{
              duration: 0.3,
              ease: [0.4, 0, 0.2, 1],
            }}
          />
        </motion.div>
      )}
    </>
  )
}

