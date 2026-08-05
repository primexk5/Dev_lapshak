import React, { useState } from 'react'
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react'
import { useInView } from '../hooks/useInView'

const projects = [
  {
    id: 1,
    title: 'Hybrid Agent',
    description: 'A highly secure way to receive commissions locally and internationally on property & vehicle sales — fast and easy.',
    tags: ['Next.js', 'Fintech', 'Real Estate'],
    github: '#',
    live: 'https://hybrid-agent-ecru.vercel.app/',
    featured: true,
  },
  {
    id: 2,
    title: "Jostin's Helping Hand",
    description: 'Non-profit site for donations, volunteering, and community outreach.',
    tags: ['React', 'Non-Profit'],
    github: '#',
    live: 'https://www.jostinshelpinghand.org/',
    featured: true,
  },
  {
    id: 3,
    title: 'Benue Blockchain Fest',
    description: 'Conference site with speakers, schedule, and registration for a regional blockchain event.',
    tags: ['React', 'Tailwind', 'Web3'],
    github: '#',
    live: 'https://www.benueblockchainfest.com/',
    featured: true,
  },
  {
    id: 4,
    title: 'Benue SEMA',
    description: 'Official platform for the Benue State Emergency Management Agency, handling disaster response and updates.',
    tags: ['React', 'Node.js', 'Emergency Response'],
    github: '#',
    live: 'https://www.benuesema.com/',
    featured: true,
  },
  {
    id: 5,
    title: 'Benue SEMA Chain',
    description: 'Blockchain portal for transparent emergency relief funds and secure transactions.',
    tags: ['Solidity', 'Blockchain', 'Web3'],
    github: '#',
    live: 'https://benuesemachain.benuesema.com/',
  },
  {
    id: 6,
    title: 'IO Fellowship',
    description: 'Community platform for the IO Fellowship program, connecting members and tracking progress.',
    tags: ['React', 'Community'],
    github: '#',
    live: 'https://io-fellowship.vercel.app/',
  },
  {
    id: 7,
    title: 'Elysian Beddings',
    description: 'Premium bedding storefront with product catalog and a clean checkout experience.',
    tags: ['Next.js', 'E-Commerce'],
    github: '#',
    live: 'https://elysian-beddings.vercel.app/',
  },
  {
    id: 8,
    title: 'Divine Mandate Worldwide',
    description: 'Official political party platform covering campaigns, news, and announcements.',
    tags: ['React', 'Node.js', 'Politics'],
    github: '#',
    live: 'https://www.divinemandateworldwide.org/',
  },
  {
    id: 9,
    title: 'Seven Hills Apartment',
    description: 'Apartment listing and booking experience with room showcases.',
    tags: ['React', 'Real Estate'],
    github: '#',
    live: 'https://seven-hills-apartment.vercel.app/',
  },
  {
    id: 10,
    title: 'Zeteo Seven',
    description: 'Starknet dApp with Cairo ZK proofs via Garaga — privacy-focused on-chain interactions.',
    tags: ['Next.js', 'Cairo', 'Starknet'],
    github: '#',
    live: 'https://zeteo-seven.vercel.app/',
  },
  {
    id: 11,
    title: 'Value Chain Nig Ltd',
    description: 'Corporate landing page for agricultural value chain management and services.',
    tags: ['React', 'Corporate'],
    github: '#',
    live: 'https://www.valuechainnigltd.org/',
  },
  {
    id: 12,
    title: 'MSGOBA 2k13',
    description: 'Alumni association platform for event management, networking, and directory.',
    tags: ['React', 'Community'],
    github: '#',
    live: 'https://www.msgoba2k13.xyz/',
  },
  {
    id: 13,
    title: 'Fralia Conference Hall',
    description: 'Venue booking and information platform under Benue SEMA.',
    tags: ['React', 'Events'],
    github: '#',
    live: 'https://fraliaconferencehall.benuesema.com/',
  },
]

function screenshotUrl(live) {
  if (!live || live === '#') return null
  return `https://api.microlink.io/?url=${encodeURIComponent(
    live
  )}&screenshot=true&meta=false&embed=screenshot.url&prerender=true&waitFor=3000`
}

const ProjectImage = ({ project, className = '' }) => {
  const [loaded, setLoaded] = useState(false)
  const [failed, setFailed] = useState(false)
  const src = screenshotUrl(project.live)

  if (!src || failed) {
    return (
      <div
        className={`flex items-center justify-center bg-gradient-to-br from-accent-soft via-canvas to-line ${className}`}
      >
        <span className="font-serif text-3xl text-ink/20 italic">{project.title[0]}</span>
      </div>
    )
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!loaded && <div className="absolute inset-0 img-shimmer" />}
      <img
        src={src}
        alt={`Screenshot of ${project.title}`}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        onError={() => setFailed(true)}
        className={`w-full h-full object-cover object-top transition-all duration-700 ease-out group-hover:scale-[1.03] ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  )
}

const FeaturedCard = ({ project, index }) => (
  <article
    className={`group card-lift rounded-2xl border border-line bg-surface overflow-hidden shadow-soft ${
      index === 0 ? 'md:col-span-2 lg:col-span-2' : ''
    }`}
  >
    <a
      href={project.live}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <ProjectImage
        project={project}
        className={`w-full ${index === 0 ? 'h-56 sm:h-72 lg:h-80' : 'h-48 sm:h-56'}`}
      />
    </a>
    <div className="p-6 sm:p-7">
      <div className="flex items-start justify-between gap-4 mb-3">
        <h3 className="font-serif text-2xl text-ink tracking-tight group-hover:text-accent transition-colors duration-300">
          {project.title}
        </h3>
        <div className="flex items-center gap-2 shrink-0 pt-1">
          {project.github && project.github !== '#' && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} source`}
              className="p-1.5 rounded-full text-ink-faint hover:text-ink hover:bg-canvas transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} live`}
            className="p-1.5 rounded-full text-ink-faint hover:text-accent hover:bg-accent-soft transition-colors"
          >
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
      <p className="text-sm text-ink-muted leading-relaxed mb-5 max-w-prose">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </article>
)

const CompactCard = ({ project }) => (
  <article className="group flex flex-col sm:flex-row gap-0 rounded-xl border border-line bg-surface overflow-hidden hover:border-line-strong hover:shadow-soft transition-all duration-300">
    <a
      href={project.live}
      target="_blank"
      rel="noopener noreferrer"
      className="sm:w-44 shrink-0"
    >
      <ProjectImage project={project} className="w-full h-36 sm:h-full min-h-[9rem]" />
    </a>
    <div className="flex flex-col flex-1 p-5">
      <div className="flex items-start justify-between gap-3 mb-2">
        <h3 className="text-base font-semibold text-ink group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="text-ink-faint hover:text-ink transition-colors shrink-0"
          aria-label={`Open ${project.title}`}
        >
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
      <p className="text-sm text-ink-muted leading-relaxed flex-1 mb-3 line-clamp-2">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {project.tags.slice(0, 3).map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </article>
)

const Projects = () => {
  const [headRef, headVisible] = useInView()
  const [featRef, featVisible] = useInView()
  const [moreRef, moreVisible] = useInView()
  const [showAll, setShowAll] = useState(false)

  const featured = projects.filter((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)
  const visibleRest = showAll ? rest : rest.slice(0, 4)

  return (
    <section id="projects" className="section bg-canvas relative">
      <div className="container-page">
        <div
          ref={headRef}
          className={`flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16 reveal ${
            headVisible ? 'visible' : ''
          }`}
        >
          <div>
            <p className="section-label">Portfolio</p>
            <h2 className="section-title">Selected work</h2>
            <p className="section-desc">
              Real products for associations, commerce, events, and on-chain
              experiments — designed to ship and scale.
            </p>
          </div>
          <p className="text-sm text-ink-faint font-mono shrink-0 md:pb-1">
            {projects.length} projects
          </p>
        </div>

        {/* Featured */}
        <div
          ref={featRef}
          className={`grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mb-6 reveal ${
            featVisible ? 'visible' : ''
          }`}
        >
          {featured.map((project, i) => (
            <FeaturedCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* More work */}
        <div
          ref={moreRef}
          className={`reveal reveal-delay-1 ${moreVisible ? 'visible' : ''}`}
        >
          <h3 className="text-sm font-medium text-ink-faint uppercase tracking-wider mb-5 mt-10">
            More projects
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {visibleRest.map((project) => (
              <CompactCard key={project.id} project={project} />
            ))}
          </div>

          {rest.length > 4 && (
            <div className="mt-8 text-center">
              <button
                type="button"
                onClick={() => setShowAll((v) => !v)}
                className="btn-secondary"
              >
                {showAll ? 'Show less' : `View all ${rest.length} projects`}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Projects
