import Challenge1 from "/images/challenge1.png"
import Challenge2 from "/images/challenge2.png"
import Challenge3 from "/images/challenge3.png"
import ChallengeCard from "./ChallengeCard";
import SectionTitle from "../../components/SectionTitle";
import { useRef } from "react";
import useSectionTitleAnimation from "../../hooks/useSectionTitleAnimation";
import useCardAnimation from "../../hooks/useCardAnimation";

const EorChallenges = () => {
    const titleRef = useRef(null)
    const textRef = useRef(null)
    const containerRef = useRef(null)
    useSectionTitleAnimation(titleRef,{start: "top 70%"})
    useSectionTitleAnimation(textRef,{start: "top 60%"})
    useCardAnimation(containerRef,".challenge-card",{start: "top 80%"})

    return (
        <div className="text-[#444444] pb-[80px] lg:pb-[120px] px-[24px] lg:px-[64px]">
            <div className="flex flex-col lg:flex-row lg:justify-between">
                <div className="h-[70px] lg:h-[100px] overflow-hidden">
                    <div ref={titleRef}>
                        <SectionTitle jp="課題" eng="Challenges" />
                    </div>
                </div>
                <div className="lg:w-[523px] overflow-hidden h-[70px] text-[14px] lg:text-[20px] font-medium leading-[24px] lg:leading-[38px] tracking-[0%] mt-[28px] lg:mt-[54px]">
                    <div ref={textRef}>これらの課題を解決し、海外人材の活用を容易にしたのが当社のEORサービスです。</div>
                </div>
            </div>
            <div ref={containerRef} className="lg:flex lg:justify-between space-y-[21px] lg:space-y-0 mt-[50px] lg:mt-[60px]">
                <ChallengeCard
                    image={Challenge1}
                    title="国内採用の壁"
                    description="日本国内では、少子高齢化や都市部への人材集中により優秀な人材の確保が年々難しくなっています。加えて、人件費の高騰や採用競争の激化により、コストをかけても十分な人材を確保できないという声が多く聞かれます。その結果、事業成長のスピードに採用が追いつかないケースが増えています。"
                />
                <ChallengeCard
                    image={Challenge2}
                    title="オフショア開発のリスク"
                    description="コスト削減を目的に海外開発拠点を利用する企業も増えていますが、言語や文化の壁によるコミュニケーションコストが大きく、仕様の認識違いが原因で追加費用や納期遅延が頻発することも少なくありません。短期的にはコストメリットがあっても、結果的にプロジェクト全体の負担が増してしまうことが課題となっています。"
                />
                <ChallengeCard
                    image={Challenge3}
                    title="自社で現地法人を設立する負担"
                    description="現地法人を立ち上げることで海外人材を直接雇用する方法もありますが、設立にかかる初期コストや煩雑な手続き、現地運営に伴うリスクが大きく、特に中堅・中小企業にとっては現実的な選択肢とは言えません。また、海外の労務・税務に精通した人材を自社で確保する必要もあり、導入ハードルが高いのが現状です。"
                />
            </div>
        </div>
    );
}

export default EorChallenges;
