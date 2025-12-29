'use client'

import { useState } from 'react'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { motion } from 'framer-motion'
import CheckCircleIcon from '@/components/icons/CheckCircleIcon'
import EyeIcon from '@/components/icons/EyeIcon'
import ShieldCheckIcon from '@/components/icons/ShieldCheckIcon'
import GearIcon from '@/components/icons/GearIcon'
import FileIcon from '@/components/icons/FileIcon'
import BriefcaseIcon from '@/components/icons/BriefcaseIcon'

const criteria = [
  { id: 'truth', name: 'Truth-in-Marketing', icon: EyeIcon },
  { id: 'data', name: 'Data Handling & Privacy', icon: ShieldCheckIcon },
  { id: 'monitoring', name: 'Model Monitoring & Evaluation', icon: GearIcon },
  { id: 'security', name: 'Security Posture', icon: CheckCircleIcon },
  { id: 'risk', name: 'Risk Management', icon: BriefcaseIcon },
  { id: 'governance', name: 'Governance & Accountability', icon: FileIcon },
]

export default function ReadinessScore() {
  const [scores, setScores] = useState<Record<string, number>>({})
  const [showResults, setShowResults] = useState(false)

  const handleScoreChange = (criterionId: string, score: number) => {
    setScores({ ...scores, [criterionId]: score })
  }

  const overallScore = Object.keys(criteria).length > 0
    ? Math.round(Object.values(scores).reduce((a, b) => a + b, 0) / criteria.length)
    : 0

  const allScored = Object.keys(scores).length === criteria.length

  if (showResults) {
    return (
      <Card className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="text-center mb-8">
            <div className="text-6xl font-bold mb-4" style={{ color: overallScore >= 80 ? '#16a34a' : overallScore >= 60 ? '#ca8a04' : '#ea580c' }}>
              {overallScore}
            </div>
            <p className="text-body-lg text-gray-dark font-medium">Compliance Readiness Score</p>
            <p className="text-body text-gray-subtle mt-2">
              {overallScore >= 80
                ? 'Excellent! You\'re well-prepared for certification.'
                : overallScore >= 60
                ? 'Good progress. Focus on the areas below.'
                : 'Build out these areas to improve readiness.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {criteria.map((criterion) => {
              const score = scores[criterion.id] || 0
              const Icon = criterion.icon
              return (
                <div key={criterion.id} className="border border-gray-medium rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{criterion.name}</span>
                    </div>
                    <span className="font-bold text-lg">{score}/100</span>
                  </div>
                  <div className="w-full bg-gray-very-light rounded-full h-3 mb-2">
                    <div
                      className="h-3 rounded-full transition-all"
                      style={{
                        width: `${score}%`,
                        backgroundColor: score >= 75 ? '#16a34a' : score >= 50 ? '#ca8a04' : '#ea580c',
                      }}
                    />
                  </div>
                  <div className="text-xs text-gray-subtle">
                    {score >= 75 ? 'Ready' : score >= 50 ? 'Needs improvement' : 'Critical gaps'}
                  </div>
                </div>
              )
            })}
          </div>

          <div className="bg-gray-very-light p-6 rounded-lg mb-6">
            <h4 className="font-bold mb-3">Next Steps:</h4>
            <ul className="space-y-2 text-body text-gray-dark">
              {Object.entries(scores)
                .filter(([_, score]) => score < 75)
                .map(([id]) => {
                  const criterion = criteria.find(c => c.id === id)
                  return (
                    <li key={id} className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Improve <strong>{criterion?.name}</strong> (currently {scores[id]}/100)</span>
                    </li>
                  )
                })}
              {Object.values(scores).every(s => s >= 75) && (
                <li>All criteria meet minimum requirements. Consider applying for certification!</li>
              )}
            </ul>
          </div>

          <div className="flex gap-4">
            <Button
              variant="secondary"
              onClick={() => {
                setShowResults(false)
              }}
              className="flex-1"
            >
              Retake Assessment
            </Button>
          </div>
        </motion.div>
      </Card>
    )
  }

  return (
    <Card className="max-w-4xl mx-auto">
      <h3 className="text-h2 font-bold mb-2">Compliance Readiness Score</h3>
      <p className="text-body text-gray-subtle mb-8">
        Comprehensive assessment of your compliance readiness across all certification criteria
      </p>

      <div className="space-y-6">
        {criteria.map((criterion) => {
          const Icon = criterion.icon
          const score = scores[criterion.id] || 0
          return (
            <div key={criterion.id}>
              <div className="flex items-center gap-3 mb-3">
                <Icon className="w-6 h-6" />
                <label className="text-h3 font-bold flex-1">{criterion.name}</label>
                <span className="text-body font-medium w-20 text-right">{score}/100</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                step="5"
                value={score}
                onChange={(e) => handleScoreChange(criterion.id, parseInt(e.target.value))}
                className="w-full h-2 bg-gray-very-light rounded-lg appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #000 0%, #000 ${score}%, #e5e5e5 ${score}%, #e5e5e5 100%)`,
                }}
              />
              <div className="flex justify-between text-xs text-gray-subtle mt-1">
                <span>Not Ready (0)</span>
                <span>Fully Ready (100)</span>
              </div>
            </div>
          )
        })}
      </div>

      <div className="mt-8">
        <Button
          variant="primary"
          onClick={() => setShowResults(true)}
          className="w-full sm:w-auto"
          disabled={!allScored}
        >
          View Readiness Score
        </Button>
      </div>
    </Card>
  )
}

