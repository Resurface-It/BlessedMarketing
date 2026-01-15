import { Button } from '@/app/(components)/ui/Button'

export function CTABand() {
  return (
    <section className="py-20 bg-[radial-gradient(circle_at_center,_rgba(0,122,255,0.12),_transparent_70%)] border-y border-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-h2 md:text-h1 font-bold text-text-main mb-4">
          Ready to stop guessing and start scaling?
        </h2>
        <p className="text-body-lg text-text-muted mb-8 max-w-2xl mx-auto">
          Apply to work with Blessed Marketing and we'll review your brand, funnel, and numbers to see if we're a fit. Learn more about our <a href="/services" className="text-primary hover:text-primary-light underline transition-colors">marketing services</a> or see our <a href="/process" className="text-primary hover:text-primary-light underline transition-colors">proven process</a>.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/contact" variant="primary" size="lg">
            Apply Now
          </Button>
          <Button href="/contact" variant="ghost" size="lg">
            Or contact us
          </Button>
        </div>
      </div>
    </section>
  )
}

