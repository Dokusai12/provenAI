'use client'

import { useState } from 'react'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

interface Question {
  id: string
  question: string
  options: { value: string; label: string }[]
}

const questions: Question[] = [
  {
    id: 'claims',
    question: 'Do your marketing claims accurately reflect your AI capabilities?',
    options: [
      { value: 'yes', label: 'Yes, all claims are accurate and verifiable' },
      { value: 'mostly', label: 'Mostly, with some minor gaps' },
      { value: 'somewhat', label: 'Somewhat, need to review' },
      { value: 'no', label: 'No, claims need significant revision' },
    ],
  },
  {
    id: 'data',
    question: 'Do you have documented data handling and privacy procedures?',
    options: [
      { value: 'yes', label: 'Yes, fully documented and compliant' },
      { value: 'mostly', label: 'Mostly documented, some gaps' },
      { value: 'basic', label: 'Basic procedures in place' },
      { value: 'no', label: 'No formal documentation' },
    ],
  },
  {
    id: 'monitoring',
    question: 'Do you have ongoing model monitoring and evaluation processes?',
    options: [
      { value: 'yes', label: 'Yes, comprehensive monitoring in place' },
      { value: 'basic', label: 'Basic monitoring, needs improvement' },
      { value: 'planned', label: 'Planned but not implemented' },
      { value: 'no', label: 'No monitoring processes' },
    ],
  },
  {
    id: 'security',
    question: 'Do you have documented security controls and access management?',
    options: [
      { value: 'yes', label: 'Yes, comprehensive security controls' },
      { value: 'basic', label: 'Basic security measures' },
      { value: 'limited', label: 'Limited security documentation' },
      { value: 'no', label: 'Minimal security controls' },
    ],
  },
  {
    id: 'risk',
    question: 'Do you have structured risk management and assessment processes?',
    options: [
      { value: 'yes', label: 'Yes, aligned with NIST AI RMF/ISO 42001' },
      { value: 'some', label: 'Some risk management processes' },
      { value: 'basic', label: 'Basic risk awareness' },
      { value: 'no', label: 'No formal risk management' },
    ],
  },
  {
    id: 'governance',
    question: 'Do you have governance structures and incident response procedures?',
    options: [
      { value: 'yes', label: 'Yes, comprehensive governance and procedures' },
      { value: 'partial', label: 'Partial governance structures' },
      { value: 'basic', label: 'Basic governance in place' },
      { value: 'no', label: 'No formal governance' },
    ],
  },
]

export default function PreScreeningQuiz() {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [showResults, setShowResults] = useState(false)

  const handleAnswer = (questionId: string, value: string) => {
    setAnswers({ ...answers, [questionId]: value })
    if (currentStep < questions.length - 1) {
      setTimeout(() => setCurrentStep(currentStep + 1), 300)
    } else {
      setTimeout(() => setShowResults(true), 300)
    }
  }

  const calculateScore = () => {
    const scores: Record<string, number> = { yes: 100, mostly: 75, basic: 50, somewhat: 50, partial: 50, some: 50, planned: 25, limited: 25, no: 0 }
    const totalScore = questions.reduce((sum, q) => sum + (scores[answers[q.id]] || 0), 0)
    return Math.round(totalScore / questions.length)
  }

  const getRecommendations = (score: number) => {
    if (score >= 80) return { text: 'You\'re in great shape! Consider applying for certification.', color: 'text-green-600' }
    if (score >= 60) return { text: 'You\'re on the right track. Focus on the areas below before applying.', color: 'text-yellow-600' }
    return { text: 'Build out these areas first to improve your readiness.', color: 'text-orange-600' }
  }

  const score = showResults ? calculateScore() : 0
  const recommendation = getRecommendations(score)

  if (showResults) {
    const gaps = questions.filter(q => !answers[q.id] || ['no', 'limited', 'planned'].includes(answers[q.id]))
    
    return (
      <Card className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h3 className="text-h2 font-bold mb-6 text-center">Your Readiness Assessment</h3>
          <div className="text-center mb-8">
            <div className="text-6xl font-bold mb-4" style={{ color: score >= 80 ? '#16a34a' : score >= 60 ? '#ca8a04' : '#ea580c' }}>
              {score}%
            </div>
            <p className={`text-body-lg font-medium mb-4 ${recommendation.color}`}>
              {recommendation.text}
            </p>
          </div>

          {gaps.length > 0 && (
            <div className="mb-6">
              <h4 className="text-h3 font-bold mb-4">Areas to Focus On:</h4>
              <ul className="space-y-2">
                {gaps.map((q) => (
                  <li key={q.id} className="flex items-start">
                    <span className="text-xl mr-2">•</span>
                    <span className="text-body text-gray-dark">{q.question}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/apply" className="flex-1">
              <Button variant="primary" className="w-full">
                Apply for Certification
              </Button>
            </Link>
            <Link href="/resources" className="flex-1">
              <Button variant="secondary" className="w-full">
                Explore Resources
              </Button>
            </Link>
          </div>
        </motion.div>
      </Card>
    )
  }

  const currentQuestion = questions[currentStep]
  const progress = ((currentStep + 1) / questions.length) * 100

  return (
    <Card className="max-w-2xl mx-auto">
      <div className="mb-6">
        <div className="flex justify-between text-sm text-gray-subtle mb-2">
          <span>Question {currentStep + 1} of {questions.length}</span>
          <span>{Math.round(progress)}% Complete</span>
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

      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
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
      </AnimatePresence>
    </Card>
  )
}


