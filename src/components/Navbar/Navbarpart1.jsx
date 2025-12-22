import React from 'react'

const NavPart1 = () => {
  const scrollToHome = () => {
    const element = document.getElementById('home')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div
      className='group flex cursor-pointer text-base capitalize font-bold pb-5'
      onClick={scrollToHome}
    >
      <div className='transition-transform duration-500 ease-in-expo group-hover:rotate-[360deg]'>
        <span>&copy;</span>
      </div>

      <div className='relative ms-2 flex overflow-hidden whitespace-nowrap transition-all duration-500 ease-in-expo group-hover:pe-8'>
        <h5 className='transition-transform duration-500 ease-in-expo group-hover:-translate-x-full'>
          Code by
        </h5>
        <h5 className='ps-1 transition-transform duration-500 ease-in-expo group-hover:-translate-x-14'>
          Aditya
        </h5>
        <h5 className='absolute left-28 ps-1 transition-transform duration-500 ease-in-expo group-hover:-translate-x-14'>
          Sutar
        </h5>
      </div>
    </div>
  )
}

export default NavPart1