'use client'

import { useState, useEffect } from 'react'
import type { ApplicationFormData } from '@/types'
import Card from '@/components/ui/Card'
import MultiStepForm from '@/components/ux/MultiStepForm'
import ErrorBoundary from '@/components/forms/ErrorBoundary'
import {
  CompanyInfoStep,
  ContactInfoStep,
  TechnicalDetailsStep,
  SupportingMaterialsStep,
  CertificationTierStep,
  ReviewStep,
} from '@/components/forms/StepComponents'
import { DISPLAY_EMAIL, CONTACT_EMAIL } from '@/lib/constants'
import { validationRules } from '@/lib/validation'
import PreScreeningQuiz from '@/components/tools/PreScreeningQuiz'
import ChecklistGenerator from '@/components/tools/ChecklistGenerator'
import TimelineSimulator from '@/components/tools/TimelineSimulator'
import ScrollReveal from '@/components/animations/ScrollReveal'
import Button from '@/components/ui/Button'
import Link from 'next/link'

const steps = [
  {
    id: 'company',
    title: 'Company Information',
    component: CompanyInfoStep,
    estimatedTime: 2,
  },
  {
    id: 'contact',
    title: 'Contact Information',
    component: ContactInfoStep,
    estimatedTime: 1,
  },
  {
    id: 'technical',
    title: 'Technical Details',
    component: TechnicalDetailsStep,
    estimatedTime: 3,
  },
  {
    id: 'materials',
    title: 'Supporting Materials',
    component: SupportingMaterialsStep,
    estimatedTime: 2,
  },
  {
    id: 'tier',
    title: 'Certification Tier',
    component: CertificationTierStep,
    estimatedTime: 1,
  },
  {
    id: 'review',
    title: 'Review & Submit',
    component: ReviewStep,
    estimatedTime: 1,
  },
]

export default function ApplyPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [showErrorSummary, setShowErrorSummary] = useState(false)
  const [hasResumed, setHasResumed] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)

  // Load saved data
  useEffect(() => {
    const savedData = localStorage.getItem('provenai-application')
    const savedStep = localStorage.getItem('provenai-application-step')
    if (savedData) {
      try {
        const data = JSON.parse(savedData)
        if (Object.keys(data).length > 0) {
          setHasResumed(true)
          if (savedStep) {
            setCurrentStep(parseInt(savedStep, 10))
          }
        }
      } catch (e) {
        // Invalid saved data
      }
    }
  }, [])

  const onSubmit = async (data: ApplicationFormData, retryCount = 0) => {
    setIsSubmitting(true)
    setSubmitError(null)
    setShowErrorSummary(true)

    try {
      const response = await fetch('/api/submit-application', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        const errorMessage = errorData.error || 'Failed to submit application'
        
        // Retry on network errors (status 0 or 500-599)
        if ((response.status === 0 || (response.status >= 500 && response.status < 600)) && retryCount < 2) {
          await new Promise(resolve => setTimeout(resolve, 1000 * (retryCount + 1)))
          return onSubmit(data, retryCount + 1)
        }
        
        throw new Error(errorMessage)
      }

      // Clear saved data on success
      localStorage.removeItem('provenai-application')
      localStorage.removeItem('provenai-application-step')
      
      setSubmitSuccess(true)
    } catch (error: any) {
      const isNetworkError = error.message.includes('fetch') || error.message.includes('network')
      setSubmitError(
        isNetworkError
          ? `Network error. Please check your connection and try again. If the problem persists, contact ${DISPLAY_EMAIL}`
          : error.message || `Failed to submit application. Please try again or contact ${DISPLAY_EMAIL}`
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitSuccess) {
    return (
      <div className="min-h-screen py-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card>
            <div className="mb-6">
              <svg
                className="w-16 h-16 text-green-500 mx-auto mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h1 className="text-h2 font-bold mb-4">Application Received!</h1>
            <p className="text-body text-gray-subtle mb-8">
              We'll review your application and contact you within 5-7 business days.
            </p>
            <p className="text-body text-gray-subtle">
              If you have any questions, please contact us at{' '}
              <a href={`mailto:${CONTACT_EMAIL}`} className="underline">
                {DISPLAY_EMAIL}
              </a>
            </p>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <ErrorBoundary>
      <div className="min-h-screen">
        {/* Skip to main content link */}
        <a
          href="#main-form"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary-black focus:text-primary-white focus:rounded-lg"
        >
          Skip to main form
        </a>

        {/* Header */}
        <section className="py-12 bg-primary-white border-b border-gray-medium">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-h1 font-bold mb-4">Apply for Certification</h1>
            <p className="text-body-lg text-gray-subtle mb-4">
              Join verified AI companies. Complete your application in 6 simple steps.
            </p>
            {hasResumed && (
              <div className="bg-blue-50 border border-blue-200 text-blue-800 p-4 rounded-lg mb-4">
                <p className="text-body font-medium">
                  ✓ Resumed from saved progress
                </p>
              </div>
            )}
            <div className="bg-gray-dark text-primary-white p-4 rounded-lg mb-6">
              <p className="text-body font-medium">
                Beta applications: Free certification for first 15 companies (normally £2,500/year)
              </p>
            </div>
          </div>
        </section>

        {/* Pre-Screening Tools */}
        <section className="py-12 bg-gray-very-light border-t border-gray-medium">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal direction="fade">
              <div className="text-center mb-8">
                <h2 className="text-h2 font-bold mb-2">Prepare for Your Application</h2>
                <p className="text-body text-gray-subtle">
                  Use these tools to assess your readiness and prepare your documents
                </p>
              </div>
              <div className="space-y-12">
                <PreScreeningQuiz />
                <ChecklistGenerator />
                <TimelineSimulator />
              </div>
              <div className="text-center mt-8">
                <Link href="/resources">
                  <Button variant="secondary">
                    Explore All Tools & Resources
                  </Button>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Form */}
        <section id="main-form" className="py-12 bg-primary-white" aria-label="Application form">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Submit Error */}
            {submitError && (
              <Card className="bg-red-50 border-red-500 mb-6">
                <div className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div>
                    <p className="text-body text-red-500 font-medium mb-1" role="alert">
                      Submission Error
                    </p>
                    <p className="text-body text-red-700 mb-3">{submitError}</p>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => {
                          setSubmitError(null)
                          // Retry submission
                          const formData = JSON.parse(localStorage.getItem('provenai-application') || '{}')
                          if (Object.keys(formData).length > 0) {
                            onSubmit(formData as ApplicationFormData)
                          }
                        }}
                        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors text-sm"
                      >
                        Retry
                      </button>
                      <button
                        type="button"
                        onClick={() => setSubmitError(null)}
                        className="px-4 py-2 border border-red-500 text-red-600 rounded-lg hover:bg-red-50 transition-colors text-sm"
                      >
                        Dismiss
                      </button>
                    </div>
                  </div>
                </div>
              </Card>
            )}

            {/* Multi-Step Form */}
            <MultiStepForm
              steps={steps}
              onSubmit={onSubmit}
              defaultValues={{
                portfolioLinks: ['', '', ''],
              }}
            />
          </div>
        </section>
      </div>
    </ErrorBoundary>
  )
}
