'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { CertificationTier } from '@/types'
import Badge from './ui/Badge'

interface TierFeature {
  name: string
  basic: boolean
  standard: boolean
  premium: boolean
}

const features: TierFeature[] = [
  { name: 'ProvenAI Badge', basic: true, standard: true, premium: true },
  { name: 'Certificate', basic: true, standard: true, premium: true },
  { name: 'Directory Listing', basic: true, standard: true, premium: true },
  { name: 'Annual Review', basic: true, standard: true, premium: true },
  { name: 'Truth-in-Marketing Verification', basic: true, standard: true, premium: true },
  { name: 'Basic Security & Data Handling Review', basic: true, standard: true, premium: true },
  { name: 'Featured Listing', basic: false, standard: true, premium: true },
  { name: 'Governance Review', basic: false, standard: true, premium: true },
  { name: 'Risk Management Assessment', basic: false, standard: true, premium: true },
  { name: 'EU AI Act Compliance Mapping', basic: false, standard: true, premium: true },
  { name: 'Quarterly Compliance Reviews', basic: false, standard: false, premium: true },
  { name: 'Ongoing Monitoring Support', basic: false, standard: false, premium: true },
  { name: 'Priority Audit Scheduling', basic: false, standard: false, premium: true },
  { name: 'Dedicated Compliance Advisor', basic: false, standard: false, premium: true },
]

const tiers: { tier: CertificationTier; price: string; description: string }[] = [
  {
    tier: 'Basic',
    price: '£2,500/year',
    description: 'AI Safety & Compliance Certification with truth-in-marketing verification and basic security review',
  },
  {
    tier: 'Standard',
    price: '£5,000/year',
    description: 'Enhanced with detailed governance review, risk assessment, and EU AI Act compliance mapping',
  },
  {
    tier: 'Premium',
    price: '£10,000/year',
    description: 'Full support package with quarterly reviews, ongoing monitoring, and dedicated compliance advisor',
  },
]

export default function CertificationTiers() {
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null)
  const [selectedTier, setSelectedTier] = useState<CertificationTier | null>(null)

  const getTierRecommendation = () => {
    // Simple logic - can be enhanced based on user inputs
    return 'Standard'
  }

  const recommendedTier = getTierRecommendation()

  return (
    <div className="w-full">
      {recommendedTier && (
        <div className="mb-6 p-4 bg-info/10 border border-info/20 rounded-lg">
          <p className="text-body text-info">
            <strong>💡 Recommendation:</strong> Based on your needs, <strong>{recommendedTier}</strong> tier may be the best fit for most companies.
          </p>
        </div>
      )}
      
      <div className="w-full overflow-x-auto">
        <div className="min-w-full inline-block align-middle">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-primary-black">
                <th className="text-left py-4 px-6 font-bold text-h3">Feature</th>
                {tiers.map((tier) => {
                  const isRecommended = tier.tier === recommendedTier
                  return (
                    <th
                      key={tier.tier}
                      className={`text-center py-4 px-6 font-bold text-h3 relative ${
                        selectedTier === tier.tier ? 'bg-gray-very-light' : ''
                      }`}
                      onMouseEnter={() => setSelectedTier(tier.tier as CertificationTier)}
                      onMouseLeave={() => setSelectedTier(null)}
                    >
                      {isRecommended && (
                        <Badge variant="primary" size="sm" className="absolute top-2 right-2">
                          Recommended
                        </Badge>
                      )}
                      <div className={isRecommended ? 'text-primary-black' : ''}>{tier.tier}</div>
                      <div className="text-body text-gray-subtle font-normal mt-1">
                        {tier.price}
                      </div>
                      <div className="text-small text-gray-subtle font-normal mt-1 max-w-xs mx-auto">
                        {tier.description}
                      </div>
                      {selectedTier === tier.tier && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="mt-2 text-xs text-primary-black font-medium"
                        >
                          Hover over features to see details
                        </motion.div>
                      )}
                    </th>
                  )
                })}
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => {
                const isHovered = hoveredFeature === feature.name
                return (
                  <tr
                    key={feature.name}
                    className={`transition-colors duration-200 ${
                      index !== features.length - 1 ? 'border-b border-gray-medium' : ''
                    } ${isHovered ? 'bg-gray-very-light' : ''}`}
                    onMouseEnter={() => setHoveredFeature(feature.name)}
                    onMouseLeave={() => setHoveredFeature(null)}
                  >
                    <td className="py-4 px-6 text-body relative">
                      <span className={isHovered ? 'font-medium text-primary-black' : ''}>
                        {feature.name}
                      </span>
                      {isHovered && (
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                          className="absolute left-0 top-full mt-1 z-10 bg-primary-black text-primary-white text-xs p-2 rounded shadow-lg max-w-xs"
                        >
                          {feature.name === 'ProvenAI Badge' && 'Display verified certification badge on your website'}
                          {feature.name === 'Quarterly Compliance Reviews' && 'Regular assessments to maintain compliance'}
                          {feature.name === 'Dedicated Compliance Advisor' && 'Personal advisor for ongoing compliance support'}
                        </motion.div>
                      )}
                    </td>
                    <td className="py-4 px-6 text-center">
                      {feature.basic ? (
                        <motion.span
                          className="text-2xl text-primary-black"
                          aria-label="Included"
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                        >
                          ✓
                        </motion.span>
                      ) : (
                        <span className="text-gray-light" aria-label="Not included">—</span>
                      )}
                    </td>
                    <td className="py-4 px-6 text-center">
                      {feature.standard ? (
                        <motion.span
                          className="text-2xl text-primary-black"
                          aria-label="Included"
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                        >
                          ✓
                        </motion.span>
                      ) : (
                        <span className="text-gray-light" aria-label="Not included">—</span>
                      )}
                    </td>
                    <td className="py-4 px-6 text-center">
                      {feature.premium ? (
                        <motion.span
                          className="text-2xl text-primary-black"
                          aria-label="Included"
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                        >
                          ✓
                        </motion.span>
                      ) : (
                        <span className="text-gray-light" aria-label="Not included">—</span>
                      )}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

