import React, { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <nav className='fixed top-0 left-0 w-full z-50 bg-black bg-opacity-20 backdrop-blur-md'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16 md:h-20'>
          {/* Logo */}
          <div className='flex-shrink-0'>
            <span className='text-xl md:text-2xl font-bold bg-white bg-clip-text text-transparent flex items-center'>
              <img className='w-10 mr-5' src="/logo.png" alt="" />
              <h1>Dev_lapshak</h1>

            </span>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden md:block'>
            <div className='ml-10 flex items-baseline space-x-1 lg:space-x-2'>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className='text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm lg:text-base font-medium transition-all duration-300 hover:bg-white/10 relative group'
                >
                  {link.name}
                  <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300'></span>
                </a>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className='hidden md:block'>
            <button className='bg-gradient-to-r from-cyan-400 to-blue-600 text-black font-semibold px-6 py-2 rounded-xl hover:shadow-lg hover:shadow-cyan-400/50 transition-all duration-300 transform hover:scale-105'>..
              <a href="https://web.facebook.com/kupsi.barnabas/">Lets Talk</a>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className='md:hidden'>
            <button
              onClick={toggleMenu}
              className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none transition-all duration-300'
            >
              {isOpen ? (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-64 bg-black/80 backdrop-blur-md' : 'max-h-0'
        }`}
      >
        <div className='px-2 pt-2 pb-3 space-y-1 border-t border-white/10'>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className='text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover:bg-white/10'
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
           <button className='bg-gradient-to-r from-cyan-400 to-blue-600 text-black font-semibold px-6 py-2 rounded-xl hover:shadow-lg hover:shadow-cyan-400/50 transition-all duration-300 transform hover:scale-105'>..
              <a href="https://web.facebook.com/kupsi.barnabas/">Lets Talk</a>
            </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar