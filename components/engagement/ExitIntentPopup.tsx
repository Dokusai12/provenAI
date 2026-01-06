'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Input from '@/components/ui/Input'
import Link from 'next/link'

interface Offer {
  title: string
  description: string
  cta: string
  value: string
}

interface ExitIntentPopupProps {
  offers?: Offer[]
}

const defaultOffers = [
  {
    title: 'Get Free EU AI Act Compliance Checklist',
    description: 'Download our comprehensive checklist to guide your compliance journey',
    cta: 'Download Free Checklist',
    value: 'checklist',
  },
  {
    title: 'Schedule Free Compliance Consultation',
    description: 'Book a 30-minute call with our compliance experts',
    cta: 'Schedule Consultation',
    value: 'consultation',
  },
  {
    title: 'Download Risk Assessment Template',
    description: 'Get our AI risk assessment template aligned with NIST AI RMF',
    cta: 'Download Template',
    value: 'template',
  },
]

export default function ExitIntentPopup({ offers = defaultOffers }: ExitIntentPopupProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [currentOffer, setCurrentOffer] = useState(0)
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [dontShowAgain, setDontShowAgain] = useState(false)

  useEffect(() => {
    // Check if user has opted out
    const storedPreference = localStorage.getItem('provenai-exit-intent-dont-show')
    if (storedPreference === 'true') return

    const handleMouseLeave = (e: MouseEvent) => {
      // Detect exit intent (mouse leaving top of viewport)
      if (e.clientY <= 0 && !isOpen) {
        setIsOpen(true)
      }
    }

    document.addEventListener('mouseleave', handleMouseLeave)
    return () => document.removeEventListener('mouseleave', handleMouseLeave)
  }, [isOpen])

  useEffect(() => {
    // Rotate offers every 5 seconds if popup is open
    if (!isOpen) return

    const interval = setInterval(() => {
      setCurrentOffer((prev) => (prev + 1) % offers.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isOpen, offers.length])

  const handleClose = () => {
    setIsOpen(false)
    if (dontShowAgain) {
      localStorage.setItem('provenai-exit-intent-dont-show', 'true')
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, this would submit to your email service
    setSubmitted(true)
    setTimeout(() => {
      setIsOpen(false)
      setSubmitted(false)
      setEmail('')
    }, 2000)
  }

  if (!isOpen) return null

  const offer = offers[currentOffer] || offers[0]

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-primary-black bg-opacity-70 flex items-center justify-center z-[9999]"
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className="relative bg-primary-white rounded-lg shadow-xl p-8 max-w-md w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-dark hover:text-primary-black text-2xl"
              aria-label="Close modal"
            >
              &times;
            </button>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="text-4xl mb-4">✓</div>
                <h3 className="text-h2 font-bold mb-2">Success!</h3>
                <p className="text-body text-gray-dark">Check your email for next steps.</p>
              </motion.div>
            ) : (
              <>
                <Card variant="featured" className="text-center mb-6">
                  <span className="inline-block bg-primary-black text-primary-white text-small font-bold px-3 py-1 rounded-full mb-4">
                    LIMITED TIME
                  </span>
                  <motion.div
                    key={currentOffer}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <h2 className="text-h2 font-bold mb-3 text-primary-black">
                      {offer.title}
                    </h2>
                    <p className="text-body text-gray-dark">
                      {offer.description}
                    </p>
                  </motion.div>
                </Card>

                <form onSubmit={handleSubmit} className="mb-6">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="mb-4"
                  />
                  <Button type="submit" variant="primary" className="w-full" size="lg">
                    {offer.cta}
                  </Button>
                </form>

                {/* Offer indicators */}
                {offers.length > 1 && (
                  <div className="flex justify-center gap-2 mb-4">
                    {offers.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentOffer(idx)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          idx === currentOffer ? 'bg-primary-black w-6' : 'bg-gray-medium'
                        }`}
                        aria-label={`View offer ${idx + 1}`}
                      />
                    ))}
                  </div>
                )}

                <div className="text-center">
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="form-checkbox h-5 w-5 text-primary-black rounded"
                      checked={dontShowAgain}
                      onChange={(e) => setDontShowAgain(e.target.checked)}
                    />
                    <span className="ml-2 text-small text-gray-dark">Don't show this again</span>
                  </label>
                </div>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

