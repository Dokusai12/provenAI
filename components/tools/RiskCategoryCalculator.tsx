'use client'

import { useState } from 'react'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { motion } from 'framer-motion'

type RiskCategory = 'minimal' | 'limited' | 'high' | 'prohibited' | null

export default function RiskCategoryCalculator() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [riskCategory, setRiskCategory] = useState<RiskCategory>(null)

  const questions = [
    {
      id: 'purpose',
      question: 'What is the primary purpose of your AI system?',
      options: [
        { value: 'recommendation', label: 'Recommendation/content filtering' },
        { value: 'automation', label: 'Process automation' },
        { value: 'decision', label: 'Automated decision-making affecting people' },
        { value: 'biometric', label: 'Biometric identification/recognition' },
      ],
    },
    {
      id: 'autonomy',
      question: 'What level of autonomy does your AI system have?',
      options: [
        { value: 'low', label: 'Low - Requires human oversight' },
        { value: 'medium', label: 'Medium - Semi-autonomous with human review' },
        { value: 'high', label: 'High - Fully autonomous decisions' },
      ],
    },
    {
      id: 'data',
      question: 'What types of data does your AI system process?',
      options: [
        { value: 'public', label: 'Public/non-sensitive data only' },
        { value: 'personal', label: 'Personal data (GDPR covered)' },
        { value: 'sensitive', label: 'Sensitive/special category data' },
        { value: 'biometric', label: 'Biometric data' },
      ],
    },
    {
      id: 'impact',
      question: 'What is the potential impact on individuals?',
      options: [
        { value: 'minimal', label: 'Minimal impact' },
        { value: 'moderate', label: 'Moderate impact (e.g., recommendations)' },
        { value: 'significant', label: 'Significant impact (e.g., hiring, credit)' },
        { value: 'severe', label: 'Severe impact (health, safety, fundamental rights)' },
      ],
    },
  ]

  const calculateRisk = (): RiskCategory => {
    const purpose = answers.purpose
    const autonomy = answers.autonomy
    const data = answers.data
    const impact = answers.impact

    // Prohibited risk
    if (purpose === 'biometric' || data === 'biometric') {
      return 'prohibited'
    }

    // High risk indicators
    if (
      impact === 'severe' ||
      (autonomy === 'high' && impact === 'significant') ||
      (data === 'sensitive' && autonomy === 'high')
    ) {
      return 'high'
    }

    // Limited risk
    if (
      impact === 'significant' ||
      (autonomy === 'medium' && data === 'personal') ||
      purpose === 'decision'
    ) {
      return 'limited'
    }

    // Minimal risk (default)
    return 'minimal'
  }

  const handleAnswer = (questionId: string, value: string) => {
    const newAnswers = { ...answers, [questionId]: value }
    setAnswers(newAnswers)

    if (step < questions.length - 1) {
      setStep(step + 1)
    } else {
      setRiskCategory(calculateRisk())
    }
  }

  const getRiskDetails = (category: RiskCategory) => {
    const details: Record<string, { title: string; color: string; description: string; requirements: string[] }> = {
      minimal: {
        title: 'Minimal Risk',
        color: '#16a34a',
        description: 'Your AI system likely falls into the minimal risk category.',
        requirements: [
          'No specific compliance requirements',
          'General transparency obligations',
          'Can self-assess compliance',
        ],
      },
      limited: {
        title: 'Limited Risk',
        color: '#ca8a04',
        description: 'Your AI system likely falls into the limited risk category.',
        requirements: [
          'Transparency requirements (inform users of AI use)',
          'Human oversight recommended',
          'Documentation and record-keeping',
        ],
      },
      high: {
        title: 'High Risk',
        color: '#ea580c',
        description: 'Your AI system likely falls into the high risk category.',
        requirements: [
          'Conformity assessment required',
          'Quality management system',
          'Risk management system',
          'Data governance and training data documentation',
          'Technical documentation',
          'Record-keeping and logging',
          'Human oversight',
          'Accuracy, robustness, and cybersecurity',
        ],
      },
      prohibited: {
        title: 'Prohibited Risk',
        color: '#dc2626',
        description: 'Your AI system may fall into prohibited practices.',
        requirements: [
          'This category is prohibited under EU AI Act',
          'Review system purpose and data usage',
          'Consult with legal/compliance experts',
          'Consider system modifications',
        ],
      },
    }
    return details[category || 'minimal']
  }

  if (riskCategory) {
    const details = getRiskDetails(riskCategory)
    return (
      <Card className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="text-center mb-8">
            <div className="text-4xl font-bold mb-4" style={{ color: details.color }}>
              {details.title}
            </div>
            <p className="text-body-lg text-gray-dark">{details.description}</p>
          </div>

          <div className="mb-6">
            <h4 className="text-h3 font-bold mb-4">Compliance Requirements:</h4>
            <ul className="space-y-2">
              {details.requirements.map((req, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="mr-2">•</span>
                  <span className="text-body text-gray-dark">{req}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-very-light p-4 rounded-lg mb-6">
            <p className="text-sm text-gray-subtle">
              <strong>Note:</strong> This is an indicative assessment. For definitive risk categorization, 
              consult the full EU AI Act text and seek legal advice.
            </p>
          </div>

          <div className="flex gap-4">
            <Button
              variant="secondary"
              onClick={() => {
                setStep(0)
                setAnswers({})
                setRiskCategory(null)
              }}
              className="flex-1"
            >
              Start Over
            </Button>
          </div>
        </motion.div>
      </Card>
    )
  }

  const currentQuestion = questions[step]
  const progress = ((step + 1) / questions.length) * 100

  return (
    <Card className="max-w-2xl mx-auto">
      <div className="mb-6">
        <div className="flex justify-between text-sm text-gray-subtle mb-2">
          <span>Question {step + 1} of {questions.length}</span>
        </div>
        <div className="w-full bg-gray-very-light rounded-full h-2">
          <motion.div
            className="bg-primary-black h-2 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      <motion.div
        key={step}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="text-h3 font-bold mb-6">{currentQuestion.question}</h3>
        <div className="space-y-3">
          {currentQuestion.options.map((option) => (
            <button
              key={option.value}
              onClick={() => handleAnswer(currentQuestion.id, option.value)}
              className="w-full text-left p-4 rounded-lg border-2 border-gray-medium hover:border-primary-black hover:bg-gray-very-light transition-all"
            >
              <span className="text-body text-gray-dark">{option.label}</span>
            </button>
          ))}
        </div>
      </motion.div>
    </Card>
  )
}

