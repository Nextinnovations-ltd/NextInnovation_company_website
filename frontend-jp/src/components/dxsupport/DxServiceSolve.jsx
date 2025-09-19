import TitleFlex from "./TitleFlex";
import EorServiceSolveCard from "../eor/EorServiceSolveCard";
import Img1 from "/images/dx-service-solve1.png"
import Img2 from "/images/dx-service-solve2.png"
import Img3 from "/images/dx-service-solve3.png"

const DxServiceSolve = () => {
    return (
        <div className="bg-[#1E2C44]">
            <div className="bg-white rounded-b-[40px] lg:rounded-b-[80px]">
                <div className="max-w-[1366px] mx-auto py-[80px] lg:py-[180px] px-[24px] lg:px-[63px] text-[#444444]">

                    <TitleFlex
                        jp="当社DX支援サービスが解決すること" eng="WHAT OUR DX SUPPORT SOLVES"
                        text="こうした課題を解消し、企業が安心して海外人材を活用できる仕組みが当社のEOR（Employer of Record）サービスです。"
                    />

                    <div className="mt-[50px] lg:mt-[64px]">
                        <EorServiceSolveCard
                            image={Img1}
                            title="日本語での要件整理と伴走支援可能"
                            description="日本語での要件整理と伴走支援で、言語や仕様のズレを解消"
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
                            last
                        />
                    </div>

                </div>
            </div>
        </div>
    );
}

export default DxServiceSolve;
