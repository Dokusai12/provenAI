'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import EvidencePackPreview from '@/components/EvidencePackPreview'
import PreviewModal from '@/components/PreviewModal'
import ScrollReveal from '@/components/animations/ScrollReveal'
import StaggerContainer from '@/components/animations/StaggerContainer'
import AnimatedCard from '@/components/animations/AnimatedCard'

export default function HomePage() {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false)

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Headline, subheadline, bullets, CTAs */}
            <div>
              <ScrollReveal direction="fade" delay={0.1}>
                <h1 className="text-h1 font-bold mb-6 tracking-tight">
                  AI governance evidence, ready for procurement.
                </h1>
              </ScrollReveal>
              <ScrollReveal direction="fade" delay={0.2}>
                <p className="text-body-lg text-gray-subtle mb-8 leading-relaxed">
                  Turn scattered AI usage into procurement-ready proof. We produce and maintain your AI inventory, ownership structure, risk classifications, and an exportable Evidence Pack that buyers can review.
                </p>
              </ScrollReveal>
              <ScrollReveal direction="fade" delay={0.3}>
                <ul className="space-y-4 mb-10">
                  <li className="flex items-start gap-3">
                    <span className="text-2xl mt-0.5">✓</span>
                    <span className="text-body">Complete AI inventory including third-party tools and shadow usage</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl mt-0.5">✓</span>
                    <span className="text-body">Clear ownership and accountability documentation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl mt-0.5">✓</span>
                    <span className="text-body">Risk classification with documented rationale aligned to EU AI Act categories</span>
                  </li>
                </ul>
              </ScrollReveal>
              <ScrollReveal direction="fade" delay={0.4}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/evidence-pack">
                    <Button variant="primary" size="lg" className="w-full sm:w-auto">
                      Generate a sample pack
                    </Button>
                  </Link>
                  <Button 
                    variant="secondary" 
                    size="lg" 
                    className="w-full sm:w-auto"
                    onClick={() => setIsPreviewOpen(true)}
                  >
                    See a sample pack
                  </Button>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Evidence Pack Preview */}
            <div className="hidden lg:block">
              <ScrollReveal direction="fade" delay={0.5}>
                <EvidencePackPreview variant="default" />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 lg:py-32 bg-gray-very-light border-t border-[rgba(0,0,0,0.08)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="fade">
            <h2 className="text-h2 font-bold text-center mb-4">What we do</h2>
            <p className="text-body-lg text-gray-subtle text-center mb-16 max-w-2xl mx-auto">
              We help companies turn scattered AI usage into procurement-ready proof.
            </p>
          </ScrollReveal>
          <StaggerContainer staggerDelay={0.1}>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <AnimatedCard variant="minimal" revealDirection="up" className="h-full">
                <h3 className="text-h4 font-bold mb-3">Inventory</h3>
                <p className="text-body text-gray-subtle mb-3">
                  We document all AI systems, including third-party tools and shadow usage.
                </p>
                <p className="text-small text-gray-subtle">
                  Example: Customer support chatbot, fraud detection system, content recommendation engine
                </p>
              </AnimatedCard>
              <AnimatedCard variant="minimal" revealDirection="up" revealDelay={0.1} className="h-full">
                <h3 className="text-h4 font-bold mb-3">Ownership</h3>
                <p className="text-body text-gray-subtle mb-3">
                  We establish clear ownership and accountability for each AI system.
                </p>
                <p className="text-small text-gray-subtle">
                  Example: Support Team Lead owns chatbot, Security Team Lead owns fraud detection
                </p>
              </AnimatedCard>
              <AnimatedCard variant="minimal" revealDirection="up" revealDelay={0.2} className="h-full">
                <h3 className="text-h4 font-bold mb-3">Classification</h3>
                <p className="text-body text-gray-subtle mb-3">
                  We classify risk with documented rationale aligned to EU AI Act categories.
                </p>
                <p className="text-small text-gray-subtle">
                  Example: High risk for fraud detection, limited risk for customer support
                </p>
              </AnimatedCard>
              <AnimatedCard variant="minimal" revealDirection="up" revealDelay={0.3} className="h-full">
                <h3 className="text-h4 font-bold mb-3">Evidence Pack</h3>
                <p className="text-body text-gray-subtle mb-3">
                  We produce an exportable Evidence Pack that buyers and procurement can review.
                </p>
                <p className="text-small text-gray-subtle">
                  Example: PDF export with all sections, shareable link for stakeholders
                </p>
              </AnimatedCard>
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-20 lg:py-32 bg-primary-white border-t border-[rgba(0,0,0,0.08)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="fade">
            <h2 className="text-h2 font-bold text-center mb-4">What you get</h2>
            <p className="text-body-lg text-gray-subtle text-center mb-16 max-w-2xl mx-auto">
              Tangible deliverables that procurement teams can review and trust.
            </p>
          </ScrollReveal>
          <StaggerContainer staggerDelay={0.1}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'AI Inventory Register',
                  description: 'Complete register of all AI systems with details, classifications, and status.',
                  preview: 'inventory',
                },
                {
                  title: 'Ownership Map',
                  description: 'Clear documentation of who owns and is accountable for each AI system.',
                  preview: 'ownership',
                },
                {
                  title: 'Classification Rationale',
                  description: 'Documented risk classifications with rationale aligned to EU AI Act categories.',
                  preview: 'risk',
                },
                {
                  title: 'Procurement Q&A',
                  description: 'Pre-answered common procurement questions with Evidence Pack references.',
                  preview: 'qa',
                },
                {
                  title: 'Evidence Pack PDF',
                  description: 'Exportable PDF containing all documentation in a single, reviewable format.',
                  preview: 'pack',
                },
              ].map((deliverable, index) => (
                <AnimatedCard
                  key={deliverable.title}
                  variant="default"
                  revealDirection="up"
                  revealDelay={index * 0.1}
                  className="h-full flex flex-col"
                >
                  <h3 className="text-h4 font-bold mb-3">{deliverable.title}</h3>
                  <p className="text-body text-gray-subtle mb-4 flex-grow">{deliverable.description}</p>
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => setIsPreviewOpen(true)}
                    className="w-full"
                  >
                    Preview
                  </Button>
                </AnimatedCard>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Procurement Simulator Section */}
      <section className="py-20 lg:py-32 bg-gray-very-light border-t border-[rgba(0,0,0,0.08)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="fade">
            <h2 className="text-h2 font-bold text-center mb-4">Procurement simulator</h2>
            <p className="text-body-lg text-gray-subtle text-center mb-16 max-w-2xl mx-auto">
              See how your Evidence Pack answers typical procurement questions.
            </p>
          </ScrollReveal>
          <div className="max-w-4xl mx-auto">
            <ProcurementSimulator />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 lg:py-32 bg-primary-white border-t border-[rgba(0,0,0,0.08)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="fade">
            <h2 className="text-h2 font-bold text-center mb-4">How it works</h2>
            <p className="text-body-lg text-gray-subtle text-center mb-16 max-w-2xl mx-auto">
              A straightforward process to produce your Evidence Pack.
            </p>
          </ScrollReveal>
          <div className="max-w-4xl mx-auto">
            <StepsTimeline />
          </div>
          <ScrollReveal direction="fade" delay={0.3}>
            <div className="mt-12 text-center">
              <Card variant="minimal" className="max-w-2xl mx-auto">
                <p className="text-small text-gray-subtle">
                  <strong>Important:</strong> ProvenAI provides evidence documentation services. We do not provide legal advice or guarantee compliance with any regulations. Our Evidence Pack is a tool to help you document and communicate your AI governance practices.
                </p>
              </Card>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Who It Is For Section */}
      <section className="py-20 lg:py-32 bg-gray-very-light border-t border-[rgba(0,0,0,0.08)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="fade">
            <h2 className="text-h2 font-bold text-center mb-16">Who it is for</h2>
          </ScrollReveal>
          <StaggerContainer staggerDelay={0.15}>
            <div className="grid md:grid-cols-3 gap-8">
              <AnimatedCard variant="default" revealDirection="up" className="h-full">
                <h3 className="text-h4 font-bold mb-4">B2B SaaS selling to enterprise</h3>
                <p className="text-body text-gray-subtle mb-4">
                  Deals slowed by procurement questionnaires. Security reviews blocking sales. Buyers asking for proof of AI governance.
                </p>
                <p className="text-body text-gray-subtle">
                  Your Evidence Pack answers their questions before they ask.
                </p>
              </AnimatedCard>
              <AnimatedCard variant="default" revealDirection="up" revealDelay={0.15} className="h-full">
                <h3 className="text-h4 font-bold mb-4">AI agencies and consultancies</h3>
                <p className="text-body text-gray-subtle mb-4">
                  Need a repeatable credibility pack for clients. Want to demonstrate governance maturity.
                </p>
                <p className="text-body text-gray-subtle">
                  Your Evidence Pack becomes your standard deliverable.
                </p>
              </AnimatedCard>
              <AnimatedCard variant="default" revealDirection="up" revealDelay={0.3} className="h-full">
                <h3 className="text-h4 font-bold mb-4">Procurement-heavy teams</h3>
                <p className="text-body text-gray-subtle mb-4">
                  Need risk ownership and evidence. Facing internal audits or compliance reviews.
                </p>
                <p className="text-body text-gray-subtle">
                  Your Evidence Pack documents your governance structure.
                </p>
              </AnimatedCard>
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Trust and Boundaries Section */}
      <section className="py-20 lg:py-32 bg-primary-white border-t border-[rgba(0,0,0,0.08)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="fade">
            <h2 className="text-h2 font-bold text-center mb-16">Trust and boundaries</h2>
          </ScrollReveal>
          <div className="max-w-4xl mx-auto">
            <TrustBoundariesBox />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 lg:py-32 bg-gray-very-light border-t border-[rgba(0,0,0,0.08)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="fade">
            <h2 className="text-h2 font-bold text-center mb-4">Pricing</h2>
            <p className="text-body-lg text-gray-subtle text-center mb-16 max-w-2xl mx-auto">
              Evidence first. Certification optional.
            </p>
          </ScrollReveal>
          <PricingCards />
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 lg:py-32 bg-primary-black text-primary-white border-t border-[rgba(0,0,0,0.08)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal direction="fade">
            <h2 className="text-h2 font-bold mb-6">Ready to get started?</h2>
            <p className="text-body-lg text-gray-light mb-10 max-w-2xl mx-auto">
              Generate a sample pack to see what your Evidence Pack would look like.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/evidence-pack">
                <Button variant="secondary" size="lg" className="bg-primary-white text-primary-black hover:bg-gray-light">
                  Generate a sample pack
                </Button>
              </Link>
              <Button 
                variant="secondary" 
                size="lg"
                onClick={() => setIsPreviewOpen(true)}
                className="border-primary-white text-primary-white hover:bg-gray-dark"
              >
                See a sample pack
              </Button>
              <Link href="/contact">
                <Button variant="secondary" size="lg" className="border-primary-white text-primary-white hover:bg-gray-dark">
                  Talk to us
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <PreviewModal isOpen={isPreviewOpen} onClose={() => setIsPreviewOpen(false)} />
    </>
  )
}

// Procurement Simulator Component
function ProcurementSimulator() {
  const [industry, setIndustry] = useState('')
  const [aiType, setAiType] = useState('')
  const [dataType, setDataType] = useState('')
  const [showAnswers, setShowAnswers] = useState(false)

  const questions = [
    'What AI systems do you use and for what purposes?',
    'Who is responsible for AI governance and risk management?',
    'How do you classify the risk level of your AI systems?',
    'What data do your AI systems process and how is it protected?',
    'How do you monitor AI system performance and accuracy?',
    'What controls are in place for high-risk AI systems?',
    'How do you handle AI-related incidents or errors?',
    'What documentation exists for your AI governance practices?',
    'How do you ensure AI systems comply with relevant regulations?',
    'What is your process for updating or changing AI systems?',
  ]

  const canGenerate = industry && aiType && dataType

  return (
    <Card variant="default" className="p-8">
      <div className="space-y-6">
        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <label className="block text-small font-semibold mb-2">Industry</label>
            <select
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
              className="w-full px-4 py-3 border border-[rgba(0,0,0,0.08)] rounded-soft bg-white"
            >
              <option value="">Select industry</option>
              <option value="saas">SaaS</option>
              <option value="fintech">Fintech</option>
              <option value="healthcare">Healthcare</option>
              <option value="hr">HR</option>
              <option value="agency">Agency</option>
            </select>
          </div>
          <div>
            <label className="block text-small font-semibold mb-2">AI Type</label>
            <select
              value={aiType}
              onChange={(e) => setAiType(e.target.value)}
              className="w-full px-4 py-3 border border-[rgba(0,0,0,0.08)] rounded-soft bg-white"
            >
              <option value="">Select AI type</option>
              <option value="third-party">Third-party models</option>
              <option value="internal">Internal models</option>
              <option value="both">Both</option>
            </select>
          </div>
          <div>
            <label className="block text-small font-semibold mb-2">Data Type</label>
            <select
              value={dataType}
              onChange={(e) => setDataType(e.target.value)}
              className="w-full px-4 py-3 border border-[rgba(0,0,0,0.08)] rounded-soft bg-white"
            >
              <option value="">Select data type</option>
              <option value="personal">Personal data</option>
              <option value="customer">Customer data</option>
              <option value="none">No sensitive data</option>
            </select>
          </div>
        </div>

        {canGenerate && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-h4 font-bold">Procurement Questions</h3>
              <Button
                variant="primary"
                size="sm"
                onClick={() => setShowAnswers(!showAnswers)}
              >
                {showAnswers ? 'Hide answers' : 'Show answers'}
              </Button>
            </div>
            <div className="space-y-3">
              {questions.map((question, index) => (
                <div key={index} className="border border-[rgba(0,0,0,0.08)] rounded-soft p-4">
                  <p className="text-body font-medium mb-2">{question}</p>
                  {showAnswers && (
                    <div className="mt-3 pt-3 border-t border-[rgba(0,0,0,0.08)]">
                      <p className="text-small text-gray-subtle mb-2">
                        <strong>Evidence Pack section:</strong> {index < 3 ? 'AI Systems Inventory' : index < 6 ? 'Risk Classification' : 'Monitoring Plan'}
                      </p>
                      <p className="text-small text-gray-subtle">
                        Example answer: This information is documented in your Evidence Pack under the relevant section. The pack includes detailed documentation of all AI systems, their classifications, and governance structures.
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </Card>
  )
}

// Steps Timeline Component
function StepsTimeline() {
  const steps = [
    {
      step: 1,
      title: 'Initial assessment',
      duration: '1-2 weeks',
      output: 'AI inventory draft and ownership structure',
    },
    {
      step: 2,
      title: 'Risk classification',
      duration: '1 week',
      output: 'Risk classifications with documented rationale',
    },
    {
      step: 3,
      title: 'Evidence Pack production',
      duration: '1 week',
      output: 'Complete Evidence Pack with all sections',
    },
    {
      step: 4,
      title: 'Review and export',
      duration: 'Ongoing',
      output: 'Exportable PDF and shareable link',
    },
  ]

  return (
    <div className="space-y-8">
      {steps.map((step, index) => (
        <div key={step.step} className="flex gap-6 relative">
          {index < steps.length - 1 && (
            <div className="absolute left-6 top-12 w-0.5 h-full bg-[rgba(0,0,0,0.08)]" />
          )}
          <div className="flex-shrink-0">
            <div className="w-12 h-12 rounded-full bg-primary-black text-primary-white flex items-center justify-center font-bold text-h4">
              {step.step}
            </div>
          </div>
          <div className="flex-1 pb-8">
            <h3 className="text-h4 font-bold mb-2">{step.title}</h3>
            <p className="text-small text-gray-subtle mb-2">Duration: {step.duration}</p>
            <p className="text-body text-gray-subtle">Output: {step.output}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

// Trust Boundaries Box Component
function TrustBoundariesBox() {
  return (
    <div className="space-y-8">
      <Card variant="default" className="p-8">
        <h3 className="text-h4 font-bold mb-4">What we verify</h3>
        <ul className="space-y-2 text-body text-gray-subtle">
          <li>• Completeness of AI inventory documentation</li>
          <li>• Consistency of risk classifications with documented rationale</li>
          <li>• Presence of ownership and accountability structures</li>
          <li>• Evidence Pack structure and exportability</li>
        </ul>
      </Card>
      <Card variant="default" className="p-8">
        <h3 className="text-h4 font-bold mb-4">What is self-attested</h3>
        <ul className="space-y-2 text-body text-gray-subtle">
          <li>• Accuracy of AI inventory information</li>
          <li>• Appropriateness of risk classifications</li>
          <li>• Effectiveness of monitoring and controls</li>
          <li>• Compliance with regulations</li>
        </ul>
      </Card>
      <Card variant="default" className="p-8">
        <h3 className="text-h4 font-bold mb-4">What we do not do</h3>
        <ul className="space-y-2 text-body text-gray-subtle">
          <li>• Provide legal advice</li>
          <li>• Guarantee compliance with any regulations</li>
          <li>• Audit your AI systems for technical accuracy</li>
          <li>• Certify compliance with EU AI Act or other frameworks</li>
        </ul>
      </Card>
      <Card variant="minimal" className="p-8">
        <h3 className="text-h4 font-bold mb-4">Data handling</h3>
        <p className="text-body text-gray-subtle">
          Your data is used solely to produce your Evidence Pack. We do not share your information with third parties. All data is stored securely and handled in accordance with our privacy policy.
        </p>
      </Card>
    </div>
  )
}

// Pricing Cards Component
function PricingCards() {
  return (
    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
      <Card variant="default" className="p-8">
        <h3 className="text-h4 font-bold mb-2">Evidence Pack</h3>
        <p className="text-h2 font-bold mb-4">From £2,500</p>
        <p className="text-small text-gray-subtle mb-6">One-off production of your Evidence Pack</p>
        <ul className="space-y-3 mb-8 text-body text-gray-subtle">
          <li>• Complete AI inventory</li>
          <li>• Ownership documentation</li>
          <li>• Risk classifications</li>
          <li>• Exportable PDF</li>
        </ul>
        <Link href="/evidence-pack" className="block">
          <Button variant="primary" size="md" className="w-full">
            Get started
          </Button>
        </Link>
      </Card>
      <Card variant="featured" className="p-8">
        <h3 className="text-h4 font-bold mb-2">Evidence Pack + Updates</h3>
        <p className="text-h2 font-bold mb-4">From £5,000/year</p>
        <p className="text-small text-gray-subtle mb-6">Evidence Pack plus ongoing updates</p>
        <ul className="space-y-3 mb-8 text-body text-gray-subtle">
          <li>• Everything in Evidence Pack</li>
          <li>• Quarterly updates</li>
          <li>• Change log maintenance</li>
          <li>• Priority support</li>
        </ul>
        <Link href="/contact" className="block">
          <Button variant="primary" size="md" className="w-full">
            Contact us
          </Button>
        </Link>
      </Card>
      <Card variant="default" className="p-8">
        <h3 className="text-h4 font-bold mb-2">Evidence Pack + Certification</h3>
        <p className="text-h2 font-bold mb-4">From £7,500</p>
        <p className="text-small text-gray-subtle mb-6">Evidence Pack plus optional certification</p>
        <ul className="space-y-3 mb-8 text-body text-gray-subtle">
          <li>• Everything in Evidence Pack</li>
          <li>• Evidence review</li>
          <li>• Certification badge</li>
          <li>• Directory listing</li>
        </ul>
        <Link href="/certification" className="block">
          <Button variant="secondary" size="md" className="w-full">
            Learn more
          </Button>
        </Link>
      </Card>
    </div>
  )
}
