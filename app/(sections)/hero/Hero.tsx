'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/app/(components)/ui/Badge'
import { Button } from '@/app/(components)/ui/Button'
import { Card } from '@/app/(components)/ui/Card'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_55%)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <Badge>Done-for-you growth team</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-main leading-tight">
              Performance Marketing Agency That Treats Your Brand Like It's Their Own
            </h1>
            <p className="text-lg md:text-xl text-text-muted leading-relaxed">
              Blessed Marketing is your done-for-you performance marketing agency specializing in paid traffic management. We build and manage performance-driven campaigns on Meta, Google, and TikTok to deliver 3-5x ROAS. We handle the strategy, ads, and data — you get predictable growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button href="/apply" variant="primary" className="text-lg px-8 py-4">
                Apply to Work With Us
              </Button>
              <Button href="/contact" variant="ghost" className="text-lg px-8 py-4">
                Book a Strategy Call
              </Button>
            </div>
          </motion.div>

          {/* Right Column - Stats Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:pl-8"
          >
            <Card className="bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.12),_transparent_70%)]">
              <div className="space-y-8">
                <div>
                  <div className="text-sm text-text-muted mb-2">AVERAGE ROAS</div>
                  <div className="text-4xl font-bold text-primary">4x - 8x</div>
                </div>
                <div className="border-t border-border-subtle pt-6">
                  <div className="text-sm text-text-muted mb-2">AVERAGE ROI</div>
                  <div className="text-4xl font-bold text-text-main">6x / 600%</div>
                </div>
                <div className="border-t border-border-subtle pt-6">
                  <div className="text-sm text-text-muted mb-2">CLIENT INDUSTRIES</div>
                  <div className="text-xl font-semibold text-text-main">
                    eCommerce · Local Services · Coaches
                  </div>
                </div>
                <div className="pt-4 text-xs text-text-muted italic">
                  Real numbers from real client accounts.
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

