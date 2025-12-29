'use client'

import { useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Card from '@/components/ui/Card'

interface InfographicProps {
  type: 'cost' | 'timeline' | 'process'
}

export default function AnimatedInfographic({ type }: InfographicProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  if (type === 'cost') {
    return (
      <Card ref={ref} className="max-w-4xl mx-auto">
        <h3 className="text-h2 font-bold mb-6 text-center">Cost of Non-Compliance</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { label: 'EU AI Act Fines', value: '€35M', subtext: 'or 7% of revenue', color: '#dc2626' },
            { label: 'Reputation Damage', value: 'High', subtext: 'Loss of trust', color: '#ea580c' },
            { label: 'Lost Contracts', value: 'Unmeasurable', subtext: 'Buyer risk aversion', color: '#ca8a04' },
          ].map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.2 }}
              className="text-center p-6 border-2 rounded-lg"
              style={{ borderColor: item.color }}
            >
              <div className="text-3xl font-bold mb-2" style={{ color: item.color }}>
                {item.value}
              </div>
              <div className="text-body font-medium mb-1">{item.label}</div>
              <div className="text-sm text-gray-subtle">{item.subtext}</div>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 p-4 bg-gray-very-light rounded-lg">
          <p className="text-body text-gray-dark text-center">
            <strong>Prevent costly penalties.</strong> ProvenAI certification helps demonstrate compliance readiness and reduce risk.
          </p>
        </div>
      </Card>
    )
  }

  if (type === 'timeline') {
    const milestones = [
      { date: '2024', label: 'EU AI Act Published', status: 'completed' },
      { date: '2025 Q1', label: 'Prohibited Practices Apply', status: 'upcoming' },
      { date: '2025 Q3', label: 'General Purpose AI Rules', status: 'upcoming' },
      { date: '2026 Q3', label: 'High-Risk Systems Rules', status: 'upcoming' },
    ]

    return (
      <Card ref={ref} className="max-w-4xl mx-auto">
        <h3 className="text-h2 font-bold mb-6 text-center">EU AI Act Timeline</h3>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-6 bottom-6 w-1 bg-gray-medium"></div>
          
          <div className="space-y-8">
            {milestones.map((milestone, idx) => (
              <motion.div
                key={milestone.date}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: idx * 0.2 }}
                className="relative pl-12"
              >
                <div
                  className={`absolute left-0 top-0 w-6 h-6 rounded-full border-4 border-primary-white -ml-3 ${
                    milestone.status === 'completed'
                      ? 'bg-green-500'
                      : milestone.status === 'upcoming'
                      ? 'bg-orange-500'
                      : 'bg-gray-medium'
                  }`}
                />
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-h3 font-bold mb-1">{milestone.label}</div>
                    <div className="text-body text-gray-subtle">{milestone.date}</div>
                  </div>
                  {milestone.status === 'completed' && (
                    <span className="text-sm bg-green-100 text-green-800 px-3 py-1 rounded-full">
                      ✓ Complete
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Card>
    )
  }

  if (type === 'process') {
    const steps = [
      { step: 1, title: 'Apply', description: 'Submit application with company and technical details', duration: '1 day' },
      { step: 2, title: 'Review', description: 'Our experts review your documentation and evidence', duration: '3-5 days' },
      { step: 3, title: 'Verify', description: 'Technical verification and compliance assessment', duration: '5-7 days' },
      { step: 4, title: 'Certify', description: 'Receive certification badge and directory listing', duration: '1 day' },
    ]

    return (
      <Card ref={ref} className="max-w-4xl mx-auto">
        <h3 className="text-h2 font-bold mb-6 text-center">Certification Process Flow</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {steps.map((step, idx) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.2 }}
              className="relative"
            >
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-6 left-full w-full h-0.5 bg-gray-medium z-0">
                  <motion.div
                    className="h-full bg-primary-black"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: '100%' } : {}}
                    transition={{ delay: idx * 0.2 + 0.3, duration: 0.5 }}
                  />
                </div>
              )}
              <div className="relative bg-gray-very-light p-4 rounded-lg text-center">
                <div className="w-12 h-12 rounded-full bg-primary-black text-primary-white flex items-center justify-center font-bold text-h3 mx-auto mb-3">
                  {step.step}
                </div>
                <h4 className="font-bold mb-2">{step.title}</h4>
                <p className="text-sm text-gray-subtle mb-2">{step.description}</p>
                <span className="text-xs text-gray-dark font-medium">{step.duration}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </Card>
    )
  }

  return null
}

