import React from 'react'
import { Github, Linkedin, Twitter, ArrowUp, Mail } from 'lucide-react'

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
  { name: 'Resume', href: '/Barnabas_Resume.pdf', external: true },
  { name: 'Contact', href: '#contact' },
]

const email = 'lapshakbarnabas4@gmail.com'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="relative bg-canvas text-ink overflow-hidden">
      <div className="h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22 opacity=%220.05%22/%3E%3C/svg%3E')] mix-blend-overlay pointer-events-none" />

      <div className="container-page relative z-10 pt-16 md:pt-20">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div className="max-w-lg">
            <p className="inline-flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              Available for new projects
            </p>
            <h2 className="mt-5 font-serif text-title text-ink">
              Have a project in mind?
            </h2>
            <p className="mt-3 text-ink-muted text-base md:text-lg leading-relaxed max-w-md">
              Let&apos;s turn your idea into something refined. I respond to
              every serious note within a day or two.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a
              href={`mailto:${email}`}
              className="btn-accent !px-7 !py-3.5"
            >
              Start a project
            </a>
            <a
              href={`mailto:${email}`}
              className="group inline-flex items-center gap-2 text-sm text-ink-muted hover:text-ink transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span className="font-mono underline underline-offset-4 decoration-line-strong group-hover:decoration-accent transition-colors">
                {email}
              </span>
            </a>
          </div>
        </div>

        <div className="mt-14 pt-12 border-t border-line grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 max-w-sm">
            <p className="font-serif text-2xl tracking-tight text-ink">
              Dev_lapshak
            </p>
            <p className="mt-3 text-sm text-ink-muted leading-relaxed">
              Full stack &amp; blockchain developer in Jos, Nigeria. Building
              refined web, mobile, and blockchain products for teams that care
              about craft.
            </p>
          </div>

          <div className="lg:col-span-3">
            <p className="text-[11px] font-mono uppercase tracking-[0.16em] text-ink-muted mb-5">
              Navigate
            </p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="link-underline text-sm text-ink-muted hover:text-ink transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <p className="text-[11px] font-mono uppercase tracking-[0.16em] text-ink-muted mb-5">
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
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-line-strong bg-surface text-ink-muted shadow-soft hover:text-accent hover:border-accent/50 hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                )
              })}
            </div>
            <p className="mt-6 text-sm text-ink-muted">
              Based in <span className="text-ink">Jos, Nigeria</span> — working
              worldwide.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-7 border-t border-line flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-xs text-ink-muted">
            © {year} Barnabas Lapshak — crafted with care.
          </p>
          <a
            href="#home"
            aria-label="Back to top"
            className="group inline-flex items-center gap-2 text-xs font-medium text-ink-muted hover:text-ink transition-colors"
          >
            Back to top
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-line-strong bg-surface text-ink-muted shadow-soft group-hover:bg-ink group-hover:text-surface group-hover:border-ink transition-all duration-200">
              <ArrowUp className="w-3.5 h-3.5" />
            </span>
          </a>
        </div>
      </div>

      <p
        aria-hidden="true"
        className="mt-4 text-center font-serif leading-none text-[17vw] lg:text-[13rem] text-ink/[0.04] tracking-tight select-none pointer-events-none"
      >
        Dev_lapshak
      </p>
    </footer>
  )
}

export default Footer
