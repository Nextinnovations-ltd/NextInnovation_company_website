import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CaseStudyCard from "./CaseStudyCard"
import SectionTitle from "./SectionTitle"
import CaseStudyImg from "/images/casestudy.png"
import useSectionTitleAnimation from "../hooks/useSectionTitleAnimation";
import useCardAnimation from "../hooks/useCardAnimation";

gsap.registerPlugin(ScrollTrigger);

const CaseStudy = () => {

    const titleRef = useRef(null);
    const containerRef = useRef(null);
    useSectionTitleAnimation(titleRef, {start: "top+=300 top"})
    useCardAnimation(containerRef, '.case-study-card', {start: "top+=400 top",})

    return (
        <div className="bg-white px-6 lg:px-0">
            <div className="max-w-[1240px] mx-auto text-[#444444]">
                <div className="overflow-hidden">
                    <div ref={titleRef}>
                        <SectionTitle jp="導入事例" eng="Case Study" />
                    </div>
                </div>
                <div ref={containerRef} className="flex flex-col gap-[50px] lg:flex-row lg:gap-[24px] mt-[50px]">
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
            </div>
        </div>
    )
}

export default CaseStudy