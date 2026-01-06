'use client'

import Link from 'next/link'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Breadcrumbs from '@/components/ux/Breadcrumbs'
import ScrollReveal from '@/components/animations/ScrollReveal'
import StaggerContainer from '@/components/animations/StaggerContainer'
import AnimatedCard from '@/components/animations/AnimatedCard'
import FAQ from '@/components/FAQ'

export default function StandardsPage() {
  const criteria = [
    {
      title: 'Complete AI Inventory',
      description: 'Evidence Pack includes a complete register of all AI systems, including third-party tools and shadow usage. Each system is documented with purpose, type, and status.',
    },
    {
      title: 'Ownership Documentation',
      description: 'Each AI system has a designated owner with documented accountability. Sign-off documentation is present for all systems.',
    },
    {
      title: 'Risk Classification with Rationale',
      description: 'All AI systems are classified by risk level with documented rationale. Classifications align with EU AI Act categories or other relevant frameworks.',
    },
    {
      title: 'Monitoring Plan',
      description: 'Evidence Pack includes a monitoring plan that outlines review cadences, metrics tracked, and processes for ongoing oversight.',
    },
    {
      title: 'Exportable Format',
      description: 'Evidence Pack is exportable as PDF and shareable via link. All sections are present and properly structured.',
    },
  ]

  const processSteps = [
    {
      step: 1,
      title: 'Produce Evidence Pack',
      description: 'Use the Evidence Engine to produce your Evidence Pack. Document all AI systems, ownership, risk classifications, and monitoring processes.',
    },
    {
      step: 2,
      title: 'Submit for Review',
      description: 'Submit your Evidence Pack for review. Our team will evaluate it against our published criteria.',
    },
    {
      step: 3,
      title: 'Review Period',
      description: 'We review your Evidence Pack for completeness, structure, and documentation quality. This typically takes 5-7 business days.',
    },
    {
      step: 4,
      title: 'Certification Decision',
      description: 'If your Evidence Pack meets our standards, certification is issued. If not, we provide feedback for improvement.',
    },
  ]

  const faqItems = [
    {
      question: 'What does ProvenAI verify?',
      answer: 'We verify that your Evidence Pack is complete, includes all required sections, has documented risk classifications with rationale, and is exportable. We do not verify the accuracy of your AI inventory, the appropriateness of your risk classifications, or your compliance with regulations.',
    },
    {
      question: 'What is the difference between verification and attestation?',
      answer: 'Verification means we check that your Evidence Pack meets our structural and documentation standards. Attestation means you confirm the accuracy of the information in your Evidence Pack. We verify structure; you attest to accuracy.',
    },
    {
      question: 'How long does certification take?',
      answer: 'The review process typically takes 5-7 business days after you submit your Evidence Pack. This includes our evaluation against all criteria.',
    },
    {
      question: 'What if my Evidence Pack does not meet the standards?',
      answer: 'We provide detailed feedback on what needs improvement. You can update your Evidence Pack and resubmit. There is no limit on resubmissions.',
    },
    {
      question: 'Do I need to renew my certification?',
      answer: 'Yes, certification is valid for one year. Annual renewal requires an updated Evidence Pack reflecting current AI systems and any changes to risk classifications or ownership structures.',
    },
    {
      question: 'What outputs are required?',
      answer: 'Your Evidence Pack must include: Executive Summary, AI Systems Inventory, Ownership & Sign-off, Risk Classification Rationale, Monitoring Plan, and Change Log & Incident Log. All sections must be exportable as PDF.',
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-12 bg-primary-white border-b border-[rgba(0,0,0,0.08)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs className="mb-6" />
          <ScrollReveal direction="fade">
            <h1 className="text-h1 font-bold mb-4">Standards</h1>
            <p className="text-body-lg text-gray-subtle max-w-3xl">
              Our certification standards are published and transparent. These are the criteria we use to evaluate Evidence Packs for certification.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Criteria Section */}
      <section className="py-12 bg-gray-very-light border-b border-[rgba(0,0,0,0.08)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="fade">
            <h2 className="text-h2 font-bold mb-8 text-center">Certification criteria</h2>
            <p className="text-body-lg text-gray-subtle text-center mb-12 max-w-2xl mx-auto">
              To be certified, your Evidence Pack must meet all five criteria below.
            </p>
          </ScrollReveal>
          <StaggerContainer staggerDelay={0.1}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {criteria.map((criterion, index) => (
                <AnimatedCard
                  key={criterion.title}
                  variant="default"
                  revealDirection="up"
                  revealDelay={index * 0.1}
                  className="h-full"
                >
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-primary-black text-primary-white flex items-center justify-center font-bold text-small flex-shrink-0">
                      {index + 1}
                    </div>
                    <h3 className="text-h4 font-bold">{criterion.title}</h3>
                  </div>
                  <p className="text-body text-gray-subtle">{criterion.description}</p>
                </AnimatedCard>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Verification vs Attestation Section */}
      <section className="py-12 bg-primary-white border-b border-[rgba(0,0,0,0.08)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="fade">
            <h2 className="text-h2 font-bold mb-8 text-center">Verification vs attestation</h2>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
              <Card variant="default" className="p-8">
                <h3 className="text-h4 font-bold mb-4">What we verify</h3>
                <ul className="space-y-3 text-body text-gray-subtle">
                  <li>• Completeness of Evidence Pack sections</li>
                  <li>• Presence of required documentation</li>
                  <li>• Consistency of risk classifications with rationale</li>
                  <li>• Exportability and structure of Evidence Pack</li>
                  <li>• Documentation quality and clarity</li>
                </ul>
              </Card>
              <Card variant="default" className="p-8">
                <h3 className="text-h4 font-bold mb-4">What you attest to</h3>
                <ul className="space-y-3 text-body text-gray-subtle">
                  <li>• Accuracy of AI inventory information</li>
                  <li>• Appropriateness of risk classifications</li>
                  <li>• Effectiveness of monitoring and controls</li>
                  <li>• Compliance with applicable regulations</li>
                  <li>• Currency of information in Evidence Pack</li>
                </ul>
              </Card>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 bg-gray-very-light border-b border-[rgba(0,0,0,0.08)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="fade">
            <h2 className="text-h2 font-bold mb-8 text-center">Certification process</h2>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {processSteps.map((step, index) => (
                  <div key={step.step} className="flex gap-6 relative">
                    {index < processSteps.length - 1 && (
                      <div className="absolute left-6 top-12 w-0.5 h-full bg-[rgba(0,0,0,0.08)]" />
                    )}
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-primary-black text-primary-white flex items-center justify-center font-bold text-h4">
                        {step.step}
                      </div>
                    </div>
                    <div className="flex-1 pb-8">
                      <h3 className="text-h4 font-bold mb-2">{step.title}</h3>
                      <p className="text-body text-gray-subtle">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Required Outputs Section */}
      <section className="py-12 bg-primary-white border-b border-[rgba(0,0,0,0.08)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="fade">
            <h2 className="text-h2 font-bold mb-8 text-center">Required outputs</h2>
            <div className="max-w-4xl mx-auto">
              <Card variant="default" className="p-8">
                <p className="text-body-lg text-gray-subtle mb-6">
                  Your Evidence Pack must include the following sections, all exportable as PDF:
                </p>
                <ul className="space-y-4 text-body text-gray-subtle">
                  <li className="flex items-start gap-3">
                    <span className="text-2xl mt-0.5">•</span>
                    <span><strong>Executive Summary:</strong> Overview of AI governance approach and key highlights</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl mt-0.5">•</span>
                    <span><strong>AI Systems Inventory:</strong> Complete register of all AI systems with details, classifications, and status</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl mt-0.5">•</span>
                    <span><strong>Ownership & Sign-off:</strong> Clear documentation of who owns and is accountable for each AI system</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl mt-0.5">•</span>
                    <span><strong>Risk Classification Rationale:</strong> Documented risk classifications with rationale aligned to EU AI Act categories</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl mt-0.5">•</span>
                    <span><strong>Monitoring Plan:</strong> Ongoing monitoring processes, metrics, and review cadences</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl mt-0.5">•</span>
                    <span><strong>Change Log & Incident Log:</strong> History of system updates, changes, and any incidents</span>
                  </li>
                </ul>
              </Card>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Data Handling Section */}
      <section className="py-12 bg-gray-very-light border-b border-[rgba(0,0,0,0.08)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="fade">
            <h2 className="text-h2 font-bold mb-8 text-center">Data handling</h2>
            <div className="max-w-4xl mx-auto">
              <Card variant="default" className="p-8">
                <p className="text-body-lg text-gray-subtle mb-4">
                  Your data is used solely to produce and review your Evidence Pack. We do not share your information with third parties.
                </p>
                <p className="text-body text-gray-subtle mb-4">
                  All data is stored securely and handled in accordance with our privacy policy. You retain full ownership of your Evidence Pack and can export it at any time.
                </p>
                <p className="text-body text-gray-subtle">
                  For detailed information about how we handle your data, see our <Link href="/privacy" className="underline">Privacy Policy</Link>.
                </p>
              </Card>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-primary-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="fade">
            <h2 className="text-h2 font-bold mb-8 text-center">Frequently asked questions</h2>
            <FAQ items={faqItems} />
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
