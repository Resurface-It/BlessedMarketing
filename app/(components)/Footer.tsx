import Link from 'next/link'
import { FOOTER_LINKS, SITE_EMAIL, SITE_NAME } from '@/lib/constants'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-bg border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Left Column */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <span className="text-xl font-bold text-text-main">
                <span className="text-primary">Blessed</span> Marketing
              </span>
            </Link>
            <p className="text-text-muted text-body-sm leading-relaxed">
              Blessed Marketing is your done-for-you growth team, focused on performance-driven campaigns and clear ROI.
            </p>
          </div>

          {/* Middle Column */}
          <div>
            <h3 className="text-text-main font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-muted hover:text-text-main transition-colors text-body-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column */}
          <div>
            <h3 className="text-text-main font-semibold mb-4">Let's talk</h3>
            <Link
              href="/contact"
              className="text-primary hover:text-primary-light transition-colors text-body-sm block mb-4"
            >
              Get in touch →
            </Link>
            <a
              href={`mailto:${SITE_EMAIL}`}
              className="text-text-muted hover:text-text-main transition-colors text-body-sm"
            >
              {SITE_EMAIL}
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-text-muted text-body-sm">
            © {currentYear} {SITE_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

