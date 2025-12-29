'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

interface BreadcrumbItem {
  label: string
  href: string
}

export default function Breadcrumbs({ className }: { className?: string }) {
  const pathname = usePathname()
  
  if (pathname === '/') {
    return null
  }

  const pathSegments = pathname.split('/').filter(Boolean)
  const breadcrumbs: BreadcrumbItem[] = [
    { label: 'Home', href: '/' },
    ...pathSegments.map((segment, index) => ({
      label: segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' '),
      href: '/' + pathSegments.slice(0, index + 1).join('/'),
    })),
  ]

  return (
    <nav
      className={cn('flex items-center space-x-2 text-small text-gray-subtle', className)}
      aria-label="Breadcrumb"
    >
      {breadcrumbs.map((crumb, index) => (
        <div key={crumb.href} className="flex items-center">
          {index > 0 && (
            <svg
              className="w-4 h-4 mx-2 text-gray-subtle"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          )}
          {index === breadcrumbs.length - 1 ? (
            <span className="text-primary-black font-medium">{crumb.label}</span>
          ) : (
            <Link
              href={crumb.href}
              className="hover:text-primary-black transition-colors"
            >
              {crumb.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  )
}

