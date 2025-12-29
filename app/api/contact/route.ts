import { NextResponse } from 'next/server'
import { sendContactEmail } from '@/lib/email'
import type { ContactFormData } from '@/types'

export async function POST(request: Request) {
  console.log('=== Contact Form API Called ===')
  console.log('RESEND_API_KEY:', process.env.RESEND_API_KEY ? 'SET' : 'NOT SET')
  console.log('CONTACT_EMAIL:', process.env.CONTACT_EMAIL || 'NOT SET')
  
  try {
    let data: ContactFormData
    try {
      data = await request.json()
    } catch (jsonError) {
      console.error('Failed to parse JSON:', jsonError)
      return NextResponse.json(
        { error: 'Invalid request format' },
        { status: 400 }
      )
    }
    
    console.log('Form data received:', { name: data.name, email: data.email, subject: data.subject })

    // Basic validation
    if (!data.name || !data.email || !data.message) {
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

    console.log('Calling sendContactEmail...')
    // Send email
    const result = await sendContactEmail(data)
    console.log('sendContactEmail result:', result)

    if (!result.success) {
      console.error('Failed to send email:', result.error)
      return NextResponse.json(
        { error: result.error || 'Failed to send message' },
        { status: 500 }
      )
    }

    console.log('✅ Email sent successfully!')
    return NextResponse.json(
      { success: true, message: 'Message sent successfully' },
      { status: 200 }
    )
  } catch (error: any) {
    console.error('❌ Error processing contact form:', error)
    console.error('Error stack:', error?.stack)
    return NextResponse.json(
      { error: error?.message || 'Internal server error' },
      { status: 500 }
    )
  }
}

