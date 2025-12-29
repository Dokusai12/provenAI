import { Resend } from 'resend'
import type { ApplicationFormData, ContactFormData } from '@/types'
import { CONTACT_EMAIL } from './constants'

// Lazy initialization to avoid build-time errors
function getResend() {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey || apiKey.trim() === '') {
    console.error('RESEND_API_KEY is missing from environment variables')
    console.error('Available env vars:', Object.keys(process.env).filter(k => k.includes('RESEND')))
    throw new Error('RESEND_API_KEY is not configured')
  }
  try {
    return new Resend(apiKey)
  } catch (error) {
    console.error('Failed to initialize Resend:', error)
    throw error
  }
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
    console.log('Sending application email to:', contactEmail)
    
    // Send email and check response
    const result = await resend.emails.send({
      from: 'ProvenAI <onboarding@resend.dev>',
      to: contactEmail,
      replyTo: data.email,
      subject: `New Certification Application: ${data.companyName}`,
      text: emailContent,
    })

    console.log('Resend API response:', JSON.stringify(result, null, 2))

    // Check if Resend returned an error in the response
    if (result.error) {
      console.error('Resend API returned error:', result.error)
      const errorMessage = result.error.message || JSON.stringify(result.error) || 'Failed to send email'
      return { success: false, error: errorMessage }
    }

    // Verify we got a successful response
    if (!result.data || !result.data.id) {
      console.error('Unexpected response format from Resend:', result)
      return { success: false, error: 'Unexpected response from email service' }
    }

    console.log('✅ Application email sent successfully! ID:', result.data.id, 'to:', contactEmail)
    return { success: true, emailId: result.data.id }
  } catch (error: any) {
    console.error('❌ Exception sending application email:', error)
    console.error('Error details:', {
      message: error?.message,
      name: error?.name,
      stack: error?.stack,
      to: contactEmail,
    })
    const errorMessage = error?.message || error?.toString() || 'Failed to send email'
    return { success: false, error: errorMessage }
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

  // Escape HTML to prevent XSS
  const escapeHtml = (text: string) => {
    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;')
  }

  const htmlContent = `
    <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #000; font-size: 24px; margin-bottom: 20px;">New Contact Form Submission</h2>
      <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
        <p><strong>Subject:</strong> ${escapeHtml(data.subject)}</p>
        <p><strong>From:</strong> ${escapeHtml(data.name)} (${escapeHtml(data.email)})</p>
      </div>
      <div style="background: #f9f9f9; padding: 20px; border-radius: 8px;">
        <p><strong>Message:</strong></p>
        <p style="color: #333; line-height: 1.6;">${escapeHtml(data.message).replace(/\n/g, '<br>')}</p>
      </div>
      <p style="color: #333; margin-top: 20px;">
        <a href="mailto:${escapeHtml(data.email)}" style="color: #0066FF;">Reply to ${escapeHtml(data.email)}</a>
      </p>
    </div>
  `

  try {
    const resend = getResend()
    console.log('Sending email to:', contactEmail)
    console.log('From address: ProvenAI <onboarding@resend.dev>')
    
    // Send email and check response
    const result = await resend.emails.send({
      from: 'ProvenAI <onboarding@resend.dev>',
      to: contactEmail,
      replyTo: data.email,
      subject: `Contact Form: ${data.subject}`,
      html: htmlContent,
      text: emailContent,
    })

    console.log('Resend API response:', JSON.stringify(result, null, 2))

    // Check if Resend returned an error in the response
    if (result.error) {
      console.error('Resend API returned error:', result.error)
      const errorMessage = result.error.message || JSON.stringify(result.error) || 'Failed to send email'
      return { success: false, error: errorMessage }
    }

    // Verify we got a successful response
    if (!result.data || !result.data.id) {
      console.error('Unexpected response format from Resend:', result)
      return { success: false, error: 'Unexpected response from email service' }
    }

    console.log('✅ Email sent successfully! ID:', result.data.id, 'to:', contactEmail)
    return { success: true, emailId: result.data.id }
  } catch (error: any) {
    console.error('❌ Exception sending contact email:', error)
    console.error('Error details:', {
      message: error?.message,
      name: error?.name,
      stack: error?.stack,
      to: contactEmail,
    })
    const errorMessage = error?.message || error?.toString() || 'Failed to send email'
    return { success: false, error: errorMessage }
  }
}

