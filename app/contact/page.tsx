'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { SectionHeader } from '@/app/(components)/ui/SectionHeader'
import { Card } from '@/app/(components)/ui/Card'
import { Button } from '@/app/(components)/ui/Button'
import { FAQAccordion } from '@/app/(components)/ui/FAQAccordion'
import { Breadcrumbs } from '@/app/(components)/seo/Breadcrumbs'
import { faqs } from '@/lib/data'

const contactFAQs = faqs.slice(0, 3)

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    website: '',
    budget: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [lastSubmitTime, setLastSubmitTime] = useState(0)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Rate limiting: prevent resubmission for 10 seconds
    const now = Date.now()
    if (now - lastSubmitTime < 10000) {
      setErrorMessage('Please wait a moment before submitting again.')
      return
    }

    setStatus('loading')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to submit form')
      }

      setStatus('success')
      setLastSubmitTime(now)
      setFormData({
        name: '',
        email: '',
        company: '',
        website: '',
        budget: '',
        message: '',
      })
    } catch (error) {
      setStatus('error')
      setErrorMessage('Something went wrong. Please try again or email us directly.')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumbs items={[{ name: 'Contact', href: '/contact' }]} />
      </div>
      {/* Hero */}
      <section className="py-20 bg-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Let's talk about your growth"
            description="Share where you are now, where you want to go, and we'll get back with a short loom or email outline."
          />
        </div>
      </section>

      {/* Form */}
      <section className="py-20 bg-bg-elevated">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            {status === 'success' ? (
              <div className="text-center py-8">
                <div className="text-4xl mb-4">✓</div>
                <h3 className="text-2xl font-bold text-text-main mb-2">Message sent!</h3>
                <p className="text-text-muted">
                  We'll get back to you within 1-2 business days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-main mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-bg border border-border-subtle rounded-lg text-text-main focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-main mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-bg border border-border-subtle rounded-lg text-text-main focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-text-main mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-bg border border-border-subtle rounded-lg text-text-main focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="website" className="block text-sm font-medium text-text-main mb-2">
                    Website
                  </label>
                  <input
                    type="url"
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-bg border border-border-subtle rounded-lg text-text-main focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-text-main mb-2">
                    Monthly ad budget
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-bg border border-border-subtle rounded-lg text-text-main focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Select budget range</option>
                    <option value="0-5k">$0 - $5,000</option>
                    <option value="5k-10k">$5,000 - $10,000</option>
                    <option value="10k-25k">$10,000 - $25,000</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value="50k+">$50,000+</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-main mb-2">
                    Message / Context *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-bg border border-border-subtle rounded-lg text-text-main focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  />
                </div>

                {errorMessage && (
                  <div className="text-red-400 text-sm">{errorMessage}</div>
                )}

                <Button
                  type="submit"
                  variant="primary"
                  className="w-full"
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            )}
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-bg">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Common questions"
            description="Quick answers to help you decide if we're a fit."
          />
          <FAQAccordion faqs={contactFAQs} />
        </div>
      </section>
    </div>
  )
}

