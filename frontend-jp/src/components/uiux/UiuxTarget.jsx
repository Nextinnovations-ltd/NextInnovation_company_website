import Img1 from "/images/uiux-target1.png"
import Img2 from "/images/development-target1.png"
import Img3 from "/images/development-target3.png"
import Img4 from "/images/development-target5.png"
import Img5 from "/images/uiux-target5.png"
import Img6 from "/images/uiux-target6.png"
import Img7 from "/images/dx-target1.png"
import DxTargetCard from "../dxsupport/DxTargetCard"
import { useRef } from "react"
import useCardAnimation from "../../hooks/useCardAnimation"
import useSectionTitleAnimation from "../../hooks/useSectionTitleAnimation"

const UiuxTarget = () => {
    const titleRef = useRef(null)
    const containerRef = useRef(null)
    useSectionTitleAnimation(titleRef,{start: "top 70%"})
    useCardAnimation(containerRef,".dx-target-card",{start: "top 80%"})

    return (
        <div className="px-[24px] lg:px-[120px] pt-[70px] lg:pt-[120px] pb-[120px] lg:pb-[180px]">
            <div className="overflow-hidden">
                <h2 ref={titleRef} className="text-[#02021E] text-[20px] font-bold leading-[34px] tracking-[-2%]">UI/UXデザインの対象例</h2>
            </div>
            <div ref={containerRef} className="mt-[30px] lg:mt-[64px] grid grid-cols-1 lg:grid-cols-3 gap-[22px]">
                <DxTargetCard
                    title="LPデザイン"
                    image={Img1}
                    description="広告・キャンペーン用に成果につながるランディングページをデザイン"
                />
                <DxTargetCard
                    title="コーポレート / サービスサイト"
                    image={Img2}
                    description="ブランド独自の世界観を反映したUI設計で、集客力・信頼感を高めるWebサイトを構築"
                />
                <DxTargetCard
                    title="サイトリニューアル"
                    image={Img3}
                    description="既存サイトの課題を分析し、UI/UXを刷新。問い合わせ率やCVR向上につなげる改善を実現"
                />
                <DxTargetCard
                    title="モバイルアプリUIリニューアル"
                    image={Img4}
                    description="既存アプリのUIを刷新し、直感的に使いやすい操作性を実現"
                />
                <DxTargetCard
                    title="WebサービスUI/UX設計"
                    image={Img5}
                    description="画面フロー設計からプロトタイプ制作までを一気通貫で対応し、成果直結型の体験を設計"
                />
                <DxTargetCard
                    title="デザインシステム構築"
                    image={Img6}
                    description="カラー・フォント・コンポーネントを統一し、長期運用に耐えるデザイン基盤を整備"
                />
                <DxTargetCard
                    title="UXリサーチ / 検証"
                    image={Img7}
                    description="ユーザーテストやデータ分析を通じて課題を発見し、改善につなげる検証プロセスを導入"
                />
            </div>
        </div>
    );
}

export default UiuxTarget;
