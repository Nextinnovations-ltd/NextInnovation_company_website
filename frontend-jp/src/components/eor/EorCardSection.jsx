import { useRef } from "react";
import EorCard from "./EorCard";
import CardImg1 from "/images/eor-card1.svg"
import CardImg2 from "/images/eor-card2.svg"
import CardImg3 from "/images/eor-card3.svg"
import useCardAnimation from "../../hooks/useCardAnimation";

const EorCardSection = () => {
    const containerRef = useRef(null)
    useCardAnimation(containerRef,".eor-card",{start: "top 80%"})
    return (
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-[80px] md:gap-[14px] xl:gap-[22px] pt-[50px] lg:pt-[120px] pb-[120px] lg:pb-[180px] text-[#1E2C44] px-[24px] xl:px-[121px]">
            <EorCard
                title="EORのみ"
                image={CardImg1}
                text1="海外人材を雇いたいが、現地法人を設立する予定はない"
                text2="雇用契約・給与計算・社会保険などの煩雑な手続きを任せたい"
                text3="海外人材のマネージメントに自信あり、自社で業務上の管理/運営をリモートで可能"
            />

            <EorCard
                title="安心ラボ型EOR"
                image={CardImg2}
                text1="長期的に海外エンジニアを“自社チーム”の一員として定着させたい"
                text2="勤怠管理・福利厚生・現場サポートまでトータルで任せたい"
                text3="海外人材活用に不慣れで、安心できるサポート体制を求めている"
            />

            <EorCard
                title="プロジェクト帆走型EOR"
                image={CardImg3}
                text1="チームにノウハウを溜めながらプロジェクト単位で確実に成果を出したい"
                text2="専任PMによる進行・品質・リスク管理を任せたい"
                text3="社内のマネジメントリソースが不足している"
            />
        </div>
    );
}

export default EorCardSection;
