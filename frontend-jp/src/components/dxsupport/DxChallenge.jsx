import { useRef } from "react";
import ChallengeCard from "../eor/ChallengeCard";
import SectionTitle from "../SectionTitle";
import SubTitleFlex from "./SubTitleFlex";
import Img1 from "/images/dx-challenge1.png"
import Img2 from "/images/dx-challenge2.png"
import Img3 from "/images/dx-challenge3.png"
import Img4 from "/images/dx-challenge4.png"
import Img5 from "/images/dx-challenge5.png"
import Img6 from "/images/dx-challenge6.png"
import useCardAnimation from "../../hooks/useCardAnimation";
import useSectionTitleAnimation from "../../hooks/useSectionTitleAnimation";

const DxChallenge = () => {
    const containerRef1 = useRef(null)
    const containerRef2 = useRef(null)
    const titleRef = useRef(null)
    useSectionTitleAnimation(titleRef,{start: "top 70%"})
    useCardAnimation(containerRef1,".challenge-card",{start: "top 80%"})
    useCardAnimation(containerRef2,".challenge-card",{start: "top 80%"})

    return (
        <div className="px-6 lg:px-[64px] pb-[80px] lg:pb-[120px]">
            <div className="h-[70px] lg:h-[100px] overflow-hidden">
                <div ref={titleRef}>
                    <SectionTitle jp="課題" eng="Challenges" />
                </div>
            </div>
            <div className="mt-[50px] lg:mt-[102px] mb-[50px] lg:mb-[60px]">
                <SubTitleFlex
                    title="日本国内の場合"
                    description="結果として「すぐに動けない」「想定以上に費用がかかる」という状況が企業のDX推進を妨げています。"
                />
            </div>
            <div ref={containerRef1} className="lg:flex lg:gap-6 pb-[60px] lg:pb-[80px] border-b-[1px] space-y-6 lg:space-y-0 border-[#44444433]">
                <ChallengeCard
                    image={Img1}
                    title="開発リソース不足"
                    description="エンジニアやデザイナー不足により案件が断られる"
                />
                <ChallengeCard
                    image={Img2}
                    title="長期の着手待ち"
                    description="数ヶ月以上待たされ、スピード感と相性が悪い"
                />
                <ChallengeCard
                    image={Img3}
                    title="コスト高騰"
                    description="人件費・開発費の上昇で予算超過が頻発"
                />
            </div>
            <div className="mt-[60px] lg:mt-[80px] mb-[50px] lg:mb-[60px]">
                <SubTitleFlex
                    title="海外発注(オフショアの場合)"
                    description="コストを求めても、結果的に「安かろう悪かろう」となりかねません。"
                />
            </div>
            <div ref={containerRef2} className="lg:flex lg:gap-6 space-y-6 lg:space-y-0">
                <ChallengeCard
                    image={Img4}
                    title="言語の壁"
                    description="仕様を正確に伝えられず認識のズレが生じる"
                />
                <ChallengeCard
                    image={Img5}
                    title="仕様ずれ・追加費用"
                    description="解釈違いから追加開発・予算超過が発生"
                />
                <ChallengeCard
                    image={Img6}
                    title="納期・品質の不安"
                    description="体制が不十分だと品質が安定せず納期遅延も生じる"
                />
            </div>
        </div>
    );
}

export default DxChallenge;
