'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface AnimatedIconProps {
  children: React.ReactNode
  animation?: 'rotate' | 'scale' | 'bounce' | 'pulse' | 'none'
  className?: string
}

export default function AnimatedIcon({
  children,
  animation = 'scale',
  className,
}: AnimatedIconProps) {
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

  if (prefersReducedMotion || animation === 'none') {
    return <div className={className}>{children}</div>
  }

  const variants = {
    rotate: {
      rest: { rotate: 0 },
      hover: { rotate: 15, transition: { duration: 0.3 } },
    },
    scale: {
      rest: { scale: 1 },
      hover: { scale: 1.2, transition: { duration: 0.3 } },
    },
    bounce: {
      rest: { y: 0 },
      hover: { 
        y: -8,
        transition: { 
          type: 'spring',
          stiffness: 400,
          damping: 10,
        },
      },
    },
    pulse: {
      rest: { scale: 1 },
      hover: { 
        scale: [1, 1.1, 1],
        transition: { 
          duration: 0.6,
          repeat: Infinity,
        },
      },
    },
  }

  return (
    <motion.div
      variants={variants[animation]}
      initial="rest"
      whileHover="hover"
      className={cn('inline-block', className)}
    >
      {children}
    </motion.div>
  )
}

