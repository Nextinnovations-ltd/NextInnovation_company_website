import Img1 from "/images/development-target1.png"
import Img2 from "/images/development-target2.png"
import Img3 from "/images/development-target3.png"
import Img4 from "/images/development-target4.png"
import Img5 from "/images/development-target5.png"
import Img6 from "/images/development-target6.png"
import DxTargetCard from "../dxsupport/DxTargetCard"
import { useRef } from "react"
import useCardAnimation from "../../hooks/useCardAnimation"
import useSectionTitleAnimation from "../../hooks/useSectionTitleAnimation"

const DevTarget = () => {
    const titleRef = useRef(null)
    const containerRef = useRef(null)
    useSectionTitleAnimation(titleRef,{start: "top 70%"})
    useCardAnimation(containerRef,".dx-target-card",{start: "top 80%"})

    return (
        <div className="px-[24px] xl:px-[120px] pt-[70px] lg:pt-[120px] pb-[120px] lg:pb-[180px]">
            <div className="overflow-hidden">
                <h2 ref={titleRef} className="text-[#02021E] text-[20px] font-bold leading-[34px] tracking-[-2%]">受託開発の対象例</h2>
            </div>
            <div ref={containerRef} className="mt-[30px] lg:mt-[64px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <DxTargetCard
                    title="業務Webシステム開発"
                    image={Img1}
                    description="在庫管理・受発注・ワークフローなどを効率化するシステムを構築"
                />
                <DxTargetCard
                    title="ECサイト構築"
                    image={Img2}
                    description="ShopifyやWooCommerceを活用し、決済・在庫・多言語対応のECサイトを開発"
                />
                <DxTargetCard
                    title="オリジナリティWebサイト構築"
                    image={Img3}
                    description="ブランド独自の世界観を反映したコーポレートサイトやサービスサイトを開発し、集客力を強化"
                />
                <DxTargetCard
                    title="SaaS/自社プロダクト"
                    image={Img4}
                    description="自社のサービスを象徴するWebアプリを構築"
                />
                <DxTargetCard
                    title="モバイルアプリ開発"
                    image={Img5}
                    description="FlutterやReact NativeでiOS・Android両対応の業務アプリ・サービスアプリを提供"
                />
                <DxTargetCard
                    title="分析ダッシュボード"
                    image={Img6}
                    description="データを可視化し、KPI管理やレポート生成を自動化する仕組みを実装"
                />
            </div>
        </div>
    );
}

export default DevTarget;
