import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom"
import DownArrow from "./svg/DownArrow";
import DropDownModal from "./DropDownModal";
import Hamburger from "./svg/Hamburger";
import Cross from "./svg/Cross";
import MobileDropDown from "./MobileDropDown";

const Navbar = () => {

    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [dropDownOpen, setDropDownOpen] = useState('');
    const [mobileOpen, setMobileOpen] = useState(false);
    const [mobileDropDownOpen, setMobileDropDownOpen] = useState('');
    const wrapperRef  = useRef(null);

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
    const clickDropDown = (name) => {
        dropDownOpen == name ? setDropDownOpen('') : setDropDownOpen(name);
        setShowNavbar(true)
    }

    // Close when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setDropDownOpen('');
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Prevent body scroll when modal open
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

                <div ref={wrapperRef} className="w-[835px] hidden lg:flex justify-between items-center text-[16px] font-medium leading-[100%] tracking-[-4%]">
                    <Link>ホーム</Link>
                    <button onClick={() => clickDropDown('services')} className="flex gap-[6px] items-center">
                        <h4>サービス</h4>
                        <DownArrow/>
                    </button>
                    <Link className="archivo">Talent Cloud</Link>
                    <Link>導入事例</Link>
                    <button onClick={() => clickDropDown('about')} className="flex gap-[6px] items-center">
                        <h4>会社情報</h4>
                        <DownArrow/>
                    </button>
                    <Link>ニュース</Link>
                    <Link>ブログ</Link>
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
                    description="海外人材の採用やマネジメントには、不安やハードルがつきものです。私たちはミャンマーを中心とした東南アジアの優秀な人材を、日本企業が安心して活用できる仕組みを提供しています"
                    menus={[
                        { title: "EOR（雇用代行）", link: "" },
                        { title: "EOR代理店制度", link: "" },
                        { title: "DX支援", link: "" },
                        { title: "受託開発", link: "" },
                        { title: "UI/UXデザイン", link: "" },
                    ]}
                />
            )}
            {dropDownOpen == 'about' && (
                <DropDownModal
                    jp="会社情報"
                    eng="About"
                    description="私たちはミャンマーに拠点を置くIT企業です。高品質で革新的なウェブデザイン、ウェブマーケティング、映像制作サービスを、専門的なチームとともにお客様の満足を第一に提供します。"
                    menus={[
                        { title: "会社概要", link: "" },
                        { title: "経営方針", link: "" },
                        { title: "メンバー紹介", link: "" },
                    ]}
                />
            )}

            {mobileOpen && (
                <>
                    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"></div>
                    <div className="text-[#444444] bg-white fixed lg:hidden top-[60px] left-0 right-0 z-40 pt-[13px] pb-[43px] px-[32px] text-[16px] font-medium leading-[100%] tracking-[-4%]">
                        <NavLink>
                            <div className="py-[18px] border-b-[1px] border-[#C5CBCF]">ホーム</div>
                        </NavLink>

                        <MobileDropDown
                            name="サービス"
                            value="services"
                            menus={[
                                { title: "EOR（雇用代行）", link: "" },
                                { title: "EOR代理店制度", link: "" },
                                { title: "DX支援", link: "" },
                                { title: "受託開発", link: "" },
                                { title: "UI/UXデザイン", link: "" },
                            ]}
                            openValue={mobileDropDownOpen}
                            setOpenValue={setMobileDropDownOpen}
                        />
                        <NavLink>
                            <div className="py-[18px] border-b-[1px] border-[#C5CBCF]">Talent Cloud</div>
                        </NavLink>
                        <NavLink>
                            <div className="py-[18px] border-b-[1px] border-[#C5CBCF]">導入事例</div>
                        </NavLink>
                        <MobileDropDown
                            name="会社情報"
                            value="about"
                            menus={[
                                { title: "会社概要", link: "" },
                                { title: "経営方針", link: "" },
                                { title: "メンバー紹介", link: "" },
                            ]}
                            openValue={mobileDropDownOpen}
                            setOpenValue={setMobileDropDownOpen}
                        />
                        <NavLink>
                            <div className="py-[18px] border-b-[1px] border-[#C5CBCF]">ニュース</div>
                        </NavLink>
                        <NavLink>
                            <div className="py-[18px] border-b-[1px] border-[#C5CBCF]">ブログ</div>
                        </NavLink>
                    </div>
                </>
            )}


        </>
    );
}

export default Navbar;
