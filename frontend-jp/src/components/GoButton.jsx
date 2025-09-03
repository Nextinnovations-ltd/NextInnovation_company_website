import {PropTypes} from "prop-types";
import RightArrow from "./svg/RightArrow";
const GoButton = ({name}) => {
    return (
        <button className="w-[254px] h-[68px] px-[30px] rounded-[40px] text-[16px] font-bold leading-[20px] tracking-[0%] text-white bg-[#F15A29]">
            <div className="flex justify-between items-end">
                {name}
                <RightArrow/>
            </div>                
        </button>
    )
}

GoButton.propTypes = {
    name: PropTypes.string.isRequired,
}

export default GoButton