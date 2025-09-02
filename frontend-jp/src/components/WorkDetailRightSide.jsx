import {PropTypes} from "prop-types"
const WorkDetailRightSide = ({title, description}) => {
    return (
        <div>
            <h4 className="text-[16px] lg:text-[18px] font-semibold leading-[18px] tracking-[0.18px] uppercase text-[#999999]">{title}</h4>
            <p className="text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] font-normal leading-[30px] lg:leading-[35px] xl:leading-[40px] mt-[32px]">{description}</p>
        </div>
    )
}

WorkDetailRightSide.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

export default WorkDetailRightSide