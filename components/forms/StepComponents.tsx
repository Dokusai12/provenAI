'use client'

import React from 'react'
import { useFormContext } from 'react-hook-form'
import Link from 'next/link'
import type { ApplicationFormData } from '@/types'
import Input from '@/components/ui/Input'
import Textarea from '@/components/ui/Textarea'
import Select from '@/components/ui/Select'
import Checkbox from '@/components/ui/Checkbox'
import DynamicLinkInput from './DynamicLinkInput'
import { validationRules } from '@/lib/validation'
import BuildingIcon from '@/components/icons/BuildingIcon'
import BriefcaseIcon from '@/components/icons/BriefcaseIcon'
import CodeIcon from '@/components/icons/CodeIcon'
import FileIcon from '@/components/icons/FileIcon'
import CheckBadgeIcon from '@/components/icons/CheckBadgeIcon'
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

// Step 1: Company Information
export function CompanyInfoStep() {
  const { register, formState: { errors, touchedFields } } = useFormContext<ApplicationFormData>()

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-4">
        <BuildingIcon className="w-6 h-6 text-primary-black" />
        <p className="text-body text-gray-subtle">
          Tell us about your company
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Company Name"
          {...register('companyName', validationRules.companyName)}
          error={errors.companyName?.message}
          showSuccess={touchedFields.companyName && !errors.companyName}
        />
        <Input
          label="Website"
          type="url"
          placeholder="https://example.com"
          {...register('website', validationRules.website)}
          error={errors.website?.message}
          showSuccess={touchedFields.website && !errors.website}
          helperText="Include https://"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Select
          label="Company Type"
          options={companyTypeOptions}
          {...register('companyType', validationRules.companyType)}
          error={errors.companyType?.message}
          showSuccess={touchedFields.companyType && !errors.companyType}
        />
        <Select
          label="Company Size"
          options={companySizeOptions}
          {...register('companySize', validationRules.companySize)}
          error={errors.companySize?.message}
          showSuccess={touchedFields.companySize && !errors.companySize}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Year Founded"
          type="number"
          placeholder="2020"
          {...register('yearFounded', validationRules.yearFounded)}
          error={errors.yearFounded?.message}
          showSuccess={touchedFields.yearFounded && !errors.yearFounded}
        />
        <Input
          label="Location (Country)"
          placeholder="United Kingdom"
          {...register('location', validationRules.location)}
          error={errors.location?.message}
          showSuccess={touchedFields.location && !errors.location}
        />
      </div>
    </div>
  )
}

// Step 2: Contact Information
export function ContactInfoStep() {
  const { register, formState: { errors, touchedFields } } = useFormContext<ApplicationFormData>()

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-4">
        <BriefcaseIcon className="w-6 h-6 text-primary-black" />
        <p className="text-body text-gray-subtle">
          How can we reach you?
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Contact Name"
          {...register('contactName', validationRules.contactName)}
          error={errors.contactName?.message}
          showSuccess={touchedFields.contactName && !errors.contactName}
        />
        <Input
          label="Email"
          type="email"
          {...register('email', validationRules.email)}
          error={errors.email?.message}
          showSuccess={touchedFields.email && !errors.email}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Phone (Optional)"
          type="tel"
          placeholder="+44 20 1234 5678"
          {...register('phone', validationRules.phone)}
          error={errors.phone?.message}
          showSuccess={touchedFields.phone && !errors.phone}
        />
        <Input
          label="Role/Title"
          placeholder="CEO, CTO, etc."
          {...register('role', validationRules.role)}
          error={errors.role?.message}
          showSuccess={touchedFields.role && !errors.role}
        />
      </div>
    </div>
  )
}

// Step 3: Technical Details
export function TechnicalDetailsStep() {
  const { register, formState: { errors, touchedFields } } = useFormContext<ApplicationFormData>()

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-4">
        <CodeIcon className="w-6 h-6 text-primary-black" />
        <p className="text-body text-gray-subtle">
          Tell us about your AI technology and services
        </p>
      </div>
      <Textarea
        label="Brief Description of AI Services/Products"
        {...register('aiServicesDescription', validationRules.aiServicesDescription)}
        error={errors.aiServicesDescription?.message}
        showSuccess={touchedFields.aiServicesDescription && !errors.aiServicesDescription}
        maxLength={500}
        helperText="Describe your AI services or products"
        rows={4}
      />
      <Textarea
        label="AI Technologies Used"
        {...register('aiTechnologies', validationRules.aiTechnologies)}
        error={errors.aiTechnologies?.message}
        showSuccess={touchedFields.aiTechnologies && !errors.aiTechnologies}
        helperText="List models, frameworks, platforms, or custom development"
        rows={4}
      />
      <Input
        label="Size of Technical Team"
        type="number"
        placeholder="5"
        {...register('technicalTeamSize', validationRules.technicalTeamSize)}
        error={errors.technicalTeamSize?.message}
        showSuccess={touchedFields.technicalTeamSize && !errors.technicalTeamSize}
      />
      <DynamicLinkInput
        name="portfolioLinks"
        label="Portfolio/Case Study Links (up to 3)"
        maxLinks={3}
        placeholder="https://example.com/case-study"
      />
    </div>
  )
}

// Step 4: Supporting Materials
export function SupportingMaterialsStep() {
  const { register, formState: { errors, touchedFields } } = useFormContext<ApplicationFormData>()

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-4">
        <FileIcon className="w-6 h-6 text-primary-black" />
        <p className="text-body text-gray-subtle">
          Share supporting materials and references
        </p>
      </div>
      <Textarea
        label="LinkedIn Profiles of Technical Team Members"
        {...register('linkedInProfiles', validationRules.linkedInProfiles)}
        error={errors.linkedInProfiles?.message}
        showSuccess={touchedFields.linkedInProfiles && !errors.linkedInProfiles}
        helperText="Please provide LinkedIn profile URLs (one per line)"
        rows={4}
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
        helperText="Any additional information you'd like to share"
        rows={4}
      />
    </div>
  )
}

// Step 5: Certification Tier Selection
export function CertificationTierStep() {
  const { register, watch, formState: { errors } } = useFormContext<ApplicationFormData>()
  const selectedTier = watch('certificationTier')

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-4">
        <CheckBadgeIcon className="w-6 h-6 text-primary-black" />
        <p className="text-body text-gray-subtle">
          Select the certification tier that best fits your needs
        </p>
      </div>
      <div className="space-y-4">
        {certificationTierOptions.map((tier) => (
          <label
            key={tier.value}
            className={`
              flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all
              ${
                selectedTier === tier.value
                  ? 'border-primary-black bg-gray-dark'
                  : 'border-gray-medium hover:border-primary-black hover:bg-gray-dark'
              }
            `}
          >
            <input
              type="radio"
              value={tier.value}
              {...register('certificationTier', validationRules.certificationTier)}
              className="mr-3 h-5 w-5"
            />
            <span className="text-body font-medium">{tier.label}</span>
          </label>
        ))}
      </div>
      {errors.certificationTier && (
        <p className="text-sm text-red-500 mt-2" role="alert">
          {errors.certificationTier.message}
        </p>
      )}
      <div className="mt-8">
        <h4 className="text-h4 font-bold mb-4">Feature Comparison</h4>
        <CertificationTiers />
        <p className="text-small text-gray-subtle mt-4">
          Need help choosing?{' '}
          <Link href="/standards" className="underline">
            View certification standards
          </Link>
        </p>
      </div>
    </div>
  )
}

// Step 6: Review & Submit
export function ReviewStep() {
  const { watch, register, formState: { errors, touchedFields } } = useFormContext<ApplicationFormData>()
  const formData = watch()

  const formatValue = (value: any): string => {
    if (Array.isArray(value)) {
      return value.filter(Boolean).join(', ') || 'None'
    }
    if (typeof value === 'boolean') {
      return value ? 'Yes' : 'No'
    }
    return value || 'Not provided'
  }

  const reviewSections = [
    {
      title: 'Company Information',
      fields: [
        { label: 'Company Name', value: formData.companyName },
        { label: 'Website', value: formData.website },
        { label: 'Company Type', value: formData.companyType },
        { label: 'Company Size', value: formData.companySize },
        { label: 'Year Founded', value: formData.yearFounded },
        { label: 'Location', value: formData.location },
      ],
    },
    {
      title: 'Contact Information',
      fields: [
        { label: 'Contact Name', value: formData.contactName },
        { label: 'Email', value: formData.email },
        { label: 'Phone', value: formData.phone },
        { label: 'Role', value: formData.role },
      ],
    },
    {
      title: 'Technical Details',
      fields: [
        { label: 'AI Services Description', value: formData.aiServicesDescription },
        { label: 'AI Technologies', value: formData.aiTechnologies },
        { label: 'Technical Team Size', value: formData.technicalTeamSize },
        { label: 'Portfolio Links', value: formData.portfolioLinks },
      ],
    },
    {
      title: 'Supporting Materials',
      fields: [
        { label: 'LinkedIn Profiles', value: formData.linkedInProfiles },
        { label: 'Client Testimonials', value: formData.clientTestimonials },
        { label: 'Additional Info', value: formData.additionalInfo },
      ],
    },
    {
      title: 'Certification',
      fields: [
        { label: 'Selected Tier', value: formData.certificationTier },
      ],
    },
  ]

  return (
    <div className="space-y-6">
      <div className="bg-gray-dark p-4 rounded-lg mb-6">
        <p className="text-body font-medium text-primary-black">
          Please review your information before submitting. You can go back to edit any section.
        </p>
      </div>
      {reviewSections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="border border-gray-medium rounded-lg p-4">
          <h4 className="text-h4 font-bold mb-4">{section.title}</h4>
          <dl className="space-y-2">
            {section.fields.map((field, fieldIndex) => (
              <div key={fieldIndex} className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <dt className="text-sm font-medium text-gray-subtle">{field.label}:</dt>
                <dd className="text-sm text-primary-black md:col-span-2">
                  {formatValue(field.value)}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      ))}

      {/* Terms & Agreements */}
      <div className="border border-gray-medium rounded-lg p-6 mt-6">
        <h4 className="text-h4 font-bold mb-4">Terms & Agreements</h4>
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
            {...register('agreeToTerms', validationRules.agreeToTerms)}
            error={errors.agreeToTerms?.message}
            showSuccess={touchedFields.agreeToTerms && !errors.agreeToTerms}
          />
          <Checkbox
            label="I confirm all information provided is accurate"
            {...register('confirmAccuracy', validationRules.confirmAccuracy)}
            error={errors.confirmAccuracy?.message}
            showSuccess={touchedFields.confirmAccuracy && !errors.confirmAccuracy}
          />
          <Checkbox
            label="I agree to annual review process"
            {...register('agreeToReview', validationRules.agreeToReview)}
            error={errors.agreeToReview?.message}
            showSuccess={touchedFields.agreeToReview && !errors.agreeToReview}
          />
          <Checkbox
            label="I understand certification criteria and standards"
            {...register('understandCriteria', validationRules.understandCriteria)}
            error={errors.understandCriteria?.message}
            showSuccess={touchedFields.understandCriteria && !errors.understandCriteria}
          />
        </div>
      </div>
    </div>
  )
}

