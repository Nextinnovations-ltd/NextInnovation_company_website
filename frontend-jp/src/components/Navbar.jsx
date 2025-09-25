import { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom"
import DownArrow from "./svg/DownArrow";
import DropDownModal from "./DropDownModal";
import Hamburger from "./svg/Hamburger";
import Cross from "./svg/Cross";
import MobileDropDown from "./MobileDropDown";

const Navbar = () => {

    const [dropDownOpen, setDropDownOpen] = useState('');
    const [mobileOpen, setMobileOpen] = useState(false);
    const [mobileDropDownOpen, setMobileDropDownOpen] = useState('');
    const wrapperRef  = useRef(null);

    // click service
    const clickDropDown = (name) => {
        dropDownOpen == name ? setDropDownOpen('') : setDropDownOpen(name);
    }

    const clickLink = () => {
        setDropDownOpen('')
    }

    // Close when clicking outside
    // useEffect(() => {
    //     const handleClickOutside = (event) => {
    //         if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
    //             setDropDownOpen('');
    //         }
    //     };
    //     document.addEventListener("mousedown", handleClickOutside);
    //     return () => document.removeEventListener("mousedown", handleClickOutside);
    // }, []);

    // // Prevent body scroll when modal open
    useEffect(() => {
        if (dropDownOpen || mobileOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [dropDownOpen, mobileOpen]);

    const location = useLocation();
    const noBorderRoutes = ["/"]; // list of routes without border
    const showBorder = !noBorderRoutes.includes(location.pathname);

    return (
        <>
            <div ref={wrapperRef}
                className={`text-[#444444] bg-white flex justify-between items-center pt-[18px] pb-[18px] px-[32px] fixed top-0 left-0 right-0 z-50 transition-transform duration-300 
                    ${showBorder ? "border-b-[1px]" : ""}`}
            >
                <div>
                    <NavLink to="/" onClick={() => setDropDownOpen('')} className="chillax text-[20px] md:text-[32px] font-light leading-[100%] tracking-[-4%]">Next Innovations</NavLink>
                </div>

                <div className="nav-menu w-[835px] hidden lg:flex justify-between items-center text-[16px] font-medium leading-[100%] tracking-[-4%]">
                    <NavLink to="/" onClick={() => setDropDownOpen('')} className="py-2">ホーム</NavLink>
                    <button onClick={() => clickDropDown('services')} className={`flex gap-[6px] items-center py-2 ${dropDownOpen == 'services' ? 'border-b-[2px] border-[#F15A29]' : ''}`}>
                        <h4>サービス</h4>
                        <DownArrow/>
                    </button>
                    <Link className="archivo py-2">Talent Cloud</Link>
                    <Link className="py-2">導入事例</Link>
                    <button onClick={() => clickDropDown('about')} className={`flex gap-[6px] items-center py-2 ${dropDownOpen == 'about' ? 'border-b-[2px] border-[#F15A29]' : ''}`}>
                        <h4>会社情報</h4>
                        <DownArrow/>
                    </button>
                    <Link className="py-2">ニュース</Link>
                    <Link className="py-2">ブログ</Link>
                </div>
                <div className="block lg:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
                    {!mobileOpen ? <Hamburger/> : <Cross/>}
                </div>
            </div>

            {/* Dropdown box */}
            {dropDownOpen == 'services' && (
                <DropDownModal
                    jp="サービス"
                    eng="Services"
                    description="海外人材の採用やマネジメントには、不安やハードルがつきものです。私たちはミャンマーを中心とした東南アジアの優秀な人材を、日本企業が安心して活用できる仕組みを提供しています。"
                    menus={[
                        { title: "EOR（雇用代行）", link: "/eor" },
                        { title: "EOR代理店制度", link: "/aa" },
                        { title: "DX支援", link: "/dx-support" },
                        { title: "受託開発", link: "/development" },
                        { title: "UI/UXデザイン", link: "/uiux" },
                    ]}
                    clickLink={clickLink}
                />
            )}
            {dropDownOpen == 'about' && (
                <DropDownModal
                    jp="会社情報"
                    eng="About"
                    description="私たちはミャンマーに拠点を置くIT企業です。高品質で革新的なウェブデザイン、ウェブマーケティング、映像制作サービスを、専門的なチームとともにお客様の満足を第一に提供します。"
                    menus={[
                        { title: "会社概要", link: "/ee" },
                        { title: "経営方針", link: "/ff" },
                        { title: "メンバー紹介", link: "/gg" },
                    ]}
                />
            )}

            {mobileOpen && (
                <>
                    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"></div>
                    <div className="mobile-nav text-[#444444] bg-white fixed lg:hidden top-[60px] left-0 right-0 z-40 pt-[13px] pb-[43px] px-[32px] text-[16px] font-medium leading-[100%] tracking-[-4%]">
                        <NavLink to="/" onClick={()=>setMobileOpen('')} className="py-[18px] border-b-[1px] border-[#C5CBCF] block">ホーム</NavLink>
                        <MobileDropDown
                            name="サービス"
                            value="services"
                            menus={[
                                { title: "EOR（雇用代行）", link: "/eor" },
                                { title: "EOR代理店制度", link: "/aa" },
                                { title: "DX支援", link: "/dx-support" },
                                { title: "受託開発", link: "/development" },
                                { title: "UI/UXデザイン", link: "/uiux" },
                            ]}
                            openValue={mobileDropDownOpen}
                            setOpenValue={setMobileDropDownOpen}
                            setMobileOpen={setMobileOpen}
                        />
                        <NavLink to="/aa" onClick={()=>setMobileOpen('')} className="py-[18px] border-b-[1px] border-[#C5CBCF] block">Talent Cloud</NavLink>
                        <NavLink to="/bb" onClick={()=>setMobileOpen('')} className="py-[18px] border-b-[1px] border-[#C5CBCF] block">導入事例</NavLink>
                        <MobileDropDown
                            name="会社情報"
                            value="about"
                            menus={[
                                { title: "会社概要", link: "/ee" },
                                { title: "経営方針", link: "/ff" },
                                { title: "メンバー紹介", link: "/gg" },
                            ]}
                            openValue={mobileDropDownOpen}
                            setOpenValue={setMobileDropDownOpen}
                        />
                        <NavLink to="/cc" onClick={()=>setMobileOpen('')} className="py-[18px] border-b-[1px] border-[#C5CBCF] block">ニュース</NavLink>
                        <NavLink to="/dd" onClick={()=>setMobileOpen('')} className="py-[18px] border-b-[1px] border-[#C5CBCF] block">ブログ</NavLink>
                    </div>
                </>
            )}


        </>
    );
}

export default Navbar;
