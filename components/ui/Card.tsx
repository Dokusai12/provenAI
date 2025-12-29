'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
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
    default: 'bg-primary-white border border-gray-medium',
    elevated: 'bg-gray-dark border border-gray-medium shadow-lg',
    minimal: 'bg-gray-very-light border-0',
    featured: 'bg-primary-white border-2 border-primary-black shadow-xl',
  }

  return (
    <motion.div
      className={cn(
        'rounded-lg p-6 transition-all duration-300',
        variants[variant],
        className
      )}
      whileHover={
        variant === 'default'
          ? { y: -4, boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }
          : variant === 'elevated'
          ? { boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }
          : variant === 'minimal'
          ? { backgroundColor: '#f5f5f5' }
          : variant === 'featured'
          ? { boxShadow: '0 25px 50px rgba(0,0,0,0.2)' }
          : {}
      }
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

