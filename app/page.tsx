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

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center grid-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-12 pb-24">
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
              text="Stop AI Washing. Certify Real AI."
              mode="word"
              delay={0.4}
              as="h1"
              className="text-h1-lg md:text-h1-lg font-bold mb-6 tracking-tight leading-tight block"
            />
          </ScrollReveal>
          <ScrollReveal direction="fade" delay={0.5}>
            <div className="mb-6">
              <p className="text-body text-gray-dark max-w-2xl mx-auto leading-relaxed font-medium">
                Objective audits. Anonymous auditors ensure no conflicts of interest.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.6}>
            <p className="text-body-lg text-gray-dark mb-6 max-w-2xl mx-auto leading-relaxed">
              ProvenAI verifies legitimate AI companies. Get certified to stand out from scammers.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.7}>
            <p className="text-body text-gray-dark mb-6 max-w-2xl mx-auto leading-relaxed">
              Affordable certification for SMBs. Transparent standards. Technical verification by AI experts.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.75}>
            <div className="flex flex-wrap items-center justify-center gap-4 mb-10 max-w-2xl mx-auto">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-very-light border border-gray-medium">
                <ShieldCheckIcon className="w-5 h-5 text-primary-black" />
                <span className="text-small font-medium text-gray-dark">Anonymous Auditors</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-very-light border border-gray-medium">
                <EyeIcon className="w-5 h-5 text-primary-black" />
                <span className="text-small font-medium text-gray-dark">Public Standards</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-very-light border border-gray-medium">
                <CheckCircleIcon className="w-5 h-5 text-primary-black" />
                <span className="text-small font-medium text-gray-dark">Expert Review</span>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.8}>
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
              <Link href="#pricing">
                <AnimatedButton variant="secondary" size="lg">
                  View Pricing
                </AnimatedButton>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-20 bg-gray-very-light border-t border-gray-medium">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <ScrollReveal direction="left">
              <h2 className="text-h2-lg text-left md:text-left mb-6 font-bold tracking-tight">
                AI Is Everywhere. Trust Is Nowhere.
              </h2>
              <div className="w-16 h-1 bg-primary-black mb-8"></div>
            </ScrollReveal>
            <ScrollReveal direction="fade" delay={0.2}>
              <p className="text-body text-gray-dark text-left mb-8 max-w-3xl leading-relaxed">
                The AI industry is flooded with companies claiming to use AI, but many are just rebranding basic automation or wrapping ChatGPT APIs. Buyers have no way to verify who's legitimate.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="fade" delay={0.3}>
              <Card variant="minimal" className="mb-8">
                <h3 className="text-h3 font-bold mb-3">Real Example:</h3>
                <p className="text-body text-gray-dark">
                  A marketing agency rebranded their email automation tool as "AI-powered lead generation" 
                  and charged 3x the price. Clients discovered it was just basic email sequences with no 
                  actual AI technology.
                </p>
              </Card>
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
                          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                        />
                      </svg>
                    </div>
                  </AnimatedIcon>
                </div>
                <h3 className="text-h3 font-bold mb-4">Fake AI Agencies</h3>
                <p className="text-body text-gray-dark leading-relaxed">
                  Companies rebranding basic automation as AI, misleading clients with false claims about their capabilities.
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
                          d="M7 8h10M7 12h10m-7 4h7"
                        />
                      </svg>
                    </div>
                  </AnimatedIcon>
                </div>
                <h3 className="text-h3 font-bold mb-4">Exaggerated Claims</h3>
                <p className="text-body text-gray-dark leading-relaxed">
                  Everyone claims to be <Tooltip content="Companies use 'AI-powered' as a marketing term without actual AI implementation" position="top">"AI-powered"</Tooltip> with no verification, making it impossible to identify legitimate providers.
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
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                    </div>
                  </AnimatedIcon>
                </div>
                <h3 className="text-h3 font-bold mb-4">Zero Verification</h3>
                <p className="text-body text-gray-dark leading-relaxed">
                  No way to tell who's legitimate. Buyers waste time and money on companies that don't deliver real AI solutions.
                </p>
              </AnimatedCard>
            </div>
          </StaggerContainer>
          <ScrollReveal direction="up" delay={0.5}>
            <div className="mt-8 text-center">
              <Link href="/apply">
                <AnimatedButton variant="primary" size="lg">
                  Get Certified to Stand Out
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
              <h2 className="text-h2-lg font-bold mb-6">Rigorous Verification You Can Trust</h2>
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
                  <ShieldCheckIcon className="w-12 h-12 text-primary-black" />
                </div>
                <h3 className="text-h3 font-bold mb-3">Anonymous Auditors</h3>
                <p className="text-body text-gray-subtle">
                  Auditors remain anonymous to maintain objectivity—no conflicts of interest, no preferential treatment. 
                  Every company is evaluated solely on technical merit against our published standards.
                </p>
              </AnimatedCard>
              <AnimatedCard revealDirection="up" revealDelay={0.1}>
                <div className="mb-4">
                  <FileIcon className="w-12 h-12 text-primary-black" />
                </div>
                <h3 className="text-h3 font-bold mb-3">Public Standards</h3>
                <p className="text-body text-gray-subtle">
                  Our certification criteria are fully transparent and publicly available. No hidden requirements, 
                  no opaque processes. See exactly what we verify on our Standards page.
                </p>
              </AnimatedCard>
              <AnimatedCard revealDirection="up" revealDelay={0.2}>
                <div className="mb-4">
                  <CheckCircleIcon className="w-12 h-12 text-primary-black" />
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

      {/* How It Works Section */}
      <HowItWorks />

      {/* The Solution Section */}
      <section className="py-20 bg-gray-dark border-t border-gray-medium">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="fade">
            <div className="text-center mb-16">
              <h2 className="text-h2-lg mb-6 font-bold text-primary-white tracking-tight">
                We Verify. You Trust.
              </h2>
              <div className="w-16 h-1 bg-primary-white mx-auto mb-8"></div>
              <p className="text-body-lg text-gray-light text-center mb-12 max-w-3xl mx-auto leading-relaxed">
                ProvenAI provides rigorous technical verification to certify legitimate AI companies. Our transparent process ensures only companies with real AI capabilities receive certification.
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
                    Companies submit credentials and portfolio demonstrating their AI capabilities and client work.
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
                    We audit technical capabilities, review client work, and verify that claims match reality.
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
                    Legitimate companies receive the ProvenAI seal and get listed in our verified directory.
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
                <div className="w-12 h-1 bg-primary-black mb-8"></div>
                <ul className="space-y-6">
                  {[
                    { 
                      title: 'Stand Out from Scammers',
                      description: 'Differentiate your legitimate AI business from companies making false claims'
                    },
                    { 
                      title: 'Build Customer Trust',
                      description: 'Show customers you have verified technical capabilities and real AI expertise'
                    },
                    { 
                      title: 'Prove Technical Legitimacy',
                      description: 'Demonstrate your team has actual AI/ML experience, not just marketing claims'
                    },
                    { 
                      title: 'Get Featured in Directory',
                      description: 'Be discoverable by buyers looking for verified AI providers'
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
                <div className="w-12 h-1 bg-primary-black mb-8"></div>
                <ul className="space-y-6">
                  {[
                    { 
                      title: 'Find Verified AI Providers',
                      description: 'Browse our directory of certified companies with proven AI capabilities'
                    },
                    { 
                      title: 'Avoid Fake AI Companies',
                      description: 'Skip companies that rebrand automation as AI or make false claims'
                    },
                    { 
                      title: 'Trust Technical Claims',
                      description: 'Know that certified companies have verified technical expertise'
                    },
                    { 
                      title: 'Make Informed Decisions',
                      description: 'Compare verified providers with confidence in their capabilities'
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

      {/* Comparison Table Section */}
      <section className="py-20 bg-primary-white border-t border-gray-medium">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="fade">
            <h2 className="text-h2-lg text-center mb-6 font-bold">Certified vs Non-Certified</h2>
            <div className="w-16 h-1 bg-primary-black mx-auto mb-12"></div>
          </ScrollReveal>
          <ComparisonTable />
        </div>
      </section>

      {/* Pricing Section */}
      <div id="pricing">
        <PricingSection />
      </div>

      {/* Why Choose ProvenAI Section */}
      <section className="py-20 bg-gray-very-light border-t border-gray-medium">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="fade">
            <h2 className="text-h2-lg text-center mb-6 font-bold">Why Choose ProvenAI</h2>
            <div className="w-16 h-1 bg-primary-black mx-auto mb-12"></div>
          </ScrollReveal>
          <StaggerContainer staggerDelay={0.15}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: 'Affordable Pricing',
                  description: 'Starting at £2,500/year for SMBs, compared to £50,000+ enterprise certifications',
                },
                {
                  title: 'Technical Verification',
                  description: 'Audited by AI experts who understand real AI implementation, not just checkboxes',
                },
                {
                  title: 'Transparent Standards',
                  description: 'Public criteria so you know exactly what we verify—no hidden requirements',
                },
                {
                  title: 'Annual Renewals',
                  description: 'Ongoing verification ensures certified companies maintain their standards',
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

      {/* Quick Facts Section */}
      <section className="py-20 bg-primary-white border-t border-gray-medium">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="fade">
            <h2 className="text-h2-lg text-center mb-12 font-bold">Quick Facts</h2>
          </ScrollReveal>
          <StaggerContainer staggerDelay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { number: '£2,500', label: 'Starting Price', description: 'Most affordable certification for SMBs' },
                { number: '5-7', label: 'Business Days', description: 'Typical review time for applications' },
                { number: '4/5', label: 'Criteria Required', description: 'Must meet 4 out of 5 certification criteria' },
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
            <h2 className="text-h2-lg text-center mb-6 font-bold">Before & After Certification</h2>
            <div className="w-16 h-1 bg-primary-black mx-auto mb-12"></div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedCard variant="minimal" revealDirection="right">
              <h3 className="text-h3 font-bold mb-6 text-gray-subtle">Before Certification</h3>
              <ul className="space-y-4">
                {[
                  'Lost in a sea of "AI-powered" claims',
                  'No way to prove technical legitimacy',
                  'Competing with fake AI companies',
                  'Buyers can\'t verify your capabilities',
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
                  'Stand out with verified ProvenAI badge',
                  'Proven technical legitimacy',
                  'Featured in verified directory',
                  'Buyers trust your capabilities',
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
              <div className="w-16 h-1 bg-primary-black mx-auto mb-8"></div>
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
                  answer: 'ProvenAI focuses specifically on verifying AI capabilities, not just general business practices. We use technical audits by AI experts, require evidence of real AI implementation, and offer affordable pricing for SMBs starting at £2,500/year—unlike enterprise certifications that cost £50,000+.',
                },
                {
                  question: 'Why are your auditors anonymous?',
                  answer: 'We keep auditors anonymous to maintain complete objectivity and eliminate conflicts of interest. This ensures every certification decision is based solely on technical merit against our published standards, not relationships, business connections, or external pressure. By removing the ability to influence auditors based on who they are, we guarantee that all companies are evaluated fairly and consistently. This commitment to objective verification is what makes ProvenAI certification credible and trustworthy.',
                },
                {
                  question: 'How long does certification take?',
                  answer: 'The application process typically takes 5-7 business days after you submit all required documentation and complete the verification call.',
                },
                {
                  question: 'Can startups or small companies get certified?',
                  answer: 'Absolutely. ProvenAI is designed specifically for SMBs, including startups. As long as you meet our criteria—including having at least one team member with demonstrable AI experience and evidence of real AI implementation—you can be certified regardless of company size.',
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
                answer: 'ProvenAI focuses specifically on verifying AI capabilities, not just general business practices. We use technical audits by AI experts, require evidence of real AI implementation, and offer affordable pricing for SMBs starting at £2,500/year—unlike enterprise certifications that cost £50,000+.',
              },
              {
                question: 'Why are your auditors anonymous?',
                answer: 'We keep auditors anonymous to maintain complete objectivity and eliminate conflicts of interest. This ensures every certification decision is based solely on technical merit against our published standards, not relationships, business connections, or external pressure. By removing the ability to influence auditors based on who they are, we guarantee that all companies are evaluated fairly and consistently. This commitment to objective verification is what makes ProvenAI certification credible and trustworthy.',
              },
              {
                question: 'How long does certification take?',
                answer: 'The application process typically takes 5-7 business days after you submit all required documentation and complete the verification call. This includes our review of your technical capabilities, client work, and technical documentation.',
              },
              {
                question: 'What if my company doesn\'t pass certification?',
                answer: 'If your company doesn\'t meet the criteria, we provide detailed feedback on what needs improvement. You can reapply once you\'ve addressed the feedback. We\'re transparent about our standards so you know exactly what we\'re looking for.',
              },
              {
                question: 'Do I need to renew my certification?',
                answer: 'Yes, certification is valid for one year and requires annual renewal. This ensures certified companies maintain their standards and continue to deliver legitimate AI solutions. The renewal process is streamlined and typically faster than the initial certification.',
              },
              {
                question: 'What documentation do I need to provide?',
                answer: 'You\'ll need to provide company information, technical documentation showing AI implementation, portfolio links or case studies of client work, team credentials demonstrating AI/ML experience, and references. See our Standards page for detailed requirements.',
              },
              {
                question: 'Can startups or small companies get certified?',
                answer: 'Absolutely. ProvenAI is designed specifically for SMBs, including startups. As long as you meet our criteria—including having at least one team member with demonstrable AI experience and evidence of real AI implementation—you can be certified regardless of company size.',
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
              className="text-h2-lg font-bold mb-8 tracking-tight block"
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
    </>
  )
}

