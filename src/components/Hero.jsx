import React from 'react'
import { ArrowRight, Code2, Zap, Bot, Users } from 'lucide-react'
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

const Hero = () => {
  return (
    <div className='min-h-screen bg-gradient-to-b from-black via-black to-gray-900 pt-24 pb-12'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
          {/* Left Content */}
          <div className='space-y-8'>
            {/* Badge */}
            <div className='inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-4 py-2'>
              <Zap className='w-4 h-4 text-cyan-400' />
              <span className='text-sm font-medium text-cyan-400'>Full Stack Developer</span>
            </div>

            {/* Main Heading */}
            <div className='space-y-4'>
              <h1 className='text-4xl md:text-6xl font-bold'>
                <span className='bg-gradient-to-r from-blue-500 via-blue-500 to-blue-400 bg-clip-text text-transparent'>
                  Build Amazing
                </span>
                <br />
                <span className='text-white'>Digital Experiences</span>
              </h1>
              <p className='text-lg text-gray-400 max-w-2xl leading-relaxed'>
                I craft modern, scalable web applications with cutting-edge technologies. Specializing in full-stack development with React, Node.js, and cloud-native solutions.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className='flex flex-col sm:flex-row gap-4 pt-4'>
                {/* <a 
                  href="#projects"
                  className='group bg-gradient-to-r from-cyan-400 to-blue-600 text-black font-semibold px-8 py-3 rounded-lg hover:shadow-2xl hover:shadow-cyan-400/50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2'
                >
                  View My Work
                  <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
                </a> */}
              <a 
                href="https://wa.me/qr/2FMTN5ATORBSL1"
                target="_blank"
                rel="noopener noreferrer"
                className='border-2 border-gray-600 text-white font-semibold px-8 py-3 rounded-lg hover:border-cyan-400 hover:bg-cyan-400/5 transition-all duration-300 flex items-center justify-center'
              >
                Let's Connect
              </a>
            </div>

            {/* Stats */}
            <div className='grid grid-cols-3 gap-6 pt-8 border-t border-white/10'>
              <div>
                <p className='text-2xl md:text-3xl font-bold text-cyan-400'>20+</p>
                <p className='text-sm text-gray-400'>Projects Completed</p>
              </div>
              <div>
                <p className='text-2xl md:text-3xl font-bold text-blue-400'>2+</p>
                <p className='text-sm text-gray-400'>Years Experience</p>
              </div>
              <div>
                <p className='text-2xl md:text-3xl font-bold text-purple-400'>100%</p>
                <p className='text-sm text-gray-400'>Client Satisfied</p>
              </div>
            </div>
          </div>

          {/* Right Side - Tech Stack Grid */}
          <div className='space-y-8'>
            <div className='relative'>
              {/* Animated Background */}
              <div className='absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-2xl blur-3xl'></div>
              
              {/* Tech Stack Grid */}
              <div className='relative bg-black/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8'>
                <h3 className='text-lg font-bold text-white mb-8 flex items-center gap-2'>
                  <Code2 className='w-5 h-5 text-cyan-400' />
                  Tech Stack
                </h3>

                <div className='grid grid-cols-3 gap-6 sm:grid-cols-4 md:grid-cols-3'>
                  {/* JavaScript */}
                  <div className='group flex flex-col items-center justify-center gap-3 p-4 rounded-lg hover:bg-white/5 transition-all duration-300 cursor-pointer'>
                    <div className='p-3 bg-yellow-500/20 rounded-lg group-hover:scale-110 transition-transform'>
                      <SiJavascript className='w-8 h-8 text-yellow-400' />
                    </div>
                    <span className='text-xs text-gray-400 text-center group-hover:text-white transition-colors'>JavaScript</span>
                  </div>

                  {/* TypeScript */}
                  <div className='group flex flex-col items-center justify-center gap-3 p-4 rounded-lg hover:bg-white/5 transition-all duration-300 cursor-pointer'>
                    <div className='p-3 bg-blue-500/20 rounded-lg group-hover:scale-110 transition-transform'>
                      <SiTypescript className='w-8 h-8 text-blue-400' />
                    </div>
                    <span className='text-xs text-gray-400 text-center group-hover:text-white transition-colors'>TypeScript</span>
                  </div>

                  {/* React */}
                  <div className='group flex flex-col items-center justify-center gap-3 p-4 rounded-lg hover:bg-white/5 transition-all duration-300 cursor-pointer'>
                    <div className='p-3 bg-cyan-500/20 rounded-lg group-hover:scale-110 transition-transform'>
                      <SiReact className='w-8 h-8 text-cyan-400' />
                    </div>
                    <span className='text-xs text-gray-400 text-center group-hover:text-white transition-colors'>React</span>
                  </div>

                  {/* Next.js */}
                  <div className='group flex flex-col items-center justify-center gap-3 p-4 rounded-lg hover:bg-white/5 transition-all duration-300 cursor-pointer'>
                    <div className='p-3 bg-white/10 rounded-lg group-hover:scale-110 transition-transform'>
                      <SiNextdotjs className='w-8 h-8 text-white' />
                    </div>
                    <span className='text-xs text-gray-400 text-center group-hover:text-white transition-colors'>Next.js</span>
                  </div>

                  {/* Node.js */}
                  <div className='group flex flex-col items-center justify-center gap-3 p-4 rounded-lg hover:bg-white/5 transition-all duration-300 cursor-pointer'>
                    <div className='p-3 bg-green-500/20 rounded-lg group-hover:scale-110 transition-transform'>
                      <SiNodedotjs className='w-8 h-8 text-green-400' />
                    </div>
                    <span className='text-xs text-gray-400 text-center group-hover:text-white transition-colors'>Node.js</span>
                  </div>

                  {/* Express */}
                  <div className='group flex flex-col items-center justify-center gap-3 p-4 rounded-lg hover:bg-white/5 transition-all duration-300 cursor-pointer'>
                    <div className='p-3 bg-gray-700/50 rounded-lg group-hover:scale-110 transition-transform'>
                      <SiExpress className='w-8 h-8 text-white' />
                    </div>
                    <span className='text-xs text-gray-400 text-center group-hover:text-white transition-colors'>Express</span>
                  </div>

                  {/* PostgreSQL */}
                  <div className='group flex flex-col items-center justify-center gap-3 p-4 rounded-lg hover:bg-white/5 transition-all duration-300 cursor-pointer'>
                    <div className='p-3 bg-blue-500/20 rounded-lg group-hover:scale-110 transition-transform'>
                      <SiPostgresql className='w-8 h-8 text-blue-400' />
                    </div>
                    <span className='text-xs text-gray-400 text-center group-hover:text-white transition-colors'>PostgreSQL</span>
                  </div>

                  {/* Docker */}
                  <div className='group flex flex-col items-center justify-center gap-3 p-4 rounded-lg hover:bg-white/5 transition-all duration-300 cursor-pointer'>
                    <div className='p-3 bg-blue-600/20 rounded-lg group-hover:scale-110 transition-transform'>
                      <SiDocker className='w-8 h-8 text-blue-500' />
                    </div>
                    <span className='text-xs text-gray-400 text-center group-hover:text-white transition-colors'>Docker</span>
                  </div>

                  {/* GitHub */}
                  <div className='group flex flex-col items-center justify-center gap-3 p-4 rounded-lg hover:bg-white/5 transition-all duration-300 cursor-pointer'>
                    <div className='p-3 bg-gray-600/30 rounded-lg group-hover:scale-110 transition-transform'>
                      <SiGithub className='w-8 h-8 text-white' />
                    </div>
                    <span className='text-xs text-gray-400 text-center group-hover:text-white transition-colors'>GitHub</span>
                  </div>

                  {/* Tailwind CSS */}
                  <div className='group flex flex-col items-center justify-center gap-3 p-4 rounded-lg hover:bg-white/5 transition-all duration-300 cursor-pointer'>
                    <div className='p-3 bg-cyan-600/20 rounded-lg group-hover:scale-110 transition-transform'>
                      <SiTailwindcss className='w-8 h-8 text-cyan-500' />
                    </div>
                    <span className='text-xs text-gray-400 text-center group-hover:text-white transition-colors'>Tailwind</span>
                  </div>

                  {/* Collaboration & Communication */}
                  <div className='group flex flex-col items-center justify-center gap-3 p-4 rounded-lg hover:bg-white/5 transition-all duration-300 cursor-pointer'>
                    <div className='p-3 bg-emerald-500/20 rounded-lg group-hover:scale-110 transition-transform'>
                      <Users className='w-8 h-8 text-emerald-400' />
                    </div>
                    <span className='text-xs text-gray-400 text-center group-hover:text-white transition-colors'>Collaboration & Communication</span>
                  </div>

                  {/* AI Utilization */}
                  <div className='group flex flex-col items-center justify-center gap-3 p-4 rounded-lg hover:bg-white/5 transition-all duration-300 cursor-pointer'>
                    <div className='p-3 bg-orange-500/20 rounded-lg group-hover:scale-110 transition-transform'>
                      <Bot className='w-8 h-8 text-orange-400' />
                    </div>
                    <span className='text-xs text-gray-400 text-center group-hover:text-white transition-colors'>AI Utilization</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className='bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-white/10 rounded-lg p-6'>
              <p className='text-sm text-gray-300'>
                <span className='text-cyan-400 font-semibold'>Current Focus:</span> Building scalable applications with modern tech stack, CI/CD pipelines, and cloud-native solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero