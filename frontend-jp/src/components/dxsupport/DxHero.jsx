import Breadcrumb from "../Breadcrumb";
import GoButton from "../GoButton";
import useServiceHeroAnimation from "../../hooks/useServiceHeroAnimation";
import { useRef } from "react";
import BlackArrow from "/images/right-arrow-black.svg"

const DxHero = () => {

    const titleRef = useRef(null)
    const descriptionRef = useRef(null)
    const buttonRef1 = useRef(null)
    const buttonRef2 = useRef(null)

    useServiceHeroAnimation(titleRef,descriptionRef,buttonRef1,buttonRef2)

    return (
        <div className="bg-white pt-[80px] lg:pt-[152px] pb-[90px] lg:pb-[106px] rounded-b-[40px] lg:rounded-b-[80px]">
            <div className="max-w-[1366px] mx-auto text-[#444444] px-[24px] lg:px-[120px]">
                <Breadcrumb
                    routes={[
                        { name: "サービス", link: "" }
                    ]}
                    current="DX支援"
                />

                <h1 className="text-[32px] font-bold leading-[40px] tracking-[0%] lg:tracking-[-4%] mt-[51px] lg:mt-[46px] mb-[24px]">
                    <div className="overflow-hidden">
                        <div ref={titleRef}>
                            DXを、最適なコストと<br className="lg:hidden"/>品質で。
                        </div>
                    </div>
                </h1>
                <div className="flex flex-col gap-[30px] lg:gap-0 lg:flex-row lg:justify-between lg:items-center overflow-hidden">
                    <p ref={descriptionRef} className="text-[14px] lg:text-[14px] font-normal leading-[29px] lg:leading-[31px] tracking-[0%]">
                        受託開発からUI/UXデザインまで、東南アジアの優秀人材が<br className="hidden lg:block"/>
                        日本企業のDXを支援します。
                    </p>
                    <div className="flex flex-col lg:flex-row gap-[18px] lg:gap-6">
                        <div className="overflow-hidden">
                            <div ref={buttonRef1}>
                                <GoButton name="受託開発を詳" nameNext="しく見る" link="/development" bgColor="bg-[#E8E8E8]" bgHoverColor="hover:bg-[#444444]" textHoverColor="hover:text-white" textColor="text-[#444444]" arrow={BlackArrow} />
                            </div>
                        </div>
                        <div className="overflow-hidden">
                            <div ref={buttonRef2}>
                                <GoButton name="UI/UXデザインを" nameNext="詳しく見る" link="/uiux" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DxHero;
