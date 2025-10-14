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
        <div className="px-6 xl:px-[121px]">
            <div className="bg-white text-[#444444] py-[60px] lg:py-[109px] rounded-[40px] lg:rounded-[80px] mt-[66px] lg:mt-[105px]">
                <div className="lg:w-[553px] overflow-hidden mx-auto text-center text-[12px] lg:text-[14px] font-normal leading-[22px] lg:leading-[31px] tracking-[0%] mb-[60px] lg:mb-[0px]">
                    <div ref={titleRef}>
                        当社が雇用主として人材を確保。それぞれの<br className="lg:hidden"/>プランにより対応範囲が異なります。<br/>
                        安心ラボ型、伴走型はオフィススペースの提供や<br className="lg:hidden"/>現場管理まで担当しますので<br/>
                        御社の海外拠点のような感覚で安心して海外人材<br className="lg:hidden"/>活用が可能です。
                    </div>
                </div>
                <div ref={containerRef} className="px-[10px] lg:px-[89px]">
                    <img src={EorDiagram} alt="" className="diagram w-full" />
                </div>
            </div>
        </div>
    );
}

export default Diagram;
