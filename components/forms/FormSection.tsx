'use client'

import React, { useState } from 'react'
import { cn } from '@/lib/utils'

interface FormSectionProps {
  title: string
  icon?: React.ReactNode
  children: React.ReactNode
  collapsible?: boolean
  defaultExpanded?: boolean
  className?: string
}

export default function FormSection({
  title,
  icon,
  children,
  collapsible = false,
  defaultExpanded = true,
  className,
}: FormSectionProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded)

  return (
    <div className={cn('border border-gray-medium rounded-lg bg-primary-white', className)}>
      <div
        className={cn(
          'px-6 py-4 border-b border-gray-medium',
          collapsible && 'cursor-pointer hover:bg-gray-dark transition-colors'
        )}
        onClick={() => collapsible && setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {icon && <div className="text-primary-black">{icon}</div>}
            <h3 className="text-h3 font-bold text-primary-black">{title}</h3>
          </div>
          {collapsible && (
            <svg
              className={cn(
                'w-5 h-5 text-gray-subtle transition-transform',
                isExpanded && 'rotate-180'
              )}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          )}
        </div>
      </div>
      {isExpanded && <div className="p-6">{children}</div>}
    </div>
  )
}


