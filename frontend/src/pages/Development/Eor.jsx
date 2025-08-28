import Main from "../../components/development/Main"
import EorBg from "../../../public/images/eor-bg.png"
import Wsm1Eor from "../../../public/images/wsm1-eor.png"
import Wsm2Eor from "../../../public/images/wsm2-eor.png"
import Wsm3Eor from "../../../public/images/wsm3-eor.png"
import ES1 from "../../../public/images/US1.png";
import ES2 from "../../../public/images/US2.png";
import ES3 from "../../../public/images/US3.png";
import WebsiteDevelopment from "../../../public/images/website-development.png"
import UiUxService from "../../../public/images/ui-ux-service.png"
import TestingService from "../../../public/images/testing.png"
import WhoShouldMakeExplain from "../../components/development/WhoShouldMakeExplain"
import WhoShouldMakeSysCrad from "../../components/development/WhoShouldMakeSysCrad"
import WhatYouCanDo from "../../components/development/WhatYouCanDo"
import BottomShadow from "../../components/development/BottomShadow"
import TopShadow from "../../components/development/TopShadow"
import WhyChooseUsStep from "../../components/development/WhyChooseUsStep"
import StickGradient from "../../../public/images/stick-gradient.png"
import Gif from "../../components/Gif"
import OtherService from "../../components/development/OtherService"
import SuccessfulWorkWebsite from "../../components/development/SuccessfulWorkWebsite"
import OurStrength from "../../components/OurStrength"
import useVisiter from "../../hooks/useVisiter"
import { API_BASE_URL } from "../../config"

const Eor = () => {
    useVisiter('eor');
    return (
        <div className="development">
            <Main title="employer of record " image={EorBg} mobileImage={EorBg} />

            <div className="other-sections mx-auto px-[25px] xl:px-[25px]">

                <div className="explain-development mt-[104px] mb-[100px] lg:mb-[205px]">
                    <div className="lg:flex lg:justify-between">
                        <h3 className="title uppercase text-[16px] md:text-[20px] xl:text-[24px] font-semibold leading-[20px] lg:leading-[30px] tracking-[-0.48px]">
                            <p>what is eor</p>
                            <span className="text-nowrap inline-block w-[160px] md:w-[200px] xl:w-[246px] border-b-[3px] xl:border-b-[4px] border-[#E84721] pb-[12px]">(employer of record)?</span>
                        </h3>
                        <p className="lg:w-[650px] xl:w-[817px] text-[18px] md:text-[22 px] lg:text-[25px] xl:text-[32px] font-normal leading-[25px] md:leading-[30px] lg:leading-[40px] ms-[64px] md:ms-[200px] lg:ms-0 mt-[40px] lg:mt-0">
                        An Employer of Record (EOR) helps Myanmar professionals work remotely for foreign companies by handling legal, administrative, and HR tasks, ensuring compliance with local labor laws without worrying about legal complexities.
                        </p>
                    </div>
                </div>

                <div className="who-should-make">
                    <WhoShouldMakeExplain
                        title = "who should take EOR (employer of record)?"
                        description = "An Employer of Record (EOR) is ideal for foreign companies hiring remote workers for Myanmar Citizens from anywhere. It helps businesses simplify HR, payroll, and legal compliance, allowing them to focus on growth while Myanmar professionals work remotely with ease."
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] mt-[88px] mb-[120px] lg:mb-[224px]">
                        <WhoShouldMakeSysCrad title="Hire for Myanmar Citizens" image={Wsm1Eor} />
                        <WhoShouldMakeSysCrad title="Simplified Legal Compliance" image={Wsm2Eor} />
                        <WhoShouldMakeSysCrad title="Flexible Hiring" image={Wsm3Eor} />
                    </div>
                </div>

                <WhatYouCanDo
                    title = "what you can do with EOR (employer of record)?"
                    description = "An Employer of Record (EOR) allows businesses to hire remote workers without the need for complex legal setups. It handles compliance, payroll, and HR tasks, simplifying the hiring process and ensuring legal and efficient workforce management, while some in-person work may be required at the Talent Cloud office."
                />

                <div className="step-section grid grid-cols-2 md:grid-cols-3 mt-[88px] mb-[191px] gap-[24px]">
                    <BottomShadow step = "01" title = "Hire Remotely"/>
                    <TopShadow step = "02" title = "Support Remote Teams"/>
                    <BottomShadow step = "03" title = "Manage Payroll and Benefits"/>
                    <TopShadow step = "04" title = "Language and Device Support"/>
                    <BottomShadow step = "05" title = "Ensure Legal Compliance"/>
                    <TopShadow step = "06" title = "Reduce Risks"/>
                </div>

                <SuccessfulWorkWebsite category='eor' url={`${API_BASE_URL}/api/works?category=4`} />

            </div>

            <OurStrength
                title1="Win-Win for Employers & Local Talent"
                description1="We connect overseas employers with skilled local applicants, creating a win-win opportunity through seamless hiring, legal compliance, and full work support."
                image1={ES1}
                title2="Effective Bridge For Remote jobs"
                description2="Our platform bridges Myanmar professionals with overseas employers, ensuring smooth remote hiring with legal compliance, payroll management, and full support."
                image2={ES2}
                title3="FACILITY SUPPORT"
                description3="We offer complete support including HR services, accommodation assistance, language support, technology tools and devices to ensure a seamless experience for both employers and remote workers."
                image3={ES3}
            />

            <div className="max-w-[1240px] mx-auto  text-[#D22E19] px-[25px] xl:px-0 mt-[200px]">
                <h2 className="text-[36px] md:text-[46px] xl:text-[48px] text-[#121212] font-semibold leading-[48px] tracking-[-0.96px] uppercase">why choose us?</h2>
                <WhyChooseUsStep step="01 / 04" title="Seamless Global Expansion" />
                <WhyChooseUsStep step="02 / 04" title="Local Compliance Expertise" />
                <WhyChooseUsStep step="03 / 04" title="Tailored EOR Solutions" />
                <WhyChooseUsStep step="04 / 04" title="Trusted Japan Quality" />
            </div>

            <div className="full-section bg-[#0F0F0F] text-[#FFF]">
                <div className="our-process max-w-[1240px] mx-auto pt-[100px] md:pt-[170px] pb-[100px] md:pb-[76px] px-[25px] xl:px-0">
                    <h2 className="text-[35px] lg:text-[40px] xl:text-[48px] text-center font-semibold leading-[48px] tracking-[-0.96px] uppercase">Our process</h2>
                    <div className="flex overflow-x-auto justify-between">
                        <div className="flex flex-col items-center w-[217px] gap-[20px] pt-[142px]">
                            <p className="text-[14px] lg:text-[18px] text-center text-nowrap font-semibold leading-[18px] tracking-[0.18px] uppercase py-[18px] px-[38px] bg-[#E84721] rounded-[80px]">Consultation</p>
                            <span className="text-[14px] font-normal leading-[16.8px] tracking-[0.14px] opacity-[0.8] ms-[16px]">We assess your needs to tailor the perfect EOR solution for your business.</span>
                        </div>
                        <img src={StickGradient} alt="" />
                        <div className="flex flex-col items-center w-[292px] gap-[20px] pt-[222px]">
                            <p className="text-[14px] lg:text-[18px] text-center text-nowrap font-semibold leading-[18px] tracking-[0.18px] uppercase py-[18px] px-[30px] bg-[#212121] rounded-[80px]">Employee Onboarding</p>
                            <span className="text-[14px] font-normal leading-[16.8px] tracking-[0.14px] opacity-[0.8] ms-[6.5px]">We manage the entire onboarding process, ensuring compliance with local labor laws and regulations.</span>
                        </div>
                        <img src={StickGradient} alt="" />
                        <div className="flex flex-col items-center w-[291px] gap-[20px] pt-[142px]">
                            <p className="text-[14px] lg:text-[18px] text-center text-nowrap font-semibold leading-[18px] tracking-[0.18px] uppercase py-[18px] px-[30px] bg-[#212121] rounded-[80px]">Payroll & Compliance</p>
                            <span className="text-[14px] font-normal leading-[16.8px] tracking-[0.14px] opacity-[0.8] ms-[5.5px]">We take care of payroll, taxes, and benefits while ensuring compliance with local legal requirements.</span>
                        </div>
                        <img src={StickGradient} alt="" />
                        <div className="flex flex-col items-center w-[252px] gap-[20px] pt-[222px]">
                            <p className="text-[14px] lg:text-[18px] text-center text-nowrap font-semibold leading-[18px] tracking-[0.18px] uppercase py-[18px] px-[35px] bg-[#212121] rounded-[80px]">Ongoing Support</p>
                            <span className="text-[14px] font-normal leading-[16.8px] tracking-[0.14px] opacity-[0.8] ms-[22px]">Our team provides continuous HR and administrative support to ensure smooth operations for your international workforce. </span>
                        </div>
                        
                    </div>
                </div>
            </div>

            <Gif/>

            <OtherService
                image1={WebsiteDevelopment}
                title1="Website Development"
                description1="Speak with our web development experts for a free consultation. Get valuable advice from industry-leading professionals today!"
                link1="/development/website"
                image2={UiUxService}
                title2="UI/UX Design"
                description2="Consult with our UI/UX design experts today! Get valuable insights and professional advice to enhance your user experience."
                link2="/ui-ux"
                image3={TestingService}
                title3="Testing Service"
                description3="Get a free consultation with our software testing experts for tailored solutions ensuring your software is reliable, secure, and bug-free."
                link3="/testing"
            />

        </div>
    )
}

export default Eor