'use client'

import { motion } from 'framer-motion'
import Card from '@/components/ui/Card'
import CheckCircleIcon from '@/components/icons/CheckCircleIcon'
import CodeBracketIcon from '@/components/icons/CodeBracketIcon'
import BriefcaseIcon from '@/components/icons/BriefcaseIcon'
import EyeIcon from '@/components/icons/EyeIcon'
import ShieldCheckIcon from '@/components/icons/ShieldCheckIcon'
import Breadcrumbs from '@/components/ux/Breadcrumbs'
import ScrollReveal from '@/components/animations/ScrollReveal'
import StaggerContainer from '@/components/animations/StaggerContainer'
import AnimatedCard from '@/components/animations/AnimatedCard'

const criteria = [
  {
    title: 'Technical Expertise',
    description: 'At least one team member with demonstrable AI/ML experience. Credentials: work history, projects, portfolio, or technical background. Not just "completed online course" - real experience.',
    Icon: CheckCircleIcon,
  },
  {
    title: 'AI Implementation',
    description: 'Evidence of actual AI technology use (not just ChatGPT API wrapper). Documentation of: models used, frameworks, platforms, or custom development. Clear distinction between AI and traditional automation.',
    Icon: CodeBracketIcon,
  },
  {
    title: 'Client Work',
    description: 'Minimum 3 real client projects or case studies. Verifiable results and testimonials. Cannot be all internal/theoretical work.',
    Icon: BriefcaseIcon,
  },
  {
    title: 'Transparent Claims',
    description: 'Marketing claims match technical capabilities. No exaggerated "AI-powered" statements for basic automation. Clear about limitations and capabilities.',
    Icon: EyeIcon,
  },
  {
    title: 'Business Legitimacy',
    description: 'Registered business entity. Professional online presence. Client references available. Transparent pricing and process.',
    Icon: ShieldCheckIcon,
  },
]

const processSteps = [
  {
    step: '1',
    title: 'Submit Application',
    description: 'Complete the application form with company information, technical details, and supporting materials.',
  },
  {
    step: '2',
    title: 'Provide Documentation',
    description: 'Submit technical documentation, portfolio links, and team credentials for review.',
  },
  {
    step: '3',
    title: 'Verification Call',
    description: '30-60 minute call to discuss technical capabilities, client work, and answer questions.',
  },
  {
    step: '4',
    title: 'Review Period',
    description: 'Our team reviews your application against certification criteria (5-7 business days).',
  },
  {
    step: '5',
    title: 'Certification Decision',
    description: 'Certification issued or detailed feedback provided for improvement.',
  },
]

export default function StandardsPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-12 bg-primary-white border-b border-gray-medium">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs className="mb-6" />
          <div className="text-center">
            <ScrollReveal direction="fade">
              <h1 className="text-h1 font-bold mb-4">Certification Standards</h1>
              <p className="text-body-lg text-gray-subtle">
                What we verify to certify legitimate AI companies
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Criteria Section */}
      <section className="py-12 bg-primary-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer staggerDelay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
              {criteria.map((criterion, index) => (
                <div key={index} className="flex">
                  <AnimatedCard className="h-full w-full flex flex-col min-h-[280px]" revealDirection="up" revealDelay={index * 0.1}>
                    <div className="mb-4">
                      <criterion.Icon className="w-10 h-10" />
                    </div>
                    <div className="text-h3 font-bold mb-3">{criterion.title}</div>
                    <p className="text-body text-gray-subtle flex-grow">{criterion.description}</p>
                  </AnimatedCard>
                </div>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Passing Requirements */}
      <section className="py-12 bg-gray-dark border-t border-gray-medium">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="fade">
            <Card variant="elevated">
              <h2 className="text-h2 font-bold mb-6 text-primary-white">Passing Requirements</h2>
              <ul className="space-y-4 text-body text-gray-light">
                <li className="flex items-start">
                  <span className="text-2xl mr-3" aria-hidden="true">•</span>
                  <span>Must meet <strong className="text-primary-white">4 out of 5 criteria</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3" aria-hidden="true">•</span>
                  <span>Annual review to maintain certification</span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3" aria-hidden="true">•</span>
                  <span>Criteria may evolve as AI industry standards develop</span>
                </li>
              </ul>
            </Card>
          </ScrollReveal>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-12 bg-primary-white border-t border-gray-medium">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="fade">
            <h2 className="text-h2 font-bold mb-8 text-center">Application Process</h2>
          </ScrollReveal>
          <StaggerContainer staggerDelay={0.15}>
            <div className="space-y-6">
              {processSteps.map((process, index) => (
                <ScrollReveal key={index} direction="left" delay={index * 0.15}>
                  <div className="flex gap-6 relative">
                    {index < processSteps.length - 1 && (
                      <motion.div
                        className="absolute left-6 top-12 w-0.5 bg-gray-medium -z-10"
                        initial={{ height: 0 }}
                        whileInView={{ height: '100%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                      />
                    )}
                    <div className="flex-shrink-0">
                      <motion.div
                        className="w-12 h-12 rounded-full bg-primary-black text-primary-white flex items-center justify-center font-bold text-h3 border-2 border-primary-white"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15, type: 'spring', stiffness: 200 }}
                      >
                        {process.step}
                      </motion.div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-h3 font-bold mb-2">{process.title}</h3>
                      <p className="text-body text-gray-subtle">{process.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>
    </div>
  )
}

