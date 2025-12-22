import React from 'react'
import NavPart1 from './Navbarpart1'
import Navbarpart2 from './Navbarpart2'

const Navbar = () => {
  return (
    <nav className='fixed p-5 top-0 inset-x-0 z-50 bg-black/30 '>
      <div className='flex justify-between items-center px-4 md:px-8 text-background'>
        <NavPart1 />
        <Navbarpart2 />
      </div>
    </nav>
  )
}

export default Navbar