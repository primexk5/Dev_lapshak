import React, { useState, useRef, useEffect } from 'react'
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
    image: '/images/hybrid-agent.png', // Add your image to public/images/
  },
  {
    id: 2,
    title: "Jostin's Helping Hand",
    description: 'Non-profit site for donations, volunteering, and community outreach.',
    tags: ['React', 'Non-Profit'],
    github: '#',
    live: 'https://www.jostinshelpinghand.org/',
    featured: true,
    image: '/images/jostins.png', // Add your image to public/images/
  },
  {
    id: 3,
    title: 'Benue Blockchain Fest',
    description: 'Conference site with speakers, schedule, and registration for a regional blockchain event.',
    tags: ['React', 'Tailwind', 'Web3'],
    github: '#',
    live: 'https://www.benueblockchainfest.com/',
    featured: true,
    image: '/images/blockchain-fest.png', // Add your image to public/images/
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

const ProjectIframe = ({ url, title }) => {
  const containerRef = useRef(null)
  const [scale, setScale] = useState(0.25)
  
  useEffect(() => {
    if (!window.ResizeObserver) return
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const width = entry.contentRect.width
        // Force the iframe to think it is 1280px wide, and scale it to fit the container precisely
        setScale(width / 1280)
      }
    })
    if (containerRef.current) observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [])
  
  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden bg-canvas">
      <iframe 
        src={url} 
        title={title}
        className="absolute top-0 left-0 border-none origin-top-left pointer-events-none transition-transform duration-700 group-hover:scale-[1.03]"
        style={{
          width: '1280px',
          height: '1024px', // Give it enough height to cover the container vertically
          transform: `scale(${scale})`
        }}
        tabIndex={-1}
        loading="lazy"
      />
    </div>
  )
}

const ProjectImage = ({ project, className = '' }) => (
  <div
    className={`relative flex items-center justify-center overflow-hidden bg-canvas ${className}`}
  >
    {project.live && project.live !== '#' ? (
      <ProjectIframe url={project.live} title={project.title} />
    ) : (
      <>
        <span
          className="font-serif text-5xl text-ink/15 italic select-none"
          aria-hidden="true"
        >
          {project.title[0]}
        </span>
        <div className="absolute inset-0 skeleton-sweep pointer-events-none" />
      </>
    )}
  </div>
)

const FeaturedCard = ({ project, index, wide }) => (
  <article
    className={`group card-lift rounded-2xl border border-line bg-surface overflow-hidden shadow-soft hover:border-line-strong ${
      wide ? 'md:col-span-2' : ''
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
        className={`w-full ${
          index === 0
            ? 'h-56 sm:h-72 lg:h-80'
            : wide
            ? 'h-48 sm:h-56 md:h-64'
            : 'h-48 sm:h-56'
        }`}
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
  const [showAll, setShowAll] = useState(false)
  const [activeTag, setActiveTag] = useState('All')

  const featured = projects.filter((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)
  const allTags = ['All', ...Array.from(new Set(rest.flatMap((p) => p.tags)))]
  const filtered = activeTag === 'All' ? rest : rest.filter((p) => p.tags.includes(activeTag))
  const visibleRest = showAll ? filtered : filtered.slice(0, 4)

  const handleTag = (tag) => {
    setActiveTag(tag)
    setShowAll(false)
  }

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
            {featured.length} featured · {projects.length} total
          </p>
        </div>

        {/* Featured */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mb-6">
          {featured.map((project, i) => (
            <FeaturedCard
              key={project.id}
              project={project}
              index={i}
              wide={i === 0 || i === featured.length - 1}
            />
          ))}
        </div>

        {/* More work */}
        <div className="mt-10">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-5">
            <h3 className="text-sm font-medium text-ink-faint uppercase tracking-wider">
              More projects
            </h3>
            <div
              className="flex flex-wrap gap-2"
              role="group"
              aria-label="Filter projects by tag"
            >
              {allTags.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => handleTag(tag)}
                  aria-pressed={activeTag === tag}
                  className={`px-3 py-1.5 rounded-full border text-xs font-mono transition-all duration-200 ${
                    activeTag === tag
                      ? 'bg-ink text-canvas border-ink'
                      : 'border-line text-ink-muted hover:text-ink hover:border-line-strong'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {filtered.length === 0 ? (
            <p className="text-sm text-ink-muted text-center py-10">
              No projects with that tag yet.
            </p>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {visibleRest.map((project) => (
                <CompactCard key={project.id} project={project} />
              ))}
            </div>
          )}

          {filtered.length > 4 && (
            <div className="mt-8 text-center">
              <button
                type="button"
                onClick={() => setShowAll((v) => !v)}
                className="btn-secondary"
              >
                {showAll ? 'Show less' : `View all ${filtered.length} projects`}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Projects
