import { Outlet } from "react-router-dom"
import Header from "../components/common/Header"

function ProfessionalLayout() {

    return (
        <div className="flex flex-col h-screen">
            <Header />
            <div className="flex flex-1">
                <div className="flex-1 mt-10 ml-10">
                    <Outlet />
                </div>
            </div>
            {/* <div className="footer">
        <footer className="h-10 text-center bg-blue-500" >Footer</footer>
     </div> */}
        </div>
    )
}

export default ProfessionalLayout