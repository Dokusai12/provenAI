'use client'

import { useState, useEffect } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { motion, AnimatePresence } from 'framer-motion'
import type { ApplicationFormData } from '@/types'
import ProgressBar from './ProgressBar'
import AnimatedButton from '@/components/animations/AnimatedButton'
import Card from '@/components/ui/Card'

interface MultiStepFormProps {
  steps: Array<{
    id: string
    title: string
    component: React.ComponentType<any>
  }>
  onSubmit: (data: ApplicationFormData) => Promise<void>
  defaultValues?: Partial<ApplicationFormData>
}

export default function MultiStepForm({
  steps,
  onSubmit,
  defaultValues,
}: MultiStepFormProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

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
  }, [])

  const methods = useForm<ApplicationFormData>({
    defaultValues,
    mode: 'onChange',
  })

  const { trigger, getValues } = methods

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
      setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1))
    }
  }

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0))
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
    // This should be customized based on your form structure
    const stepFieldMap: Record<number, string[]> = {
      0: ['companyName', 'website', 'companyType', 'companySize', 'location'],
      1: ['contactName', 'email', 'role'],
      2: ['aiServicesDescription', 'aiTechnologies', 'technicalTeamSize'],
      3: ['linkedInProfiles'],
      4: ['certificationTier'],
      5: ['confirmAccuracy', 'agreeToReview', 'understandCriteria'],
    }
    return stepFieldMap[stepIndex] || []
  }

  const CurrentStepComponent = steps[currentStep].component

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(handleSubmit)}>
        <div className="mb-8">
          <ProgressBar currentStep={currentStep + 1} totalSteps={steps.length} />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={prefersReducedMotion ? {} : { opacity: 0, x: 20 }}
            animate={prefersReducedMotion ? {} : { opacity: 1, x: 0 }}
            exit={prefersReducedMotion ? {} : { opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Card>
              <h2 className="text-h2 font-bold mb-6">{steps[currentStep].title}</h2>
              <CurrentStepComponent />
            </Card>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-between mt-8">
          <AnimatedButton
            type="button"
            variant="secondary"
            onClick={prevStep}
            disabled={currentStep === 0}
          >
            Previous
          </AnimatedButton>

          {currentStep < steps.length - 1 ? (
            <AnimatedButton type="button" variant="primary" onClick={nextStep}>
              Next
            </AnimatedButton>
          ) : (
            <AnimatedButton
              type="submit"
              variant="primary"
              loading={isSubmitting}
            >
              Submit Application
            </AnimatedButton>
          )}
        </div>
      </form>
    </FormProvider>
  )
}

