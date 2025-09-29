import {PropTypes} from "prop-types"
import { useRef } from "react";
import useLineAnimation from "../../hooks/useLineAnimation";
import useCardAnimation from "../../hooks/useCardAnimation";
import useSectionTitleAnimation from "../../hooks/useSectionTitleAnimation";

const EorServiceSolveCard = ({image,title,description, first = false}) => {
    const topLineRef = useRef(null)
    const bottomLineRef = useRef(null)
    const containerRef = useRef(null)
    const titleRef = useRef(null)
    const textRef = useRef(null)
    useLineAnimation(topLineRef,{start: "top 90%"})
    useLineAnimation(bottomLineRef,{start: "top 90%"})
    useCardAnimation(containerRef,".service-image",{start: "top 80%"})
    useSectionTitleAnimation(titleRef,{start: "top 80%"})
    useSectionTitleAnimation(textRef,{start: "top 80%"})

    return (
        <div ref={containerRef} className={`relative lg:flex lg:gap-[92px] py-[50px] lg:py-[64px]`}>
            <span ref={bottomLineRef} className="absolute bottom-0 left-0 h-[0.8px] bg-[#1E2C44] block"></span>
            {!!first && <span ref={topLineRef} className="absolute top-0 left-0 h-[0.8px] bg-[#1E2C44] block"></span>}
            <img src={image} alt="" className="service-image mb-[30px] lg:mb-0" />
            <div>
                <div className="text-[#02021E] text-[16px] lg:text-[20px] overflow-hidden font-bold leading-[24px] lg:leading-[34px] tracking-[-2%] mb-[15px]">
                    <h3 ref={titleRef}>{title}</h3>
                </div>
                <div ref={textRef}>
                    <p className="lg:w-[430px] text-[#444444] text-[12px] lg:text-[14px] overflow-hidden font-normal leading-[22px] lg:leading-[31px] tracking-[0%]">{description}</p>
                </div>
            </div>
        </div>
    );
}

EorServiceSolveCard.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    first: PropTypes.bool,
}

export default EorServiceSolveCard;
