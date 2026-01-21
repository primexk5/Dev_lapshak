import React from 'react'
import { ExternalLink, Github } from 'lucide-react'
import { SiReact, SiNextdotjs, SiNodedotjs, SiPostgresql, SiDocker, SiTailwindcss } from 'react-icons/si'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Church Website',
      description: 'Modern website for a local church featuring sermon archives, event calendar, and donation system.',
      tags: ['React', 'Node.js', 'Tailwind CSS', 'Framer Motion'],
      image: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=500&h=300&fit=crop',
      github: 'https://github.com/primexk5/Cocin-Rashik',
      live: 'https://cocin-rashik.netlify.app/'
    },
    {
      id: 2,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with real-time inventory management, payment integration, and admin dashboard.',
      tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Express', 'Docker'],
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=500&h=300&fit=crop',
      github: '#',
      live: '#'
    },
    {
      id: 3,
      title: 'Movies Website',
      description: 'Interactive movie discovery platform with search, filtering, and detailed movie information.',
      tags: ['React', 'TMDB API', 'Tailwind CSS', 'Context API'],
      image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=500&h=300&fit=crop',
      github: 'https://github.com/primexk5/showroom',
      live: 'https://showroo.netlify.app'
    }
    // },
    // {
    //   id: 4,
    //   title: 'Weather Forecast App',
    //   description: 'Real-time weather application with location services, forecasts, and beautiful UI animations.',
    //   tags: ['React', 'API Integration', 'Tailwind CSS', 'Axios'],
    //   image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=500&h=300&fit=crop',
    //   github: '#',
    //   live: '#'
    // }
  ]

  return (
    <section id='projects' className='py-20 bg-gradient-to-b from-gray-900 to-black'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold mb-4'>
            <span className='bg-white bg-clip-text text-transparent'>
              Featured Projects
            </span>
          </h2>
          <p className='text-gray-400 text-lg max-w-2xl mx-auto'>
            Explore my recent work showcasing modern tech stack and best practices
          </p>
        </div>

        {/* Projects Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {projects.map((project) => (
            <div
              key={project.id}
              className='group relative bg-black/50 backdrop-blur border border-white/10 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20'
            >
              {/* Image Container */}
              <div className='relative h-48 overflow-hidden bg-gradient-to-br from-cyan-500/20 to-purple-500/20'>
                <img
                  src={project.image}
                  alt={project.title}
                  className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-300'
                />
                <div className='absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300'></div>
              </div>

              {/* Content */}
              <div className='p-6 space-y-4'>
                <h3 className='text-xl font-bold text-white group-hover:text-cyan-400 transition-colors'>
                  {project.title}
                </h3>
                <p className='text-gray-400 text-sm line-clamp-2'>
                  {project.description}
                </p>

                {/* Tags */}
                <div className='flex flex-wrap gap-2'>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className='text-xs bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-full border border-cyan-500/20'
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className='flex gap-3 pt-4 border-t border-white/10'>
                  <a
                    href={project.github}
                    className='flex-1 flex items-center justify-center gap-2 bg-white/10 hover:bg-cyan-500/20 text-gray-300 hover:text-cyan-400 px-4 py-2 rounded-lg transition-all duration-300 text-sm font-medium'
                  >
                    <Github className='w-4 h-4' />
                    Code
                  </a>
                  <a
                    href={project.live}
                    className='flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-400 to-blue-600 text-black px-4 py-2 rounded-lg hover:shadow-lg hover:shadow-cyan-400/50 transition-all duration-300 text-sm font-medium'
                  >
                    <ExternalLink className='w-4 h-4' />
                    Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
