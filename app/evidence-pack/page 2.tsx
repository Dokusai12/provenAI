'use client'

import { useState } from 'react'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Input from '@/components/ui/Input'
import Select from '@/components/ui/Select'
import Textarea from '@/components/ui/Textarea'
import EvidencePackPreview from '@/components/EvidencePackPreview'
import PreviewModal from '@/components/PreviewModal'
import Breadcrumbs from '@/components/ux/Breadcrumbs'
import ScrollReveal from '@/components/animations/ScrollReveal'
import { useForm } from 'react-hook-form'

interface SamplePackFormData {
  email: string
  companyName: string
  website: string
  industry: string
  aiUsage: string
  region: string
  question?: string
  honeypot?: string
}

export default function EvidencePackPage() {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm<SamplePackFormData>()

  const onSubmit = async (data: SamplePackFormData) => {
    // Honeypot check
    if (data.honeypot) {
      return
    }

    setIsSubmitting(true)
    try {
      const response = await fetch('/api/generate-sample-pack', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitSuccess(true)
      } else {
        alert('Something went wrong. Please try again.')
      }
    } catch (error) {
      alert('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const packSections = [
    {
      title: 'Executive Summary',
      description: 'Overview of AI governance approach and key highlights',
    },
    {
      title: 'AI Systems Inventory',
      description: 'Complete register of all AI systems with details, classifications, and status',
    },
    {
      title: 'Ownership & Sign-off',
      description: 'Clear documentation of who owns and is accountable for each AI system',
    },
    {
      title: 'Risk Classification Rationale',
      description: 'Documented risk classifications with rationale aligned to EU AI Act categories',
    },
    {
      title: 'Monitoring Plan',
      description: 'Ongoing monitoring processes, metrics, and review cadences',
    },
    {
      title: 'Change Log & Incident Log',
      description: 'History of system updates, changes, and any incidents',
    },
  ]

  if (submitSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card variant="default" className="p-12 text-center">
            <div className="mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 className="text-h2 font-bold mb-4">Request received</h1>
              <p className="text-body-lg text-gray-subtle mb-6">
                We've received your request for a sample Evidence Pack. Our team will review your information and send you a personalized sample pack within 2-3 business days.
              </p>
              <p className="text-body text-gray-subtle mb-8">
                In the meantime, you can explore the interactive preview above or contact us if you have any questions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button variant="primary" size="md">
                    Contact us
                  </Button>
                </Link>
                <Button variant="secondary" size="md" onClick={() => setIsPreviewOpen(true)}>
                  See sample pack
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-12 bg-primary-white border-b border-[rgba(0,0,0,0.08)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs className="mb-6" />
          <ScrollReveal direction="fade">
            <h1 className="text-h1 font-bold mb-4">Evidence Pack</h1>
            <p className="text-body-lg text-gray-subtle max-w-3xl">
              Turn your AI usage into procurement-ready proof. An exportable Evidence Pack that buyers and procurement teams can review.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Preview Section */}
      <section className="py-12 bg-gray-very-light border-b border-[rgba(0,0,0,0.08)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="fade">
            <div className="mb-8">
              <h2 className="text-h2 font-bold mb-4">Preview</h2>
              <p className="text-body text-gray-subtle mb-6">
                Explore an interactive preview of what your Evidence Pack would look like.
              </p>
              <Button
                variant="secondary"
                size="md"
                onClick={() => setIsPreviewOpen(true)}
                className="mb-6"
              >
                Open full-screen preview
              </Button>
            </div>
            <EvidencePackPreview variant="default" className="h-[700px]" />
          </ScrollReveal>
        </div>
      </section>

      {/* What's Inside Section */}
      <section className="py-12 bg-primary-white border-b border-[rgba(0,0,0,0.08)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="fade">
            <h2 className="text-h2 font-bold mb-8">What is inside the pack</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {packSections.map((section, index) => (
                <Card key={index} variant="minimal" className="p-6">
                  <h3 className="text-h4 font-bold mb-2">{section.title}</h3>
                  <p className="text-body text-gray-subtle">{section.description}</p>
                </Card>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Generate Sample Pack Form */}
      <section className="py-12 bg-gray-very-light border-b border-[rgba(0,0,0,0.08)]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="fade">
            <h2 className="text-h2 font-bold mb-4 text-center">Generate a sample pack</h2>
            <p className="text-body-lg text-gray-subtle text-center mb-12">
              Request a personalized sample Evidence Pack based on your company's profile.
            </p>
            <Card variant="default" className="p-8">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Honeypot */}
                <input
                  type="text"
                  {...register('honeypot')}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <Input
                  label="Work email"
                  type="email"
                  required
                  {...register('email', { required: 'Email is required' })}
                  error={errors.email?.message}
                />

                <Input
                  label="Company name"
                  type="text"
                  required
                  {...register('companyName', { required: 'Company name is required' })}
                  error={errors.companyName?.message}
                />

                <Input
                  label="Website"
                  type="url"
                  required
                  {...register('website', { required: 'Website is required' })}
                  error={errors.website?.message}
                />

                <Select
                  label="Industry"
                  required
                  options={[
                    { value: '', label: 'Select industry' },
                    { value: 'saas', label: 'SaaS' },
                    { value: 'fintech', label: 'Fintech' },
                    { value: 'healthcare', label: 'Healthcare' },
                    { value: 'hr', label: 'HR' },
                    { value: 'agency', label: 'Agency' },
                    { value: 'other', label: 'Other' },
                  ]}
                  {...register('industry', { required: 'Industry is required' })}
                  error={errors.industry?.message}
                />

                <Select
                  label="AI usage"
                  required
                  options={[
                    { value: '', label: 'Select AI usage type' },
                    { value: 'third-party', label: 'Third-party models only' },
                    { value: 'internal', label: 'Internal models only' },
                    { value: 'both', label: 'Both third-party and internal' },
                  ]}
                  {...register('aiUsage', { required: 'AI usage type is required' })}
                  error={errors.aiUsage?.message}
                />

                <Select
                  label="Region"
                  required
                  options={[
                    { value: '', label: 'Select region' },
                    { value: 'uk', label: 'UK' },
                    { value: 'eu', label: 'EU' },
                    { value: 'global', label: 'Global' },
                  ]}
                  {...register('region', { required: 'Region is required' })}
                  error={errors.region?.message}
                />

                <Textarea
                  label="Biggest buyer question (optional)"
                  {...register('question')}
                  rows={4}
                  placeholder="What's the most common question you get from buyers about your AI usage?"
                />

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Request sample pack'}
                </Button>
              </form>
            </Card>
          </ScrollReveal>
        </div>
      </section>

      {/* What This Is Not Section */}
      <section className="py-12 bg-primary-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="fade">
            <Card variant="minimal" className="p-8">
              <h2 className="text-h3 font-bold mb-4">What this is not</h2>
              <ul className="space-y-3 text-body text-gray-subtle">
                <li>• <strong>Legal advice:</strong> We do not provide legal advice or interpretation of regulations.</li>
                <li>• <strong>Compliance guarantee:</strong> We do not guarantee compliance with EU AI Act or any other regulations.</li>
                <li>• <strong>Technical audit:</strong> We do not audit your AI systems for technical accuracy or performance.</li>
                <li>• <strong>Certification:</strong> The Evidence Pack is documentation. Certification is a separate optional service.</li>
              </ul>
              <p className="text-body text-gray-subtle mt-6">
                The Evidence Pack is a tool to help you document and communicate your AI governance practices. It is your responsibility to ensure accuracy and compliance with applicable regulations.
              </p>
            </Card>
          </ScrollReveal>
        </div>
      </section>

      <PreviewModal isOpen={isPreviewOpen} onClose={() => setIsPreviewOpen(false)} />
    </div>
  )
}

