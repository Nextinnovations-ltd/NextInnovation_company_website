import SectionTitle from "../SectionTitle";
import StrengthCard from "./StrengthCard";
import CustomerService from "/images/customer-service.gif"
import Launch from "/images/launch.gif"
import Money from "/images/money.gif"
import Conversation from "/images/conversation.gif"
import { useRef } from "react";
import useRotateCardAnimation from "../../hooks/useRotateCardAnimation";
import useSectionTitleAnimation from "../../hooks/useSectionTitleAnimation";

const Strength = () => {
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
            <div className="max-w-[1366px] mx-auto py-[80px] lg:py-[137px] px-[24px] lg:px-[62px]">
                <div className="overflow-hidden">
                    <div ref={titleRef}>
                        <SectionTitle jp="当社EORの特徴と強み" eng="Features & Strengths of EOR" jpcolor="text-[#FFFFFF]" engcolor="text-[#FFFFFF]" />
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[37px] mt-[50px] lg:mt-[80px]">
                    <div ref={ref1}>
                        <StrengthCard
                            image={CustomerService}
                            title="安心のラボ型・伴走型"
                            description="勤怠管理・現場サポート・福利厚生を完備し、人材が安心して長期的に活躍できる環境を提供。伴走型プランでは当社が進捗・品質を管理し、オフショアで頻発するトラブルを回避します。"
                        />
                    </div>
                    <div ref={ref2}>
                        <StrengthCard
                            image={Launch}
                            title="圧倒的なコスト・スピード感"
                            description="当社のEORサービスは、国内採用やオフショア委託と比較しても圧倒的なコストパフォーマンスを実現しています。また、依頼から最短1ヶ月で稼働開始が可能なため、「すぐに人材が必要」「国内で採用できない」「オフショアは不安」という企業様にもスピーディに対応できます。"
                        />
                    </div>
                    <div ref={ref3}>
                        <StrengthCard
                            image={Money}
                            title="柔軟な決済"
                            description="日本円に対応しており国内銀行振込に加え、カード決済にも対応柔軟に対応。年払いの場合は5%割引もご用意しています。"
                        />
                    </div>
                    <div ref={ref4}>
                        <StrengthCard
                            image={Conversation}
                            title="将来の人材確保とノウハウ蓄積"
                            description="EORベースのサービスのため、単なる委託ではなく自社の資産として人材・ノウハウを蓄積可能です。将来の重要な戦力として貴社のビジネス成長に貢献します。他社にてEOR人材がCTOへ登用された実績有り。"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Strength;
