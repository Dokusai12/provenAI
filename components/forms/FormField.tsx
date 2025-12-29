import React from 'react'
import { cn } from '@/lib/utils'

interface FormFieldProps {
  children: React.ReactNode
  label?: string
  error?: string
  helperText?: string
  required?: boolean
  className?: string
}

export default function FormField({
  children,
  label,
  error,
  helperText,
  required,
  className,
}: FormFieldProps) {
  return (
    <div className={cn('w-full', className)}>
      {label && (
        <label className="block text-sm font-medium mb-2">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      {children}
      {error && (
        <p className="mt-1 text-sm text-red-500" role="alert">
          {error}
        </p>
      )}
      {helperText && !error && (
        <p className="mt-1 text-sm text-gray-subtle">{helperText}</p>
      )}
    </div>
  )
}

