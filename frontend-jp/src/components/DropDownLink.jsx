import { Link } from "react-router-dom";
import {PropTypes} from "prop-types"
import RightArrow from "/images/navbar-right-arrow.svg"

const DropDownLink = ({title,link}) => {
    return (
        <Link to={link} className="flex justify-between items-end py-[14px] px-[24px] hover:bg-[#FFE8E3] rounded-[8px]">
            <p className="text-[16px] font-medium leading-[100%] tracking-[-4%]">{title}</p>
            <img src={RightArrow} alt="" />
        </Link>
    );
}

DropDownLink.propTypes = {
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
}

export default DropDownLink;
