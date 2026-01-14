import { SectionHeader } from '@/app/(components)/ui/SectionHeader'
import { FAQAccordion } from '@/app/(components)/ui/FAQAccordion'
import { Card } from '@/app/(components)/ui/Card'
import { Breadcrumbs } from '@/app/(components)/seo/Breadcrumbs'
import { faqs } from '@/lib/data'

const contactFAQs = faqs.slice(0, 3)

export default function ContactPage() {
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
      <section className="py-20 bg-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-0 overflow-hidden" hover={false}>
            <div className="w-full bg-bg-elevated">
              <iframe
                src="https://interfaces.zapier.com/embed/page/cmkbhjo97000ye9c0zvn6ftmr?noBackground=false"
                style={{ 
                  maxWidth: '900px',
                  width: '100%', 
                  height: '950px',
                  border: 'none',
                  display: 'block'
                }}
                className="w-full"
                data-testid="cmkbhjo97000ye9c0zvn6ftmr-zapier-interfaces-page-embed-iframe"
                title="Contact Form"
              />
            </div>
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

