import React from 'react'
import { Github, Linkedin, Twitter, ArrowUp } from 'lucide-react'

const socialLinks = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/primexk5' },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/barnabas-lapshak-1866673a5',
  },
  { icon: Twitter, label: 'X', href: 'https://x.com/dev_lapshak' },
]

const navLinks = [
  { name: 'Work', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
]

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-canvas border-t border-line text-ink">
      <div className="container-page py-14 md:py-16">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 mb-12">
          <div className="max-w-sm">
            <p className="font-serif text-2xl text-ink mb-3">Dev_lapshak</p>
            <p className="text-sm text-ink-muted leading-relaxed">
              Full stack & blockchain developer in Jos, Nigeria. Building refined web, mobile, and blockchain products
              for teams that care about craft.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-14 gap-y-8">
            <div>
              <p className="text-[11px] font-mono uppercase tracking-[0.16em] text-ink-muted mb-4">
                Navigate
              </p>
              <ul className="space-y-2.5">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-ink-muted hover:text-accent transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-[11px] font-mono uppercase tracking-[0.16em] text-ink-muted mb-4">
                Social
              </p>
              <div className="flex gap-3">
                {socialLinks.map((s) => {
                  const Icon = s.icon
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink-muted hover:text-ink hover:border-accent/50 hover:bg-surface transition-all"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-line flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-xs text-ink-muted">
            © {year} Barnabas Lapshak 
          </p>
          <a
            href="#home"
            className="inline-flex items-center gap-1.5 text-xs text-ink-muted hover:text-ink transition-colors"
          >
            Back to top
            <ArrowUp className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
