import SectionTitle from "../SectionTitle";
import StrengthCard from "../eor/StrengthCard";
import Gif1 from "/images/gif5.gif"
import Gif2 from "/images/gif3.gif"
import Gif3 from "/images/gif9.gif"
import Gif4 from "/images/gif4.gif"
import { useRef } from "react";
import useRotateCardAnimation from "../../hooks/useRotateCardAnimation";
import useSectionTitleAnimation from "../../hooks/useSectionTitleAnimation";

const UiuxStrength = () => {
    const titleRef = useRef(null)
    const ref1 = useRef(null)
    const ref2 = useRef(null)
    const ref3 = useRef(null)
    const ref4 = useRef(null)
    useSectionTitleAnimation(titleRef,{start: "top 60%"})
    useRotateCardAnimation(ref1,{start: "top 80%"},-300,-45,1.5)
    useRotateCardAnimation(ref2,{start: "top 80%"},300,45,1.5)
    useRotateCardAnimation(ref3,{start: "top 80%"},-300,-45,1.5)
    useRotateCardAnimation(ref4,{start: "top 80%"},300,45,1.5)

    return (
        <div className="bg-[#1E2C44]">
            <div className="max-w-[1366px] mx-auto pt-[80px] lg:pt-[137px] px-[24px] xl:px-[102px]">
                <div className="overflow-hidden">
                    <div ref={titleRef}>
                        <SectionTitle jp="当社のUI/UXデザインの強み" eng="Features & Strengths of UI/UX Design" jpcolor="text-[#FFFFFF]" engcolor="text-[#FFFFFF]" />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[28px] lg:gap-[34px] mt-[50px] lg:mt-[80px] overflow-hidden lg:overflow-visible">
                    <div ref={ref1}>
                        <StrengthCard
                            image={Gif1}
                            title="日本市場に最適化されたデザイン品質"
                            description="日本企業案件を多数経験したデザイナーが担当し、日本特有のユーザー特性や美意識を反映。成果に直結する高品質なUI/UXを実現します。"
                        />
                    </div>
                    <div ref={ref2}>
                        <StrengthCard
                            image={Gif2}
                            title="最新ツールとAI活用"
                            description="FigmaやMaze、v0など最新ツールに加えAIも積極的に導入。効率的かつ精度の高いデザインをスピーディーに提供します。"
                        />
                    </div>
                    <div ref={ref3}>
                        <StrengthCard
                            image={Gif3}
                            title="ワンストップ対応で一体感ある進行"
                            description="ワイヤーフレーム設計からUIデザイン、UX検証、デザインシステム構築までを一気通貫で対応。開発チームとの連携もスムーズに進められます。"
                        />
                    </div>
                    <div ref={ref4}>
                        <StrengthCard
                            image={Gif4}
                            title="EOR基盤による拡張性と安心体制"
                            description="必要スキルを持つデザイナーを柔軟に採用・アサイン可能。単発のLPから大規模サービスの改善まで継続的に伴走できます。さらに日本円決済やカード支払いに対応し、国内同様の安心感で依頼できます。"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UiuxStrength;
