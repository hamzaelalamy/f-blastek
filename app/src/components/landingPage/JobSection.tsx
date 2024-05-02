import React from "react";

function JobSection() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center mt-7">
        <h2 className=" text-[#20B486] font-bold lg:text-3xl">
          A simple platform to find a job quickly
        </h2>
        <h4 className="text-black text-[8px] w-64 lg:text-sm lg:w-fit lg:mt-4">
          Lorem ipsum det, cowec tetur duis necgi det, consec t eturlagix
          adipiscing eliet, cowec tetopak ec tetur duis necgi
        </h4>
      </div>

      <div className="flex flex-col  items-center justify-center mt-10  lg:flex lg:flex-col lg:justify-center lg:items-center ml-10  ">
        <div className=" flex flex-col  items-center justify-center lg:grid lg:grid-cols-2 lg:gap-0   ">
          <img
            className="w-1/2 lg:w-1/2 lg:order-first order-2"
            src="../../../public/landingPage/Find.png"
            alt=""
          />
          <div className="flex flex-col justify-center items-center lg:w-1/2 order-1">
            <h3 className="text-[#FF5C1A] font-bold  justify-center">Find</h3>

            <p className="text-[#7E7E7E] text-[8px] sm:w-64  mt-3 mb-4 lg:order-3 lg:text-[14px]">
              Among over 1 million qualified and trustworthy professionals, find
              the babysitter, school support teacher, personal assistant, or
              pet-sitter that meets your needs.
            </p>
          </div>
        </div>
        <div className=" flex flex-col  items-center justify-center lg:grid lg:grid-cols-2 lg:gap-0 ">
        <div className="flex flex-col justify-center items-center mb-4 lg:w-1/2 order-1">
            <h3 className="text-[#FF5C1A] font-bold ">Book</h3>

            <p className="text-[#7E7E7E] text-[8px]  sm:w-64 mt-3 lg:text-[14px] ">
            For regular or occasional needs, book your home help in just a few clicks.Lorem ipsum det, cowec tetur duis necgi det, consec t eturlagix adipiscing eliet,
            </p>
          </div>
          <img
            className="w-1/2 lg:w-1/2 order-2 "
            src="../../../public/landingPage/Book.png"
            alt=""
          />
         
        </div>
        
        <div className=" flex flex-col  items-center justify-center lg:grid lg:grid-cols-2 lg:gap-0   ">
          <img
            className="w-1/2 lg:w-1/2 lg:order-first order-2"
            src="../../../public/landingPage/Pay.png"
            alt=""
          />
          <div className="flex flex-col justify-center items-center mb-4 lg:w-1/2 order-1">
            <h3 className="text-[#FF5C1A] font-bold  justify-center">Pay</h3>

            <p className="text-[#7E7E7E] text-[8px] sm:w-64  mt-3 lg:order-3 lg:text-[14px]">
            Via the platform, it's simple, fast, and above all 100% secure.Lorem ipsum det, cowec tetur duis necgi det, consec t eturlagix adipiscing eliet,
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobSection;
