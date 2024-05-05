import React from 'react'
import HeroSection from '../components/landingPage/HeroSection'
import JobSection from '../components/landingPage/JobSection'
import ServiceSection from '../components/landingPage/ServiceSection'
import AboutSection from '../components/landingPage/AboutSection'
import TestimonialSection from '../components/landingPage/TestimonialSection'
import ContactSection from '../components/landingPage/ContactSection'
import Footer from '../components/common/Footer'
function LandingPage() {
  return (
    <div>
<HeroSection/>
<JobSection/>
<ServiceSection/>
<AboutSection/>
<TestimonialSection/>
<ContactSection/>
<Footer/>
    </div>
  )
}

export default LandingPage