import Deliverable from "../../components/dxsupport/Deliverable";
import DxChallenge from "../../components/dxsupport/DxChallenge";
import DxHero from "../../components/dxsupport/DxHero";
import DxServiceSolve from "../../components/dxsupport/DxServiceSolve";
import DxStrength from "../../components/dxsupport/DxStrength";
import DxTarget from "../../components/dxsupport/DxTarget";
import ServiceOverview from "../../components/dxsupport/ServiceOverview";
import Technology from "../../components/dxsupport/Technology";
import ComparisonTable from "../../components/eor/ComparisonTable";
import WhatIsEor from "../../components/eor/WhatIsEor";
import CaseStudy from "../../components/eor/CaseStudy";
import CsImg1 from "/images/dx-cs1.png"
import CsImg2 from "/images/dx-cs2.png"
import CsImg3 from "/images/dx-cs3.png"
import FAQ from "../../components/FAQ";
import Gif from "../../components/Gif";
import OtherService from "../../components/eor/OtherService";
import OsImg1 from "/images/other-service-eor.png"
import OsImg2 from "/images/other-service-dev.png"
import OsImg3 from "/images/other-service-uiux.png"
import useVisiter from "../../hooks/useVisiter";

const DxSupport = () => {

    const caseStudy = [
        {
            image: CsImg1,
            companyName: "株式会社Release",
            title: "小規模web開発を短納期で構築実現",
            text1: "スタートアップ",
            text2: "DX支援、UI/UXデザイン、受託開発",
        },
        {
            image: CsImg2,
            companyName: "株式会社Release",
            title: "SaaSダッシュボードUI刷新で利用率向上",
            text1: "スタートアップ",
            text2: "DX支援、UI/UXデザイン",
        },
        {
            image: CsImg3,
            companyName: "株式会社山鶴",
            title: "伝統的なECサイトをSHOPIFYでリニュアル",
            text1: "小売",
            text2: "DX支援、UI/UXデザイン、受託開発",
        },
    ];

    const faqData = [
        {
            question: "成果物だけ依頼できますか？ ",
            subTitles: ["はい。単発のプロジェクトでも対応可能です。"],
            answers: [],
        },
        {
            question: "納品後の保守・運用はお願いできますか？ ",
            subTitles: ["ご希望に応じて、EOR契約またはスポット保守で対応します。"],
            answers: [],
        },
        {
            question: "日本語でのやり取りは可能ですか？",
            subTitles: ["可能です。代表を含め、日本語でスムーズに進行できます。"],
            answers: [],
        },
        {
            question: "掲載されていない技術でも依頼できますか？ ",
            subTitles: [
                "はい。EORを基盤としているため、必要なスキルを持つ人材を採用・アサイン可能です。",
            ],
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
            title: "UI/UX Design",
            description: "Figmaを中心に、日本水準の高品質デザインを低コストで提供。",
            image: OsImg3,
            link: "/uiux"
        },
    ];

    useVisiter('system');

    return (
        <>
            <div className="relative">
                <div className="fixed inset-0 -z-30">
                    <img src="/images/dx-hero.png" alt="hero" className="w-full h-full object-cover hidden lg:block" />
                    <img src="/images/dx-hero-mobile.png" alt="hero" className="w-full h-full object-cover lg:hidden" />
                </div>

                <DxHero />

                <div className="h-[90vh] lg:h-screen"></div>

                <div className="bg-[#F8F8F8] rounded-t-[40px] lg:rounded-t-[80px]">
                    <div className="max-w-[1366px] mx-auto text-[#444444]">
                        <WhatIsEor
                            jp="DX支援とは？"
                            eng="what is dx support?"
                            text1="DX（デジタルトランスフォーメーション）支援とは、IT導入や開発にとどまらず、企業の業務やビジネスモデルをデジタルで変革し、持続的成長を実現する取り組みです。戦略立案からUI/UXデザイン、開発・運用までを伴走し、「効率化」「新規事業」「顧客体験向上」を支援します。さらに、オリジナル性の高いWeb集客や、属人化したノウハウのプロダクト化を通じて、企業独自の強みを価値へと転換し、競争力を高めます。"
                        />
                        <DxTarget/>
                        <DxChallenge/>
                    </div>
                </div>
            </div>
            <DxServiceSolve/>
            <DxStrength/>
            <ComparisonTable/>
            <ServiceOverview/>
            <Technology/>
            <Deliverable/>
            <div className="bg-white">
                <CaseStudy caseStudy={caseStudy} service="DX支援" />
            </div>
            <FAQ faqData={faqData} />
            <div className="bg-white">
                <Gif/>
            </div>
            <OtherService datas={otherServices} />
        </>
    );
}

export default DxSupport;
