'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface TierSelectionCardProps {
  tier: {
    value: string
    label: string
    price: string
    features?: string[]
  }
  isSelected: boolean
  isRecommended?: boolean
  onSelect: () => void
}

export default function TierSelectionCard({
  tier,
  isSelected,
  isRecommended = false,
  onSelect,
}: TierSelectionCardProps) {
  return (
    <div
      className={cn(
        'relative border-2 rounded-lg p-6 cursor-pointer transition-all',
        'hover:shadow-lg',
        isSelected
          ? 'border-primary-black bg-gray-dark'
          : 'border-gray-medium hover:border-primary-black'
      )}
      onClick={onSelect}
    >
      {isRecommended && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary-black text-primary-white px-3 py-1 rounded-full text-xs font-medium">
          Recommended
        </div>
      )}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-h3 font-bold">{tier.label}</h3>
        <div className="text-right">
          <div className="text-h4 font-bold">{tier.price}</div>
          <div className="text-xs text-gray-subtle">per year</div>
        </div>
      </div>
      {tier.features && (
        <ul className="space-y-2 mb-4">
          {tier.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2 text-sm">
              <svg
                className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}
      <div className="flex items-center justify-center">
        <div
          className={cn(
            'w-5 h-5 rounded-full border-2 flex items-center justify-center',
            isSelected
              ? 'border-primary-black bg-primary-black'
              : 'border-gray-medium'
          )}
        >
          {isSelected && (
            <svg
              className="w-3 h-3 text-primary-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M5 13l4 4L19 7"
              />
            </svg>
          )}
        </div>
      </div>
    </div>
  )
}

