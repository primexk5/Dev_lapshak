import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { name: 'Work', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
        isOpen
          ? 'bg-canvas'
          : scrolled
          ? 'bg-canvas/90 backdrop-blur-xl border-b border-line/80 shadow-soft'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="container-page relative z-50">
        <div className="flex items-center justify-between h-[4.25rem]">
          <a href="#home" className="flex items-center gap-3 group relative z-50">
            <span className="text-2xl font-serif tracking-tight text-ink">
              Dev_lapshak
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-1" aria-label="Primary">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-2 text-[13px] font-medium text-ink-muted hover:text-ink transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a href="#contact" className="btn-primary ml-3 !py-2.5 !px-5 text-[13px]">
              Hire me
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setIsOpen((v) => !v)}
            className="md:hidden relative z-50 p-2 -mr-2 text-ink"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile full-screen menu */}
      <div
        className={`md:hidden fixed inset-0 top-0 z-40 bg-canvas transition-all duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div className="container-page pt-28 pb-10 flex flex-col h-full">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {navLinks.map((link, i) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-serif text-4xl text-ink py-3 border-b border-line"
                style={{
                  transitionDelay: isOpen ? `${i * 40}ms` : '0ms',
                  opacity: isOpen ? 1 : 0,
                  transform: isOpen ? 'translateY(0)' : 'translateY(8px)',
                  transition: 'opacity 0.35s ease, transform 0.35s ease',
                }}
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="mt-auto pt-8">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="btn-accent w-full"
            >
              Hire me
            </a>
            <p className="mt-4 text-center text-sm text-ink-faint">
              Open to full-time &amp; contract roles
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
