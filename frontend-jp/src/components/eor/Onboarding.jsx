import { useRef } from "react";
import SectionTitle from "../SectionTitle";
import OnboardingCard from "./OnboardingCard";
import Img1 from "/images/onboarding1.png"
import Img2 from "/images/onboarding2.png"
import Img3 from "/images/onboarding3.png"
import Img4 from "/images/onboarding4.png"
import Img5 from "/images/onboarding5.png"
import Img6 from "/images/onboarding6.png"
import Img7 from "/images/onboarding7.png"
import useSectionTitleAnimation from "../../hooks/useSectionTitleAnimation";
import useCardAnimation from "../../hooks/useCardAnimation";

const Onboarding = () => {
    const titleRef = useRef(null)
    const containerRef = useRef(null)
    useSectionTitleAnimation(titleRef,{start: "top 70%"})
    useCardAnimation(containerRef,".onboarding-card",{start: "top 80%"},0.8,0.3)
    
    return (
        <div className="bg-white">
            <div className="max-w-[1366px] mx-auto pt-[120px] lg:pt-[160px] pb-[33px] px-[24px] lg:px-[121px]">
                <div className="overflow-hidden">
                    <div ref={titleRef}>
                        <SectionTitle jp="導入の流れ" eng="onboarding process" />
                    </div>
                </div>
                <div ref={containerRef} className="mt-[90px] grid grid-cols-1 lg:grid-cols-3 gap-x-[31px] gap-y-[46px]">
                    <OnboardingCard
                        step="1"
                        title="お問い合わせ／お打ち合わせ"
                        image={Img1}
                        description="ご要望や課題を丁寧にヒアリングし、最適なプランをご提案。導入後のイメージを共有します。"
                    />
                    <OnboardingCard
                        step="2"
                        title="包括契約締結"
                        image={Img2}
                        description="業務範囲や条件を明確にした契約を締結。安心してプロジェクトを進められる体制を整えます。"
                    />
                    <OnboardingCard
                        step="3"
                        title="求人依頼／採用活動開始"
                        image={Img3}
                        description="ご依頼内容に基づき、当社が現地で求人を開始。条件に合った候補者を幅広く募ります。"
                        last
                    />
                    <OnboardingCard
                        step="4"
                        title="候補者紹介・面談"
                        image={Img4}
                        description="スクリーニングした人材をご紹介。オンライン面談を通じて、スキルや適性をご確認いただけます。"
                    />
                    <OnboardingCard
                        step="5"
                        title="雇用契約／支払"
                        image={Img5}
                        description="採用決定後、現地法に基づき雇用契約を締結。給与支払や労務対応も当社が代行します。"
                    />
                    <OnboardingCard
                        step="6"
                        title="環境準備（PC・アカウント等）"
                        image={Img6}
                        description="PC調達やアカウント設定など業務環境を整備。スムーズに業務を開始できる状態にします。"
                        last
                    />
                    <OnboardingCard
                        step="7"
                        title="稼働開始"
                        image={Img7}
                        description="人材が稼働を開始。勤怠管理や現場サポートを通じて、安定したチーム運営を実現します。"
                    />
                </div>
            </div>
            
        </div>
    );
}

export default Onboarding;
