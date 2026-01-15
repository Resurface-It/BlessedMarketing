'use client'

import { useState, useEffect } from 'react'
import { Badge } from '@/app/(components)/ui/Badge'
import { Button } from '@/app/(components)/ui/Button'
import { Card } from '@/app/(components)/ui/Card'

export function Hero() {
  const [scrollY, setScrollY] = useState(0)
  const fadeStart = 0
  const fadeEnd = 600 // pixels

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    
    // Set initial scroll position
    handleScroll()
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Calculate opacity values
  const svgOpacity = Math.max(0, Math.min(1, 1 - (scrollY - fadeStart) / (fadeEnd - fadeStart)))
  // Start content fade-in earlier so it's more visible when SVG fades out
  const contentFadeStart = 100
  const contentOpacity = Math.min(1, Math.max(0, (scrollY - contentFadeStart) / (fadeEnd - contentFadeStart)))

  return (
    <>
      {/* Fixed SVG Background */}
      <div
        className="fixed inset-0 w-full h-full z-0 transition-opacity duration-300 ease-out"
        style={{ opacity: svgOpacity }}
      >
        <img
          src="/hero-image.svg"
          alt=""
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
      </div>

      {/* Hero Content Section */}
      <section className="relative min-h-screen flex flex-col pt-64 pb-16 overflow-hidden">
        {/* Top spacer for better reading position when SVG fades */}
        <div className="h-[600px] flex-shrink-0" />
        <div className="flex-1 flex items-center">
          <div
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 transition-opacity duration-300 ease-out"
            style={{ opacity: contentOpacity }}
          >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div className="space-y-6">
              <Badge variant="primary">Done-for-you growth team</Badge>
              <h1 className="text-h1 md:text-display font-bold text-text-main leading-tight">
                Performance Marketing Agency That Treats Your Brand Like It's Their Own
              </h1>
              <p className="text-body-lg text-text-muted leading-relaxed">
                Blessed Marketing is your done-for-you performance marketing agency specializing in paid traffic management. We build and manage performance-driven campaigns on Meta, Google, and TikTok to deliver 3-5x ROAS. We handle the strategy, ads, and data — you get predictable growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button href="/apply" variant="primary" size="lg">
                  Apply to Work With Us
                </Button>
                <Button href="/contact" variant="ghost" size="lg">
                  Book a Strategy Call
                </Button>
              </div>
            </div>

            {/* Right Column - Stats Card */}
            <div className="lg:pl-8">
              <Card className="bg-[radial-gradient(circle_at_top,_rgba(0,122,255,0.08),_transparent_70%)] glow-soft">
                <div className="space-y-8">
                  <div>
                    <div className="text-body-sm text-text-muted mb-2 tracking-wide">AVERAGE ROAS</div>
                    <div className="text-4xl font-bold text-primary">4x - 8x</div>
                  </div>
                  <div className="border-t border-border pt-6">
                    <div className="text-body-sm text-text-muted mb-2 tracking-wide">AVERAGE ROI</div>
                    <div className="text-4xl font-bold text-text-main">6x / 600%</div>
                  </div>
                  <div className="border-t border-border pt-6">
                    <div className="text-body-sm text-text-muted mb-2 tracking-wide">CLIENT INDUSTRIES</div>
                    <div className="text-xl font-semibold text-text-main">
                      eCommerce · Local Services · Coaches
                    </div>
                  </div>
                  <div className="pt-4 text-tiny text-text-muted italic">
                    Real numbers from real client accounts.
                  </div>
                </div>
              </Card>
            </div>
          </div>
          </div>
        </div>
      </section>
    </>
  )
}

