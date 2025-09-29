import { Link } from "react-router-dom";
import { PropTypes } from "prop-types"

const CircleButton = ({link=""}) => {
    return (
        <Link to={link}>
            <div className="bg-[#F15A29] hover:bg-[#D95125] rounded-full w-[60px] lg:w-[64px] h-[60px] lg:h-[64px] flex justify-center items-center">
                <svg className="w-[12px] h-[12px] lg:w-[18px] lg:h-[15px]" width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 10.25H17.5L14 5.25" stroke="white" strokeWidth="1.875"/>
                </svg>
            </div>
        </Link>
    );
}

CircleButton.propTypes = {
    link: PropTypes.string,
}

export default CircleButton;
