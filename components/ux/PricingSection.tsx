'use client'

import Link from 'next/link'
import Card from '@/components/ui/Card'
import CertificationTiers from '@/components/CertificationTiers'
import AnimatedButton from '@/components/animations/AnimatedButton'
import ScrollReveal from '@/components/animations/ScrollReveal'

export default function PricingSection() {
  return (
    <section className="py-20 bg-primary-white border-t border-gray-medium">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="fade">
          <h2 className="text-h2-lg text-center mb-6 font-bold">Pricing</h2>
          <div className="w-16 h-1 bg-primary-black mx-auto mb-12"></div>
          <p className="text-body-lg text-gray-dark text-center mb-16 max-w-3xl mx-auto leading-relaxed">
            Affordable certification for SMBs. Choose the tier that fits your needs.
          </p>
        </ScrollReveal>

        <div className="mb-12">
          <Card>
            <CertificationTiers />
          </Card>
        </div>

        <ScrollReveal direction="up" delay={0.2}>
          <div className="text-center">
            <p className="text-body text-gray-dark mb-8">
              All tiers include annual review and certification renewal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/apply">
                <AnimatedButton variant="primary" size="lg">
                  Get Certified
                </AnimatedButton>
              </Link>
              <Link href="/standards">
                <AnimatedButton variant="secondary" size="lg">
                  View Standards
                </AnimatedButton>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

