import WhatIsEor from "../../components/eor/WhatIsEor";
import Diagram from "../../components/eor/Diagram";
import EorCardSection from "../../components/eor/EorCardSection";
import EorChallenges from "../../components/eor/EorChallenges";
import EorHero from "../../components/eor/EorHero";
import EorServiceSolve from "../../components/eor/EorServiceSolve";
import Strength from "../../components/eor/Strength";
import ComparisonTable from "../../components/eor/ComparisonTable";
import PlanAndPricing from "../../components/eor/PlanAndPricing";
import UseCase from "../../components/eor/UseCase";
import Onboarding from "../../components/eor/Onboarding";
import FAQ from "../../components/FAQ";
import Platform from "../../components/eor/Platform";
import Gif from "../../components/Gif";
import OtherService from "../../components/eor/OtherService";

const Eor = () => {

    return (
        <>
            <div className="eor !bg-fixed !bg-no-repeat !bg-cover bg-[url('/images/eor-hero-mobile.png')] lg:bg-[url('/images/eor-hero.png')]">
                <EorHero/>

                <div className="h-screen"></div>

                <div className="bg-[#F8F8F8] rounded-t-[40px] lg:rounded-t-[80px]">
                    <div className="max-w-[1366px] mx-auto text-[#444444]">
                        <WhatIsEor/>
                        <Diagram/>
                        <EorCardSection/>
                        <EorChallenges/>
                    </div>
                </div>
            </div>
            <EorServiceSolve/>
            <Strength/>
            <ComparisonTable/>
            <PlanAndPricing/>
            <UseCase/>
            <Onboarding/>
            <FAQ/>
            <div className="-mb-[60px] relative !z-[1]">
                <Platform/>
            </div>
            <Gif/>
            <OtherService/>
            <div className="lg:mb-[100vh]"></div>
        </>
    );
}

export default Eor;
