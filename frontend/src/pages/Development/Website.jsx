import Main from "../../components/development/Main"
import Explain from "../../components/development/Explain"
import Mininav from "../../components/development/Mininav"
import Whatis from "../../components/development/Whatis"
import WhoShouldMakeWebsite from "../../components/development/WhoShouldMakeWebsite"
import WhatYouCanDo from "../../components/development/WhatYouCanDo"
import StepWebsite from "../../components/development/StepWebsite"
import SuccessfulWorkWebsite from "../../components/development/SuccessfulWorkWebsite"
import OurRequirementWebsite from "../../components/development/OurRequirementWebsite"
import OurProcess from "../../components/development/OurProcess"
import Gif from "../../components/Gif"
import OtherService from "../../components/development/OtherService"
import DevelopmentBg from "../../../public/images/development-bg.png"
import DevelopmentBgMobile from "../../../public/images/developmentbg-mobile.png"
import UiUxService from "../../../public/images/ui-ux-service.png"
import TestingService from "../../../public/images/testing.png"
import Eor from "../../../public/images/eor.png"
import OurStrength from "../../components/OurStrength"
import US1 from "../../../public/images/US1.png"
import US2 from "../../../public/images/US2.png"
import US3 from "../../../public/images/US3.png"
import useVisiter from "../../hooks/useVisiter"

const Website = () => {
    useVisiter('website');
    return (
        <div className="development">
            
            <Main title="development" image={DevelopmentBg} mobileImage={DevelopmentBgMobile}/>

            <div className="other-sections mx-auto px-[25px] xl:px-[25px]">
                <Explain 
                    title="What is Development?"
                    description="Development involves building and maintaining websites, web applications, and software systems to deliver user-friendly experiences and efficient, 
                    secure solutions. It supports business growth through enhanced digital capabilities."
                    width="160px" md_width="200px" xl_width="246px"
                />

                <Mininav/>

                <Whatis
                    title = "What is a website development?"
                    description = "Website development is the process of creating, designing, and maintaining websites to deliver user-friendly, visually appealing, and functional online platforms. It involves coding, integrating features, and optimizing performance to ensure seamless user experiences and support business goals."
                />

                <WhoShouldMakeWebsite/>

                <WhatYouCanDo
                    title = "what you can do with Website Development"
                    description = "With website development, you can create user-friendly, responsive websites tailored to your business needs. It enables you to enhance brand presence, engage customers, provide services, and drive conversions effectively online."
                />

                <StepWebsite/>

                <SuccessfulWorkWebsite category='website' url="https://demo-site.next-innovations.ltd/ni-backend/public/api/works?category=1" />
            </div>

            <div className="full-section bg-[#0F0F0F] text-[#FFF] pt-[100px] md:pt-[152px]">
                <OurRequirementWebsite/>
                <OurProcess/>
            </div>

            <div className="mt-[100px] mb-[200px]">
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
            </div>

            <Gif/>

            <OtherService
                image1={Eor}
                title1="Employer of Record"
                description1="An Employer of Record (EOR) manages legal, administrative, and HR tasks for employees abroad, ensuring compliance with local laws."
                link1="/eor"
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

export default Website