import {PropTypes} from "prop-types"
import { useRef } from "react";
import useSectionTitleAnimation from "../../hooks/useSectionTitleAnimation";

const SubTitleFlex = ({title,description}) => {
    const titleRef = useRef(null)
    useSectionTitleAnimation(titleRef,{start: "top 70%"})

    return (
        <div className="overflow-hidden">
            <div ref={titleRef} className="text-[#444444] lg:flex lg:items-start lg:justify-between">
                <h2 className="text-[20px] lg:text-[22px] font-bold leading-[28px] lg:leading-[34px] tracking-[-2%] mb-[20px] lg:mb-0">{title}</h2>
                <p className="lg:w-[411px] text-[14px] lg:text-[17px] font-medium leading-[24px] lg:leading-[34px] tracking-[0%]">{description}</p>
            </div>
        </div>
    );
}

SubTitleFlex.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}

export default SubTitleFlex;
