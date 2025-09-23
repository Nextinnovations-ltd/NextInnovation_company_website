import {PropTypes} from "prop-types"

const PlanAndPricingGreenCard = ({text1,text1Next="",text2,text2Next="",text3,text3Next=""}) => {
    return (
        <div className="px-[28px]">
            <div className="w-full border-[4px] border-[#4D9F89] rounded-[4px]">
                <div className="py-[10px] text-[14px] lg:text-[16px] font-bold leading-[24px] lg:leading-[28px] tracking-[0%] text-white bg-[#4D9F89] text-center">
                    こんな方におすすめ
                </div>
                <div className="bg-[#F0F1F6] px-[15px] py-[20px] text-[12px] lg:text-[15px] font-medium leading-[22px] lg:leading-[28px] tracking-[0%] text-[#1E2C44] space-y-[6px]">
                    <p>{text1}</p>
                    <p className="ps-[14px]">{text1Next}</p>
                    <p>{text2}</p>
                    <p className="ps-[14px]">{text2Next}</p>
                    <p>{text3}</p>
                    <p className="ps-[14px]">{text3Next}</p>
                </div>
            </div>
        </div>
    );
}
PlanAndPricingGreenCard.propTypes = {
    text1: PropTypes.string.isRequired,
    text1Next: PropTypes.string,
    text2: PropTypes.string.isRequired,
    text2Next: PropTypes.string,
    text3: PropTypes.string.isRequired,
    text3Next: PropTypes.string,
}

export default PlanAndPricingGreenCard;
