import {PropTypes} from "prop-types"

const PlanAndPricingGreenCard = ({text1,text1Next="",text2,text2Next="",text3,text3Next=""}) => {
    return (
        <div className="px-[25px]">
            <div className="w-full">
                <div className="rounded-t-[6px] py-[10px] text-[14px] lg:text-[15px] font-bold leading-[24px] lg:leading-[25px] tracking-[0%] text-white bg-[#4D9F89] text-center">
                    こんな方におすすめ
                </div>
                <div className="rounded-b-[6px] bg-[#F0F1F6] px-[13px] py-[20px] text-[12px] lg:text-[14px] font-medium leading-[22px] lg:leading-[25px] tracking-[0%] text-[#1E2C44] space-y-[6px]">
                    <div className="flex">
                        <p>{text1}</p>
                        <p>{text1Next}</p>
                    </div>
                    <div className="flex">
                        <p>{text2}</p>
                        <p>{text2Next}</p>
                    </div>
                    <div className="flex">
                        <p>{text3}</p>
                        <p>{text3Next}</p>
                    </div>
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
