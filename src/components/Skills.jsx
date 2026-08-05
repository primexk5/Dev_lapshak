import React from 'react'
import { useInView } from '../hooks/useInView'
import { Hexagon } from 'lucide-react'
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiDocker,
  SiGithub,
  SiTailwindcss,
  SiSolidity,
  SiRust,
} from 'react-icons/si'

const tech = [
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'React', icon: SiReact },
  { name: 'React Native', icon: SiReact },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'Express', icon: SiExpress },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'Solidity', icon: SiSolidity },
  { name: 'Rust', icon: SiRust },
  { name: 'Cairo', icon: Hexagon },
  { name: 'Docker', icon: SiDocker },
  { name: 'Tailwind', icon: SiTailwindcss },
  { name: 'GitHub', icon: SiGithub },
]

const pillars = [
  {
    title: 'Frontend craft',
    body: 'Interfaces that feel fast and clear — component systems, accessibility, and responsive layout as defaults.',
  },
  {
    title: 'Backend systems',
    body: 'APIs, auth, and data models that stay maintainable. Node, Express, and PostgreSQL in production.',
  },
  {
    title: 'Ship & operate',
    body: 'Docker, simple CI, and deploys that don\'t break on Friday. I optimize for reliability over novelty.',
  },
  {
    title: 'Web3 & Mobile',
    body: 'Smart contracts in Solidity and Cairo across Base and Starknet, plus Solana development and cross-platform mobile apps.',
  },
]

const Skills = () => {
  const [headRef, headVisible] = useInView()
  const [bodyRef, bodyVisible] = useInView()

  return (
    <section id="skills" className="section bg-surface border-y border-line">
      <div className="container-page">
        <div
          ref={headRef}
          className={`mb-14 md:mb-16 reveal ${headVisible ? 'visible' : ''}`}
        >
          <p className="section-label">Capabilities</p>
          <h2 className="section-title">How I build</h2>
          <p className="section-desc">
            A practical stack and a bias toward shipping products people actually use.
          </p>
        </div>

        <div
          ref={bodyRef}
          className={`reveal reveal-delay-1 ${bodyVisible ? 'visible' : ''}`}
        >
          {/* Tech marquee-style grid */}
          <div className="grid grid-cols-2 sm:grid-cols-7 gap-3 mb-16">
            {tech.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.name}
                  className="flex items-center gap-3 rounded-xl border border-line bg-canvas/60 px-4 py-3.5 hover:border-accent/30 hover:bg-accent-soft/40 transition-colors duration-300"
                >
                  <Icon className="w-5 h-5 text-ink-soft shrink-0" aria-hidden />
                  <span className="text-sm font-medium text-ink-soft truncate">
                    {item.name}
                  </span>
                </div>
              )
            })}
          </div>

          {/* Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {pillars.map((p, i) => (
              <div key={p.title} className="relative pl-5 border-l-2 border-line hover:border-accent transition-colors duration-300">
                <span className="absolute -left-[9px] top-0 flex h-4 w-4 items-center justify-center rounded-full bg-canvas border border-line text-[10px] font-mono text-ink-faint">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-serif text-xl text-ink mb-2.5">{p.title}</h3>
                <p className="text-sm text-ink-muted leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
