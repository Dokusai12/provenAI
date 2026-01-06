'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Card from './ui/Card'
import { cn } from '@/lib/utils'

type NodeType = 'ai-system' | 'data' | 'owners' | 'controls' | 'outputs'

interface Node {
  id: NodeType
  label: string
  description: string
  examples: string[]
  position: { x: number; y: number }
}

const nodes: Node[] = [
  {
    id: 'ai-system',
    label: 'AI System',
    description: 'The AI system or model being used',
    examples: ['Customer Support Chatbot', 'Fraud Detection System', 'Content Recommendation Engine'],
    position: { x: 20, y: 20 },
  },
  {
    id: 'data',
    label: 'Data',
    description: 'Data inputs and outputs processed by the AI system',
    examples: ['Customer messages', 'Transaction data', 'User preferences'],
    position: { x: 50, y: 20 },
  },
  {
    id: 'owners',
    label: 'Owners',
    description: 'People or teams responsible for the AI system',
    examples: ['Support Team Lead', 'Security Team', 'Product Team'],
    position: { x: 20, y: 50 },
  },
  {
    id: 'controls',
    label: 'Controls',
    description: 'Governance controls and monitoring processes',
    examples: ['Access controls', 'Monitoring dashboards', 'Review processes'],
    position: { x: 50, y: 50 },
  },
  {
    id: 'outputs',
    label: 'Outputs',
    description: 'Evidence and documentation produced',
    examples: ['Evidence Pack', 'Risk classifications', 'Monitoring reports'],
    position: { x: 35, y: 80 },
  },
]

const connections = [
  { from: 'ai-system', to: 'data' },
  { from: 'ai-system', to: 'owners' },
  { from: 'data', to: 'controls' },
  { from: 'owners', to: 'controls' },
  { from: 'controls', to: 'outputs' },
  { from: 'ai-system', to: 'outputs' },
]

export default function EvidenceGraph() {
  const [selectedNode, setSelectedNode] = useState<NodeType | null>(null)
  const selectedNodeData = selectedNode ? nodes.find(n => n.id === selectedNode) : null

  return (
    <div className="relative w-full" style={{ minHeight: '600px' }}>
      {/* Graph Container */}
      <div className="relative w-full h-full border border-[rgba(0,0,0,0.08)] rounded-soft bg-gray-very-light p-8">
        {/* SVG for connections */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
          {connections.map((conn, index) => {
            const fromNode = nodes.find(n => n.id === conn.from)
            const toNode = nodes.find(n => n.id === conn.to)
            if (!fromNode || !toNode) return null

            const fromX = (fromNode.position.x / 100) * 100
            const fromY = (fromNode.position.y / 100) * 100
            const toX = (toNode.position.x / 100) * 100
            const toY = (toNode.position.y / 100) * 100

            return (
              <line
                key={index}
                x1={`${fromX}%`}
                y1={`${fromY}%`}
                x2={`${toX}%`}
                y2={`${toY}%`}
                stroke="rgba(0,0,0,0.2)"
                strokeWidth="2"
                strokeDasharray="4,4"
              />
            )
          })}
        </svg>

        {/* Nodes */}
        <div className="relative w-full h-full" style={{ zIndex: 2 }}>
          {nodes.map((node) => (
            <motion.button
              key={node.id}
              onClick={() => setSelectedNode(selectedNode === node.id ? null : node.id)}
              className={cn(
                'absolute transform -translate-x-1/2 -translate-y-1/2',
                'px-4 py-3 rounded-soft border-2 transition-all',
                selectedNode === node.id
                  ? 'bg-primary-black text-primary-white border-primary-black shadow-medium'
                  : 'bg-white border-[rgba(0,0,0,0.2)] hover:border-primary-black hover:shadow-soft'
              )}
              style={{
                left: `${node.position.x}%`,
                top: `${node.position.y}%`,
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="text-center">
                <div className="text-small font-semibold">{node.label}</div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Node Details Panel */}
      <AnimatePresence>
        {selectedNodeData && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="mt-8"
          >
            <Card variant="default" className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-h4 font-bold mb-2">{selectedNodeData.label}</h3>
                  <p className="text-body text-gray-subtle">{selectedNodeData.description}</p>
                </div>
                <button
                  onClick={() => setSelectedNode(null)}
                  className="p-2 hover:bg-gray-very-light rounded-soft"
                  aria-label="Close"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div>
                <h4 className="text-h5 font-semibold mb-3">Example records:</h4>
                <ul className="space-y-2">
                  {selectedNodeData.examples.map((example, index) => (
                    <li key={index} className="text-body text-gray-subtle flex items-start gap-2">
                      <span className="mt-1">•</span>
                      <span>{example}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

