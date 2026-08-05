import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { name: 'Work', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'About', href: '#about' },
  { name: 'Resume', href: '/Barnabas_Resume.pdf', external: true },
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
          ? 'bg-canvas border-b border-line'
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
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
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
            onClick={() => setIsOpen(true)}
            className="md:hidden relative z-50 p-2 -mr-2 text-ink outline-none"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Backdrop */}
      <div 
        className={`md:hidden fixed inset-0 z-[105] bg-ink/10 backdrop-blur-sm transition-all duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Side drawer */}
      <div
        className={`md:hidden fixed top-0 right-0 h-[100svh] w-[85vw] max-w-sm z-[110] bg-canvas border-l border-line shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-end h-[4.25rem] px-6 sm:px-8">
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="p-2 -mr-2 text-ink outline-none"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="pt-6 pb-10 px-6 sm:px-8 flex flex-col h-full overflow-y-auto">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {navLinks.map((link, i) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                className="font-serif text-3xl sm:text-4xl text-ink py-4 border-b border-line"
                style={{
                  transitionDelay: isOpen ? `${i * 45}ms` : '0ms',
                  opacity: isOpen ? 1 : 0,
                  transform: isOpen ? 'translateX(0)' : 'translateX(16px)',
                  transition: 'opacity 0.4s ease, transform 0.4s ease',
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
