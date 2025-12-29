'use client'

import Link from 'next/link'
import Breadcrumbs from '@/components/ux/Breadcrumbs'
import ScrollReveal from '@/components/animations/ScrollReveal'
import StaggerContainer from '@/components/animations/StaggerContainer'
import AnimatedCard from '@/components/animations/AnimatedCard'
import Card from '@/components/ui/Card'
import PreScreeningQuiz from '@/components/tools/PreScreeningQuiz'
import ComplianceGapAnalysis from '@/components/tools/ComplianceGapAnalysis'
import ROICalculator from '@/components/tools/ROICalculator'
import RiskCategoryCalculator from '@/components/tools/RiskCategoryCalculator'
import TimelineSimulator from '@/components/tools/TimelineSimulator'
import ChecklistGenerator from '@/components/tools/ChecklistGenerator'
import StandardsMapper from '@/components/tools/StandardsMapper'
import ReadinessScore from '@/components/tools/ReadinessScore'
import VendorAssessment from '@/components/tools/VendorAssessment'
import ComplianceRoadmap from '@/components/tools/ComplianceRoadmap'
import Glossary from '@/components/resources/Glossary'
import ComplianceCalendar from '@/components/widgets/ComplianceCalendar'
import BadgePreview from '@/components/engagement/BadgePreview'
import AnimatedInfographic from '@/components/widgets/AnimatedInfographic'
import CertificationDemo from '@/components/widgets/CertificationDemo'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'

export default function ResourcesPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-12 bg-primary-white border-b border-gray-medium">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs className="mb-6" />
          <ScrollReveal direction="fade">
            <div className="text-center">
              <h1 className="text-h1 font-bold mb-4">AI Compliance Resources & Tools</h1>
              <p className="text-body-lg text-gray-subtle max-w-3xl mx-auto">
                Everything you need to assess, prepare, and understand AI compliance
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Quick Start Tools */}
      <section className="py-12 bg-gray-very-light border-t border-gray-medium">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="fade">
            <h2 className="text-h2 font-bold mb-4 text-center">Quick Start</h2>
            <p className="text-body text-gray-subtle text-center mb-8 max-w-2xl mx-auto">
              Start with these essential assessments to understand your compliance readiness
            </p>
          </ScrollReveal>
          <div className="space-y-12">
            <PreScreeningQuiz />
            <ComplianceGapAnalysis />
          </div>
        </div>
      </section>

      {/* Assessment Tools */}
      <section className="py-12 bg-primary-white border-t border-gray-medium">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="fade">
            <h2 className="text-h2 font-bold mb-4 text-center">Assessment Tools</h2>
            <p className="text-body text-gray-subtle text-center mb-8 max-w-2xl mx-auto">
              Comprehensive tools to evaluate your compliance status
            </p>
          </ScrollReveal>
          <div className="space-y-12">
            <ReadinessScore />
            <RiskCategoryCalculator />
            <VendorAssessment />
          </div>
        </div>
      </section>

      {/* Planning & Calculation Tools */}
      <section className="py-12 bg-gray-very-light border-t border-gray-medium">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="fade">
            <h2 className="text-h2 font-bold mb-4 text-center">Planning & Calculations</h2>
            <p className="text-body text-gray-subtle text-center mb-8 max-w-2xl mx-auto">
              Tools to help you plan and understand the value of certification
            </p>
          </ScrollReveal>
          <div className="space-y-12">
            <ROICalculator />
            <TimelineSimulator />
            <ChecklistGenerator />
          </div>
        </div>
      </section>

      {/* Standards & Compliance */}
      <section className="py-12 bg-primary-white border-t border-gray-medium">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="fade">
            <h2 className="text-h2 font-bold mb-4 text-center">Standards & Compliance</h2>
            <p className="text-body text-gray-subtle text-center mb-8 max-w-2xl mx-auto">
              Understand standards alignment and compliance requirements
            </p>
          </ScrollReveal>
          <div className="space-y-12">
            <StandardsMapper />
            <ComplianceRoadmap />
            <ComplianceCalendar />
          </div>
        </div>
      </section>

      {/* Reference & Preview */}
      <section className="py-12 bg-gray-very-light border-t border-gray-medium">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="fade">
            <h2 className="text-h2 font-bold mb-4 text-center">Reference & Preview</h2>
            <p className="text-body text-gray-subtle text-center mb-8 max-w-2xl mx-auto">
              Glossary of terms, preview your certification badge, and see certification in action
            </p>
          </ScrollReveal>
          <div className="space-y-12">
            <CertificationDemo />
            <Glossary />
            <BadgePreview />
          </div>
        </div>
      </section>

      {/* Animated Infographics */}
      <section className="py-12 bg-primary-white border-t border-gray-medium">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="fade">
            <h2 className="text-h2 font-bold mb-8 text-center">Visual Guides</h2>
            <div className="space-y-12">
              <AnimatedInfographic type="cost" />
              <AnimatedInfographic type="timeline" />
              <AnimatedInfographic type="process" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-12 bg-gray-very-light border-t border-gray-medium">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="fade">
            <Card className="text-center p-8">
              <h3 className="text-h2 font-bold mb-2">Get Weekly EU AI Act Updates</h3>
              <p className="text-body text-gray-subtle mb-6">
                Stay informed with curated compliance news and regulatory updates
              </p>
              <form className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1"
                />
                <Button variant="primary" size="md">
                  Subscribe
                </Button>
              </form>
            </Card>
          </ScrollReveal>
        </div>
      </section>

      {/* Guides Section */}
      <section className="py-12 bg-primary-white border-t border-gray-medium">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="fade">
            <h2 className="text-h2 font-bold mb-8 text-center">Guides & Downloads</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatedCard>
              <Card variant="default">
                <h3 className="text-h3 font-bold mb-2">EU AI Act Compliance Checklist</h3>
                <p className="text-body text-gray-subtle mb-4">
                  Comprehensive checklist to guide your EU AI Act compliance journey
                </p>
                <Button variant="secondary" size="sm">
                  Download PDF
                </Button>
              </Card>
            </AnimatedCard>
            <AnimatedCard>
              <Card variant="default">
                <h3 className="text-h3 font-bold mb-2">NIST AI RMF Quick Start Guide</h3>
                <p className="text-body text-gray-subtle mb-4">
                  Introduction to the NIST AI Risk Management Framework
                </p>
                <Button variant="secondary" size="sm">
                  Download PDF
                </Button>
              </Card>
            </AnimatedCard>
            <AnimatedCard>
              <Card variant="default">
                <h3 className="text-h3 font-bold mb-2">AI Risk Assessment Template</h3>
                <p className="text-body text-gray-subtle mb-4">
                  Template for conducting AI risk assessments
                </p>
                <Button variant="secondary" size="sm">
                  Download Template
                </Button>
              </Card>
            </AnimatedCard>
            <AnimatedCard>
              <Card variant="default">
                <h3 className="text-h3 font-bold mb-2">ISO 42001 Mapping Guide</h3>
                <p className="text-body text-gray-subtle mb-4">
                  How ProvenAI criteria map to ISO/IEC 42001
                </p>
                <Button variant="secondary" size="sm">
                  Download PDF
                </Button>
              </Card>
            </AnimatedCard>
            <AnimatedCard>
              <Card variant="default">
                <h3 className="text-h3 font-bold mb-2">Vendor Due Diligence Checklist</h3>
                <p className="text-body text-gray-subtle mb-4">
                  For buyers: assess vendor AI compliance
                </p>
                <Button variant="secondary" size="sm">
                  Download PDF
                </Button>
              </Card>
            </AnimatedCard>
            <AnimatedCard>
              <Card variant="default">
                <h3 className="text-h3 font-bold mb-2">AI Governance Best Practices</h3>
                <p className="text-body text-gray-subtle mb-4">
                  Best practices for AI governance and accountability
                </p>
                <Button variant="secondary" size="sm">
                  Download PDF
                </Button>
              </Card>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-primary-black text-primary-white border-t border-gray-medium">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-h2 font-bold mb-4">Ready to Get Certified?</h2>
          <p className="text-body-lg mb-8 opacity-90">
            Use these tools to assess your readiness, then apply for ProvenAI certification
          </p>
          <Link href="/apply">
            <Button variant="secondary" size="lg">
              Apply for Certification
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

