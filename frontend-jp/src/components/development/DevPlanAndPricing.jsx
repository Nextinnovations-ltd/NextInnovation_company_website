import { useRef } from "react";
import SectionTitle from "../SectionTitle";
import useSectionTitleAnimation from "../../hooks/useSectionTitleAnimation";
import DevPlanAndPricingCard from "./DevPlanAndPricingCard";
import useCardAnimation from "../../hooks/useCardAnimation";

const DevPlanAndPricing = () => {
    const titleRef = useRef(null)
    const containerRef = useRef(null)
    useSectionTitleAnimation(titleRef,{start: "top 70%"})
    useCardAnimation(containerRef,".dev-plan-and-pricing-card",{start: "top 80%"})

    return (
        <div className="bg-[#1E2C44]">
            <div className="bg-white rounded-b-[40px] lg:rounded-b-[80px]">
                <div className="max-w-[1366px] mx-auto px-6 lg:px-[120px] pb-[113px]">
                    <div className="overflow-hidden">
                        <div ref={titleRef}>
                            <SectionTitle jp="プランと料金" eng="Plans and Pricing" />
                        </div>
                    </div>
                    <div ref={containerRef} className="space-y-4 lg:space-y-0 lg:flex lg:flex-wrap lg:justify-center lg:gap-x-[11px] lg:gap-y-[50px] mt-[50px]">
                        <DevPlanAndPricingCard
                            text1="1ページ"
                            text2="LP制作"
                            text3="20〜40万円"
                            text4="1ページ完結のキャンペーン／広告用LP"
                            link="/contact?from=10"
                        />
                        <DevPlanAndPricingCard
                            text1="10ページ以内"
                            text2="小規模サイト"
                            text3="50〜80万円"
                            text4="WordPress＋Elementor構築。会社紹介・サービスサイトに最適"
                            link="/contact?from=10"
                        />
                        <DevPlanAndPricingCard
                            text1="Shopify / WooCommerce"
                            text2="ECサイト"
                            text3="80〜120万円"
                            text4="決済・在庫機能付きECサイト。越境販売も可能"
                            link="/contact?from=10"
                        />
                        <DevPlanAndPricingCard
                            text1="Web system"
                            text2="業務Webシステム"
                            text3="150〜300万円"
                            text4="予約・在庫・マッチングなど業務効率化システム"
                            link="/contact?from=10"
                        />
                        <DevPlanAndPricingCard
                            text1="Mobile app development"
                            text2="モバイルアプリ開発"
                            text3="300〜600万円"
                            text4="Flutter / React NativeでiOS・Android対応"
                            link="/contact?from=10"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DevPlanAndPricing;
