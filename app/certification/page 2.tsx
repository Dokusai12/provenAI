'use client'

import Link from 'next/link'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Breadcrumbs from '@/components/ux/Breadcrumbs'
import ScrollReveal from '@/components/animations/ScrollReveal'
import StaggerContainer from '@/components/animations/StaggerContainer'
import AnimatedCard from '@/components/animations/AnimatedCard'

export default function CertificationPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-12 bg-primary-white border-b border-[rgba(0,0,0,0.08)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs className="mb-6" />
          <ScrollReveal direction="fade">
            <h1 className="text-h1 font-bold mb-4">Certification</h1>
            <p className="text-body-lg text-gray-subtle max-w-3xl">
              Certification is optional and only issued after evidence is produced and reviewed. It provides third-party verification that your Evidence Pack meets our standards.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Certification Scope Section */}
      <section className="py-12 bg-gray-very-light border-b border-[rgba(0,0,0,0.08)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="fade">
            <h2 className="text-h2 font-bold mb-8 text-center">Certification scope</h2>
            <div className="max-w-4xl mx-auto">
              <Card variant="default" className="p-8">
                <p className="text-body-lg text-gray-subtle mb-6">
                  ProvenAI certification verifies that your Evidence Pack meets our published standards. It confirms:
                </p>
                <ul className="space-y-4 text-body text-gray-subtle mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-2xl mt-0.5">✓</span>
                    <span>Your Evidence Pack is complete and includes all required sections</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl mt-0.5">✓</span>
                    <span>Risk classifications are documented with rationale</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl mt-0.5">✓</span>
                    <span>Ownership and accountability structures are clear</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl mt-0.5">✓</span>
                    <span>Evidence Pack is exportable and shareable</span>
                  </li>
                </ul>
                <p className="text-body text-gray-subtle">
                  Certification does not verify the accuracy of your AI inventory, the appropriateness of your risk classifications, or your compliance with regulations.
                </p>
              </Card>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Verified vs Attested Section */}
      <section className="py-12 bg-primary-white border-b border-[rgba(0,0,0,0.08)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="fade">
            <h2 className="text-h2 font-bold mb-8 text-center">Verified vs attested</h2>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
              <Card variant="default" className="p-8">
                <h3 className="text-h4 font-bold mb-4">What we verify</h3>
                <ul className="space-y-3 text-body text-gray-subtle">
                  <li>• Completeness of Evidence Pack sections</li>
                  <li>• Presence of required documentation</li>
                  <li>• Consistency of risk classifications with rationale</li>
                  <li>• Exportability and structure of Evidence Pack</li>
                </ul>
              </Card>
              <Card variant="default" className="p-8">
                <h3 className="text-h4 font-bold mb-4">What is self-attested</h3>
                <ul className="space-y-3 text-body text-gray-subtle">
                  <li>• Accuracy of AI inventory information</li>
                  <li>• Appropriateness of risk classifications</li>
                  <li>• Effectiveness of monitoring and controls</li>
                  <li>• Compliance with regulations</li>
                </ul>
              </Card>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Renewal Cadence Section */}
      <section className="py-12 bg-gray-very-light border-b border-[rgba(0,0,0,0.08)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="fade">
            <h2 className="text-h2 font-bold mb-8 text-center">Renewal and re-review</h2>
            <div className="max-w-4xl mx-auto">
              <Card variant="default" className="p-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-h4 font-bold mb-3">Annual renewal</h3>
                    <p className="text-body text-gray-subtle">
                      Certification is valid for one year from the date of issue. Annual renewal requires:
                    </p>
                    <ul className="mt-3 space-y-2 text-body text-gray-subtle">
                      <li>• Updated Evidence Pack reflecting current AI systems</li>
                      <li>• Review of any changes to risk classifications</li>
                      <li>• Confirmation that ownership structures remain current</li>
                    </ul>
                  </div>
                  <div className="border-t border-[rgba(0,0,0,0.08)] pt-6">
                    <h3 className="text-h4 font-bold mb-3">Re-review triggers</h3>
                    <p className="text-body text-gray-subtle mb-3">
                      Certification may require re-review if:
                    </p>
                    <ul className="space-y-2 text-body text-gray-subtle">
                      <li>• Significant changes to AI inventory (new high-risk systems)</li>
                      <li>• Changes to risk classifications</li>
                      <li>• Changes to ownership structures</li>
                      <li>• Updates to Evidence Pack structure or standards</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* What Badge Means Section */}
      <section className="py-12 bg-primary-white border-b border-[rgba(0,0,0,0.08)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="fade">
            <h2 className="text-h2 font-bold mb-8 text-center">What the badge means</h2>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
              <Card variant="featured" className="p-8">
                <h3 className="text-h4 font-bold mb-4">What it means</h3>
                <ul className="space-y-3 text-body text-gray-subtle">
                  <li>• Your Evidence Pack meets ProvenAI standards</li>
                  <li>• You have documented AI governance practices</li>
                  <li>• Your Evidence Pack is complete and exportable</li>
                  <li>• You can display the badge on your website and materials</li>
                  <li>• You are listed in the ProvenAI Directory</li>
                </ul>
              </Card>
              <Card variant="default" className="p-8">
                <h3 className="text-h4 font-bold mb-4">What it does not mean</h3>
                <ul className="space-y-3 text-body text-gray-subtle">
                  <li>• Your AI systems are technically verified</li>
                  <li>• You are compliant with EU AI Act or other regulations</li>
                  <li>• Your risk classifications are correct</li>
                  <li>• Your AI inventory is accurate</li>
                  <li>• We provide legal advice or compliance guarantees</li>
                </ul>
              </Card>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Certification Flow Section */}
      <section className="py-12 bg-gray-very-light border-b border-[rgba(0,0,0,0.08)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="fade">
            <h2 className="text-h2 font-bold mb-8 text-center">Certification as an outcome</h2>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary-black text-primary-white flex items-center justify-center font-bold text-h4">
                      1
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-h4 font-bold mb-2">Evidence Pack</h3>
                    <p className="text-body text-gray-subtle">
                      Produce your Evidence Pack using the Evidence Engine. Document all AI systems, ownership, risk classifications, and monitoring processes.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary-black text-primary-white flex items-center justify-center font-bold text-h4">
                      2
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-h4 font-bold mb-2">Review</h3>
                    <p className="text-body text-gray-subtle">
                      We review your Evidence Pack against our published standards. We verify completeness, structure, and documentation quality.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary-black text-primary-white flex items-center justify-center font-bold text-h4">
                      3
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-h4 font-bold mb-2">Certification</h3>
                    <p className="text-body text-gray-subtle">
                      If your Evidence Pack meets our standards, certification is issued. You receive a badge and are listed in the Directory.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Standards Link Section */}
      <section className="py-12 bg-primary-white border-b border-[rgba(0,0,0,0.08)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="fade">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-h2 font-bold mb-4">Standards and criteria</h2>
              <p className="text-body-lg text-gray-subtle mb-8">
                Our certification standards are published and transparent. Review the criteria we use to evaluate Evidence Packs.
              </p>
              <Link href="/standards">
                <Button variant="primary" size="lg">
                  View Standards
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gray-very-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal direction="fade">
            <h2 className="text-h2 font-bold mb-4">Ready to get certified?</h2>
            <p className="text-body-lg text-gray-subtle mb-8">
              Start by producing your Evidence Pack. Certification is optional and comes after evidence review.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/evidence-pack">
                <Button variant="primary" size="lg">
                  Generate a sample pack
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="secondary" size="lg">
                  Talk to us
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}

