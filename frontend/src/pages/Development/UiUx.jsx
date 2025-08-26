import Main from "../../components/development/Main"
import UiUxBg from "../../../public/images/uiux-bg.png"
import UiUxMobileBg from "../../../public/images/uiuxbg-mobile.png"
import Explain from "../../components/development/Explain"
import WhoShouldMakeExplain from "../../components/development/WhoShouldMakeExplain"
import WhoShouldMakeSysCrad from "../../components/development/WhoShouldMakeSysCrad"
import Wsm1 from "../../../public/images/wsm-1.png"
import Wsm2 from "../../../public/images/wsm-2.png"
import Wsm3 from "../../../public/images/wsm-3.png"
import WhatYouCanDo from "../../components/development/WhatYouCanDo"
import BottomShadow from "../../components/development/BottomShadow"
import TopShadow from "../../components/development/TopShadow"
import SuccessfulWorkWebsite from "../../components/development/SuccessfulWorkWebsite"
import OurProcess from "../../components/development/OurProcess"
import DesignPackage from "../../../public/images/design-package.png"
import DesignPackageMobile from "../../../public/images/design-package-mobile.png"
import UiUxYutasan from "../../../public/images/uiux-yutasan.png"
import ConsultfreeBtn from "../../components/development/ConsultfreeBtn"
import Gif from "../../components/Gif"
import OtherService from "../../components/development/OtherService"
import PackageSection from "../../components/development/PackageSection"
import OurStrength from "../../components/OurStrength"
import US1 from "../../../public/images/US1.png"
import US2 from "../../../public/images/US2.png"
import US3 from "../../../public/images/US3.png"
import TestingService from "../../../public/images/testing.png"
import WebsiteDevelopment from "../../../public/images/website-development.png"
import Eor from "../../../public/images/eor.png"
import useVisiter from "../../hooks/useVisiter"


const UiUx = () => {
    useVisiter('uiux');
    return (
        <div className="development">
            
            <Main title="ui/ux design" image={UiUxBg} mobileImage={UiUxMobileBg} />

            <div className="other-sections mx-auto px-[25px] xl:px-[25px]">

                <Explain 
                    title="what is UI/UX?"
                    description="Design a user-friendly UI with clear navigation. Create an appealing layout with visual organization. Ensure readability with clear typography. Conduct user research for a positive experience. Develop detailed wireframes to plan the design. Create prototypes for early visualization."
                    width="90px" md_width="110px" xl_width="130px"
                />

                <div className="who-should-make">
                    <WhoShouldMakeExplain
                        title = "who should make ui/ux design?"
                        description = "UI/UX design should be created by website design redesign, mobile design creation, and seeking business growth that value brand consistency, mobile compatibility, user engagement, customer satisfaction, and business success."
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] mt-[88px] mb-[120px] lg:mb-[224px]">
                        <WhoShouldMakeSysCrad title="Website Design" image={Wsm1} />
                        <WhoShouldMakeSysCrad title="Mobile App Design" image={Wsm2} />
                        <WhoShouldMakeSysCrad title="System Design" image={Wsm3} />
                    </div>
                </div>

                <WhatYouCanDo
                    title = "what you can do with ui/ux design"
                    description = "Designing a UI/UX requires research, planning, creativity, and testing to create interfaces that are not only visually appealing but also functional, user-friendly, and aligned with the business goals. Here's what you can do."
                />

                <div className="step-section grid grid-cols-2 md:grid-cols-3 mt-[88px] mb-[191px] gap-[24px]">
                    <BottomShadow step = "01" title = "Boost Sales with Better User Experience"/>
                    <TopShadow step = "02" title = "Mobile Responsiveness"/>
                    <BottomShadow step = "03" title = "Business growth"/>
                    <TopShadow step = "04" title = "User Engagement"/>
                </div>

            </div>

            <OurStrength
                title1="Giving One-stop Services"
                description1="We offer a full range of services all in one place, making it easy for you to get everything you need without going anywhere else."
                image1={US1}
                title2="Providing Japan Quality"
                description2="We offer services that meet Japan’s high standards of quality in everything we do."
                image2={US2}
                title3="Always Think About clients"
                description3="As a marketing company, in web creation, we prioritize the customer journey and personas, ensuring a tailored experience that guides them effectively."
                image3={US3}
            />

            <div className="other-sections mx-auto px-[25px] xl:px-[25px] mt-[174px]">
                <SuccessfulWorkWebsite category='uiux' url="https://demo-site.next-innovations.ltd/ni-backend/public/api/works?category=3" />
            </div>

            <PackageSection
                image={DesignPackage}
                mobile_image={DesignPackageMobile}
                title="ui/ux design package"
                mini_title="Estimate cost for each page"
                price="$100~"
                description="At Next Innovations, we know that every project is different and needs special attention. That’s why we provide customizable UI/UX design services for everyone. Since design needs change based on goals, you can reach out to us for tailored designs that fit your budget and objectives. Contact us today to find out how we can help improve your brand with engaging UI/UX design."
            />

            <div className="full-section bg-[#0F0F0F] text-[#FFF]">
                <OurProcess/>

                <div className="max-w-[1304px] mx-auto pb-[115px] lg:pb-[212px]">
                    <div className="flex flex-col lg:flex-row gap-[50px] xl:gap-[64px]">
                        <div><img src={UiUxYutasan} className="w-full" alt="" /></div>
                        <div className="flex flex-col justify-between px-[25px] lg:px-0">
                            <div className="pt-[24px] border-t-[2px] border-[#F0F0F0]">
                                <h2 className="text-[40px] xl:text-[48px] font-light leading-[57.6px] tracking-[-0.48px]">Yuta Mukai</h2>
                                <p className="text-[16px] xl:text-[18px] font-semibold leading-[18px] tracking-[0.18px] uppercase mt-[14px] mb-[80px] lg:mb-0">web design director</p>
                            </div>
                            <div>
                                <h4 className="text-[20px] xl:text-[24px] font-normal leading-[24px] xl:leading-[32px] lg:max-w-[571px]">When we made this website&apos;s look and feel, we thought a lot about how people would use it. </h4>
                                <div className="md:flex gap-[35px] mt-[25px] xl:mt-[32px] mb-[38px] text-[16px] xl:text-[18px] font-normal leading-[26px] tracking-[0.18px]">
                                    <p className="lg:max-w-[281px]">We wanted them to have a good time while clicking around. Our designs mix pretty looks with things that work well, all tailored to what the business and users need.</p>
                                    <p className="lg:max-w-[255px]">We worked closely with the developers to make sure our designs turned into a website that&apos;s not just nice to look at, but also easy to use.</p>
                                </div>
                                <ConsultfreeBtn/>
                            </div>
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
                image3={TestingService}
                title3="Testing Service"
                description3="Get a free consultation with our software testing experts for tailored solutions ensuring your software is reliable, secure, and bug-free."
                link3="/testing"
            />

        </div>
    )
}

export default UiUx