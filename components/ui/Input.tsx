import React, { useState } from 'react'
import { cn } from '@/lib/utils'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helperText?: string
  showSuccess?: boolean
  maxLength?: number
  showCharCount?: boolean
}

export default function Input({
  label,
  error,
  helperText,
  showSuccess,
  maxLength,
  showCharCount,
  className,
  id,
  value,
  onChange,
  ...props
}: InputProps) {
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`
  const [isFocused, setIsFocused] = useState(false)
  const [isTouched, setIsTouched] = useState(false)
  const currentValue = typeof value === 'string' ? value : ''
  const charCount = maxLength ? currentValue.length : undefined
  const isValid = showSuccess && !error && isTouched && currentValue.length > 0

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false)
    setIsTouched(true)
    props.onBlur?.(e)
  }

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true)
    props.onFocus?.(e)
  }

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={inputId}
          className="block text-sm font-medium mb-2"
        >
          {label}
          {props.required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <div className="relative">
        <input
          id={inputId}
          className={cn(
            'w-full px-4 py-3 border rounded-lg transition-all',
            'bg-primary-white text-primary-black',
            'focus:outline-none focus:ring-2 focus:border-transparent',
            'disabled:bg-gray-light disabled:cursor-not-allowed',
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
          aria-describedby={
            error
              ? `${inputId}-error`
              : helperText
              ? `${inputId}-helper`
              : showCharCount && maxLength
              ? `${inputId}-char-count`
              : undefined
          }
          value={value}
          onChange={onChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
          maxLength={maxLength}
          {...props}
        />
        {isValid && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
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
          </div>
        )}
        {error && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
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
          </div>
        )}
      </div>
      <div className="mt-1 flex items-center justify-between">
        <div>
          {error && (
            <p id={`${inputId}-error`} className="text-sm text-red-500" role="alert">
              {error}
            </p>
          )}
          {helperText && !error && (
            <p id={`${inputId}-helper`} className="text-sm text-gray-subtle">
              {helperText}
            </p>
          )}
        </div>
        {showCharCount && maxLength && (
          <p
            id={`${inputId}-char-count`}
            className={cn(
              'text-xs ml-2',
              charCount && charCount > maxLength * 0.9
                ? 'text-orange-500'
                : 'text-gray-subtle'
            )}
          >
            {charCount}/{maxLength}
          </p>
        )}
      </div>
    </div>
  )
}

