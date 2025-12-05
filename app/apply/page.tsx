'use client'

import { useState } from 'react'
import { SectionHeader } from '@/app/(components)/ui/SectionHeader'
import { Card } from '@/app/(components)/ui/Card'
import { Button } from '@/app/(components)/ui/Button'
import { Breadcrumbs } from '@/app/(components)/seo/Breadcrumbs'

export default function ApplyPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    website: '',
    revenue: '',
    adSpend: '',
    platforms: [] as string[],
    bottleneck: '',
    success: '',
    startTime: '',
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
      const response = await fetch('/api/apply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to submit application')
      }

      setStatus('success')
      setLastSubmitTime(now)
    } catch (error) {
      setStatus('error')
      setErrorMessage('Something went wrong. Please try again or email us directly.')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleCheckboxChange = (platform: string) => {
    setFormData({
      ...formData,
      platforms: formData.platforms.includes(platform)
        ? formData.platforms.filter((p) => p !== platform)
        : [...formData.platforms, platform],
    })
  }

  return (
    <div className="pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumbs items={[{ name: 'Apply', href: '/apply' }]} />
      </div>
      {/* Hero */}
      <section className="py-20 bg-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader
            title="Apply to work with Blessed Marketing"
            description="We work with a limited number of brands at a time to protect focus and results."
          />
        </div>
      </section>

      {/* Form */}
      <section className="py-20 bg-bg-elevated">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            {status === 'success' ? (
              <div className="text-center py-12">
                <div className="text-5xl mb-6">✓</div>
                <h3 className="text-3xl font-bold text-text-main mb-4">Thanks—your application is in review</h3>
                <p className="text-lg text-text-muted">
                  We'll respond within 1–2 business days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-text-main mb-2">
                      Company *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-bg border border-border-subtle rounded-lg text-text-main focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="website" className="block text-sm font-medium text-text-main mb-2">
                      Website *
                    </label>
                    <input
                      type="url"
                      id="website"
                      name="website"
                      required
                      value={formData.website}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-bg border border-border-subtle rounded-lg text-text-main focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="revenue" className="block text-sm font-medium text-text-main mb-2">
                      Monthly revenue range *
                    </label>
                    <select
                      id="revenue"
                      name="revenue"
                      required
                      value={formData.revenue}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-bg border border-border-subtle rounded-lg text-text-main focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Select range</option>
                      <option value="0-10k">$0 - $10,000</option>
                      <option value="10k-50k">$10,000 - $50,000</option>
                      <option value="50k-100k">$50,000 - $100,000</option>
                      <option value="100k-500k">$100,000 - $500,000</option>
                      <option value="500k+">$500,000+</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="adSpend" className="block text-sm font-medium text-text-main mb-2">
                      Current monthly ad spend *
                    </label>
                    <select
                      id="adSpend"
                      name="adSpend"
                      required
                      value={formData.adSpend}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-bg border border-border-subtle rounded-lg text-text-main focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Select range</option>
                      <option value="0-5k">$0 - $5,000</option>
                      <option value="5k-10k">$5,000 - $10,000</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="50k+">$50,000+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-main mb-3">
                    Platforms you're running ads on *
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {['Meta', 'Google', 'TikTok', 'Other'].map((platform) => (
                      <label
                        key={platform}
                        className="flex items-center space-x-2 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={formData.platforms.includes(platform)}
                          onChange={() => handleCheckboxChange(platform)}
                          className="w-4 h-4 text-primary bg-bg border-border-subtle rounded focus:ring-primary"
                        />
                        <span className="text-text-muted">{platform}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="bottleneck" className="block text-sm font-medium text-text-main mb-2">
                    Biggest growth bottleneck *
                  </label>
                  <textarea
                    id="bottleneck"
                    name="bottleneck"
                    required
                    rows={4}
                    value={formData.bottleneck}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-bg border border-border-subtle rounded-lg text-text-main focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  />
                </div>

                <div>
                  <label htmlFor="success" className="block text-sm font-medium text-text-main mb-2">
                    What does success look like in 6–12 months? *
                  </label>
                  <textarea
                    id="success"
                    name="success"
                    required
                    rows={4}
                    value={formData.success}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-bg border border-border-subtle rounded-lg text-text-main focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  />
                </div>

                <div>
                  <label htmlFor="startTime" className="block text-sm font-medium text-text-main mb-2">
                    When are you hoping to start? *
                  </label>
                  <select
                    id="startTime"
                    name="startTime"
                    required
                    value={formData.startTime}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-bg border border-border-subtle rounded-lg text-text-main focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Select timeline</option>
                    <option value="asap">ASAP</option>
                    <option value="1-3months">1–3 months</option>
                    <option value="3+months">3+ months</option>
                  </select>
                </div>

                {errorMessage && (
                  <div className="text-red-400 text-sm">{errorMessage}</div>
                )}

                <Button
                  type="submit"
                  variant="primary"
                  className="w-full text-lg py-4"
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? 'Submitting...' : 'Submit Application'}
                </Button>
              </form>
            )}
          </Card>
        </div>
      </section>
    </div>
  )
}

