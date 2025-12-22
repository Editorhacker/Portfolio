import React from 'react'

const Img = () => {
  return (
    <div className='max-h-full max-w-fit'>
      <img 
        className='h-screen w-screen object-cover' 
        src="./src/assets/img.jpg"   // if inside public/assets/
        alt="img" 
      />
      
    </div>
  )
}

export default Img
