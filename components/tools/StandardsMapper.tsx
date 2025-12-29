'use client'

import { useState } from 'react'
import Card from '@/components/ui/Card'
import { motion } from 'framer-motion'

const criteriaMapping = [
  {
    criterion: 'Truth-in-Marketing',
    iso42001: ['4.2 Understanding needs and expectations', '4.4 Context of organization'],
    nist: ['Govern - G.5 Risk management', 'Map - M.1 Understanding and measuring'],
    euAIAct: ['Transparency obligations', 'Accuracy requirements'],
  },
  {
    criterion: 'Data Handling & Privacy',
    iso42001: ['6.1 Actions to address risks and opportunities', '8.5 Production and service provision'],
    nist: ['Map - M.4 Managing dataset and operational factors', 'Measure - M.5 Trustworthy AI'],
    euAIAct: ['Data governance', 'Privacy by design'],
  },
  {
    criterion: 'Model Monitoring & Evaluation',
    iso42001: ['9.1 Monitoring, measurement, analysis and evaluation', '10.2 Continual improvement'],
    nist: ['Measure - M.2 Improving AI system understanding', 'Manage - M.3 Managing risks'],
    euAIAct: ['Post-market monitoring', 'Quality management'],
  },
  {
    criterion: 'Security Posture',
    iso42001: ['6.1 Actions to address risks', '8.1 Operational planning and control'],
    nist: ['Govern - G.4 Cybersecurity and infrastructure', 'Map - M.4 Managing operational factors'],
    euAIAct: ['Cybersecurity requirements', 'Robustness requirements'],
  },
  {
    criterion: 'Risk Management',
    iso42001: ['6.1 Risk management', '10.2 Continual improvement'],
    nist: ['Govern - G.5 Risk management', 'Map - M.3 Managing risks'],
    euAIAct: ['Risk management system', 'Conformity assessment'],
  },
  {
    criterion: 'Governance & Accountability',
    iso42001: ['5.1 Leadership and commitment', '8.2 Requirements for products and services'],
    nist: ['Govern - G.1 Culture', 'Govern - G.2 Policies and processes'],
    euAIAct: ['Human oversight', 'Accountability and governance'],
  },
]

export default function StandardsMapper() {
  const [selectedCriterion, setSelectedCriterion] = useState<string | null>(null)

  return (
    <Card className="max-w-4xl mx-auto">
      <h3 className="text-h2 font-bold mb-2">Standards Mapping Visualizer</h3>
      <p className="text-body text-gray-subtle mb-8">
        See how ProvenAI criteria map to ISO 42001, NIST AI RMF, and EU AI Act
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {criteriaMapping.map((mapping) => (
          <motion.button
            key={mapping.criterion}
            onClick={() => setSelectedCriterion(selectedCriterion === mapping.criterion ? null : mapping.criterion)}
            className={`p-4 rounded-lg border-2 text-left transition-all ${
              selectedCriterion === mapping.criterion
                ? 'border-primary-black bg-primary-black text-primary-white'
                : 'border-gray-medium hover:border-primary-black hover:bg-gray-very-light'
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <h4 className="font-bold mb-2">{mapping.criterion}</h4>
            <p className="text-sm opacity-80">Click to see mappings</p>
          </motion.button>
        ))}
      </div>

      {selectedCriterion && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="border-t-2 border-gray-medium pt-6"
        >
          {(() => {
            const mapping = criteriaMapping.find(m => m.criterion === selectedCriterion)!
            return (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h5 className="font-bold mb-3 text-primary-black">ISO/IEC 42001</h5>
                  <ul className="space-y-2">
                    {mapping.iso42001.map((item, idx) => (
                      <li key={idx} className="text-sm text-gray-dark flex items-start">
                        <span className="mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5 className="font-bold mb-3 text-primary-black">NIST AI RMF</h5>
                  <ul className="space-y-2">
                    {mapping.nist.map((item, idx) => (
                      <li key={idx} className="text-sm text-gray-dark flex items-start">
                        <span className="mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5 className="font-bold mb-3 text-primary-black">EU AI Act</h5>
                  <ul className="space-y-2">
                    {mapping.euAIAct.map((item, idx) => (
                      <li key={idx} className="text-sm text-gray-dark flex items-start">
                        <span className="mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })()}
        </motion.div>
      )}
    </Card>
  )
}

