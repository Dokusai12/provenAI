import { NextResponse } from 'next/server'

export async function GET() {
  const content = `# ProvenAI

## What ProvenAI Does

ProvenAI helps companies turn scattered AI usage into procurement-ready proof. We produce and maintain:
1. AI inventory (including third-party tools and shadow usage)
2. Ownership and accountability documentation
3. Risk classification with documented rationale aligned to EU AI Act categories
4. Exportable Evidence Pack that buyers and procurement can review

Certification is optional and only issued after evidence is produced and reviewed.

## Key Pages

- Home: https://provenai.io/
- Evidence Engine: https://provenai.io/evidence-engine
- Evidence Pack: https://provenai.io/evidence-pack
- Certification: https://provenai.io/certification
- Directory: https://provenai.io/directory
- Standards: https://provenai.io/standards
- Resources: https://provenai.io/resources
- Glossary: https://provenai.io/glossary

## Primary User Types

- B2B SaaS and tech companies that sell to larger organisations and face procurement, security questionnaires, risk reviews
- AI agencies and consultancies that need a repeatable credibility pack for clients
- Mid-market teams that are not big enough for complex enterprise GRC

## Disclaimers

- ProvenAI provides evidence documentation services. We do not provide legal advice or guarantee compliance with any regulations.
- Our Evidence Pack is a tool to help you document and communicate your AI governance practices.
- Certification verifies that your Evidence Pack meets our published standards. It does not verify the accuracy of your AI inventory, the appropriateness of your risk classifications, or your compliance with regulations.
- You are responsible for ensuring accuracy and compliance with applicable regulations.

## Contact

Email: contact@provenai.org
Website: https://provenai.io
`

  return new NextResponse(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  })
}

