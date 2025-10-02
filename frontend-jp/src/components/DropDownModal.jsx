import {PropTypes} from "prop-types"
import NavbarDropDownTitle from "./NavbarDropDownTitle";
import DropDownLink from "./DropDownLink";

const DropDownModal = ({ jp, eng, menus, description, clickLink }) => {
  return (
    <>


      {/* Dropdown content */}
      <div className="pt-4">
        <div className="absolute top-full left-0  w-full px-[63px] pt-[72px] pb-[70px] z-[10000] bg-[#FFFFFF]   rounded-[30px]">
            <div className="flex justify-between">
              <NavbarDropDownTitle jp={jp} eng={eng} />
              <div className="service-drop-down text-[#444444] w-[246px] space-y-2">
                {menus.map((menu, index) => (
                  <DropDownLink
                    key={index}
                    title={menu.title}
                    link={menu.link}
                    clickLink={clickLink}
                  />
                ))}
              </div>
              <div className="w-[375px] text-[#444444] text-[15px] font-normal leading-[28px] tracking-[0%]">
                {description}
              </div>
            </div>
          </div>
      </div>
    </>
  );
};


DropDownModal.propTypes = {
    jp: PropTypes.string.isRequired,
    eng: PropTypes.string.isRequired,
    menus: PropTypes.array.isRequired,
    description: PropTypes.string.isRequired,
    clickLink: PropTypes.func.isRequired,
}

export default DropDownModal;
