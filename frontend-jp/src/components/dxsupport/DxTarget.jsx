import Img1 from "/images/dx-target1.png"
import Img2 from "/images/dx-target2.png"
import Img3 from "/images/onboarding2.png"
import Img4 from "/images/onboarding6.png"
import Img5 from "/images/dx-target5.png"
import DxTargetCard from "./DxTargetCard"
import { useRef } from "react"
import useCardAnimation from "../../hooks/useCardAnimation"
import useSectionTitleAnimation from "../../hooks/useSectionTitleAnimation"

const DxTarget = () => {
    const titleRef = useRef(null)
    const containerRef = useRef(null)
    useSectionTitleAnimation(titleRef,{start: "top 70%"})
    useCardAnimation(containerRef,".dx-target-card",{start: "top 80%"})

    return (
        <div className="px-[24px] lg:px-[120px] pt-[70px] lg:pt-[120px] pb-[120px] lg:pb-[180px]">
            <div className="overflow-hidden">
                <h2 ref={titleRef} className="text-[#02021E] text-[24px] font-bold leading-[34px] tracking-[-2%]">DX化支援の対象例</h2>
            </div>
            <div ref={containerRef} className="mt-[30px] lg:mt-[64px] grid grid-cols-1 lg:grid-cols-3 gap-6">
                <DxTargetCard
                    title="業務プロセス改善"
                    image={Img1}
                    description="紙やExcelで行っていた業務をクラウド化・自動化"
                />
                <DxTargetCard
                    title="Web・マーケティング強化"
                    image={Img2}
                    description="オリジナリティあるコーポレートサイトやECサイトで集客力を向上"
                />
                <DxTargetCard
                    title="顧客体験向上"
                    image={Img3}
                    description="アプリ・会員サービス・チャットボット導入による顧客接点の最適化"
                />
                <DxTargetCard
                    title="ノウハウのプロダクト化"
                    image={Img4}
                    description="社内に蓄積された属人的な知識や手法をシステムやサービスとして商品化"
                />
                <DxTargetCard
                    title="新規事業創出"
                    image={Img5}
                    description="データ活用やサブスクモデルなどデジタル前提の新サービス開発"
                />
            </div>
        </div>
    );
}

export default DxTarget;
