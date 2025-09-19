import { useRef } from "react";
import useSectionTitleAnimation from "../../hooks/useSectionTitleAnimation";
import SectionTitle from "../SectionTitle";
import Img1 from "/images/service-overview1.png"
import Img2 from "/images/service-overview2.png"
import ServiceOverviewCard from "./ServiceOverviewCard";
import useCardAnimation from "../../hooks/useCardAnimation";

const ServiceOverview = () => {
    const titleRef = useRef(null)
    const containerRef = useRef(null)
    useSectionTitleAnimation(titleRef,{start: "top 80%"})
    useCardAnimation(containerRef,".service-overview-card",{start: "top 80%"})
    return (
        <div className="bg-[#1E2C44]">
            <div className="service-overview bg-white rounded-b-[40px] lg:rounded-b-[80px]">
                <div className="max-w-[1366px] mx-auto px-6 lg:px-[64px] pb-[80px] lg:pb-[140px]">
                    <div className="overflow-hidden">
                        <div ref={titleRef}>
                            <SectionTitle jp="サービス概要" eng="service overview" />
                        </div>
                    </div>
                    <div ref={containerRef} className="mt-[50px] lg:mt-[60px] lg:flex lg:justify-between space-y-7 lg:space-y-0">
                        <ServiceOverviewCard
                            title="受託開発"
                            description="Webシステム・アプリ開発に柔軟対応。React / Flutter 実績あり。"
                            text1="￥20,000～"
                            text2="／人日"
                            image={Img1}
                        />
                        <ServiceOverviewCard
                            title="UI/UXデザイン"
                            description="Figmaを中心に、日本水準の高品質デザインを低コストで提供。 / Flutter 実績あり。"
                            text1="￥20,000～"
                            text2="／人日"
                            image={Img2}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServiceOverview;
