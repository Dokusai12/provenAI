'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Skeleton, { SkeletonCard, SkeletonTable, SkeletonList } from './Skeleton'

interface LoadingWrapperProps {
  children: React.ReactNode
  isLoading?: boolean
  skeleton?: 'card' | 'table' | 'list' | 'custom'
  customSkeleton?: React.ReactNode
  delay?: number
  minLoadingTime?: number
}

export default function LoadingWrapper({
  children,
  isLoading = false,
  skeleton = 'card',
  customSkeleton,
  delay = 0,
  minLoadingTime = 300,
}: LoadingWrapperProps) {
  const [showLoading, setShowLoading] = useState(isLoading)
  const [startTime] = useState(Date.now())

  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        setShowLoading(true)
      }, delay)
      return () => clearTimeout(timer)
    } else {
      const elapsed = Date.now() - startTime
      const remaining = Math.max(0, minLoadingTime - elapsed)
      const timer = setTimeout(() => {
        setShowLoading(false)
      }, remaining)
      return () => clearTimeout(timer)
    }
  }, [isLoading, delay, minLoadingTime, startTime])

  const renderSkeleton = () => {
    if (customSkeleton) return customSkeleton
    switch (skeleton) {
      case 'card':
        return <SkeletonCard />
      case 'table':
        return <SkeletonTable />
      case 'list':
        return <SkeletonList />
      default:
        return <SkeletonCard />
    }
  }

  return (
    <AnimatePresence mode="wait">
      {showLoading ? (
        <motion.div
          key="loading"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
        >
          {renderSkeleton()}
        </motion.div>
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

