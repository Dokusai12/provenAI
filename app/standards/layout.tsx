import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Certification Standards | ProvenAI',
  description: 'What we verify to certify legitimate AI companies. Transparent certification criteria and requirements.',
}

export default function StandardsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

