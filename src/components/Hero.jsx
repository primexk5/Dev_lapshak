import React from 'react'
import { Code2, Zap, Bot, Users } from 'lucide-react'
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiDocker,
  SiGithub,
  SiTailwindcss
} from 'react-icons/si'
import { useInView } from '../hooks/useInView'

const Hero = () => {
  const [leftRef, leftVisible] = useInView()
  const [rightRef, rightVisible] = useInView()

  return (
    <div id='home' className='min-h-screen bg-white pt-24 pb-12'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
          {/* Left Content */}
          <div ref={leftRef} className={`space-y-8 fade-up ${leftVisible ? 'visible' : ''}`}>
            {/* Badge */}
            <div className='inline-flex items-center gap-2 bg-black/5 border border-black/10 rounded-full px-4 py-2'>
              <Zap className='w-4 h-4 text-cyan-500' />
              <span className='text-sm font-medium text-black'>Full Stack Developer</span>
            </div>

            {/* Main Heading */}
            <div className='space-y-4'>
              <h1 className='text-4xl md:text-6xl font-bold'>
                <span className='text-black font-mono'>
                  Build Amazing
                </span>
                <br />
                <span className='text-gray-500 text-2xl'>Digital Experiences</span>
              </h1>
              <p className='text-lg text-gray-600 max-w-2xl leading-relaxed'>
                I craft modern, scalable web applications with cutting-edge technologies. Specializing in full-stack development with React, Node.js, and cloud-native solutions.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className='flex flex-col sm:flex-row gap-4 pt-4'>
              <a
                href="https://wa.me/qr/2FMTN5ATORBSL1"
                target="_blank"
                rel="noopener noreferrer"
                className='border border-gray-300 text-black font-semibold px-8 py-3 rounded-lg hover:bg-black hover:text-white transition-all duration-300 flex items-center justify-center'
              >
                Let's Connect
              </a>
            </div>

            {/* Stats */}
            <div className='grid grid-cols-3 gap-6 pt-8 border-t border-black/10'>
              <div>
                <p className='text-2xl md:text-3xl font-bold text-gray-500'>20+</p>
                <p className='text-sm text-gray-600'>Projects Completed</p>
              </div>
              <div>
                <p className='text-2xl md:text-3xl font-bold text-gray-500'>2+</p>
                <p className='text-sm text-gray-600'>Years Experience</p>
              </div>
              <div>
                <p className='text-2xl md:text-3xl font-bold text-gray-500'>100%</p>
                <p className='text-sm text-gray-600'>Client Satisfied</p>
              </div>
            </div>
          </div>

          {/* Right Side - Tech Stack Grid */}
          <div ref={rightRef} className={`space-y-8 fade-up delay-150 ${rightVisible ? 'visible' : ''}`}>
            <div className='relative'>
              {/* Tech Stack Grid */}
              <div className='relative bg-white border border-black/10 rounded-2xl p-8 shadow-xl'>
                <h3 className='text-lg font-bold text-black mb-8 flex items-center gap-2'>
                  <Code2 className='w-5 h-5 text-black' />
                  Tech Stack
                </h3>

                <div className='grid grid-cols-3 gap-6 sm:grid-cols-4 md:grid-cols-3'>
                  <div className='group flex flex-col items-center justify-center gap-3 p-4 rounded-lg hover:bg-black/5 transition-all duration-300 cursor-pointer'>
                    <div className='p-3 bg-yellow-500/10 rounded-lg group-hover:scale-110 transition-transform'>
                      <SiJavascript className='w-8 h-8 text-yellow-500' />
                    </div>
                    <span className='text-xs text-gray-600 text-center group-hover:text-black transition-colors'>JavaScript</span>
                  </div>

                  <div className='group flex flex-col items-center justify-center gap-3 p-4 rounded-lg hover:bg-black/5 transition-all duration-300 cursor-pointer'>
                    <div className='p-3 bg-blue-500/10 rounded-lg group-hover:scale-110 transition-transform'>
                      <SiTypescript className='w-8 h-8 text-blue-600' />
                    </div>
                    <span className='text-xs text-gray-600 text-center group-hover:text-black transition-colors'>TypeScript</span>
                  </div>

                  <div className='group flex flex-col items-center justify-center gap-3 p-4 rounded-lg hover:bg-black/5 transition-all duration-300 cursor-pointer'>
                    <div className='p-3 bg-cyan-500/10 rounded-lg group-hover:scale-110 transition-transform'>
                      <SiReact className='w-8 h-8 text-cyan-500' />
                    </div>
                    <span className='text-xs text-gray-600 text-center group-hover:text-black transition-colors'>React</span>
                  </div>

                  <div className='group flex flex-col items-center justify-center gap-3 p-4 rounded-lg hover:bg-black/5 transition-all duration-300 cursor-pointer'>
                    <div className='p-3 bg-black/5 rounded-lg group-hover:scale-110 transition-transform'>
                      <SiNextdotjs className='w-8 h-8 text-black' />
                    </div>
                    <span className='text-xs text-gray-600 text-center group-hover:text-black transition-colors'>Next.js</span>
                  </div>

                  <div className='group flex flex-col items-center justify-center gap-3 p-4 rounded-lg hover:bg-black/5 transition-all duration-300 cursor-pointer'>
                    <div className='p-3 bg-green-500/10 rounded-lg group-hover:scale-110 transition-transform'>
                      <SiNodedotjs className='w-8 h-8 text-green-500' />
                    </div>
                    <span className='text-xs text-gray-600 text-center group-hover:text-black transition-colors'>Node.js</span>
                  </div>

                  <div className='group flex flex-col items-center justify-center gap-3 p-4 rounded-lg hover:bg-black/5 transition-all duration-300 cursor-pointer'>
                    <div className='p-3 bg-black/5 rounded-lg group-hover:scale-110 transition-transform'>
                      <SiExpress className='w-8 h-8 text-black' />
                    </div>
                    <span className='text-xs text-gray-600 text-center group-hover:text-black transition-colors'>Express</span>
                  </div>

                  <div className='group flex flex-col items-center justify-center gap-3 p-4 rounded-lg hover:bg-black/5 transition-all duration-300 cursor-pointer'>
                    <div className='p-3 bg-blue-500/10 rounded-lg group-hover:scale-110 transition-transform'>
                      <SiPostgresql className='w-8 h-8 text-blue-500' />
                    </div>
                    <span className='text-xs text-gray-600 text-center group-hover:text-black transition-colors'>PostgreSQL</span>
                  </div>

                  <div className='group flex flex-col items-center justify-center gap-3 p-4 rounded-lg hover:bg-black/5 transition-all duration-300 cursor-pointer'>
                    <div className='p-3 bg-blue-500/10 rounded-lg group-hover:scale-110 transition-transform'>
                      <SiDocker className='w-8 h-8 text-blue-600' />
                    </div>
                    <span className='text-xs text-gray-600 text-center group-hover:text-black transition-colors'>Docker</span>
                  </div>

                  <div className='group flex flex-col items-center justify-center gap-3 p-4 rounded-lg hover:bg-black/5 transition-all duration-300 cursor-pointer'>
                    <div className='p-3 bg-black/5 rounded-lg group-hover:scale-110 transition-transform'>
                      <SiGithub className='w-8 h-8 text-black' />
                    </div>
                    <span className='text-xs text-gray-600 text-center group-hover:text-black transition-colors'>GitHub</span>
                  </div>

                  <div className='group flex flex-col items-center justify-center gap-3 p-4 rounded-lg hover:bg-black/5 transition-all duration-300 cursor-pointer'>
                    <div className='p-3 bg-cyan-500/10 rounded-lg group-hover:scale-110 transition-transform'>
                      <SiTailwindcss className='w-8 h-8 text-cyan-500' />
                    </div>
                    <span className='text-xs text-gray-600 text-center group-hover:text-black transition-colors'>Tailwind</span>
                  </div>

                  <div className='group flex flex-col items-center justify-center gap-3 p-4 rounded-lg hover:bg-black/5 transition-all duration-300 cursor-pointer'>
                    <div className='p-3 bg-emerald-500/10 rounded-lg group-hover:scale-110 transition-transform'>
                      <Users className='w-8 h-8 text-emerald-500' />
                    </div>
                    <span className='text-xs text-gray-600 text-center group-hover:text-black transition-colors'>Collaboration & Communication</span>
                  </div>

                  <div className='group flex flex-col items-center justify-center gap-3 p-4 rounded-lg hover:bg-black/5 transition-all duration-300 cursor-pointer'>
                    <div className='p-3 bg-orange-500/10 rounded-lg group-hover:scale-110 transition-transform'>
                      <Bot className='w-8 h-8 text-orange-500' />
                    </div>
                    <span className='text-xs text-gray-600 text-center group-hover:text-black transition-colors'>AI Utilization</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className='bg-gray-50 border border-black/10 rounded-lg p-6'>
              <p className='text-sm text-gray-600'>
                <span className='text-black font-semibold'>Current Focus:</span> Building scalable applications with modern tech stack, CI/CD pipelines, and cloud-native solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
