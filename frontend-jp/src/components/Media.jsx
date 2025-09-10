import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import SectionTitle from "./SectionTitle"
import Blog from "/images/blog.png"
import Note from "/images/note.png"
import useSectionTitleAnimation from "../hooks/useSectionTitleAnimation";
import GoButton from "./GoButton";

gsap.registerPlugin(ScrollTrigger);

const Media = () => {

    const titleRef = useRef(null);
    const blogRef = useRef(null);
    const noteRef = useRef(null);
    const svgRef = useRef(null);
    const pathRef = useRef(null);
    useSectionTitleAnimation(titleRef, {start: "top+=300 top"})

    useEffect(() => {
        gsap.fromTo(
            blogRef.current,
            { x: -300, rotate: -45, opacity: 0 },
            {
                x: 0,
                rotate: 0,
                opacity: 1,
                duration: 1.5,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: blogRef.current,
                    start: "top+=300 top",
                },
            }
        );
        gsap.fromTo(
            noteRef.current,
            { x: 300, rotate: 45, opacity: 0 },
            {
                x: 0,
                rotate: 0,
                opacity: 1,
                duration: 1.5,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: noteRef.current,
                    start: "top+=300 top",
                },
            }
        );
    }, []);

    // scroll svg path animation
    useEffect(() => {
        const svg = svgRef.current;
        const path = pathRef.current;
        if (!svg || !path) return;

        const workSection = document.querySelector('#yutasan-section');
        if (!workSection) return;

        // Initialize path styles
        const pathLength = path.getTotalLength();
        path.style.strokeDasharray = pathLength;
        path.style.strokeDashoffset = pathLength;

        // Speed multiplier (higher = faster animation)
        const speedMultiplier = 2;
        // How early to start the animation (in pixels before section reaches top)
        const earlyStartOffset = 300; // Adjust this value as needed

        const scroll = () => {
            const sectionRect = workSection.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const sectionHeight = sectionRect.height;

            // Calculate position relative to viewport with early start offset
            const sectionTopWithOffset = sectionRect.top - earlyStartOffset;
            const viewportTop = 0; // Top of viewport

            if (sectionTopWithOffset <= viewportTop) {
                // Calculate progress with speed multiplier
                const scrollPastTrigger = viewportTop - sectionTopWithOffset;
                const maxScrollPast = (sectionHeight + windowHeight + earlyStartOffset) / speedMultiplier;
                const scrollProgress = Math.min(scrollPastTrigger / maxScrollPast, 1);

                path.style.strokeDashoffset = pathLength * (1 - scrollProgress);
            } else {
                path.style.strokeDashoffset = pathLength;
            }
        };

        scroll();
        window.addEventListener('scroll', scroll);
        return () => window.removeEventListener('scroll', scroll);
    }, []);

    return (
        <div className="bg-[#F7F7F7] z-0" id="yutasan-section">
            <div className="max-w-[1240px] mx-auto pt-[59px] pb-[47px] lg:pt-[140px] lg:pb-[350px] px-6 lg:px-0">
                <div className="overflow-hidden">
                    <div ref={titleRef}>
                        <SectionTitle jp="メディア" eng="Media" />
                    </div>
                </div>
                <div className="flex flex-col gap-[40px] lg:gap-0 lg:flex-row lg:justify-between mt-[50px]">
                    <div ref={blogRef} className="lg:w-[600px] pt-[27px] pb-[15px] ps-[22px] pe-[30px] lg:pt-[50px] lg:pb-[50px] lg:ps-[41px] lg:pe-[57px] bg-[#F15A29] rounded-[12px] text-white shadow-md">
                        <div className="flex justify-between mb-[40px] lg:mb-[100px]">
                            <div>
                                <h3 className="text-[18px] lg:text-[24px] font-bold leading-[120%] tracking-[-1%] mb-[18px] lg:mb-[24px]">ミャンマー人材<br className="lg:hidden"/>活用ナビ</h3>
                                <p className="text-[12px] lg:text-[15px] w-[130px] lg:w-full font-normal leading-[20px] lg:leading-[24px] tracking-[0%]">採用・EOR・リモート開発の最新情報<br className="hidden lg:block" />をお届けしています。</p>
                            </div>
                            <div className="w-[130px] lg:w-[200px]">
                                <img src={Blog} alt="" />
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <GoButton name="詳しく見る" bgColor="bg-[#444444]" />
                        </div>
                    </div>
                    <div ref={noteRef} className="lg:w-[600px] ps-[22px] pe-[22px] py-6 lg:py-[50px] lg:ps-[41px] lg:pe-[33px] bg-white rounded-[12px] text-white shadow-md z-[20]">
                        <div className="flex flex-col gap-[5px] lg:gap-0 lg:flex-row lg:justify-between mb-6 lg:mb-[36px]">
                            <div className="lg:w-[278px]">
                                <h3 className="text-[#F15A29] text-[18px] lg:text-[24px] font-bold leading-[120%] tracking-[-1%] mb-[10px] lg:mb-[24px]">ミャンマーで生きる<br/>独身IT社長日記</h3>
                                <p className="text-[12px] text-[#444444] lg:text-[15px] font-normal leading-[21px] lg:leading-[24px] tracking-[0%]">
                                    ミャンマー在住11年／ミャンマーにてIT会社を単身起業。右葉曲線ミャンマーで10年以上、人材採用と運用支援に携わってきた経験をもとに、失敗しないコツや「ミャンマーのIT人材事情」「日本企業が活用する方法」などのビジネス話やミャンマーでの生活日記など現地にいるからわかる生の情報を発信しています。
                                </p>
                            </div>
                            <div className="flex justify-center items-center">
                                <img src={Note} alt="" className="w-[107px] lg:w-[210px] shadow-[0_3px_21px_#1E2C441A]" />
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <GoButton name="詳しく見る" />
                        </div>
                    </div>
                </div>
            </div>
            <svg ref={svgRef}  className="squiggle2 hidden md:block"  xmlns="http://www.w3.org/2000/svg" width="1366" height="1068" viewBox="0 0 1366 1068" fill="none">
            <path ref={pathRef}  d="M1379.5 17C1290.33 65.3243 1144.35 178.349 1098.5 276.405C1051 378 1021.5 545.5 1204 596C1334 631.974 1345.19 896.319 1098.5 875C977 864.5 770.009 770.501 654.5 758.5C577.5 750.5 383.291 809.608 301.5 961.064C223.5 1105.5 94 1025.68 -2.5 1036.5" stroke="#096FCA" strokeWidth="38"
            strokeLinejoin="round"
            strokeLinecap="round"  />
            </svg>
        </div>
    )
}

export default Media