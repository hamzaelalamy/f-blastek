import React from 'react'
import { Link } from 'react-router-dom'

function MobileHeader() {
  return (
    <div> <ul className="absolute z-50 flex flex-col items-center w-1/4 mt-20 ml-4 space-y-4 scale-125 md:flex-row opacity-96 md:space-y-0 md:space-x-4 bg-gradient-to-l from-gray-400 to-green-400 md:hidden h-2/3 rounded-br-3xl rounded-tl-3xl drop-shadow-2xl">
      <h1 className='mt-5 text-green-700'>F’Blastek</h1>
      <li className='mt-6'>
        <Link to="" className="z-50 text-xs text-white hover:text-gray-300">
          Home
        </Link>
      </li>
      <li>
        <Link to="about" className="text-xs text-white hover:text-gray-300">
          About
        </Link>
      </li>
      <li>
        <Link to="services" className="text-xs text-white hover:text-gray-300">
          Services
        </Link>
      </li>
      <li>
        <Link to="help" className="text-xs text-white hover:text-gray-300">
          Help
        </Link>
      </li>
    </ul></div>
  )
}

export default MobileHeader