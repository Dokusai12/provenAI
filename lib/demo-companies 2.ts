export interface DemoCompany {
  id: string
  slug: string
  name: string
  category: string
  industry: string
  aiType: 'third-party' | 'internal' | 'both'
  region: 'uk' | 'eu' | 'global'
  certified: boolean
  certifiedDate?: string
  renewalDate?: string
  scopeSummary: string
  evidenceHighlights: string[]
  description: string
  website: string
}

export const demoCompanies: DemoCompany[] = [
  {
    id: '1',
    slug: 'techcorp-ai',
    name: 'TechCorp AI',
    category: 'AI Product',
    industry: 'SaaS',
    aiType: 'both',
    region: 'global',
    certified: true,
    certifiedDate: '2024-12-15',
    renewalDate: '2025-12-15',
    scopeSummary: '12 AI systems across customer support, fraud detection, and content recommendation',
    evidenceHighlights: [
      'Complete inventory of 12 AI systems',
      'All systems have documented ownership',
      'Risk classifications aligned with EU AI Act',
      'Active monitoring plan in place',
    ],
    description: 'SaaS platform providing AI-powered customer support and fraud detection solutions.',
    website: 'https://techcorp-ai.example.com',
  },
  {
    id: '2',
    slug: 'fintech-solutions',
    name: 'FinTech Solutions',
    category: 'AI Product',
    industry: 'Fintech',
    aiType: 'internal',
    region: 'eu',
    certified: true,
    certifiedDate: '2024-11-20',
    renewalDate: '2025-11-20',
    scopeSummary: '8 AI systems focused on financial risk assessment and fraud prevention',
    evidenceHighlights: [
      'High-risk systems properly classified',
      'Comprehensive monitoring and controls',
      'Clear ownership structure',
      'Regular incident log updates',
    ],
    description: 'Financial technology company specializing in AI-driven risk assessment and fraud prevention.',
    website: 'https://fintech-solutions.example.com',
  },
  {
    id: '3',
    slug: 'ai-agency-pro',
    name: 'AI Agency Pro',
    category: 'AI Agency',
    industry: 'Agency',
    aiType: 'third-party',
    region: 'uk',
    certified: true,
    certifiedDate: '2024-10-10',
    renewalDate: '2025-10-10',
    scopeSummary: '15 AI systems used in client projects across multiple industries',
    evidenceHighlights: [
      'Documented third-party AI usage',
      'Client project evidence included',
      'Shadow AI discovery process documented',
      'Clear vendor governance structure',
    ],
    description: 'AI agency providing consulting and implementation services for enterprise clients.',
    website: 'https://ai-agency-pro.example.com',
  },
  {
    id: '4',
    slug: 'healthcare-ai-labs',
    name: 'Healthcare AI Labs',
    category: 'AI Product',
    industry: 'Healthcare',
    aiType: 'internal',
    region: 'eu',
    certified: false,
    scopeSummary: '6 AI systems for medical data analysis and patient care optimization',
    evidenceHighlights: [
      'Evidence Pack in production',
      'High-risk medical AI systems documented',
      'Compliance-focused risk classifications',
    ],
    description: 'Healthcare technology company developing AI solutions for medical data analysis.',
    website: 'https://healthcare-ai-labs.example.com',
  },
]

export function getCompanyBySlug(slug: string): DemoCompany | undefined {
  return demoCompanies.find(company => company.slug === slug)
}

