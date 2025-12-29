'use client'

import { useState } from 'react'
import Card from '@/components/ui/Card'
import Input from '@/components/ui/Input'
import Select from '@/components/ui/Select'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import Image from 'next/image'
import { CompanyType } from '@/types'
import Breadcrumbs from '@/components/ux/Breadcrumbs'
import ScrollReveal from '@/components/animations/ScrollReveal'
import AnimatedButton from '@/components/animations/AnimatedButton'
import ProvenAIBadge from '@/components/ProvenAIBadge'
import { motion } from 'framer-motion'
import VendorAssessment from '@/components/tools/VendorAssessment'

// This will be replaced with real data later
const companies: any[] = []

const companyTypeOptions = [
  { value: 'all', label: 'All Types' },
  { value: 'AI Agency', label: 'AI Agency' },
  { value: 'AI Product', label: 'AI Product' },
  { value: 'AI Consultancy', label: 'AI Consultancy' },
  { value: 'Other', label: 'Other' },
]

export default function DirectoryPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [filterType, setFilterType] = useState<CompanyType | 'all'>('all')

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-12 bg-primary-white border-b border-gray-medium">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs className="mb-6" />
          <ScrollReveal direction="fade">
            <h1 className="text-h1 font-bold mb-4 text-center">ProvenAI Certified Directory</h1>
            <p className="text-body-lg text-gray-subtle text-center mb-6">
              Verified AI companies you can trust
            </p>
          </ScrollReveal>

          {/* Search and Filter */}
          <ScrollReveal direction="fade">
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <Input
                  type="text"
                  placeholder="Search companies..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  aria-label="Search companies"
                  className="transition-all duration-300 focus:scale-[1.02]"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Select
                  options={companyTypeOptions}
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value as CompanyType | 'all')}
                  aria-label="Filter by company type"
                  className="transition-all duration-300 focus:scale-[1.02]"
                />
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Vendor Assessment Tool */}
      <section className="py-12 bg-gray-very-light border-t border-gray-medium">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="fade">
            <div className="text-center mb-8">
              <h2 className="text-h2 font-bold mb-2">Assess Vendor Compliance</h2>
              <p className="text-body text-gray-subtle max-w-2xl mx-auto">
                For buyers: Use our assessment tool to evaluate vendor AI compliance based on ProvenAI standards
              </p>
            </div>
            <VendorAssessment />
          </ScrollReveal>
        </div>
      </section>

      {/* Directory Content */}
      <section className="py-12 bg-primary-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {companies.length === 0 ? (
            // Empty State
            <ScrollReveal direction="fade">
              <Card className="text-center py-16">
                <ScrollReveal direction="fade" delay={0.2}>
                  <div className="flex justify-center mb-12">
                    <Image
                      src="/logo.svg"
                      alt="ProvenAI"
                      width={300}
                      height={164}
                      className="h-auto w-auto max-w-[300px]"
                    />
                  </div>
                </ScrollReveal>
                <ScrollReveal direction="up" delay={0.3}>
                  <h2 className="text-h2 font-bold mb-4">First certified companies coming soon</h2>
                  <p className="text-body text-gray-subtle mb-8 max-w-2xl mx-auto">
                    Be among the first verified AI companies.
                  </p>
                </ScrollReveal>
                <ScrollReveal direction="up" delay={0.4}>
                  <Link href="/apply">
                    <AnimatedButton variant="primary" size="lg">
                      Apply to be in first cohort
                    </AnimatedButton>
                  </Link>
                </ScrollReveal>
              </Card>
            </ScrollReveal>
          ) : (
            // Company Grid (for future use)
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {companies.map((company) => (
                <CompanyCard key={company.id} company={company} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

function CompanyCard({ company }: { company: any }) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between mb-4">
        {company.logo && (
          <img
            src={company.logo}
            alt={`${company.name} logo`}
            className="h-12 w-12 object-contain"
          />
        )}
        <ProvenAIBadge size="small" year={company.certifiedYear} />
      </div>
      <h3 className="text-h3 font-bold mb-2">{company.name}</h3>
      <span className="text-small text-gray-subtle bg-gray-dark px-2 py-1 rounded inline-block mb-3">
        {company.type}
      </span>
      <p className="text-body text-gray-subtle mb-4 line-clamp-2">
        {company.description}
      </p>
      <Link
        href={`/directory/${company.id}`}
        className="text-body font-medium hover:underline"
      >
        View Profile →
      </Link>
    </Card>
  )
}

