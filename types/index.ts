export type CompanyType = 'AI Agency' | 'AI Product' | 'AI Consultancy' | 'Other'

export type CompanySize = '1-10' | '11-50' | '51-200' | '200+'

export type CertificationTier = 'Basic' | 'Standard' | 'Premium'

export interface ApplicationFormData {
  // Company Information
  companyName: string
  website: string
  companyType: CompanyType
  companySize: CompanySize
  yearFounded?: string
  location: string

  // Contact Information
  contactName: string
  email: string
  phone?: string
  role: string

  // Technical Details
  aiServicesDescription: string
  aiTechnologies: string
  technicalTeamSize: string
  portfolioLinks: string[]

  // Supporting Materials
  linkedInProfiles: string
  clientTestimonials?: string
  additionalInfo?: string

  // Certification
  certificationTier: CertificationTier

  // Terms
  agreeToTerms: boolean
  confirmAccuracy: boolean
  agreeToReview: boolean
  understandCriteria: boolean
}

export interface ContactFormData {
  name: string
  email: string
  subject: 'General Inquiry' | 'Apply for Certification' | 'Press' | 'Partnership'
  message: string
}

export interface CertifiedCompany {
  id: string
  name: string
  logo?: string
  type: CompanyType
  description: string
  website: string
  certifiedYear: number
}

