import React from 'react'
import BlurText from '../components/home/BlurText'
import { motion } from 'framer-motion'
import CurvedArrow from '../components/about/CurvedArrow'

const Home = () => {
  return (
    <div className="relative min-h-screen w-full bg-zinc-950 overflow-hidden flex items-center justify-center px-4 md:px-6">
      {/* Background Decor */}
      <div className="absolute top-[-10%] right-[-5%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-indigo-500/20 rounded-full blur-[80px] md:blur-[120px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-blue-600/10 rounded-full blur-[80px] md:blur-[120px] pointer-events-none mix-blend-screen" />

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 items-center relative z-10 pt-20 lg:pt-0">

        {/* Left Content */}
        <div className="flex flex-col items-start justify-center order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }} // Delay after preloader
          >
            <h5 className="text-lg md:text-2xl font-serif text-zinc-400 mb-2 italic tracking-wide">
              Hello, I am
            </h5>
          </motion.div>

          <div className="relative mb-4">
            <BlurText
              text="Aditya Sutar"
              delay={150}
              animateBy="words"
              direction="top"
              className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-myFont font-bold text-white leading-tight tracking-tighter"
            />

            {/* Decorative Arrow pointing to name/work */}
            <motion.div
              initial={{ opacity: 0, rotate: 12, scale: 0.8 }}
              animate={{ opacity: 1, rotate: 12, scale: 1 }}
              transition={{ delay: 2.5, duration: 0.8 }}
              className="absolute -right-8 -top-8 w-12 md:w-auto md:-right-20 md:-top-16 opacity-60 hidden md:block"
            >
              <CurvedArrow />
            </motion.div>
          </div>

          <motion.h5
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="text-xl md:text-3xl font-caveat text-blue-400 font-medium tracking-wide mb-8 md:mb-10"
          >
            MERN STACK DEVELOPER
          </motion.h5>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.2 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto"
          >
            <a href="#work" className="px-6 py-3 md:px-8 md:py-3 bg-white text-black font-bold rounded-full hover:bg-zinc-200 transition-colors text-center">
              View Work
            </a>
            <a href="#contact" className="px-6 py-3 md:px-8 md:py-3 border border-zinc-700 text-white font-bold rounded-full hover:bg-zinc-900 transition-colors text-center">
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
          className="relative order-1 lg:order-2 flex justify-center lg:justify-end mb-8 lg:mb-0"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[600px]">
            {/* Image Container with Mask */}
            <div className="absolute inset-0 rounded-[1.5rem] md:rounded-[2rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 z-10 shadow-2xl shadow-blue-900/20">
              <img
                src="./src/assets/img.jpg" // Using the path found in previous Photo.jsx
                alt="Aditya Sutar"
                className="w-full h-full object-cover transform scale-105 hover:scale-110 transition-transform duration-700"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-60" />
            </div>

            {/* Decorative Elements behind image */}
            <div className="absolute -inset-3 md:-inset-4 border border-zinc-800 rounded-[2rem] md:rounded-[2.5rem] z-0" />
            <div className="absolute -bottom-6 -left-6 md:-bottom-8 md:-left-8 w-24 h-24 md:w-32 md:h-32 bg-zinc-900/80 backdrop-blur-md rounded-2xl border border-zinc-800 z-20 flex items-center justify-center shadow-xl hidden sm:flex">
              <div className="text-center">
                <span className="block text-2xl md:text-3xl font-bold text-white">1+</span>
                <span className="text-[10px] md:text-xs text-zinc-400 uppercase tracking-widest">Years Exp.</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  )
}

export default Home
