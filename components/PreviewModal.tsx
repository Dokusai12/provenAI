'use client'

import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import EvidencePackPreview from './EvidencePackPreview'

interface PreviewModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
}

export default function PreviewModal({ isOpen, onClose, title = 'Evidence Pack Preview' }: PreviewModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
            aria-hidden="true"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-4 md:inset-8 lg:inset-16 z-50 flex items-center justify-center"
            role="dialog"
            aria-modal="true"
            aria-labelledby="preview-modal-title"
          >
            <div className="w-full h-full bg-white rounded-large shadow-large flex flex-col overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-[rgba(0,0,0,0.08)]">
                <h2 id="preview-modal-title" className="text-h4 font-bold">
                  {title}
                </h2>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-very-light rounded-soft transition-colors"
                  aria-label="Close preview"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              
              {/* Content */}
              <div className="flex-1 overflow-hidden">
                <EvidencePackPreview variant="full" className="h-full border-0 rounded-none" />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

