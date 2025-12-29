'use client'

import { motion } from 'framer-motion'
import Card from '@/components/ui/Card'
import CheckCircleIcon from '@/components/icons/CheckCircleIcon'
import BriefcaseIcon from '@/components/icons/BriefcaseIcon'
import EyeIcon from '@/components/icons/EyeIcon'
import ShieldCheckIcon from '@/components/icons/ShieldCheckIcon'
import GearIcon from '@/components/icons/GearIcon'
import FileIcon from '@/components/icons/FileIcon'
import Breadcrumbs from '@/components/ux/Breadcrumbs'
import ScrollReveal from '@/components/animations/ScrollReveal'
import StaggerContainer from '@/components/animations/StaggerContainer'
import AnimatedCard from '@/components/animations/AnimatedCard'

const criteria = [
  {
    title: 'Truth-in-Marketing',
    description: 'Marketing claims match actual capabilities and technical reality. Verification that statements about AI capabilities, performance, and use cases are accurate and supported by evidence. Clear distinction between marketing language and actual implementation.',
    Icon: EyeIcon,
  },
  {
    title: 'Data Handling & Privacy',
    description: 'Secure data practices, privacy compliance, and customer data protection. Evidence of data governance procedures, privacy policies, secure storage, access controls, and compliance with relevant data protection regulations.',
    Icon: ShieldCheckIcon,
  },
  {
    title: 'Model Monitoring & Evaluation',
    description: 'Error handling, performance tracking, and quality assurance processes. Evidence of ongoing monitoring, evaluation metrics, error detection and response procedures, and continuous improvement practices.',
    Icon: GearIcon,
  },
  {
    title: 'Security Posture',
    description: 'Basic security controls, access management, and vulnerability handling. Assessment of security practices, authentication/authorization mechanisms, vulnerability management, and incident response capabilities.',
    Icon: CheckCircleIcon,
  },
  {
    title: 'Risk Management',
    description: 'Aligned with NIST AI Risk Management Framework and ISO 42001 principles. Evidence of structured risk assessment processes, risk categorization, mitigation strategies, and ongoing risk management practices.',
    Icon: BriefcaseIcon,
  },
  {
    title: 'Governance & Accountability',
    description: 'Incident response, human oversight, and rollback procedures. Evidence of governance structures, accountability mechanisms, incident response plans, human-in-the-loop processes, and ability to rollback or disable AI systems when needed.',
    Icon: FileIcon,
  },
]

const processSteps = [
  {
    step: '1',
    title: 'Submit Application',
    description: 'Complete the application form with company information, safety and compliance documentation, governance materials, and supporting evidence.',
  },
  {
    step: '2',
    title: 'Provide Documentation',
    description: 'Submit safety documentation, compliance evidence, risk management frameworks, governance policies, and supporting materials for review.',
  },
  {
    step: '3',
    title: 'Verification Call',
    description: '30-60 minute call to discuss safety practices, compliance posture, risk management, governance, and answer questions.',
  },
  {
    step: '4',
    title: 'Review Period',
    description: 'Our team reviews your application against safety, compliance, and risk management criteria (5-7 business days).',
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
                AI safety, compliance, and risk assurance verification criteria
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
                  <span>Must meet <strong className="text-primary-white">5 out of 6 criteria</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3" aria-hidden="true">•</span>
                  <span>Annual review to maintain certification</span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3" aria-hidden="true">•</span>
                  <span>Criteria aligned with ISO 42001, NIST AI RMF, and EU AI Act requirements</span>
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

