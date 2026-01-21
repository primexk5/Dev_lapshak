import React from 'react'
import { Award, Target, Lightbulb, Users } from 'lucide-react'

const About = () => {
  const highlights = [
    {
      icon: Target,
      title: 'Problem Solver',
      description: 'I love tackling complex problems and finding elegant solutions'
    },
    {
      icon: Lightbulb,
      title: 'Innovation Driven',
      description: 'Always exploring new technologies and best practices'
    },
    {
      icon: Award,
      title: 'Quality Focused',
      description: 'Delivering production-ready code with thorough testing'
    },
    {
      icon: Users,
      title: 'Collaborative',
      description: 'Strong communicator who works well in team environments'
    }
  ]

  return (
    <section id='about' className='py-20 bg-gradient-to-b from-black to-gray-900'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
          {/* Left Content */}
          <div className='space-y-8'>
            <div>
              <h2 className='text-4xl md:text-5xl font-bold mb-4'>
                About
                <span className='bg-blue-500 bg-clip-text text-transparent ml-2'>
                  Me
                </span>
              </h2>
              <div className='h-1 w-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded'></div>
            </div>

            <p className='text-lg text-gray-400 leading-relaxed'>
              I'm a passionate full-stack developer with 2+ years of experience building scalable web applications. I specialize in modern JavaScript & Typescript frameworks and cloud-native solutions that solve real world problems.
            </p>

            <p className='text-gray-400 leading-relaxed'>
              My journey in tech started with a curiosity about how things work. Today, I leverage that curiosity to build performant, user centric applications that make an impact.
            </p>

            <div className='space-y-4'>
              <h3 className='text-xl font-bold text-white'>What I Do:</h3>
              <ul className='space-y-2 text-gray-400'>
                <li className='flex items-start gap-3'>
                  <span className='text-cyan-400 font-bold mt-1'>→</span>
                  <span>Design and develop full-stack web applications</span>
                </li>
                {/* <li className='flex items-start gap-3'>
                  <span className='text-cyan-400 font-bold mt-1'>→</span>
                  <span>Implement CI/CD pipelines and DevOps solutions</span>
                </li> */}
                <li className='flex items-start gap-3'>
                  <span className='text-cyan-400 font-bold mt-1'>→</span>
                  <span>Optimize performance and scalability</span>
                </li>
                <li className='flex items-start gap-3'>
                  <span className='text-cyan-400 font-bold mt-1'>→</span>
                  <span>Mentor junior developers and lead technical teams</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Content - Highlights */}
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
            {highlights.map((item, index) => {
              const Icon = item.icon
              return (
                <div
                  key={index}
                  className='bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-white/10 rounded-xl p-6 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 group'
                >
                  <div className='mb-4'>
                    <div className='p-3 bg-cyan-500/20 rounded-lg w-fit text-cyan-400 group-hover:scale-110 transition-transform'>
                      <Icon className='w-6 h-6' />
                    </div>
                  </div>
                  <h3 className='text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors'>
                    {item.title}
                  </h3>
                  <p className='text-sm text-gray-400'>
                    {item.description}
                  </p>
                </div>
              )
            })}

            {/* Stats Box */}
            <div className='sm:col-span-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-xl p-6'>
              <div className='grid grid-cols-3 gap-4 text-center'>
                <div>
                  <p className='text-2xl font-bold text-cyan-400'>20+</p>
                  <p className='text-xs text-gray-400 mt-1'>Projects</p>
                </div>
                <div>
                  <p className='text-2xl font-bold text-blue-400'>2+</p>
                  <p className='text-xs text-gray-400 mt-1'>Years Exp</p>
                </div>
                <div>
                  <p className='text-2xl font-bold text-purple-400'>100%</p>
                  <p className='text-xs text-gray-400 mt-1'>Satisfied</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
