'use client'

import Card from '@/components/ui/Card'
import { motion } from 'framer-motion'

const milestones = [
  {
    date: '2024-03-01',
    title: 'EU AI Act Published',
    description: 'Official publication in the EU Official Journal',
    status: 'completed',
  },
  {
    date: '2024-08-01',
    title: 'Entry into Force',
    description: 'EU AI Act entered into force',
    status: 'completed',
  },
  {
    date: '2025-02-02',
    title: 'Prohibited AI Practices Apply',
    description: 'Ban on prohibited AI practices now in effect',
    status: 'completed',
  },
  {
    date: '2025-08-02',
    title: 'General-Purpose AI Rules Apply',
    description: 'Rules for general-purpose AI models now in effect',
    status: 'completed',
  },
  {
    date: '2026-08-02',
    title: 'High-Risk AI Systems Rules Apply',
    description: 'Full requirements for high-risk AI systems will take effect',
    status: 'upcoming',
  },
]

function getDaysUntil(date: string) {
  const today = new Date()
  const target = new Date(date)
  const diff = target.getTime() - today.getTime()
  return Math.ceil(diff / (1000 * 60 * 60 * 24))
}

export default function ComplianceCalendar() {
  const nextMilestone = milestones.find(m => m.status === 'upcoming')
  const daysUntil = nextMilestone ? getDaysUntil(nextMilestone.date) : 0

  return (
    <Card className="max-w-3xl mx-auto">
      <h3 className="text-h2 font-bold mb-2">EU AI Act Compliance Timeline</h3>
      <p className="text-body text-gray-subtle mb-8">
        EU AI Act milestones and implementation status
      </p>

      {nextMilestone && daysUntil > 0 && (
        <div className="mb-8 p-6 bg-primary-black text-primary-white rounded-lg text-center">
          <div className="text-4xl font-bold mb-2">{daysUntil}</div>
          <div className="text-body-lg mb-2">Days Until</div>
          <div className="text-h3 font-bold">{nextMilestone.title}</div>
          <div className="text-body opacity-90 mt-2">{nextMilestone.date}</div>
        </div>
      )}
      
      {nextMilestone && daysUntil <= 0 && (
        <div className="mb-8 p-6 bg-green-600 text-primary-white rounded-lg text-center">
          <div className="text-h3 font-bold mb-2">✓ EU AI Act Now in Effect</div>
          <div className="text-body-lg">Most provisions are now active. Ensure your compliance.</div>
        </div>
      )}

      <div className="space-y-4">
        {milestones.map((milestone, idx) => {
          const days = getDaysUntil(milestone.date)
          return (
            <motion.div
              key={milestone.date}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={`border-l-4 p-4 rounded-r-lg ${
                milestone.status === 'completed'
                  ? 'border-green-500 bg-green-50'
                  : milestone.status === 'upcoming'
                  ? 'border-orange-500 bg-orange-50'
                  : 'border-gray-medium bg-gray-very-light'
              }`}
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <h4 className="font-bold mb-1">{milestone.title}</h4>
                  <p className="text-sm text-gray-subtle">{milestone.description}</p>
                </div>
                <div className="text-right ml-4">
                  <div className="text-sm font-bold">{milestone.date}</div>
                  {milestone.status === 'upcoming' && (
                    <div className="text-xs text-gray-subtle mt-1">{days} days</div>
                  )}
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>

      <div className="mt-6 p-4 bg-gray-very-light rounded-lg">
        <p className="text-body text-gray-dark">
          <strong>Compliance Required:</strong> The EU AI Act is now in effect. 
          ProvenAI certification can help you demonstrate compliance with current requirements.
        </p>
      </div>
    </Card>
  )
}

