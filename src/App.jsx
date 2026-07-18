import React, { useState, useEffect, lazy, Suspense } from 'react'
import { AnimatePresence } from 'framer-motion'
import Lenis from 'lenis'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import Preloader from './components/Preloader'
import './App.css'

// Lazy-load below-the-fold sections for faster initial paint
const About = lazy(() => import('./pages/About'))
const Experience = lazy(() => import('./pages/Experience'))
const Project = lazy(() => import('./pages/Project'))
const Contact = lazy(() => import('./pages/Contact'))

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,          // slightly longer = smoother feel
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // expo easing
      smoothWheel: true,
      wheelMultiplier: 0.8,   // reduce wheel sensitivity = less jank
      touchMultiplier: 1.5,
    })
    let rafId;

    function raf(time) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }

    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])

  return (
    <div className="relative bg-background">
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader finishLoading={() => setIsLoading(false)} />}
      </AnimatePresence>

      <Navbar />

      {/* Home Section - eagerly loaded (above the fold) */}
      <section id="home" className="min-h-screen">
        <Home />
      </section>

      {/* Below-the-fold sections - lazy loaded */}
      <Suspense fallback={<div className="min-h-screen bg-zinc-950" />}>
        {/* About Section */}
        <section id="about" className="min-h-screen">
          <About />
        </section>

        {/* Experience Section */}
        <section id="experience" className="min-h-screen">
          <Experience />
        </section>

        {/* Projects Section */}
        <section id="work" className="min-h-screen">
          <Project />
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen">
          <Contact />
        </section>
      </Suspense>
    </div>
  )
}

export default App