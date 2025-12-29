'use client'

import React, { useEffect, useRef } from 'react'
import { useFormState } from 'react-hook-form'
import { cn } from '@/lib/utils'

interface FormErrorSummaryProps {
  errors: Record<string, any>
  show?: boolean
  className?: string
}

export default function FormErrorSummary({
  errors,
  show = false,
  className,
}: FormErrorSummaryProps) {
  const summaryRef = useRef<HTMLDivElement>(null)
  const errorCount = Object.keys(errors).length

  // Get all error messages
  const getErrorMessages = (errors: Record<string, any>): Array<{ field: string; message: string }> => {
    const messages: Array<{ field: string; message: string }> = []
    
    const traverse = (obj: any, prefix = '') => {
      Object.keys(obj).forEach((key) => {
        const value = obj[key]
        const fieldName = prefix ? `${prefix}.${key}` : key
        
        if (value?.message) {
          messages.push({ field: fieldName, message: value.message })
        } else if (typeof value === 'object' && value !== null) {
          traverse(value, fieldName)
        }
      })
    }
    
    traverse(errors)
    return messages
  }

  const errorMessages = getErrorMessages(errors)

  const scrollToError = (fieldName: string) => {
    // Try to find the input element
    const field = document.querySelector(`[name="${fieldName}"], [id*="${fieldName}"]`)
    if (field) {
      field.scrollIntoView({ behavior: 'smooth', block: 'center' })
      ;(field as HTMLElement).focus()
    }
  }

  if (!show || errorCount === 0) {
    return null
  }

  return (
    <div
      ref={summaryRef}
      className={cn(
        'border-2 border-red-500 bg-red-50 rounded-lg p-4 mb-6',
        className
      )}
      role="alert"
      aria-live="polite"
    >
      <div className="flex items-start gap-3">
        <svg
          className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <div className="flex-1">
          <h3 className="text-sm font-semibold text-red-800 mb-2">
            Please fix {errorCount} {errorCount === 1 ? 'error' : 'errors'} before submitting:
          </h3>
          <ul className="list-disc list-inside space-y-1">
            {errorMessages.map((error, index) => (
              <li key={index}>
                <button
                  type="button"
                  onClick={() => scrollToError(error.field)}
                  className="text-sm text-red-700 hover:underline text-left"
                >
                  {error.message}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}


