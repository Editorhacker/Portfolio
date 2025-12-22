import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const Navbarpart2 = () => {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setIsOpen(false)
    }
  }

  const menuItems = [
    { id: 'about', label: 'About' },
    { id: 'work', label: 'Work' },
    { id: 'contact', label: 'Contact' }
  ]

  return (
    <div>
      {/* Desktop Menu */}
    <div className='hidden md:flex justify-between items-center gap-8 cursor-pointer text-white text-base capitalize font-bold pb-5'>
  {menuItems.map((item) => (
    <h4
      key={item.id}
      onClick={() => scrollToSection(item.id)}
      className='group relative flex flex-col items-center transition-transform duration-300 hover:scale-110'
    >
      {item.label}

      {/* Dot appears only on hover */}
      <div className='mt-1 w-1 h-1  bg-white rounded-full 
                      opacity-0 scale-0 
                      group-hover:opacity-100 group-hover:scale-110 
                      transition-all duration-300'>
      </div>
    </h4>
  ))}
</div>


      {/* Mobile Menu Toggle */}
      <div className="md:hidden pb-5">
        <button onClick={() => setIsOpen(true)} className="text-white p-2">
          <Menu className="w-8 h-8" />
        </button>
      </div>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 bg-black/95 backdrop-blur-xl z-50 flex flex-col items-center justify-center"
          >
            <div className="absolute top-5 right-4 md:right-8">
              <button onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white transition-colors p-4">
                <X className="w-10 h-10" />
              </button>
            </div>

            <div className="flex flex-col gap-10 text-center">
              {menuItems.map((item) => (
                <motion.h4
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className='text-5xl font-sans font-bold text-white cursor-pointer hover:text-blue-500 transition-colors'
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.label}
                </motion.h4>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Navbarpart2