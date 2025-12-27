import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Certified Directory',
  description: 'Browse verified AI companies in the ProvenAI Certified Directory. Find legitimate AI agencies, products, and consultancies.',
}

export default function DirectoryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

