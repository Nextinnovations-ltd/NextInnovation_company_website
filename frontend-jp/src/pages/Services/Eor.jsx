import EorHeroImg from "/images/eor-hero.png"
import WhatIsEor from "../../components/eor/WhatIsEor";
import Diagram from "../../components/eor/Diagram";
import EorCardSection from "../../components/eor/EorCardSection";
import EorChallenges from "../../components/eor/EorChallenges";
import EorHero from "../../components/eor/EorHero";
import EorServiceSolve from "../../components/eor/EorServiceSolve";

const Eor = () => {
    return (
        <>
            <div className="!bg-fixed !bg-no-repeat !bg-cover" style={{background: `url(${EorHeroImg})`}}>
                <EorHero/>

                <div className="h-screen"></div>

                <div className="bg-[#F8F8F8] rounded-t-[80px]">
                    <div className="max-w-[1366px] mx-auto px-[64px] text-[#444444]">
                        <WhatIsEor/>
                        <Diagram/>
                        <EorCardSection/>
                        <EorChallenges/>
                    </div>
                </div>
            </div>
            <EorServiceSolve/>
        </>
    );
}

export default Eor;
