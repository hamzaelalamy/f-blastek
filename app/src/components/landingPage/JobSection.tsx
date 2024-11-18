import AOS from 'aos';
import 'aos/dist/aos.css';

import {useEffect} from "react";

// import React from "react";

function JobSection() {
  useEffect(() => {
    AOS.init({duration:2000});
  }, [])
  return (
    <div>
      <div className="flex flex-col items-center mx-auto justify-center mt-7">
        <h2 className=" text-[#20B486] font-bold md:text-3xl">
          A simple platform to find a job quickly
        </h2>
        <h5 className="text-black text-[10px] text-center w-64 md:text-sm md:w-fit md:mt-4">
          Lorem ipsum det, cowec tetur duis necgi det, consec t eturlagix
          adipiscing eliet, cowec tetopak ec tetur duis necgi
        </h5>
      </div>

      <div className="flex flex-col justify-items-center items-center justify-center mt-10  md:flex md:flex-col md:justify-center md:items-center ">
        <div className=" flex flex-col  items-center justify-center md:grid md:grid-cols-2 md:gap-0">
          <img
            className=" w-1/2 md:w-2/3 md:order-first md:justify-center order-2 " data-aos="fade-right"
            src="../../../landingPage/Find.png"
            alt=""
          />
          <div className="flex flex-col justify-items-center justify-center items-center md:w-1/2 order-1">
            <h3 className="text-[#FF5C1A] font-bold  justify-center" data-aos="fade-left">Find</h3>

            <p className="text-[#7E7E7E] text-xs w-60 text-center mt-3 mb-4 md:order-3 md:text-[14px] " data-aos="fade-left">
              Among over 1 million qualified and trustworthy professionals, find
              the babysitter, school support teacher, personal assistant, or
              pet-sitter that meets your needs.
            </p>
          </div>
        </div>
        <div className=" flex flex-col justify-items-center items-center justify-center md:grid md:grid-cols-2 md:gap-0 ">
        <div className="flex flex-col justify-center items-center mb-4 md:w-1/2 order-1">
            <h3 className="text-[#FF5C1A] font-bold " data-aos="fade-right">Book</h3>

            <p className="text-[#7E7E7E] text-xs w-60 text-center mt-3 mb-4 md:order-3 md:text-[14px] " data-aos="fade-right">
            For regular or occasional needs, book your home help in just a few clicks.Lorem ipsum det, cowec tetur duis necgi det, consec t eturlagix adipiscing eliet,
            </p>
          </div>
          <img
            className="w-1/2 md:w-2/3 md:justify-center order-2 " data-aos="fade-left"
            src="../../../landingPage/Book.png"
            alt=""
          />
         
        </div>
        
        <div className=" flex flex-col justify-items-center items-center justify-center md:grid md:grid-cols-2 md:gap-0 ">
          <img
            className="w-1/2 md:w-2/3 md:order-first md:justify-center order-2" data-aos="fade-right"
            src="../../../landingPage/Pay.png"
            alt=""
          />
          <div className="flex flex-col  justify-center items-center mb-4 md:w-1/2 order-1">
            <h3 className="text-[#FF5C1A] font-bold  justify-center" data-aos="fade-left">Pay</h3>

            <p className="text-[#7E7E7E] text-xs w-60  text-center  mt-3 md:order-3 md:text-[14px]" data-aos="fade-left">
            Via the platform, it's simple, fast, and above all 100% secure.Lorem ipsum det, cowec tetur duis necgi det, consec t eturlagix adipiscing eliet,
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobSection;
