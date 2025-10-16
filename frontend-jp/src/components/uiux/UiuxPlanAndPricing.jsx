import { useRef } from "react";
import SectionTitle from "../SectionTitle";
import useSectionTitleAnimation from "../../hooks/useSectionTitleAnimation";
import DevPlanAndPricingCard from "../development/DevPlanAndPricingCard";
import useCardAnimation from "../../hooks/useCardAnimation";

const UiuxPlanAndPricing = () => {
    const titleRef = useRef(null)
    const containerRef = useRef(null)
    useSectionTitleAnimation(titleRef,{start: "top 70%"})
    useCardAnimation(containerRef,".dev-plan-and-pricing-card",{start: "top 80%"})

    return (
        <div className="bg-[#1E2C44]">
            <div className="bg-white rounded-b-[40px] lg:rounded-b-[80px]">
                <div className="max-w-[1366px] mx-auto px-6 xl:px-[120px] pb-[113px]">
                    <div className="overflow-hidden">
                        <div ref={titleRef}>
                            <SectionTitle jp="プランと料金" eng="Plans and Pricing" />
                        </div>
                    </div>
                    <div ref={containerRef} className="space-y-4 md:space-y-0 md:flex md:flex-wrap md:justify-center md:gap-x-[10px] md:gap-y-[50px] mt-[50px]">
                        <DevPlanAndPricingCard
                            text1="1ページ"
                            text2="LPデザイン"
                            text3="10〜20万円"
                            text4="1ページ完結のランディングページデザイン"
                            link="/contact?from=8"
                        />
                        <DevPlanAndPricingCard
                            text1="10ページ以内"
                            text2="小規模サイトデザイン"
                            text3="40〜70万円"
                            text4="WordPress＋Elementorを想定したUIデザイン"
                            link="/contact?from=8"
                        />
                        <DevPlanAndPricingCard
                            text1="10〜20画面"
                            text2="アプリUIリニューアル"
                            text3="150〜250万円"
                            text4="既存アプリのUI刷新でUX改善"
                            link="/contact?from=8"
                        />
                        <DevPlanAndPricingCard
                            text1="Web service UI/UX design+Prototype"
                            text2="WebサービスUI/UX設計＋プロトタイプ"
                            text3="100〜200万円"
                            text4="新規Webサービスの画面設計からプロトタイプまで"
                            link="/contact?from=8"
                        />
                        <DevPlanAndPricingCard
                            text1="Design system construction"
                            text2="デザインシステム構築"
                            text3="50〜80万円"
                            text4="カラー・フォント・コンポーネントを統一したデザイン基盤"
                            link="/contact?from=8"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UiuxPlanAndPricing;
