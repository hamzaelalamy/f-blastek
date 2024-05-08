import React from 'react'

function AboutSection() {
  return (
    <div>
        <div className='md:grid md:grid-cols-2 mt-24 mx-10'>
<div>
    <h1 className='text-[#20B486] font-bold md:text-3xl'>About Us</h1>
    <h2 className='md:text-2xl mt-3'> <span className='text-[#EBB016]'>VOTRE SATISFACTION</span> EST </h2>
    <h2 className='md:text-2xl'>NOTRE PRIORITÉ</h2>
    <p className='mt-7'>
    <span className='text-[#9DB2BF]'>F’Blastek</span> Une plateforme de mise en relation et d'assistance dans les démarches administratives relative à l'embauche d'un.e salarié.e à domicile. Les personnes cherchant une aide à domicle y trouvent des assistantes maternelles, des baby-sitters, des femmes de ménage, des auxiliaires de vie, des aides à domicile, des dames de compagnie ou encore des professeurs de soutien scolaire et cours particuliers.
    </p>
    <p> <span className='text-[#9DB2BF]'>F’Blastek</span> automatise toutes vos démarches et vous permet de profiter d'un acompagnement administratif et juridique personnalisé.</p>
    <button className='flex items-center  bg-[#FF5C1A] text-white   rounded-3xl  mt-5 p-2  '><span className="mr-auto flex-grow text-[10px] lg:text-l lg:font-bold"> Join Us</span>  <svg className="rtl:rotate-180 w-3 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M1 5h12m0 0L9 1m4 4L9 9"/>
</svg></button>
</div >

<div className='md:grid md:grid-rows-2 md:w-2/3 lg:w-full w-1/2 flex mt-3 gap-2 bg-[#F2F2F2]'>
<img className=' lg:mr-20 lg:mx-auto lg:col-start-2 flex-1' src="../../../landingPage/about1.png" alt="" />
<img className=' lg:ml-20 lg:mx-auto lg:col-end-1 float-end' src="../../../landingPage/about2.png" alt="" />

</div>
        </div>
    </div>
  )
}

export default AboutSection