import React, { useState } from 'react'
import { cn } from '@/lib/utils'

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode
  error?: string
  showSuccess?: boolean
}

export default function Checkbox({
  label,
  error,
  showSuccess,
  className,
  id,
  checked,
  onBlur,
  onFocus,
  ...props
}: CheckboxProps) {
  const checkboxId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`
  const [isFocused, setIsFocused] = useState(false)
  const [isTouched, setIsTouched] = useState(false)
  const isValid = showSuccess && !error && isTouched && checked

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false)
    setIsTouched(true)
    onBlur?.(e)
  }

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true)
    onFocus?.(e)
  }

  return (
    <div className="w-full">
      <div className="flex items-start">
        <div className="relative flex-shrink-0">
          <input
            type="checkbox"
            id={checkboxId}
            className={cn(
              'mt-1 h-5 w-5 rounded border transition-all',
              'text-primary-black focus:ring-2 focus:ring-offset-2',
              'disabled:opacity-50 disabled:cursor-not-allowed',
              error
                ? 'border-red-500 focus:ring-red-500'
                : isValid
                ? 'border-green-500 focus:ring-green-500'
                : isFocused
                ? 'border-primary-black focus:ring-primary-black'
                : 'border-gray-medium focus:ring-primary-black',
              className
            )}
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={error ? `${checkboxId}-error` : undefined}
            checked={checked}
            onBlur={handleBlur}
            onFocus={handleFocus}
            {...props}
          />
          {isValid && (
            <div className="absolute -top-0.5 -right-0.5">
              <svg
                className="w-3 h-3 text-green-500 bg-primary-white rounded-full"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          )}
        </div>
        {label && (
          <label
            htmlFor={checkboxId}
            className="ml-3 text-sm leading-5 cursor-pointer flex-1"
          >
            {label}
            {props.required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
      </div>
      {error && (
        <p
          id={`${checkboxId}-error`}
          className="mt-1 ml-8 text-sm text-red-500"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  )
}

