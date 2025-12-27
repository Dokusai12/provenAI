'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Link from 'next/link'
import type { ApplicationFormData, CompanyType, CompanySize, CertificationTier } from '@/types'
import Card from '@/components/ui/Card'
import Input from '@/components/ui/Input'
import Textarea from '@/components/ui/Textarea'
import Select from '@/components/ui/Select'
import Checkbox from '@/components/ui/Checkbox'
import Button from '@/components/ui/Button'
import CertificationTiers from '@/components/CertificationTiers'

const companyTypeOptions = [
  { value: 'AI Agency', label: 'AI Agency' },
  { value: 'AI Product', label: 'AI Product' },
  { value: 'AI Consultancy', label: 'AI Consultancy' },
  { value: 'Other', label: 'Other' },
]

const companySizeOptions = [
  { value: '1-10', label: '1-10 employees' },
  { value: '11-50', label: '11-50 employees' },
  { value: '51-200', label: '51-200 employees' },
  { value: '200+', label: '200+ employees' },
]

const certificationTierOptions = [
  { value: 'Basic', label: 'Basic (£2,500/year)' },
  { value: 'Standard', label: 'Standard (£5,000/year)' },
  { value: 'Premium', label: 'Premium (£10,000/year)' },
]

export default function ApplyPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<ApplicationFormData>()

  const selectedTier = watch('certificationTier')

  const onSubmit = async (data: ApplicationFormData) => {
    setIsSubmitting(true)
    setSubmitError(null)

    try {
      const response = await fetch('/api/submit-application', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Failed to submit application')
      }

      setSubmitSuccess(true)
    } catch (error) {
      setSubmitError('Failed to submit application. Please try again or contact hello@provenai.io')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitSuccess) {
    return (
      <div className="min-h-screen py-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card>
            <h1 className="text-h2 font-bold mb-4">Application Received!</h1>
            <p className="text-body text-gray-subtle mb-8">
              We'll review your application and contact you within 5-7 business days.
            </p>
            <p className="text-body text-gray-subtle">
              If you have any questions, please contact us at{' '}
              <a href="mailto:hello@provenai.io" className="underline">
                hello@provenai.io
              </a>
            </p>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-12 bg-primary-white border-b border-gray-medium">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-h1 font-bold mb-4">Apply for Certification</h1>
          <p className="text-body-lg text-gray-subtle mb-4">
            Join verified AI companies. Application takes 10 minutes.
          </p>
          <div className="bg-gray-dark text-primary-white p-4 rounded-lg">
            <p className="text-body font-medium">
              Beta applications: Free certification for first 15 companies (normally £2,500/year)
            </p>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-12 bg-primary-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            {/* Company Information */}
            <Card>
              <h2 className="text-h2 font-bold mb-6">Company Information</h2>
              <div className="space-y-6">
                <Input
                  label="Company Name"
                  {...register('companyName', { required: 'Company name is required' })}
                  error={errors.companyName?.message}
                />
                <Input
                  label="Website"
                  type="url"
                  {...register('website', {
                    required: 'Website is required',
                    pattern: {
                      value: /^https?:\/\/.+/,
                      message: 'Please enter a valid URL',
                    },
                  })}
                  error={errors.website?.message}
                />
                <Select
                  label="Company Type"
                  options={companyTypeOptions}
                  {...register('companyType', { required: 'Company type is required' })}
                  error={errors.companyType?.message}
                />
                <Select
                  label="Company Size"
                  options={companySizeOptions}
                  {...register('companySize', { required: 'Company size is required' })}
                  error={errors.companySize?.message}
                />
                <Input
                  label="Year Founded"
                  type="number"
                  {...register('yearFounded')}
                  error={errors.yearFounded?.message}
                />
                <Input
                  label="Location (Country)"
                  {...register('location', { required: 'Location is required' })}
                  error={errors.location?.message}
                />
              </div>
            </Card>

            {/* Contact Information */}
            <Card>
              <h2 className="text-h2 font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <Input
                  label="Contact Name"
                  {...register('contactName', { required: 'Contact name is required' })}
                  error={errors.contactName?.message}
                />
                <Input
                  label="Email"
                  type="email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Please enter a valid email address',
                    },
                  })}
                  error={errors.email?.message}
                />
                <Input
                  label="Phone (Optional)"
                  type="tel"
                  {...register('phone')}
                  error={errors.phone?.message}
                />
                <Input
                  label="Role/Title"
                  {...register('role', { required: 'Role is required' })}
                  error={errors.role?.message}
                />
              </div>
            </Card>

            {/* Technical Details */}
            <Card>
              <h2 className="text-h2 font-bold mb-6">Technical Details</h2>
              <div className="space-y-6">
                <Textarea
                  label="Brief Description of AI Services/Products"
                  {...register('aiServicesDescription', {
                    required: 'Description is required',
                    maxLength: {
                      value: 500,
                      message: 'Description must be 500 characters or less',
                    },
                  })}
                  error={errors.aiServicesDescription?.message}
                  helperText="Maximum 500 characters"
                  rows={4}
                />
                <Textarea
                  label="AI Technologies Used"
                  {...register('aiTechnologies', {
                    required: 'AI technologies are required',
                  })}
                  error={errors.aiTechnologies?.message}
                  helperText="List models, frameworks, platforms, or custom development"
                  rows={4}
                />
                <Input
                  label="Size of Technical Team"
                  type="number"
                  {...register('technicalTeamSize', {
                    required: 'Technical team size is required',
                  })}
                  error={errors.technicalTeamSize?.message}
                />
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Portfolio/Case Study Links (up to 3)
                  </label>
                  {[0, 1, 2].map((index) => (
                    <Input
                      key={index}
                      type="url"
                      placeholder={`Link ${index + 1}`}
                      {...register(`portfolioLinks.${index}` as any)}
                      className="mb-2"
                    />
                  ))}
                </div>
              </div>
            </Card>

            {/* Supporting Materials */}
            <Card>
              <h2 className="text-h2 font-bold mb-6">Supporting Materials</h2>
              <div className="space-y-6">
                <Textarea
                  label="LinkedIn Profiles of Technical Team Members"
                  {...register('linkedInProfiles', {
                    required: 'LinkedIn profiles are required',
                  })}
                  error={errors.linkedInProfiles?.message}
                  helperText="Please provide LinkedIn profile URLs"
                  rows={3}
                />
                <Textarea
                  label="Client Testimonials/References (Optional)"
                  {...register('clientTestimonials')}
                  error={errors.clientTestimonials?.message}
                  rows={3}
                />
                <Textarea
                  label="Additional Information"
                  {...register('additionalInfo')}
                  error={errors.additionalInfo?.message}
                  rows={4}
                />
              </div>
            </Card>

            {/* Certification Tier */}
            <Card>
              <h2 className="text-h2 font-bold mb-6">Certification Tier</h2>
              <div className="space-y-4 mb-6">
                {certificationTierOptions.map((tier) => (
                  <label
                    key={tier.value}
                    className="flex items-center p-4 border border-gray-medium rounded-lg cursor-pointer hover:bg-gray-dark transition-colors"
                  >
                    <input
                      type="radio"
                      value={tier.value}
                      {...register('certificationTier', {
                        required: 'Please select a certification tier',
                      })}
                      className="mr-3 h-5 w-5"
                    />
                    <span className="text-body font-medium">{tier.label}</span>
                  </label>
                ))}
                {errors.certificationTier && (
                  <p className="text-sm text-red-500" role="alert">
                    {errors.certificationTier.message}
                  </p>
                )}
              </div>
              <div className="mt-8">
                <CertificationTiers />
              </div>
            </Card>

            {/* Terms */}
            <Card>
              <h2 className="text-h2 font-bold mb-6">Terms & Agreements</h2>
              <div className="space-y-4">
                <Checkbox
                  label={
                    <>
                      I agree to the{' '}
                      <Link href="/terms" target="_blank" className="underline">
                        Terms of Service
                      </Link>{' '}
                      and{' '}
                      <Link href="/privacy" target="_blank" className="underline">
                        Privacy Policy
                      </Link>
                    </>
                  }
                  {...register('agreeToTerms', {
                    required: 'You must agree to the Terms of Service and Privacy Policy',
                  })}
                  error={errors.agreeToTerms?.message}
                />
                <Checkbox
                  label="I confirm all information provided is accurate"
                  {...register('confirmAccuracy', {
                    required: 'You must confirm the information is accurate',
                  })}
                  error={errors.confirmAccuracy?.message}
                />
                <Checkbox
                  label="I agree to annual review process"
                  {...register('agreeToReview', {
                    required: 'You must agree to the annual review process',
                  })}
                  error={errors.agreeToReview?.message}
                />
                <Checkbox
                  label="I understand certification criteria and standards"
                  {...register('understandCriteria', {
                    required: 'You must confirm you understand the criteria',
                  })}
                  error={errors.understandCriteria?.message}
                />
              </div>
            </Card>

            {/* Submit */}
            {submitError && (
              <Card className="bg-red-50 border-red-500">
                <p className="text-body text-red-500" role="alert">
                  {submitError}
                </p>
              </Card>
            )}

            <div className="flex justify-center">
              <Button
                type="submit"
                variant="primary"
                size="lg"
                disabled={isSubmitting}
                className="min-w-[200px]"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </Button>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}

