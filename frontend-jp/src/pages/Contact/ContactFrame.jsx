import ReachOut from "/images/Reach-out-to-us.png"
import Breadcrumb from "../../components/Breadcrumb";
import { useRef } from "react";
import useLineAnimation from "../../hooks/useLineAnimation";
import ContactInfo from "../../components/ContactInfo";
import { PropTypes } from "prop-types"
import useHeroRotate from "../../hooks/useHeroRotate";

const ContactFrame = ({children,children2}) => {
    const topLineRef = useRef(null)
    useLineAnimation(topLineRef,{start: "top 90%"})
    useHeroRotate({ visible: false })

    return (
        <div className="bg-[url('/images/contact-bg.png')] bg-cover bg-no-repeat bg-fixed rounded-b-[40px] lg:rounded-b-[80px] relative pb-[52px] lg:pb-[172px]">
            <div className="max-w-[1240px] mx-auto pt-[100px] lg:pt-[130px] px-6 xl:px-0">
                <Breadcrumb current="お問い合わせ" />
                <div className="mt-[38px] lg:flex lg:gap-[100px] xl:gap-0 xl:justify-between">
                    <div className="lg:w-[546px] pt-[13px]">
                        <img src={ReachOut} alt="" />
                        <div className="mt-[64px] space-y-[18px] text-[#000000] text-[12px] lg:text-[14px] font-normal leading-[24px] lg:leading-[31px] tracking-[0%]">
                            {children2}
                        </div>
                        <div className="hidden lg:block">
                            <ContactInfo/>
                        </div>
                    </div>
                    <div className="lg:w-[510px] mt-[61px] lg:mt-0">
                        {children}
                    </div>
                    <div className="lg:hidden">
                        <ContactInfo/>
                    </div>
                </div>
            </div>
        </div>
    );
}

ContactFrame.propTypes = {
    children: PropTypes.node,
    children2: PropTypes.node,
}

export default ContactFrame;
