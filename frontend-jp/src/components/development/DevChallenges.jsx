import Challenge1 from "/images/dev-challenge1.png"
import Challenge2 from "/images/dev-challenge2.png"
import Challenge3 from "/images/dev-challenge3.png"
import ChallengeCard from "../eor/ChallengeCard";
import SectionTitle from "../../components/SectionTitle";
import { useRef } from "react";
import useSectionTitleAnimation from "../../hooks/useSectionTitleAnimation";
import useCardAnimation from "../../hooks/useCardAnimation";

const DevChallenges = () => {
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
                <div className="lg:w-[550px] overflow-hidden h-[70px] text-[14px] lg:text-[20px] font-medium leading-[24px] lg:leading-[38px] tracking-[0%] mt-[28px] lg:mt-[54px]">
                    <div ref={textRef}>受託開発には、国内コストの高さや海外委託での品質・進行管理リスク、納品後の継続性不足といった課題が伴います。</div>
                </div>
            </div>
            <div ref={containerRef} className="lg:flex lg:justify-between space-y-[21px] lg:space-y-0 mt-[50px] lg:mt-[60px]">
                <ChallengeCard
                    image={Challenge1}
                    title="国内発注のコスト高"
                    description="国内の開発は人材不足や工数単価の上昇により、コストが高騰。中小規模案件でも予算を圧迫し、依頼を躊躇する企業が増えています。また、すぐに開発チームを結成できず断られるケースも多々あります。"
                />
                <ChallengeCard
                    image={Challenge2}
                    title="海外開発での問題"
                    description="海外の格安委託では、進行管理不足やコミュニケーションの齟齬が発生。仕様の食い違いや追加修正で、当初のコストメリットが消えてしまうことも少なくありません。また、海外駐在の多くは経験の少ない社員が多く上流工程の会話が噛み合わせケースが多々あります。経験豊富な日本人PMを置く場合はそのコストは日本価格となる為、当初考えていたコストパフォーマンスとの相違が生まれます。"
                />
                <ChallengeCard
                    image={Challenge3}
                    title="継続性の欠如"
                    description="単発案件で終わってしまい、納品後の改善や追加開発につながらない。人材を継続確保できないことが、長期的な開発戦略の足かせとなります。"
                />
            </div>
        </div>
    );
}

export default DevChallenges;
