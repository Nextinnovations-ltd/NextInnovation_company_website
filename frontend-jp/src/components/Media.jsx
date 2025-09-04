import { useEffect, useRef } from "react";
import SectionTitle from "./SectionTitle"
import MediaButton from "./MediaButton"
import Blog from "/images/blog.png"
import Note from "/images/note.png"

const Media = () => {

    const svgRef = useRef(null);
    const pathRef = useRef(null);


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
        <div className="bg-[#F7F7F7] z-0" id="yutasan-section" >
            <div className="max-w-[1240px] mx-auto pt-[140px] pb-[350px]">
                <SectionTitle jp="メディア" eng="Media" />
                <div className="flex justify-between mt-[50px]">
                    <div className="w-[600px] py-[50px] ps-[41px] pe-[57px] bg-[#F15A29] rounded-[12px] text-white shadow-md">
                        <div className="flex justify-between mb-[82px]">
                            <div>
                                <h3 className="text-[24px] font-bold leading-[120%] tracking-[-1%] mb-[24px]">ミャンマー人材活用ナビ</h3>
                                <p className="text-[12px] font-bold leading-[24px] tracking-[0%]">採用・EOR・リモート開発の最新情報<br/>をお届けしています。</p>
                            </div>
                            <div>
                                <img src={Blog} alt="" />
                            </div>
                        </div>
                        <MediaButton bgColor="bg-[#444444]" />
                    </div>
                    <div className="w-[600px] py-[50px] ps-[41px] pe-[57px] bg-white rounded-[12px] text-white shadow-md z-[20]">
                        <div className="flex justify-between mb-[36px]">
                            <div className="w-[278px]">
                                <h3 className="text-[#F15A29] text-[24px] font-bold leading-[120%] tracking-[-1%] mb-[24px]">ミャンマーで生きる<br/>独身IT社長日記</h3>
                                <p className="text-[#444444] text-[12px] font-bold leading-[24px] tracking-[0%]">
                                    ミャンマー在住11年／ミャンマーにてIT会社を単身起業。右葉曲線ミャンマーで10年以上、人材採用と運用支援に携わってきた経験をもとに、失敗しないコツや「ミャンマーのIT人材事情」「日本企業が活用する方法」などのビジネス話やミャンマーでの生活日記など現地にいるからわかる生の情報を発信しています。
                                </p>
                            </div>
                            <div className="flex items-center">
                                <img src={Note} alt="" />
                            </div>
                        </div>
                        <MediaButton bgColor="bg-[#F15A29]" />
                    </div>
                </div>
            </div>
            <svg ref={svgRef}  className="squiggle2"  xmlns="http://www.w3.org/2000/svg" width="1366" height="1068" viewBox="0 0 1366 1068" fill="none">
            <path ref={pathRef}  d="M1379.5 17C1290.33 65.3243 1144.35 178.349 1098.5 276.405C1051 378 1021.5 545.5 1204 596C1334 631.974 1345.19 896.319 1098.5 875C977 864.5 770.009 770.501 654.5 758.5C577.5 750.5 383.291 809.608 301.5 961.064C223.5 1105.5 94 1025.68 -2.5 1036.5" stroke="#096FCA" strokeWidth="38"
            strokeLinejoin="round"
            strokeLinecap="round"  />
            </svg>
        </div>
    )
}

export default Media