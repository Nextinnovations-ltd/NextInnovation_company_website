import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom"
import DownArrow from "./svg/DownArrow";
import SectionTitle from "./SectionTitle";

const Navbar = () => {

    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const servicesRef = useRef(null);

    // navbar show hide scroll
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                // scrolling down → hide navbar
                setShowNavbar(true);
            } else {
                // scrolling up → show navbar
                setShowNavbar(true);
            }
            setLastScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    // click service
    const clickService = () => {
        setIsServicesOpen((prev) => !prev)
        setShowNavbar(true)
        console.log(showNavbar);
    }

    // Close when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (servicesRef.current && !servicesRef.current.contains(event.target)) {
                setIsServicesOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Prevent body scroll when modal open
    useEffect(() => {
        if (isServicesOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = ""; // cleanup
        };
    }, [isServicesOpen]);

    return (
        <>
            <div
                className={`text-[#444444] bg-white flex justify-between items-center py-[18px] px-[32px] fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
                    showNavbar ? "translate-y-0" : "-translate-y-full"
                }`}
            >
                <div>
                    <h2 className="chillax text-[20px] md:text-[32px] font-light leading-[100%] tracking-[-4%]">Next Innovations</h2>
                </div>
                <div className="w-[835px] hidden lg:flex justify-between items-center text-[16px] font-medium leading-[100%] tracking-[-4%]">
                    <Link>ホーム</Link>

                    <button ref={servicesRef} onClick={clickService} className="flex gap-[6px] items-center">
                    {/* <button className="flex gap-[6px] items-center"> */}
                        <h4>サービス</h4>
                        <DownArrow/>
                    </button>

                    <Link className="archivo">Talent Cloud</Link>
                    <Link>導入事例</Link>
                    <div className="flex gap-[6px] items-center">
                        <h4>会社情報</h4>
                        <DownArrow/>
                    </div>
                    <Link>ニュース</Link>
                    <Link>ブログ</Link>
                </div>
                <div className="block lg:hidden">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.50001 17.27C4.35801 17.27 4.23934 17.2217 4.14401 17.125C4.04867 17.0284 4.00067 16.9094 4.00001 16.768C3.99934 16.6267 4.04734 16.508 4.14401 16.412C4.24067 16.316 4.35934 16.2684 4.50001 16.269H19.5C19.642 16.269 19.7607 16.317 19.856 16.413C19.952 16.509 20 16.628 20 16.77C20 16.912 19.952 17.0307 19.856 17.126C19.76 17.2214 19.6413 17.269 19.5 17.269L4.50001 17.27ZM4.50001 12.5C4.35801 12.5 4.23934 12.452 4.14401 12.356C4.04867 12.26 4.00067 12.141 4.00001 11.999C3.99934 11.857 4.04734 11.7384 4.14401 11.643C4.24067 11.5477 4.35934 11.5 4.50001 11.5H19.5C19.642 11.5 19.7607 11.548 19.856 11.644C19.9513 11.74 19.9993 11.859 20 12.001C20.0007 12.143 19.9527 12.2617 19.856 12.357C19.7593 12.4524 19.6407 12.5 19.5 12.5H4.50001ZM4.50001 7.73002C4.35801 7.73002 4.23934 7.68235 4.14401 7.58702C4.04801 7.49102 4.00001 7.37202 4.00001 7.23002C4.00001 7.08802 4.04801 6.96935 4.14401 6.87402C4.24001 6.77868 4.35867 6.73102 4.50001 6.73102H19.5C19.642 6.73102 19.7607 6.77902 19.856 6.87502C19.9513 6.97102 19.9993 7.08935 20 7.23002C20.0007 7.37068 19.9527 7.48935 19.856 7.58602C19.7593 7.68268 19.6407 7.73068 19.5 7.73002H4.50001Z" fill="black"/>
                    </svg>
                </div>
            </div>

            {/* Dropdown box */}
            {isServicesOpen && (
                <>
                    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"></div>
                    <div className="sticky h-[50vh] top-16 left-0 bg-white w-full z-50">
                        <SectionTitle jp="サービス" eng="Services" />
                    </div>
                </>
            )}
        </>
    );
}

export default Navbar;
