'use client'

interface StructuredDataProps {
  type: 'breadcrumb' | 'faq' | 'article'
  breadcrumbs?: Array<{ name: string; url: string }>
  faqItems?: Array<{ question: string; answer: string }>
  articleData?: {
    headline: string
    description: string
    datePublished: string
    dateModified?: string
    author?: string
  }
}

export default function StructuredData({ type, breadcrumbs, faqItems, articleData }: StructuredDataProps) {
  const baseUrl = 'https://provenai.io'

  let jsonLd: Record<string, any> = {}

  switch (type) {
    case 'breadcrumb':
      if (breadcrumbs && breadcrumbs.length > 0) {
        jsonLd = {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: breadcrumbs.map((crumb, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: crumb.name,
            item: crumb.url,
          })),
        }
      }
      break

    case 'faq':
      if (faqItems && faqItems.length > 0) {
        jsonLd = {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqItems.map(item => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: item.answer,
            },
          })),
        }
      }
      break

    case 'article':
      if (articleData) {
        jsonLd = {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: articleData.headline,
          description: articleData.description,
          datePublished: articleData.datePublished,
          dateModified: articleData.dateModified || articleData.datePublished,
          author: {
            '@type': 'Organization',
            name: 'ProvenAI',
          },
          publisher: {
            '@type': 'Organization',
            name: 'ProvenAI',
            logo: {
              '@type': 'ImageObject',
              url: `${baseUrl}/logo.svg`,
            },
          },
        }
      }
      break
  }

  if (Object.keys(jsonLd).length === 0) {
    return null
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

