import React, { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Lenis from 'lenis'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Project from './pages/Project'
import Contact from './pages/Contact'
import Preloader from './components/Preloader'
import './App.css'

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      // Lenis cleanup if needed, though usually global on window
      lenis.destroy()
    }
  }, [])

  return (
    <div className="relative bg-background">
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader finishLoading={() => setIsLoading(false)} />}
      </AnimatePresence>

      <Navbar />

      {/* Home Section */}
      <section id="home" className="min-h-screen">
        <Home />
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen">
        <About />
      </section>

      {/* Projects Section */}
      <section id="work" className="min-h-screen">
        <Project />
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen">
        <Contact />
      </section>
    </div>
  )
}

export default App