import DxChallenge from "../../components/dxsupport/DxChallenge";
import DxHero from "../../components/dxsupport/DxHero";
import DxServiceSolve from "../../components/dxsupport/DxServiceSolve";
import DxStrength from "../../components/dxsupport/DxStrength";
import DxTarget from "../../components/dxsupport/DxTarget";
import ServiceOverview from "../../components/dxsupport/ServiceOverview";
import Technology from "../../components/dxsupport/Technology";
import ComparisonTable from "../../components/eor/ComparisonTable";
import WhatIsEor from "../../components/eor/WhatIsEor";

const DxSupport = () => {
    return (
        <>
            <div className="relative">
                <div className="fixed inset-0 -z-30">
                    <img src="/images/dx-hero.png" alt="hero" className="w-full h-full object-cover hidden lg:block" />
                    <img src="/images/dx-hero-mobile.png" alt="hero" className="w-full h-full object-cover lg:hidden" />
                </div>

                <DxHero />

                <div className="h-[90vh] lg:h-screen"></div>

                <div className="bg-[#F8F8F8] rounded-t-[40px] lg:rounded-t-[80px]">
                    <div className="max-w-[1366px] mx-auto text-[#444444]">
                        <WhatIsEor
                            jp="DX支援とは？"
                            eng="what is dx support?"
                            text1="DX（デジタルトランスフォーメーション）支援とは、IT導入や開発にとどまらず、企業の業務やビジネスモデルをデジタルで変革し、持続的成長を実現する取り組みです。戦略立案からUI/UXデザイン、開発・運用までを伴走し、「効率化」「新規事業」「顧客体験向上」を支援します。さらに、オリジナル性の高いWeb集客や、属人化したノウハウのプロダクト化を通じて、企業独自の強みを価値へと転換し、競争力を高めます。"
                        />
                        <DxTarget/>
                        <DxChallenge/>
                    </div>
                </div>
                <DxServiceSolve/>
                <DxStrength/>
                <ComparisonTable/>
                <ServiceOverview/>
                <Technology/>
            </div>
        </>
    );
}

export default DxSupport;
