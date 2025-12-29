import React from 'react'
import { CertificationTier } from '@/types'

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
  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-full inline-block align-middle">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="border-b-2 border-primary-black">
              <th className="text-left py-4 px-6 font-bold text-h3">Feature</th>
              {tiers.map((tier) => (
                <th key={tier.tier} className="text-center py-4 px-6 font-bold text-h3">
                  <div>{tier.tier}</div>
                  <div className="text-body text-gray-subtle font-normal mt-1">
                    {tier.price}
                  </div>
                  <div className="text-small text-gray-subtle font-normal mt-1">
                    {tier.description}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {features.map((feature, index) => (
              <tr
                key={feature.name}
                className={index !== features.length - 1 ? 'border-b border-gray-medium' : ''}
              >
                <td className="py-4 px-6 text-body">{feature.name}</td>
                <td className="py-4 px-6 text-center">
                  {feature.basic ? (
                    <span className="text-2xl" aria-label="Included">✓</span>
                  ) : (
                    <span className="text-gray-light" aria-label="Not included">—</span>
                  )}
                </td>
                <td className="py-4 px-6 text-center">
                  {feature.standard ? (
                    <span className="text-2xl" aria-label="Included">✓</span>
                  ) : (
                    <span className="text-gray-light" aria-label="Not included">—</span>
                  )}
                </td>
                <td className="py-4 px-6 text-center">
                  {feature.premium ? (
                    <span className="text-2xl" aria-label="Included">✓</span>
                  ) : (
                    <span className="text-gray-light" aria-label="Not included">—</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

