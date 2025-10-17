import UiuxHero from "../../components/uiux/UiuxHero";
import WhatIsEor from "../../components/eor/WhatIsEor";
import UiuxTarget from "../../components/uiux/UiuxTarget";
import UiuxChallenges from "../../components/uiux/UiuxChallenges";
import UiuxServiceSolve from "../../components/uiux/UiuxServiceSolve";
import UiuxStrength from "../../components/uiux/UiuxStrength";
import UiuxDeliverable from "../../components/uiux/UiuxDeliverable";
import UiuxPlanAndPricing from "../../components/uiux/UiuxPlanAndPricing";
import UiuxComparison from "../../components/uiux/UiuxComparison";
import CaseStudy from "../../components/eor/CaseStudy";
import FAQ from "../../components/FAQ";
import Gif from "../../components/Gif";
import OtherService from "../../components/eor/OtherService";
import CsImg1 from "/images/uiux-cs2.png"
import CsImg2 from "/images/dev-cs1.png"
import CsImg3 from "/images/uiux-cs1.png"
import OsImg1 from "/images/other-service-eor.png"
import OsImg2 from "/images/other-service-dev.png"
import OsImg3 from "/images/other-service-dx.png"
import Technology from "../../components/dxsupport/Technology";
import useVisiter from "../../hooks/useVisiter";

const UiUx = () => {

    const caseStudy = [
        {
            image: CsImg1,
            companyName: "株式会社Reme",
            title: "ホームページ制作",
            text1: "スタートアップ",
            text2: "UI/UXデザイン、受託開発",
        },
        {
            image: CsImg2,
            companyName: "株式会社Release Food",
            title: "ホームページ制作",
            text1: "スタートアップ",
            text2: "UI/UXデザイン、受託開発",
        },
        {
            image: CsImg3,
            companyName: "株式会社Release",
            title: "ホームページ制作",
            text1: "小売",
            text2: "UI/UXデザイン、受託開発",
        },
    ];

    const faqData = [
        {
            question: "デザインだけ依頼可能ですか？",
            subTitles: [" はい。単発のLPやページ単位のデザインも対応可能です。"],
            answers: [],
        },
        {
            question: "開発まで含めて依頼できますか？",
            subTitles: ["可能です。受託開発チームと連携し、UI/UXから一貫対応します。"],
            answers: [],
        },
        {
            question: "修正や追加は柔軟に対応してもらえますか？",
            subTitles: ["はい。仕様変更やブラッシュアップにも対応可能です。"],
            answers: [],
        },
        {
            question: "他ツール（Sketch、Adobe XDなど）の指定もできますか？",
            subTitles: ["はい。EOR基盤により必要人材を確保し対応可能です。"],
            answers: [],
        },
    ];

    const otherServices = [
        {
            title: "EOR",
            description: "グローバル人材の雇用・管理をスムーズに支援。法務・労務リスクを軽減し、安心して海外人材を活用可能。",
            image: OsImg1,
            link: "/eor"
        },
        {
            title: "Custom Development",
            description: "Webシステム・アプリ開発に柔軟対応。React / Flutter 実績あり。",
            image: OsImg2,
            link: "/development"
        },
        {
            title: "DX Support",
            description: "オリジナル性の高いWeb集客を企業独自の強みを価値へと転換し、競争力を高めます。",
            image: OsImg3,
            link: "/dx-support"
        },
    ];

    useVisiter('uiux');

    return (
        <>
            <div className="relative">
                <div className="fixed inset-0 -z-30">
                    <img src="/images/uiux-hero.png" alt="hero" className="w-full h-full object-cover hidden lg:block" />
                    <img src="/images/uiux-hero-mobile.png" alt="hero" className="w-full h-full object-cover lg:hidden" />
                </div>

                <UiuxHero/>

                <div className="h-[90vh] lg:h-screen"></div>

                <div className="bg-[#F8F8F8] rounded-t-[40px] lg:rounded-t-[80px]">
                    <div className="max-w-[1366px] mx-auto text-[#444444]">
                        <WhatIsEor
                            jp="UI/UXデザインとは ?"
                            eng="What is UI/UX Design?"
                            text1="UI/UXデザインは、単なる見た目ではなく「ユーザー体験そのもの」を設計する工程です。ユーザーが迷わず直感的に操作でき、ビジネスゴールに結びつくデザインを作ることで、成果に直結するプロダクトを実現します。"
                        />
                        <UiuxTarget/>
                        <UiuxChallenges />
                    </div>
                </div>
            </div>
            <UiuxServiceSolve/>
            <UiuxStrength/>
            <Technology/>
            <UiuxDeliverable/>
            <UiuxPlanAndPricing/>
            <UiuxComparison/>
            <div className="bg-[#1E2C44]">
                <div className="pt-[80px] lg:pt-[142px] rounded-t-[40px] lg:rounded-t-[80px] bg-white">
                    <CaseStudy caseStudy={caseStudy} service="UI/UXデザイン" />
                </div>
            </div>
            <FAQ faqData={faqData} />
            <Gif/>
            <OtherService datas={otherServices} />
        </>
    );
}

export default UiUx;
