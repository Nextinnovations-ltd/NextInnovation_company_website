import Challenge1 from "/images/uiux-challenge1.png"
import Challenge2 from "/images/uiux-challenge2.png"
import Challenge3 from "/images/uiux-challenge3.png"
import ChallengeCard from "../eor/ChallengeCard";
import SectionTitle from "../../components/SectionTitle";
import { useRef } from "react";
import useSectionTitleAnimation from "../../hooks/useSectionTitleAnimation";
import useCardAnimation from "../../hooks/useCardAnimation";

const UiuxChallenges = () => {
    const titleRef = useRef(null)
    const textRef = useRef(null)
    const containerRef = useRef(null)
    useSectionTitleAnimation(titleRef,{start: "top 70%"})
    useSectionTitleAnimation(textRef,{start: "top 60%"})
    useCardAnimation(containerRef,".challenge-card",{start: "top 80%"})

    return (
        <div className="text-[#444444] pb-[80px] lg:pb-[120px] px-[24px] lg:px-[64px]">
            <div className="flex flex-col lg:flex-row lg:justify-between">
                <div className="h-[70px] lg:h-[100px] overflow-hidden">
                    <div ref={titleRef}>
                        <SectionTitle jp="課題" eng="Challenges" />
                    </div>
                </div>
                <div className="lg:w-[550px] overflow-hidden h-[70px] text-[14px] lg:text-[20px] font-medium leading-[24px] lg:leading-[38px] tracking-[0%] mt-[28px] lg:mt-[54px]">
                    <div ref={textRef}>UI/UXデザインを外部に依頼する際、多くの企業は「コスト」「品質」「継続性」の壁に直面します。</div>
                </div>
            </div>
            <div ref={containerRef} className="lg:flex lg:justify-between space-y-[21px] lg:space-y-0 mt-[50px] lg:mt-[60px]">
                <ChallengeCard
                    image={Challenge1}
                    title="外部委託する際の課題"
                    description="UI/UXデザインを外部委託する際、多くの企業は「コスト」「品質」「継続性」に課題を抱えています。"
                />
                <ChallengeCard
                    image={Challenge2}
                    title="国内の課題"
                    description="国内企業は高品質ながら高額、フリーランスは柔軟だが属人化リスクがあります。"
                />
                <ChallengeCard
                    image={Challenge3}
                    title="海外に委託する際の課題"
                    description="海外格安委託では日本市場特有の感性やユーザー理解が不足し成果に結びつかないケースも多く見られます。"
                />
            </div>
        </div>
    );
}

export default UiuxChallenges;
