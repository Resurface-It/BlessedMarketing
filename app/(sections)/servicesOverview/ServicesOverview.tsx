'use client'

import { motion } from 'framer-motion'
import { FiTrendingUp, FiTarget, FiLayers, FiBarChart2 } from 'react-icons/fi'
import { Card } from '@/app/(components)/ui/Card'
import { SectionHeader } from '@/app/(components)/ui/SectionHeader'
import { Button } from '@/app/(components)/ui/Button'
import { services } from '@/lib/data'

const icons = [FiTrendingUp, FiTarget, FiLayers, FiBarChart2]

export function ServicesOverview() {
  return (
    <section className="py-20 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Everything you need to turn attention into revenue"
          description="We handle the full stack of performance marketing including paid traffic management, ROAS optimization, and done-for-you marketing services. Our performance marketing agency helps you focus on what you do best while we scale your campaigns."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {services.map((service, index) => {
            const Icon = icons[index]
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-bg-surface rounded-md border border-border">
                      <Icon className="text-primary" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-h4 font-bold text-text-main mb-2">{service.title}</h3>
                      <p className="text-text-muted mb-4">{service.tagline}</p>
                      <ul className="space-y-2">
                        {service.bullets.map((bullet, i) => (
                          <li key={i} className="text-body-sm text-text-muted flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>

        <div className="text-center">
          <Button href="/services" variant="secondary">
            See all services →
          </Button>
        </div>
      </div>
    </section>
  )
}

