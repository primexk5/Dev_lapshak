import React from 'react'
import { ArrowUpRight, Code, Database, Layout } from 'lucide-react'
import { useInView } from '../hooks/useInView'

const Hero = () => {
  const [ref, visible] = useInView(0.05)

  return (
    <section
      id="home"
      className="min-h-[100svh] pt-28 px-4 pb-8 md:pt-32 md:px-8 md:pb-12 flex flex-col bg-canvas"
    >
      <div className="absolute inset-0 grain pointer-events-none" aria-hidden />
      
      <div 
        ref={ref}
        className={`relative z-10 flex-1 max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-4 md:grid-rows-[auto_auto_auto] gap-4 reveal ${visible ? 'visible' : ''}`}
      >
        {/* Main Statement Box - Spans 3 cols */}
        <div className="md:col-span-3 md:row-span-2 border border-line bg-surface p-8 md:p-12 flex flex-col justify-between transition-colors hover:border-line-strong group">
          <div className="flex items-center justify-between gap-4 mb-12">
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-ink-faint block">
              01 / Vision
            </span>
            <a
              href="/Barnabas_Resume.pdf"
              download="Barnabas_Resume.pdf"
              className="inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-[0.2em] text-accent hover:text-accent/80 transition-colors duration-300"
            >
              Resume (PDF) →
            </a>
          </div>
          <h1
            className={`mt-10 font-serif text-[3rem] md:text-6xl lg:text-[4.5rem] text-ink leading-[1.05] tracking-tight reveal reveal-delay-1 ${visible ? 'visible' : ''}`}
          >
            Engineering products for <br />
            <span className="text-ink-muted">web, mobile, & blockchain.</span>
          </h1>
        </div>

        {/* Availability Box */}
        <div className="border border-line bg-surface p-8 flex flex-col justify-between transition-colors hover:border-line-strong">
          <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-ink-faint block">
            02 / Status
          </span>
          <div className="mt-12 flex flex-col items-start gap-4">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-accent" />
            </span>
            <div>
              <h3 className="font-bold text-ink text-lg">Available</h3>
              <p className="text-sm text-ink-muted mt-1 leading-relaxed">
                Open to new full-time and contract opportunities.
              </p>
            </div>
          </div>
        </div>

        {/* Location Box */}
        <div className="border border-line bg-surface p-8 flex flex-col justify-between transition-colors hover:border-line-strong overflow-hidden relative">
          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-ink via-transparent to-transparent pointer-events-none" />
          <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-ink-faint block relative z-10">
            03 / Location
          </span>
          <div className="mt-12 relative z-10">
            <h3 className="font-bold text-ink text-xl">Jos, Nigeria</h3>
            <p className="text-sm text-ink-muted mt-1">Remote worldwide</p>
          </div>
        </div>

        {/* About Box - Spans 2 cols */}
        <div className="md:col-span-2 border border-line bg-surface p-8 md:p-12 flex flex-col justify-between transition-colors hover:border-line-strong">
          <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-ink-faint block mb-8">
            04 / About
          </span>
          <p className="text-xl md:text-2xl text-ink-muted leading-relaxed font-medium">
            I'm <span className="text-ink font-bold">Barnabas Lapshak</span>. I craft web apps, mobile apps, and smart contracts across Base, Solana, and Starknet. <br className="hidden md:block" />
            <span className="text-ink-soft">Solidity, Cairo, React, and Node.js.</span>
          </p>
        </div>

        {/* Trust & Actions - Spans 2 cols */}
        <div className="md:col-span-2 grid grid-rows-2 gap-4">
          {/* Trust strip inside bento */}
          <div className="border border-line bg-surface p-8 flex flex-col justify-center transition-colors hover:border-line-strong">
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-ink-faint mb-4 block">
              Trusted By
            </span>
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm font-semibold text-ink-soft">
              <span>Benue SEMA</span>
              <span className="text-line-strong">/</span>
              <span>Divine Mandate</span>
              <span className="text-line-strong">/</span>
              <span>Elysian Beddings</span>
              <span className="text-line-strong">/</span>
              <span>IO Fellowship</span>
            </div>
          </div>
          
          {/* Action buttons inside bento */}
          <div className="flex gap-4">
            <a href="#projects" className="flex-1 border border-line bg-ink text-canvas flex flex-col items-center justify-center p-6 hover:bg-ink-soft transition-all active:scale-[0.98] group">
              <span className="font-bold text-lg">See work</span>
              <span className="text-xs text-canvas/70 mt-1 uppercase tracking-widest font-mono">View Projects</span>
            </a>
            <a href="https://github.com/primexk5" target="_blank" rel="noopener noreferrer" className="flex-1 border border-line bg-surface text-ink flex flex-col items-center justify-center p-6 hover:bg-line/50 transition-all active:scale-[0.98]">
              <ArrowUpRight className="w-5 h-5 mb-1 text-ink-muted" />
              <span className="font-bold">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
