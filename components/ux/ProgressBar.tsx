'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ProgressBarProps {
  currentStep: number
  totalSteps: number
  className?: string
}

export default function ProgressBar({
  currentStep,
  totalSteps,
  className,
}: ProgressBarProps) {
  const progress = (currentStep / totalSteps) * 100
  const steps = Array.from({ length: totalSteps }, (_, i) => i + 1)

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
      <div className="flex justify-between items-center">
        {steps.map((step) => (
          <div key={step} className="flex flex-col items-center flex-1">
            <div
              className={cn(
                'w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300',
                step <= currentStep
                  ? 'bg-primary-black text-primary-white'
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
                Step {step}
              </motion.div>
            )}
          </div>
        ))}
      </div>

      {/* Percentage Display */}
      <div className="text-center mt-4">
        <motion.span
          className="text-small text-gray-subtle"
          key={progress}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {Math.round(progress)}% Complete
        </motion.span>
      </div>
    </div>
  )
}

