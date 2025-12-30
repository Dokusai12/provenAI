'use client'

import { useState } from 'react'
import Link from 'next/link'
import Breadcrumbs from '@/components/ux/Breadcrumbs'
import ScrollReveal from '@/components/animations/ScrollReveal'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import ToolCard from '@/components/resources/ToolCard'
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
import AnimatedInfographic from '@/components/widgets/AnimatedInfographic'
import { downloadPDFGuide } from '@/lib/pdf-utils'

const tools = [
  {
    id: 'prescreening',
    title: 'Am I Ready? Quiz',
    description: 'Quick 6-question assessment to gauge your compliance status',
    category: 'Quick Start',
    component: PreScreeningQuiz,
  },
  {
    id: 'gap-analysis',
    title: 'Compliance Gap Analysis',
    description: 'Self-assessment on all 6 certification criteria with visual scorecard',
    category: 'Quick Start',
    component: ComplianceGapAnalysis,
  },
  {
    id: 'readiness-score',
    title: 'Compliance Readiness Score',
    description: 'Comprehensive 0-100 assessment with category breakdown',
    category: 'Assessment',
    component: ReadinessScore,
  },
  {
    id: 'risk-category',
    title: 'EU AI Act Risk Category Calculator',
    description: 'Determine your AI system\'s risk category under EU AI Act',
    category: 'Assessment',
    component: RiskCategoryCalculator,
  },
  {
    id: 'vendor-assessment',
    title: 'Vendor Assessment Tool',
    description: 'For buyers: Evaluate vendor compliance using ProvenAI standards',
    category: 'Assessment',
    component: VendorAssessment,
  },
  {
    id: 'roi-calculator',
    title: 'ROI Calculator',
    description: 'Calculate potential savings and time saved with certification',
    category: 'Planning',
    component: ROICalculator,
  },
  {
    id: 'timeline',
    title: 'Certification Timeline Simulator',
    description: 'Estimate your certification timeline based on readiness level',
    category: 'Planning',
    component: TimelineSimulator,
  },
  {
    id: 'checklist',
    title: 'Document Checklist Generator',
    description: 'Generate personalized checklist based on company type and tier',
    category: 'Planning',
    component: ChecklistGenerator,
  },
  {
    id: 'standards-mapper',
    title: 'Standards Mapping Visualizer',
    description: 'See how ProvenAI criteria map to ISO 42001, NIST AI RMF, EU AI Act',
    category: 'Standards',
    component: StandardsMapper,
  },
  {
    id: 'roadmap',
    title: 'EU AI Act Compliance Roadmap',
    description: 'Interactive roadmap with milestones and personalized checklists',
    category: 'Standards',
    component: ComplianceRoadmap,
  },
  {
    id: 'calendar',
    title: 'Compliance Calendar',
    description: 'EU AI Act timeline with countdown timer and interactive milestones',
    category: 'Standards',
    component: ComplianceCalendar,
  },
  {
    id: 'glossary',
    title: 'Glossary & Terminology',
    description: 'Searchable glossary of AI compliance terms and definitions',
    category: 'Reference',
    component: Glossary,
  },
]

export default function ResourcesPage() {
  const [expandedTool, setExpandedTool] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('All')

  const categories = ['All', 'Quick Start', 'Assessment', 'Planning', 'Standards', 'Reference']

  const filteredTools = tools.filter((tool) => {
    const matchesSearch =
      tool.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || tool.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const handleExpand = (id: string) => {
    setExpandedTool(expandedTool === id ? null : id)
  }

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
                Everything you need to assess, verify, and maintain AI compliance
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-gray-very-light border-t border-gray-medium">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <Input
              type="text"
              placeholder="Search tools..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="mb-4"
            />
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedCategory === cat
                      ? 'bg-primary-black text-primary-white'
                      : 'bg-primary-white border border-gray-medium hover:border-primary-black'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-12 bg-primary-white border-t border-gray-medium">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="fade">
            <div className="mb-8 text-center">
              <h2 className="text-h2 font-bold mb-2">Interactive Tools</h2>
              <p className="text-body text-gray-subtle">
                Click any tool to expand and use it
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTools.map((tool) => (
              <ToolCard
                key={tool.id}
                id={tool.id}
                title={tool.title}
                description={tool.description}
                category={tool.category}
                component={tool.component}
                onExpand={handleExpand}
                isExpanded={expandedTool === tool.id}
              />
            ))}
          </div>

          {filteredTools.length === 0 && (
            <div className="text-center py-12">
              <p className="text-body text-gray-subtle">No tools found matching your search.</p>
            </div>
          )}
        </div>
      </section>

      {/* Visual Guides */}
      <section className="py-12 bg-gray-very-light border-t border-gray-medium">
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

      {/* Guides Section */}
      <section className="py-12 bg-primary-white border-t border-gray-medium">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="fade">
            <h2 className="text-h2 font-bold mb-8 text-center">Guides & Downloads</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                key: 'eu-ai-act-compliance-checklist',
                title: 'EU AI Act Compliance Checklist',
                description: 'Comprehensive checklist to guide your EU AI Act compliance journey',
              },
              {
                key: 'nist-ai-rmf-quick-start',
                title: 'NIST AI RMF Quick Start Guide',
                description: 'Introduction to the NIST AI Risk Management Framework',
              },
              {
                key: 'ai-risk-assessment-template',
                title: 'AI Risk Assessment Template',
                description: 'Template for conducting AI risk assessments',
              },
              {
                key: 'iso-42001-mapping',
                title: 'ISO 42001 Mapping Guide',
                description: 'How ProvenAI criteria map to ISO/IEC 42001',
              },
              {
                key: 'vendor-due-diligence-checklist',
                title: 'Vendor Due Diligence Checklist',
                description: 'For buyers: assess vendor AI compliance',
              },
              {
                key: 'ai-governance-best-practices',
                title: 'AI Governance Best Practices',
                description: 'Best practices for AI governance and accountability',
              },
            ].map((guide) => (
              <Card key={guide.title} variant="default">
                <h3 className="text-h3 font-bold mb-2">{guide.title}</h3>
                <p className="text-body text-gray-subtle mb-4">{guide.description}</p>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={async () => {
                    try {
                      await downloadPDFGuide(guide.key)
                    } catch (error) {
                      console.error('Error generating PDF:', error)
                    }
                  }}
                >
                  Download PDF
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-primary-black text-primary-white border-t border-gray-medium">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-h2 font-bold mb-4">Ready to Get Certified?</h2>
          <p className="text-body-lg mb-8 opacity-90">
            Use these tools to assess your compliance status, then apply for ProvenAI certification
          </p>
          <Link href="/apply">
            <Button variant="primary" size="lg">
              Apply for Certification
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
