import { NextResponse } from 'next/server'
import { sendApplicationEmail } from '@/lib/email'
import type { ApplicationFormData } from '@/types'

export async function POST(request: Request) {
  console.log('=== Application Form API Called ===')
  console.log('RESEND_API_KEY:', process.env.RESEND_API_KEY ? 'SET' : 'NOT SET')
  console.log('CONTACT_EMAIL:', process.env.CONTACT_EMAIL || 'NOT SET')
  
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

    console.log('Form data received:', { 
      companyName: data.companyName, 
      email: data.email, 
      contactName: data.contactName 
    })

    // Basic validation
    if (!data.companyName || !data.email || !data.contactName) {
      console.error('Validation failed: Missing required fields')
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY not configured')
      return NextResponse.json(
        { error: 'Email service is not configured. Please contact support.' },
        { status: 500 }
      )
    }

    console.log('Calling sendApplicationEmail...')
    // Send email
    const result = await sendApplicationEmail(data)
    console.log('sendApplicationEmail result:', result)

    if (!result.success) {
      console.error('Failed to send email:', result.error)
      return NextResponse.json(
        { error: result.error || 'Failed to send application' },
        { status: 500 }
      )
    }

    console.log('✅ Application submitted successfully!')
    return NextResponse.json({ 
      success: true, 
      message: 'Application submitted successfully' 
    })
  } catch (error: any) {
    console.error('❌ Error processing application:', error)
    console.error('Error stack:', error?.stack)
    return NextResponse.json(
      { error: error?.message || 'Internal server error' },
      { status: 500 }
    )
  }
}

