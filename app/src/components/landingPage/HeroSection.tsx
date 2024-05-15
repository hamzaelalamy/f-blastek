import React, { useState } from 'react';
import Header from '../common/Header';
import HamburgerButton from '../common/HamburgerMenuButton/HamburgerButton';
import MobileHeader from '../common/HamburgerMenuButton/MobileHeader';

function HeroSection() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      <div className="relative bg-cover bg-center h-[400px] lg:h-[600px] xl:h-[700px] ">
       
        <img className="absolute inset-0 w-full h-full object-cover " src="../../../landingPage/hero6.png" alt="Hero Image" />
        <div className="absolute inset-0 bg-black opacity-55"></div>
        <div className="absolute inset-0 flex items-center justify-center -mt-20">
          <div className="text-white text-center">
            <h1 className="md:text-3xl lg:text-6xl font-bold mt-32 mb-4 text-[20px]"><span className="text-[#20B486]   drop-shadow-[0_1px_0px_rgba(255,255,255,1)]  ">Empowering</span> Lives, </h1>
            <h1 className="md:text-3xl lg:text-6xl font-bold mb-4 text-[20px]"> One Service at a Time</h1>
            <h1 className="md:text-3xl lg:text-6xl font-bold mb-4 text-[20px]">Nurturing, <span className="text-[#20B486] drop-shadow-[0_1.95px_0px_rgba(255,255,255,1)]">Caring</span>, Supporting!</h1>
            <h1 className="md:text-3xl lg:text-6xl font-bold mb-4 text-xl"></h1>
            <p className="lg:text-lg text-[8px] font-bold lg:mt-10 text-[#02033B]">Your Trusted Platform for Exceptional Services: Babysitting, Household Help, Personal Assistance,, School Support </p>
            <p className="lg:text-lg text-xs lg:block font-bold hidden text-[#11033A]">  Care Assistance - Empowering Lives, One Service at a Time!</p>
            <div className="flex justify-start lg:mt-10">
              <button className="flex items-center bg-[#20B486] text-white lg:ml-40 lg:w-52 lg:p-4 lg:pr-5 rounded-md ml-6 mt-7 p-2 md:w-40 w-30"><span className="mr-auto flex-grow text-[10px] lg:text-[13px] "> I am looking For a job</span>  <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg></button>
              <button className="flex items-center bg-[#20B486] text-white lg:ml-24 lg:w-52 lg:p-2 rounded-md mt-7 ml-2 p-2 md:w-40 w-30"> <span className="mr-auto flex-grow text-[10px] lg:text-[13px] "> I am looking For home help</span> <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg></button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
