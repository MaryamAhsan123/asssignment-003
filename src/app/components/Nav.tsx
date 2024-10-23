import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <div className='bg-gradient-to-r from bg-teal-600 flex justify-between items-center p-2
    '>
        
      <h1 className='text-slate-300 text-5xl m-3 font-bold cursor-pointer font-mono italic'  > MARYAM AHSAN </h1>
      <ul className='flex gap-6 font-bold mr-4 cursor-pointer font-serif text-2xl'>

        <Link className=' hover:text-yellow-200' href="/" >Home</Link>
        <Link className=' hover:text-blue-400' href="/" >About</Link>
        <Link className=' hover:text-green-400' href="/">Skills</Link>
        <Link className=' hover:text-violet-700' href="/" >Contact</Link>


      </ul>
      
      
    </div>
  )
}

export default Nav
