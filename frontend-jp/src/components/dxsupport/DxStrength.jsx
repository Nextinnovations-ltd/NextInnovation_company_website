import SectionTitle from "../SectionTitle";
import StrengthCard from "../eor/StrengthCard";
import Gif1 from "/images/gif8.gif"
import Gif2 from "/images/gif1.gif"
import Gif3 from "/images/gif7.gif"
import Gif4 from "/images/gif3.gif"
import Gif5 from "/images/gif4.gif"
import { useRef } from "react";
import useRotateCardAnimation from "../../hooks/useRotateCardAnimation";
import useSectionTitleAnimation from "../../hooks/useSectionTitleAnimation";

const DxStrength = () => {
    const titleRef = useRef(null)
    const ref1 = useRef(null)
    const ref2 = useRef(null)
    const ref3 = useRef(null)
    const ref4 = useRef(null)
    const ref5 = useRef(null)
    useSectionTitleAnimation(titleRef,{start: "top 60%"})
    useRotateCardAnimation(ref1,{start: "top 80%"},-300,-45,1.5)
    useRotateCardAnimation(ref2,{start: "top 80%"},300,45,1.5)
    useRotateCardAnimation(ref3,{start: "top 80%"},-300,-45,1.5)
    useRotateCardAnimation(ref4,{start: "top 80%"},300,45,1.5)
    useRotateCardAnimation(ref5,{start: "top 80%"},-300,-45,1.5)

    return (
        <div className="bg-[#1E2C44]">
            <div className="max-w-[1366px] mx-auto py-[80px] lg:py-[137px] px-[24px] lg:px-[120px]">
                <div className="overflow-hidden">
                    <div ref={titleRef}>
                        <SectionTitle jp="当社DX支援の特徴と強み" eng="Features & Strengths of DX Support" jpcolor="text-[#FFFFFF]" engcolor="text-[#FFFFFF]" />
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[28px] lg:gap-[34px] mt-[50px] lg:mt-[80px] overflow-hidden lg:overflow-visible">
                    <div ref={ref1}>
                        <StrengthCard
                            image={Gif1}
                            title="スピード × 品質 × コストの最適化"
                            description="私たちは、日本企業のニーズと海外人材の強みを組み合わせ、**「スピード」「品質」「コストバランス」**を同時に実現します。日本語による要件整理と伴走支援で言語や仕様のズレを防ぎ、経験豊富なデザイナー・エンジニアが即時にプロジェクトへ参画可能です。さらに国内相場より抑えた費用でありながら、東南アジアでも最安値クラスとなる1人日20,000円〜という料金体系を実現。依頼から最短1ヶ月で稼働を開始できるため、国内開発の人材不足や高騰するコスト、オフショア特有の不安を一挙に解消します。"
                            height="lg:min-h-[460px]"
                        />
                    </div>
                    <div ref={ref2}>
                        <StrengthCard
                            image={Gif2}
                            title="日本企業に最適化された運用体制"
                            description="豊富な日本企業との取引実績に基づき、進行管理・品質保証をすべて日本基準で整備しています。決済は日本円やクレジットカードに対応しており、会計処理や為替リスクを心配する必要はありません。さらに代表自らが現地語を駆使し、文化や商習慣の違いを橋渡しすることで、海外発注でありながら国内と同じ安心感でプロジェクトを進められる体制を整えています。"
                            height="lg:min-h-[460px]"
                        />
                    </div>
                    <div ref={ref3}>
                        <StrengthCard
                            image={Gif3}
                            title="ワンストップのDX支援"
                            description="私たちの支援はWebシステム・アプリ開発からUI/UXデザインまで幅広く対応可能です。ワイヤーフレームの作成から設計、開発、運用・保守まで一貫して手がけるため、複数のベンダーや外注先を管理する手間がなく、プロジェクトをスムーズに推進できます。成果物単位での依頼にも柔軟に対応しており、ニーズに合わせた最適な支援を提供します。"
                            height="lg:min-h-[460px]"
                        />
                    </div>
                    <div ref={ref4}>
                        <StrengthCard
                            image={Gif4}
                            title="AI活用による効率化"
                            description="生成AIや自動化ツールを積極的に取り入れることで、設計や開発のスピードと正確性を両立。従来より効率的に高品質な成果物を生み出し、短納期プロジェクトにも柔軟に対応できます。AIを活用したプロセス設計により、限られたリソースでも最大の成果を引き出すことが可能です。"
                            height="lg:min-h-[460px]"
                        />
                    </div>
                    <div ref={ref5}>
                        <StrengthCard
                            image={Gif5}
                            title="EORへのシームレスな移行"
                            description="単発の受託やデザインで終わらせず、EOR（Employer of Record）契約に切り替えることで、同じ人材を継続的に確保できます。これにより、納品後の運用・改善まで一気通貫でサポートし、長期的なDX推進と人材確保を同時に実現します。単なる外注先ではなく、真のパートナーとして企業の成長に寄り添います。"
                            height="lg:min-h-[460px]"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DxStrength;
