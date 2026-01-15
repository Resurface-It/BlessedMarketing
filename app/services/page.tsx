'use client'

import { motion } from 'framer-motion'
import { SectionHeader } from '@/app/(components)/ui/SectionHeader'
import { Card } from '@/app/(components)/ui/Card'
import { Button } from '@/app/(components)/ui/Button'
import { Breadcrumbs } from '@/app/(components)/seo/Breadcrumbs'
import { services } from '@/lib/data'
import { FiTrendingUp, FiTarget, FiLayers, FiBarChart2 } from 'react-icons/fi'

const icons = [FiTrendingUp, FiTarget, FiLayers, FiBarChart2]

export default function ServicesPage() {
  return (
    <div className="pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumbs items={[{ name: 'Services', href: '/services' }]} />
      </div>
      {/* Intro */}
      <section className="py-20 bg-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Everything you need to turn attention into revenue — in one team"
            description="We handle the full stack of performance marketing including paid traffic management, funnel optimization, creative strategy, and analytics. Our done-for-you marketing services help you focus on what you do best while we scale your paid advertising campaigns."
          />
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 bg-bg-elevated">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => {
              const Icon = icons[index]
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <Card>
                    <div className="flex items-start gap-6 mb-6">
                      <div className="p-4 bg-bg-surface rounded-md border border-border">
                        <Icon className="text-primary" size={32} />
                      </div>
                      <div className="flex-1">
                        <h2 className="text-h2 font-bold text-text-main mb-3">{service.title} - Performance Marketing Service</h2>
                        <p className="text-body-lg text-text-muted mb-6">{service.tagline}</p>
                        <div className="space-y-4">
                          <div>
                            <h3 className="text-h5 font-semibold text-text-main mb-3">What's included:</h3>
                            <ul className="space-y-2">
                              {service.bullets.map((bullet, i) => (
                                <li key={i} className="text-text-muted text-body-sm flex items-start gap-2">
                                  <span className="text-primary mt-1">•</span>
                                  <span>{bullet}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          {index === 0 && (
                            <div className="pt-4 border-t border-border">
                              <p className="text-body-sm text-text-muted">
                                <strong className="text-text-main">Platforms:</strong> {service.platforms?.join(', ')}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card>
              <h3 className="text-h4 font-bold text-text-main mb-3">Funnels & Landing Pages</h3>
              <p className="text-text-muted mb-4">
                Types: lead gen funnels, webinar funnels, ecom landing pages.
              </p>
              <ul className="space-y-2 text-body-sm text-text-muted">
                <li>• Landing page design and optimization</li>
                <li>• Funnel mapping and sequencing</li>
                <li>• A/B testing and conversion optimization</li>
              </ul>
            </Card>
            <Card>
              <h3 className="text-h4 font-bold text-text-main mb-3">Creative Strategy</h3>
              <p className="text-text-muted mb-4">
                Hooks, angles, storyboarding for UGC, ad scripts.
              </p>
              <ul className="space-y-2 text-body-sm text-text-muted">
                <li>• Hook development and testing</li>
                <li>• Creative briefs and direction</li>
                <li>• UGC and video production guidance</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-bg-elevated">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-h2 font-bold text-text-main mb-4">
            Ready to work with us?
          </h2>
          <p className="text-body-lg text-text-muted mb-8">
            Apply to work with Blessed Marketing and we'll review your brand, funnel, and numbers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="primary">
              Apply Now
            </Button>
            <Button href="/contact" variant="ghost">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

