import React from 'react'

function ServiceSection() {
  return (
    <div className='mt-24'>
 <h2 className="flex flex-col items-center justify-center mt-10 text-[#20B486] font-bold lg:text-3xl">
 Varied Services to Meet All Your Needs
        </h2>
       

      <div className=" flex flex-col  mt-10 items-center  justify-center  lg:grid lg:grid-cols-4 lg:gap-0 ">
        <div className="  mb-5 flex flex-col items-center  justify-center ">
          <img
            className=" lg:w-60 w-56  lg:mx-0  justify-center"
            src="../../../landingPage/babysitting.png"
            alt=""
          />
          <div className="flex flex-col justify-center items-center lg:w-1/2 order-1">
            <h3 className="text-[#EBB016] font-bold mt-5 justify-center ">BABY SITTING</h3>

            <p className="text-[#7E7E7E] text-[8px] w-60  lg:text-[14px] text-center">
              Among over 1 million qualified and trustworthy professionals, find
              the babysitter, school support teacher, personal assistant, or
              pet-sitter that meets your needs.
            </p>
            <button className='bg-[#20B486] text-white  lg:w-56   lg:p-1 rounded-md mt-7  p-1 lg:mb-3 lg:text-sm text-[10px] w-40'> Voir les profils califiés </button>
          </div>
        </div>
        <div className="  mb-5 flex flex-col items-center  justify-center  ">
          <img
            className="lg:w-60 w-56 mx-auto lg:mx-0 justify-center"
            src="../../../landingPage/SOUTIEN SCOLAIRE.png"
            alt=""
          />
          <div className="flex flex-col justify-center items-center lg:w-1/2 ">
            <h3 className="text-[#EBB016] font-bold mt-5 justify-center">SOUTIEN SCOLAIRE</h3>

            <p className="text-[#7E7E7E] text-[8px] w-60  lg:text-[14px] text-center">
              Among over 1 million qualified and trustworthy professionals, find
              the babysitter, school support teacher, personal assistant, or
              pet-sitter that meets your needs.
            </p>
            <button className='bg-[#20B486] text-white  lg:w-56   lg:p-1 rounded-md mt-7  p-1 lg:mb-3 lg:text-sm text-[10px] w-40'> Voir les profils califiés </button>
          </div>
        </div>
        <div className="  mb-5 flex flex-col items-center  justify-center  ">
          <img
            className="lg:w-60 w-56 mx-auto lg:mx-0 justify-center"
            src="../../../landingPage/AIDEALAPERSONNE.png"
            alt=""
          />
          <div className="flex flex-col justify-center items-center lg:w-1/2 ">
            <h3 className="text-[#EBB016] font-bold mt-5 justify-center">AIDE LA PERSONNE</h3>

            <p className="text-[#7E7E7E] text-[8px] w-60  lg:text-[14px] text-center">
              Among over 1 million qualified and trustworthy professionals, find
              the babysitter, school support teacher, personal assistant, or
              pet-sitter that meets your needs.
            </p>
            <button className='bg-[#20B486] text-white  lg:w-56   lg:p-1 rounded-md mt-7  p-1 lg:mb-3 lg:text-sm text-[10px] w-40'> Voir les profils califiés </button>
          </div>
        </div>
        <div className=" mb-5 flex flex-col items-center  justify-center ">
          <img
            className="lg:w-60 w-56 mx-auto lg:mx-0 justify-center"
            src="../../../landingPage/Menage.png"
            alt=""
          />
          <div className="flex flex-col justify-center items-center lg:w-1/2 ">
            <h3 className="text-[#EBB016] font-bold mt-5 justify-center">MENAGE</h3>

            <p className="text-[#7E7E7E] text-[8px] w-60  lg:text-[14px] text-center">
              Among over 1 million qualified and trustworthy professionals, find
              the babysitter, school support teacher, personal assistant, or
              pet-sitter that meets your needs.
            </p>
            <button className='bg-[#20B486] text-white  lg:w-56   lg:p-1 rounded-md mt-7  p-1 lg:mb-3 lg:text-sm text-[10px] w-40'> Voir les profils califiés </button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ServiceSection