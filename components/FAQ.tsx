'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Card from './ui/Card'
import Input from './ui/Input'
import { cn } from '@/lib/utils'

interface FAQItem {
  question: string
  answer: string
  category?: string
}

interface FAQProps {
  items: FAQItem[]
  className?: string
  enableSearch?: boolean
}

export default function FAQ({ items, className, enableSearch = true }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [searchQuery, setSearchQuery] = useState('')

  const filteredItems = useMemo(() => {
    if (!searchQuery.trim()) return items
    const query = searchQuery.toLowerCase()
    return items.filter(item => 
      item.question.toLowerCase().includes(query) ||
      item.answer.toLowerCase().includes(query)
    )
  }, [items, searchQuery])

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className={cn('space-y-4', className)}>
      {enableSearch && (
        <div className="mb-6">
          <Input
            type="text"
            placeholder="Search FAQs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <p className="text-sm text-gray-subtle mt-2">
              {filteredItems.length} result{filteredItems.length !== 1 ? 's' : ''} found
            </p>
          )}
        </div>
      )}
      {filteredItems.length === 0 ? (
        <Card className="text-center py-8">
          <p className="text-body text-gray-subtle">No FAQs found matching your search.</p>
        </Card>
      ) : (
        filteredItems.map((item, index) => {
          const originalIndex = items.indexOf(item)
          return (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
        >
          <Card className="cursor-pointer transition-all duration-300 hover:shadow-lg" onClick={() => toggle(index)}>
            <div className="flex justify-between items-start">
              <h3 className="text-h3 font-bold pr-8 text-gray-dark">{item.question}</h3>
              <motion.button
                className="flex-shrink-0 text-2xl font-bold text-gray-subtle hover:text-primary-black transition-colors duration-300"
                aria-expanded={openIndex === index}
                aria-label={openIndex === index ? 'Collapse' : 'Expand'}
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {openIndex === index ? '−' : '+'}
              </motion.button>
            </div>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="mt-4 pt-4 border-t border-gray-medium">
                    <motion.p
                      className="text-body text-gray-dark leading-relaxed"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      {item.answer}
                    </motion.p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </Card>
        </motion.div>
          )
        })
      )}
    </div>
  )
}

