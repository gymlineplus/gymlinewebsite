import React from 'react'

const page = () => {
  return (
    <div className='w-full h-screen flex flex-col items-center justify-center'>
      <h1 className='lg:text-9xl text-7xl'>About Us</h1>
      <p className='lg:text-2xl text-xl w-100  lg:w-1/2 text-center mt-4 '>
      At Gymline, we bring world-class fitness equipment and premium supplements together under one roof. As the official distributor of globally recognized brands, we’re committed to supporting your fitness journey with quality, reliability, and innovation.
      
      Driven by passion, powered by performance — we are Gymline.
      </p>
      <button className="bg-black mt-8 dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
        Connect with Us
        </button>
    </div>
  )
}

export default page
