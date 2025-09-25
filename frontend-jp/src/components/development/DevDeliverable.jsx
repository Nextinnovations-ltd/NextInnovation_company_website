import { useRef } from "react";
import SectionTitle from "../SectionTitle";
import useSectionTitleAnimation from "../../hooks/useSectionTitleAnimation";
import Img1 from "/images/deliverable1.png"
import Img2 from "/images/deliverable2.png"
import Img3 from "/images/deliverable3.png"
import Img4 from "/images/deliverable4.png"
import Img5 from "/images/deliverable5.png"
import Img6 from "/images/deliverable6.png"
import DeliverableCard from "../dxsupport/DeliverableCard";
import useCardAnimation from "../../hooks/useCardAnimation";

const DevDeliverable = () => {
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
                            title="業務Webシステム開発"
                            description="業務Webシステム（在庫管理、受発注、ワークフロー自動化）"
                        />
                        <DeliverableCard
                            image={Img2}
                            title="ECサイト構築"
                            description="ECサイト（Shopifyによる越境EC、WordPress＋WooCommerce）"
                        />
                        <DeliverableCard
                            image={Img3}
                            title="CMSサイト構築"
                            description="コーポレートサイト / CMSサイト（WordPress＋Elementorによる高速構築）"
                        />
                        <DeliverableCard
                            image={Img4}
                            title="予約システム開発"
                            description="予約・マッチングサービス（検索・決済・予約枠管理機能を備えたWebアプリ）"
                        />
                        <DeliverableCard
                            image={Img5}
                            title="モバイルアプリ開発"
                            description="モバイルアプリ（React Native / FlutterでiOS・Android両対応）"
                        />
                        <DeliverableCard
                            image={Img6}
                            title="分析ダッシュボード構築"
                            description="分析ダッシュボード（データ可視化、KPI管理、レポート生成）"
                        />
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default DevDeliverable;
