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
        <div className="bg-white pt-[80px] lg:pt-[152px] pb-[90px] lg:pb-[106px] rounded-b-[40px] lg:rounded-b-[80px]">
            <div className="max-w-[1366px] mx-auto text-[#444444] px-[24px] xl:px-[121px]">
                <Breadcrumb current="EOR（雇用代行）" />

                <h1 className="text-[32px] font-bold leading-[50px] tracking-[0%] mt-[51px] lg:mt-[46px] mb-[24px]">
                    <div className="overflow-hidden h-[150px] md:h-auto">
                        <div ref={titleRef}>
                            海外人材活用を、<br className="md:hidden"/>もっと<br className="hidden lg:block"/>
                            シンプルに、<br className="lg:hidden"/>もっと安心に。
                        </div>
                    </div>
                </h1>
                <div className="flex flex-col gap-[30px] lg:gap-0 lg:flex-row lg:justify-between lg:items-center overflow-hidden">
                    <p ref={descriptionRef} className=" text-[14px] font-normal leading-[29px] lg:leading-[31px] tracking-[0%]">
                        EOR（雇用代行）サービスで、採用から契約・給与支払・現場サポートまでワンストップで提供。<br className="hidden lg:block"/>
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
