import React, { useState } from 'react'
import { cn } from '@/lib/utils'

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  error?: string
  helperText?: string
  options: { value: string; label: string }[]
  showSuccess?: boolean
}

export default function Select({
  label,
  error,
  helperText,
  options,
  showSuccess,
  className,
  id,
  value,
  onBlur,
  onFocus,
  ...props
}: SelectProps) {
  const selectId = id || `select-${Math.random().toString(36).substr(2, 9)}`
  const [isFocused, setIsFocused] = useState(false)
  const [isTouched, setIsTouched] = useState(false)
  const isValid = showSuccess && !error && isTouched && value && value !== ''

  const handleBlur = (e: React.FocusEvent<HTMLSelectElement>) => {
    setIsFocused(false)
    setIsTouched(true)
    onBlur?.(e)
  }

  const handleFocus = (e: React.FocusEvent<HTMLSelectElement>) => {
    setIsFocused(true)
    onFocus?.(e)
  }

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={selectId}
          className="block text-sm font-medium mb-2"
        >
          {label}
          {props.required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <div className="relative">
        <select
          id={selectId}
          className={cn(
            'w-full px-4 py-3 border rounded-lg transition-all appearance-none',
            'bg-primary-white text-primary-black',
            'focus:outline-none focus:ring-2 focus:border-transparent',
            'disabled:bg-gray-light disabled:cursor-not-allowed',
            'pr-10',
            error
              ? 'border-red-500 focus:ring-red-500'
              : isValid
              ? 'border-green-500 focus:ring-green-500'
              : isFocused
              ? 'border-primary-black focus:ring-primary-black'
              : 'border-gray-medium',
            className
          )}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${selectId}-error` : helperText ? `${selectId}-helper` : undefined}
          value={value}
          onBlur={handleBlur}
          onFocus={handleFocus}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
          {isValid ? (
            <svg
              className="w-5 h-5 text-green-500"
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
          ) : error ? (
            <svg
              className="w-5 h-5 text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-5 h-5 text-gray-subtle"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
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
      {error && (
        <p id={`${selectId}-error`} className="mt-1 text-sm text-red-500" role="alert">
          {error}
        </p>
      )}
      {helperText && !error && (
        <p id={`${selectId}-helper`} className="mt-1 text-sm text-gray-subtle">
          {helperText}
        </p>
      )}
    </div>
  )
}

