import React from 'react'
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
    default: 'bg-primary-white border border-[rgba(0,0,0,0.08)]',
    elevated: 'bg-gray-dark border border-[rgba(0,0,0,0.08)] shadow-medium',
    minimal: 'bg-gray-very-light border-0',
    featured: 'bg-primary-white border border-primary-black shadow-soft',
  }

  return (
    <div
      className={cn(
        'rounded-soft p-6 transition-all duration-200',
        variant === 'default' && 'hover:shadow-soft',
        variant === 'elevated' && 'hover:shadow-large',
        variant === 'minimal' && 'hover:bg-gray-very-light-alt',
        variant === 'featured' && 'hover:shadow-medium',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

