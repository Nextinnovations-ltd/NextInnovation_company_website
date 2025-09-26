import Breadcrumb from "../Breadcrumb";
import GoButton from "../GoButton";
import useServiceHeroAnimation from "../../hooks/useServiceHeroAnimation";
import { useRef } from "react";

const EorHero = () => {

    const titleRef = useRef(null)
    const descriptionRef = useRef(null)
    const buttonRef = useRef(null)

    useServiceHeroAnimation(titleRef,descriptionRef,buttonRef)

    return (
        <div className="bg-white pt-[80px] lg:pt-[90px] pb-[90px] lg:pb-[149px] rounded-b-[40px] lg:rounded-b-[80px]">
            <div className="max-w-[1366px] mx-auto text-[#444444] px-[24px] lg:px-[64px]">
                <Breadcrumb
                    routes={[
                        { name: "サービス", link: "" }
                    ]}
                    current="EOR（雇用代行）"
                />

                <h1 className="text-[32px] lg:text-[64px] font-bold leading-[50px] lg:leading-[83px] tracking-[0%] lg:tracking-[-4%] mt-[51px] lg:mt-[46px] mb-[24px] lg:mb-[50px]">
                    <div className="overflow-hidden h-[150px] lg:h-[160px]">
                        <div ref={titleRef}>
                            海外人材活用を、<br className="lg:hidden"/>もっと<br className="hidden lg:block"/>
                            シンプルに、<br className="lg:hidden"/>もっと安心に。
                        </div>
                    </div>
                </h1>
                <div className="flex flex-col gap-[30px] lg:gap-0 lg:flex-row lg:justify-between lg:items-center overflow-hidden">
                    <p ref={descriptionRef} className="text-[14px] lg:text-[15px] font-normal leading-[29px] lg:leading-[24px] tracking-[0%]">
                        EOR（雇用代行）サービスで、採用から契約・給与支払・<br className="hidden lg:block"/>
                        現場サポートまでワンストップで提供。<br className="hidden lg:block"/>
                        貴社に最適なチーム形成を実現します。
                    </p>
                    <div className="overflow-hidden">
                        <div ref={buttonRef}>
                            <GoButton name="無料相談する" link="/contact?from=5" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EorHero;
