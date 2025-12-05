import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Basic validation
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Log the submission (in production, you'd send an email or save to a database)
    console.log('Contact form submission:', {
      name: body.name,
      email: body.email,
      company: body.company || 'N/A',
      website: body.website || 'N/A',
      budget: body.budget || 'N/A',
      message: body.message,
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json({ ok: true, message: 'Message received' })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

