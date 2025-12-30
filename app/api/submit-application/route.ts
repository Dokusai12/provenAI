import { NextResponse } from 'next/server'
import { sendApplicationEmail, sendApplicationConfirmationEmail } from '@/lib/email'
import type { ApplicationFormData } from '@/types'

export async function POST(request: Request) {
  const resendApiKey = process.env.RESEND_API_KEY
  const contactEmail = process.env.CONTACT_EMAIL
  
  try {
    let data: ApplicationFormData
    try {
      data = await request.json()
    } catch (jsonError) {
      console.error('Failed to parse JSON:', jsonError)
      return NextResponse.json(
        { error: 'Invalid request format' },
        { status: 400 }
      )
    }

    // Basic validation
    if (!data.companyName || !data.email || !data.contactName) {
      console.error('Validation failed: Missing required fields')
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Check if Resend API key is configured (check for both undefined and empty string)
    if (!resendApiKey || resendApiKey.trim() === '') {
      console.error('RESEND_API_KEY not configured')
      return NextResponse.json(
        { 
          error: 'Email service is not configured. Please contact support.',
          details: 'RESEND_API_KEY environment variable is missing. Please configure it in Vercel dashboard.'
        },
        { status: 500 }
      )
    }

    // Send email to admin
    const result = await sendApplicationEmail(data)

    if (!result.success) {
      console.error('Failed to send email:', result.error)
      return NextResponse.json(
        { error: result.error || 'Failed to send application' },
        { status: 500 }
      )
    }

    // Send confirmation email to user
    const confirmationResult = await sendApplicationConfirmationEmail(data)
    if (!confirmationResult.success) {
      console.warn('Failed to send confirmation email (non-critical):', confirmationResult.error)
      // Don't fail the request if confirmation email fails
    }
    return NextResponse.json({ 
      success: true, 
      message: 'Application submitted successfully' 
    })
  } catch (error: any) {
    console.error('Error processing application:', error)
    return NextResponse.json(
      { error: error?.message || 'Internal server error' },
      { status: 500 }
    )
  }
}

