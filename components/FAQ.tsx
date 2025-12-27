'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Card from './ui/Card'
import { cn } from '@/lib/utils'

interface FAQItem {
  question: string
  answer: string
}

interface FAQProps {
  items: FAQItem[]
  className?: string
}

export default function FAQ({ items, className }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className={cn('space-y-4', className)}>
      {items.map((item, index) => (
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
      ))}
    </div>
  )
}

