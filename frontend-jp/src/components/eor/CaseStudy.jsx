import { useRef } from "react";
import CaseStudyCard from "../CaseStudyCard";
import GoButton from "../GoButton";
import SectionTitle from "../SectionTitle";
import CaseStudyImg from "/images/casestudy.png"
import useCardAnimation from "../../hooks/useCardAnimation";
import useSectionTitleAnimation from "../../hooks/useSectionTitleAnimation";
import useGoButtonAnimation from "../../hooks/useGoButtonAnimation";

const CaseStudy = () => {

    const containerRef = useRef(null)
    const titleRef = useRef(null)
    const buttonRef = useRef(null)
    useSectionTitleAnimation(titleRef,{start: "top 60%"})
    useCardAnimation(containerRef,".case-study-card",{start: "top 80%"})
    useGoButtonAnimation(buttonRef,{start: "top 100%"})
    return (
        <div className="bg-[#1E2C44]">
            <div className="bg-white rounded-t-[40px] lg:rounded-t-[80px]">
                <div className="max-w-[1366px] mx-auto px-[24px] lg:px-[64px] pt-[80px] lg:pt-[142px]">
                    <div className="overflow-hidden">
                        <div ref={titleRef}>
                            <SectionTitle jp="導入事例" eng="Case Study" />
                        </div>
                    </div>
                    <div ref={containerRef} className="mt-[48px] lg:mt-[60px] text-[#444444] lg:flex lg:gap-[26px] space-y-6 lg:space-y-0">
                        <CaseStudyCard
                            image={CaseStudyImg}
                            title="株式会社Release"
                            text1="アプリの操作性が複雑で離脱率が高い"
                            text2="UI/UX改善によりユーザー定着率が2倍、NPSスコア+35％向上"
                        />
                        <CaseStudyCard
                            image={CaseStudyImg}
                            title="株式会社Release"
                            text1="アプリの操作性が複雑で離脱率が高い"
                            text2="UI/UX改善によりユーザー定着率が2倍、NPSスコア+35％向上"
                        />
                        <CaseStudyCard
                            image={CaseStudyImg}
                            title="株式会社Release"
                            text1="アプリの操作性が複雑で離脱率が高い"
                            text2="UI/UX改善によりユーザー定着率が2倍、NPSスコア+35％向上"
                        />
                    </div>
                    <div className="mt-[48px] flex justify-center lg:justify-end overflow-hidden">
                        <div ref={buttonRef}>
                            <GoButton name="すべてを見る" link="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CaseStudy;
