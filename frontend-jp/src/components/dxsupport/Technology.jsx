import { useRef } from "react"
import useSectionTitleAnimation from "../../hooks/useSectionTitleAnimation"
import SectionTitle from "../SectionTitle"
import Img1 from "/images/svg/react.svg"
import Img2 from "/images/svg/vue.svg"
import Img3 from "/images/svg/tailwind.svg"
import Img4 from "/images/svg/bootstrap.svg"
import Img5 from "/images/svg/flutter.svg"
import Img6 from "/images/svg/wordpress.svg"
import Img7 from "/images/svg/php.svg"
import Img8 from "/images/svg/laravel.svg"
import Img9 from "/images/svg/python.svg"
import Img10 from "/images/svg/django.svg"
import Img11 from "/images/svg/js.svg"
import Img12 from "/images/svg/nodejs.svg"
import Img13 from "/images/svg/aws.svg"
import Img14 from "/images/svg/azure.svg"
import Img15 from "/images/svg/digital-ocean.svg"
import Img16 from "/images/svg/cpanel.svg"
import Img17 from "/images/svg/docker.svg"
import Img18 from "/images/svg/mysql.svg"
import Img19 from "/images/svg/postgresql.svg"
import Img20 from "/images/svg/mongodb.svg"
import Img21 from "/images/svg/adobe.svg"
import Img22 from "/images/svg/pr.svg"
import Img23 from "/images/svg/ps.svg"
import Img24 from "/images/svg/ai.svg"
import Img25 from "/images/svg/id.svg"
import Img26 from "/images/svg/lightroom.svg"
import Img27 from "/images/svg/figma.svg"
import Img28 from "/images/svg/canva.svg"
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
            <div className="max-w-[1366px] mx-auto py-[80px] lg:py-[140px] px-6 xl:px-[120px]">
                <div className="overflow-hidden">
                    <div ref={titleRef}>
                        <SectionTitle jp="技術スタックと利用可能なツール" eng="Technology Stack & Tools" jpcolor="text-white" engcolor="text-white" />
                    </div>
                </div>
                <div className="mt-[60px]">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-[36px] overflow-hidden lg:overflow-visible">
                        <div ref={ref1}>
                            <TechnologyCard
                                title="フロントエンド"
                                menus={
                                    [
                                        {
                                            image: Img1,
                                            name: "React"
                                        },
                                        {
                                            image: Img2,
                                            name: "Vue"
                                        },
                                        {
                                            image: Img3,
                                            name: "Tailwind"
                                        },
                                        {
                                            image: Img4,
                                            name: "Bootstrap"
                                        },
                                        {
                                            image: Img1,
                                            name: "REACT Native"
                                        },
                                        {
                                            image: Img5,
                                            name: "Flutter"
                                        },
                                        {
                                            image: Img6,
                                            name: "Wordpress"
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
                                            image: Img7,
                                            name: "PHP"
                                        },
                                        {
                                            image: Img8,
                                            name: "Laravel"
                                        },
                                        {
                                            image: Img9,
                                            name: "Python"
                                        },
                                        {
                                            image: Img10,
                                            name: "Django"
                                        },
                                        {
                                            image: Img11,
                                            name: "Javascript"
                                        },
                                        {
                                            image: Img12,
                                            name: "Node js"
                                        },
                                    ]
                                }
                            />
                        </div>
                        <div ref={ref3}>
                            <TechnologyCard
                                title="サーバーサイド"
                                menus={
                                    [
                                        {
                                            image: Img13,
                                            name: "AWS"
                                        },
                                        {
                                            image: Img14,
                                            name: "Azure"
                                        },
                                        {
                                            image: Img15,
                                            name: "Digital Ocean"
                                        },
                                        {
                                            image: Img16,
                                            name: "Cpanel"
                                        },
                                        {
                                            image: Img17,
                                            name: "Docker"
                                        },
                                        {
                                            image: Img18,
                                            name: "Mysql"
                                        },
                                        {
                                            image: Img19,
                                            name: "POSTGRESQL"
                                        },
                                        {
                                            image: Img20,
                                            name: "MongoDb"
                                        },
                                    ]
                                }
                            />
                        </div>
                        <div ref={ref4} className="w-full lg:w-auto">
                            <TechnologyCard
                                title="デザイン"
                                menus={
                                    [
                                        {
                                            image: Img21,
                                            name: "adobe"
                                        },
                                        {
                                            image: Img22,
                                            name: "PREMIERE PRO"
                                        },
                                        {
                                            image: Img23,
                                            name: "photoshop"
                                        },
                                        {
                                            image: Img24,
                                            name: "illustrator"
                                        },
                                        {
                                            image: Img25,
                                            name: "indesign"
                                        },
                                        {
                                            image: Img26,
                                            name: "lightroom"
                                        },
                                        {
                                            image: Img27,
                                            name: "figma"
                                        },
                                        {
                                            image: Img28,
                                            name: "canva"
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
