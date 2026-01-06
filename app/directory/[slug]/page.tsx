import { notFound } from 'next/navigation'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Breadcrumbs from '@/components/ux/Breadcrumbs'
import ScrollReveal from '@/components/animations/ScrollReveal'
import { getCompanyBySlug, type DemoCompany } from '@/lib/demo-companies'
import ProvenAIBadge from '@/components/ProvenAIBadge'

interface DirectoryProfilePageProps {
  params: Promise<{ slug: string }>
}

export default async function DirectoryProfilePage({ params }: DirectoryProfilePageProps) {
  const { slug } = await params
  const company = getCompanyBySlug(slug)

  if (!company) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-12 bg-primary-white border-b border-[rgba(0,0,0,0.08)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs className="mb-6" />
          <ScrollReveal direction="fade">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h1 className="text-h1 font-bold mb-4">{company.name}</h1>
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-gray-very-light text-small text-gray-subtle rounded-soft">
                    {company.category}
                  </span>
                  {company.certified && (
                    <ProvenAIBadge size="default" year={company.certifiedDate ? new Date(company.certifiedDate).getFullYear() : 2024} />
                  )}
                </div>
                <p className="text-body-lg text-gray-subtle max-w-3xl">
                  {company.description}
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-12 bg-gray-very-light border-b border-[rgba(0,0,0,0.08)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="fade">
            <h2 className="text-h2 font-bold mb-8">Overview</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card variant="default" className="p-6">
                <h3 className="text-h4 font-bold mb-4">Company Information</h3>
                <dl className="space-y-3 text-body text-gray-subtle">
                  <div>
                    <dt className="font-semibold text-primary-black">Industry</dt>
                    <dd>{company.industry.charAt(0).toUpperCase() + company.industry.slice(1)}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-primary-black">AI Type</dt>
                    <dd>{company.aiType === 'both' ? 'Both third-party and internal' : company.aiType === 'third-party' ? 'Third-party models' : 'Internal models'}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-primary-black">Region</dt>
                    <dd>{company.region.toUpperCase()}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-primary-black">Website</dt>
                    <dd>
                      <a href={company.website} target="_blank" rel="noopener noreferrer" className="underline">
                        {company.website}
                      </a>
                    </dd>
                  </div>
                </dl>
              </Card>
              <Card variant="default" className="p-6">
                <h3 className="text-h4 font-bold mb-4">Certification Status</h3>
                <dl className="space-y-3 text-body text-gray-subtle">
                  <div>
                    <dt className="font-semibold text-primary-black">Status</dt>
                    <dd>
                      {company.certified ? (
                        <span className="px-2 py-1 bg-green-100 text-green-800 rounded-soft text-small font-medium">
                          Certified
                        </span>
                      ) : (
                        <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded-soft text-small font-medium">
                          Evidence Pack Only
                        </span>
                      )}
                    </dd>
                  </div>
                  {company.certified && company.certifiedDate && (
                    <div>
                      <dt className="font-semibold text-primary-black">Certified Date</dt>
                      <dd>{new Date(company.certifiedDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</dd>
                    </div>
                  )}
                  {company.renewalDate && (
                    <div>
                      <dt className="font-semibold text-primary-black">Renewal Date</dt>
                      <dd>{new Date(company.renewalDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</dd>
                    </div>
                  )}
                </dl>
              </Card>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Verified vs Attested Section */}
      {company.certified && (
        <section className="py-12 bg-primary-white border-b border-[rgba(0,0,0,0.08)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal direction="fade">
              <h2 className="text-h2 font-bold mb-8">Verified vs attested</h2>
              <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
                <Card variant="default" className="p-6">
                  <h3 className="text-h4 font-bold mb-4">What is verified</h3>
                  <ul className="space-y-2 text-body text-gray-subtle">
                    <li>• Evidence Pack completeness</li>
                    <li>• Documentation structure</li>
                    <li>• Risk classification rationale</li>
                    <li>• Exportability</li>
                  </ul>
                </Card>
                <Card variant="default" className="p-6">
                  <h3 className="text-h4 font-bold mb-4">What is self-attested</h3>
                  <ul className="space-y-2 text-body text-gray-subtle">
                    <li>• AI inventory accuracy</li>
                    <li>• Risk classification appropriateness</li>
                    <li>• Monitoring effectiveness</li>
                    <li>• Regulatory compliance</li>
                  </ul>
                </Card>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Evidence Summary Section */}
      <section className="py-12 bg-gray-very-light border-b border-[rgba(0,0,0,0.08)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="fade">
            <h2 className="text-h2 font-bold mb-8">Evidence summary</h2>
            <Card variant="default" className="p-8">
              <div className="mb-6">
                <h3 className="text-h4 font-bold mb-3">Scope Summary</h3>
                <p className="text-body text-gray-subtle">{company.scopeSummary}</p>
              </div>
              <div>
                <h3 className="text-h4 font-bold mb-3">Evidence Highlights</h3>
                <ul className="space-y-2">
                  {company.evidenceHighlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-3 text-body text-gray-subtle">
                      <span className="text-2xl mt-0.5">✓</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </ScrollReveal>
        </div>
      </section>

      {/* Certification Scope Section */}
      {company.certified && (
        <section className="py-12 bg-primary-white border-b border-[rgba(0,0,0,0.08)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal direction="fade">
              <h2 className="text-h2 font-bold mb-8">Certification scope</h2>
              <Card variant="default" className="p-8">
                <p className="text-body-lg text-gray-subtle mb-4">
                  {company.name} has been certified by ProvenAI. This certification verifies that their Evidence Pack meets our published standards for completeness, structure, and documentation quality.
                </p>
                <p className="text-body text-gray-subtle mb-4">
                  Certification does not verify the accuracy of AI inventory information, the appropriateness of risk classifications, or compliance with regulations.
                </p>
                <Link href="/standards">
                  <Button variant="secondary" size="md">
                    View certification standards
                  </Button>
                </Link>
              </Card>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-12 bg-gray-very-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal direction="fade">
            <h2 className="text-h2 font-bold mb-4">Interested in ProvenAI?</h2>
            <p className="text-body-lg text-gray-subtle mb-8">
              Get your own Evidence Pack or learn more about certification.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/evidence-pack">
                <Button variant="primary" size="lg">
                  Generate a sample pack
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="secondary" size="lg">
                  Contact ProvenAI
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}

