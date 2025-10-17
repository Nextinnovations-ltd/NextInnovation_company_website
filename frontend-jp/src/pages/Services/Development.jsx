import DevHero from "../../components/development/DevHero"
import DevTarget from "../../components/development/DevTarget"
import DevChallenges from "../../components/development/DevChallenges"
import WhatIsEor from "../../components/eor/WhatIsEor";
import DevServiceSolve from "../../components/development/DevServiceSolve";
import DevStrength from "../../components/development/DevStrength";
import Technology from "../../components/dxsupport/Technology";
import DevPlanAndPricing from "../../components/development/DevPlanAndPricing";
import DevComparison from "../../components/development/DevComparison";
import CaseStudy from "../../components/eor/CaseStudy";
import FAQ from "../../components/FAQ";
import CsImg1 from "/images/dx-cs1.png"
import CsImg2 from "/images/dx-cs3.png"
import CsImg3 from "/images/dev-cs1.png"
import Gif from "../../components/Gif";
import OtherService from "../../components/eor/OtherService";
import OsImg1 from "/images/other-service-eor.png"
import OsImg2 from "/images/other-service-dx.png"
import OsImg3 from "/images/other-service-uiux.png"
import DevDeliverable from "../../components/development/DevDeliverable";
import useVisiter from "../../hooks/useVisiter"

const Development = () => {

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
            companyName: "株式会社山鶴",
            title: "伝統的なECサイトをSHOPIFYでリニュアル",
            text1: "小売",
            text2: "DX支援、UI/UXデザイン、受託開発",
        },
        {
            image: CsImg3,
            companyName: "株式会社Release Food",
            title: "ホームページ制作",
            text1: "スタートアップ",
            text2: "UI/UXデザイン、受託開発",
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
            title: "EOR",
            description: "グローバル人材の雇用・管理をスムーズに支援。法務・労務リスクを軽減し、安心して海外人材を活用可能。",
            image: OsImg1,
            link: "/eor"
        },
        {
            title: "DX Support",
            description: "オリジナル性の高いWeb集客を企業独自の強みを価値へと転換し、競争力を高めます。",
            image: OsImg2,
            link: "/dx-support"
        },
        {
            title: "UI/UX Design",
            description: "Figmaを中心に、日本水準の高品質デザインを低コストで提供。",
            image: OsImg3,
            link: "/uiux"
        },
    ];

    useVisiter('website');
    
    return (
        <>
           <div className="relative">
                <div className="fixed inset-0 -z-30">
                    <img src="/images/development-hero.png" alt="hero" className="w-full h-full object-cover hidden lg:block" />
                    <img src="/images/development-hero-mobile.png" alt="hero" className="w-full h-full object-cover lg:hidden" />
                </div>

                <DevHero/>

                <div className="h-[90vh] lg:h-screen"></div>

                <div className="bg-[#F8F8F8] rounded-t-[40px] lg:rounded-t-[80px]">
                    <div className="max-w-[1366px] mx-auto text-[#444444]">
                        <WhatIsEor
                            jp="受託開発とは ?"
                            eng="what is Custom Development?"
                            text1="成果物単位で依頼可能な開発サービスです。Webシステム、業務アプリ、モバイルアプリ（React Native / Flutter）まで幅広く対応。小規模案件から大規模プロジェクトまで柔軟に進められます。"
                        />
                        <DevTarget/>
                        <DevChallenges />
                    </div>
                </div>
            </div>
            <DevServiceSolve/>
            <DevStrength/>
            <Technology/>
            <DevDeliverable/>
            <DevPlanAndPricing/>
            <DevComparison/>
            <div className="bg-[#1E2C44]">
                <div className="pt-[80px] lg:pt-[142px] rounded-t-[40px] lg:rounded-t-[80px] bg-white">
                    <CaseStudy caseStudy={caseStudy} service="受託開発" />
                </div>
            </div>
            <FAQ faqData={faqData} />
            <Gif/>
            <OtherService datas={otherServices} />
        </>
    );
}

export default Development;
