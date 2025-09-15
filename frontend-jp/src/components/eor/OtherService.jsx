import SectionTitle from "../SectionTitle";
import OtherServiceCard from "./OtherServiceCard";
import Img1 from "/images/other-service1.png"
import Img2 from "/images/other-service2.png"
import Img3 from "/images/other-service3.png"

const OtherService = () => {
    return (
        <div className="bg-white rounded-b-[80px]">
            <div className="max-w-[1366px] mx-auto px-[64px] pt-[140px] pb-[180px]">
                <SectionTitle jp="他のサービス" eng="other services" />
                <div className="mt-[60px] flex gap-[25px]">
                    <OtherServiceCard
                        title="DX Support"
                        description="グローバル人材の雇用・管理をスムーズに支援。法務・労務リスクを軽減し、安心して海外人材を活用可能。"
                        image={Img1}
                    />
                    <OtherServiceCard
                        title="Development"
                        description="Webシステム・アプリ開発に柔軟対応。React / Flutter 実績あり。"
                        image={Img2}
                    />
                    <OtherServiceCard
                        title="UI/UX Design"
                        description="Figmaを中心に、日本水準の高品質デザインを低コストで提供。"
                        image={Img3}
                    />
                </div>
            </div>
        </div>
    );
}

export default OtherService;
