'use client'

import { useState } from 'react'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import ProvenAIBadge from '@/components/ProvenAIBadge'

export default function BadgePreview() {
  const [companyName, setCompanyName] = useState('Your Company Name')
  const [backgroundColor, setBackgroundColor] = useState('white')

  return (
    <Card className="max-w-2xl mx-auto">
      <h3 className="text-h2 font-bold mb-2">Certification Badge Preview</h3>
      <p className="text-body text-gray-subtle mb-8">
        Preview how your ProvenAI certification badge will look
      </p>

      <div className="space-y-6 mb-8">
        <div>
          <label className="block text-body font-medium mb-2">Company Name</label>
          <Input
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            placeholder="Enter company name"
          />
        </div>

        <div>
          <label className="block text-body font-medium mb-2">Background Color</label>
          <select
            value={backgroundColor}
            onChange={(e) => setBackgroundColor(e.target.value)}
            className="w-full p-3 border-2 border-gray-medium rounded-lg focus:border-primary-black focus:outline-none"
          >
            <option value="white">White</option>
            <option value="light">Light Gray</option>
            <option value="dark">Dark</option>
          </select>
        </div>
      </div>

      <div
        className={`p-8 rounded-lg mb-6 flex items-center justify-center ${
          backgroundColor === 'white'
            ? 'bg-white'
            : backgroundColor === 'light'
            ? 'bg-gray-very-light'
            : 'bg-gray-dark'
        }`}
      >
        <div className="text-center">
          <ProvenAIBadge />
          {companyName && (
            <p className={`mt-4 text-body font-medium ${
              backgroundColor === 'dark' ? 'text-white' : 'text-gray-dark'
            }`}>
              {companyName}
            </p>
          )}
        </div>
      </div>

      <div className="flex gap-4">
        <Button variant="secondary" onClick={() => window.print()} className="flex-1">
          Print Preview
        </Button>
        <Button variant="primary" className="flex-1">
          Download Badge
        </Button>
      </div>
    </Card>
  )
}

