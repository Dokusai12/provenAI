import React, { useState, useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  helperText?: string
  showSuccess?: boolean
  maxLength?: number
  autoResize?: boolean
}

export default function Textarea({
  label,
  error,
  helperText,
  showSuccess,
  maxLength,
  autoResize = false,
  className,
  id,
  value,
  onChange,
  rows = 4,
  ...props
}: TextareaProps) {
  const textareaId = id || `textarea-${Math.random().toString(36).substr(2, 9)}`
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const [isFocused, setIsFocused] = useState(false)
  const [isTouched, setIsTouched] = useState(false)
  const currentValue = typeof value === 'string' ? value : ''
  const charCount = maxLength ? currentValue.length : undefined
  const isValid = showSuccess && !error && isTouched && currentValue.length > 0

  // Auto-resize functionality
  useEffect(() => {
    if (autoResize && textareaRef.current) {
      textareaRef.current.style.height = 'auto'
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
    }
  }, [currentValue, autoResize])

  const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    setIsFocused(false)
    setIsTouched(true)
    props.onBlur?.(e)
  }

  const handleFocus = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    setIsFocused(true)
    props.onFocus?.(e)
  }

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={textareaId}
          className="block text-sm font-medium mb-2"
        >
          {label}
          {props.required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <div className="relative">
        <textarea
          ref={textareaRef}
          id={textareaId}
          className={cn(
            'w-full px-4 py-3 border rounded-lg transition-all duration-200',
            'bg-primary-white text-primary-black',
            'focus:outline-none focus:ring-2 focus:border-transparent',
            'disabled:bg-gray-light disabled:cursor-not-allowed disabled:opacity-50',
            'resize-y',
            autoResize ? 'overflow-hidden' : '',
            !autoResize && rows === 4 ? 'min-h-[120px]' : '',
            error
              ? 'border-error focus:ring-error'
              : isValid
              ? 'border-success focus:ring-success'
              : isFocused
              ? 'border-primary-black focus:ring-primary-black'
              : 'border-gray-medium',
            className
          )}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={
            error
              ? `${textareaId}-error`
              : helperText
              ? `${textareaId}-helper`
              : maxLength
              ? `${textareaId}-char-count`
              : undefined
          }
          value={value}
          onChange={onChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
          maxLength={maxLength}
          rows={autoResize ? undefined : rows}
          {...props}
        />
        {isValid && (
          <div className="absolute right-3 top-3">
            <svg
              className="w-5 h-5 text-success"
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
          <div className="absolute right-3 top-3">
            <svg
              className="w-5 h-5 text-error"
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
            <p id={`${textareaId}-error`} className="text-sm text-error" role="alert">
              {error}
            </p>
          )}
          {helperText && !error && (
            <p id={`${textareaId}-helper`} className="text-sm text-gray-subtle">
              {helperText}
            </p>
          )}
        </div>
        {maxLength && (
          <p
            id={`${textareaId}-char-count`}
            className={cn(
              'text-xs ml-2',
              charCount && charCount > maxLength * 0.9
                ? 'text-orange-500'
                : charCount && charCount > maxLength
                ? 'text-red-500'
                : 'text-gray-subtle'
            )}
          >
            {charCount || 0}/{maxLength}
          </p>
        )}
      </div>
    </div>
  )
}

