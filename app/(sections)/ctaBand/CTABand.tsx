import { Button } from '@/app/(components)/ui/Button'

export function CTABand() {
  return (
    <section className="py-20 bg-[radial-gradient(circle_at_center,_rgba(56,189,248,0.15),_transparent_70%)] border-y border-border-subtle">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-4">
          Ready to stop guessing and start scaling?
        </h2>
        <p className="text-lg text-text-muted mb-8 max-w-2xl mx-auto">
          Apply to work with Blessed Marketing and we'll review your brand, funnel, and numbers to see if we're a fit. Learn more about our <a href="/services" className="text-primary hover:text-primary-dark underline">marketing services</a> or see our <a href="/process" className="text-primary hover:text-primary-dark underline">proven process</a>.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/apply" variant="primary" className="text-lg px-8 py-4">
            Apply Now
          </Button>
          <Button href="/contact" variant="ghost" className="text-lg px-8 py-4">
            Or contact us
          </Button>
        </div>
      </div>
    </section>
  )
}

