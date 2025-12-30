'use client'

import React from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'
import { cn } from '@/lib/utils'

export interface CardProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  children: React.ReactNode
  variant?: 'default' | 'elevated' | 'minimal' | 'featured'
}

export default function Card({
  variant = 'default',
  className,
  children,
  ...props
}: CardProps) {
  const variants = {
    default: 'bg-primary-white border border-gray-medium shadow-sm',
    elevated: 'bg-gray-dark border border-gray-medium shadow-lg text-primary-white',
    minimal: 'bg-gray-very-light border-0',
    featured: 'bg-primary-white border-2 border-primary-black shadow-xl',
  }

  const hoverEffects = {
    default: { y: -2, boxShadow: '0 8px 20px rgba(0,0,0,0.1)' },
    elevated: { boxShadow: '0 20px 40px rgba(0,0,0,0.2)' },
    minimal: { backgroundColor: '#f5f5f5' },
    featured: { y: -2, boxShadow: '0 12px 30px rgba(0,0,0,0.15)' },
  }

  return (
    <motion.div
      className={cn(
        'rounded-lg p-6 transition-all duration-200',
        variants[variant],
        className
      )}
      whileHover={hoverEffects[variant]}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

