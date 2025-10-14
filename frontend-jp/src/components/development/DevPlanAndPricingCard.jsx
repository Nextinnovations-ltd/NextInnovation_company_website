import { Link } from "react-router-dom";
import { PropTypes } from "prop-types"

const DevPlanAndPricingCard = ({text1,text2,text3,text4,link=""}) => {
    return (
        <div className="md:w-[350px] lg:w-[310px] xl:w-[366px] rounded-[20px] dev-plan-and-pricing-card">
            <div className="bg-[#1E2C44] text-white text-center rounded-t-[20px] py-[21px] lg:py-[23px] px-[30px] min-h-[141px] lg:min-h-[147px]">
                <p className="text-[12px] font-normal leading-[22px] lg:leading-[23px] tracking-[1%]">{text1}</p>
                <p className="text-[20px] xl:text-[25px] font-bold leading-[28px] lg:leading-[36px] tracking-[-2%] lg:tracking-[1%] mt-[10px]">{text2}</p>
            </div>
            <div className="rounded-b-[20px] px-[40px] pt-[27px] lg:pt-[28px] pb-[56px] text-center shadow-[0px_3px_21px_4px] shadow-[#1E2C441A]">
                <div className="pb-[20px] border-b-[1px] border-[#E2E2E2] text-center mb-[33px]">
                    <h4 className="text-[32px] xl:text-[38px] font-bold leading-[50px] tracking-[0%] lg:tracking-[3%] text-[#313131] mb-[53px] lg:mb-[55px]">{text3}</h4>
                    <p className="md:min-h-[48px] text-[12px] lg:text-[13px] font-normal leading-[22px] lg:leading-[25px] tracking-[0%] text-[#000000]">{text4}</p>
                </div>
                <Link to={link} className="inline-block text-[15px] font-bold leading-[20px] tracking-[-2%] lg:tracking-[3%] text-white bg-[#F15A29] hover:bg-[#D95125] py-[20px] px-[37.5px] rounded-[36px]">このプランで相談する</Link>
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
