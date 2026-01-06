'use client'

import { useState } from 'react'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Select from '@/components/ui/Select'

const documentChecklists: Record<string, Record<string, string[]>> = {
  Basic: {
    'AI Agency': [
      'Company registration documents',
      'Team AI/ML credentials and portfolios',
      'Technical documentation of AI implementations',
      'Privacy policy and data handling procedures',
      '3+ client case studies with verifiable results',
      'Basic security controls documentation',
    ],
    'AI SaaS Product': [
      'Product technical documentation',
      'AI model architecture documentation',
      'Privacy policy and GDPR compliance',
      'Security controls and access management',
      'User data handling procedures',
      'Performance metrics and monitoring documentation',
    ],
    'AI Consultancy': [
      'Consultant credentials and certifications',
      'Client project portfolios (minimum 3)',
      'Methodology documentation',
      'Data handling and privacy procedures',
      'Security practices documentation',
      'Client references',
    ],
    'Other': [
      'Company registration documents',
      'AI/ML team credentials',
      'Technical documentation',
      'Privacy and data handling procedures',
      'Security documentation',
      'Client work examples',
    ],
  },
  Standard: {
    'AI Agency': [
      'All Basic tier documents',
      'Governance framework documentation',
      'Risk management procedures',
      'EU AI Act compliance mapping',
      'Incident response procedures',
      'Model monitoring and evaluation processes',
    ],
    'AI SaaS Product': [
      'All Basic tier documents',
      'Governance structure documentation',
      'Risk assessment and management',
      'EU AI Act risk categorization',
      'Incident response plan',
      'Model monitoring dashboards and metrics',
    ],
    'AI Consultancy': [
      'All Basic tier documents',
      'Governance and accountability framework',
      'Risk management methodologies',
      'EU AI Act compliance procedures',
      'Incident response protocols',
      'Quality assurance processes',
    ],
    'Other': [
      'All Basic tier documents',
      'Governance documentation',
      'Risk management procedures',
      'EU AI Act compliance mapping',
      'Incident response procedures',
      'Monitoring and evaluation documentation',
    ],
  },
  Premium: {
    'AI Agency': [
      'All Standard tier documents',
      'Quarterly compliance review procedures',
      'Ongoing monitoring system documentation',
      'Dedicated compliance advisor contact',
      'Enhanced governance documentation',
      'Advanced risk management frameworks',
    ],
    'AI SaaS Product': [
      'All Standard tier documents',
      'Quarterly compliance review processes',
      'Real-time monitoring system documentation',
      'Dedicated compliance advisor contact',
      'Advanced governance structures',
      'Comprehensive risk management',
    ],
    'AI Consultancy': [
      'All Standard tier documents',
      'Quarterly compliance review procedures',
      'Client monitoring and evaluation processes',
      'Dedicated compliance advisor contact',
      'Enhanced governance documentation',
      'Advanced risk management methodologies',
    ],
    'Other': [
      'All Standard tier documents',
      'Quarterly compliance review procedures',
      'Ongoing monitoring documentation',
      'Dedicated compliance advisor contact',
      'Enhanced governance',
      'Advanced risk management',
    ],
  },
}

export default function ChecklistGenerator() {
  const [tier, setTier] = useState<string>('Basic')
  const [companyType, setCompanyType] = useState<string>('')

  const checklist = companyType && tier ? documentChecklists[tier]?.[companyType] || [] : []

  return (
    <Card className="max-w-2xl mx-auto">
      <h3 className="text-h2 font-bold mb-2">Document Checklist Generator</h3>
      <p className="text-body text-gray-subtle mb-8">
        Generate a personalized checklist of documents needed for certification
      </p>

      <div className="space-y-6 mb-8">
        <div>
          <Select
            label="Certification Tier"
            options={[
              { value: '', label: 'Select tier' },
              { value: 'Basic', label: 'Basic (£2,500/year)' },
              { value: 'Standard', label: 'Standard (£5,000/year)' },
              { value: 'Premium', label: 'Premium (£10,000/year)' },
            ]}
            value={tier}
            onChange={(e) => setTier(e.target.value)}
          />
        </div>

        <div>
          <Select
            label="Company Type"
            options={[
              { value: '', label: 'Select type' },
              { value: 'AI Agency', label: 'AI Agency' },
              { value: 'AI SaaS Product', label: 'AI SaaS Product' },
              { value: 'AI Consultancy', label: 'AI Consultancy' },
              { value: 'Other', label: 'Other' },
            ]}
            value={companyType}
            onChange={(e) => setCompanyType(e.target.value)}
          />
        </div>
      </div>

      {checklist.length > 0 && (
        <div className="mb-6">
          <h4 className="text-h3 font-bold mb-4">Required Documents:</h4>
          <div className="space-y-2">
            {checklist.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3 bg-gray-very-light rounded-lg">
                <input type="checkbox" className="mt-1 w-5 h-5" />
                <span className="text-body text-gray-dark flex-1">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 flex gap-4">
            <Button
              variant="secondary"
              onClick={() => window.print()}
              className="flex-1"
            >
              Print Checklist
            </Button>
          </div>
        </div>
      )}
    </Card>
  )
}

