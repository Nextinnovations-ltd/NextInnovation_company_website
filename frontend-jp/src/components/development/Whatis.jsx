import {PropTypes} from "prop-types"
const Whatis = ({title, description}) => {
    return (
        <div className="what-is md:flex md:gap-[24px] mt-[70px] lg:mt-[144px] mb-[120px]">
            <h3 className="w-[400px] uppercase text-[32px] md:text-[40px] xl:text-[48px] font-semibold leading-[48px] tracking-[-0.96px]">{title}</h3>
            <p className="description border-t-[2px] lg:border-t-[3px] border-[#E84721] text-[16px] md:text-[24px] xl:text-[32px] font-normal leading-[20px] md:leading-[30px] lg:leading-[40px] mt-[30px] md:mt-[200px] pt-[15px] md:pt-[24px] ms-[64px] md:ms-0">
                {description}
            </p>
        </div>
    )
}

Whatis.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

export default Whatis
