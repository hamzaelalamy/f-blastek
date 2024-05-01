import React from 'react'

function MobileHeader() {
  return (
    <div> <ul className="flex flex-col mt-20 ml-3 md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 z-50 bg-gradient-to-r from-green-400 to-blue-500 absolute md:hidden  w-20 h-1/2 rounded-xl drop-shadow-2xl scale-125">
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