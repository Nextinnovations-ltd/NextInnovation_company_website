import { useRef } from "react";
import SectionTitle from "../SectionTitle";
import OtherServiceCard from "./OtherServiceCard";
import useSectionTitleAnimation from "../../hooks/useSectionTitleAnimation";
import useCardAnimation from "../../hooks/useCardAnimation";
import {PropTypes} from "prop-types"

const OtherService = ({datas}) => {
    
    const titleRef = useRef(null)
    const containerRef = useRef(null)
    useSectionTitleAnimation(titleRef,{start: "top 70%"})
    useCardAnimation(containerRef,".other-service-card",{start: "top 80%"})

    return (
        <div className="relative bg-white rounded-b-[40px] lg:rounded-b-[80px]">
            <div className="max-w-[1366px] mx-auto px-[24px] xl:px-[120px] pt-[120px] lg:pt-[140px] pb-[120px] lg:pb-[180px]">
                <div className="overflow-hidden">
                    <div ref={titleRef}>
                        <SectionTitle jp="他のサービス" eng="other services" />
                    </div>
                </div>
                <div ref={containerRef} className="mt-[50px] lg:mt-[60px] grid grid-cols-1 md:grid-cols-3 gap-[28px] md:gap-4 lg:gap-[25px]">
                    {datas.map((data,index) => (
                        <OtherServiceCard
                            key={index}
                            title={data.title}
                            description={data.description}
                            image={data.image}
                            link={data.link}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

OtherService.propTypes = {
    datas: PropTypes.array.isRequired,
}

export default OtherService;
