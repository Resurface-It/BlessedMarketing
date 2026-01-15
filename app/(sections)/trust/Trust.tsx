import { LogoGrid } from '@/app/(components)/ui/LogoGrid'

export function Trust() {
  return (
    <section className="py-16 bg-bg-secondary border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-text-muted mb-8 text-body-sm md:text-body">
          Trusted by growing brands that care about impact and profit.
        </p>
        <LogoGrid />
      </div>
    </section>
  )
}

