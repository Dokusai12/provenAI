'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import ProvenAIBadge from '@/components/ProvenAIBadge'
import BuildingIcon from '@/components/icons/BuildingIcon'
import CodeIcon from '@/components/icons/CodeIcon'
import HandshakeIcon from '@/components/icons/HandshakeIcon'
import GearIcon from '@/components/icons/GearIcon'
import ShieldCheckIcon from '@/components/icons/ShieldCheckIcon'
import EyeIcon from '@/components/icons/EyeIcon'
import CheckCircleIcon from '@/components/icons/CheckCircleIcon'
import FileIcon from '@/components/icons/FileIcon'
import BriefcaseIcon from '@/components/icons/BriefcaseIcon'
import FAQ from '@/components/FAQ'
import ScrollReveal from '@/components/animations/ScrollReveal'
import StaggerContainer from '@/components/animations/StaggerContainer'
import AnimatedCard from '@/components/animations/AnimatedCard'
import AnimatedButton from '@/components/animations/AnimatedButton'
import AnimatedIcon from '@/components/animations/AnimatedIcon'
import TextReveal from '@/components/animations/TextReveal'
import PricingSection from '@/components/ux/PricingSection'
import HowItWorks from '@/components/ux/HowItWorks'
import ComparisonTable from '@/components/ux/ComparisonTable'
import FloatingCTA from '@/components/animations/FloatingCTA'
import BackToTop from '@/components/ux/BackToTop'
import Tooltip from '@/components/ux/Tooltip'
import ProgressIndicator from '@/components/animations/ProgressIndicator'
import Breadcrumbs from '@/components/ux/Breadcrumbs'
import EarlyAdopterModal from '@/components/ux/EarlyAdopterModal'
import StickyCTABar from '@/components/engagement/StickyCTABar'
import PreScreeningQuiz from '@/components/tools/PreScreeningQuiz'
import ComplianceGapAnalysis from '@/components/tools/ComplianceGapAnalysis'
import ROICalculator from '@/components/tools/ROICalculator'
import StandardsMapper from '@/components/tools/StandardsMapper'
import AnimatedCounter from '@/components/animations/AnimatedCounter'
import BeforeAfterScenarios from '@/components/widgets/BeforeAfterScenarios'
import CertificationDemo from '@/components/widgets/CertificationDemo'
import Badge from '@/components/ui/Badge'

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center grid-background pt-16 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <ScrollReveal direction="fade" delay={0.1}>
            <div className="flex justify-center mb-4">
              <Image
                src="/logo.svg"
                alt="ProvenAI"
                width={400}
                height={218}
                className="h-auto w-auto max-w-[400px]"
                priority
              />
            </div>
          </ScrollReveal>
          <ScrollReveal direction="fade" delay={0.3}>
            <TextReveal
              text="AI Safety & Compliance Certification"
              mode="word"
              delay={0.4}
              as="h1"
              className="text-h1 font-bold mb-6 tracking-tight leading-tight block"
            />
          </ScrollReveal>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <div className="mb-6">
              <p className="text-body-lg text-gray-dark max-w-2xl mx-auto leading-relaxed font-medium">
                Verify AI claims, ensure safety, demonstrate compliance. Built for the EU AI Act era.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <p className="text-body-lg text-gray-dark mb-6 max-w-2xl mx-auto leading-relaxed">
              Get certified to demonstrate EU AI Act compliance. Aligned with ISO 42001 and NIST AI RMF. Starting at £2,500/year.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.6 }}
            className="mb-10"
          >
            <div className="flex flex-wrap items-center justify-center gap-3 max-w-2xl mx-auto">
              <Badge variant="default" size="md" className="flex items-center gap-2">
                <ShieldCheckIcon className="w-5 h-5" />
                <span>Anonymous Auditors</span>
              </Badge>
              <Badge variant="default" size="md" className="flex items-center gap-2">
                <EyeIcon className="w-5 h-5" />
                <span>Public Standards</span>
              </Badge>
              <Badge variant="default" size="md" className="flex items-center gap-2">
                <CheckCircleIcon className="w-5 h-5" />
                <span>Expert Review</span>
              </Badge>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/apply">
                <AnimatedButton variant="primary" size="lg">
                  Get Certified
                </AnimatedButton>
              </Link>
              <Link href="/directory">
                <AnimatedButton variant="secondary" size="lg">
                  View Directory
                </AnimatedButton>
              </Link>
              <Link href="/resources#prescreening">
                <AnimatedButton variant="secondary" size="lg">
                  Assess Compliance
                </AnimatedButton>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-20 bg-gray-very-light border-t border-gray-medium">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <ScrollReveal direction="left">
              <h2 className="text-h2 text-left mb-6 font-bold tracking-tight">
                AI Is Everywhere. Trust & Compliance Aren't.
              </h2>
              <div className="w-16 h-1 bg-primary-black mx-auto mb-6"></div>
            </ScrollReveal>
            <ScrollReveal direction="fade" delay={0.2}>
              <p className="text-body text-gray-dark text-left mb-8 max-w-3xl leading-relaxed">
                Companies are deploying AI systems with unverified claims, insufficient safety controls, and unclear compliance posture. The EU AI Act is now in effect with mandatory requirements, but there's no standardized way to verify AI safety, governance, and regulatory compliance.
              </p>
            </ScrollReveal>
          </div>
          <StaggerContainer staggerDelay={0.15}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <AnimatedCard variant="minimal" revealDirection="up" enable3DTilt>
                <div className="mb-6">
                  <AnimatedIcon animation="rotate">
                    <div className="w-16 h-16 rounded-full bg-gray-very-light-alt flex items-center justify-center border border-gray-medium">
                      <svg
                        className="w-8 h-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 8h10M7 12h10m-7 4h7"
                        />
                      </svg>
                    </div>
                  </AnimatedIcon>
                </div>
                <h3 className="text-h3 font-bold mb-4">Unverified Claims</h3>
                <p className="text-body text-gray-dark leading-relaxed">
                  Companies exaggerate AI capabilities with no accountability. Marketing claims don't match technical reality, creating procurement risk for buyers.
                </p>
              </AnimatedCard>

              <AnimatedCard variant="minimal" revealDirection="up" revealDelay={0.15} enable3DTilt>
                <div className="mb-6">
                  <AnimatedIcon animation="rotate">
                    <div className="w-16 h-16 rounded-full bg-gray-very-light-alt flex items-center justify-center border border-gray-medium">
                      <svg
                        className="w-8 h-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                    </div>
                  </AnimatedIcon>
                </div>
                <h3 className="text-h3 font-bold mb-4">Compliance Risk</h3>
                <p className="text-body text-gray-dark leading-relaxed">
                  The EU AI Act is now in effect with mandatory requirements for AI systems. Companies must demonstrate compliance, but lack standardized verification processes.
                </p>
              </AnimatedCard>

              <AnimatedCard variant="minimal" revealDirection="up" revealDelay={0.3} enable3DTilt>
                <div className="mb-6">
                  <AnimatedIcon animation="rotate">
                    <div className="w-16 h-16 rounded-full bg-gray-very-light-alt flex items-center justify-center border border-gray-medium">
                      <svg
                        className="w-8 h-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                        />
                      </svg>
                    </div>
                  </AnimatedIcon>
                </div>
                <h3 className="text-h3 font-bold mb-4">Safety Concerns</h3>
                <p className="text-body text-gray-dark leading-relaxed">
                  No verification of data handling, model monitoring, or risk management practices. Buyers can't assess AI safety posture or governance maturity.
                </p>
              </AnimatedCard>
            </div>
          </StaggerContainer>
          <ScrollReveal direction="up" delay={0.5}>
            <div className="mt-12 text-center">
              <div className="max-w-3xl mx-auto mb-8">
                <h3 className="text-h3 font-bold mb-4">Assess Your Compliance Status</h3>
                <p className="text-body text-gray-subtle mb-6">
                  Use our free gap analysis tool to identify areas where you need to strengthen your compliance posture.
                </p>
                <ComplianceGapAnalysis />
              </div>
              <Link href="/apply">
                <AnimatedButton variant="primary" size="lg">
                  Get Certified for Compliance
                </AnimatedButton>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Trust & Transparency Section */}
      <section className="py-20 bg-primary-white border-t border-gray-medium">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="fade">
            <div className="text-center mb-12">
              <h2 className="text-h2 font-bold mb-6">Rigorous Verification You Can Trust</h2>
              <div className="w-16 h-1 bg-primary-black mx-auto mb-6"></div>
              <p className="text-body-lg text-gray-dark max-w-3xl mx-auto mb-4">
                Our certification process is built on transparency and objectivity. Here's how we ensure every audit is credible:
              </p>
            </div>
          </ScrollReveal>
          <StaggerContainer staggerDelay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <AnimatedCard revealDirection="up">
                <div className="mb-4">
                  <ShieldCheckIcon className="w-8 h-8 text-primary-black" />
                </div>
                <h3 className="text-h3 font-bold mb-3">Anonymous Auditors</h3>
                <p className="text-body text-gray-subtle">
                  Auditors remain anonymous to maintain objectivity—no conflicts of interest, no preferential treatment. 
                  Every company is evaluated solely on technical merit against our published standards.
                </p>
              </AnimatedCard>
              <AnimatedCard revealDirection="up" revealDelay={0.1}>
                <div className="mb-4">
                  <FileIcon className="w-8 h-8 text-primary-black" />
                </div>
                <h3 className="text-h3 font-bold mb-3">Public Standards</h3>
                <p className="text-body text-gray-subtle">
                  Our certification criteria are fully transparent and publicly available. No hidden requirements, 
                  no opaque processes. See exactly what we verify on our Standards page.
                </p>
              </AnimatedCard>
              <AnimatedCard revealDirection="up" revealDelay={0.2}>
                <div className="mb-4">
                  <CheckCircleIcon className="w-8 h-8 text-primary-black" />
                </div>
                <h3 className="text-h3 font-bold mb-3">Expert Review</h3>
                <p className="text-body text-gray-subtle">
                  Every application is reviewed by AI experts who actually understand the technology. Not just 
                  checking boxes—we dive into code, models, and implementations.
                </p>
              </AnimatedCard>
            </div>
          </StaggerContainer>
          <ScrollReveal direction="fade" delay={0.4}>
            <Card variant="minimal" className="max-w-3xl mx-auto">
              <p className="text-body text-gray-dark text-center">
                <strong>We keep auditors anonymous to maintain objectivity—no conflicts of interest in audits.</strong> 
                This ensures every certification decision is based solely on technical merit, not relationships or 
                business connections. Transparency in standards, objectivity in execution.
              </p>
            </Card>
          </ScrollReveal>
        </div>
      </section>

      {/* What We Verify Section */}
      <section className="py-20 bg-gray-very-light border-t border-gray-medium">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="fade">
            <div className="text-center mb-12">
              <h2 className="text-h2 font-bold mb-6">We Verify AI Safety, Claims & Compliance</h2>
              <div className="w-16 h-1 bg-primary-black mx-auto mb-6"></div>
              <p className="text-body-lg text-gray-dark max-w-3xl mx-auto mb-4">
                Our certification covers six critical pillars of AI safety, compliance, and risk management.
              </p>
            </div>
          </ScrollReveal>
          <StaggerContainer staggerDelay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatedCard revealDirection="up">
                <div className="mb-4">
                  <EyeIcon className="w-8 h-8 text-primary-black" />
                </div>
                <h3 className="text-h3 font-bold mb-3">Truth-in-Marketing</h3>
                <p className="text-body text-gray-subtle">
                  Claims match actual capabilities and technical reality. Marketing statements are verified against implementation evidence.
                </p>
              </AnimatedCard>
              <AnimatedCard revealDirection="up" revealDelay={0.1}>
                <div className="mb-4">
                  <ShieldCheckIcon className="w-8 h-8 text-primary-black" />
                </div>
                <h3 className="text-h3 font-bold mb-3">Data Handling & Privacy</h3>
                <p className="text-body text-gray-subtle">
                  Secure data practices, privacy compliance, and customer data protection. Verification of data governance and handling procedures.
                </p>
              </AnimatedCard>
              <AnimatedCard revealDirection="up" revealDelay={0.2}>
                <div className="mb-4">
                  <GearIcon className="w-8 h-8 text-primary-black" />
                </div>
                <h3 className="text-h3 font-bold mb-3">Model Monitoring & Evaluation</h3>
                <p className="text-body text-gray-subtle">
                  Error handling, performance tracking, and quality assurance. Evidence of ongoing monitoring and evaluation processes.
                </p>
              </AnimatedCard>
              <AnimatedCard revealDirection="up" revealDelay={0.3}>
                <div className="mb-4">
                  <CheckCircleIcon className="w-8 h-8 text-primary-black" />
                </div>
                <h3 className="text-h3 font-bold mb-3">Security Posture</h3>
                <p className="text-body text-gray-subtle">
                  Basic security controls, access management, and vulnerability handling. Assessment of security practices and safeguards.
                </p>
              </AnimatedCard>
              <AnimatedCard revealDirection="up" revealDelay={0.4}>
                <div className="mb-4">
                  <BriefcaseIcon className="w-8 h-8 text-primary-black" />
                </div>
                <h3 className="text-h3 font-bold mb-3">Risk Management</h3>
                <p className="text-body text-gray-subtle">
                  Aligned with NIST AI Risk Management Framework and ISO 42001 principles. Structured risk assessment and mitigation processes.
                </p>
              </AnimatedCard>
              <AnimatedCard revealDirection="up" revealDelay={0.5}>
                <div className="mb-4">
                  <FileIcon className="w-8 h-8 text-primary-black" />
                </div>
                <h3 className="text-h3 font-bold mb-3">Governance & Accountability</h3>
                <p className="text-body text-gray-subtle">
                  Incident response, human oversight, and rollback procedures. Evidence of governance structures and accountability mechanisms.
                </p>
              </AnimatedCard>
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Standards Alignment Section */}
      <section className="py-20 bg-primary-white border-t border-gray-medium">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="fade">
            <div className="text-center mb-12">
              <h2 className="text-h2 font-bold mb-6">Built on Recognized Standards</h2>
              <div className="w-16 h-1 bg-primary-black mx-auto mb-6"></div>
              <p className="text-body-lg text-gray-dark max-w-3xl mx-auto mb-4">
                ProvenAI certification is aligned with internationally recognized standards and frameworks.
              </p>
              <div className="flex items-center justify-center gap-8 mt-8">
                <div className="text-center">
                  <AnimatedCounter value={3} className="text-4xl font-bold text-primary-black" />
                  <p className="text-body text-gray-subtle mt-2">Standards Aligned</p>
                </div>
                <div className="text-center">
                  <AnimatedCounter value={6} className="text-4xl font-bold text-primary-black" />
                  <p className="text-body text-gray-subtle mt-2">Certification Criteria</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
          <StaggerContainer staggerDelay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <AnimatedCard revealDirection="up">
                <div className="mb-4">
                  <FileIcon className="w-8 h-8 text-primary-black" />
                </div>
                <h3 className="text-h3 font-bold mb-3">ISO/IEC 42001</h3>
                <p className="text-body text-gray-subtle">
                  AI Management System standard. Certification criteria mapped to ISO 42001 requirements for AI governance.
                </p>
              </AnimatedCard>
              <AnimatedCard revealDirection="up" revealDelay={0.1}>
                <div className="mb-4">
                  <ShieldCheckIcon className="w-8 h-8 text-primary-black" />
                </div>
                <h3 className="text-h3 font-bold mb-3">NIST AI RMF</h3>
                <p className="text-body text-gray-subtle">
                  Aligned with NIST AI Risk Management Framework. Structured approach to identifying, measuring, and managing AI risks.
                </p>
              </AnimatedCard>
              <AnimatedCard revealDirection="up" revealDelay={0.2}>
                <div className="mb-4">
                  <CheckCircleIcon className="w-8 h-8 text-primary-black" />
                </div>
                <h3 className="text-h3 font-bold mb-3">EU AI Act</h3>
                <p className="text-body text-gray-subtle">
                  Compliance with EU AI Act requirements. Verification of risk categorization, governance, and safety measures.
                </p>
              </AnimatedCard>
              <AnimatedCard revealDirection="up" revealDelay={0.3}>
                <div className="mb-4">
                  <EyeIcon className="w-8 h-8 text-primary-black" />
                </div>
                <h3 className="text-h3 font-bold mb-3">Transparent Criteria</h3>
                <p className="text-body text-gray-subtle">
                  All certification criteria are publicly available. Measurable, objective standards with no hidden requirements.
                </p>
              </AnimatedCard>
            </div>
          </StaggerContainer>
          <ScrollReveal direction="fade" delay={0.4}>
            <div className="mt-12">
              <div className="text-center mb-6">
                <h3 className="text-h3 font-bold mb-2">See How Our Criteria Map to Standards</h3>
                <p className="text-body text-gray-subtle">
                  Explore the interactive standards mapping tool
                </p>
              </div>
              <StandardsMapper />
              <div className="text-center mt-6">
                <Link href="/resources">
                  <Button variant="secondary">
                    View All Tools & Resources
                  </Button>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* How It Works Section */}
      <HowItWorks />

      {/* The Solution Section */}
      <section className="py-20 bg-gray-dark border-t border-gray-medium">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="fade">
            <div className="text-center mb-16">
              <h2 className="text-h2 mb-6 font-bold text-primary-white tracking-tight">
                We Verify. You Trust.
              </h2>
              <div className="w-16 h-1 bg-primary-white mx-auto mb-8"></div>
              <p className="text-body-lg text-gray-light text-center mb-12 max-w-3xl mx-auto leading-relaxed">
                ProvenAI provides rigorous safety and compliance verification to certify AI companies. Our transparent process ensures only companies with verified safety, compliance, and governance practices receive certification.
              </p>
            </div>
          </ScrollReveal>
          <StaggerContainer staggerDelay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <AnimatedCard variant="elevated" className="relative" revealDirection="up">
                <motion.div
                  className="absolute -top-4 md:-top-6 -left-4 md:-left-6 w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary-white border-4 border-gray-dark flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <span className="text-h3 md:text-h2 font-bold text-primary-black">1</span>
                </motion.div>
                <div className="pt-6 md:pt-8">
                  <h3 className="text-h3 font-bold mb-4 text-primary-white">Apply</h3>
                  <p className="text-body text-gray-light leading-relaxed">
                    Companies submit credentials and documentation demonstrating their safety, compliance, and governance practices.
                  </p>
                </div>
              </AnimatedCard>

              <AnimatedCard variant="elevated" className="relative" revealDirection="up" revealDelay={0.2}>
                <motion.div
                  className="absolute -top-4 md:-top-6 -left-4 md:-left-6 w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary-white border-4 border-gray-dark flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <span className="text-h3 md:text-h2 font-bold text-primary-black">2</span>
                </motion.div>
                <div className="pt-6 md:pt-8">
                  <h3 className="text-h3 font-bold mb-4 text-primary-white">Verify</h3>
                  <p className="text-body text-gray-light leading-relaxed">
                    We audit safety practices, review compliance posture, assess risk management, and verify that claims match technical and governance reality.
                  </p>
                </div>
              </AnimatedCard>

              <AnimatedCard variant="elevated" className="relative" revealDirection="up" revealDelay={0.4}>
                <motion.div
                  className="absolute -top-4 md:-top-6 -left-4 md:-left-6 w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary-white border-4 border-gray-dark flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <span className="text-h3 md:text-h2 font-bold text-primary-black">3</span>
                </motion.div>
                <div className="pt-6 md:pt-8">
                  <h3 className="text-h3 font-bold mb-4 text-primary-white">Certified</h3>
                  <p className="text-body text-gray-light leading-relaxed">
                    Companies with verified safety and compliance practices receive the ProvenAI seal and get listed in our verified directory.
                  </p>
                </div>
              </AnimatedCard>
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Who Gets Certified Section */}
      <section className="py-20 bg-primary-white border-t border-gray-medium">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="fade">
            <h2 className="text-h2 text-center mb-12 font-bold text-gray-dark">
              Who We Certify
            </h2>
          </ScrollReveal>
          <StaggerContainer staggerDelay={0.15}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
              {[
                { 
                  name: 'AI Agencies', 
                  description: 'Marketing and consulting agencies offering AI services',
                  Icon: BuildingIcon,
                  featured: false,
                  animation: 'bounce' as const
                },
                { 
                  name: 'AI SaaS Products', 
                  description: 'Software products built with AI technology',
                  Icon: CodeIcon,
                  featured: true,
                  animation: 'bounce' as const
                },
                { 
                  name: 'AI Consultancies', 
                  description: 'Consulting firms specializing in AI implementation',
                  Icon: HandshakeIcon,
                  featured: false,
                  animation: 'bounce' as const
                },
                { 
                  name: 'AI Service Providers', 
                  description: 'Companies providing AI-powered services',
                  Icon: GearIcon,
                  featured: false,
                  animation: 'bounce' as const
                },
              ].map((item, index) => (
                <div key={item.name} className="flex">
                  <AnimatedCard
                    variant="default"
                    className="text-center w-full flex flex-col min-h-[250px]"
                    revealDirection="up"
                    revealDelay={index * 0.15}
                    enable3DTilt
                  >
                    <div className="flex justify-center mb-6">
                      <AnimatedIcon animation={item.animation}>
                        <div className="w-16 h-16 rounded-full bg-gray-very-light flex items-center justify-center border border-gray-medium">
                          <item.Icon className="w-8 h-8" />
                        </div>
                      </AnimatedIcon>
                    </div>
                    <h3 className="text-h3 font-bold mb-3">{item.name}</h3>
                    <p className="text-small text-gray-dark leading-relaxed flex-grow">{item.description}</p>
                  </AnimatedCard>
                </div>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Certification Benefits Section */}
      <section className="py-20 bg-gray-very-light border-t border-gray-medium">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="fade">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* For AI Companies */}
              <AnimatedCard variant="minimal" className="h-full" revealDirection="left">
                <h3 className="text-h2 font-bold mb-8 text-left">For AI Companies</h3>
                <div className="w-16 h-1 bg-primary-black mx-auto mb-6"></div>
                <ul className="space-y-6">
                  {[
                    { 
                      title: 'Demonstrate EU AI Act Compliance',
                      description: 'Show compliance with EU AI Act requirements and verify regulatory adherence'
                    },
                    { 
                      title: 'Stand Out with Verified Safety & Compliance',
                      description: 'Differentiate your AI business with verified safety, compliance, and risk management practices'
                    },
                    { 
                      title: 'Reduce Customer Due Diligence Burden',
                      description: 'Provide customers with pre-verified compliance posture, streamlining procurement processes'
                    },
                    { 
                      title: 'Prove Claims Are Accurate and Verifiable',
                      description: 'Demonstrate that marketing claims match technical capabilities through independent verification'
                    },
                    { 
                      title: 'Show Proper Risk Management & Governance',
                      description: 'Evidence of structured risk management, governance frameworks, and accountability mechanisms'
                    },
                  ].map((benefit, index) => (
                    <motion.li
                      key={benefit.title}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <motion.span
                        className="text-2xl mr-4 flex-shrink-0 text-primary-black"
                        aria-hidden="true"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.2, type: 'spring' }}
                      >
                        ✓
                      </motion.span>
                      <div>
                        <span className="text-body font-bold block mb-2 text-gray-dark">{benefit.title}</span>
                        <span className="text-small text-gray-dark leading-relaxed">{benefit.description}</span>
                      </div>
                    </motion.li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Link href="/apply">
                    <AnimatedButton variant="primary" size="md">
                      Apply for Certification
                    </AnimatedButton>
                  </Link>
                </div>
              </AnimatedCard>

              {/* For Buyers */}
              <AnimatedCard variant="minimal" className="h-full" revealDirection="right">
                <h3 className="text-h2 font-bold mb-8 text-left">For Buyers</h3>
                <div className="w-16 h-1 bg-primary-black mx-auto mb-6"></div>
                <ul className="space-y-6">
                  {[
                    { 
                      title: 'Verify AI Safety & Compliance Posture',
                      description: 'Assess AI safety, compliance, and risk management practices before procurement decisions'
                    },
                    { 
                      title: 'Reduce Procurement Risk',
                      description: 'Minimize risk by choosing vendors with verified compliance and safety practices'
                    },
                    { 
                      title: 'Trust Verified Claims and Capabilities',
                      description: 'Know that marketing claims are independently verified against technical reality'
                    },
                    { 
                      title: 'Ensure Data Handling Meets Standards',
                      description: 'Verify that data handling, privacy, and security practices meet compliance requirements'
                    },
                    { 
                      title: 'Streamline Vendor Due Diligence',
                      description: 'Access pre-verified compliance information, reducing time spent on vendor assessments'
                    },
                  ].map((benefit, index) => (
                    <motion.li
                      key={benefit.title}
                      className="flex items-start"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <motion.span
                        className="text-2xl mr-4 flex-shrink-0 text-primary-black"
                        aria-hidden="true"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.2, type: 'spring' }}
                      >
                        ✓
                      </motion.span>
                      <div>
                        <span className="text-body font-bold block mb-2 text-gray-dark">{benefit.title}</span>
                        <span className="text-small text-gray-dark leading-relaxed">{benefit.description}</span>
                      </div>
                    </motion.li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Link href="/directory">
                    <AnimatedButton variant="secondary" size="md">
                      Browse Directory
                    </AnimatedButton>
                  </Link>
                </div>
              </AnimatedCard>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Before/After Scenarios */}
      <section className="py-20 bg-primary-white border-t border-gray-medium">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="fade">
            <div className="text-center mb-12">
              <h2 className="text-h2 font-bold mb-6">The Impact of Certification</h2>
              <div className="w-16 h-1 bg-primary-black mx-auto mb-6"></div>
              <p className="text-body-lg text-gray-dark max-w-3xl mx-auto">
                See how ProvenAI certification transforms your business operations
              </p>
            </div>
          </ScrollReveal>
          <BeforeAfterScenarios />
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-20 bg-gray-very-light border-t border-gray-medium">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="fade">
            <h2 className="text-h2 text-center mb-6 font-bold">Certified vs Non-Certified</h2>
            <div className="w-16 h-1 bg-primary-black mx-auto mb-6"></div>
          </ScrollReveal>
          <ComparisonTable />
        </div>
      </section>

      {/* Pricing Section */}
      <div id="pricing">
        <PricingSection />
      </div>

      {/* ROI Calculator Section */}
      <section className="py-20 bg-gray-very-light border-t border-gray-medium">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="fade">
            <div className="text-center mb-8">
              <h3 className="text-h2 font-bold mb-2">Calculate Your ROI</h3>
              <p className="text-body text-gray-subtle max-w-2xl mx-auto">
                Estimate potential savings and time saved with ProvenAI certification
              </p>
            </div>
            <ROICalculator />
          </ScrollReveal>
        </div>
      </section>

      {/* Why Choose ProvenAI Section */}
      <section className="py-20 bg-gray-very-light border-t border-gray-medium">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="fade">
            <h2 className="text-h2 text-center mb-6 font-bold">Why Choose ProvenAI</h2>
            <div className="w-16 h-1 bg-primary-black mx-auto mb-6"></div>
          </ScrollReveal>
          <StaggerContainer staggerDelay={0.15}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: 'Affordable Pricing',
                  description: 'Starting at £2,500/year for SMBs—affordable compliance certification compared to £50,000+ enterprise programs',
                },
                {
                  title: 'Safety & Compliance Verification',
                  description: 'Audited by compliance and safety experts who understand AI risk management, governance, and regulatory requirements',
                },
                {
                  title: 'Transparent Standards',
                  description: 'Public criteria aligned with ISO 42001, NIST AI RMF, and EU AI Act—no hidden requirements',
                },
                {
                  title: 'Annual Renewals',
                  description: 'Ongoing compliance monitoring ensures certified companies maintain safety, governance, and regulatory compliance',
                },
              ].map((item, index) => (
                <AnimatedCard
                  key={item.title}
                  variant="minimal"
                  revealDirection="up"
                  revealDelay={index * 0.15}
                >
                  <h3 className="text-h3 font-bold mb-4">{item.title}</h3>
                  <p className="text-body text-gray-dark leading-relaxed">{item.description}</p>
                </AnimatedCard>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Certification Demo Section */}
      <section className="py-20 bg-primary-white border-t border-gray-medium">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="fade">
            <div className="text-center mb-12">
              <h2 className="text-h2 font-bold mb-6">See Certification in Action</h2>
              <div className="w-16 h-1 bg-primary-black mx-auto mb-6"></div>
              <p className="text-body-lg text-gray-dark max-w-3xl mx-auto">
                Preview what you'll receive as a ProvenAI certified company
              </p>
            </div>
          </ScrollReveal>
          <CertificationDemo />
        </div>
      </section>

      {/* Quick Facts Section */}
      <section className="py-20 bg-primary-white border-t border-gray-medium">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="fade">
            <h2 className="text-h2 text-center mb-12 font-bold">Quick Facts</h2>
          </ScrollReveal>
          <StaggerContainer staggerDelay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { number: '£2,500', label: 'Starting Price', description: 'Most affordable certification for SMBs' },
                { number: '5-7', label: 'Business Days', description: 'Typical review time for applications' },
                { number: '5/6', label: 'Criteria Required', description: 'Must meet 5 out of 6 certification criteria' },
              ].map((fact, index) => (
                <AnimatedCard
                  key={fact.label}
                  variant="minimal"
                  className="text-center"
                  revealDirection="up"
                  revealDelay={index * 0.1}
                >
                  <motion.div
                    className="text-h1 font-bold mb-4 text-primary-black"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3, type: 'spring', stiffness: 200 }}
                  >
                    {fact.number}
                  </motion.div>
                  <h3 className="text-h3 font-bold mb-2">{fact.label}</h3>
                  <p className="text-small text-gray-dark">{fact.description}</p>
                </AnimatedCard>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Before/After Comparison */}
      <section className="py-20 bg-gray-very-light border-t border-gray-medium">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="fade">
            <h2 className="text-h2 text-center mb-6 font-bold">Before & After Certification</h2>
            <div className="w-16 h-1 bg-primary-black mx-auto mb-6"></div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedCard variant="minimal" revealDirection="right">
              <h3 className="text-h3 font-bold mb-6 text-gray-subtle">Before Certification</h3>
              <ul className="space-y-4">
                {[
                  'Unverified compliance posture',
                  'No way to demonstrate EU AI Act compliance',
                  'Procurement risk concerns from buyers',
                  'Limited evidence of safety and governance',
                ].map((item) => (
                  <li key={item} className="flex items-start">
                    <span className="text-xl mr-3 text-gray-subtle">✗</span>
                    <span className="text-body text-gray-dark">{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedCard>
            <AnimatedCard variant="featured" revealDirection="left">
              <h3 className="text-h3 font-bold mb-6 text-primary-black">After Certification</h3>
              <ul className="space-y-4">
                {[
                  'Stand out with verified ProvenAI compliance badge',
                  'Demonstrated EU AI Act compliance',
                  'Reduced buyer procurement risk',
                  'Verified safety, compliance, and governance',
                ].map((item) => (
                  <li key={item} className="flex items-start">
                    <span className="text-xl mr-3 text-primary-black">✓</span>
                    <span className="text-body text-gray-dark font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* FAQ Preview Section */}
      <section className="py-20 bg-primary-white border-t border-gray-medium">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="fade">
            <div className="text-center mb-8">
              <h2 className="text-h2 text-center mb-6 font-bold">Common Questions</h2>
              <div className="w-16 h-1 bg-primary-black mx-auto mb-6"></div>
              <p className="text-body text-gray-dark mb-8">
                Here are the most frequently asked questions. <Link href="#faq" className="underline">View all FAQs →</Link>
              </p>
            </div>
          </ScrollReveal>
          <StaggerContainer staggerDelay={0.1}>
            <div className="space-y-4 mb-8">
              {[
                {
                  question: 'What makes ProvenAI different from other certifications?',
                  answer: 'ProvenAI focuses specifically on AI safety, compliance, and risk assurance. We verify compliance with recognized standards (ISO 42001, NIST AI RMF, EU AI Act), assess safety and governance practices, and offer affordable pricing for SMBs starting at £2,500/year—unlike enterprise certifications that cost £50,000+. Our certification helps companies demonstrate EU AI Act compliance and reduce procurement risk.',
                },
                {
                  question: 'What standards does ProvenAI align with?',
                  answer: 'ProvenAI certification is aligned with ISO/IEC 42001 (AI Management System), the NIST AI Risk Management Framework, and EU AI Act compliance requirements. Our certification criteria map to these recognized standards, ensuring verified companies demonstrate proper AI governance, risk management, and regulatory compliance.',
                },
                {
                  question: 'Why are your auditors anonymous?',
                  answer: 'We keep auditors anonymous to maintain complete objectivity and eliminate conflicts of interest. This ensures every certification decision is based solely on compliance and safety merit against our published standards, not relationships, business connections, or external pressure. This commitment to objective verification is what makes ProvenAI certification credible and trustworthy.',
                },
                {
                  question: 'Can startups or small companies get certified?',
                  answer: 'Absolutely. ProvenAI is designed specifically for SMBs, including startups. As long as you meet our criteria—including proper safety, compliance, and governance practices—you can be certified regardless of company size. Compliance status matters more than company size.',
                },
              ].map((item, index) => (
                <Card key={index} variant="minimal">
                  <h3 className="text-h3 font-bold mb-2">{item.question}</h3>
                  <p className="text-body text-gray-dark">{item.answer}</p>
                </Card>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Full FAQ Section */}
      <section id="faq" className="py-20 bg-gray-very-light border-t border-gray-medium">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="fade">
            <div className="text-center mb-12">
              <h2 className="text-h2 text-center mb-6 font-bold">Frequently Asked Questions</h2>
              <div className="w-16 h-1 bg-primary-black mx-auto"></div>
            </div>
          </ScrollReveal>
          <StaggerContainer staggerDelay={0.1}>
            <FAQ
            items={[
              {
                question: 'What makes ProvenAI different from other certifications?',
                answer: 'ProvenAI focuses specifically on AI safety, compliance, and risk assurance. We verify compliance with recognized standards (ISO 42001, NIST AI RMF, EU AI Act), assess safety and governance practices, and offer affordable pricing for SMBs starting at £2,500/year—unlike enterprise certifications that cost £50,000+. Our certification helps companies demonstrate EU AI Act compliance and reduce procurement risk.',
              },
              {
                question: 'What standards does ProvenAI align with?',
                answer: 'ProvenAI certification is aligned with ISO/IEC 42001 (AI Management System), the NIST AI Risk Management Framework, and EU AI Act compliance requirements. Our certification criteria map to these recognized standards, ensuring verified companies demonstrate proper AI governance, risk management, and regulatory compliance.',
              },
              {
                question: 'Why are your auditors anonymous?',
                answer: 'We keep auditors anonymous to maintain complete objectivity and eliminate conflicts of interest. This ensures every certification decision is based solely on compliance and safety merit against our published standards, not relationships, business connections, or external pressure. This commitment to objective verification is what makes ProvenAI certification credible and trustworthy.',
              },
              {
                question: 'How long does certification take?',
                answer: 'The application process typically takes 5-7 business days after you submit all required documentation and complete the verification call. This includes our review of your safety, compliance, governance practices, and risk management documentation.',
              },
              {
                question: 'What if my company doesn\'t pass certification?',
                answer: 'If your company doesn\'t meet the criteria, we provide detailed feedback on what needs improvement. You can reapply once you\'ve addressed the feedback. We\'re transparent about our standards so you know exactly what we\'re looking for in terms of safety, compliance, and governance.',
              },
              {
                question: 'Do I need to renew my certification?',
                answer: 'Yes, certification is valid for one year and requires annual renewal. This ensures certified companies maintain their safety, compliance, and governance standards. Ongoing monitoring ensures continued regulatory compliance and risk management maturity.',
              },
              {
                question: 'What documentation do I need to provide?',
                answer: 'You\'ll need to provide company information, safety and compliance documentation, risk management frameworks, governance policies, data handling procedures, and evidence of monitoring and evaluation processes. See our Standards page for detailed requirements.',
              },
              {
                question: 'Can startups or small companies get certified?',
                answer: 'Absolutely. ProvenAI is designed specifically for SMBs, including startups. As long as you meet our criteria—including proper safety, compliance, and governance practices—you can be certified regardless of company size. Compliance readiness matters more than company size.',
              },
            ]}
            />
          </StaggerContainer>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 bg-primary-white border-t border-gray-medium">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="fade">
            <h2 className="text-h2 text-center mb-12 font-bold">Trust & Transparency</h2>
          </ScrollReveal>
          <StaggerContainer staggerDelay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'Transparent Process', description: 'All certification criteria are publicly available' },
                { title: 'Secure & Private', description: 'Your data is protected and never shared' },
                { title: 'Expert Verification', description: 'Reviewed by AI practitioners, not just administrators' },
              ].map((item, index) => (
                <AnimatedCard
                  key={item.title}
                  variant="minimal"
                  className="text-center"
                  revealDirection="up"
                  revealDelay={index * 0.1}
                >
                  <h3 className="text-h3 font-bold mb-3">{item.title}</h3>
                  <p className="text-small text-gray-dark">{item.description}</p>
                </AnimatedCard>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary-black text-primary-white border-t border-gray-medium">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal direction="fade">
            <TextReveal
              text="Ready to Get Certified?"
              mode="word"
              delay={0.2}
              as="h2"
              className="text-h2 font-bold mb-8 tracking-tight block"
            />
            <div className="w-16 h-1 bg-primary-white mx-auto mb-8"></div>
            <p className="text-body-lg text-gray-light mb-12 leading-relaxed">
              Join verified AI companies and build trust with your customers.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/apply">
                <AnimatedButton variant="secondary" size="lg" className="bg-primary-white text-primary-black hover:bg-gray-light border-primary-white">
                  Apply Now
                </AnimatedButton>
              </Link>
              <Link href="/standards">
                <AnimatedButton variant="secondary" size="lg" className="border-primary-white text-primary-white hover:bg-gray-dark">
                  View Standards
                </AnimatedButton>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Floating CTA and Back to Top */}
      <FloatingCTA />
      <BackToTop />
      <StickyCTABar />
      
      {/* Early Adopter Modal */}
      <EarlyAdopterModal />
    </>
  )
}


