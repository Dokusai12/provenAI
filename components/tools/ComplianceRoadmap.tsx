'use client'

import { useState } from 'react'
import Card from '@/components/ui/Card'
import { motion } from 'framer-motion'

const roadmapSteps = [
  {
    id: 'awareness',
    title: 'Awareness & Understanding',
    description: 'Understand EU AI Act requirements and your obligations',
    checklist: [
      'Review EU AI Act text and guidance',
      'Identify which AI systems you deploy',
      'Understand risk categorization',
      'Assess compliance obligations',
    ],
  },
  {
    id: 'assessment',
    title: 'Risk Assessment',
    description: 'Categorize your AI systems by risk level',
    checklist: [
      'Conduct risk categorization',
      'Identify high-risk AI systems',
      'Document risk levels',
      'Plan for different risk categories',
    ],
  },
  {
    id: 'governance',
    title: 'Governance Setup',
    description: 'Establish governance structures and processes',
    checklist: [
      'Create governance framework',
      'Assign compliance responsibilities',
      'Establish oversight procedures',
      'Document governance structures',
    ],
  },
  {
    id: 'technical',
    title: 'Technical Compliance',
    description: 'Implement technical requirements and controls',
    checklist: [
      'Implement quality management system',
      'Set up risk management system',
      'Document technical specifications',
      'Establish monitoring processes',
    ],
  },
  {
    id: 'data',
    title: 'Data Governance',
    description: 'Ensure data handling meets requirements',
    checklist: [
      'Document data governance procedures',
      'Ensure GDPR compliance',
      'Implement privacy by design',
      'Create data handling policies',
    ],
  },
  {
    id: 'certification',
    title: 'Certification & Verification',
    description: 'Get certified and maintain compliance',
    checklist: [
      'Apply for ProvenAI certification',
      'Complete conformity assessment (if high-risk)',
      'Maintain ongoing compliance',
      'Renew certification annually',
    ],
  },
]

export default function ComplianceRoadmap() {
  const [selectedStep, setSelectedStep] = useState<string | null>(null)
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({})

  const toggleChecklistItem = (stepId: string, itemIndex: number) => {
    const key = `${stepId}-${itemIndex}`
    setCheckedItems({ ...checkedItems, [key]: !checkedItems[key] })
  }

  return (
    <Card className="max-w-4xl mx-auto">
      <h3 className="text-h2 font-bold mb-2">EU AI Act Compliance Roadmap</h3>
      <p className="text-body text-gray-subtle mb-8">
        Interactive roadmap to guide your compliance journey. Click each step to see detailed checklist.
      </p>

      <div className="space-y-4">
        {roadmapSteps.map((step, idx) => {
          const isExpanded = selectedStep === step.id
          const stepCheckedItems = step.checklist.filter((_, itemIdx) => checkedItems[`${step.id}-${itemIdx}`])
          const stepProgress = (stepCheckedItems.length / step.checklist.length) * 100

          return (
            <div key={step.id} className="border border-gray-medium rounded-lg overflow-hidden">
              <button
                onClick={() => setSelectedStep(isExpanded ? null : step.id)}
                className="w-full p-4 text-left flex items-center justify-between hover:bg-gray-very-light transition-colors"
              >
                <div className="flex items-center gap-4 flex-1">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-black text-primary-white flex items-center justify-center font-bold">
                    {idx + 1}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold mb-1">{step.title}</h4>
                    <p className="text-sm text-gray-subtle">{step.description}</p>
                    {isExpanded && (
                      <div className="mt-2">
                        <div className="w-full bg-gray-very-light rounded-full h-2">
                          <div
                            className="bg-primary-black h-2 rounded-full transition-all"
                            style={{ width: `${stepProgress}%` }}
                          />
                        </div>
                        <span className="text-xs text-gray-subtle mt-1 block">
                          {stepCheckedItems.length} of {step.checklist.length} completed
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                <svg
                  className={`w-5 h-5 transform transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="border-t border-gray-medium"
                >
                  <div className="p-4 bg-gray-very-light">
                    <h5 className="font-bold mb-3">Checklist:</h5>
                    <div className="space-y-2">
                      {step.checklist.map((item, itemIdx) => {
                        const key = `${step.id}-${itemIdx}`
                        const checked = checkedItems[key] || false
                        return (
                          <label
                            key={itemIdx}
                            className="flex items-start gap-3 cursor-pointer hover:bg-gray-very-light-alt p-2 rounded"
                          >
                            <input
                              type="checkbox"
                              checked={checked}
                              onChange={() => toggleChecklistItem(step.id, itemIdx)}
                              className="mt-1 w-5 h-5"
                            />
                            <span className={`text-body flex-1 ${checked ? 'line-through text-gray-subtle' : 'text-gray-dark'}`}>
                              {item}
                            </span>
                          </label>
                        )
                      })}
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          )
        })}
      </div>

      <div className="mt-6 p-4 bg-gray-very-light rounded-lg">
        <p className="text-body text-gray-dark">
          <strong>Next Steps:</strong> Use this roadmap to track your compliance journey. 
          Consider applying for ProvenAI certification to verify your readiness.
        </p>
      </div>
    </Card>
  )
}


