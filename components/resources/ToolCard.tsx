'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

interface ToolCardProps {
  id: string
  title: string
  description: string
  category: string
  icon?: React.ReactNode
  component?: React.ComponentType
  onExpand?: (id: string) => void
  isExpanded?: boolean
}

export default function ToolCard({
  id,
  title,
  description,
  category,
  icon,
  component: Component,
  onExpand,
  isExpanded = false,
}: ToolCardProps) {
  return (
    <Card className="overflow-hidden">
      {/* Compact View */}
      <div
        className="cursor-pointer"
        onClick={() => onExpand?.(id)}
      >
        <div className="flex items-start gap-4">
          {icon && (
            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gray-very-light flex items-center justify-center">
              {icon}
            </div>
          )}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-medium text-gray-subtle bg-gray-very-light px-2 py-1 rounded">
                {category}
              </span>
            </div>
            <h3 className="text-h3 font-bold mb-2">{title}</h3>
            <p className="text-body text-gray-subtle line-clamp-2">{description}</p>
          </div>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="flex-shrink-0 text-gray-subtle"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </motion.div>
        </div>
      </div>

      {/* Expanded View */}
      <AnimatePresence>
        {isExpanded && Component && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="mt-6 pt-6 border-t border-gray-medium">
              <Component />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  )
}


