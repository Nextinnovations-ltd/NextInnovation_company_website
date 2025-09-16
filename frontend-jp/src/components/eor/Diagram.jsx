import { useRef } from "react";
import EorDiagram from "/images/eor-diagram.png"
import useCardAnimation from "../../hooks/useCardAnimation";
import useGoButtonAnimation from "../../hooks/useGoButtonAnimation";

const Diagram = () => {
    const containerRef = useRef(null)
    const titleRef = useRef(null)
    useCardAnimation(containerRef,".diagram", {start: "top 70%",})
    useGoButtonAnimation(titleRef, {start: "top 80%"},1)
    
    return (
        <div className="bg-white text-[#444444] px-[98px] py-[120px] rounded-[80px] mt-[66px]">
            <div className="w-[553px] overflow-hidden mx-auto text-center text-[15px] font-normal leading-[24px] tracking-[0%] mb-[60px]">
                <div ref={titleRef}>
                    当社が雇用主として人材を確保。それぞれのプランにより対応範囲が異なります。<br/>
                    安心ラボ型、伴走型はオフィススペースの提供や現場管理まで担当しますので<br/>
                    御社の海外拠点のような感覚で安心して海外人材活用が可能です。
                </div>
            </div>
            <div ref={containerRef}>
                <img src={EorDiagram} alt="" className="diagram" />
            </div>
        </div>
    );
}

export default Diagram;
