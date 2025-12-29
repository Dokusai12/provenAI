'use client'

import Card from '@/components/ui/Card'
import ScrollReveal from '@/components/animations/ScrollReveal'

const comparisonData = [
  {
    feature: 'Safety & Compliance Verification',
    certified: true,
    nonCertified: false,
  },
  {
    feature: 'EU AI Act Readiness',
    certified: true,
    nonCertified: false,
  },
  {
    feature: 'Verified Claims',
    certified: true,
    nonCertified: false,
  },
  {
    feature: 'Risk Management Assessment',
    certified: true,
    nonCertified: false,
  },
  {
    feature: 'Directory Listing',
    certified: true,
    nonCertified: false,
  },
  {
    feature: 'Reduced Procurement Risk',
    certified: true,
    nonCertified: false,
  },
  {
    feature: 'Annual Compliance Review',
    certified: true,
    nonCertified: false,
  },
  {
    feature: 'ProvenAI Badge',
    certified: true,
    nonCertified: false,
  },
]

export default function ComparisonTable() {
  return (
    <ScrollReveal direction="up">
      <Card>
        <h3 className="text-h2 font-bold mb-8 text-center">Certified vs Non-Certified</h3>
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
              {comparisonData.map((row, index) => (
                <tr
                  key={row.feature}
                  className={index !== comparisonData.length - 1 ? 'border-b border-gray-medium' : ''}
                >
                  <td className="py-4 px-4 text-body text-gray-dark">{row.feature}</td>
                  <td className="py-4 px-4 text-center">
                    {row.certified ? (
                      <span className="text-2xl text-primary-black" aria-label="Included">✓</span>
                    ) : (
                      <span className="text-gray-light" aria-label="Not included">—</span>
                    )}
                  </td>
                  <td className="py-4 px-4 text-center">
                    {row.nonCertified ? (
                      <span className="text-2xl text-primary-black" aria-label="Included">✓</span>
                    ) : (
                      <span className="text-gray-light" aria-label="Not included">—</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </ScrollReveal>
  )
}

