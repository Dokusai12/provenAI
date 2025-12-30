'use client'

import { useState } from 'react'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Link from 'next/link'
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

export default function ComplianceGapAnalysis() {
  const [scores, setScores] = useState<Record<string, number>>({})
  const [showResults, setShowResults] = useState(false)

  const handleScoreChange = (criterionId: string, score: number) => {
    setScores({ ...scores, [criterionId]: score })
  }

  const overallScore = Object.keys(criteria).length > 0 
    ? Math.round(Object.values(scores).reduce((a, b) => a + b, 0) / criteria.length)
    : 0

  const getGaps = () => {
    return criteria.filter(c => !scores[c.id] || scores[c.id] < 75)
  }

  const getRecommendations = (criterionId: string) => {
    const recommendations: Record<string, string[]> = {
      truth: ['Review all marketing materials for accuracy', 'Document AI capabilities with evidence', 'Ensure claims match technical reality'],
      data: ['Document data governance procedures', 'Create privacy policy', 'Establish secure data handling processes'],
      monitoring: ['Implement error tracking systems', 'Create performance monitoring dashboards', 'Establish evaluation metrics'],
      security: ['Document security controls', 'Implement access management', 'Create incident response plan'],
      risk: ['Adopt NIST AI RMF framework', 'Create risk assessment procedures', 'Document mitigation strategies'],
      governance: ['Establish governance structure', 'Create incident response procedures', 'Document rollback capabilities'],
    }
    return recommendations[criterionId] || []
  }

  if (showResults) {
    const gaps = getGaps()
    return (
      <Card className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h3 className="text-h2 font-bold mb-6 text-center">Your Compliance Gap Analysis</h3>
          
          <div className="text-center mb-8">
            <div className="text-5xl font-bold mb-4" style={{ color: overallScore >= 80 ? '#16a34a' : overallScore >= 60 ? '#ca8a04' : '#ea580c' }}>
              {overallScore}%
            </div>
            <p className="text-body-lg text-gray-dark">Overall Compliance Readiness</p>
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
                    <span className="font-bold">{score}%</span>
                  </div>
                  <div className="w-full bg-gray-very-light rounded-full h-2 mb-3">
                    <div
                      className="h-2 rounded-full transition-all"
                      style={{
                        width: `${score}%`,
                        backgroundColor: score >= 75 ? '#16a34a' : score >= 50 ? '#ca8a04' : '#ea580c',
                      }}
                    />
                  </div>
                  {score < 75 && (
                    <div className="text-sm text-gray-subtle">
                      <strong>Gaps identified.</strong> See recommendations below.
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {gaps.length > 0 && (
            <div className="mb-6">
              <h4 className="text-h3 font-bold mb-4">Actionable Recommendations</h4>
              <div className="space-y-4">
                {gaps.map((criterion) => (
                  <div key={criterion.id} className="border-l-4 border-primary-black pl-4">
                    <h5 className="font-bold mb-2">{criterion.name}</h5>
                    <ul className="space-y-1">
                      {getRecommendations(criterion.id).map((rec, idx) => (
                        <li key={idx} className="text-body text-gray-dark flex items-start">
                          <span className="mr-2">•</span>
                          <span>{rec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/apply" className="flex-1">
              <Button variant="primary" className="w-full">
                Apply for Certification
              </Button>
            </Link>
            <Button
              variant="secondary"
              onClick={() => {
                setShowResults(false)
                setScores({})
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
      <h3 className="text-h2 font-bold mb-2">Compliance Gap Analysis</h3>
      <p className="text-body text-gray-subtle mb-8">
        Assess your company's readiness against our 6 certification criteria. Rate each area from 0-100.
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
                <span className="text-body font-medium w-16 text-right">{score}%</span>
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
                <span>Not Ready</span>
                <span>Fully Ready</span>
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
          disabled={Object.keys(scores).length < criteria.length}
        >
          View Gap Analysis
        </Button>
      </div>
    </Card>
  )
}


