import { Resend } from 'resend'
import type { ApplicationFormData, ContactFormData } from '@/types'
import { CONTACT_EMAIL } from './constants'

// Escape HTML to prevent XSS
function escapeHtml(text: string) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

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

export async function sendContactConfirmationEmail(data: ContactFormData) {
  try {
    const resend = getResend()
    console.log('Sending contact confirmation email to:', data.email)
    
    const htmlContent = `
      <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 8px 8px 0 0; text-align: center;">
          <h1 style="color: #ffffff; font-size: 28px; margin: 0;">Thank You for Contacting Us!</h1>
        </div>
        <div style="background: #ffffff; padding: 30px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px;">
          <p style="color: #333; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
            Hi ${escapeHtml(data.name)},
          </p>
          <p style="color: #333; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
            We've received your message and will get back to you as soon as possible.
          </p>
          <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="color: #666; font-size: 14px; margin: 0 0 10px 0;"><strong>Subject:</strong></p>
            <p style="color: #333; font-size: 16px; margin: 0;">${escapeHtml(data.subject)}</p>
          </div>
          <p style="color: #333; font-size: 16px; line-height: 1.6; margin: 20px 0;">
            Our team typically responds within 24-48 hours. If your inquiry is urgent, please don't hesitate to reach out directly.
          </p>
          <p style="color: #333; font-size: 16px; line-height: 1.6; margin: 20px 0 0 0;">
            Best regards,<br>
            <strong>The ProvenAI Team</strong>
          </p>
        </div>
        <div style="text-align: center; margin-top: 20px; color: #666; font-size: 12px;">
          <p style="margin: 0;">This is an automated confirmation email. Please do not reply to this message.</p>
        </div>
      </div>
    `

    const textContent = `
Thank You for Contacting ProvenAI!

Hi ${data.name},

We've received your message and will get back to you as soon as possible.

Subject: ${data.subject}

Our team typically responds within 24-48 hours. If your inquiry is urgent, please don't hesitate to reach out directly.

Best regards,
The ProvenAI Team

---
This is an automated confirmation email. Please do not reply to this message.
    `

    const result = await resend.emails.send({
      from: 'ProvenAI <onboarding@resend.dev>',
      to: data.email,
      subject: `We've received your message - ${data.subject}`,
      html: htmlContent,
      text: textContent,
    })

    if (result.error) {
      console.error('Failed to send contact confirmation email:', result.error)
      return { success: false, error: result.error.message }
    }

    console.log('✅ Contact confirmation email sent to:', data.email)
    return { success: true, emailId: result.data?.id }
  } catch (error: any) {
    console.error('Error sending contact confirmation email:', error)
    return { success: false, error: error?.message || 'Failed to send confirmation email' }
  }
}

export async function sendApplicationConfirmationEmail(data: ApplicationFormData) {
  try {
    const resend = getResend()
    console.log('Sending application confirmation email to:', data.email)
    
    const htmlContent = `
      <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 8px 8px 0 0; text-align: center;">
          <h1 style="color: #ffffff; font-size: 28px; margin: 0;">Application Received!</h1>
        </div>
        <div style="background: #ffffff; padding: 30px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px;">
          <p style="color: #333; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
            Hi ${escapeHtml(data.contactName)},
          </p>
          <p style="color: #333; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
            Thank you for applying for ProvenAI certification! We've successfully received your application for <strong>${escapeHtml(data.companyName)}</strong>.
          </p>
          <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="color: #666; font-size: 14px; margin: 0 0 10px 0;"><strong>Application Details:</strong></p>
            <p style="color: #333; font-size: 14px; margin: 5px 0;"><strong>Company:</strong> ${escapeHtml(data.companyName)}</p>
            <p style="color: #333; font-size: 14px; margin: 5px 0;"><strong>Certification Tier:</strong> ${escapeHtml(data.certificationTier)}</p>
            <p style="color: #333; font-size: 14px; margin: 5px 0;"><strong>Application Date:</strong> ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>
          <p style="color: #333; font-size: 16px; line-height: 1.6; margin: 20px 0;">
            Our team will review your application and get back to you within 5-7 business days. We may contact you if we need any additional information.
          </p>
          <p style="color: #333; font-size: 16px; line-height: 1.6; margin: 20px 0;">
            In the meantime, if you have any questions, feel free to reach out to us.
          </p>
          <p style="color: #333; font-size: 16px; line-height: 1.6; margin: 20px 0 0 0;">
            Best regards,<br>
            <strong>The ProvenAI Team</strong>
          </p>
        </div>
        <div style="text-align: center; margin-top: 20px; color: #666; font-size: 12px;">
          <p style="margin: 0;">This is an automated confirmation email. Please do not reply to this message.</p>
        </div>
      </div>
    `

    const textContent = `
Application Received - ProvenAI Certification

Hi ${data.contactName},

Thank you for applying for ProvenAI certification! We've successfully received your application for ${data.companyName}.

Application Details:
- Company: ${data.companyName}
- Certification Tier: ${data.certificationTier}
- Application Date: ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}

Our team will review your application and get back to you within 5-7 business days. We may contact you if we need any additional information.

In the meantime, if you have any questions, feel free to reach out to us.

Best regards,
The ProvenAI Team

---
This is an automated confirmation email. Please do not reply to this message.
    `

    const result = await resend.emails.send({
      from: 'ProvenAI <onboarding@resend.dev>',
      to: data.email,
      subject: `Application Received - ${data.companyName} Certification`,
      html: htmlContent,
      text: textContent,
    })

    if (result.error) {
      console.error('Failed to send application confirmation email:', result.error)
      return { success: false, error: result.error.message }
    }

    console.log('✅ Application confirmation email sent to:', data.email)
    return { success: true, emailId: result.data?.id }
  } catch (error: any) {
    console.error('Error sending application confirmation email:', error)
    return { success: false, error: error?.message || 'Failed to send confirmation email' }
  }
}

