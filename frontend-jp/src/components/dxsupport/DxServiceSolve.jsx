import TitleFlex from "./TitleFlex";
import EorServiceSolveCard from "../eor/EorServiceSolveCard";
import Img1 from "/images/dx-service-solve1.png"
import Img2 from "/images/dx-service-solve2.png"
import Img3 from "/images/dx-service-solve3.png"

const DxServiceSolve = () => {
    return (
        <div className="bg-[#1E2C44]">
            <div className="bg-white rounded-b-[40px] lg:rounded-b-[80px]">
                <div className="max-w-[1366px] mx-auto pt-[80px] lg:pt-[120px] pb-[80px] lg:pb-[180px] px-[24px] xl:px-[120px] text-[#444444]">

                    <TitleFlex
                        jp="当社DX支援サービスが解決すること" eng="WHAT OUR DX SUPPORT SOLVES"
                        text="私たちは、日本企業のニーズと海外人材の強みを結びつけ、**「スピード」「品質」「コストバランス」**　を同時に実現するDX支援を提供します。"
                    />

                    <div className="mt-[50px] lg:mt-[64px]">
                        <EorServiceSolveCard
                            image={Img1}
                            title="日本語での要件整理と伴走支援可能"
                            description="日本語での要件整理と伴走支援で、言語や仕様のズレを解消"
                            first
                        />
                        <EorServiceSolveCard
                            image={Img2}
                            title="即時にプロジェクトへ参画可能"
                            description="経験豊富なデザイナー・エンジニアが即時にプロジェクトへ参画可能"
                        />
                        <EorServiceSolveCard
                            image={Img3}
                            title="低コストで効率的なDX推進可能"
                            description="国内水準よりも抑えた費用かつ東南アジアでもトップレベルに安価なコストで、無駄のないDX推進を実現"
                        />
                    </div>

                </div>
            </div>
        </div>
    );
}

export default DxServiceSolve;
