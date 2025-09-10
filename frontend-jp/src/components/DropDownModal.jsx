import {PropTypes} from "prop-types"
import NavbarDropDownTitle from "./NavbarDropDownTitle";
import DropDownLink from "./DropDownLink";

const DropDownModal = ({jp,eng,menus,description}) => {
    return (
        <>
            <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"></div>
            <div className="sticky top-16 left-0 bg-white w-full ps-[138px] pe-[64px] pt-[72px] pb-[70px] z-50">
                <div className="flex justify-between">
                    <NavbarDropDownTitle jp={jp} eng={eng} />
                    <div className="text-[#444444] w-[246px] space-y-2">
                        {menus.map((menu, index) => (
                            <DropDownLink 
                            key={index} 
                            title={menu.title} 
                            link={menu.link} 
                            />
                        ))}
                    </div>
                    <div className="w-[375px] text-[#444444] text-[15px] font-normal leading-[28px] tracking-[0%]">{description}</div>
                </div>
            </div>
        </>
    );
}

DropDownModal.propTypes = {
    jp: PropTypes.string.isRequired,
    eng: PropTypes.string.isRequired,
    menus: PropTypes.array.isRequired,
    description: PropTypes.string.isRequired,
}

export default DropDownModal;
