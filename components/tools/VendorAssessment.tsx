'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Checkbox from '@/components/ui/Checkbox'

const assessmentCriteria = [
  {
    category: 'Truth-in-Marketing',
    questions: [
      'Do their marketing claims match their technical capabilities?',
      'Can they provide evidence of AI implementation?',
      'Are they transparent about limitations?',
    ],
  },
  {
    category: 'Data Handling & Privacy',
    questions: [
      'Do they have documented privacy policies?',
      'Can they demonstrate secure data practices?',
      'Do they comply with GDPR/data protection regulations?',
    ],
  },
  {
    category: 'Model Monitoring & Evaluation',
    questions: [
      'Do they have ongoing monitoring processes?',
      'Can they show error handling procedures?',
      'Do they track performance metrics?',
    ],
  },
  {
    category: 'Security Posture',
    questions: [
      'Do they have documented security controls?',
      'Can they explain access management?',
      'Do they have incident response procedures?',
    ],
  },
  {
    category: 'Risk Management',
    questions: [
      'Do they follow risk management frameworks?',
      'Can they demonstrate risk assessment processes?',
      'Do they have mitigation strategies?',
    ],
  },
  {
    category: 'Governance & Accountability',
    questions: [
      'Do they have governance structures?',
      'Can they demonstrate human oversight?',
      'Do they have rollback/disable procedures?',
    ],
  },
]

export default function VendorAssessment() {
  const [answers, setAnswers] = useState<Record<string, boolean>>({})
  const [showResults, setShowResults] = useState(false)

  const handleToggle = (category: string, questionIndex: number, value: boolean) => {
    const key = `${category}-${questionIndex}`
    setAnswers({ ...answers, [key]: value })
  }

  const calculateScore = () => {
    const totalQuestions = assessmentCriteria.reduce((sum, cat) => sum + cat.questions.length, 0)
    const answered = Object.values(answers).filter(Boolean).length
    return Math.round((answered / totalQuestions) * 100)
  }

  const getCategoryScore = (category: string) => {
    const categoryData = assessmentCriteria.find(c => c.category === category)!
    const answered = categoryData.questions.filter((_, idx) => answers[`${category}-${idx}`]).length
    return Math.round((answered / categoryData.questions.length) * 100)
  }

  if (showResults) {
    const overallScore = calculateScore()
    return (
      <Card className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h3 className="text-h2 font-bold mb-6 text-center">Vendor Assessment Results</h3>
          
          <div className="text-center mb-8">
            <div className="text-5xl font-bold mb-4" style={{ color: overallScore >= 80 ? '#16a34a' : overallScore >= 60 ? '#ca8a04' : '#ea580c' }}>
              {overallScore}%
            </div>
            <p className="text-body-lg text-gray-dark">Overall Compliance Assessment</p>
          </div>

          <div className="space-y-4 mb-8">
            {assessmentCriteria.map((category) => {
              const score = getCategoryScore(category.category)
              return (
                <div key={category.category} className="border border-gray-medium rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-bold">{category.category}</h4>
                    <span className="font-bold">{score}%</span>
                  </div>
                  <div className="w-full bg-gray-very-light rounded-full h-2">
                    <div
                      className="h-2 rounded-full transition-all"
                      style={{
                        width: `${score}%`,
                        backgroundColor: score >= 75 ? '#16a34a' : score >= 50 ? '#ca8a04' : '#ea580c',
                      }}
                    />
                  </div>
                </div>
              )
            })}
          </div>

          <div className="bg-gray-very-light p-4 rounded-lg mb-6">
            <p className="text-body text-gray-dark">
              <strong>Recommendation:</strong>{' '}
              {overallScore >= 80
                ? 'This vendor appears well-prepared for compliance. Consider requesting ProvenAI certification.'
                : overallScore >= 60
                ? 'This vendor has some gaps. Ask for improvement in low-scoring areas or request certification status.'
                : 'This vendor has significant compliance gaps. Consider requiring ProvenAI certification before engagement.'}
            </p>
          </div>

          <Button
            variant="secondary"
            onClick={() => {
              setShowResults(false)
              setAnswers({})
            }}
            className="w-full"
          >
            Start New Assessment
          </Button>
        </motion.div>
      </Card>
    )
  }

  return (
    <Card className="max-w-3xl mx-auto">
      <h3 className="text-h2 font-bold mb-2">Vendor Assessment Tool</h3>
      <p className="text-body text-gray-subtle mb-8">
        Assess vendor compliance using ProvenAI certification criteria. Check boxes for questions you can answer "yes" to.
      </p>

      <div className="space-y-6">
        {assessmentCriteria.map((category) => (
          <div key={category.category} className="border border-gray-medium rounded-lg p-4">
            <h4 className="font-bold mb-4">{category.category}</h4>
            <div className="space-y-3">
              {category.questions.map((question, idx) => (
                <label key={idx} className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={answers[`${category.category}-${idx}`] || false}
                    onChange={(e) => handleToggle(category.category, idx, e.target.checked)}
                    className="mt-1 w-5 h-5"
                  />
                  <span className="text-body text-gray-dark flex-1">{question}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <Button
          variant="primary"
          onClick={() => setShowResults(true)}
          className="w-full sm:w-auto"
        >
          View Assessment Results
        </Button>
      </div>
    </Card>
  )
}

