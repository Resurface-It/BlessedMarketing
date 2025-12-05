import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Basic validation
    const requiredFields = ['name', 'email', 'company', 'website', 'revenue', 'adSpend', 'bottleneck', 'success', 'startTime']
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        )
      }
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // URL validation
    try {
      new URL(body.website)
    } catch {
      return NextResponse.json(
        { error: 'Invalid website URL' },
        { status: 400 }
      )
    }

    // Log the submission (in production, you'd send an email or save to a database)
    console.log('Application form submission:', {
      name: body.name,
      email: body.email,
      company: body.company,
      website: body.website,
      revenue: body.revenue,
      adSpend: body.adSpend,
      platforms: body.platforms || [],
      bottleneck: body.bottleneck,
      success: body.success,
      startTime: body.startTime,
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json({ ok: true, message: 'Application received' })
  } catch (error) {
    console.error('Application form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

