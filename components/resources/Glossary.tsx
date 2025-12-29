'use client'

import { useState } from 'react'
import Card from '@/components/ui/Card'
import Input from '@/components/ui/Input'

const glossaryTerms: Record<string, { definition: string; category: string }> = {
  'EU AI Act': {
    definition: 'The European Union Artificial Intelligence Act - comprehensive legislation regulating AI systems in the EU based on risk categories.',
    category: 'Regulation',
  },
  'ISO 42001': {
    definition: 'ISO/IEC 42001 - International standard for AI Management Systems providing a framework for AI governance.',
    category: 'Standard',
  },
  'NIST AI RMF': {
    definition: 'National Institute of Standards and Technology AI Risk Management Framework - voluntary framework for managing AI risks.',
    category: 'Standard',
  },
  'High-Risk AI': {
    definition: 'AI systems with significant potential to harm health, safety, or fundamental rights, requiring strict compliance under EU AI Act.',
    category: 'Regulation',
  },
  'Conformity Assessment': {
    definition: 'Process of demonstrating that an AI system meets the requirements of the EU AI Act.',
    category: 'Process',
  },
  'Risk Management': {
    definition: 'Systematic approach to identifying, assessing, and mitigating risks associated with AI systems.',
    category: 'Process',
  },
  'Model Monitoring': {
    definition: 'Ongoing observation and evaluation of AI model performance, errors, and behavior in production.',
    category: 'Technical',
  },
  'Governance': {
    definition: 'Structures, processes, and policies that ensure AI systems are developed and deployed responsibly.',
    category: 'Process',
  },
  'Transparency': {
    definition: 'Requirement to inform users when they are interacting with an AI system.',
    category: 'Regulation',
  },
  'Human Oversight': {
    definition: 'Mechanisms to ensure human monitoring and intervention in AI system operations, especially for high-risk systems.',
    category: 'Process',
  },
}

const categories = ['All', 'Regulation', 'Standard', 'Process', 'Technical']

export default function Glossary() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredTerms = Object.entries(glossaryTerms).filter(([term, data]) => {
    const matchesSearch = term.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         data.definition.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || data.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <Card className="max-w-4xl mx-auto">
      <h3 className="text-h2 font-bold mb-2">Glossary & Terminology</h3>
      <p className="text-body text-gray-subtle mb-8">
        Key terms and definitions related to AI compliance and certification
      </p>

      <div className="mb-6">
        <Input
          type="text"
          placeholder="Search terms..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mb-4"
        />
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-lg border-2 transition-all ${
                selectedCategory === cat
                  ? 'border-primary-black bg-primary-black text-primary-white'
                  : 'border-gray-medium hover:border-primary-black'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        {filteredTerms.length > 0 ? (
          filteredTerms.map(([term, data]) => (
            <div key={term} className="border border-gray-medium rounded-lg p-4">
              <div className="flex items-start justify-between mb-2">
                <h4 className="text-h3 font-bold">{term}</h4>
                <span className="text-xs bg-gray-very-light px-2 py-1 rounded">{data.category}</span>
              </div>
              <p className="text-body text-gray-dark">{data.definition}</p>
            </div>
          ))
        ) : (
          <p className="text-body text-gray-subtle text-center py-8">No terms found matching your search.</p>
        )}
      </div>
    </Card>
  )
}

