'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import ProvenAIBadge from '@/components/ProvenAIBadge'
import Link from 'next/link'

const demoSteps = [
  {
    id: 'badge',
    title: 'Certification Badge',
    description: 'Display the ProvenAI badge on your website to show verified compliance',
    content: (
      <div className="p-8 bg-gray-very-light rounded-lg flex items-center justify-center">
        <div className="text-center">
          <ProvenAIBadge />
          <p className="mt-4 text-body text-gray-dark font-medium">Your Company Name</p>
        </div>
      </div>
    ),
  },
  {
    id: 'directory',
    title: 'Directory Listing',
    description: 'Get featured in the ProvenAI certified directory for buyer discovery',
    content: (
      <Card className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-h3 font-bold mb-2">Your Company Name</h3>
            <span className="text-small text-gray-subtle bg-gray-dark px-2 py-1 rounded">
              AI Agency
            </span>
          </div>
          <ProvenAIBadge size="small" />
        </div>
        <p className="text-body text-gray-dark mb-4">
          We provide AI solutions with verified compliance and safety practices. Certified by ProvenAI.
        </p>
        <div className="flex items-center gap-4">
          <span className="text-small text-gray-subtle">✓ Verified Compliance</span>
          <span className="text-small text-gray-subtle">✓ EU AI Act Ready</span>
          <span className="text-small text-gray-subtle">✓ ISO 42001 Aligned</span>
        </div>
      </Card>
    ),
  },
  {
    id: 'certificate',
    title: 'Official Certificate',
    description: 'Receive a downloadable certificate showing your compliance status',
    content: (
      <div className="p-8 bg-gradient-to-br from-gray-very-light to-gray-light rounded-lg border-2 border-gray-medium">
        <div className="bg-primary-white p-8 rounded-lg shadow-lg text-center">
          <div className="mb-6">
            <ProvenAIBadge />
          </div>
          <h3 className="text-h2 font-bold mb-2">Certificate of Compliance</h3>
          <p className="text-body-lg text-gray-dark mb-4">This certifies that</p>
          <p className="text-h3 font-bold mb-6">Your Company Name</p>
          <p className="text-body text-gray-dark mb-6">
            has met the ProvenAI certification standards for AI Safety & Compliance
          </p>
          <div className="flex justify-center gap-6 text-sm text-gray-subtle">
            <div>
              <strong>Certified:</strong> January 2025
            </div>
            <div>
              <strong>Valid Until:</strong> January 2026
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-gray-medium">
            <Button variant="secondary" size="sm">
              Download Certificate
            </Button>
          </div>
        </div>
      </div>
    ),
  },
]

export default function CertificationDemo() {
  const [currentStep, setCurrentStep] = useState(0)

  return (
    <Card className="max-w-4xl mx-auto">
      <h3 className="text-h2 font-bold mb-2 text-center">See Certification in Action</h3>
      <p className="text-body text-gray-subtle text-center mb-8">
        Preview what you'll receive as a certified company
      </p>

      {/* Step Navigation */}
      <div className="flex justify-center gap-2 mb-8">
        {demoSteps.map((step, idx) => (
          <button
            key={step.id}
            onClick={() => setCurrentStep(idx)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              currentStep === idx
                ? 'bg-primary-black text-primary-white'
                : 'bg-gray-very-light text-gray-dark hover:bg-gray-medium'
            }`}
          >
            {step.title}
          </button>
        ))}
      </div>

      {/* Step Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="mb-6">
            <h4 className="text-h3 font-bold mb-2 text-center">
              {demoSteps[currentStep].title}
            </h4>
            <p className="text-body text-gray-subtle text-center mb-6">
              {demoSteps[currentStep].description}
            </p>
            {demoSteps[currentStep].content}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-8">
        <Button
          variant="secondary"
          onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
          disabled={currentStep === 0}
        >
          ← Previous
        </Button>
        <div className="flex gap-2">
          {demoSteps.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentStep(idx)}
              className={`w-2 h-2 rounded-full transition-all ${
                idx === currentStep ? 'bg-primary-black w-6' : 'bg-gray-medium'
              }`}
              aria-label={`Go to step ${idx + 1}`}
            />
          ))}
        </div>
        <Button
          variant="secondary"
          onClick={() => setCurrentStep(Math.min(demoSteps.length - 1, currentStep + 1))}
          disabled={currentStep === demoSteps.length - 1}
        >
          Next →
        </Button>
      </div>

      <div className="mt-8 text-center">
        <Link href="/apply">
          <Button variant="primary" size="lg">
            Get Your Certification
          </Button>
        </Link>
      </div>
    </Card>
  )
}

