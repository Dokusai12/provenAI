'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface FormProgressProps {
  currentStep: number
  totalSteps: number
  estimatedTimeRemaining?: number
  className?: string
}

export default function FormProgress({
  currentStep,
  totalSteps,
  estimatedTimeRemaining,
  className,
}: FormProgressProps) {
  const progress = (currentStep / totalSteps) * 100
  const steps = Array.from({ length: totalSteps }, (_, i) => i + 1)

  const stepNames = [
    'Company Info',
    'Contact',
    'Technical',
    'Materials',
    'Tier',
    'Review',
  ]

  return (
    <div className={cn('w-full', className)}>
      {/* Progress Bar */}
      <div className="relative h-2 bg-gray-very-light rounded-full mb-4">
        <motion.div
          className="absolute top-0 left-0 h-full bg-primary-black rounded-full"
          initial={{ width: '0%' }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        />
      </div>

      {/* Step Indicators */}
      <div className="flex justify-between items-center mb-4">
        {steps.map((step) => (
          <div key={step} className="flex flex-col items-center flex-1">
            <div
              className={cn(
                'w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300',
                step < currentStep
                  ? 'bg-primary-black text-primary-white'
                  : step === currentStep
                  ? 'bg-primary-black text-primary-white ring-2 ring-primary-black ring-offset-2'
                  : 'bg-gray-very-light text-gray-subtle border-2 border-gray-medium'
              )}
            >
              {step < currentStep ? (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              ) : (
                step
              )}
            </div>
            {step === currentStep && (
              <motion.div
                className="mt-2 text-xs font-medium text-primary-black"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {stepNames[step - 1]}
              </motion.div>
            )}
          </div>
        ))}
      </div>

      {/* Progress Info */}
      <div className="flex items-center justify-between text-sm mb-3">
        <span className="text-gray-subtle">
          Step {currentStep} of {totalSteps}
        </span>
        <div className="flex items-center gap-4">
          <span className="text-gray-subtle">
            {Math.round(progress)}% Complete
          </span>
          {estimatedTimeRemaining && estimatedTimeRemaining > 0 && (
            <span className="text-gray-subtle">
              ~{estimatedTimeRemaining} min remaining
            </span>
          )}
        </div>
      </div>

      {/* Encouragement Messages */}
      {(() => {
        const getEncouragementMessage = () => {
          if (progress >= 90) return { text: "🎉 Almost there! Just review and submit.", color: "text-green-600" }
          if (progress >= 70) return { text: "💪 You're doing great! Keep going!", color: "text-primary-black" }
          if (progress >= 50) return { text: "✨ Halfway there! You've got this.", color: "text-primary-black" }
          if (progress >= 25) return { text: "🚀 Great start! Keep it up.", color: "text-primary-black" }
          return { text: "👋 Let's get started!", color: "text-primary-black" }
        }
        const message = getEncouragementMessage()
        return (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            key={currentStep}
            className={`text-sm font-medium ${message.color}`}
          >
            {message.text}
          </motion.div>
        )
      })()}
    </div>
  )
}


