'use client'

import { useState } from 'react'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import { motion } from 'framer-motion'

export default function ROICalculator() {
  const [companySize, setCompanySize] = useState('')
  const [currentComplianceCost, setCurrentComplianceCost] = useState('')
  const [vendorAssessments, setVendorAssessments] = useState('')
  const [assessmentTime, setAssessmentTime] = useState('')
  const [showResults, setShowResults] = useState(false)

  const calculateROI = () => {
    const complianceCost = parseFloat(currentComplianceCost) || 0
    const assessments = parseInt(vendorAssessments) || 0
    const timePerAssessment = parseFloat(assessmentTime) || 0
    
    // ProvenAI cost (estimate based on tier - using Standard tier as baseline)
    const provenAICost = 5000
    
    // Time savings: Assume ProvenAI reduces vendor assessment time by 70%
    const timeSavedHours = (assessments * timePerAssessment * 0.7)
    const timeSavedValue = timeSavedHours * 150 // £150/hour average rate
    
    // Reduced compliance costs: Assume 30% reduction in ongoing compliance work
    const complianceSavings = complianceCost * 0.3
    
    // Total savings
    const totalSavings = timeSavedValue + complianceSavings
    
    // ROI
    const roi = ((totalSavings - provenAICost) / provenAICost) * 100
    const netSavings = totalSavings - provenAICost
    
    return {
      provenAICost,
      timeSavedValue,
      complianceSavings,
      totalSavings,
      netSavings,
      roi,
      timeSavedHours,
    }
  }

  const results = showResults ? calculateROI() : null

  if (showResults && results) {
    return (
      <Card className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h3 className="text-h2 font-bold mb-6 text-center">Your ROI Calculation</h3>
          
          <div className="space-y-4 mb-8">
            <div className="flex justify-between items-center p-4 bg-gray-very-light rounded-lg">
              <span className="text-body text-gray-dark">ProvenAI Certification Cost</span>
              <span className="text-h3 font-bold">£{results.provenAICost.toLocaleString()}/year</span>
            </div>
            
            <div className="flex justify-between items-center p-4 bg-gray-very-light rounded-lg">
              <span className="text-body text-gray-dark">Time Saved on Vendor Assessments</span>
              <span className="text-h3 font-bold text-green-600">£{Math.round(results.timeSavedValue).toLocaleString()}</span>
            </div>
            
            <div className="flex justify-between items-center p-4 bg-gray-very-light rounded-lg">
              <span className="text-body text-gray-dark">Compliance Cost Reduction</span>
              <span className="text-h3 font-bold text-green-600">£{Math.round(results.complianceSavings).toLocaleString()}</span>
            </div>
            
            <div className="border-t-2 border-primary-black pt-4">
              <div className="flex justify-between items-center p-4 bg-primary-black text-primary-white rounded-lg">
                <span className="text-body-lg font-medium">Net Annual Savings</span>
                <span className="text-h2 font-bold">
                  £{Math.round(results.netSavings).toLocaleString()}
                </span>
              </div>
              <div className="text-center mt-4">
                <span className="text-body text-gray-subtle">ROI: </span>
                <span className="text-h3 font-bold text-green-600">{Math.round(results.roi)}%</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-very-light p-4 rounded-lg mb-6">
            <p className="text-body text-gray-dark">
              <strong>Key Benefits:</strong> Save approximately {Math.round(results.timeSavedHours)} hours per year on vendor due diligence, 
              plus reduced compliance overhead through standardized certification.
            </p>
          </div>

          <Button
            variant="secondary"
            onClick={() => {
              setShowResults(false)
            }}
            className="w-full"
          >
            Recalculate
          </Button>
        </motion.div>
      </Card>
    )
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <h3 className="text-h2 font-bold mb-2">ROI Calculator</h3>
      <p className="text-body text-gray-subtle mb-8">
        Calculate potential savings with ProvenAI certification
      </p>

      <div className="space-y-6">
        <div>
          <label className="block text-body font-medium mb-2">Company Size</label>
          <select
            value={companySize}
            onChange={(e) => setCompanySize(e.target.value)}
            className="w-full p-3 border-2 border-gray-medium rounded-lg focus:border-primary-black focus:outline-none"
          >
            <option value="">Select size</option>
            <option value="startup">Startup (1-10 employees)</option>
            <option value="small">Small (11-50 employees)</option>
            <option value="medium">Medium (51-200 employees)</option>
            <option value="large">Large (200+ employees)</option>
          </select>
        </div>

        <div>
          <label className="block text-body font-medium mb-2">
            Current Annual Compliance Costs (£)
          </label>
          <Input
            type="number"
            value={currentComplianceCost}
            onChange={(e) => setCurrentComplianceCost(e.target.value)}
            placeholder="e.g., 10000"
          />
        </div>

        <div>
          <label className="block text-body font-medium mb-2">
            Number of Vendor Assessments per Year
          </label>
          <Input
            type="number"
            value={vendorAssessments}
            onChange={(e) => setVendorAssessments(e.target.value)}
            placeholder="e.g., 12"
          />
        </div>

        <div>
          <label className="block text-body font-medium mb-2">
            Average Hours per Vendor Assessment
          </label>
          <Input
            type="number"
            value={assessmentTime}
            onChange={(e) => setAssessmentTime(e.target.value)}
            placeholder="e.g., 8"
          />
        </div>
      </div>

      <div className="mt-8">
        <Button
          variant="primary"
          onClick={() => setShowResults(true)}
          className="w-full sm:w-auto"
          disabled={!companySize || !currentComplianceCost || !vendorAssessments || !assessmentTime}
        >
          Calculate ROI
        </Button>
      </div>
    </Card>
  )
}


