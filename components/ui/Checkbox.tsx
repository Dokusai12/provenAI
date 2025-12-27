import React from 'react'
import { cn } from '@/lib/utils'

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode
  error?: string
}

export default function Checkbox({
  label,
  error,
  className,
  id,
  ...props
}: CheckboxProps) {
  const checkboxId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`

  return (
    <div className="w-full">
      <div className="flex items-start">
        <input
          type="checkbox"
          id={checkboxId}
          className={cn(
            'mt-1 h-5 w-5 rounded border-gray-medium',
            'text-primary-black focus:ring-2 focus:ring-primary-black',
            'disabled:opacity-50 disabled:cursor-not-allowed',
            error && 'border-red-500',
            className
          )}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${checkboxId}-error` : undefined}
          {...props}
        />
        {label && (
          <label
            htmlFor={checkboxId}
            className="ml-3 text-sm leading-5 cursor-pointer"
          >
            {label}
            {props.required && <span className="text-primary-black ml-1">*</span>}
          </label>
        )}
      </div>
      {error && (
        <p id={`${checkboxId}-error`} className="mt-1 text-sm text-red-500" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}

