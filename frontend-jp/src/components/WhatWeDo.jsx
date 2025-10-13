import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionTitle from "./SectionTitle"
import Earth from "/images/earth.gif"
import useSectionTitleAnimation from "../hooks/useSectionTitleAnimation"
import useParagraphAnimation from "../hooks/useParagraphAnimation";

gsap.registerPlugin(ScrollTrigger);

const WhatWeDo = () => {

    const textContainer = useRef(null);
    const titleRef = useRef(null);
    
    useSectionTitleAnimation(titleRef, { start: "top+=50 top" })
    useParagraphAnimation(textContainer,"p",{start: "top 20%"})

    return (
        <div className="bg-white pt-[114px] lg:pt-[376px]">
            <div style={{background: `url(${Earth})`}} className="!bg-[25%_0%] xl:!bg-[130%_0%] !bg-no-repeat">
                <div className="max-w-[1126px] mx-auto text-[#444444] px-6 xl:px-0">
                    <div className="overflow-hidden">
                        <div ref={titleRef}>
                            <SectionTitle jp="私たちだからできること" eng="WHAT WE DO" />
                        </div>
                    </div>
                    <div ref={textContainer} className="max-w-[527px] text-[14px] font-normal leading-[28px] lg:leading-[31px] tracking=[0%] mt-[36px] lg:mt-[50px]">
                        <p>
                            海外人材の採用やマネジメントには、不安やハードルがつきものです。私たちはミャンマーを中心とした東南アジアの優秀な人材を、日本企業が安心して活用できる仕組みを提供しています。
                        </p><br/>
                        <p>
                            EOR（Employer of  Record）を基盤とした独自の「安心ラボ型」「伴走型」プランで、人材の採用から定着・育成・成果創出までを一気通貫で支援。さらに受託開発やUI/UXデザインなどのDX支援も加えることで、単なる外注先ではなく貴社のチームとして共に成長するパートナーとなります。
                        </p><br/>
                        <p>
                            長年の現地経験と日本企業案件で培ったノウハウを活かし、国内採用の限界を超える新しい働き方を実現すること。<br className="hidden lg:block"/>
                            それが、私たちNext Innovationsにしかできない強みです。
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhatWeDo