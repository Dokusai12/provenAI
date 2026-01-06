import Link from 'next/link'
import Breadcrumbs from './ux/Breadcrumbs'
import Card from './ui/Card'

interface ResourceLayoutProps {
  title: string
  description?: string
  children: React.ReactNode
  category?: string
  date?: string
}

export default function ResourceLayout({ title, description, children, category, date }: ResourceLayoutProps) {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-12 bg-primary-white border-b border-[rgba(0,0,0,0.08)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs className="mb-6" />
          {category && (
            <div className="mb-4">
              <span className="px-3 py-1 bg-gray-very-light text-small text-gray-subtle rounded-soft">
                {category}
              </span>
            </div>
          )}
          <h1 className="text-h1 font-bold mb-4">{title}</h1>
          {description && (
            <p className="text-body-lg text-gray-subtle mb-4">{description}</p>
          )}
          {date && (
            <p className="text-small text-gray-subtle">Published: {date}</p>
          )}
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-primary-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose prose-lg max-w-none">
            {children}
          </article>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-12 bg-gray-very-light border-t border-[rgba(0,0,0,0.08)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card variant="default" className="p-8">
            <h2 className="text-h3 font-bold mb-4">Related resources</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/evidence-pack" className="text-body text-primary-black hover:underline">
                → Evidence Pack
              </Link>
              <Link href="/standards" className="text-body text-primary-black hover:underline">
                → Standards
              </Link>
              <Link href="/certification" className="text-body text-primary-black hover:underline">
                → Certification
              </Link>
              <Link href="/resources" className="text-body text-primary-black hover:underline">
                → All Resources
              </Link>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}

