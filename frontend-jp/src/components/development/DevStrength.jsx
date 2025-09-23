import SectionTitle from "../SectionTitle";
import StrengthCard from "../eor/StrengthCard";
import Gif1 from "/images/gif5.gif"
import Gif2 from "/images/gif1.gif"
import Gif3 from "/images/gif9.gif"
import Gif4 from "/images/gif4.gif"
import { useRef } from "react";
import useRotateCardAnimation from "../../hooks/useRotateCardAnimation";
import useSectionTitleAnimation from "../../hooks/useSectionTitleAnimation";

const DevStrength = () => {
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
            <div className="max-w-[1366px] mx-auto pt-[80px] lg:pt-[137px] px-[24px] lg:px-[62px]">
                <div className="overflow-hidden">
                    <div ref={titleRef}>
                        <SectionTitle jp="当社の受託開発の強み" eng="Features & Strengths of DEVELOPMENT" jpcolor="text-[#FFFFFF]" engcolor="text-[#FFFFFF]" />
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[28px] lg:gap-[37px] mt-[50px] lg:mt-[80px] overflow-hidden lg:overflow-visible">
                    <div ref={ref1}>
                        <StrengthCard
                            image={Gif1}
                            title="幅広い技術スタックと採用力による柔軟性"
                            description="React / Vue / Node.js / Flutter などモダンな技術に対応し、既存システムとの連携から最新アプリ開発まで幅広くカバーします。さらにEORを基盤とする当社だからこそ、未掲載の技術スタックでも必要に応じて人材を採用・アサイン可能。プロジェクトに最適な体制をスピーディーに構築できる柔軟性があります。"
                        />
                    </div>
                    <div ref={ref2}>
                        <StrengthCard
                            image={Gif2}
                            title="日本企業に特化した安心体制"
                            description="多数の日本企業プロジェクトで培った経験に基づき、品質管理・進行管理を日本基準で徹底。さらに日本円決済やカード支払いにも対応しており、会計処理や為替リスクを気にせず安心して発注できます。"
                        />
                    </div>
                    <div ref={ref3}>
                        <StrengthCard
                            image={Gif3}
                            title="ワンストップ対応とコストパフォーマンス"
                            description="要件定義・設計・開発から運用・保守まで一気通貫で対応可能。複数ベンダーを管理する必要がなく、スムーズで一体感のあるプロジェクト進行を実現します。また、一気通貫の為、コストのばらつきもありません。"
                        />
                    </div>
                    <div ref={ref4}>
                        <StrengthCard
                            image={Gif4}
                            title="柔軟な契約形態とEOR連携"
                            description="短期スポットから長期開発まで対応でき、単発開発で終わらずEOR契約へ移行することで同じ人材を継続確保可能。納品後の改善や追加開発までシームレスにサポートします。"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DevStrength;
