import { useRef } from "react";
import CaseStudyCard from "../CaseStudyCard";
import GoButton from "../GoButton";
import SectionTitle from "../SectionTitle";
import useCardAnimation from "../../hooks/useCardAnimation";
import useSectionTitleAnimation from "../../hooks/useSectionTitleAnimation";
import useGoButtonAnimation from "../../hooks/useGoButtonAnimation";
import {PropTypes} from "prop-types"

const CaseStudy = ({caseStudy,link=""}) => {

    const containerRef = useRef(null)
    const titleRef = useRef(null)
    const buttonRef = useRef(null)
    useSectionTitleAnimation(titleRef,{start: "top 60%"})
    useCardAnimation(containerRef,".case-study-card",{start: "top 80%"})
    useGoButtonAnimation(buttonRef,{start: "top 100%"})

    return (
        <div className="max-w-[1366px] mx-auto px-[24px] lg:px-[64px] bg-white">
            <div className="overflow-hidden">
                <div ref={titleRef}>
                    <SectionTitle jp="導入事例" eng="Case Study" />
                </div>
            </div>
            <div ref={containerRef} className="mt-[48px] lg:mt-[60px] text-[#444444] lg:flex lg:gap-[26px] space-y-6 lg:space-y-0">
                {caseStudy.map((study,index) => (
                    <CaseStudyCard
                        key={index}
                        image={study.image}
                        title={study.title}
                        text1={study.text1}
                        text2={study.text2}
                    />
                ))}
            </div>
            <div className="mt-[48px] flex justify-center lg:justify-end overflow-hidden">
                <div ref={buttonRef}>
                    <GoButton name="すべてを見る" link={link} />
                </div>
            </div>
        </div>
    );
}

CaseStudy.propTypes = {
    caseStudy: PropTypes.array.isRequired,
    link: PropTypes.string,
}
export default CaseStudy;
