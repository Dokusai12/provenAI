import { NextResponse } from 'next/server'
import { sendContactEmail } from '@/lib/email'
import type { ContactFormData } from '@/types'

export async function POST(request: Request) {
  try {
    const data: ContactFormData = await request.json()

    // Basic validation
    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Send email
    const result = await sendContactEmail(data)

    if (!result.success) {
      return NextResponse.json(
        { error: result.error || 'Failed to send message' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

