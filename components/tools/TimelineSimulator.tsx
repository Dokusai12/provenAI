'use client'

import { useState } from 'react'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { motion } from 'framer-motion'

export default function TimelineSimulator() {
  const [readinessLevel, setReadinessLevel] = useState<number>(50)
  const [showTimeline, setShowTimeline] = useState(false)

  const calculateTimeline = (readiness: number) => {
    const baseDays = 7 // Base review period
    const prepDays = readiness >= 80 ? 0 : readiness >= 60 ? 7 : readiness >= 40 ? 14 : 21
    const reviewDays = readiness >= 80 ? 3 : readiness >= 60 ? 5 : 7
    const totalDays = prepDays + reviewDays + baseDays

    const steps = [
      { name: 'Application Submission', days: 0, completed: true },
      { name: 'Documentation Review', days: Math.ceil(prepDays * 0.4), completed: readiness >= 40 },
      { name: 'Gap Remediation (if needed)', days: Math.ceil(prepDays * 0.6), completed: readiness >= 60, optional: readiness >= 60 },
      { name: 'Technical Verification', days: Math.ceil(reviewDays * 0.5), completed: readiness >= 80 },
      { name: 'Compliance Assessment', days: Math.ceil(reviewDays * 0.5), completed: readiness >= 80 },
      { name: 'Certification Decision', days: baseDays, completed: false },
    ]

    return { totalDays, steps }
  }

  const timeline = showTimeline ? calculateTimeline(readinessLevel) : null

  return (
    <Card className="max-w-2xl mx-auto">
      <h3 className="text-h2 font-bold mb-2">Certification Timeline Simulator</h3>
      <p className="text-body text-gray-subtle mb-8">
        Estimate your certification timeline based on your readiness level
      </p>

      <div className="mb-8">
        <div className="flex justify-between mb-3">
          <label className="text-body font-medium">Current Readiness Level</label>
          <span className="text-body font-bold">{readinessLevel}%</span>
        </div>
        <input
          type="range"
          min="0"
          max="100"
          step="5"
          value={readinessLevel}
          onChange={(e) => setReadinessLevel(parseInt(e.target.value))}
          className="w-full h-2 bg-gray-very-light rounded-lg appearance-none cursor-pointer"
          style={{
            background: `linear-gradient(to right, #000 0%, #000 ${readinessLevel}%, #e5e5e5 ${readinessLevel}%, #e5e5e5 100%)`,
          }}
        />
        <div className="flex justify-between text-xs text-gray-subtle mt-1">
          <span>Not Ready</span>
          <span>Fully Ready</span>
        </div>
      </div>

      {readinessLevel > 0 && (
        <div className="mb-6 p-4 bg-gray-very-light rounded-lg">
          <p className="text-body text-gray-dark">
            At {readinessLevel}% readiness, you'll likely need approximately{' '}
            <strong>{readinessLevel >= 80 ? '3-5' : readinessLevel >= 60 ? '7-10' : readinessLevel >= 40 ? '14-21' : '21-28'} days</strong>{' '}
            to prepare and submit complete documentation.
          </p>
        </div>
      )}

      {showTimeline && timeline && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <h4 className="text-h3 font-bold mb-4">Estimated Timeline</h4>
          <div className="space-y-4">
            {timeline.steps.map((step, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-black text-primary-white flex items-center justify-center font-bold">
                  {idx + 1}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <h5 className="font-bold">{step.name}</h5>
                    {step.optional && (
                      <span className="text-xs text-gray-subtle bg-gray-very-light px-2 py-1 rounded">Optional</span>
                    )}
                  </div>
                  <p className="text-sm text-gray-subtle">
                    {step.days === 0 ? 'Immediate' : step.days === 1 ? '1 day' : `${step.days} days`}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-primary-black text-primary-white rounded-lg text-center">
            <div className="text-h2 font-bold mb-2">~{timeline.totalDays} days</div>
            <div className="text-body">Estimated Total Time</div>
          </div>
        </motion.div>
      )}

      <Button
        variant="primary"
        onClick={() => setShowTimeline(true)}
        className="w-full sm:w-auto"
        disabled={readinessLevel === 0}
      >
        {showTimeline ? 'Recalculate' : 'View Timeline'}
      </Button>
    </Card>
  )
}


