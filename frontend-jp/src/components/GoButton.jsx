import {PropTypes} from "prop-types";
import RightArrow from "/images/right-arrow.svg";
import { Link } from "react-router-dom";

const GoButton = ({name,bgColor="bg-[#F15A29]",link,target=""}) => {
    return (
        <Link to={link} target={target}>
            <button className={`${bgColor} w-[192px] lg:w-[254px] h-[52px] lg:h-[68px] px-[30px] rounded-[40px] text-[12px] lg:text-[16px] font-bold leading-[11.54px] lg:leading-[20px] tracking-[0%] text-white`}>
                <div className="flex justify-between items-end">
                    {name}
                    <img src={RightArrow} className="w-[9px] h-[8px] lg:w-[16px] lg:h-[14px]" alt="" />
                </div>                
            </button>
        </Link>
    )
}

GoButton.propTypes = {
    name: PropTypes.string.isRequired,
    bgColor: PropTypes.string,
    link: PropTypes.string.isRequired,
    target: PropTypes.string,
}

export default GoButton