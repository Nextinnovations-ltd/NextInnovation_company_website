import Arrow from "/images/onboarding-arrow.svg"
import ArrowMobile from "/images/onboarding-arrow-mobile.svg"
import {PropTypes} from "prop-types"

const OnboardingCard = ({step,title,image,description,last = false}) => {
    return (
        <div className="relative">
            {/* Card */}
            <div className="h-full onboarding-card border-[2px] border-[#DFDFDF] rounded-[18px] px-[26px] lg:px-[27px] py-[37px] lg:py-[40px]">
                <p className="absolute -top-[15px] left-1/2 -translate-x-1/2 bg-[#F15A29] text-[14px] font-bold leading-[17px] tracking-[-1%] text-white px-[44px] py-[5px] rounded-[27px]">
                    Step:0{step}
                </p>
                <h3 className="text-[20px] text-[#02021E] font-bold leading-[34px] tracking-[-2%] text-center">
                    {title}
                </h3>
                <img src={image} alt="" className="mx-auto mt-[24px] mb-[28px] lg:mb-[32px]" />
                <p className="text-[12px] lg:text-[14px] text-[#444444] font-normal leading-[22px] lg:leading-[31px] tracking-[0%]">
                    {description}
                </p>
            </div>

            {/* Arrow outside card */}
            {step !== "7" && (
                <>
                    <img
                        src={Arrow}
                        alt=""
                        className={`${last ? "md:-right-[24px] lg:-right-[32px]" : "md:-right-[36px] lg:-right-[50px]"} md:w-[50px] lg:w-auto hidden md:block absolute top-1/2 -translate-y-1/2 z-[50]`}
                    />
                    <img src={ArrowMobile} alt="" className="absolute -bottom-[20px] left-1/2 -translate-x-1/2 md:hidden" />
                </>
            )}

        </div>
    );
}

OnboardingCard.propTypes = {
    step: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    last: PropTypes.bool,
}

export default OnboardingCard;
