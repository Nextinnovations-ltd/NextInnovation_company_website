import {useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Link, NavLink, useNavigate, useLocation  } from "react-router-dom"
import DropDownMenu from "./DropDownMenu";
// import LanguageDropdown from './LanguageDropdown';

const Navbar = () => {

    const location = useLocation()
    const [isOpen, setIsOpen] = useState(false);
    const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [path,setPath] = useState('/')
    const dropdownRef = useRef(null);
    const navigate = useNavigate();

    const toggleDropdown = () => {
        setIsOpen((prev) => !prev);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen((prev) => !prev);
        setIsOpen(false); // Close services dropdown if mobile menu opens
    };

    const handleNavLinkClick = (path) => {
        setIsMobileMenuOpen(false);
        setIsMobileDropdownOpen(false);
        navigate(path);
    };

    const mobileDropdownClick = () => {
        setIsMobileDropdownOpen((prev) => !prev)
        setIsMobileMenuOpen(true)
    }

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    useEffect(() => {
        setPath(location.pathname)
    }, [location.pathname]);



    /* gasp intro animation */
    const navLogoRef = useRef(null);
    const navLink1Ref = useRef(null);
    const navLink2Ref = useRef(null);
    const navLink3Ref = useRef(null);
    const navLink4Ref = useRef(null);
    const navLink5Ref = useRef(null);
    const navLink6Ref = useRef(null);
    const navLink7Ref = useRef(null);

    useEffect(() => {
    // Animation timeline
    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

    // Set initial state (hidden below)
    gsap.set([navLogoRef.current,navLink1Ref.current,navLink2Ref.current,navLink3Ref.current,navLink4Ref.current,navLink5Ref.current,navLink6Ref.current,navLink7Ref.current], { 
        y: -50, 
        opacity: 0 
    });


    // Very fast staggered animation
    tl.to(navLogoRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power1.inOut"
    })
    .to([navLink1Ref.current, navLink2Ref.current, navLink3Ref.current, navLink4Ref.current, navLink5Ref.current, navLink6Ref.current, navLink7Ref.current], {
        y: 0,
        opacity: 1,
        duration: 0.25,
        ease: "power1.inOut",
        stagger: 0.08 // Tiny stagger between links
    }); // Small delay after logo
    }, []); 

    return (
        <nav className="nav bg-[#FFF]">
            <Link to="/" className="nav-logo" ref={navLogoRef}>
                <h1 className="chillax">Next Innovations</h1>
            </Link>
            <ul className="responsive">
    
                
            <div className="" >
              <li ref={navLink1Ref}>
                <NavLink to="/">ホーム</NavLink>
              </li>
            </div>

            <div className="" >
              <li ref={navLink2Ref}>
                <NavLink to="/about-us">サービス</NavLink>
              </li>
            </div>

                
              <div ref={dropdownRef}>
                    <li ref={navLink3Ref}>
                    <div className="relative inline-block text-left" >
                        <div>
                        <button
                            type="button"
                            className="inline-flex w-full justify-center gap-x-1.5"
                            id="menu-button"
                            aria-expanded={isOpen}
                            aria-haspopup="true"
                            onClick={toggleDropdown}
                        >
                            Talent Cloud
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            data-slot="icon"
                            >
                            <path d="M7 10L12 15L17 10H7Z" fill="black" />
                            </svg>
                        </button>
                        </div>
    
                        {isOpen && (
                        <div className="absolute right-0 z-10 mt-2 origin-top-right divide-y divide-gray-100 rounded-md bg-white ring-1 shadow-lg ring-black/5 focus:outline-none"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="menu-button"
                            tabIndex="-1">
                            <DropDownMenu name="EOR(Employer of Record)" path="/eor" toggleDropdown={toggleDropdown} />
                            <DropDownMenu name="Website Development" path="/development/website" toggleDropdown={toggleDropdown} />
                            <DropDownMenu name="System Development" path="/development/system" toggleDropdown={toggleDropdown} />
                            <DropDownMenu name="UI/UX Design" path="/ui-ux" toggleDropdown={toggleDropdown} />
                            <DropDownMenu name="Testing Service" path="/testing" toggleDropdown={toggleDropdown} />
                        </div>
                        )}
                    </div>
                    </li>
                </div>

                <div className=""   >
                    <li ref={navLink4Ref}> 
                        <NavLink to="/news">導入事例</NavLink>
                    </li>
                </div>
                <div className=""   >
                    <li ref={navLink5Ref}> 
                        <NavLink to="/works">会社情報</NavLink>
                    </li>
                </div>
                <div className=""   >
                    <li ref={navLink6Ref}> 
                        <NavLink to="/contact">ニュース</NavLink>
                    </li>
                </div>
                <div className=""   >
                    <li ref={navLink7Ref}> 
                        <NavLink to="/contact">ブログ</NavLink>
                    </li>
                </div>
                {/* <div className="flex" ref={navLink7Ref}>
                    <LanguageDropdown/>
                </div> */}
            </ul>
            <button className="menu" onClick={() => toggleMobileMenu()}>
                {isMobileMenuOpen ? 'Close' : 'Menu'}
            </button>
            <div className={`lg:hidden mobile-overlay ${isMobileMenuOpen ? "active" : ""}`}></div>
            <div className={`mobile-navbar ${isMobileMenuOpen ? "open" : ""}`}>
                <ul>
                    <li onClick={() => handleNavLinkClick("/")}>
                        <button className={path == '/' ? 'active' : ''} >ホーム</button>
                    </li>
                    <li onClick={() => handleNavLinkClick("/about-us")}>
                        <button className={path == '/about-us' ? 'active' : ''} >サービス</button>
                    </li>
                    <li>
                        {/* Mobile About Dropdown */}
                        <button className={`flex gap-[16px] w-full ${path == '/development/website' || path == '/development/system' || path == '/eor' || path == '/ui-ux' || path == '/testing' ? 'active' : ''}`} onClick={mobileDropdownClick}>
                            Talent Cloud
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                                <path d="M7 10L12 15L17 10H7Z" fill="black" />
                            </svg>
                        </button>
                        {!!isMobileDropdownOpen && (
                            <ul className="mobile-dropdown">
                                <li onClick={() => handleNavLinkClick("/eor")}>
                                    <button className={path == '/eor' ? 'active' : ''} >EOR(Employer of Record)</button>
                                </li>
                                <li onClick={() => handleNavLinkClick("/development/website")}>
                                    <button className={path == '/development/website' ? 'active' : ''}>Website Development</button>
                                </li>
                                <li onClick={() => handleNavLinkClick("/development/system")}>
                                    <button className={path == '/development/system' ? 'active' : ''}>System Development</button>
                                </li>
                                <li onClick={() => handleNavLinkClick("/ui-ux")}>
                                    <button className={path == '/ui-ux' ? 'active' : ''}>UI/UX Design</button>
                                </li>
                                <li onClick={() => handleNavLinkClick("/testing")}>
                                    <button className={path == '/testing' ? 'active' : ''}>Testing Service</button>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li onClick={() => handleNavLinkClick("/news")}>
                        <button className={path == '/news' ? 'active' : ''}>導入事例</button>
                    </li>
                    <li onClick={() => handleNavLinkClick("/works")}>
                        <button className={path == '/works' ? 'active' : ''}>会社情報</button>
                    </li>
                    <li onClick={() => handleNavLinkClick("/contact")}>
                        <button className={path == '/contact' ? 'active' : ''}>ニュース</button>
                    </li>
                    <li onClick={() => handleNavLinkClick("/contact")}>
                        <button className={path == '/contact' ? 'active' : ''}>ブログ</button>
                    </li>
                    {/* <li>
                        <LanguageDropdown/>
                    </li> */}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar