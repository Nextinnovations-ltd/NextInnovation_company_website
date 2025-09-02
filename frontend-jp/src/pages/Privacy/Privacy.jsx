import { Link } from "react-router-dom"
import PrivacyBg from "../../../public/images/privacy-bg.png"
import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"
import ScrollToTop from "../../router/ScrollToTop"
import "./Privacy.css"

const Privacy = () => {
    return (
        <div className="privacy bg-no-repeat bg-fixed bg-[length:auto_240px] md:bg-[length:auto_400px] lg:bg-[length:auto_500px] xl:bg-[length:auto_700px]" style={{ backgroundImage: `url(${PrivacyBg})` }}>
            <Navbar/>
            <ScrollToTop />
            <div className="page-transition overflow-hidden max-w-[846px] mx-auto pt-[30px] pb-[80px] px-[25px] xl:px-0">
                <h1 className="text-[30px] md:text-[40px] font-semibold">Privacy Policy</h1><br />
                <div className="ps-[20px] md:ps-[44px]">
                    <div className="text-[16px] md:text-[18px] leading-[180%]">
                        <p>At our Next Innovations company, next-innovations.ltd, we value your privacy. This Privacy Policy outlines how we collect, use, and protect your personal information when you visit our website.</p>
                    </div><br /><br />

                    <h2 className="text-[20px] md:text-[24px] font-semibold">1. Information We Collect</h2><br />
                    <div className="text-[16px] md:text-[18px] leading-[180%]">
                        <p>We may collect the following types of information:</p><br />
                        <ul className="list-disc list-inside text-black">
                            <li>Personal Information: such as your name, email address, and contact details when you fill out forms or subscribe to our services.</li>
                            <li>Usage Data: including your IP address, browser type, pages visited, and the time and date of your visit.</li>
                            <li>Cookies: we may use cookies to enhance your browsing experience. You can disable cookies in your browser settings.</li>
                        </ul>
                    </div><br /><br />

                    <h2 className="text-[20px] md:text-[24px] font-semibold">2. How We Use Your Information</h2><br />
                    <div className="text-[16px] md:text-[18px] leading-[180%]">
                        <p>We may use your information to:</p><br />
                        <ul className="list-disc list-inside text-black">
                            <li>Provide, operate, and maintain our website and services</li>
                            <li>Improve, personalize, and expand our website</li>
                            <li>Communicate with you, including responding to inquiries</li>
                            <li>Ensure website security and prevent fraud</li>
                        </ul>
                    </div><br /><br />

                    <h2 className="text-[20px] md:text-[24px] font-semibold">3. How We Share Your Information</h2><br />
                    <div className="text-[16px] md:text-[18px] leading-[180%]">
                        <p>We do not sell or rent your personal information. We may share data with:</p><br />
                        <ul className="list-disc list-inside text-black">
                            <li>Service providers who help operate our website (e.g., hosting, analytics)</li>
                            <li>Law enforcement if required by law or to protect legal rights</li>
                            <li>Business partners in case of a merger, acquisition, or asset sale</li>
                        </ul>
                    </div><br /><br />

                    <h2 className="text-[20px] md:text-[24px] font-semibold">4. Data Security</h2><br />
                    <div className="text-[16px] md:text-[18px] leading-[180%]">
                        <p>We take reasonable technical and organizational measures to protect your data. However, no method of transmission over the Internet is 100% secure.</p>
                    </div><br /><br />
                    
                    <h2 className="text-[20px] md:text-[24px] font-semibold">5. Your Rights</h2><br />
                    <div className="text-[16px] md:text-[18px] leading-[180%]">
                        <p>Depending on your location, you may have rights to:</p><br />
                        <ul className="list-disc list-inside text-black">
                            <li>Access, update, or delete your personal information</li>
                            <li>Object to processing or request data portability</li>
                            <li>Withdraw consent at any time</li>
                            <li>To exercise these rights, contact us at 
                                <a href="https://mail.google.com/mail/?view=cm&to=info@next-innovations.ltd" className="hidden lg:inline text-blue-500 hover:text-blue-600 hover:underline" target="__blank"> info@next-innovations.ltd</a>
                                <a href="mailto:info@next-innovations.ltd" className="lg:hidden text-blue-500 hover:text-blue-600 hover:underline" target="__blank"> info@next-innovations.ltd</a>
                            </li>
                        </ul>
                    </div><br /><br />

                    <h2 className="text-[20px] md:text-[24px] font-semibold">6. Third-Party Links</h2><br />
                    <div className="text-[16px] md:text-[18px] leading-[180%]">
                        <p>Our website may contain links to other websites. We are not responsible for their privacy practices.</p>
                    </div><br /><br />

                    <h2 className="text-[20px] md:text-[24px] font-semibold">7. Changes to This Policy</h2><br />
                    <div className="text-[16px] md:text-[18px] leading-[180%]">
                        <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with a new effective date.</p>
                    </div><br /><br />

                    <h2 className="text-[20px] md:text-[24px] font-semibold">8. Contact Us</h2><br />
                    <div className="text-[16px] md:text-[18px] leading-[180%]">
                        <p>If you have any questions about this Privacy Policy, please contact us at:</p>
                        <ul>
                            <li>📧 Email: 
                                <a href="https://mail.google.com/mail/?view=cm&to=info@next-innovations.ltd" className="hidden lg:inline text-blue-500 hover:text-blue-600 hover:underline" target="__blank"> info@next-innovations.ltd</a>
                                <a href="mailto:info@next-innovations.ltd" className="lg:hidden text-blue-500 hover:text-blue-600 hover:underline" target="__blank"> info@next-innovations.ltd</a>
                            </li>
                        </ul>
                    </div><br /><br /><br /><br />
                    <Link to="/">
                        <button className="group hover:text-[#E84721] hover:border-[#E84721] mx-auto text-[16px] font-semibold leading-[20px] uppercase flex items-center gap-[12px] py-[24px] px-[32px] border-[1.5px] border-[#1A1A1A] rounded-[64px]">
                            <svg className="group-hover:hidden" width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_5946_2582)">
                                <path d="M16 8H2L4.8 4" stroke="#1A1A1A" strokeWidth="1.5"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_5946_2582">
                                <rect width="16" height="14" fill="white" transform="matrix(-1 0 0 1 16 0)"/>
                                </clipPath>
                                </defs>
                            </svg>
                            <svg className="hidden group-hover:block" width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_5946_2582)">
                                <path d="M16 8H2L4.8 4" stroke="#E84721" strokeWidth="1.5"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_5946_2582">
                                <rect width="16" height="14" fill="white" transform="matrix(-1 0 0 1 16 0)"/>
                                </clipPath>
                                </defs>
                            </svg>
                            Go home
                        </button>
                    </Link><br /><br />
                </div>

            </div>
            <Footer/>
        </div>
    )
}

export default Privacy