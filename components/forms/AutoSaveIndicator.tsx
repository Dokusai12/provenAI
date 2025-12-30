'use client'

import React, { useState, useEffect } from 'react'
import { useWatch } from 'react-hook-form'

interface AutoSaveIndicatorProps {
  onSave?: (data: any) => void
  saveKey?: string
}

export default function AutoSaveIndicator({
  onSave,
  saveKey = 'provenai-application',
}: AutoSaveIndicatorProps) {
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'saved'>('idle')
  const formData = useWatch()

  useEffect(() => {
    if (!formData) return

    const saveToLocalStorage = () => {
      setSaveStatus('saving')
      try {
        localStorage.setItem(saveKey, JSON.stringify(formData))
        localStorage.setItem(`${saveKey}-timestamp`, Date.now().toString())
        setSaveStatus('saved')
        onSave?.(formData)
        
        // Reset to idle after 2 seconds
        setTimeout(() => setSaveStatus('idle'), 2000)
      } catch (error) {
        // Silently fail - auto-save is non-critical
        setSaveStatus('idle')
      }
    }

    // Debounce save
    const timeoutId = setTimeout(saveToLocalStorage, 1000)
    return () => clearTimeout(timeoutId)
  }, [formData, saveKey, onSave])

  if (saveStatus === 'idle') {
    return null
  }

  return (
    <div className="fixed bottom-4 right-4 bg-primary-black text-primary-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 z-50">
      {saveStatus === 'saving' ? (
        <>
          <svg
            className="animate-spin h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          <span className="text-sm">Saving...</span>
        </>
      ) : (
        <>
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          <span className="text-sm">Saved</span>
        </>
      )}
    </div>
  )
}


