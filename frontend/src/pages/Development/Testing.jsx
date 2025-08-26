import Main from "../../components/development/Main"
import TestingBg from "../../../public/images/TestingService.png"
import Explain from "../../components/development/Explain"
import WhoShouldMakeExplain from "../../components/development/WhoShouldMakeExplain"
import WhoShouldMakeSysCrad from "../../components/development/WhoShouldMakeSysCrad"
import Wsm1 from "../../../public/images/wsm-1.png"
import Wsm2 from "../../../public/images/wsm-2.png"
import Wsm3 from "../../../public/images/wsm-3.png"
import WhatYouCanDo from "../../components/development/WhatYouCanDo"
import BottomShadow from "../../components/development/BottomShadow"
import TopShadow from "../../components/development/TopShadow"
import WhyChooseUsStep from "../../components/development/WhyChooseUsStep"
import PackageSection from "../../components/development/PackageSection"
import TestingPackage from "../../../public/images/TestingPackage.png"
import StickGradient from "../../../public/images/stick-gradient.png"
import Gif from "../../components/Gif"
import OtherService from "../../components/development/OtherService"
import OurStrength from "../../components/OurStrength"
import TS1 from "../../../public/images/TS1.png"
import TS2 from "../../../public/images/TS2.png"
import TS3 from "../../../public/images/TS3.png"
import SuccessfulWorkWebsite from "../../components/development/SuccessfulWorkWebsite"
import UiUxService from "../../../public/images/ui-ux-service.png"
import WebsiteDevelopment from "../../../public/images/website-development.png"
import Eor from "../../../public/images/eor.png"
import useVisiter from "../../hooks/useVisiter"

const Testing = () => {
    useVisiter('testing');
    return (
        <div className="development">

            <Main title="Testing Service" image={TestingBg} mobileImage={TestingBg} />
            
            <div className="other-sections mx-auto px-[25px] xl:px-[25px]">

                <Explain 
                    title="what is Testing Service?"
                    description="Testing services ensure secure, user-friendly, accessible, and high-performing websites and applications. Our comprehensive testing guarantees defect-free digital platforms that meet business needs, exceed customer expectations, and deliver seamless user experiences aligned with your goals."
                    width="160px" md_width="200px" xl_width="246px"
                />

                <div className="who-should-make">
                    <WhoShouldMakeExplain
                        title = "who should take Testing services?"
                        description = "Our testing services are ideal for individuals and organizations looking to focus on development without the stress of testing. Whether you want to avoid the intricacies of testing or ensure a seamless user experience, our services cater to your unique needs."
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] mt-[88px] mb-[120px] lg:mb-[224px]">
                        <WhoShouldMakeSysCrad title="Developers and organizations" image={Wsm1} />
                        <WhoShouldMakeSysCrad title="Businesses" image={Wsm2} />
                        <WhoShouldMakeSysCrad title="Anyone prioritizing performance" image={Wsm3} />
                    </div>
                </div>

                <WhatYouCanDo
                    title = "what you can do with Testing Sevices?"
                    description = "Testing services empower you to launch digital platforms that excel in reliability, performance, and user satisfaction. By providing your project requirements and environment details, you can achieve optimal results that support business growth."
                />

                <div className="step-section grid grid-cols-2 md:grid-cols-3 mt-[88px] mb-[191px] gap-[24px]">
                    <BottomShadow step = "01" title = "Reliable Products"/>
                    <TopShadow step = "02" title = "Enhanced Safety"/>
                    <BottomShadow step = "03" title = "Bug-Free Performance"/>
                    <TopShadow step = "04" title = "Ease of Use"/>
                </div>

            </div>

            <OurStrength
                title1="accurate & Reliable testing"
                description1="Our testing services are designed to ensure precision and reliability, catching potential issues early to guarantee your product meets the highest standards of quality and functionality."
                image1={TS1}
                title2="high quality performance"
                description2="We focus on optimizing your product's performance, ensuring it runs smoothly under all conditions by addressing any bottlenecks and enhancing overall efficiency."
                image2={TS2}
                title3="Bug-Free Satisfaction"
                description3="Our team works diligently to provide a bug-free experience, solving issues before they reach the user and ensuring satisfaction through flawless functionality and dependable service."
                image3={TS3}
            />

            <div className="max-w-[1240px] mx-auto mt-[136px] px-[25px] xl:px-0">
                <SuccessfulWorkWebsite category='testing' url="https://demo-site.next-innovations.ltd/ni-backend/public/api/works?category=5" />
            </div>

            <div className="max-w-[1240px] mx-auto mb-[100px] md:my-[150px] lg:my-[201px] text-[#D22E19] px-[25px] xl:px-0">
                <h2 className="text-[36px] md:text-[46px] xl:text-[48px] text-[#121212] font-semibold leading-[48px] tracking-[-0.96px] uppercase">Our EXPERTIES</h2>
                <WhyChooseUsStep step="01 / 06" title="Static Website Testing" />
                <WhyChooseUsStep step="02 / 06" title="Browser Compatibility Testing" />
                <WhyChooseUsStep step="03 / 06" title="Manual Testing" />
                <WhyChooseUsStep step="04 / 06" title="Integrated Testing" />
                <WhyChooseUsStep step="05 / 06" title="Black Box Testing" />
                <WhyChooseUsStep step="06 / 06" title="Functional Testing" />
            </div>

            <div className="bg-[#F0F0F0]">
                <PackageSection
                    image={TestingPackage}
                    mobile_image={TestingPackage}
                    title="Testing Service plan"
                    mini_title="Estimate cost for each Service"
                    price="start from 500USD ~"
                    description="Our Testing Service Plan is designed to deliver reliable, secure, and user-friendly digital platforms tailored to meet your specific business requirements. In today’s fast-paced digital environment, it is crucial to ensure your websites and applications are not only functional but also optimized for exceptional performance, accessibility, and user satisfaction. With our comprehensive testing approach, we address every aspect of quality assurance to help you achieve defect-free and high-performing digital products."
                />
            </div>

            <div className="full-section bg-[#0F0F0F] text-[#FFF]">
                <div className="our-process max-w-[1240px] mx-auto pt-[100px] md:pt-[170px] pb-[100px] md:pb-[76px] px-[25px] xl:px-0">
                    <h2 className="text-[35px] lg:text-[40px] xl:text-[48px] text-center font-semibold leading-[48px] tracking-[-0.96px] uppercase">Our process</h2>
                    <div className="flex overflow-x-auto justify-between">
                        <div className="flex flex-col items-center w-[210px] gap-[20px] pt-[142px]">
                            <p className="text-[14px] lg:text-[18px] text-center font-semibold leading-[18px] tracking-[0.18px] uppercase py-[16px] px-[35px] bg-[#E84721] rounded-[80px]">Requirement Analysis</p>
                            <span className="text-[14px] font-normal leading-[16.8px] tracking-[0.14px] opacity-[0.8] ms-[16px]">Understand your project needs, background, and environment details.</span>
                        </div>
                        <img src={StickGradient} alt="" />
                        <div className="flex flex-col items-center w-[185px] gap-[20px] pt-[222px]">
                            <p className="text-[14px] lg:text-[18px] text-center text-nowrap font-semibold leading-[18px] tracking-[0.18px] uppercase py-[16px] px-[30px] bg-[#212121] rounded-[80px]">Test Planning</p>
                            <span className="text-[14px] font-normal leading-[16.8px] tracking-[0.14px] opacity-[0.8] ms-[6.5px]">Create a customized strategy tailored to your goals and scope.</span>
                        </div>
                        <img src={StickGradient} alt="" />
                        <div className="flex flex-col items-center w-[168px] gap-[20px] pt-[142px]">
                            <p className="text-[14px] lg:text-[18px] text-center font-semibold leading-[18px] tracking-[0.18px] uppercase py-[16px] px-[30px] bg-[#212121] rounded-[80px]">Execution</p>
                            <span className="text-[14px] font-normal leading-[16.8px] tracking-[0.14px] opacity-[0.8] ms-[5.5px]">Conduct thorough testing using appropriate tools and methodologies.</span>
                        </div>
                        <img src={StickGradient} alt="" />
                        <div className="flex flex-col items-center w-[179px] gap-[20px] pt-[222px]">
                            <p className="text-[14px] lg:text-[18px] text-center font-semibold leading-[18px] tracking-[0.18px] uppercase py-[16px] px-[34px] bg-[#212121] rounded-[80px]">Reporting</p>
                            <span className="text-[14px] font-normal leading-[16.8px] tracking-[0.14px] opacity-[0.8] ms-[22px]">Offer recommendations and retesting to ensure final product quality.</span>
                        </div>
                        <img src={StickGradient} alt="" />
                        <div className="flex flex-col items-center w-[179px] gap-[20px] pt-[142px]">
                            <p className="text-[14px] lg:text-[18px] text-center text-nowrap font-semibold leading-[18px] tracking-[0.18px] uppercase py-[16px] px-[35px] bg-[#212121] rounded-[80px]">Follow-Up</p>
                            <span className="text-[14px] font-normal leading-[16.8px] tracking-[0.14px] opacity-[0.8] ms-[5.5px]">Provide detailed insights, highlighting areas for improvement.</span>
                        </div>
                        
                    </div>
                </div>
            </div>

            <Gif/>

            <OtherService
                image1={Eor}
                title1="Employer of Record"
                description1="An Employer of Record (EOR) manages legal, administrative, and HR tasks for employees abroad, ensuring compliance with local laws."
                link1="/eor"
                image2={WebsiteDevelopment}
                title2="Website Development"
                description2="Speak with our web development experts for a free consultation. Get valuable advice from industry-leading professionals today!"
                link2="/development/website"
                image3={UiUxService}
                title3="UI/UX Design"
                description3="Consult with our UI/UX design experts today! Get valuable insights and professional advice to enhance your user experience."
                link3="/ui-ux"
            />

        </div>
    )
}

export default Testing