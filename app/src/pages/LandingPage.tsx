import HeroSection from '../components/landingPage/HeroSection'
import JobSection from '../components/landingPage/JobSection'
import ServiceSection from '../components/landingPage/ServiceSection'
import AboutSection from '../components/landingPage/AboutSection'
import TestimonialSection from '../components/landingPage/TestimonialSection'
import ContactSection from '../components/landingPage/ContactSection'
function LandingPage() {
  // const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <div>

       {/* <Header />
        {mobileMenu && <MobileHeader />}
        <HamburgerButton mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} /> */}
<HeroSection/>
<JobSection/>
<ServiceSection/>
<AboutSection/>
<TestimonialSection/>
<ContactSection/>
{/* <Footer/> */}

    </div>
  )
}

export default LandingPage