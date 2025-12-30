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
          transition={{ delay: Math.round(index * 0.1 * 10) / 10, duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        >
          <Card>
            <button
              type="button"
              onClick={() => toggle(index)}
              className="w-full text-left cursor-pointer transition-all duration-200 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-black focus:ring-offset-2 rounded-lg p-6"
              aria-expanded={openIndex === index}
              aria-controls={`faq-answer-${index}`}
            >
              <div className="flex justify-between items-start">
                <h3 className="text-h3 font-bold pr-8 text-gray-dark">{item.question}</h3>
                <motion.span
                  className="flex-shrink-0 text-2xl font-bold text-gray-subtle"
                  aria-hidden="true"
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                >
                  {openIndex === index ? '−' : '+'}
                </motion.span>
              </div>
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  id={`faq-answer-${index}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                  className="overflow-hidden"
                  role="region"
                >
                  <div className="mt-4 pt-4 border-t border-gray-medium px-6 pb-6">
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

