import { useRef } from "react";
import SectionTitle from "../SectionTitle";
import useSectionTitleAnimation from "../../hooks/useSectionTitleAnimation";
import Img1 from "/images/deliverable1.png"
import Img2 from "/images/deliverable2.png"
import Img3 from "/images/deliverable3.png"
import Img4 from "/images/deliverable4.png"
import Img5 from "/images/deliverable5.png"
import DeliverableCard from "../dxsupport/DeliverableCard";
import useCardAnimation from "../../hooks/useCardAnimation";

const UiuxDeliverable = () => {
    const titleRef = useRef(null)
    const containerRef = useRef(null)
    useSectionTitleAnimation(titleRef,{start: "top 70%"})
    useCardAnimation(containerRef,".deliverable-card",{start: "top 80%"})
    return (
        <div className="bg-[#1E2C44]">
            <div className="bg-white rounded-t-[40px] lg:rounded-t-[80px]">
                <div className="max-w-[1366px] mx-auto px-6 lg:px-[63px] pt-[140px] pb-[105px]  ">
                    <div className="overflow-hidden">
                        <div ref={titleRef}>
                            <SectionTitle jp="制作可能な成果物" eng="Possible Deliverables" />
                        </div>
                    </div>
                    <div ref={containerRef} className="flex flex-wrap gap-6 mt-[60px]">
                        <DeliverableCard
                            image={Img1}
                            title="LPデザイン"
                            description="広告・キャンペーン向けのランディングページ"
                        />
                        <DeliverableCard
                            image={Img2}
                            title="小規模Webサイトデザイン"
                            description="10ページ以内のコーポレート／サービスサイト"
                        />
                        <DeliverableCard
                            image={Img3}
                            title="モバイルアプリUIリニューアル"
                            description="10〜20画面の既存アプリUI刷新"
                        />
                        <DeliverableCard
                            image={Img4}
                            title="WebサービスUI/UX設計＋プロトタイプ"
                            description="新規サービスの画面設計と動作確認プロトタイプ"
                        />
                        <DeliverableCard
                            image={Img5}
                            title="デザインシステム構築"
                            description="ブランド全体で統一感あるUIガイドライン作成"
                        />
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default UiuxDeliverable;
