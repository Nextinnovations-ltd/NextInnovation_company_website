import {PropTypes} from "prop-types";
import RightArrow from "/images/right-arrow.svg";

const GoButton = ({name,bgColor="bg-[#F15A29]"}) => {
    return (
        <button className={`${bgColor} w-[192px] lg:w-[254px] h-[52px] lg:h-[68px] px-[30px] rounded-[40px] text-[12px] lg:text-[16px] font-bold leading-[11.54px] lg:leading-[20px] tracking-[0%] text-white`}>
            <div className="flex justify-between items-end">
                {name}
                <img src={RightArrow} className="w-[9px] h-[8px] lg:w-[16px] lg:h-[14px]" alt="" />
            </div>                
        </button>
    )
}

GoButton.propTypes = {
    name: PropTypes.string.isRequired,
    bgColor: PropTypes.string,
}

export default GoButton