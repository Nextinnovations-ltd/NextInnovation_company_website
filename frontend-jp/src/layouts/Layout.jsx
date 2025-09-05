import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import ScrollToTop from "../router/ScrollToTop"
import ConsultFree from "../components/ConsultFree"

const Layout = () => {
    return (
        <div>
            <Navbar/>
            <ScrollToTop />
            <div className="page-transition">
                <Outlet/>
            </div>
            <ConsultFree/>
            <Footer/>
        </div>
    )
}

export default Layout