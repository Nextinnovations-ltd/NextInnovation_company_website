import {PropTypes} from "prop-types"
import BottomShadowImg from "../../../public/images/bottom-shadow.png"
const BottomShadow = ({step, title}) => {
    return (
        <div className="md:col-start-2 bottom-shadow relative border-b-[2px] border-[#E84721]">
            <img src={BottomShadowImg} className="w-full" alt="" />
            <span className="absolute left-[2px] lg:left-[12px] top-0 text-[60px] md:text-[100px] lg:text-[120px] xl:text-[135px] leading-[50px] md:leading-[100px] italic font-light text-[#E84721]">{step}</span>
            <p className="absolute left-[10px] lg:left-[24px] bottom-[10px] md:bottom-[20px] lg:bottom-[30px] xl:bottom-[41px] text-[13px] md:text-[16px] lg:text-[20px] xl:text-[24px] font-normal leading-[32px]">{title}</p>
        </div>
    )
}

BottomShadow.propTypes = {
    step: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

export default BottomShadow