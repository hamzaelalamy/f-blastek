import React from 'react'

function MobileHeader() {
  return (
    <div> <ul className="flex flex-col mt-20 ml-4 md:flex-row items-center opacity-96 space-y-4 md:space-y-0 md:space-x-4 z-50 bg-gradient-to-l from-gray-400 to-green-400 absolute md:hidden  w-1/4 h-2/3 rounded-br-3xl rounded-tl-3xl drop-shadow-2xl scale-125">
    <h1 className='text-green-700 mt-5'>F’Blastek</h1>
    <li className='mt-6'>
      <a href="#" className="text-white text-xs hover:text-gray-300 z-50">
        Home
      </a>
    </li>
    <li>
      <a href="#" className="text-white text-xs hover:text-gray-300">
        About
      </a>
    </li>
    <li>
      <a href="#" className="text-white text-xs hover:text-gray-300">
        Services
      </a>
    </li>
    <li>
      <a href="#" className="text-white text-xs hover:text-gray-300">
        Contact
      </a>
    </li>
  </ul></div>
  )
}

export default MobileHeader