'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { cn } from '@/lib/utils'

interface TextRevealProps {
  text: string
  mode?: 'word' | 'letter' | 'fade'
  delay?: number
  className?: string
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
}

export default function TextReveal({
  text,
  mode = 'word',
  delay = 0,
  className,
  as: Component = 'span',
}: TextRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)
    
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
    }
    
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  if (mode === 'fade' || prefersReducedMotion) {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.6, delay }}
      >
        <Component className={className}>{text}</Component>
      </motion.div>
    )
  }

  const words = text.split(' ')
  const letters = text.split('')

  if (mode === 'word') {
    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className={cn('inline-block', className)}
      >
        {words.map((word, index) => (
          <motion.span
            key={index}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{
              duration: 0.3,
              delay: delay + index * 0.05,
            }}
            className="inline-block mr-2"
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    )
  }

  if (mode === 'letter') {
    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className={cn('inline-block', className)}
      >
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{
              duration: 0.2,
              delay: delay + index * 0.02,
            }}
            className="inline-block"
          >
            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
        ))}
      </motion.div>
    )
  }

  return null
}

