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
        <div ref={containerRef} className="lg:flex lg:justify-between space-y-[40px] lg:space-y-0 pt-[50px] lg:pt-[120px] pb-[120px] lg:pb-[180px] text-[#1E2C44] px-[24px] lg:px-[121px]">
            <EorCard
                title="EORのみ"
                image={CardImg1}
                text1="海外人材を雇いたいが、現地法人を"
                text1Next="設立する予定はない"
                text2="雇用契約・給与計算・社会保険などの"
                text2Next="煩雑な手続きを任せたい"
                text3="海外人材のマネージメントに自信あり、"
                text3Next="自社で業務上の管理/運営をリモートで可能"
            />

            <EorCard
                title="安心ラボ型EOR"
                image={CardImg2}
                text1="長期的に海外エンジニアを“自社チーム”の"
                text1Next="一員として定着させたい"
                text2="勤怠管理・福利厚生・現場サポートまで"
                text2Next="トータルで任せたい"
                text3="海外人材活用に不慣れで、安心できる"
                text3Next="サポート体制を求めている"
            />

            <EorCard
                title="プロジェクト帆走型EOR"
                image={CardImg3}
                text1="チームにノウハウを溜めながらプロジェクト"
                text1Next="単位で確実に成果を出したい"
                text2="専任PMによる進行・品質・リスク管理を"
                text2Next="任せたい"
                text3="社内のマネジメントリソースが"
                text3Next="不足している"
            />
        </div>
    );
}

export default EorCardSection;
