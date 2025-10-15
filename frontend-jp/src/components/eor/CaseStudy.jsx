import { useRef } from "react";
import CaseStudyCard from "../CaseStudyCard";
import GoButton from "../GoButton";
import SectionTitle from "../SectionTitle";
import useCardAnimation from "../../hooks/useCardAnimation";
import useSectionTitleAnimation from "../../hooks/useSectionTitleAnimation";
import useGoButtonAnimation from "../../hooks/useGoButtonAnimation";
import {PropTypes} from "prop-types"

const CaseStudy = ({caseStudy,service=""}) => {

    const containerRef = useRef(null)
    const titleRef = useRef(null)
    const buttonRef = useRef(null)
    useSectionTitleAnimation(titleRef,{start: "top 60%"})
    useCardAnimation(containerRef,".case-study-card",{start: "top 80%"})
    useGoButtonAnimation(buttonRef,{start: "top 100%"})

    return (
        <div className="max-w-[1366px] mx-auto px-[24px] xl:px-[120px] bg-white">
            <div className="overflow-hidden">
                <div ref={titleRef}>
                    <SectionTitle jp="導入事例" eng="Case Study" />
                </div>
            </div>
            <div ref={containerRef} className="mt-[48px] lg:mt-[60px] text-[#444444] grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-[14px]">
                {caseStudy.map((study,index) => (
                    <CaseStudyCard
                        key={index}
                        image={study.image}
                        companyName={study.companyName}
                        title={study.title}
                        text1={study.text1}
                        text2={study.text2}
                    />
                ))}
            </div>
            <div className="mt-[40px] flex justify-center md:justify-end overflow-hidden">
                <div ref={buttonRef}>
                    <GoButton name="すべてを見る" link={`/case-study?category=${service}`} />
                </div>
            </div>
        </div>
    );
}

CaseStudy.propTypes = {
    caseStudy: PropTypes.array.isRequired,
    service: PropTypes.string,
}
export default CaseStudy;
