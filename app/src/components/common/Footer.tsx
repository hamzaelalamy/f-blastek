import React from "react";

function Footer() {
  return (
    <div className="mt-20 border border-solid h-full pt-10 pl-10">
      <div className="grid md:grid-cols-5 grid-cols-2 gap-1 ">
        <div className=" ">
          <h2 className="text-[#20B486] font-bold text-l md:text-2xl">F'Blastek</h2>
          <h6 className="mt-6 text-xs  md:text-sm">F’blastek@info.com</h6>
          <h6 className="mt-6 text-xs md:text-sm">+212570215600</h6>
        </div>
        <div className="">
          <h3 className="text-[#20B486] mt-5">Information</h3>
         <ul className="text-[#7E7E7E]">
         <li className="mt-5 text-xs  md:text-sm">
            Home
            </li>
            <li className="mt-2 text-xs  md:text-sm">
            About us
            </li>
           
            <li className="mt-2 text-xs  md:text-sm">
            Services
            </li>
            <li className="mt-2 text-xs  md:text-sm">
            Contact Us
            </li>
         </ul>
        </div>
        <div className="">
          <h3 className="text-[#20B486] mt-5">Services</h3>
         <ul className="text-[#7E7E7E]">
         <li className="mt-5 text-xs  md:text-sm">
         Babysitter
            </li>
            <li className="mt-2 text-xs  md:text-sm">
            Soutien Scolaire
            </li>
           
            <li className="mt-2 text-xs  md:text-sm">
            Aide a la personne
            </li>
            <li className="mt-2 text-xs  md:text-sm ">
            Menage
            </li>
         </ul>
        </div>
        <div className="">
          <h3 className="text-[#20B486] mt-5">Useful links</h3>
         <ul className="text-[#7E7E7E]">
         <li className="mt-5 text-xs  md:text-sm">
         My Account
            </li>
            <li className="mt-2 text-xs  md:text-sm">
            Offres            </li>
           
            <li className="mt-2 text-xs  md:text-sm">
            Become a Partner
            </li>
            <li className="mt-2 text-xs  md:text-sm">
            S’inscrire
            </li>
         </ul>
        </div>
        <div className="md:col-span-1 col-span-2">
          <h3 className="text-[#20B486] mt-5">Newsletter</h3>
         
         <h6 className="mt-5 text-xs  md:text-sm text-[#7E7E7E]">
         Subscribe to our newsletter
            </h6>
            <input className=" w-2/3 md:w-full text-xs  md:text-sm mt-4 p-5 pl-0   bg-[#F5F5F5] text-[#9B9B9B] rounded-lg" type="email" placeholder="Your email address" />
           <button className="w-2/3 bg-[#20B486] text-sm mt-4 text-white rounded-lg p-3">Subscribe</button>
        </div>
      </div>
      <footer className="mt-10 md:flex ">
        <div className="text-[#7E7E7E] mt-3 md:block hidden w-1/3 text-xs">
        © 2024  F’Blastek. All rights reserved.
        </div>
        <div className="container mx-auto flex justify-center  items-center space-x-4">
        <img src="../../../landingPage/footer-payment-method.png" alt="Visa" className="h-6" />
      </div>
      <div className='md:flex  mt-1 p-2  hidden'>
      <span className="[&>svg]:h-4 [&>svg]:w-5 mx-1 [&>svg]:fill-[#9B9B9B]">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    {/* <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. --> */}
    <path
      d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
  </svg>
</span>
<span className="[&>svg]:h-4 [&>svg]:w-5 mx-1 [&>svg]:fill-[#9B9B9B]">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
    {/* <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. --> */}
    <path
      d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
  </svg>
</span>
        <span className="[&>svg]:h-4 mx-1 [&>svg]:w-4 [&>svg]:fill-[#9B9B9B] ">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
    {/* <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. --> */}
    <path
      d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
  </svg>
</span>


<span className="[&>svg]:h-4 [&>svg]:w-5 mx-1 [&>svg]:fill-[#9B9B9B]">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 512 512">
    {/* <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. --> */}
    <path
      d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
  </svg>
</span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
