import {PropTypes} from "prop-types"

const NavbarDropDownTitle = ({jp,eng}) => {
    return (
        <>
            <div>
                <div className="text-[#575757] flex items-center text-[12px] lg:text-[16px] font-medium leading-[31px] tracking-[0%]">(
                    <div className="w-2 h-2 rounded-full bg-[#096FCA] ms-1 me-2 animate-fade"></div>
                    {jp} )
                </div>
                {!!eng && (
                    <h1 className="roboto text-[#1E2C44] text-[32px] lg:text-[46px] font-bold leading-[31px] lg:leading-[67px] tracking-[-1%] lg:tracking-[-1%] uppercase">{eng}</h1>
                )}
            </div>
        </>
    )
}

NavbarDropDownTitle.propTypes = {
    jp: PropTypes.string.isRequired,
    eng: PropTypes.string.isRequired,
}

export default NavbarDropDownTitle;
