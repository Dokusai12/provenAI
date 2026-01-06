'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Link from 'next/link'

export default function EarlyAdopterModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [dontShowAgain, setDontShowAgain] = useState(false)

  useEffect(() => {
    // Check if user has dismissed permanently
    const dismissed = localStorage.getItem('provenai-early-adopter-dismissed')
    if (dismissed === 'true') {
      return
    }

    // Show modal after a short delay (2 seconds)
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const handleClose = () => {
    setIsOpen(false)
    if (dontShowAgain) {
      localStorage.setItem('provenai-early-adopter-dismissed', 'true')
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 z-50"
            onClick={handleClose}
          />
          
          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, type: 'spring', stiffness: 300 }}
              className="pointer-events-auto max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Card className="relative">
                <button
                  onClick={handleClose}
                  className="absolute top-4 right-4 text-gray-subtle hover:text-primary-black transition-colors"
                  aria-label="Close"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                <div className="pr-8">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-primary-black text-primary-white text-sm font-bold rounded-full mb-3">
                      LIMITED OFFER
                    </span>
                    <h3 className="text-h2 font-bold mb-3">
                      Early Adopter Program
                    </h3>
                    <p className="text-body text-gray-dark mb-4">
                      Be among the first 15 companies to get certified and receive:
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start">
                        <span className="text-primary-black mr-2 text-xl">✓</span>
                        <span className="text-body text-gray-dark">
                          <strong>Free certification</strong> (normally £2,500-£10,000/year)
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary-black mr-2 text-xl">✓</span>
                        <span className="text-body text-gray-dark">
                          <strong>Lifetime support</strong> and priority assistance
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary-black mr-2 text-xl">✓</span>
                        <span className="text-body text-gray-dark">
                          <strong>Featured placement</strong> in our directory
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 mb-4">
                    <Link href="/apply" className="flex-1" onClick={handleClose}>
                      <Button variant="primary" className="w-full">
                        Apply Now
                      </Button>
                    </Link>
                    <Button
                      variant="secondary"
                      onClick={handleClose}
                      className="flex-1"
                    >
                      Learn More
                    </Button>
                  </div>

                  <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={dontShowAgain}
                      onChange={(e) => setDontShowAgain(e.target.checked)}
                      className="mr-2 w-4 h-4"
                    />
                    <span className="text-small text-gray-subtle">
                      Don't show this again
                    </span>
                  </label>
                </div>
              </Card>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}

