import {PropTypes} from "prop-types";
import RightArrow from "/images/white-right-arrow.svg";
import { Link } from "react-router-dom";

const GoButton = ({name,nameNext="",bgColor="bg-[#F15A29]",bgHoverColor="hover:bg-[#D95125]",link,target="",arrow=RightArrow,textColor="text-white",textHoverColor="text-white"}) => {
    return (
        <Link to={link} target={target} className="">
            <button className={`${bgColor} ${bgHoverColor} ${textColor} ${textHoverColor} group w-[192px] lg:w-[230px] h-[52px] lg:h-[60px] px-[25px] lg:px-[30px] rounded-[40px] lg:rounded-[50px] text-[12px] lg:text-[15px] font-bold leading-[17px] lg:leading-[20px] tracking-[0%]`}>
                <div className="flex justify-between items-center">
                    {name}<br/>{nameNext}
                    <img src={arrow} className="w-[9px] h-[8px] lg:w-[16px] lg:h-[14px] group-hover:hidden" alt="" />
                    <img src={RightArrow} className="w-[9px] h-[8px] lg:w-[16px] lg:h-[14px] hidden group-hover:block" alt="" />
                </div>                
            </button>
        </Link>
    )
}

GoButton.propTypes = {
    name: PropTypes.string.isRequired,
    nameNext: PropTypes.string,
    bgColor: PropTypes.string,
    bgHoverColor: PropTypes.string,
    link: PropTypes.string.isRequired,
    target: PropTypes.string,
    arrow: PropTypes.string,
    textColor: PropTypes.string,
    textHoverColor: PropTypes.string,
}

export default GoButton