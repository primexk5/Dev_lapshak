import React from 'react'
import { useInView } from '../hooks/useInView'

const stats = [
  { value: '20+', label: 'Projects shipped' },
  { value: '3+', label: 'Years of experience' },
  { value: 'Full stack', label: '& Blockchain delivery' },
]

const About = () => {
  const [ref, visible] = useInView()

  return (
    <section id="about" className="section bg-canvas">
      <div className="container-page">
        <div
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start reveal ${
            visible ? 'visible' : ''
          }`}
        >
          <div className="lg:col-span-5">
            <p className="section-label">About</p>
            <h2 className="section-title">
              Code that holds up
              <span className="italic text-ink-muted"> after launch.</span>
            </h2>

            <div className="mt-10 grid grid-cols-3 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-line bg-surface p-4 shadow-soft"
                >
                  <p className="font-serif text-2xl md:text-3xl text-ink">{s.value}</p>
                  <p className="mt-1 text-[11px] text-ink-faint leading-snug">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6 text-base md:text-lg text-ink-muted leading-relaxed">
            <p>
              I&apos;m <span className="text-ink font-medium">Barnabas Lapshak</span>,
              a full-stack developer based in Jos, Nigeria. I take ideas from
              brief to production, covering product UI, APIs, databases, and the
              boring but critical deploy path.
            </p>
            <p>
              Most of my work lives in the real world: association platforms,
              ecommerce, event systems, mobile applications, and
              a growing set of blockchain protocols on Base, Solana, and Starknet. I care less about
              buzzwords and more about whether the product is clear, fast,
              and easy to maintain.
            </p>
            <p>
              I&apos;m looking for a team where craft and ownership matter, specifically for
              full time or serious contract work where I can contribute across
              the stack and grow with strong engineers.
            </p>

            <blockquote className="mt-8 pl-5 border-l-2 border-accent">
              <p className="font-serif text-xl md:text-2xl text-ink italic leading-snug">
                “Simple systems, honest communication, and features that earn
                their place in the codebase.”
              </p>
            </blockquote>

            <div className="pt-4 flex flex-wrap gap-3">
              <a href="#contact" className="btn-primary">
                Let&apos;s work together
              </a>
              <a
                href="/Barnabas_Resume.pdf"
                download="Barnabas_Resume.pdf"
                className="btn-secondary"
              >
                Download Resume
              </a>
              <a
                href="https://www.linkedin.com/in/barnabas-lapshak-1866673a5"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
