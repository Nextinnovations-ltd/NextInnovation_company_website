import { useRef } from "react";
import SectionTitle from "../SectionTitle";
import UseCaseCard from "./UseCaseCard";
import Img1 from "/images/sample-use-case1.png"
import Img2 from "/images/sample-use-case2.png"
import Img3 from "/images/sample-use-case3.png"
import useSectionTitleAnimation from "../../hooks/useSectionTitleAnimation";
import useCardAnimation from "../../hooks/useCardAnimation";

const UseCase = () => {
    const titleRef = useRef(null)
    const containerRef = useRef(null)
    useSectionTitleAnimation(titleRef,{start: "top 70%"})
    useCardAnimation(containerRef,".usecase-card",{start: "top 80%"})
    return (
        <div className="bg-[#1E2C44]">
            <div className="max-w-[1366px] mx-auto px-[24px] lg:px-[121px] py-[80px] lg:py-[140px]">
                <div className="overflow-hidden">
                    <div ref={titleRef}>
                        <SectionTitle jp="参考導入例" eng="sample use cases" jpcolor="text-white" engcolor="text-white" />
                    </div>
                </div>
                <div ref={containerRef} className="lg:flex lg:justify-between mt-[50px] lg:mt-[60px] space-y-[50px] lg:space-y-0">
                    <UseCaseCard
                        title="小規模サイト運用・保守チーム"
                        description="料金目安：月額 30万円〜（税抜・別途消費税）"
                        image={Img1}
                        text1="構成：デザイナー1名、エンジニア1名"
                        text2="プラン：安心ラボ型EOR"
                        footer="コーポレートサイトやECの更新・保守に最適"
                    />
                    <UseCaseCard
                        title="新規プロダクト開発チーム"
                        description="料金目安：月額 90万円〜（税抜・別途消費税）"
                        image={Img2}
                        text1="構成：エンジニア2名、デザイナー1名、"
                        text1Next="当社担当（伴走型）"
                        text2="プラン：プロジェクト伴走型EOR"
                        footer="スタートアップや新規事業で、短期スピード開発に最適"
                    />
                    <UseCaseCard
                        title="成長期スタートアップ専属開発チーム"
                        description="料金目安：月額 75万円〜（税抜・別途消費税）"
                        image={Img3}
                        text1="構成：エンジニア3名、デザイナー1名、"
                        text1Next="QAサポート1名"
                        text2="プラン：安心ラボ型EOR"
                        footer="継続的な改善・拡張とノウハウ蓄積に最適"
                    />
                </div>
            </div>
        </div>
    );
}

export default UseCase;
