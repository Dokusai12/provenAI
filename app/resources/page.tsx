'use client'

import Link from 'next/link'
import Card from '@/components/ui/Card'
import Breadcrumbs from '@/components/ux/Breadcrumbs'
import ScrollReveal from '@/components/animations/ScrollReveal'
import StaggerContainer from '@/components/animations/StaggerContainer'
import AnimatedCard from '@/components/animations/AnimatedCard'

const categories = [
  {
    id: 'eu-ai-act',
    title: 'EU AI Act',
    description: 'Resources on the EU AI Act and how to document compliance evidence',
  },
  {
    id: 'ai-governance',
    title: 'AI Governance',
    description: 'Best practices for AI governance and risk management',
  },
  {
    id: 'procurement',
    title: 'Procurement',
    description: 'How to answer procurement questions and security questionnaires',
  },
  {
    id: 'inventory',
    title: 'AI Inventory',
    description: 'How to build and maintain a complete AI systems inventory',
  },
  {
    id: 'standards',
    title: 'Standards & Frameworks',
    description: 'ISO 42001, NIST AI RMF, and other AI governance frameworks',
  },
]

const resources = [
  {
    slug: 'eu-ai-act-evidence-pack',
    title: 'EU AI Act Evidence Pack: What Buyers Ask For',
    category: 'EU AI Act',
    description: 'Learn what procurement teams ask for when evaluating AI vendors under the EU AI Act. Understand how to structure your Evidence Pack to answer their questions.',
    readTime: '12 min read',
  },
  {
    slug: 'ai-inventory-template',
    title: 'AI Inventory Template: Complete Guide',
    category: 'AI Inventory',
    description: 'Step-by-step guide to building a complete AI systems inventory. Includes templates, examples, and best practices for documenting third-party and internal AI systems.',
    readTime: '15 min read',
  },
  {
    slug: 'ai-governance-for-procurement',
    title: 'AI Governance for Procurement: A Practical Guide',
    category: 'Procurement',
    description: 'How to structure your AI governance documentation to pass procurement reviews. Real examples of what buyers look for and how to present your evidence.',
    readTime: '10 min read',
  },
  {
    slug: 'how-to-document-ai-risk-classification',
    title: 'How to Document AI Risk Classification',
    category: 'AI Governance',
    description: 'Learn how to classify AI systems by risk level and document your rationale. Align classifications with EU AI Act categories and other frameworks.',
    readTime: '14 min read',
  },
  {
    slug: 'iso-42001-explained',
    title: 'ISO 42001 Explained: Evidence Requirements',
    category: 'Standards & Frameworks',
    description: 'Understanding ISO 42001 requirements and how to document evidence for certification. Practical guidance on what to include in your Evidence Pack.',
    readTime: '18 min read',
  },
  {
    slug: 'nist-ai-rmf-in-practice',
    title: 'NIST AI RMF in Practice: Evidence Documentation',
    category: 'Standards & Frameworks',
    description: 'How to apply the NIST AI Risk Management Framework and document evidence of your governance practices. Real-world examples and templates.',
    readTime: '16 min read',
  },
  {
    slug: 'shadow-ai-discovery',
    title: 'Shadow AI Discovery: Finding Hidden AI Usage',
    category: 'AI Inventory',
    description: 'Techniques for discovering shadow AI usage in your organization. How to document third-party tools and unsanctioned AI systems in your inventory.',
    readTime: '11 min read',
  },
  {
    slug: 'vendor-ai-governance',
    title: 'Vendor AI Governance: Managing Third-Party Risk',
    category: 'AI Governance',
    description: 'How to govern AI systems from third-party vendors. Documentation requirements, risk assessment, and monitoring practices for vendor AI.',
    readTime: '13 min read',
  },
  {
    slug: 'ai-policy-what-buyers-ask',
    title: 'AI Policy: What Buyers Ask',
    category: 'Procurement',
    description: 'Common questions procurement teams ask about AI policies and governance. How to prepare answers and reference your Evidence Pack.',
    readTime: '9 min read',
  },
  {
    slug: 'how-to-answer-ai-security-questionnaires',
    title: 'How to Answer AI Security Questionnaires',
    category: 'Procurement',
    description: 'Step-by-step guide to answering security questionnaires about AI usage. How to use your Evidence Pack to provide complete, accurate answers.',
    readTime: '17 min read',
  },
]

export default function ResourcesPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-12 bg-primary-white border-b border-[rgba(0,0,0,0.08)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs className="mb-6" />
          <ScrollReveal direction="fade">
            <h1 className="text-h1 font-bold mb-4">Resources</h1>
            <p className="text-body-lg text-gray-subtle max-w-3xl">
              Practical guides, templates, and best practices for AI governance, procurement, and evidence documentation.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-gray-very-light border-b border-[rgba(0,0,0,0.08)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="fade">
            <h2 className="text-h2 font-bold mb-8 text-center">Categories</h2>
          </ScrollReveal>
          <StaggerContainer staggerDelay={0.1}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category, index) => (
                <AnimatedCard
                  key={category.id}
                  variant="default"
                  revealDirection="up"
                  revealDelay={index * 0.1}
                  className="h-full"
                >
                  <h3 className="text-h4 font-bold mb-3">{category.title}</h3>
                  <p className="text-body text-gray-subtle">{category.description}</p>
                </AnimatedCard>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* All Resources */}
      <section className="py-12 bg-primary-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="fade">
            <h2 className="text-h2 font-bold mb-8">All resources</h2>
          </ScrollReveal>
          <StaggerContainer staggerDelay={0.05}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources.map((resource, index) => (
                <AnimatedCard
                  key={resource.slug}
                  variant="default"
                  revealDirection="up"
                  revealDelay={index * 0.05}
                  className="h-full flex flex-col"
                >
                  <div className="mb-3">
                    <span className="px-2 py-1 bg-gray-very-light text-xs text-gray-subtle rounded-soft">
                      {resource.category}
                    </span>
                  </div>
                  <h3 className="text-h4 font-bold mb-3">{resource.title}</h3>
                  <p className="text-body text-gray-subtle mb-4 flex-grow">{resource.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-small text-gray-subtle">{resource.readTime}</span>
                    <Link href={`/resources/${resource.slug}`}>
                      <span className="text-body font-medium text-primary-black hover:underline">
                        Read more →
                      </span>
                    </Link>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>
    </div>
  )
}

