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
    default: 'bg-primary-white border border-gray-medium',
    elevated: 'bg-gray-dark border border-gray-medium shadow-lg',
    minimal: 'bg-gray-very-light border-0',
    featured: 'bg-primary-white border-2 border-primary-black shadow-xl',
  }

  return (
    <div
      className={cn(
        'rounded-lg p-6 transition-all duration-300',
        variant === 'default' && 'hover:shadow-md hover:-translate-y-1',
        variant === 'elevated' && 'hover:shadow-xl',
        variant === 'minimal' && 'hover:bg-gray-very-light-alt',
        variant === 'featured' && 'hover:shadow-2xl',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

