import React, { useState, useEffect } from 'react'
import NavPart1 from './Navbarpart1'
import Navbarpart2 from './Navbarpart2'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed p-4 top-0 inset-x-0 z-50 transition-all duration-700 ${scrolled ? 'shadow-lg' : ''}`}>
      {/* Background layer with backdrop filter to prevent the nav from creating a containing block */}
      <div className={`absolute inset-0 -z-10 transition-all duration-700 ${scrolled ? 'bg-zinc-950/50 backdrop-blur-md' : 'bg-transparent'}`}></div>
      <div className='flex justify-between items-center px-4 md:px-8 text-background'>
        <NavPart1 />
        <Navbarpart2 />
      </div>
    </nav>
  )
}

export default Navbar