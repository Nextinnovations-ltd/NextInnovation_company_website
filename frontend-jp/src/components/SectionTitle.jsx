import {PropTypes} from "prop-types"
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SectionTitle = ({jp,eng='',jpcolor='text-[#575757]'}) => {

    const titleRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            titleRef.current,
            { y: -50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: "top 50%",
                },
            }
        );
    }, []);

    return (
        <>
            <div className="overflow-hidden">
                <div ref={titleRef}>
                    <div className={`flex items-center text-[16px] font-medium leading-[31px] tracking-[0%] ${jpcolor}`}>(
                        <div className="w-2 h-2 rounded-full bg-[#096FCA] ms-1 me-2"></div>
                        {jp} )
                    </div>
                    {!!eng && (
                        <h1 className="roboto text-[58px] font-bold leading-[67px] tracking-[-1%] uppercase mt-[10px]">{eng}</h1>
                    )}
                </div>
            </div>
        </>
    )
}

SectionTitle.propTypes = {
    jp: PropTypes.string.isRequired,
    eng: PropTypes.string.isRequired,
    jpcolor: PropTypes.string.isRequired,
}

export default SectionTitle