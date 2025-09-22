import { useRef } from "react"
import useSectionTitleAnimation from "../../hooks/useSectionTitleAnimation"
import SectionTitle from "../SectionTitle"
import TechnologyMenu from "./TechnologyMenu"
import Img1 from "/images/svg/html.svg"
import Img2 from "/images/svg/css.svg"
import Img3 from "/images/svg/wordpress.svg"
import Img4 from "/images/svg/shopify.svg"
import Img5 from "/images/svg/react.svg"
import Img6 from "/images/svg/vue.svg"
import Img7 from "/images/svg/next.svg"
import Img8 from "/images/svg/nuxt.svg"

const Technology = () => {
    const titleRef = useRef(null)
    useSectionTitleAnimation(titleRef,{start: "top 80%"})
    return (
        <div className="bg-[#1E2C44]">
            <div className="max-w-[1366px] mx-auto py-[80px] lg:py-[140px] px-6 lg:px-[64px]">
                <div className="overflow-hidden">
                    <div ref={titleRef}>
                        <SectionTitle jp="技術スタックと利用可能なツール" eng="Technology Stack & Tools" jpcolor="text-white" engcolor="text-white" />
                    </div>
                </div>
                <div className="mt-[60px]">
                    <div className="bg-white lg:w-[595px] rounded-[9px] lg:rounded-[24px] px-6 lg:px-8 pt-[19px] lg:pt-8 pb-[35px] lg:pb-14">
                        <h3 className="text-[24px] font-bold leading-[44px] tracking-[-2%] text-[#121212]">フロントエンド</h3>
                        <div className="flex flex-wrap gap-y-[10px] lg:gap-y-4 justify-between mt-[15px] lg:mt-6">
                            <TechnologyMenu image={Img1} title="HTML 5" />
                            <TechnologyMenu image={Img2} title="CSS 3" />
                            <TechnologyMenu image={Img3} title="WORDPRESS" />
                            <TechnologyMenu image={Img4} title="Shopify" />
                            <TechnologyMenu image={Img5} title="REACT" />
                            <TechnologyMenu image={Img6} title="VUE" />
                            <TechnologyMenu image={Img7} title="NEXT.JS" />
                            <TechnologyMenu image={Img8} title="NUXT" />
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Technology;
