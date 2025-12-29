import { NextResponse } from 'next/server'
import { sendApplicationEmail } from '@/lib/email'
import type { ApplicationFormData } from '@/types'

export async function POST(request: Request) {
  try {
    const data: ApplicationFormData = await request.json()

    // Basic validation
    if (!data.companyName || !data.email || !data.contactName) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Send email
    const result = await sendApplicationEmail(data)

    if (!result.success) {
      return NextResponse.json(
        { error: result.error || 'Failed to send application' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error processing application:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

