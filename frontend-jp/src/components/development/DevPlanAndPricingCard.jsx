import { Link } from "react-router-dom";
import { PropTypes } from "prop-types"

const DevPlanAndPricingCard = ({text1,text2,text3,text4,link=""}) => {
    return (
        <div className="lg:w-[407px] rounded-[20px] dev-plan-and-pricing-card">
            <div className="bg-[#1E2C44] text-white text-center rounded-t-[20px] pt-[21px] lg:pt-[25px] pb-[54px] lg:pb-[63px]">
                <p className="text-[12px] lg:text-[13px] font-normal leading-[22px] lg:leading-[26px] tracking-[1%]">{text1}</p>
                <p className="text-[20px] lg:text-[28px] font-bold leading-[28px] lg:leading-[40px] tracking-[-2%] lg:tracking-[1%] mt-[10px]">{text2}</p>
            </div>
            <div className="rounded-b-[20px] px-[43px] pt-[27px] lg:pt-[32px] pb-[56px] text-center shadow-[0px_3px_21px_4px] shadow-[#1E2C441A]">
                <div className="pb-[20px] border-b-[1px] border-[#E2E2E2] text-center mb-[40px] lg:mb-[53px] px-[18px]">
                    <h4 className="text-[32px] lg:text-[42px] font-bold leading-[50px] lg:leading-[54px] tracking-[0%] lg:tracking-[3%] text-[#313131] mb-[53px] lg:mb-[60px]">{text3}</h4>
                    <p className="lg:min-h-[48px] text-[12px] lg:text-[15px] font-normal leading-[22px] lg:leading-[24px] tracking-[0%] text-[#000000]">{text4}</p>
                </div>
                <Link to={link} className="inline-block text-[16px] lg:text-[18px] font-bold leading-[24px] lg:leading-[30px] tracking-[-2%] lg:tracking-[3%] text-white bg-[#F15A29] hover:bg-[#D95125] py-[14px] px-[51px] lg:px-[58px] rounded-[40px]">このプランで相談する</Link>
            </div>
        </div>
    );
}

DevPlanAndPricingCard.propTypes = {
    text1: PropTypes.string.isRequired,
    text2: PropTypes.string.isRequired,
    text3: PropTypes.string.isRequired,
    text4: PropTypes.string.isRequired,
    link: PropTypes.string,
}

export default DevPlanAndPricingCard;
