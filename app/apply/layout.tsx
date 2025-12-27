import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Apply for Certification',
  description: 'Apply for ProvenAI certification. Join verified AI companies and build trust with your customers. Beta applications: Free for first 15 companies.',
}

export default function ApplyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

