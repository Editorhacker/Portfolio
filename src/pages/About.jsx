import React from 'react'
import CurvedArrow from '../components/about/CurvedArrow'
import { motion } from 'framer-motion'

const About = () => {
  const skills = [
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', className: "invert" },
    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Express', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', className: "invert" },
    { name: 'HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'TailwindCSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'GSAP', logo: 'https://cdn.worldvectorlogo.com/logos/gsap-greensock.svg' },
    { name: 'AWS', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg', className: "invert" },
    { name: 'Firebase', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
    { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'Vite', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg' },
    { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', className: "invert" }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 md:px-6 bg-zinc-950 text-foreground flex flex-col justify-center text-justify relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-20 left-10 w-48 h-48 md:w-72 md:h-72 bg-blue-500/10 rounded-full blur-[80px] md:blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-48 h-48 md:w-72 md:h-72 bg-purple-500/10 rounded-full blur-[80px] md:blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

        {/* Left Column: Bio */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col relative"
        >
          <div className="flex flex-col mb-2">
            <h2 className="text-5xl sm:text-6xl md:text-8xl font-caveat font-bold text-white relative z-10">
              About Me
            </h2>

            <div className='ml-10'>
              <CurvedArrow />
            </div>
          </div>

          <div className="space-y-6 text-xl text-zinc-400 font-light leading-relaxed">
            <p>
              Hi! I'm <span className="text-white font-semibold relative inline-block">
                Aditya Sutar
                <span className="absolute bottom-1 left-0 w-full h-1 bg-blue-500/50 -z-10"></span>
              </span>,
              a passionate <span className="text-zinc-200">MERN Stack Developer</span> based in India.
            </p>

            <p>
              I specialize in building full-stack applications using <span className="text-zinc-200">MongoDB, Express.js, React, and Node.js</span>.
              My journey involves turning clean code into functional, beautiful, and seamless user experiences.
            </p>

            <p>
              When I'm not coding, I'm exploring new web technologies, optimizing application performance, or refining design details to perfection.
            </p>
          </div>
        </motion.div>

        {/* Right Column: Skills */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-myFont font-bold text-white mb-8 border-l-4 border-blue-500 pl-4">
            Tech Stack
          </h3>

          <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, borderColor: "rgba(59, 130, 246, 0.5)" }}
                className="bg-white/5 border border-white/10 backdrop-blur-sm p-4 rounded-xl flex flex-col items-center justify-center gap-3 transition-colors hover:bg-white/10 group aspect-square"
              >
                <div className="relative w-10 h-10 flex items-center justify-center">
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className={`w-full h-full object-contain filter transition-all duration-300 ${skill.className || ''} group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]`}
                  />
                </div>
                <span className="text-xs font-medium text-zinc-400 group-hover:text-white transition-colors">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  )
}

export default About