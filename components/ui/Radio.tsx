import React, { useState } from 'react'
import { cn } from '@/lib/utils'

interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  label?: React.ReactNode
  error?: string
  showSuccess?: boolean
  options: { value: string; label: string }[]
  value?: string
  onChange?: (value: string) => void
}

export default function Radio({
  label,
  error,
  showSuccess,
  options,
  value,
  onChange,
  className,
  id,
  onBlur,
  onFocus,
  ...props
}: RadioProps) {
  const radioGroupId = id || `radio-${Math.random().toString(36).substr(2, 9)}`
  const [isFocused, setIsFocused] = useState(false)
  const [isTouched, setIsTouched] = useState(false)
  const isValid = showSuccess && !error && isTouched && value

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false)
    setIsTouched(true)
    onBlur?.(e)
  }

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true)
    onFocus?.(e)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value)
  }

  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium mb-2">
          {label}
          {props.required && <span className="text-error ml-1">*</span>}
        </label>
      )}
      <div className="space-y-2">
        {options.map((option) => {
          const optionId = `${radioGroupId}-${option.value}`
          const isSelected = value === option.value
          return (
            <div key={option.value} className="flex items-start">
              <div className="relative flex-shrink-0 mt-1">
                <input
                  type="radio"
                  id={optionId}
                  name={radioGroupId}
                  className={cn(
                    'h-5 w-5 rounded-full border transition-all duration-200 cursor-pointer',
                    'text-primary-black focus:ring-2 focus:ring-offset-2',
                    'disabled:opacity-50 disabled:cursor-not-allowed',
                    error
                      ? 'border-error focus:ring-error'
                      : isValid && isSelected
                      ? 'border-success focus:ring-success'
                      : isFocused && isSelected
                      ? 'border-primary-black focus:ring-primary-black'
                      : 'border-gray-medium focus:ring-primary-black',
                    className
                  )}
                  aria-invalid={error ? 'true' : 'false'}
                  aria-describedby={error ? `${radioGroupId}-error` : undefined}
                  checked={isSelected}
                  value={option.value}
                  onBlur={handleBlur}
                  onFocus={handleFocus}
                  onChange={handleChange}
                  {...props}
                />
                {isValid && isSelected && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-2 h-2 rounded-full bg-success"></div>
                  </div>
                )}
              </div>
              <label
                htmlFor={optionId}
                className="ml-3 text-sm leading-5 cursor-pointer flex-1"
              >
                {option.label}
              </label>
            </div>
          )
        })}
      </div>
      {error && (
        <p
          id={`${radioGroupId}-error`}
          className="mt-1 text-sm text-error"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  )
}

