import React from 'react'

const Hero = () => {
  return (
    <div className='h-screen w-{100%}'>
      <h1 className='ml-6 font-serif text-2xl pt-5 pb-3 bg-slate-200 '>Digital Marketing Expert</h1>
      <p className='ml-12 mr-20 pb-6 '>Welcome to my portfolio! As a digital marketing expert, I specialize in driving brand growth and maximizing online presence. With a data-driven approach and a passion for innovation, I help businesses navigate the digital landscape to achieve their marketing goals. Explore my work and discover how I can elevate your brand's visibility and engagement.</p>
      <h2 className='ml-6 pb-3 font-serif text-2xl bg-slate-200 pt-5 '>Crafting Innovative Websites</h2>
      <p className='ml-12 mr-20 pb-3'>Welcome to my portfolio! I’m a passionate web developer dedicated to crafting stunning, user-friendly websites that elevate brands and engage audiences. With a focus on innovation and functionality, I transform ideas into seamless online experiences. Explore my work and let’s bring your vision to life!</p>
      
      <button className='p-2 ml-12 mt-7 bg-red-600 m1 border-red-700 border-4 rounded-md text-xl
      font-bold text-white '> Contact Us</button>
    </div>
  )
}

export default Hero
