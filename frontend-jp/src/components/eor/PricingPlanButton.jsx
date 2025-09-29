import { Link } from "react-router-dom";
import {PropTypes} from "prop-types"

const PricingPlanButton = ({link,bgColor,hoverBgColor,textColor,hoverTextColor}) => {
    return (
        <div className="text-center">
            <Link to={link}>
                <button className={`${bgColor} ${hoverBgColor} ${textColor} ${hoverTextColor} text-[15px] lg:text-[16px] font-bold leading-[25px] lg:leading-[27px] tracking-[3%] py-[12px] px-[50px] lg:px-[54px] border-[2px] border-[#F15A29] rounded-[40px] transition-colors duration-400 ease-in-out`}>このプランで相談する</button>
            </Link>
        </div>
    );
}

PricingPlanButton.propTypes = {
    link: PropTypes.string.isRequired,
    bgColor: PropTypes.string.isRequired,
    hoverBgColor: PropTypes.string.isRequired,
    textColor: PropTypes.string.isRequired,
    hoverTextColor: PropTypes.string.isRequired,
}

export default PricingPlanButton;
