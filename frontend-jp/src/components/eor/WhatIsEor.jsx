import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useSectionTitleAnimation from "../../hooks/useSectionTitleAnimation";
import SectionTitle from "../SectionTitle";
import useLineAnimation from "../../hooks/useLineAnimation";
import useTextSplitAnimation from "../../hooks/useTextSplitAnimation";
import {PropTypes} from "prop-types"

gsap.registerPlugin(ScrollTrigger);

const WhatIsEor = ({jp,eng,text1,text2="",text3=""}) => {
    const titleRef = useRef(null)
    const lineRef = useRef(null);
    const textRef = useRef(null);

    // split helper
    const splitChars = (text="") =>
        text.split("").map((char, i) => (
            <span key={i} className={`inline-block animate-char`}>
                {char}
            </span>
        ));

    useSectionTitleAnimation(titleRef, { start: "top 80%" })
    useLineAnimation(lineRef, { start: "top 80%" })
    useTextSplitAnimation(textRef,"span.animate-char")

    return (
        <div className="text-[#444444] pt-[60px] lg:pt-[180px] px-[24px] xl:px-[121px]">
            <div className="overflow-hidden">
                <div ref={titleRef}>
                    <SectionTitle jp={jp} eng={eng} />
                </div>
            </div>
            <div className="flex justify-end mt-[36px]">
                <p ref={textRef} className="relative lg:w-[819px] text-[16px] lg:text-[17px] font-normal leading-[30px] lg:leading-[34px] tracking-[0%] pt-[20px] lg:pt-[28px]">
                    <span ref={lineRef} className="absolute top-0 left-0 h-[2px] bg-[#E84721] block"></span>
                    {splitChars(text1)}
                    <span className="font-bold">{splitChars(text2)}</span>
                    {splitChars(text3)}
                </p>
            </div>
        </div>
    );
}

WhatIsEor.propTypes = {
    jp: PropTypes.string.isRequired,
    eng: PropTypes.string.isRequired,
    text1: PropTypes.string.isRequired,
    text2: PropTypes.string,
    text3: PropTypes.string,
}

export default WhatIsEor;
