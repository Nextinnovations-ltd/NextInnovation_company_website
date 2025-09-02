import {PropTypes} from "prop-types"
import TopShadowImage from "../../../public/images/top-shadow.png"

const TopShadow = ({step, title}) => {
    return (
        <div className="md:col-start-3 bottom-shadow relative border-t-[2px] border-[#E84721]">
            <img src={TopShadowImage} className="w-full" alt="" />
            <span className="absolute left-[2px] lg:left-[12px] bottom-0 lg:bottom-[15px] xl:bottom-[30px] text-[60px] md:text-[100px] lg:text-[120px] xl:text-[135px] leading-[50px] md:leading-[100px] italic font-light text-[#E84721]">{step}</span>
            <p className="absolute left-[10px] lg:left-[24px] top-[10px] md:top-[20px] lg:top-[30px] xl:top-[40px] text-[13px] md:text-[16px] lg:text-[20px] xl:text-[24px]  font-normal leading-[32px]">{title}</p>
        </div>
    )
}

TopShadow.propTypes = {
    title: PropTypes.string.isRequired,
    step: PropTypes.string.isRequired
}

export default TopShadow