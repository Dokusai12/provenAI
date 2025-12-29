'use client'

import { useState, useEffect } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { motion, AnimatePresence } from 'framer-motion'
import type { ApplicationFormData } from '@/types'
import FormProgress from '@/components/forms/FormProgress'
import FormErrorSummary from '@/components/forms/FormErrorSummary'
import AutoSaveIndicator from '@/components/forms/AutoSaveIndicator'
import AnimatedButton from '@/components/animations/AnimatedButton'
import Card from '@/components/ui/Card'

interface MultiStepFormProps {
  steps: Array<{
    id: string
    title: string
    component: React.ComponentType<any>
    estimatedTime?: number
  }>
  onSubmit: (data: ApplicationFormData) => Promise<void>
  defaultValues?: Partial<ApplicationFormData>
  onStepChange?: (step: number) => void
}

export default function MultiStepForm({
  steps,
  onSubmit,
  defaultValues,
  onStepChange,
}: MultiStepFormProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  const methods = useForm<ApplicationFormData>({
    defaultValues,
    mode: 'onBlur',
  })

  const { trigger, getValues } = methods

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)
    
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
    }
    
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  // Load saved progress
  useEffect(() => {
    const savedData = localStorage.getItem('provenai-application')
    const savedStep = localStorage.getItem('provenai-application-step')
    if (savedData && savedStep) {
      try {
        const data = JSON.parse(savedData)
        methods.reset(data)
        setCurrentStep(parseInt(savedStep, 10))
      } catch (e) {
        // Invalid saved data
      }
    }
  }, [methods])

  // Auto-save on change
  useEffect(() => {
    const subscription = methods.watch((data) => {
      localStorage.setItem('provenai-application', JSON.stringify(data))
      localStorage.setItem('provenai-application-step', currentStep.toString())
    })
    return () => subscription.unsubscribe()
  }, [methods.watch, currentStep])

  const nextStep = async () => {
    const currentStepFields = getStepFields(currentStep)
    const isValid = await trigger(currentStepFields as any)
    if (isValid) {
      const next = Math.min(currentStep + 1, steps.length - 1)
      setCurrentStep(next)
      onStepChange?.(next)
      // Focus management - move focus to the step heading
      setTimeout(() => {
        const stepHeading = document.querySelector(`[data-step="${next}"]`)
        if (stepHeading) {
          ;(stepHeading as HTMLElement).focus()
        }
      }, 100)
    } else {
      // Focus on first error field
      const firstErrorField = document.querySelector('[aria-invalid="true"]')
      if (firstErrorField) {
        ;(firstErrorField as HTMLElement).focus()
      }
    }
  }

  const prevStep = () => {
    const prev = Math.max(currentStep - 1, 0)
    setCurrentStep(prev)
    onStepChange?.(prev)
    // Focus management
    setTimeout(() => {
      const stepHeading = document.querySelector(`[data-step="${prev}"]`)
      if (stepHeading) {
        ;(stepHeading as HTMLElement).focus()
      }
    }, 100)
  }

  const goToStep = async (stepIndex: number) => {
    if (stepIndex < currentStep) {
      setCurrentStep(stepIndex)
    } else if (stepIndex > currentStep) {
      const currentStepFields = getStepFields(currentStep)
      const isValid = await trigger(currentStepFields as any)
      if (isValid) {
        setCurrentStep(stepIndex)
      }
    }
  }

  const handleSubmit = async (data: ApplicationFormData) => {
    setIsSubmitting(true)
    try {
      await onSubmit(data)
      localStorage.removeItem('provenai-application')
      localStorage.removeItem('provenai-application-step')
    } finally {
      setIsSubmitting(false)
    }
  }

  const getStepFields = (stepIndex: number): string[] => {
    // Return field names for current step validation
    const stepFieldMap: Record<number, string[]> = {
      0: ['companyName', 'website', 'companyType', 'companySize', 'location'],
      1: ['contactName', 'email', 'role'],
      2: ['aiServicesDescription', 'aiTechnologies', 'technicalTeamSize'],
      3: ['linkedInProfiles'],
      4: ['certificationTier'],
      5: ['agreeToTerms', 'confirmAccuracy', 'agreeToReview', 'understandCriteria'],
    }
    return stepFieldMap[stepIndex] || []
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Only handle if not in an input/textarea/select
      const target = e.target as HTMLElement
      if (
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.tagName === 'SELECT'
      ) {
        return
      }

      if (e.key === 'ArrowLeft' && currentStep > 0) {
        e.preventDefault()
        prevStep()
      } else if (e.key === 'ArrowRight' && currentStep < steps.length - 1) {
        e.preventDefault()
        nextStep()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentStep, steps.length])

  const CurrentStepComponent = steps[currentStep].component

  const { formState: { errors } } = methods
  const estimatedTimeRemaining = steps
    .slice(currentStep)
    .reduce((sum, step) => sum + (step.estimatedTime || 0), 0)

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(handleSubmit)}>
        {/* Progress Indicator */}
        <div className="mb-8">
          <FormProgress
            currentStep={currentStep + 1}
            totalSteps={steps.length}
            estimatedTimeRemaining={estimatedTimeRemaining}
          />
        </div>

        {/* Error Summary */}
        <FormErrorSummary
          errors={errors}
          show={Object.keys(errors).length > 0 && currentStep === steps.length - 1}
        />

        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={prefersReducedMotion ? {} : { opacity: 0, x: 20 }}
            animate={prefersReducedMotion ? {} : { opacity: 1, x: 0 }}
            exit={prefersReducedMotion ? {} : { opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Card>
              <h2
                className="text-h2 font-bold mb-6"
                data-step={currentStep}
                tabIndex={-1}
                id={`step-${currentStep}-heading`}
              >
                {steps[currentStep].title}
              </h2>
              <div
                role="region"
                aria-labelledby={`step-${currentStep}-heading`}
                aria-live="polite"
              >
                <CurrentStepComponent />
              </div>
            </Card>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-between mt-8">
          <AnimatedButton
            type="button"
            variant="secondary"
            onClick={prevStep}
            disabled={currentStep === 0}
            aria-label="Go to previous step"
          >
            Previous
          </AnimatedButton>

          {currentStep < steps.length - 1 ? (
            <AnimatedButton
              type="button"
              variant="primary"
              onClick={nextStep}
              aria-label="Go to next step"
            >
              Next
            </AnimatedButton>
          ) : (
            <AnimatedButton
              type="submit"
              variant="primary"
              loading={isSubmitting}
              aria-label="Submit application"
            >
              Submit Application
            </AnimatedButton>
          )}
        </div>
        
        {/* Keyboard hint */}
        <p className="text-xs text-gray-subtle text-center mt-4">
          Tip: Use arrow keys to navigate between steps
        </p>
      </form>
      <AutoSaveIndicator />
    </FormProvider>
  )
}

