import React, { useState, useEffect, useRef } from 'react'
import { AnimatePresence } from 'framer-motion'
import LocomotiveScroll from 'locomotive-scroll'
import 'locomotive-scroll/dist/locomotive-scroll.css'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Project from './pages/Project'
import Contact from './pages/Contact'
import Preloader from './components/Preloader'
import './App.css'

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (!isLoading) {
      const scroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        multiplier: 1, // Adjust scroll speed
        class: 'is-reveal' // Optional: for reveal animations
      });

      return () => {
        if (scroll) scroll.destroy();
      }
    }
  }, [isLoading]);

  return (
    <div className="relative bg-background" ref={scrollRef} data-scroll-container>
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader finishLoading={() => setIsLoading(false)} />}
      </AnimatePresence>

      <Navbar />

      {/* Home Section */}
      <section id="home" className="min-h-screen" data-scroll-section>
        <Home />
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen" data-scroll-section>
        <About />
      </section>

      {/* Projects Section */}
      <section id="work" className="min-h-screen" data-scroll-section>
        <Project />
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen" data-scroll-section>
        <Contact />
      </section>
    </div>
  )
}

export default App