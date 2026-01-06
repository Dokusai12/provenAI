'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import Card from '@/components/ui/Card'
import Input from '@/components/ui/Input'
import Select from '@/components/ui/Select'
import Button from '@/components/ui/Button'
import Breadcrumbs from '@/components/ux/Breadcrumbs'
import ScrollReveal from '@/components/animations/ScrollReveal'
import StaggerContainer from '@/components/animations/StaggerContainer'
import AnimatedCard from '@/components/animations/AnimatedCard'
import { demoCompanies, type DemoCompany } from '@/lib/demo-companies'
import ProvenAIBadge from '@/components/ProvenAIBadge'

export default function DirectoryPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [filterIndustry, setFilterIndustry] = useState<string>('all')
  const [filterAiType, setFilterAiType] = useState<string>('all')
  const [filterCertification, setFilterCertification] = useState<string>('all')
  const [filterRegion, setFilterRegion] = useState<string>('all')

  const filteredCompanies = useMemo(() => {
    return demoCompanies.filter(company => {
      const matchesSearch = company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        company.description.toLowerCase().includes(searchQuery.toLowerCase())
      
      const matchesIndustry = filterIndustry === 'all' || company.industry === filterIndustry
      const matchesAiType = filterAiType === 'all' || company.aiType === filterAiType
      const matchesCertification = filterCertification === 'all' ||
        (filterCertification === 'certified' && company.certified) ||
        (filterCertification === 'not-certified' && !company.certified)
      const matchesRegion = filterRegion === 'all' || company.region === filterRegion

      return matchesSearch && matchesIndustry && matchesAiType && matchesCertification && matchesRegion
    })
  }, [searchQuery, filterIndustry, filterAiType, filterCertification, filterRegion])

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-12 bg-primary-white border-b border-[rgba(0,0,0,0.08)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs className="mb-6" />
          <ScrollReveal direction="fade">
            <h1 className="text-h1 font-bold mb-4">Directory</h1>
            <p className="text-body-lg text-gray-subtle max-w-3xl">
              Browse companies with Evidence Packs. Certified companies have completed our review process.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-gray-very-light border-b border-[rgba(0,0,0,0.08)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="fade">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              <div className="lg:col-span-2">
                <Input
                  type="text"
                  placeholder="Search companies..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  aria-label="Search companies"
                />
              </div>
              <Select
                options={[
                  { value: 'all', label: 'All Industries' },
                  { value: 'saas', label: 'SaaS' },
                  { value: 'fintech', label: 'Fintech' },
                  { value: 'healthcare', label: 'Healthcare' },
                  { value: 'agency', label: 'Agency' },
                ]}
                value={filterIndustry}
                onChange={(e) => setFilterIndustry(e.target.value)}
                aria-label="Filter by industry"
              />
              <Select
                options={[
                  { value: 'all', label: 'All AI Types' },
                  { value: 'third-party', label: 'Third-party' },
                  { value: 'internal', label: 'Internal' },
                  { value: 'both', label: 'Both' },
                ]}
                value={filterAiType}
                onChange={(e) => setFilterAiType(e.target.value)}
                aria-label="Filter by AI type"
              />
              <Select
                options={[
                  { value: 'all', label: 'All Status' },
                  { value: 'certified', label: 'Certified' },
                  { value: 'not-certified', label: 'Not Certified' },
                ]}
                value={filterCertification}
                onChange={(e) => setFilterCertification(e.target.value)}
                aria-label="Filter by certification status"
              />
            </div>
            <div className="mt-4">
              <Select
                options={[
                  { value: 'all', label: 'All Regions' },
                  { value: 'uk', label: 'UK' },
                  { value: 'eu', label: 'EU' },
                  { value: 'global', label: 'Global' },
                ]}
                value={filterRegion}
                onChange={(e) => setFilterRegion(e.target.value)}
                aria-label="Filter by region"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Directory Content */}
      <section className="py-12 bg-primary-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredCompanies.length === 0 ? (
            <ScrollReveal direction="fade">
              <Card variant="minimal" className="text-center py-16">
                <h2 className="text-h2 font-bold mb-4">No companies found</h2>
                <p className="text-body text-gray-subtle mb-8">
                  Try adjusting your search or filters.
                </p>
                <Button
                  variant="secondary"
                  size="md"
                  onClick={() => {
                    setSearchQuery('')
                    setFilterIndustry('all')
                    setFilterAiType('all')
                    setFilterCertification('all')
                    setFilterRegion('all')
                  }}
                >
                  Clear filters
                </Button>
              </Card>
            </ScrollReveal>
          ) : (
            <>
              <div className="mb-6">
                <p className="text-body text-gray-subtle">
                  Showing {filteredCompanies.length} {filteredCompanies.length === 1 ? 'company' : 'companies'}
                </p>
              </div>
              <StaggerContainer staggerDelay={0.05}>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredCompanies.map((company, index) => (
                    <DirectoryCard key={company.id} company={company} index={index} />
                  ))}
                </div>
              </StaggerContainer>
            </>
          )}
        </div>
      </section>
    </div>
  )
}

function DirectoryCard({ company, index }: { company: DemoCompany; index: number }) {
  return (
    <AnimatedCard
      variant="default"
      revealDirection="up"
      revealDelay={index * 0.05}
      className="h-full flex flex-col"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-h4 font-bold mb-2">{company.name}</h3>
          <span className="inline-block px-3 py-1 bg-gray-very-light text-small text-gray-subtle rounded-soft mb-2">
            {company.category}
          </span>
        </div>
        {company.certified && (
          <ProvenAIBadge size="small" year={company.certifiedDate ? new Date(company.certifiedDate).getFullYear() : 2024} />
        )}
      </div>
      
      <div className="mb-4 space-y-2">
        <div className="flex items-center gap-2 text-small text-gray-subtle">
          <span>Status:</span>
          {company.certified ? (
            <span className="px-2 py-1 bg-green-100 text-green-800 rounded-soft text-xs font-medium">
              Certified
            </span>
          ) : (
            <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded-soft text-xs font-medium">
              Evidence Pack
            </span>
          )}
        </div>
        {company.certified && company.certifiedDate && (
          <div className="text-small text-gray-subtle">
            Certified: {new Date(company.certifiedDate).toLocaleDateString('en-GB', { month: 'short', year: 'numeric' })}
          </div>
        )}
        {company.renewalDate && (
          <div className="text-small text-gray-subtle">
            Renewal: {new Date(company.renewalDate).toLocaleDateString('en-GB', { month: 'short', year: 'numeric' })}
          </div>
        )}
      </div>

      <p className="text-body text-gray-subtle mb-4 flex-grow line-clamp-3">
        {company.description}
      </p>

      <div className="mb-4">
        <p className="text-small font-semibold mb-2">Scope:</p>
        <p className="text-small text-gray-subtle">{company.scopeSummary}</p>
      </div>

      <Link href={`/directory/${company.slug}`}>
        <Button variant="secondary" size="sm" className="w-full">
          View profile
        </Button>
      </Link>
    </AnimatedCard>
  )
}
