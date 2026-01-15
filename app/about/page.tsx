import type { Metadata } from 'next'
import { SectionHeader } from '@/app/(components)/ui/SectionHeader'
import { Card } from '@/app/(components)/ui/Card'
import { Breadcrumbs } from '@/app/(components)/seo/Breadcrumbs'
import { values } from '@/lib/data'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'About Us | Performance Marketing Agency | Blessed Marketing',
  description: 'Learn about Blessed Marketing: a performance marketing agency built on radical ownership, hard work, and long-term thinking. We treat your ad spend like it\'s our own.',
  keywords: [
    'about marketing agency',
    'performance marketing agency',
    'marketing agency mission',
    'marketing agency values',
    'who we serve',
  ],
  openGraph: {
    title: 'About Us | Performance Marketing Agency | Blessed Marketing',
    description: 'Learn about our mission to help brands scale through performance-driven marketing. We treat your ad spend like it\'s our own.',
    url: `${SITE_URL}/about`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | Blessed Marketing',
    description: 'Performance marketing agency built on radical ownership and results.',
  },
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
}

export default function AboutPage() {
  return (
    <div className="pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumbs items={[{ name: 'About', href: '/about' }]} />
      </div>
      {/* Mission & Philosophy */}
      <section className="py-20 bg-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Growth is our craft. Stewardship is our standard."
            description="We treat your ad spend like it's our own."
          />
          <div className="space-y-6 text-text-muted leading-relaxed">
            <p>
              Blessed Marketing was founded on a simple principle: treat every dollar of ad spend like it's our own. 
              We don't believe in busywork, vanity metrics, or long-term contracts that lock you in. We believe in 
              results, transparency, and earning your business every single month. As a <a href="/services" className="text-primary hover:text-primary-light underline transition-colors">performance marketing agency</a>, we specialize in <a href="/services" className="text-primary hover:text-primary-light underline transition-colors">paid traffic management</a> and ROAS optimization.
            </p>
            <p>
              Our team lives in your numbers. We monitor campaigns daily, test constantly, and scale what works. 
              We cut what doesn't. No excuses, no fluff—just clear communication about what's moving the needle and 
              what we're doing to improve it. See our <a href="/process" className="text-primary hover:text-primary-light underline transition-colors">marketing process</a> to understand how we deliver results.
            </p>
            <p>
              We focus on stewardship: of your budget, your time, and your attention. That means we only take on 
              clients we can genuinely help, and we structure our fees around performance, not busywork. Check out our <a href="/pricing" className="text-primary hover:text-primary-light underline transition-colors">transparent pricing</a> to see how we align our success with yours.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-20 bg-bg-elevated">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Who we serve"
            description="We work with brands that are ready to scale and have the budget to do it right."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Ecommerce Brands',
                description: 'DTC brands selling physical products online. We help you scale profitably across Meta, Google, and TikTok.',
              },
              {
                title: 'Local Service Businesses',
                description: 'HVAC, plumbing, home services, and other local businesses looking to dominate their market with paid traffic.',
              },
              {
                title: 'Info Products & Coaches',
                description: 'Online courses, coaching programs, and digital products. We build funnels and drive traffic that converts.',
              },
            ].map((item, index) => (
              <Card key={item.title}>
                <h3 className="text-h4 font-bold text-text-main mb-3">{item.title}</h3>
                <p className="text-text-muted">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Our team"
            description="Built by marketers who've been in the trenches."
          />
          <Card>
            <div className="space-y-4">
              <div>
                <h3 className="text-h2 font-bold text-text-main mb-2">Founder Name</h3>
                <p className="text-primary font-medium mb-4">Founder & Lead Strategist</p>
              </div>
              <p className="text-text-muted leading-relaxed">
                [Short bio placeholder] With over X years in performance marketing, I've managed millions in ad spend 
                and helped dozens of brands scale profitably. I started Blessed Marketing because I was tired of seeing 
                agencies prioritize their own growth over client results.
              </p>
              <div className="pt-4 border-t border-border">
                <h4 className="text-h5 font-semibold text-text-main mb-2">Why I started Blessed Marketing</h4>
                <p className="text-text-muted leading-relaxed">
                  After years of working with agencies that cared more about billable hours than client outcomes, 
                  I decided to build something different. Blessed Marketing is built on radical ownership, hard work, 
                  and long-term thinking. We're here to help you scale, not to pad our retainer.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-bg-elevated">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Our values"
            description="The principles that guide everything we do."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card key={value.title}>
                <h3 className="text-h4 font-bold text-text-main mb-3">{value.title}</h3>
                <p className="text-text-muted">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

