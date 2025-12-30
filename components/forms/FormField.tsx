import React from 'react'
import { cn } from '@/lib/utils'

interface FormFieldProps {
  children: React.ReactNode
  label?: string
  error?: string
  helperText?: string
  required?: boolean
  className?: string
  showSuccess?: boolean
  successMessage?: string
}

export default function FormField({
  children,
  label,
  error,
  helperText,
  required,
  className,
  showSuccess = false,
  successMessage,
}: FormFieldProps) {
  const hasError = !!error
  const showSuccessState = showSuccess && !hasError

  return (
    <div className={cn('w-full', className)}>
      {label && (
        <label className="block text-sm font-medium mb-2">
          {label}
          {required && <span className="text-error ml-1">*</span>}
        </label>
      )}
      {children}
      {error && (
        <p className="mt-1 text-sm text-error flex items-center gap-1" role="alert" id={`${label}-error`}>
          <svg
            className="w-4 h-4 flex-shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          {error}
        </p>
      )}
      {showSuccessState && (
        <p className="mt-1 text-sm text-success flex items-center gap-1">
          <svg
            className="w-4 h-4 flex-shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          {successMessage || 'Looks good!'}
        </p>
      )}
      {helperText && !error && !showSuccessState && (
        <p className="mt-1 text-sm text-gray-subtle">{helperText}</p>
      )}
    </div>
  )
}


