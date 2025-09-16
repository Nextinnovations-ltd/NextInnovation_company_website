import { useRef } from "react";
import SectionTitle from "../SectionTitle";
import EorServiceSolveCard from "./EorServiceSolveCard";
import Img1 from "/images/eor-service-solve1.png"
import useSectionTitleAnimation from "../../hooks/useSectionTitleAnimation";

const EorServiceSolve = () => {

    const titleRef = useRef(null)
    const textRef = useRef(null)
    useSectionTitleAnimation(titleRef,{start: "top 70%"})
    useSectionTitleAnimation(textRef,{start: "top 80%"},50)

    return (
        <div className="bg-white rounded-b-[80px]">
            <div className="max-w-[1366px] mx-auto py-[180px] px-[63px] text-[#444444]">

                <div className="flex items-end justify-between overflow-hidden">
                    <div ref={titleRef}>
                        <SectionTitle jp="当社EORサービスが解決すること" eng="What Our EOR Service Solves" />
                    </div>
                    <div className="w-[502px] h-[110px] text-[20px] font-medium leading-[38px] tracking-[0%] pb-[7px]">
                        <p ref={textRef}>こうした課題を解消し、企業が安心して海外人材を活用できる仕組みが当社のEOR（Employer of Record）<br/>サービスです。</p>
                    </div>
                </div>

                <div className="mt-[64px]">
                    <EorServiceSolveCard
                        image={Img1}
                        title="海外人材を一員として採用可能"
                        description1="現地法人を設立せずに、海外人材を自社チームの"
                        description2="一員として柔軟に採用可能"
                    />
                    <EorServiceSolveCard
                        image={Img1}
                        title="手続きを一括代行可能"
                        description1="契約や給与支払い、税務・労務管理などの煩雑な"
                        description2="手続きを一括代行"
                    />
                    <EorServiceSolveCard
                        image={Img1}
                        title="日本語対応可能"
                        description1="コミュニケーションや文化のギャップを、日本語対応可能"
                        description2="なスタッフがサポート"
                        last
                    />
                </div>

            </div>
        </div>
    );
}

export default EorServiceSolve;
