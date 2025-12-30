'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function ProgressIndicator() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)
    
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
    }
    
    mediaQuery.addEventListener('change', handleChange)

    const updateScrollProgress = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      const progress = (scrollTop / (documentHeight - windowHeight)) * 100
      setScrollProgress(Math.min(100, Math.max(0, progress)))
    }

    window.addEventListener('scroll', updateScrollProgress)
    updateScrollProgress()

    return () => {
      window.removeEventListener('scroll', updateScrollProgress)
      mediaQuery.removeEventListener('change', handleChange)
    }
  }, [])

  if (prefersReducedMotion) {
    return null
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-gray-very-light">
      <motion.div
        className="h-full bg-primary-black"
        initial={{ width: '0%' }}
        animate={{ width: `${scrollProgress}%` }}
        transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
      />
    </div>
  )
}

