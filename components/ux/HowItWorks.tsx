'use client'

import { motion } from 'framer-motion'
import ScrollReveal from '@/components/animations/ScrollReveal'
import StaggerContainer from '@/components/animations/StaggerContainer'
import AnimatedCard from '@/components/animations/AnimatedCard'
import FileIcon from '@/components/icons/FileIcon'
import SearchIcon from '@/components/icons/SearchIcon'
import CheckBadgeIcon from '@/components/icons/CheckBadgeIcon'

const steps = [
  {
    number: 1,
    title: 'Apply',
    description: 'Submit your application with company information, safety and compliance documentation, and governance materials.',
    Icon: FileIcon,
  },
  {
    number: 2,
    title: 'Verify',
    description: 'Our team reviews your application, audits safety practices, compliance posture, and verifies your claims against recognized standards.',
    Icon: SearchIcon,
  },
  {
    number: 3,
    title: 'Certified',
    description: 'Receive your ProvenAI certification, badge, and get listed in our verified directory with demonstrated compliance and safety posture.',
    Icon: CheckBadgeIcon,
  },
]

export default function HowItWorks() {
  return (
    <section className="py-20 bg-gray-very-light border-t border-gray-medium">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="fade">
          <h2 className="text-h2-lg text-center mb-6 font-bold">How It Works</h2>
          <div className="w-16 h-1 bg-primary-black mx-auto mb-12"></div>
        </ScrollReveal>

        <StaggerContainer staggerDelay={0.15}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative grid-equal-rows">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-gray-medium -z-10">
              <motion.div
                className="h-full bg-primary-black"
                initial={{ width: '0%' }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </div>

            {steps.map((step, index) => (
              <div key={step.number} className="relative flex min-h-full">
                <AnimatedCard
                  revealDirection="up"
                  revealDelay={index * 0.15}
                  className="text-center w-full flex flex-col h-full"
                >
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-primary-black text-primary-white flex items-center justify-center font-bold text-h3 border-4 border-primary-white z-10">
                    {step.number}
                  </div>
                  <div className="pt-8 flex-grow flex flex-col justify-between">
                    <div>
                      <div className="flex justify-center mb-4">
                        <div className="w-16 h-16 rounded-full bg-gray-very-light flex items-center justify-center border border-gray-medium">
                          <step.Icon className="w-8 h-8" />
                        </div>
                      </div>
                      <h3 className="text-h3 font-bold mb-4">{step.title}</h3>
                    </div>
                    <p className="text-body text-gray-dark leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </AnimatedCard>
              </div>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  )
}

