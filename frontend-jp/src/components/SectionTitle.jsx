import {PropTypes} from "prop-types"

const SectionTitle = ({jp,eng='',jpcolor='text-[#575757]'}) => {
    return (
        <>
            <div>
                <div className={`flex items-center text-[12px] lg:text-[16px] font-medium leading-[31px] tracking-[0%] ${jpcolor}`}>(
                    <div className="w-2 h-2 rounded-full bg-[#096FCA] ms-1 me-2"></div>
                    {jp} )
                </div>
                {!!eng && (
                    <h1 className="roboto text-[32px] lg:text-[58px] font-bold leading-[31px] lg:leading-[67px] tracking-[0%] lg:tracking-[-1%] uppercase mt-[10px]">{eng}</h1>
                )}
            </div>
        </>
    )
}

SectionTitle.propTypes = {
    jp: PropTypes.string.isRequired,
    eng: PropTypes.string,
    jpcolor: PropTypes.string,
}

export default SectionTitle