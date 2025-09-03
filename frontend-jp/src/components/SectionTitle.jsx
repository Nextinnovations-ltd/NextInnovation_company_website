import {PropTypes} from "prop-types"

const SectionTitle = ({jp,eng='',jpcolor='text-[#575757]'}) => {
    return (
        <>
            <div className={`flex items-center text-[16px] font-medium leading-[31px] tracking-[0%] ${jpcolor}`}>(
                <div className="w-2 h-2 rounded-full bg-[#096FCA] ms-1 me-2"></div>
                {jp} )
            </div>
            {!!eng && (
                <h1 className="roboto text-[58px] font-bold leading-[67px] tracking-[-1%] uppercase mt-[10px]">{eng}</h1>
            )}
        </>
    )
}

SectionTitle.propTypes = {
    jp: PropTypes.string.isRequired,
    eng: PropTypes.string.isRequired,
    jpcolor: PropTypes.string.isRequired,
}

export default SectionTitle