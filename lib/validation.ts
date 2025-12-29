export interface ValidationResult {
  isValid: boolean
  message?: string
}

// URL validation with auto-fix
export function validateUrl(value: string): ValidationResult {
  if (!value || value.trim() === '') {
    return { isValid: false, message: 'URL is required' }
  }

  let url = value.trim()

  // Auto-add https:// if no protocol
  if (!url.match(/^https?:\/\//i)) {
    url = `https://${url}`
  }

  try {
    new URL(url)
    return { isValid: true }
  } catch {
    return { isValid: false, message: 'Please enter a valid URL (e.g., https://example.com)' }
  }
}

// Email validation with domain check
export function validateEmail(value: string): ValidationResult {
  if (!value || value.trim() === '') {
    return { isValid: false, message: 'Email is required' }
  }

  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
  if (!emailRegex.test(value)) {
    return { isValid: false, message: 'Please enter a valid email address' }
  }

  // Basic domain validation
  const domain = value.split('@')[1]
  if (!domain || domain.length < 3) {
    return { isValid: false, message: 'Please enter a valid email address' }
  }

  return { isValid: true }
}

// Year validation
export function validateYear(value: string): ValidationResult {
  if (!value || value.trim() === '') {
    return { isValid: true } // Optional field
  }

  const year = parseInt(value, 10)
  const currentYear = new Date().getFullYear()

  if (isNaN(year)) {
    return { isValid: false, message: 'Please enter a valid year' }
  }

  if (year < 1900) {
    return { isValid: false, message: 'Year must be 1900 or later' }
  }

  if (year > currentYear) {
    return { isValid: false, message: 'Year cannot be in the future' }
  }

  return { isValid: true }
}

// Phone number validation (basic)
export function validatePhone(value: string): ValidationResult {
  if (!value || value.trim() === '') {
    return { isValid: true } // Optional field
  }

  // Remove common formatting characters
  const cleaned = value.replace(/[\s\-\(\)\+]/g, '')
  
  // Check if it's all digits and reasonable length
  if (!/^\d+$/.test(cleaned)) {
    return { isValid: false, message: 'Please enter a valid phone number' }
  }

  if (cleaned.length < 7 || cleaned.length > 15) {
    return { isValid: false, message: 'Phone number must be between 7 and 15 digits' }
  }

  return { isValid: true }
}

// LinkedIn URL validation
export function validateLinkedInUrl(value: string): ValidationResult {
  if (!value || value.trim() === '') {
    return { isValid: false, message: 'LinkedIn profiles are required' }
  }

  const linkedInRegex = /(?:https?:\/\/)?(?:www\.)?linkedin\.com\/(?:in|company|school)\/[\w-]+\/?/i
  
  // Check if the text contains at least one LinkedIn URL
  if (!linkedInRegex.test(value)) {
    return { isValid: false, message: 'Please provide valid LinkedIn profile URLs (e.g., https://linkedin.com/in/username)' }
  }

  return { isValid: true }
}

// Character count validation
export function validateMaxLength(value: string, maxLength: number): ValidationResult {
  if (!value || value.trim() === '') {
    return { isValid: false, message: 'This field is required' }
  }

  if (value.length > maxLength) {
    return { isValid: false, message: `Maximum ${maxLength} characters allowed` }
  }

  return { isValid: true }
}

// Minimum length validation
export function validateMinLength(value: string, minLength: number): ValidationResult {
  if (!value || value.trim() === '') {
    return { isValid: false, message: 'This field is required' }
  }

  if (value.trim().length < minLength) {
    return { isValid: false, message: `Minimum ${minLength} characters required` }
  }

  return { isValid: true }
}

// Positive number validation
export function validatePositiveNumber(value: string): ValidationResult {
  if (!value || value.trim() === '') {
    return { isValid: false, message: 'This field is required' }
  }

  const num = parseInt(value, 10)
  if (isNaN(num) || num <= 0) {
    return { isValid: false, message: 'Please enter a positive number' }
  }

  return { isValid: true }
}

// React Hook Form validation rules
export const validationRules = {
  companyName: {
    required: 'Company name is required',
    minLength: {
      value: 2,
      message: 'Company name must be at least 2 characters',
    },
  },
  companyType: {
    required: 'Company type is required',
  },
  companySize: {
    required: 'Company size is required',
  },
  website: {
    required: 'Website is required',
    validate: (value: string) => {
      const result = validateUrl(value)
      return result.isValid || result.message
    },
  },
  email: {
    required: 'Email is required',
    validate: (value: string) => {
      const result = validateEmail(value)
      return result.isValid || result.message
    },
  },
  phone: {
    validate: (value: string) => {
      if (!value || value.trim() === '') return true
      const result = validatePhone(value)
      return result.isValid || result.message
    },
  },
  yearFounded: {
    validate: (value: string) => {
      if (!value || value.trim() === '') return true
      const result = validateYear(value)
      return result.isValid || result.message
    },
  },
  location: {
    required: 'Location is required',
    minLength: {
      value: 2,
      message: 'Location must be at least 2 characters',
    },
  },
  contactName: {
    required: 'Contact name is required',
    minLength: {
      value: 2,
      message: 'Contact name must be at least 2 characters',
    },
  },
  role: {
    required: 'Role is required',
    minLength: {
      value: 2,
      message: 'Role must be at least 2 characters',
    },
  },
  aiServicesDescription: {
    required: 'AI services description is required',
    maxLength: {
      value: 500,
      message: 'Description must be 500 characters or less',
    },
  },
  aiTechnologies: {
    required: 'AI technologies are required',
    minLength: {
      value: 10,
      message: 'Please provide at least 10 characters describing AI technologies',
    },
  },
  technicalTeamSize: {
    required: 'Technical team size is required',
    validate: (value: string) => {
      const result = validatePositiveNumber(value)
      return result.isValid || result.message
    },
  },
  linkedInProfiles: {
    required: 'LinkedIn profiles are required',
    validate: (value: string) => {
      const result = validateLinkedInUrl(value)
      return result.isValid || result.message
    },
  },
  certificationTier: {
    required: 'Please select a certification tier',
  },
  agreeToTerms: {
    required: 'You must agree to the Terms of Service and Privacy Policy',
  },
  confirmAccuracy: {
    required: 'You must confirm the information is accurate',
  },
  agreeToReview: {
    required: 'You must agree to the annual review process',
  },
  understandCriteria: {
    required: 'You must confirm you understand the criteria',
  },
}

