import { NextResponse } from 'next/server'
import { sendSamplePackRequestEmail } from '@/lib/email'

export async function POST(request: Request) {
  try {
    const data = await request.json()

    // Honeypot check
    if (data.honeypot) {
      return NextResponse.json({ success: true }) // Silent fail for bots
    }

    // Basic validation
    if (!data.email || !data.companyName || !data.website || !data.industry || !data.aiUsage || !data.region) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Send email
    const result = await sendSamplePackRequestEmail(data)

    if (!result.success) {
      return NextResponse.json(
        { error: result.error || 'Failed to send request' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error processing sample pack request:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

