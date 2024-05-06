import { Outlet } from 'react-router-dom'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'

function UserLayout() {
    return (
        <div className="flex flex-col h-screen">
            <Header />
            <div className="flex flex-1">
                {/* <aside>Sidebar</aside> */}
                <div className="flex-1 mt-16 ml-0">
                    <Outlet />
                </div>
            </div>
            <div className="footer">
                <Footer />
            </div>
        </div>
    )
}

export default UserLayout