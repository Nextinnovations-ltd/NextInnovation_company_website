import { PropTypes } from "prop-types";
import Plus from "./svg/Plus";
import Minus from "./svg/Minus";
import RightArrow from "./svg/RightArrow";
import { NavLink } from "react-router-dom";

const MobileDropDown = ({name,value,menus, openValue, setOpenValue}) => {

    const isOpen = openValue == value;

    const toggleDropDown = () => {
        setOpenValue(isOpen ? '' : value);
    };

    return (
        <div className="py-[18px] pe-2 border-b-[1px] border-[#C5CBCF]">
            <div className="flex justify-between items-center" onClick={toggleDropDown}>
                {name}
                {!isOpen ? <Plus/> : <Minus/>}
            </div>

            {isOpen  && (
                <div id="service-dropdown" className="text-[14px] ps-[16.24px] pt-[14px]">
                    {menus.map((menu, index) => (
                        <NavLink to={menu.link} key={index} className="py-[14px] flex justify-between items-end">
                            {menu.title}
                            <RightArrow/>
                        </NavLink>
                    ))}
                </div>
            )}
        </div>
    );
}

MobileDropDown.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    menus: PropTypes.array.isRequired,
    openValue: PropTypes.string.isRequired,
    setOpenValue: PropTypes.func.isRequired,
}

export default MobileDropDown;
