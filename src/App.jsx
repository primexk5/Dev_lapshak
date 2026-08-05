import React from 'react'
import Navbar from './molecules/Navbar.jsx'
import Footer from './molecules/Footer.jsx'
import Hero from './components/Hero.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'

function App() {
  return (
    <div className="min-h-screen flex flex-col selection:bg-accent selection:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
