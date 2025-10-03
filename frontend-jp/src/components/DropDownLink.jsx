import { NavLink } from "react-router-dom";
import {PropTypes} from "prop-types"
import RightArrow from "/images/navbar-right-arrow.svg"

const DropDownLink = ({title,link,clickLink}) => {
    return (
    <NavLink
      to={link}
      onClick={() => clickLink(link)}
      className="group flex justify-between items-end py-[14px] px-[24px] hover:text-white transition-all hover:bg-[#F15A29] rounded-[8px]"
    >
      <p className="text-[16px] font-medium leading-[100%] tracking-[-4%]">{title}</p>
      <img src={RightArrow} alt="" className="group-hover:invert group-hover:brightness-0 group-hover:contrast-200" />
    </NavLink>

    );
}

DropDownLink.propTypes = {
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    clickLink: PropTypes.func,
}

export default DropDownLink;
