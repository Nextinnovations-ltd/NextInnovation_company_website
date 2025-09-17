import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useSectionTitleAnimation from "../../hooks/useSectionTitleAnimation";
import SectionTitle from "../SectionTitle";
import useLineAnimation from "../../hooks/useLineAnimation";
import useTextSplitAnimation from "../../hooks/useTextSplitAnimation";

gsap.registerPlugin(ScrollTrigger);

const WhatIsEor = () => {
    const titleRef = useRef(null)
    const lineRef = useRef(null);
    const textRef = useRef(null);

    // split helper
    const splitChars = (text) =>
        text.split("").map((char, i) => (
            <span key={i} className={`inline-block animate-char`}>
                {char}
            </span>
        ));

    // text parts
    const beforeBold = "Employer of Record（EOR）は、現地に法人を設立せずに海外人材を雇用できる仕組みです。採用・雇用契約・給与支払・法務対応を当社が代行し、日本企業は人材を自社スタッフのように活用できます。ただし、EOR単体では 勤怠管理や人材定着、マネジメント部分が不十分 になるケースが多々あります。そこで当社は「安心ラボ型」「プロジェクト伴走型」を用意し、EORの利点を最大化しています。";
    const boldText = "ラボ型でのEORが海外人材活用の最適解";
    const afterBold = "だという考えに当社は辿り着きました。";

    useSectionTitleAnimation(titleRef, { start: "top 80%" })
    useLineAnimation(lineRef, { start: "top 80%" })
    useTextSplitAnimation(textRef,"span.animate-char")

    return (
        <div className="text-[#444444] pt-[60px] lg:pt-[180px] px-[24px] lg:px-[64px]">
            <div className="overflow-hidden">
                <div ref={titleRef}>
                    <SectionTitle jp="EORとは？" eng="what is eor?" />
                </div>
            </div>
            <div className="flex justify-end mt-[36px]">
                <p ref={textRef} className="relative lg:w-[819px] text-[16px] lg:text-[24px] font-normal leading-[30px] lg:leading-[42px] tracking-[0%] pt-[20px] lg:pt-[28px]">
                    <span ref={lineRef} className="absolute top-0 left-0 h-[2px] bg-[#E84721] block"></span>
                    {splitChars(beforeBold)}
                    <span className="font-bold">{splitChars(boldText)}</span>
                    {splitChars(afterBold)}
                </p>
            </div>
        </div>
    );
}

export default WhatIsEor;
