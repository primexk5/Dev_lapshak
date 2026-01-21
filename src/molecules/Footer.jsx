import React from 'react'
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react'
import { SiDocker, SiGithub } from 'react-icons/si'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/primexk5' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/barnabas-lapshak-1866673a5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
    { icon: Twitter, label: 'Twitter', href: 'https://x.com/dev_lapshak' },
    // { icon: Mail, label: 'Email', href: 'lapshakbarnabas@gmail.com' }
  ]

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <footer className='bg-black border-t border-white/10'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8 mb-8'>
          {/* Brand */}
          <div className='space-y-4'>
            <h3 className='text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'>
              Dev_lapshak
            </h3>
            <p className='text-sm text-gray-400'>
              Full-stack developer building beautiful, scalable web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div className='space-y-4'>
            <h4 className='text-white font-semibold'>Quick Links</h4>
            <ul className='space-y-2'>
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className='text-gray-400 hover:text-cyan-400 transition-colors text-sm'
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div className='space-y-4'>
            <h4 className='text-white font-semibold'>Tech Stack</h4>
            <p className='text-sm text-gray-400'>
              React, Next.js, Node.js, Express, PostgreSQL, Docker, Tailwind CSS & more.
            </p>
          </div>

          {/* Social Links */}
          <div className='space-y-4'>
            <h4 className='text-white font-semibold'>Connect</h4>
            <div className='flex gap-4'>
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className='p-2 bg-white/5 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-500/50 rounded-lg transition-all duration-300 hover:scale-110'
                  >
                    <Icon className='w-5 h-5 text-gray-400 hover:text-cyan-400' />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className='border-t border-white/10 py-8'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
            <p className='text-sm text-gray-500 flex items-center gap-1'>
              © {currentYear} Dev_lapshak. Made with
              <Heart className='w-4 h-4 text-red-500' />
              using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer