'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import ScrollReveal from './ScrollReveal'
import Card, { CardProps } from '@/components/ui/Card'

interface AnimatedCardProps extends Omit<CardProps, 'children'> {
  children: React.ReactNode
  enable3DTilt?: boolean
  enablePress?: boolean
  revealDirection?: 'up' | 'down' | 'left' | 'right' | 'fade'
  revealDelay?: number
}

export default function AnimatedCard({
  children,
  enable3DTilt = false,
  enablePress = false,
  revealDirection = 'up',
  revealDelay = 0,
  className,
  variant,
  ...props
}: AnimatedCardProps) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const [isPressed, setIsPressed] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)
    
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
    }
    
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  const hoverVariants = {
    rest: {
      scale: 1,
      y: 0,
      rotateX: 0,
      rotateY: 0,
      boxShadow: '0px 0px 0px rgba(0, 0, 0, 0)',
    },
    hover: {
      scale: prefersReducedMotion ? 1 : 1.02,
      y: prefersReducedMotion ? 0 : -4,
      rotateX: enable3DTilt && !prefersReducedMotion ? 2 : 0,
      rotateY: enable3DTilt && !prefersReducedMotion ? 2 : 0,
      boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)',
      transition: {
        duration: 0.3,
        ease: [0.04, 0.62, 0.23, 0.98] as const,
      },
    },
    pressed: {
      scale: prefersReducedMotion ? 1 : 0.98,
      y: prefersReducedMotion ? 0 : -2,
      transition: {
        duration: 0.1,
      },
    },
  }

  return (
    <ScrollReveal direction={revealDirection} delay={revealDelay}>
      <motion.div
        variants={hoverVariants}
        initial="rest"
        whileHover="hover"
        whileTap={enablePress ? 'pressed' : 'rest'}
        onMouseDown={() => enablePress && setIsPressed(true)}
        onMouseUp={() => enablePress && setIsPressed(false)}
        onMouseLeave={() => enablePress && setIsPressed(false)}
        style={{
          perspective: enable3DTilt ? '1000px' : 'none',
          transformStyle: 'preserve-3d',
        }}
        className="h-full flex"
      >
        <Card
          variant={variant}
          className={cn('transition-all duration-300', className)}
          {...props}
        >
          {children}
        </Card>
      </motion.div>
    </ScrollReveal>
  )
}

