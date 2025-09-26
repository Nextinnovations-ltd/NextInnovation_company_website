import WhatIsEor from "../../components/eor/WhatIsEor";
import Diagram from "../../components/eor/Diagram";
import EorCardSection from "../../components/eor/EorCardSection";
import EorChallenges from "../../components/eor/EorChallenges";
import EorHero from "../../components/eor/EorHero";
import EorServiceSolve from "../../components/eor/EorServiceSolve";
import Strength from "../../components/eor/Strength";
import ComparisonTable from "../../components/eor/ComparisonTable";
import PlanAndPricing from "../../components/eor/PlanAndPricing";
import UseCase from "../../components/eor/UseCase";
import Onboarding from "../../components/eor/Onboarding";
import FAQ from "../../components/FAQ";
import Platform from "../../components/eor/Platform";
import Gif from "../../components/Gif";
import OtherService from "../../components/eor/OtherService";
import CaseStudy from "../../components/eor/CaseStudy";
import CsImg1 from "/images/eor-cs1.png"
import CsImg2 from "/images/eor-cs2.png"
import CsImg3 from "/images/eor-cs3.png"
import OsImg1 from "/images/other-service-dx.png"
import OsImg2 from "/images/other-service-dev.png"
import OsImg3 from "/images/other-service-uiux.png"

const Eor = () => {

    const caseStudy = [
        {
            image: CsImg1,
            title: "継続的なサイト更新",
            text1: "日本のEC企業",
            text2: "ラボ型EOR"
        },
        {
            image: CsImg2,
            title: "MVPを短期開発し、資金調達成功",
            text1: "スタートアップ",
            text2: "安心ラボ型と伴走型"
        },
        {
            image: CsImg3,
            title: "自社サイトの自社プロジェクト立ち上げ",
            text1: "AIコンサルタント会社",
            text2: "伴走型"
        },
    ];

    const faqData = [
        {
            question: "法人設立なしで本当に雇用できますか？",
            subTitles: [],
            answers: [
                "はい、可能です。当社が現地での雇用主（EOR）となり、契約・給与支払・法務対応を代行します。",
            ],
        },
        {
            question: "最低契約期間はどれくらいですか？",
            subTitles: ["プランにより異なります。"],
            answers: [
                "EORのみ：最低3ヶ月〜",
                "安心ラボ型：最低12ヶ月〜",
                "プロジェクト伴走型：最低6ヶ月〜"
            ],
        },
        {
            question: "解約や更新のルールはどうなっていますか？",
            subTitles: ["契約開始から3ヶ月以内は試用期間として柔軟に解約可能です。それ以降は以下のルールに従います。"],
            answers: [
                "EORのみ：原則3ヶ月ごとに更新。解約には1ヶ月前通知が必要。",
                "安心ラボ型：原則1年ごとに更新。解約には1ヶ月前通知が必要。",
                "プロジェクト伴走型：原則3ヶ月ごとに更新。解約には1ヶ月前通知が必要。",
            ],
            conclusion: "通知が無い場合は自動更新扱いとなります。また、退職金が発生する場合は当社が代行して清算しますが、実費は貴社負担となります。"
        },
        {
            question: "支払条件はどうなっていますか？",
            subTitles: [
                "契約開始前にお支払いをお願いしています。",
                "基本は3ヶ月ごとの前払いで、請求書は1ヶ月前に発行します。",
                "日本円での銀行振込に加えて、カード決済も可能です。",
                "年払いの場合は5%割引もご用意しています。",
            ],
            answers: [],
        },
        {
            question: "採用活動はどのように行われますか？",
            subTitles: [
                "当社がヒアリング内容をもとに候補者を募集・面接し、推薦します。",
                "最終選考は貴社にて実施していただけます。",
                "なお、EORのみの場合は採用初期費用が別途必要です。",
            ],
            answers: [],
        },
        {
            question: "万が一、人材が合わない場合や定着について不安があります。",
            subTitles: [
                "試用期間3ヶ月以内であればスムーズに交代可能です。",
                "それ以降も、自己都合退職やパフォーマンス不一致があればリプレイスをサポートします。",
                "また、当社では福利厚生や現場サポートにより人材の定着率を高めており、長期的に安心してご利用いただけます。",
            ],
            answers: [],
        },
        {
            question: "PCや業務環境はどう準備しますか？",
            subTitles: [
                "基本的にユーザー企業様のご負担ですが、当社で調達・配布代行も可能です（実費精算）。",
                "オフィス、ネット回線、停電対策（発電機）などの労働環境は当社が提供します。",
            ],
            answers: [],
        },
        {
            question: "対応できるスキルセットはどの程度ありますか？",
            subTitles: [
                "Web開発、モバイル開発、UI/UXデザインを中心に幅広く対応可能です。",
                "EOR基盤があるため、必要に応じてその他のスキル人材の採用も柔軟に行えます。",
            ],
            answers: [],
        },
        {
            question: "日本語でのやり取りは可能ですか？",
            subTitles: [
                "基本はユーザー企業様と人材が直接コミュニケーションを行いますが、必要に応じて当社スタッフが日本語・ミャンマー語のサポートを行うことも可能です。",
                "言語の壁による進行トラブルを最小限に抑えられる体制を整えています。",
            ],
            answers: [],
        },
    ];

    const otherServices = [
        {
            title: "DX Support",
            description: "オリジナル性の高いWeb集客を企業独自の強みを価値へと転換し、競争力を高めます。",
            image: OsImg1,
            link: "/dx-support"
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
    
    return (
        <>
            <div className="relative">
                <div className="fixed inset-0 -z-30">
                    <img src="/images/eor-hero.png" alt="hero" className="w-full h-full object-cover hidden lg:block" />
                    <img src="/images/eor-hero-mobile.png" alt="hero" className="w-full h-full object-cover lg:hidden" />
                </div>

                <EorHero />

                <div className="h-[90vh] lg:h-screen"></div>

                <div className="bg-[#F8F8F8] rounded-t-[40px] lg:rounded-t-[80px]">
                    <div className="max-w-[1366px] mx-auto text-[#444444]">
                        <WhatIsEor
                            jp="EORとは？"
                            eng="what is eor?"
                            text1="Employer of Record（EOR）は、現地に法人を設立せずに海外人材を雇用できる仕組みです。採用・雇用契約・給与支払・法務対応を当社が代行し、日本企業は人材を自社スタッフのように活用できます。ただし、EOR単体では 勤怠管理や人材定着、マネジメント部分が不十分 になるケースが多々あります。そこで当社は「安心ラボ型」「プロジェクト伴走型」を用意し、EORの利点を最大化しています。"
                            text2="ラボ型でのEORが海外人材活用の最適解"
                            text3="だという考えに当社は辿り着きました。"
                        />
                        <Diagram />
                        <EorCardSection />
                        <EorChallenges />
                    </div>
                </div>
            </div>
            <EorServiceSolve/>
            <Strength/>
            <ComparisonTable/>
            <PlanAndPricing/>
            <UseCase/>
            <div className="bg-[#1E2C44]">
                <div className="pt-[80px] lg:pt-[142px] rounded-t-[40px] lg:rounded-t-[80px] bg-white">
                    <CaseStudy caseStudy={caseStudy} />
                </div>
            </div>
            <Onboarding/>
            <div className="bg-[#1E2C44]">
                <FAQ faqData={faqData} />
            </div>
            <div className="-mb-[70px] relative !z-[1]">
                <Platform/>
            </div>
            <Gif/>
            <OtherService datas={otherServices} />
        </>
    );
}

export default Eor;
