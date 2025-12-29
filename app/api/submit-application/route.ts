import { NextResponse } from 'next/server'
import { sendApplicationEmail } from '@/lib/email'
import type { ApplicationFormData } from '@/types'

export async function POST(request: Request) {
  console.log('=== Application Form API Called ===')
  
  // More detailed environment variable checking
  const resendApiKey = process.env.RESEND_API_KEY
  const contactEmail = process.env.CONTACT_EMAIL
  
  console.log('Environment check:')
  console.log('- RESEND_API_KEY exists:', !!resendApiKey)
  console.log('- RESEND_API_KEY length:', resendApiKey?.length || 0)
  console.log('- RESEND_API_KEY starts with "re_":', resendApiKey?.startsWith('re_') || false)
  console.log('- CONTACT_EMAIL:', contactEmail || 'NOT SET')
  console.log('- All env vars:', Object.keys(process.env).filter(k => k.includes('RESEND') || k.includes('CONTACT')))
  
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

    // Check if Resend API key is configured (check for both undefined and empty string)
    if (!resendApiKey || resendApiKey.trim() === '') {
      console.error('❌ RESEND_API_KEY not configured or empty')
      console.error('This means the environment variable is not set in Vercel.')
      console.error('Please go to Vercel Dashboard → Settings → Environment Variables')
      console.error('And add: RESEND_API_KEY = re_ZtbdUFUT_CkYUAqgpYk3n9rwpp8tZxvQP')
      return NextResponse.json(
        { 
          error: 'Email service is not configured. Please contact support.',
          details: 'RESEND_API_KEY environment variable is missing. Please configure it in Vercel dashboard.'
        },
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

