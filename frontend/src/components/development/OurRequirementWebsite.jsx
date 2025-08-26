import Htmlb from "../../../public/images/Html-b.png"
import Cssb from "../../../public/images/CSS-b.png"
import Jsb from "../../../public/images/Js-b.png"
import Phpb from "../../../public/images/php-b.png"
import Laravelb from "../../../public/images/Laravel-b.png"
import Wordpressb from "../../../public/images/wordpress-b.png"
import Reactb from "../../../public/images/react-b.png"
import Flutterb from "../../../public/images/flutterb.png"
import Chrome from "../../../public/images/chrome.png"
import Safari from "../../../public/images/safari.png"
import Firefox from "../../../public/images/firefox.png"
import Opera from "../../../public/images/opera.png"
import MicrosoftEdge from "../../../public/images/microsoft-edge.png"
import { Link } from "react-router-dom"
import IconDiv from "./IconDiv"
import BrowserIconGroup from "./BrowserIconGroup"
import DeviceSizeGroup from "./DeviceSizeGroup"

const OurRequirementWebsite = () => {
    return (
        <div className="other-sections mx-auto px-[25px] xl:px-0">
            <div className="our-website-requirements-section">
                <h2 className="text-[35px] lg:text-[40px] xl:text-[48px] font-semibold leading-[48px] tracking-[-0.96px] uppercase text-center">Our Websites Requirements</h2>
                <div className="grid grid-cols-1 gap-[20px] md:gap-0 md:grid-cols-2 mt-[40px] md:mt-[80px] border-b-[2px] border-[#212121] pb-[33px]">
                    <h4 className="text-[24px] font-semibold leading-[30px] tracking-[-0.48px] uppercase mt-[55px]">Language</h4>
                    <div className="flex gap-[16px] flex-wrap">
                        <IconDiv image={Htmlb} title="HTML" />
                        <IconDiv image={Cssb} title="CSS" />
                        <IconDiv image={Jsb} title="Java Script" />
                        <IconDiv image={Wordpressb} title="Wordpress" />
                        <IconDiv image={Reactb} title="React" />
                        <IconDiv image={Phpb} title="PHP" />
                        <IconDiv image={Laravelb} title="Laravel" />
                    </div>
                </div>  
                <div className="grid grid-cols-1 gap-[20px] md:gap-0 md:grid-cols-2 py-[32px] border-b-[2px] border-[#212121]">
                    <h4 className="text-[24px] font-semibold leading-[30px] tracking-[-0.48px] uppercase">Mobile</h4>
                    <div className="flex gap-[16px] flex-wrap">
                        <IconDiv image={Reactb} title="React Native" />
                        <IconDiv image={Flutterb} title="Flutter" />
                    </div>
                </div>  
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] md:gap-0 py-[32px] border-b-[2px] border-[#212121]">
                    <h4 className="text-[24px] font-semibold leading-[30px] tracking-[-0.48px] uppercase mt-[25px]">Support Browser</h4>
                    <div>
                        <div className="flex gap-[26px] flex-wrap">
                            <BrowserIconGroup image={Chrome} title="Chrome" version="Latest Version" />
                            <BrowserIconGroup image={Safari} title="Safari" version="Latest Version" />
                            <BrowserIconGroup image={Firefox} title="Firefox" version="Latest Version" />
                            <BrowserIconGroup image={Opera} title="Opera" version="Latest Version" />
                            <BrowserIconGroup image={MicrosoftEdge} title="Microsoft Edge" version="Latest Version" />
                        </div>
                        <Link to="/privacy">
                            <div className="flex items-center gap-[12px] mt-[40px] opacity-[0.8]">
                                <p className="text-[16px] md:text-[18px] text-[#1180DD] font-normal leading-[26px] tracking-[0.18px]">View more about our terms&conditions</p>
                                <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 10.75H17.5L14 5.75" stroke="#1180DD" strokeWidth="2"/>
                                </svg>
                            </div>
                        </Link>
                    </div>
                </div>  
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] md:gap-0 py-[32px] border-b-[2px] border-[#212121]">
                    <h4 className="text-[24px] font-semibold leading-[30px] tracking-[-0.48px] uppercase mt-[25px]">Device Size</h4>
                    <div>
                        <div className="grid grid-cols-2 gap-x-[20px] gap-y-[24px]">
                            <DeviceSizeGroup title="Small Mobile Phones (Min)" size="320px to 360px" />
                            <DeviceSizeGroup title="Medium Mobile Phones" size="375px to 414px" />
                            <DeviceSizeGroup title="Large Mobile Phones" size="414px to 480px" />
                            <DeviceSizeGroup title="Phablets and Small Tablets (Max)" size="600px to 768px" />
                            <DeviceSizeGroup title="Small Laptops and Netbooks (Min)" size="1366px to 1440px" />
                            <DeviceSizeGroup title="Medium Laptops" size="1440px to 1600px" />
                        </div>
                        <Link to="/privacy">
                            <div className="flex items-center gap-[12px] mt-[40px] opacity-[0.8]">
                                <p className="text-[18px] text-[#1180DD] font-normal leading-[26px] tracking-[0.18px]">View more about our terms&conditions</p>
                                <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 10.75H17.5L14 5.75" stroke="#1180DD" strokeWidth="2"/>
                                </svg>
                            </div>
                        </Link>
                    </div>
                </div>  
            </div>
        </div>
    )
}

export default OurRequirementWebsite