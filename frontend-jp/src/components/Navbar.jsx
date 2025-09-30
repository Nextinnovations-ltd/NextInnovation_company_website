import { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom"
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
                className={`max-w-[1250px] mx-auto text-[#444444] bg-[#FFFFFF80] rounded-[50px] border border-white backdrop-blur-[20px] flex justify-between items-center pt-[20px] pb-[20px] px-[32px] fixed top-0 left-0 right-0 z-[999] transition-transform duration-300 mt-[20px]
                    ${showBorder ? "border-b-[1px]" : ""}`}
            >
                <div>
                    <NavLink to="/" onClick={() => setDropDownOpen('')} className="chillax text-[20px] md:text-[32px] font-light leading-[100%] tracking-[-4%]">Next Innovations</NavLink>
                </div>

                <div className="nav-menu w-[835px] hidden lg:flex justify-between items-center text-[16px] font-medium leading-[100%] tracking-[-4%]">
                    <NavLink to="/" onClick={() => setDropDownOpen('')} className="py-2">ホーム</NavLink>
                  
                  <div className=""  onMouseEnter={() => clickDropDown('services')}
                     onMouseLeave={() => setDropDownOpen('')} >

                 
                    <button  
                           className={`flex gap-[6px] items-center py-2 ${dropDownOpen == 'services' ? 'border-b-[2px] border-[#F15A29]' : ''}`}>
                        <h4>サービス</h4>
                        <DownArrow/>
                    </button>

                    {/* Dropdown box */}
                    <div
                      className={`transition-all duration-300 ease-in-out transform
                        ${dropDownOpen === 'services'
                          ? "opacity-100 translate-y-[60px] visible z-[100] bg-white absolute inset-0"
                          : "opacity-0 -translate-y-2 invisible absolute"}
                      `}
                    >
                      <DropDownModal
                        jp="サービス"
                        eng="Services"
                        description="海外人材の採用やマネジメントには、不安やハードルがつきものです。..."
                        menus={[
                          { title: "EOR（雇用代行）", link: "/eor" },
                          { title: "EOR代理店制度", link: "/aa" },
                          { title: "DX支援", link: "/dx-support" },
                          { title: "受託開発", link: "/development" },
                          { title: "UI/UXデザイン", link: "/uiux" },
                        ]}
                        clickLink={clickLink}
                      />
                    </div>
                     </div>

                





                    <NavLink to="http://staging.talent-cloud.asia/emp/lp" onClick={() => setDropDownOpen('')} target="_blank" className="archivo py-2">Talent Cloud</NavLink>
                    <NavLink to="/case-study" onClick={() => setDropDownOpen('')} className="py-2">導入事例</NavLink>
                   <div className=""  onMouseEnter={() => clickDropDown('about')}
                       onMouseLeave={() => setDropDownOpen('')} >
                    <button  
                           className={`flex gap-[6px] items-center py-2 ${dropDownOpen == 'about' ? 'border-b-[2px] border-[#F15A29]' : ''}`}>
                        <h4>会社情報</h4>
                        <DownArrow/>
                    </button>
                    <div
                      className={`transition-all duration-300 ease-in-out transform
                        ${dropDownOpen === 'about'
                          ? "opacity-100 translate-y-[60px] visible z-[100] bg-white absolute inset-0"
                          : "opacity-0 -translate-y-2 invisible absolute"}
                      `}
                    >
                      <DropDownModal
                        jp="会社情報"
                        eng="About"
                        description="私たちはミャンマーに拠点を置くIT企業です。高品質で革新的なウェブデザイン、ウェブマーケティング、映像制作サービスを、専門的なチームとともにお客様の満足を第一に提供します。"
                        menus={[
                          { title: "会社概要", link: "/company-profile" },
                          { title: "経営方針", link: "/ff" },
                          { title: "メンバー紹介", link: "/gg" },
                        ]}
                        clickLink={clickLink}
                      />
                    </div>
                    </div>
                    <NavLink to="/news" onClick={() => setDropDownOpen('')} className="py-2">ニュース</NavLink>
                    <NavLink to="https://demo-site.next-innovations.ltd/ni-blog/" onClick={() => setDropDownOpen('')} target="_blank" className="py-2">ブログ</NavLink>
                </div>
                <div className="block lg:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
                    {!mobileOpen ? <Hamburger/> : <Cross/>}
                </div>
            </div>



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
                        <NavLink to="http://staging.talent-cloud.asia/emp/lp" onClick={()=>setMobileOpen('')} className="py-[18px] border-b-[1px] border-[#C5CBCF] block">Talent Cloud</NavLink>
                        <NavLink to="/case-study" onClick={()=>setMobileOpen('')} className="py-[18px] border-b-[1px] border-[#C5CBCF] block">導入事例</NavLink>
                        <MobileDropDown
                            name="会社情報"
                            value="about"
                            menus={[
                                { title: "会社概要", link: "/company-profile" },
                                { title: "経営方針", link: "/ff" },
                                { title: "メンバー紹介", link: "/gg" },
                            ]}
                            openValue={mobileDropDownOpen}
                            setOpenValue={setMobileDropDownOpen}
                        />
                        <NavLink to="/news" onClick={()=>setMobileOpen('')} className="py-[18px] border-b-[1px] border-[#C5CBCF] block">ニュース</NavLink>
                        <NavLink to="https://demo-site.next-innovations.ltd/ni-blog/" onClick={()=>setMobileOpen('')} className="py-[18px] border-b-[1px] border-[#C5CBCF] block">ブログ</NavLink>
                    </div>
                </>
            )}


        </>
    );
}

export default Navbar;
