'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import { NAV_LINKS } from '@/lib/constants'
import { Button } from './ui/Button'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      if (isHomePage) {
        setScrollY(window.scrollY)
      }
    }
    
    // Set initial scroll position
    handleScroll()
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isHomePage])

  // Calculate opacity for home page fade-in (same logic as Hero)
  const fadeStart = 0
  const fadeEnd = 600
  const contentFadeStart = 100
  const navbarOpacity = isHomePage
    ? Math.min(1, Math.max(0, (scrollY - contentFadeStart) / (fadeEnd - contentFadeStart)))
    : 1

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-black ${
        scrolled
          ? 'border-b border-border'
          : ''
      }`}
      style={{ opacity: navbarOpacity }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24 md:h-32">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/Images/E5441C6F-3719-4580-ACFF-D74F0E026579.PNG"
              alt="Blessed Marketing"
              width={158}
              height={64}
              className="h-16 md:h-24 w-auto mt-1"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-full text-sm font-medium text-white hover:text-gray-300 hover:bg-gray-800 transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
            <Button href="/contact" variant="primary" size="sm">
              Apply Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2 rounded-sm hover:bg-gray-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-border"
          >
            <div className="px-4 py-6 space-y-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 rounded-sm text-white hover:text-gray-300 hover:bg-gray-800 transition-all duration-200"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4">
                <Button href="/contact" variant="primary" className="w-full">
                  Apply Now
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

