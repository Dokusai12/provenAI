'use client'

import Link from 'next/link'
import Card from '@/components/ui/Card'
import Breadcrumbs from '@/components/ux/Breadcrumbs'
import ScrollReveal from '@/components/animations/ScrollReveal'

const glossaryTerms = [
  {
    term: 'AI Inventory',
    definition: 'A complete register of all AI systems in use, including third-party tools and shadow usage. Each system is documented with purpose, type, risk classification, owner, and status.',
    links: [
      { href: '/resources/ai-inventory-template', text: 'AI Inventory Template Guide' },
      { href: '/evidence-pack', text: 'Evidence Pack' },
    ],
  },
  {
    term: 'Shadow AI',
    definition: 'AI systems used without formal approval or governance. These may include unsanctioned use of ChatGPT, Claude, or other AI tools by employees.',
    links: [
      { href: '/resources/shadow-ai-discovery', text: 'Shadow AI Discovery Guide' },
      { href: '/resources/ai-inventory-template', text: 'AI Inventory Template' },
    ],
  },
  {
    term: 'Risk Classification',
    definition: 'The process of categorizing AI systems by risk level (high, limited, minimal) based on factors like data sensitivity, system purpose, and potential impact. Classifications should align with EU AI Act categories or other relevant frameworks.',
    links: [
      { href: '/resources/how-to-document-ai-risk-classification', text: 'Risk Classification Guide' },
      { href: '/evidence-pack', text: 'Evidence Pack' },
    ],
  },
  {
    term: 'Evidence Pack',
    definition: 'A comprehensive, exportable document that contains all AI governance evidence. Includes AI inventory, ownership documentation, risk classifications, monitoring plans, and change logs.',
    links: [
      { href: '/evidence-pack', text: 'Learn about Evidence Packs' },
      { href: '/evidence-engine', text: 'Evidence Engine' },
    ],
  },
  {
    term: 'Verification',
    definition: 'The process of checking that an Evidence Pack meets structural and documentation standards. ProvenAI verifies completeness, consistency, and exportability. Verification does not check accuracy or compliance.',
    links: [
      { href: '/certification', text: 'Certification' },
      { href: '/standards', text: 'Standards' },
    ],
  },
  {
    term: 'Attestation',
    definition: 'Self-declaration by a company that the information in their Evidence Pack is accurate. Companies attest to the accuracy of their AI inventory, appropriateness of risk classifications, and compliance with regulations.',
    links: [
      { href: '/certification', text: 'Certification' },
      { href: '/standards', text: 'Standards' },
    ],
  },
  {
    term: 'Monitoring Plan',
    definition: 'Documentation of ongoing monitoring processes for AI systems. Includes review cadences, metrics tracked, and processes for oversight. High-risk systems typically require more frequent monitoring.',
    links: [
      { href: '/evidence-pack', text: 'Evidence Pack' },
      { href: '/resources/ai-governance-for-procurement', text: 'AI Governance Guide' },
    ],
  },
  {
    term: 'Incident Log',
    definition: 'A record of AI-related incidents, errors, or issues. Includes what happened, how it was resolved, and any changes made to prevent recurrence. Part of the Evidence Pack change log.',
    links: [
      { href: '/evidence-pack', text: 'Evidence Pack' },
      { href: '/resources/ai-governance-for-procurement', text: 'AI Governance Guide' },
    ],
  },
]

export default function GlossaryPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-12 bg-primary-white border-b border-[rgba(0,0,0,0.08)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs className="mb-6" />
          <ScrollReveal direction="fade">
            <h1 className="text-h1 font-bold mb-4">Glossary</h1>
            <p className="text-body-lg text-gray-subtle max-w-3xl">
              Definitions of key terms used in AI governance, evidence documentation, and procurement.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Glossary Terms */}
      <section className="py-12 bg-gray-very-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {glossaryTerms.map((item, index) => (
              <ScrollReveal key={item.term} direction="fade" delay={index * 0.05}>
                <Card variant="default" className="p-8">
                  <h2 className="text-h3 font-bold mb-3">{item.term}</h2>
                  <p className="text-body text-gray-subtle mb-4">{item.definition}</p>
                  {item.links && item.links.length > 0 && (
                    <div>
                      <p className="text-small font-semibold mb-2">Related resources:</p>
                      <div className="flex flex-wrap gap-3">
                        {item.links.map((link, linkIndex) => (
                          <Link
                            key={linkIndex}
                            href={link.href}
                            className="text-small text-primary-black hover:underline"
                          >
                            {link.text}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-12 bg-primary-white border-t border-[rgba(0,0,0,0.08)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="fade">
            <Card variant="minimal" className="p-8">
              <h2 className="text-h3 font-bold mb-4">Learn more</h2>
              <div className="grid md:grid-cols-2 gap-4 text-body text-gray-subtle">
                <Link href="/evidence-pack" className="hover:underline">
                  → Evidence Pack
                </Link>
                <Link href="/resources" className="hover:underline">
                  → Resources
                </Link>
                <Link href="/standards" className="hover:underline">
                  → Standards
                </Link>
                <Link href="/certification" className="hover:underline">
                  → Certification
                </Link>
              </div>
            </Card>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}

