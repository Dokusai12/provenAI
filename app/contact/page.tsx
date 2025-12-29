'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import type { ContactFormData } from '@/types'
import Card from '@/components/ui/Card'
import Input from '@/components/ui/Input'
import Textarea from '@/components/ui/Textarea'
import Select from '@/components/ui/Select'
import Button from '@/components/ui/Button'
import Breadcrumbs from '@/components/ux/Breadcrumbs'
import ScrollReveal from '@/components/animations/ScrollReveal'
import AnimatedButton from '@/components/animations/AnimatedButton'
import { DISPLAY_EMAIL, CONTACT_EMAIL } from '@/lib/constants'

const subjectOptions = [
  { value: 'General Inquiry', label: 'General Inquiry' },
  { value: 'Apply for Certification', label: 'Apply for Certification' },
  { value: 'Press', label: 'Press' },
  { value: 'Partnership', label: 'Partnership' },
]

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>()

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitError(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      setSubmitSuccess(true)
    } catch (error) {
      setSubmitError(`Failed to send message. Please try again or email us directly at ${DISPLAY_EMAIL}`)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitSuccess) {
    return (
      <div className="min-h-screen py-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card>
            <h1 className="text-h2 font-bold mb-4">Message Sent!</h1>
            <p className="text-body text-gray-subtle mb-8">
              We'll get back to you as soon as possible.
            </p>
            <p className="text-body text-gray-subtle">
              For certification applications, please visit our{' '}
              <a href="/apply" className="underline">
                application page
              </a>
              .
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
          <Breadcrumbs className="mb-6" />
          <ScrollReveal direction="fade">
            <h1 className="text-h1 font-bold mb-4">Contact Us</h1>
            <p className="text-body-lg text-gray-subtle">
              Have questions? We're here to help.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12 bg-primary-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <Input
                label="Name"
                {...register('name', { required: 'Name is required' })}
                error={errors.name?.message}
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
              <Select
                label="Subject"
                options={subjectOptions}
                {...register('subject', { required: 'Subject is required' })}
                error={errors.subject?.message}
              />
              <Textarea
                label="Message"
                {...register('message', { required: 'Message is required' })}
                error={errors.message?.message}
                rows={6}
              />

              {submitError && (
                <div className="p-4 bg-red-50 border border-red-500 rounded-lg">
                  <p className="text-body text-red-500" role="alert">
                    {submitError}
                  </p>
                </div>
              )}

              <AnimatedButton
                type="submit"
                variant="primary"
                size="lg"
                loading={isSubmitting}
                className="w-full"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </AnimatedButton>
            </form>
          </Card>

          {/* Alternative Contact Info */}
          <div className="mt-12 text-center">
            <p className="text-body text-gray-subtle mb-4">
              Or reach us directly:
            </p>
            <div className="space-y-2">
              <p className="text-body">
                Email:{' '}
                <a href={`mailto:${CONTACT_EMAIL}`} className="underline">
                  {DISPLAY_EMAIL}
                </a>
              </p>
              <p className="text-body">
                LinkedIn:{' '}
                <a
                  href="https://linkedin.com/company/provenai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  linkedin.com/company/provenai
                </a>
              </p>
              <p className="text-small text-gray-subtle mt-6">
                For certification applications, please visit our{' '}
                <a href="/apply" className="underline">
                  application page
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

