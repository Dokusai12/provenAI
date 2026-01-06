'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import Card from './ui/Card'

export type EvidencePackPage = 
  | 'executive-summary'
  | 'ai-inventory'
  | 'ownership'
  | 'risk-classification'
  | 'monitoring'
  | 'change-log'

interface EvidencePackPreviewProps {
  variant?: 'default' | 'compact' | 'full'
  className?: string
}

const pages: { id: EvidencePackPage; title: string; icon: string }[] = [
  { id: 'executive-summary', title: 'Executive Summary', icon: '📄' },
  { id: 'ai-inventory', title: 'AI Systems Inventory', icon: '📋' },
  { id: 'ownership', title: 'Ownership & Sign-off', icon: '✍️' },
  { id: 'risk-classification', title: 'Risk Classification', icon: '⚠️' },
  { id: 'monitoring', title: 'Monitoring Plan', icon: '📊' },
  { id: 'change-log', title: 'Change Log', icon: '📝' },
]

const demoContent: Record<EvidencePackPage, { title: string; content: React.ReactNode }> = {
  'executive-summary': {
    title: 'Executive Summary',
    content: (
      <div className="space-y-4">
        <div>
          <h3 className="text-h4 font-bold mb-2">AI Governance Overview</h3>
          <p className="text-body text-gray-subtle">
            This Evidence Pack documents our AI systems inventory, ownership structure, risk classifications, and ongoing monitoring processes. All information is current as of the last update date.
          </p>
        </div>
        <div className="border-t border-[rgba(0,0,0,0.08)] pt-4">
          <h4 className="text-h5 font-semibold mb-2">Key Highlights</h4>
          <ul className="space-y-2 text-body text-gray-subtle">
            <li>• 12 AI systems documented across 3 categories</li>
            <li>• All systems have assigned owners and sign-off documentation</li>
            <li>• Risk classifications aligned with EU AI Act categories</li>
            <li>• Monitoring plan in place for all high-risk systems</li>
          </ul>
        </div>
      </div>
    ),
  },
  'ai-inventory': {
    title: 'AI Systems Inventory',
    content: (
      <div className="space-y-4">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[rgba(0,0,0,0.08)]">
                <th className="py-3 px-4 text-small font-semibold">System Name</th>
                <th className="py-3 px-4 text-small font-semibold">Type</th>
                <th className="py-3 px-4 text-small font-semibold">Risk Level</th>
                <th className="py-3 px-4 text-small font-semibold">Owner</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[rgba(0,0,0,0.04)]">
                <td className="py-3 px-4 text-body">Customer Support Chatbot</td>
                <td className="py-3 px-4 text-body text-gray-subtle">Third-party</td>
                <td className="py-3 px-4 text-body">
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-soft text-small">Limited</span>
                </td>
                <td className="py-3 px-4 text-body text-gray-subtle">Support Team</td>
              </tr>
              <tr className="border-b border-[rgba(0,0,0,0.04)]">
                <td className="py-3 px-4 text-body">Content Recommendation Engine</td>
                <td className="py-3 px-4 text-body text-gray-subtle">Internal</td>
                <td className="py-3 px-4 text-body">
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded-soft text-small">Minimal</span>
                </td>
                <td className="py-3 px-4 text-body text-gray-subtle">Product Team</td>
              </tr>
              <tr className="border-b border-[rgba(0,0,0,0.04)]">
                <td className="py-3 px-4 text-body">Fraud Detection System</td>
                <td className="py-3 px-4 text-body text-gray-subtle">Internal</td>
                <td className="py-3 px-4 text-body">
                  <span className="px-2 py-1 bg-red-100 text-red-800 rounded-soft text-small">High</span>
                </td>
                <td className="py-3 px-4 text-body text-gray-subtle">Security Team</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ),
  },
  'ownership': {
    title: 'Ownership & Sign-off',
    content: (
      <div className="space-y-4">
        <div>
          <h3 className="text-h4 font-bold mb-2">Accountability Structure</h3>
          <p className="text-body text-gray-subtle mb-4">
            Each AI system has a designated owner responsible for governance, risk management, and compliance oversight.
          </p>
        </div>
        <div className="space-y-3">
          <div className="border border-[rgba(0,0,0,0.08)] rounded-soft p-4">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h4 className="text-h5 font-semibold">Customer Support Chatbot</h4>
                <p className="text-small text-gray-subtle">Owner: Support Team Lead</p>
              </div>
              <span className="px-2 py-1 bg-green-100 text-green-800 rounded-soft text-xs">Signed off</span>
            </div>
            <p className="text-small text-gray-subtle mt-2">Last reviewed: 15 Jan 2025</p>
          </div>
          <div className="border border-[rgba(0,0,0,0.08)] rounded-soft p-4">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h4 className="text-h5 font-semibold">Fraud Detection System</h4>
                <p className="text-small text-gray-subtle">Owner: Security Team Lead</p>
              </div>
              <span className="px-2 py-1 bg-green-100 text-green-800 rounded-soft text-xs">Signed off</span>
            </div>
            <p className="text-small text-gray-subtle mt-2">Last reviewed: 10 Jan 2025</p>
          </div>
        </div>
      </div>
    ),
  },
  'risk-classification': {
    title: 'Risk Classification Rationale',
    content: (
      <div className="space-y-4">
        <div>
          <h3 className="text-h4 font-bold mb-2">Classification Methodology</h3>
          <p className="text-body text-gray-subtle mb-4">
            Risk classifications are based on EU AI Act categories, considering data sensitivity, system purpose, and potential impact.
          </p>
        </div>
        <div className="space-y-3">
          <div className="border-l-4 border-red-500 pl-4">
            <h4 className="text-h5 font-semibold mb-2">High Risk: Fraud Detection System</h4>
            <p className="text-body text-gray-subtle mb-2">
              Classified as high risk due to:
            </p>
            <ul className="list-disc list-inside text-body text-gray-subtle space-y-1">
              <li>Processing of personal financial data</li>
              <li>Automated decision-making with significant impact</li>
              <li>Used in critical business function</li>
            </ul>
          </div>
          <div className="border-l-4 border-yellow-500 pl-4">
            <h4 className="text-h5 font-semibold mb-2">Limited Risk: Customer Support Chatbot</h4>
            <p className="text-body text-gray-subtle mb-2">
              Classified as limited risk due to:
            </p>
            <ul className="list-disc list-inside text-body text-gray-subtle space-y-1">
              <li>Customer service support function</li>
              <li>No automated decision-making</li>
              <li>Transparent AI usage</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  'monitoring': {
    title: 'Monitoring Plan',
    content: (
      <div className="space-y-4">
        <div>
          <h3 className="text-h4 font-bold mb-2">Ongoing Monitoring</h3>
          <p className="text-body text-gray-subtle mb-4">
            All AI systems are subject to regular monitoring for performance, accuracy, and compliance.
          </p>
        </div>
        <div className="space-y-3">
          <div className="border border-[rgba(0,0,0,0.08)] rounded-soft p-4">
            <h4 className="text-h5 font-semibold mb-2">Monitoring Frequency</h4>
            <ul className="space-y-2 text-body text-gray-subtle">
              <li>• High-risk systems: Weekly reviews</li>
              <li>• Limited-risk systems: Monthly reviews</li>
              <li>• Minimal-risk systems: Quarterly reviews</li>
            </ul>
          </div>
          <div className="border border-[rgba(0,0,0,0.08)] rounded-soft p-4">
            <h4 className="text-h5 font-semibold mb-2">Key Metrics Tracked</h4>
            <ul className="space-y-2 text-body text-gray-subtle">
              <li>• System accuracy and performance</li>
              <li>• Data quality and bias indicators</li>
              <li>• Incident reports and resolutions</li>
              <li>• Compliance with documented controls</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  'change-log': {
    title: 'Change Log & Incident Log',
    content: (
      <div className="space-y-4">
        <div>
          <h3 className="text-h4 font-bold mb-2">Recent Changes</h3>
        </div>
        <div className="space-y-3">
          <div className="border-l-4 border-blue-500 pl-4">
            <div className="flex justify-between items-start mb-1">
              <h4 className="text-h5 font-semibold">System Update: Fraud Detection</h4>
              <span className="text-xs text-gray-subtle">20 Jan 2025</span>
            </div>
            <p className="text-body text-gray-subtle">Updated model version to v2.3. Improved accuracy by 5%.</p>
          </div>
          <div className="border-l-4 border-green-500 pl-4">
            <div className="flex justify-between items-start mb-1">
              <h4 className="text-h5 font-semibold">New System Added: Content Recommendation</h4>
              <span className="text-xs text-gray-subtle">15 Jan 2025</span>
            </div>
            <p className="text-body text-gray-subtle">Added new internal recommendation engine. Classified as minimal risk.</p>
          </div>
        </div>
        <div className="border-t border-[rgba(0,0,0,0.08)] pt-4 mt-4">
          <h3 className="text-h4 font-bold mb-2">Incident Log</h3>
          <p className="text-body text-gray-subtle">No incidents recorded in the last 90 days.</p>
        </div>
      </div>
    ),
  },
}

export default function EvidencePackPreview({ variant = 'default', className }: EvidencePackPreviewProps) {
  const [activePage, setActivePage] = useState<EvidencePackPage>('executive-summary')

  const isCompact = variant === 'compact'
  const isFull = variant === 'full'

  return (
    <Card variant="default" className={cn('overflow-hidden', className)}>
      <div className={cn(
        'flex',
        isCompact ? 'flex-col' : 'flex-row',
        isFull ? 'h-[800px]' : isCompact ? '' : 'h-[600px]'
      )}>
        {/* Thumbnails Sidebar */}
        <div className={cn(
          'border-r border-[rgba(0,0,0,0.08)] bg-gray-very-light',
          isCompact ? 'w-full border-r-0 border-b' : 'w-64 flex-shrink-0',
          isFull && 'w-72'
        )}>
          <div className="p-4 border-b border-[rgba(0,0,0,0.08)]">
            <h3 className="text-h5 font-semibold mb-1">Evidence Pack</h3>
            <p className="text-xs text-gray-subtle">Last updated: 20 Jan 2025</p>
          </div>
          <div className="p-2 space-y-1 overflow-y-auto" style={{ maxHeight: isCompact ? '200px' : isFull ? '700px' : '500px' }}>
            {pages.map((page) => (
              <button
                key={page.id}
                onClick={() => setActivePage(page.id)}
                className={cn(
                  'w-full text-left px-3 py-2.5 rounded-soft transition-all duration-200',
                  'hover:bg-white',
                  activePage === page.id
                    ? 'bg-white border border-primary-black shadow-soft'
                    : 'border border-transparent'
                )}
              >
                <div className="flex items-center gap-2">
                  <span className="text-lg">{page.icon}</span>
                  <span className={cn(
                    'text-small',
                    activePage === page.id ? 'font-semibold' : 'font-normal'
                  )}>
                    {page.title}
                  </span>
                </div>
              </button>
            ))}
          </div>
          {!isCompact && (
            <div className="p-4 border-t border-[rgba(0,0,0,0.08)] space-y-2">
              <button className="w-full px-3 py-2 text-small border border-[rgba(0,0,0,0.08)] rounded-soft hover:bg-white transition-colors">
                Export PDF
              </button>
              <button className="w-full px-3 py-2 text-small border border-[rgba(0,0,0,0.08)] rounded-soft hover:bg-white transition-colors">
                Share link
              </button>
            </div>
          )}
        </div>

        {/* Preview Content */}
        <div className="flex-1 overflow-y-auto bg-white">
          <AnimatePresence mode="wait">
            <motion.div
              key={activePage}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="p-8"
            >
              <div className="max-w-3xl">
                <h2 className="text-h3 font-bold mb-6">{demoContent[activePage].title}</h2>
                {demoContent[activePage].content}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </Card>
  )
}

