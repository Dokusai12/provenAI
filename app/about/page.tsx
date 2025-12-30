import type { Metadata } from 'next'
import Card from '@/components/ui/Card'
import Link from 'next/link'
import Breadcrumbs from '@/components/ux/Breadcrumbs'
import ScrollReveal from '@/components/animations/ScrollReveal'
import StaggerContainer from '@/components/animations/StaggerContainer'
import AnimatedCard from '@/components/animations/AnimatedCard'
import { DISPLAY_EMAIL, CONTACT_EMAIL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'About ProvenAI | AI Safety & Compliance Assurance',
  description: 'Learn about ProvenAI\'s mission to verify AI safety, compliance, and risk assurance aligned with ISO 42001, NIST AI RMF, and EU AI Act.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-12 bg-primary-white border-b border-gray-medium">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs className="mb-6" />
          <ScrollReveal direction="fade">
            <h1 className="text-h1 font-bold mb-4">About ProvenAI</h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 bg-primary-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="fade">
            <h2 className="text-h2 font-bold mb-6">Our Mission: AI Safety & Compliance Assurance</h2>
            <div className="space-y-4 text-body text-gray-subtle mb-8">
              <p>
                AI is transforming industries, but compliance and safety verification are fragmented. Companies 
                need to demonstrate EU AI Act compliance, proper risk management, and governance maturity, but 
                lack standardized verification processes. Buyers need assurance of AI safety and compliance posture.
              </p>
              <p>
                We created ProvenAI to solve this problem. We verify AI safety, compliance, and risk assurance 
                through comprehensive audits aligned with ISO 42001, NIST AI RMF, and EU AI Act requirements. 
                Our certification helps AI companies demonstrate regulatory compliance and gives buyers confidence 
                in procurement decisions.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <Card>
              <h3 className="text-h3 font-bold mb-4">Affordable Certification for SMBs</h3>
              <p className="text-body text-gray-subtle">
                Unlike expensive enterprise certifications that cost £50,000+, ProvenAI offers affordable 
                certification (£2,500-10,000/year) for SMBs. We believe every legitimate AI company deserves 
                recognition, not just the ones with big budgets.
              </p>
            </Card>
          </ScrollReveal>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="py-12 bg-gray-dark border-t border-gray-medium">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card variant="elevated">
            <h2 className="text-h2 font-bold mb-6 text-primary-white">Why This Matters</h2>
            <div className="space-y-4 text-body text-gray-light">
              <p>
                <strong className="text-primary-white">For Buyers:</strong> Procurement risk from unverified 
                compliance posture. No standardized way to assess AI safety, governance, or EU AI Act compliance 
                before making vendor decisions.
              </p>
              <p>
                <strong className="text-primary-white">For AI Companies:</strong> Difficulty demonstrating 
                compliance and safety maturity. Need to show EU AI Act compliance, proper risk management, 
                and governance to win enterprise deals.
              </p>
              <p>
                <strong className="text-primary-white">For the Industry:</strong> Fragmented compliance landscape 
                slows AI adoption. We need standardized verification aligned with recognized standards to build 
                a trustworthy, compliant AI ecosystem.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-12 bg-primary-white border-t border-gray-medium">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="fade">
            <h2 className="text-h2 font-bold mb-8">Our Approach</h2>
          </ScrollReveal>
          <StaggerContainer staggerDelay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <AnimatedCard revealDirection="up">
                <h3 className="text-h3 font-bold mb-3">Safety & Compliance Verification</h3>
                <p className="text-body text-gray-subtle">
                  We verify AI safety, compliance, and risk management practices by experts who understand 
                  ISO 42001, NIST AI RMF, and EU AI Act requirements. Not just checking boxes—we assess 
                  governance, risk management, and compliance maturity.
                </p>
              </AnimatedCard>
              <AnimatedCard revealDirection="up" revealDelay={0.1}>
                <h3 className="text-h3 font-bold mb-3">Recognized Standards</h3>
                <p className="text-body text-gray-subtle">
                  Our certification criteria are aligned with ISO 42001, NIST AI RMF, and EU AI Act requirements. 
                  Public, transparent standards. See exactly what we verify on our <Link href="/standards" className="underline">Standards page</Link>.
                </p>
              </AnimatedCard>
              <AnimatedCard revealDirection="up" revealDelay={0.2}>
                <h3 className="text-h3 font-bold mb-3">Affordable Pricing</h3>
                <p className="text-body text-gray-subtle">
                  Starting at £2,500/year, our compliance certification is accessible to SMBs. Compare that to 
                  enterprise certifications that cost £50,000+ and exclude most AI companies.
                </p>
              </AnimatedCard>
              <AnimatedCard revealDirection="up" revealDelay={0.3}>
                <h3 className="text-h3 font-bold mb-3">Annual Renewals</h3>
                <p className="text-body text-gray-subtle">
                  Certification isn't a one-time stamp. We review companies annually to ensure they maintain 
                  their safety, compliance, and governance standards in an evolving regulatory landscape.
                </p>
              </AnimatedCard>
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Audit Integrity Section */}
      <section className="py-12 bg-gray-very-light border-t border-gray-medium">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="fade">
            <Card>
              <h2 className="text-h2 font-bold mb-6">Maintaining Objectivity Through Anonymous Audits</h2>
              <div className="space-y-4 text-body text-gray-subtle">
                <p>
                  Our auditing process is designed to ensure complete objectivity and eliminate conflicts of interest. 
                  For this reason, we keep our auditors anonymous—not because we have anything to hide, but because 
                  maintaining distance between auditors and applicants prevents bias and ensures every certification 
                  decision is based solely on technical merit.
                </p>
                <p>
                  <strong className="text-primary-black">Why anonymous auditors?</strong> By keeping auditor identities 
                  confidential, we eliminate any possibility of:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Preferential treatment based on relationships</li>
                  <li>Pressure to approve familiar companies</li>
                  <li>Conflicts of interest from prior business relationships</li>
                  <li>Influence attempts that could compromise standards</li>
                </ul>
                <p>
                  This approach ensures every company is evaluated against the same rigorous technical standards, 
                  regardless of who they know or what relationships they might have. Our commitment to objective 
                  verification is what makes ProvenAI certification credible and trustworthy.
                </p>
              </div>
            </Card>
          </ScrollReveal>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 bg-primary-white border-t border-gray-medium">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card>
            <h2 className="text-h2 font-bold mb-4">Built by Compliance and AI Safety Experts</h2>
            <p className="text-body text-gray-subtle">
              ProvenAI is built by people who understand AI safety, compliance, and risk management. 
              We're backed by industry experts who share our mission to build a trustworthy, compliant AI ecosystem.
            </p>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 bg-gray-dark border-t border-gray-medium">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-h2 font-bold mb-6 text-primary-white">Questions?</h2>
          <div className="space-y-4 text-body text-gray-light">
            <p>
              Email us at{' '}
              <a href={`mailto:${CONTACT_EMAIL}`} className="underline text-primary-white">
                {DISPLAY_EMAIL}
              </a>
            </p>
            <p>
              Follow us on{' '}
              <a
                href="https://linkedin.com/company/provenai"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-primary-white"
              >
                LinkedIn
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

