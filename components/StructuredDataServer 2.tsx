interface StructuredDataServerProps {
  type: 'organization' | 'website'
}

export default function StructuredDataServer({ type }: StructuredDataServerProps) {
  const baseUrl = 'https://provenai.io'

  let jsonLd: Record<string, any> = {}

  if (type === 'organization') {
    jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'ProvenAI',
      url: baseUrl,
      logo: `${baseUrl}/logo.svg`,
      description: 'ProvenAI helps companies turn scattered AI usage into procurement-ready proof. We produce and maintain AI inventories, ownership structures, risk classifications, and exportable Evidence Packs.',
      sameAs: [
        'https://linkedin.com/company/provenai',
      ],
    }
  } else if (type === 'website') {
    jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'ProvenAI',
      url: baseUrl,
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${baseUrl}/directory?search={search_term_string}`,
        },
        'query-input': 'required name=search_term_string',
      },
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

