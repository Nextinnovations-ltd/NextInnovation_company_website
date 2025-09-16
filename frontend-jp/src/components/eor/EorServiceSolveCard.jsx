import {PropTypes} from "prop-types"
import { useRef } from "react";
import useLineAnimation from "../../hooks/useLineAnimation";
import useCardAnimation from "../../hooks/useCardAnimation";
import useSectionTitleAnimation from "../../hooks/useSectionTitleAnimation";

const EorServiceSolveCard = ({image,title,description1,description2, last = false}) => {
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
        <div ref={containerRef} className={`relative flex gap-[80px] py-[64px]`}>
            <span ref={topLineRef} className="absolute top-0 left-0 h-[1px] bg-[#1E2C44] block"></span>
            <span ref={topLineRef} className="absolute top-0 left-0 h-[1px] bg-[#1E2C44] block"></span>
            {!!last && <span ref={bottomLineRef} className="absolute bottom-0 left-0 h-[1px] bg-[#1E2C44] block"></span>}
            <img src={image} alt="" className="service-image" />
            <div>
                <div className="text-[20px] overflow-hidden font-bold leading-[34px] tracking-[-2%] mb-[15px]">
                    <h3 ref={titleRef}>{title}</h3>
                </div>
                <div className="text-[15px] overflow-hidden font-normal leading-[24px] tracking-[0%]">
                    <p ref={textRef}>{description1}<br/>{description2}</p>
                </div>
            </div>
        </div>
    );
}

EorServiceSolveCard.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description1: PropTypes.string.isRequired,
    description2: PropTypes.string.isRequired,
    last: PropTypes.bool,
}

export default EorServiceSolveCard;
