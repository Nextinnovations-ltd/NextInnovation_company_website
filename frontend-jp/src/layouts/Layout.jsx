import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import ScrollToTop from "../router/ScrollToTop"

const Layout = () => {
    return (
        <div>
            <Navbar/>
            <ScrollToTop />
            <div className="page-transition overflow-hidden">
                <Outlet/>
            </div>

            <Footer/>
        </div>
    )
}

export default Layout