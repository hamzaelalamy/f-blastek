import React from 'react';

function ContactSection() {
  return (
    <div className="border border-solid shadow-2xl  mt-20 md:mt-36 mx-auto  w-72 md:w-2/3 ">
      <h2 className=" md:text-3xl tracking-tight mt-10 font-bold text-center text-[#20B486] underline">Contact Us</h2>

      <div className="md:grid md:grid-cols-2 md:gap-5 gap-0 flex flex-col justify-center items-center ">
      <section className="bg-whit w-52 md:w-full">
  <div className="py-8 lg:py-16 px-4 mx-auto   max-w-screen-md">
      <p className="mb-8 lg:mb-8 font-light  text-black md:text-lg text-xs">Leave us a message</p>
      <form action="#" className="space-y-8">
        
          <div>
              <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-400">Name</label>
              <input type="text" id="subject" className="block p-3 w-full text-xs text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder="Let us know how we can help you" required/>
          </div>
          <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-400 ">Email</label>
              <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 " placeholder="name@flowbite.com" required/>
          </div>
          <div className="sm:col-span-2">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-400 ">Your message</label>
              <textarea id="message" rows={6} className="block p-2.5 w-full text-xs text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 " placeholder="Leave a comment..."></textarea>
          </div>
          <button type="submit" className="py-3 px-5 text-sm font-medium text-center w-full text-white rounded-lg bg-[#20B486]    ">Send </button>
      </form>
  </div>
</section>

<div className='md:mt-30 mt-3 '>
        <h6  className='text-xs p-2  '>B 37/3 Ground Floor Double StoryRamesh Nagar , Near Raja Garden Chowk.Rabat: 110015</h6>
        <h6  className='text-xs p-2 mt-5'>+212570215600</h6>
        <h6  className='text-xs p-2 mt-5'>F’blastek@info.com</h6>
        <div className='flex  mt-1 p-2'>
        <span className="[&>svg]:h-4 [&>svg]:w-4 [&>svg]:fill-black ">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
    <path
      d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
  </svg>
</span>
<span className="[&>svg]:h-4 [&>svg]:w-5 mx-2 [&>svg]:fill-black">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    <path
      d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
  </svg>
</span>
<span className="[&>svg]:h-4 [&>svg]:w-5 mx-2 [&>svg]:fill-black">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
    <path
      d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
  </svg>
</span>
<span className="[&>svg]:h-4 [&>svg]:w-5 mx-2 [&>svg]:fill-black">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 512 512">
    <path
      d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
  </svg>
</span>
        </div>
        
        <div className='px-1 md:mt-10 mt-7 md:w-3/4'>
            <img src="../../../landingPage/map.png" alt="" />
        </div>
      </div>
      </div>

     
    </div>
  );
}

export default ContactSection;
