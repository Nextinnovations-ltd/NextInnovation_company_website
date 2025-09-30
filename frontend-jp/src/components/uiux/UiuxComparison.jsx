import { useRef } from "react";
import useSectionTitleAnimation from "../../hooks/useSectionTitleAnimation";
import SectionTitle from "../SectionTitle";

const UiuxComparison = () => {

    const titleRef = useRef(null)
    useSectionTitleAnimation(titleRef,{start: "top 70%"})

    return (
        <div className="bg-[#1E2C44]">
            <div className="max-w-[1366px] mx-auto px-6 lg:px-[120px] pt-[146px] h-screen">
                <div className="overflow-hidden">
                    <div ref={titleRef}>
                        <SectionTitle jp="比較表" eng="comparison table" jpcolor="text-[#FFFFFF]" engcolor="text-[#FFFFFF]" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UiuxComparison;
