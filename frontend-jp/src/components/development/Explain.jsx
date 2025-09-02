import {PropTypes} from "prop-types"
const Explain = ({title, description, width, md_width, xl_width}) => {
    return (
        <div className="explain-development mt-[104px] mb-[100px] lg:mb-[205px]">
            <div className="lg:flex lg:justify-between">
                <h3 className="title uppercase text-[16px] md:text-[20px] xl:text-[24px] font-semibold leading-[20px] lg:leading-[30px] tracking-[-0.48px]">
                    <span className={`text-nowrap inline-block w-[${width}] md:w-[${md_width}] xl:w-[${xl_width}] border-b-[3px] xl:border-b-[4px] border-[#E84721] pb-[12px]`}>{title}</span>
                </h3>
                <p className="lg:w-[650px] xl:w-[817px] text-[18px] md:text-[22 px] lg:text-[25px] xl:text-[32px] font-normal leading-[25px] md:leading-[30px] lg:leading-[40px] ms-[64px] md:ms-[200px] lg:ms-0 mt-[40px] lg:mt-0">{description}</p>
            </div>
        </div>
    )
}

Explain.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    md_width: PropTypes.string.isRequired,
    xl_width: PropTypes.string.isRequired,
}

export default Explain