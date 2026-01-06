'use client'

import React from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form'
import Input from '@/components/ui/Input'
import { cn } from '@/lib/utils'

interface DynamicLinkInputProps {
  name: string
  label: string
  maxLinks?: number
  placeholder?: string
  required?: boolean
  error?: string
}

export default function DynamicLinkInput({
  name,
  label,
  maxLinks = 3,
  placeholder = 'https://example.com',
  required = false,
  error,
}: DynamicLinkInputProps) {
  const { control, register, formState: { errors, touchedFields } } = useFormContext()
  const { fields, append, remove } = useFieldArray({
    control,
    name: name as any,
  })

  const fieldErrors = errors[name as any] as any
  const fieldTouched = touchedFields[name as any] as any

  // Initialize with one empty field if none exist
  React.useEffect(() => {
    if (fields.length === 0) {
      append('')
    }
  }, [fields.length, append])

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-2">
        <label className="block text-sm font-medium">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
        {fields.length < maxLinks && (
          <button
            type="button"
            onClick={() => append('')}
            className="text-sm text-primary-black hover:underline"
            aria-label={`Add another ${label}`}
          >
            + Add Link
          </button>
        )}
      </div>

      <div className="space-y-3">
        {fields.map((field, index) => (
          <div key={field.id} className="flex gap-2 items-start">
            <div className="flex-1">
              <Input
                {...register(`${name}.${index}` as any, {
                  pattern: {
                    value: /^https?:\/\/.+/,
                    message: 'Please enter a valid URL starting with http:// or https://',
                  },
                })}
                placeholder={placeholder}
                error={fieldErrors?.[index]?.message}
                showSuccess={fieldTouched?.[index] && !fieldErrors?.[index]}
                className="w-full"
              />
            </div>
            {fields.length > 1 && (
              <button
                type="button"
                onClick={() => remove(index)}
                className="mt-0.5 p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                aria-label={`Remove ${label} ${index + 1}`}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            )}
          </div>
        ))}
      </div>

      {error && (
        <p className="mt-1 text-sm text-red-500" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}

