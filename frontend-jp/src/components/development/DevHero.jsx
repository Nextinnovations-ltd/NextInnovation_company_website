import Breadcrumb from "../Breadcrumb";
import GoButton from "../GoButton";
import useServiceHeroAnimation from "../../hooks/useServiceHeroAnimation";
import { useRef } from "react";

const DevHero = () => {

    const titleRef = useRef(null)
    const descriptionRef = useRef(null)
    const buttonRef = useRef(null)

    useServiceHeroAnimation(titleRef,descriptionRef,buttonRef)

    return (
        <div className="bg-white pt-[80px] lg:pt-[152px] pb-[90px] lg:pb-[106px] rounded-b-[40px] lg:rounded-b-[80px]">
            <div className="max-w-[1366px] mx-auto text-[#444444] px-[24px] lg:px-[120px]">
                <Breadcrumb
                    routes={[
                        { name: "サービス", link: "" }
                    ]}
                    current="受託開発"
                />

                <h1 className="text-[32px] font-bold leading-[50px] tracking-[0%] lg:tracking-[-4%] mt-[51px] lg:mt-[46px] mb-[24px]">
                    <div className="overflow-hidden h-auto">
                        <div ref={titleRef}>
                            Webシステムやアプリ<br className="lg:hidden"/>開発を、<br className="hidden lg:block"/>
                            最適なコスト<br className="lg:hidden"/>とスピードで。
                        </div>
                    </div>
                </h1>
                <div className="flex flex-col gap-[30px] lg:gap-0 lg:flex-row lg:justify-between lg:items-center overflow-hidden">
                    <p ref={descriptionRef} className="text-[14px] font-normal leading-[29px] lg:leading-[31px] tracking-[0%]">
                        コスト最適化と開発スピードを両立させることを重視。市場投入<br className="hidden lg:block"/>
                        までのリードタイムを短縮し、効果を最大化します。
                    </p>
                    <div className="overflow-hidden">
                        <div ref={buttonRef}>
                            <GoButton name="無料相談する" link="/contact?from=10" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DevHero;
