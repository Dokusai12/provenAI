'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

const scenarios = [
  {
    title: 'Buyer Decision-Making',
    without: {
      heading: 'Without Certification',
      points: [
        'Extensive vendor due diligence required',
        'Unverified compliance claims',
        'High procurement risk',
        'Time-consuming assessment process',
        'Uncertain AI safety posture',
      ],
    },
    with: {
      heading: 'With ProvenAI Certification',
      points: [
        'Trust verified compliance status',
        'Reduced due diligence burden',
        'Lower procurement risk',
        'Quick vendor assessment',
        'Confidence in AI safety',
      ],
    },
  },
  {
    title: 'Sales & Marketing',
    without: {
      heading: 'Without Certification',
      points: [
        'Unverified marketing claims',
        'Buyer skepticism',
        'Lost deals due to compliance concerns',
        'Manual compliance demonstrations',
        'Competitive disadvantage',
      ],
    },
    with: {
      heading: 'With ProvenAI Certification',
      points: [
        'Verified claims and trust signals',
        'Competitive differentiation',
        'Faster sales cycles',
        'Proven compliance badge',
        'Featured directory listing',
      ],
    },
  },
  {
    title: 'Compliance & Risk',
    without: {
      heading: 'Without Certification',
      points: [
        'Unknown compliance gaps',
        'EU AI Act enforcement risk',
        'Potential €35M fines',
        'No structured risk management',
        'Reactive compliance approach',
      ],
    },
    with: {
      heading: 'With ProvenAI Certification',
      points: [
        'Verified compliance readiness',
        'Reduced regulatory risk',
        'Structured risk management',
        'Annual compliance reviews',
        'Proactive compliance posture',
      ],
    },
  },
]

export default function BeforeAfterScenarios() {
  const [selectedScenario, setSelectedScenario] = useState(0)

  return (
    <Card className="max-w-5xl mx-auto">
      <h3 className="text-h2 font-bold mb-6 text-center">Before & After: Certification Impact</h3>
      
      {/* Scenario Selector */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {scenarios.map((scenario, idx) => (
          <Button
            key={idx}
            variant={selectedScenario === idx ? 'primary' : 'secondary'}
            size="sm"
            onClick={() => setSelectedScenario(idx)}
          >
            {scenario.title}
          </Button>
        ))}
      </div>

      {/* Comparison Cards */}
      <motion.div
        key={selectedScenario}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* Without Certification */}
        <div className="border-2 border-red-200 rounded-lg p-6 bg-red-50">
          <h4 className="text-h3 font-bold mb-4 text-red-900">
            {scenarios[selectedScenario].without.heading}
          </h4>
          <ul className="space-y-3">
            {scenarios[selectedScenario].without.points.map((point, idx) => (
              <li key={idx} className="flex items-start">
                <span className="text-red-600 mr-3 text-xl">✗</span>
                <span className="text-body text-gray-dark">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* With Certification */}
        <div className="border-2 border-green-200 rounded-lg p-6 bg-green-50">
          <h4 className="text-h3 font-bold mb-4 text-green-900">
            {scenarios[selectedScenario].with.heading}
          </h4>
          <ul className="space-y-3">
            {scenarios[selectedScenario].with.points.map((point, idx) => (
              <li key={idx} className="flex items-start">
                <span className="text-green-600 mr-3 text-xl">✓</span>
                <span className="text-body text-gray-dark">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      <div className="mt-6 text-center">
        <Button variant="primary" size="lg">
          Get Certified Today
        </Button>
      </div>
    </Card>
  )
}

