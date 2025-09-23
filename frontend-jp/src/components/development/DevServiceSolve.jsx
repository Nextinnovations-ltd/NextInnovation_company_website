import EorServiceSolveCard from "../eor/EorServiceSolveCard";
import Img1 from "/images/dev-service-solve1.png"
import Img2 from "/images/dev-service-solve2.png"
import Img3 from "/images/dev-service-solve3.png"
import TitleFlex from "../dxsupport/TitleFlex";

const DevServiceSolve = () => {

    return (
        <div className="bg-[#1E2C44]">
            <div className="bg-white rounded-b-[40px] lg:rounded-b-[80px]">
                <div className="max-w-[1366px] mx-auto pt-[80px] lg:pt-[120px] pb-[80px] lg:pb-[100px] px-[24px] lg:px-[63px] text-[#444444]">

                    <TitleFlex
                        jp="当社受託開発が解決すること" eng="What Our Service Solves"
                        text="こうした課題を解消し、企業が安心して活用できるシステムが使用できるようにするのが当社のサービスです。"
                    />

                    <div className="mt-[50px] lg:mt-[64px]">
                        <EorServiceSolveCard
                            image={Img1}
                            title="最適コストでの開発提供"
                            description="東南アジアでも最安値クラスの料金体系（1人日20,000円〜）で、国内相場より大幅にコストを抑えた開発が可能です。また、上流工程は弊社代表が担当しますがコストは変わりません。"
                            first
                        />
                        <EorServiceSolveCard
                            image={Img2}
                            title="日本基準の品質・管理体制"
                            description="弊社案件の9割が日本です。日本案件経験を持つエンジニアが参画し、日本語での要件整理・進行管理に抵抗がありませんので安心して依頼できます。また、弊社代表がミャンマー語にて細かい指示も行えるのも特徴です。"
                        />
                        <EorServiceSolveCard
                            image={Img3}
                            title="EORへのスムーズな移行"
                            description="単発開発で終わらず、EOR契約に切り替えることで同じ人材を継続確保。納品後の改善や長期運用まで支援します。"
                        />
                    </div>

                </div>
            </div>
        </div>
    );
}

export default DevServiceSolve;
