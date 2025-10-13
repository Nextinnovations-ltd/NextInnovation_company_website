import EorServiceSolveCard from "../eor/EorServiceSolveCard";
import Img1 from "/images/uiux-service-solve1.png"
import Img2 from "/images/uiux-service-solve2.png"
import Img3 from "/images/uiux-service-solve3.png"
import TitleFlex from "../dxsupport/TitleFlex";

const UiuxServiceSolve = () => {

    return (
        <div className="bg-[#1E2C44]">
            <div className="bg-white rounded-b-[40px] lg:rounded-b-[80px]">
                <div className="max-w-[1366px] mx-auto pt-[80px] lg:pt-[120px] pb-[80px] lg:pb-[100px] px-[24px] xl:px-[120px] text-[#444444]">

                    <TitleFlex
                        jp="当社UI/UXデザインが解決すること" eng="What Our UI/UX Design Solves"
                        text="当社のUI/UXデザインは、国内フリーランスや高額なデザイン会社、海外安価デザイン委託の弱点を解消し、コストと品質の両立を実現します。"
                    />

                    <div className="mt-[50px] lg:mt-[64px]">
                        <EorServiceSolveCard
                            image={Img1}
                            title="日本市場に最適化されたデザインとコストパフォーマンス"
                            description="日本企業案件経験豊富なデザイナーが担当し、日本基準の品質を維持しながらも、東南アジア拠点からコスト効率の高いデザインを提供。"
                            first
                        />
                        <EorServiceSolveCard
                            image={Img2}
                            title="ワンストップ対応 & 継続サポート"
                            description="ワイヤーフレームからデザインシステム構築まで一気通貫で対応。EOR契約へ移行することで、同じ人材を継続確保し、長期的な改善や追加デザインにも対応可能。"
                        />
                        <EorServiceSolveCard
                            image={Img3}
                            title="効率化と精度を高めるツール活用"
                            description="FigmaやMaze、v0など最新ツールやAIを積極導入し、スピーディーで高品質なデザインを提供。"
                        />
                    </div>

                </div>
            </div>
        </div>
    );
}

export default UiuxServiceSolve;
