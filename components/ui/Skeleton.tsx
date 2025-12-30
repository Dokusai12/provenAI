'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SkeletonProps {
  className?: string
  variant?: 'text' | 'circular' | 'rectangular' | 'card'
  width?: string | number
  height?: string | number
}

export default function Skeleton({
  className,
  variant = 'rectangular',
  width,
  height,
  ...props
}: SkeletonProps) {
  const baseClasses = 'bg-gray-medium animate-pulse rounded'
  
  const variantClasses = {
    text: 'h-4 rounded',
    circular: 'rounded-full',
    rectangular: 'rounded-lg',
    card: 'rounded-lg p-6 space-y-4',
  }

  const style: React.CSSProperties = {}
  if (width) style.width = typeof width === 'number' ? `${width}px` : width
  if (height) style.height = typeof height === 'number' ? `${height}px` : height

  return (
    <motion.div
      className={cn(baseClasses, variantClasses[variant], className)}
      style={style}
      animate={{
        opacity: [0.5, 1, 0.5],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      {...props}
    />
  )
}

// Skeleton variants for common use cases
export function SkeletonCard() {
  return (
    <div className="p-6 border border-gray-medium rounded-lg space-y-4">
      <Skeleton variant="rectangular" height={24} width="60%" />
      <Skeleton variant="text" width="100%" />
      <Skeleton variant="text" width="80%" />
      <Skeleton variant="text" width="90%" />
    </div>
  )
}

export function SkeletonTable() {
  return (
    <div className="space-y-3">
      {[1, 2, 3, 4, 5].map((i) => (
        <div key={i} className="flex gap-4">
          <Skeleton variant="text" width="40%" height={20} />
          <Skeleton variant="text" width="20%" height={20} />
          <Skeleton variant="text" width="20%" height={20} />
          <Skeleton variant="text" width="20%" height={20} />
        </div>
      ))}
    </div>
  )
}

export function SkeletonList() {
  return (
    <div className="space-y-3">
      {[1, 2, 3, 4].map((i) => (
        <Skeleton key={i} variant="text" width="100%" height={20} />
      ))}
    </div>
  )
}


