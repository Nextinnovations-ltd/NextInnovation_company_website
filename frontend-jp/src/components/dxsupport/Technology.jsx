import { useRef } from "react"
import useSectionTitleAnimation from "../../hooks/useSectionTitleAnimation"
import SectionTitle from "../SectionTitle"
import Img1 from "/images/svg/html.svg"
import Img2 from "/images/svg/css.svg"
import Img3 from "/images/svg/wordpress.svg"
import Img4 from "/images/svg/shopify.svg"
import Img5 from "/images/svg/react.svg"
import Img6 from "/images/svg/vue.svg"
import Img7 from "/images/svg/next.svg"
import Img8 from "/images/svg/nuxt.svg"
import Img9 from "/images/svg/php.svg"
import Img10 from "/images/svg/js.svg"
import Img11 from "/images/svg/laravel.svg"
import Img12 from "/images/svg/nodejs.svg"
import Img13 from "/images/svg/django.svg"
import Img14 from "/images/svg/python.svg"
import Img15 from "/images/svg/aws.svg"
import Img16 from "/images/svg/gcp.svg"
import Img17 from "/images/svg/docker.svg"
import Img18 from "/images/svg/mongodb.svg"
import Img19 from "/images/svg/azure.svg"
import Img20 from "/images/svg/digital-ocean.svg"
import Img21 from "/images/svg/postgresql.svg"
import Img22 from "/images/svg/cpanel.svg"
import Img23 from "/images/svg/flutter.svg"
import TechnologyCard from "./TechnologyCard"
import useRotateCardAnimation from "../../hooks/useRotateCardAnimation"

const Technology = () => {
    const titleRef = useRef(null)
    const ref1 = useRef(null)
    const ref2 = useRef(null)
    const ref3 = useRef(null)
    const ref4 = useRef(null)
    useSectionTitleAnimation(titleRef,{start: "top 80%"})
    useRotateCardAnimation(ref1,{start: "top 80%"},-300,-45,1.5)
    useRotateCardAnimation(ref2,{start: "top 80%"},300,45,1.5)
    useRotateCardAnimation(ref3,{start: "top 80%"},-300,-45,1.5)
    useRotateCardAnimation(ref4,{start: "top 80%"},300,45,1.5)
    return (
        <div className="bg-[#1E2C44]">
            <div className="max-w-[1366px] mx-auto py-[80px] lg:py-[140px] px-6 lg:px-[64px]">
                <div className="overflow-hidden">
                    <div ref={titleRef}>
                        <SectionTitle jp="技術スタックと利用可能なツール" eng="Technology Stack & Tools" jpcolor="text-white" engcolor="text-white" />
                    </div>
                </div>
                <div className="mt-[60px]">
                    <div className="flex flex-wrap gap-10">
                        <div ref={ref1}>
                            <TechnologyCard
                                title="フロントエンド"
                                menus={
                                    [
                                        {
                                            image: Img1,
                                            name: "HTML 5"
                                        },
                                        {
                                            image: Img2,
                                            name: "CSS 3"
                                        },
                                        {
                                            image: Img3,
                                            name: "WORDPRESS"
                                        },
                                        {
                                            image: Img4,
                                            name: "Shopify"
                                        },
                                        {
                                            image: Img5,
                                            name: "REACT"
                                        },
                                        {
                                            image: Img6,
                                            name: "VUE"
                                        },
                                        {
                                            image: Img7,
                                            name: "NEXT.JS"
                                        },
                                        {
                                            image: Img8,
                                            name: "NUXT"
                                        },
                                    ]
                                }
                            />
                        </div>
                        <div ref={ref2}>
                            <TechnologyCard
                                title="バックエンド"
                                menus={
                                    [
                                        {
                                            image: Img9,
                                            name: "PHP"
                                        },
                                        {
                                            image: Img10,
                                            name: "JAVASCRIPT"
                                        },
                                        {
                                            image: Img11,
                                            name: "Laravel"
                                        },
                                        {
                                            image: Img12,
                                            name: "Node Js"
                                        },
                                        {
                                            image: Img13,
                                            name: "Django"
                                        },
                                        {
                                            image: Img14,
                                            name: "python"
                                        },
                                    ]
                                }
                            />
                        </div>
                        <div ref={ref3}>
                            <TechnologyCard
                                title="データベース"
                                menus={
                                    [
                                        {
                                            image: Img15,
                                            name: "AWS"
                                        },
                                        {
                                            image: Img16,
                                            name: "GCP"
                                        },
                                        {
                                            image: Img17,
                                            name: "Docker"
                                        },
                                        {
                                            image: Img18,
                                            name: "MongoDB"
                                        },
                                        {
                                            image: Img19,
                                            name: "AZURE"
                                        },
                                        {
                                            image: Img20,
                                            name: "DIGITAL OCEAN"
                                        },
                                        {
                                            image: Img21,
                                            name: "POSTGRESQL"
                                        },
                                        {
                                            image: Img22,
                                            name: "CPANEL"
                                        },
                                    ]
                                }
                            />
                        </div>
                        <div ref={ref4} className="w-full lg:w-auto">
                            <TechnologyCard
                                title="モバイル"
                                menus={
                                    [
                                        {
                                            image: Img5,
                                            name: "REACT NATIVE"
                                        },
                                        {
                                            image: Img23,
                                            name: "FLUTTER"
                                        },
                                    ]
                                }
                            />
                        </div>
                    </div>
                    
                </div>
            </div>
            
        </div>
    );
}

export default Technology;
