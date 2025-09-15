import Arrow from "/images/onboarding-arrow.svg"
import {PropTypes} from "prop-types"

const OnboardingCard = ({step,title,image,description,last = false}) => {
    return (
        <div className="w-[389px] border-[2px] border-[#DFDFDF] rounded-[18px] px-[30px] py-[42px] relative">
            <p className="absolute -top-[18px] translate-x-1/2 w-[162px] bg-[#F15A29] text-[16px] font-bold leading-[20px] tracking-[-1%] text-white px-[50px] py-[6px] rounded-[30px]">Step:0{step}</p>
            <h3 className="text-[20px] text-[#02021E] font-bold leading-[34px] tracking-[-2%] text-center">{title}</h3>
            <img src={image} alt="" className="mx-auto mt-[24px] mb-[32px]" />
            <p className="text-[15px] text-[#444444] font-normal leading-[24px] tracking-[0%]">{description}</p>
            <img src={Arrow} alt="" className={`${step == '7' ? 'hidden' : 'absolute'} ${last ? '-right-[32px]' : '-right-[50px]'} top-1/2 -translate-y-1/2 !z-10`} />
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
