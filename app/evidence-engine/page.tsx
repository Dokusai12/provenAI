'use client'

import Link from 'next/link'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import EvidenceGraph from '@/components/EvidenceGraph'
import Breadcrumbs from '@/components/ux/Breadcrumbs'
import ScrollReveal from '@/components/animations/ScrollReveal'
import StaggerContainer from '@/components/animations/StaggerContainer'
import AnimatedCard from '@/components/animations/AnimatedCard'

export default function EvidenceEnginePage() {
  const modules = [
    {
      title: 'Inventory Builder',
      description: 'Document all AI systems, including third-party tools and shadow usage. Track system details, purposes, and classifications.',
    },
    {
      title: 'Ownership Approvals',
      description: 'Assign owners to each AI system and capture sign-off documentation. Maintain accountability structures.',
    },
    {
      title: 'Classification Rationale',
      description: 'Classify risk levels with documented rationale. Align classifications with EU AI Act categories and other frameworks.',
    },
    {
      title: 'Export Centre',
      description: 'Generate and export your Evidence Pack in multiple formats. Share links with stakeholders and procurement teams.',
    },
  ]

  const buyerQuestions = [
    {
      question: 'What AI systems do you use?',
      answer: 'AI Systems Inventory section provides complete register',
    },
    {
      question: 'Who is responsible for AI governance?',
      answer: 'Ownership & Sign-off section documents accountability',
    },
    {
      question: 'How do you classify AI risk?',
      answer: 'Risk Classification Rationale section explains methodology',
    },
    {
      question: 'How do you monitor AI systems?',
      answer: 'Monitoring Plan section details ongoing processes',
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-12 bg-primary-white border-b border-[rgba(0,0,0,0.08)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs className="mb-6" />
          <ScrollReveal direction="fade">
            <h1 className="text-h1 font-bold mb-4">Evidence Engine</h1>
            <p className="text-body-lg text-gray-subtle max-w-3xl">
              The Evidence Engine is our system for producing and maintaining your AI governance evidence. It connects your AI systems, data, owners, controls, and outputs into a coherent evidence structure that procurement teams can review.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Evidence Graph Section */}
      <section className="py-12 bg-gray-very-light border-b border-[rgba(0,0,0,0.08)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="fade">
            <h2 className="text-h2 font-bold mb-8 text-center">Evidence Graph</h2>
            <p className="text-body-lg text-gray-subtle text-center mb-12 max-w-2xl mx-auto">
              Click on any node to see example records. The graph shows how AI systems connect to data, owners, controls, and outputs.
            </p>
            <EvidenceGraph />
          </ScrollReveal>
        </div>
      </section>

      {/* Modules Preview Section */}
      <section className="py-12 bg-primary-white border-b border-[rgba(0,0,0,0.08)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="fade">
            <h2 className="text-h2 font-bold mb-4 text-center">Modules</h2>
            <p className="text-body-lg text-gray-subtle text-center mb-16 max-w-2xl mx-auto">
              The Evidence Engine consists of four core modules that work together to produce your Evidence Pack.
            </p>
          </ScrollReveal>
          <StaggerContainer staggerDelay={0.1}>
            <div className="grid md:grid-cols-2 gap-6">
              {modules.map((module, index) => (
                <AnimatedCard
                  key={module.title}
                  variant="default"
                  revealDirection="up"
                  revealDelay={index * 0.1}
                  className="h-full"
                >
                  <h3 className="text-h4 font-bold mb-3">{module.title}</h3>
                  <p className="text-body text-gray-subtle">{module.description}</p>
                </AnimatedCard>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Why This Works for Procurement Section */}
      <section className="py-12 bg-gray-very-light border-b border-[rgba(0,0,0,0.08)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="fade">
            <h2 className="text-h2 font-bold mb-4 text-center">Why this works for procurement</h2>
            <p className="text-body-lg text-gray-subtle text-center mb-12 max-w-2xl mx-auto">
              Procurement teams ask specific questions. Your Evidence Pack provides the answers.
            </p>
          </ScrollReveal>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {buyerQuestions.map((item, index) => (
                <Card key={index} variant="default" className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="flex-1">
                      <h3 className="text-h5 font-semibold mb-2">{item.question}</h3>
                      <p className="text-body text-gray-subtle">{item.answer}</p>
                    </div>
                    <Link href="/evidence-pack" className="text-small font-medium text-primary-black hover:underline">
                      View in Evidence Pack →
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-primary-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal direction="fade">
            <h2 className="text-h2 font-bold mb-4">Ready to see your Evidence Pack?</h2>
            <p className="text-body-lg text-gray-subtle mb-8">
              Generate a sample pack to see how the Evidence Engine produces procurement-ready documentation.
            </p>
            <Link href="/evidence-pack">
              <Button variant="primary" size="lg">
                Generate a sample pack
              </Button>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}

