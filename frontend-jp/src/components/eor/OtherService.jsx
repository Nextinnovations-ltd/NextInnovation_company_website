import { useRef } from "react";
import SectionTitle from "../SectionTitle";
import OtherServiceCard from "./OtherServiceCard";
import Img1 from "/images/other-service1.png"
import Img2 from "/images/other-service2.png"
import Img3 from "/images/other-service3.png"
import useSectionTitleAnimation from "../../hooks/useSectionTitleAnimation";
import useCardAnimation from "../../hooks/useCardAnimation";

const OtherService = () => {
    const titleRef = useRef(null)
    const containerRef = useRef(null)
    useSectionTitleAnimation(titleRef,{start: "top 70%"})
    useCardAnimation(containerRef,".other-service-card",{start: "top 80%"})
    return (
        <div className="relative bg-white rounded-b-[40px] lg:rounded-b-[80px]">
            <div className="max-w-[1366px] mx-auto px-[24px] lg:px-[64px] pt-[120px] lg:pt-[140px] pb-[120px] lg:pb-[180px]">
                <div className="overflow-hidden">
                    <div ref={titleRef}>
                        <SectionTitle jp="他のサービス" eng="other services" />
                    </div>
                </div>
                <div ref={containerRef} className="mt-[50px] lg:mt-[60px] lg:flex lg:gap-[25px] space-y-[28px] lg:space-y-0">
                    <OtherServiceCard
                        title="DX Support"
                        description="グローバル人材の雇用・管理をスムーズに支援。法務・労務リスクを軽減し、安心して海外人材を活用可能。"
                        image={Img1}
                    />
                    <OtherServiceCard
                        title="Development"
                        description="Webシステム・アプリ開発に柔軟対応。React / Flutter 実績あり。"
                        image={Img2}
                    />
                    <OtherServiceCard
                        title="UI/UX Design"
                        description="Figmaを中心に、日本水準の高品質デザインを低コストで提供。"
                        image={Img3}
                    />
                </div>
            </div>
        </div>
    );
}

export default OtherService;
