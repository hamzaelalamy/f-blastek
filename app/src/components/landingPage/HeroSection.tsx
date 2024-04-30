import React from 'react'
import Header from '../common/Header'
import HamburgerButton from "../common/HamburgerMenuButton/HamburgerButton"
import { useState } from "react";

function HeroSection() {

const [mobileMenu,setMobileMenu]=useState(false)

  return (
    <>

    <div className="relative bg-cover bg-center h-[400px] lg:h-[600px] xl:h-[700px] ">
    <Header />
    {mobileMenu &&  <ul className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 z-50 bg-green-500 absolute md:hidden ">
            <li>
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
          </ul>
          
          }
    <HamburgerButton mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />


  <img className="absolute inset-0 w-full h-full object-cover " src="../../../public/landingPage/hero3.png " alt="Hero Image"/>
<div className='absolute inset-0 bg-black  opacity-55'></div>
 
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="text-white text-center">
        <h1 className="md:text-3xl lg:text-6xl font-bold mt-20 mb-4  text-xl"><span className='text-[#20B486] '>Empowering</span> Lives, One</h1>
        <h1 className="md:text-3xl lg:text-6xl font-bold mb-4 text-xl">One Service at a Time</h1>
        <h1 className="md:text-3xl lg:text-6xl font-bold mb-4 text-xl">Nurturing, <span className='text-[#20B486]'>Caring</span>,</h1>
        <h1 className="md:text-3xl lg:text-6xl font-bold mb-4 text-xl">Supporting!</h1>
      {/* <h1 className="text-4xl lg:text-6xl font-bold mb-4"> <span className='text-[#43d7a8]'>Empowering</span> Lives, One Service at a Time Nurturing, <span className='text-[#20B486]'>Caring</span>, Supporting!</h1> */}
      {/* <p className="text-lg lg:text-xs text-[#11033A]">Your Trusted Platform for Exceptional Services: Babysitting, Household Help, Personal Assistance, Care Assistance, School Support, and Pet Walking - Empowering Lives, One Service at a Time!</p> */}
   
   <button className='bg-[#20B486] text-white mt-20 ml-10 p-2 pr-10 rounded-md sm:mt-1'>I am looking for a job</button>
   <button className='bg-[#20B486] text-white ml-10 p-2 rounded-md'>I am looking for home help</button>
    </div>
  </div>
</div>
</>
  )
}

export default HeroSection