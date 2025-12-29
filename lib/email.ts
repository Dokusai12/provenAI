import { Resend } from 'resend'
import type { ApplicationFormData, ContactFormData } from '@/types'
import { CONTACT_EMAIL } from './constants'

// Lazy initialization to avoid build-time errors
function getResend() {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    throw new Error('RESEND_API_KEY is not configured')
  }
  return new Resend(apiKey)
}

export async function sendApplicationEmail(data: ApplicationFormData) {
  const contactEmail = process.env.CONTACT_EMAIL || CONTACT_EMAIL

  const emailContent = `
New Certification Application

Company Information:
- Company Name: ${data.companyName}
- Website: ${data.website}
- Type: ${data.companyType}
- Size: ${data.companySize}
- Year Founded: ${data.yearFounded || 'N/A'}
- Location: ${data.location}

Contact Information:
- Name: ${data.contactName}
- Email: ${data.email}
- Phone: ${data.phone || 'N/A'}
- Role: ${data.role}

Technical Details:
- AI Services Description: ${data.aiServicesDescription}
- AI Technologies: ${data.aiTechnologies}
- Technical Team Size: ${data.technicalTeamSize}
- Portfolio Links: ${data.portfolioLinks.filter(Boolean).join(', ') || 'None provided'}

Supporting Materials:
- LinkedIn Profiles: ${data.linkedInProfiles}
- Client Testimonials: ${data.clientTestimonials || 'None provided'}
- Additional Info: ${data.additionalInfo || 'None provided'}

Certification Tier: ${data.certificationTier}

Terms Accepted:
- Information Accuracy: ${data.confirmAccuracy ? 'Yes' : 'No'}
- Annual Review: ${data.agreeToReview ? 'Yes' : 'No'}
- Understand Criteria: ${data.understandCriteria ? 'Yes' : 'No'}
`

  try {
    const resend = getResend()
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: contactEmail,
      replyTo: data.email,
      subject: `New Certification Application: ${data.companyName}`,
      text: emailContent,
    })

    return { success: true }
  } catch (error) {
    console.error('Error sending application email:', error)
    return { success: false, error: 'Failed to send email' }
  }
}

export async function sendContactEmail(data: ContactFormData) {
  const contactEmail = process.env.CONTACT_EMAIL || CONTACT_EMAIL

  const emailContent = `
New Contact Form Submission

Subject: ${data.subject}
From: ${data.name} (${data.email})

Message:
${data.message}
`

  const htmlContent = `
    <h2>New Contact Form Submission</h2>
    <p><strong>Subject:</strong> ${data.subject}</p>
    <p><strong>From:</strong> ${data.name} (${data.email})</p>
    <h3>Message:</h3>
    <p>${data.message.replace(/\n/g, '<br>')}</p>
  `

  try {
    const resend = getResend()
    console.log('Sending email to:', contactEmail)
    console.log('From:', 'onboarding@resend.dev')
    
    const result = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: contactEmail,
      replyTo: data.email,
      subject: `Contact Form: ${data.subject}`,
      html: htmlContent,
      text: emailContent,
    })

    console.log('Resend response:', JSON.stringify(result, null, 2))

    if (result.error) {
      console.error('Resend API error:', result.error)
      const errorMessage = result.error.message || JSON.stringify(result.error) || 'Failed to send email'
      return { success: false, error: errorMessage }
    }

    if (!result.data) {
      console.error('Unexpected response format:', result)
      return { success: false, error: 'Unexpected response from email service' }
    }

    console.log('Email sent successfully, ID:', result.data.id)
    return { success: true }
  } catch (error: any) {
    console.error('Error sending contact email:', error)
    const errorMessage = error?.message || error?.toString() || 'Failed to send email'
    return { success: false, error: errorMessage }
  }
}

