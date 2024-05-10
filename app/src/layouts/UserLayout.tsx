import { Outlet } from 'react-router-dom'
import Header from '../components/common/Header'
import { useState } from 'react'
import { HamburgerButton } from '../components/common/HamburgerMenuButton'
import MobileHeader from '../components/common/HamburgerMenuButton/MobileHeader'

import Footer from '../components/common/Footer'
function UserLayout() {
    const [mobileMenu, setMobileMenu] = useState(false)
    return (
        
        <div className="">
           
           <Header />
        {mobileMenu && <MobileHeader />}
        <HamburgerButton mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
        <Outlet/>
        <Footer/>

        </div>
    )
}

export default UserLayout