'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Card from '@/components/ui/Card'
import ScrollReveal from '@/components/animations/ScrollReveal'
import Button from '@/components/ui/Button'

const comparisonData = [
  {
    feature: 'Safety & Compliance Verification',
    certified: true,
    nonCertified: false,
    description: {
      certified: 'Verified by compliance experts with documented safety and governance practices',
      nonCertified: 'Self-reported claims with no independent verification',
    },
  },
  {
    feature: 'EU AI Act Readiness',
    certified: true,
    nonCertified: false,
    description: {
      certified: 'Demonstrated compliance readiness aligned with EU AI Act requirements',
      nonCertified: 'Unknown or unverified compliance status',
    },
  },
  {
    feature: 'Verified Claims',
    certified: true,
    nonCertified: false,
    description: {
      certified: 'Marketing claims independently verified against technical evidence',
      nonCertified: 'Unverified marketing claims with potential misrepresentation risk',
    },
  },
  {
    feature: 'Risk Management Assessment',
    certified: true,
    nonCertified: false,
    description: {
      certified: 'Structured risk management aligned with NIST AI RMF and ISO 42001',
      nonCertified: 'No standardized risk assessment or management framework',
    },
  },
  {
    feature: 'Directory Listing',
    certified: true,
    nonCertified: false,
    description: {
      certified: 'Featured in ProvenAI certified directory for buyer discovery',
      nonCertified: 'Not listed in verified directory',
    },
  },
  {
    feature: 'Reduced Procurement Risk',
    certified: true,
    nonCertified: false,
    description: {
      certified: 'Buyers can trust verified compliance, reducing due diligence burden',
      nonCertified: 'Buyers must conduct extensive due diligence with higher risk',
    },
  },
  {
    feature: 'Annual Compliance Review',
    certified: true,
    nonCertified: false,
    description: {
      certified: 'Ongoing compliance monitoring ensures continued adherence to standards',
      nonCertified: 'No ongoing verification or compliance monitoring',
    },
  },
  {
    feature: 'ProvenAI Badge',
    certified: true,
    nonCertified: false,
    description: {
      certified: 'Display verified certification badge to build trust and credibility',
      nonCertified: 'No certification badge or trust signal',
    },
  },
]

export default function ComparisonTable() {
  const [expandedRow, setExpandedRow] = useState<number | null>(null)
  const [hoveredRow, setHoveredRow] = useState<number | null>(null)

  const handleExport = () => {
    const csv = [
      ['Feature', 'Certified', 'Non-Certified'],
      ...comparisonData.map(row => [
        row.feature,
        row.certified ? 'Yes' : 'No',
        row.nonCertified ? 'Yes' : 'No',
      ]),
    ].map(row => row.join(',')).join('\n')

    const blob = new Blob([csv], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'provenai-comparison.csv'
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <ScrollReveal direction="up">
      <Card>
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-h2 font-bold">Certified vs Non-Certified</h3>
          <Button variant="secondary" size="sm" onClick={handleExport}>
            Export CSV
          </Button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-medium">
                <th className="text-left py-4 px-4 font-bold text-h3">Feature</th>
                <th className="text-center py-4 px-4 font-bold text-h3">
                  <span className="text-primary-black">Certified</span>
                </th>
                <th className="text-center py-4 px-4 font-bold text-h3">
                  <span className="text-gray-subtle">Non-Certified</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => {
                const isExpanded = expandedRow === index
                const isHovered = hoveredRow === index
                return (
                  <motion.tr
                    key={row.feature}
                    className={`cursor-pointer transition-all ${
                      index !== comparisonData.length - 1 ? 'border-b border-gray-medium' : ''
                    } ${isHovered ? 'bg-gray-very-light' : ''}`}
                    onMouseEnter={() => setHoveredRow(index)}
                    onMouseLeave={() => setHoveredRow(null)}
                    onClick={() => setExpandedRow(isExpanded ? null : index)}
                    whileHover={{ backgroundColor: '#f5f5f5' }}
                  >
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <span className="text-body text-gray-dark font-medium">{row.feature}</span>
                        <motion.span
                          animate={{ rotate: isExpanded ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-gray-subtle"
                        >
                          ▼
                        </motion.span>
                      </div>
                      <AnimatePresence>
                        {isExpanded && row.description && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden mt-3"
                          >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3 border-t border-gray-medium">
                              <div>
                                <p className="text-sm font-medium text-primary-black mb-1">Certified:</p>
                                <p className="text-sm text-gray-subtle">{row.description.certified}</p>
                              </div>
                              <div>
                                <p className="text-sm font-medium text-gray-dark mb-1">Non-Certified:</p>
                                <p className="text-sm text-gray-subtle">{row.description.nonCertified}</p>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </td>
                    <td className="py-4 px-4 text-center">
                      {row.certified ? (
                        <motion.span
                          className="text-2xl text-primary-black"
                          aria-label="Included"
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          ✓
                        </motion.span>
                      ) : (
                        <span className="text-gray-light" aria-label="Not included">—</span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {row.nonCertified ? (
                        <motion.span
                          className="text-2xl text-primary-black"
                          aria-label="Included"
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          ✓
                        </motion.span>
                      ) : (
                        <span className="text-gray-light" aria-label="Not included">—</span>
                      )}
                    </td>
                  </motion.tr>
                )
              })}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-subtle mt-4 text-center">
          Click any row to see detailed comparison • Hover for more information
        </p>
      </Card>
    </ScrollReveal>
  )
}

