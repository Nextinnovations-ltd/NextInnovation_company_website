import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {PropTypes} from "prop-types";
import RightArrow from "./svg/RightArrow";

gsap.registerPlugin(ScrollTrigger);

const GoButton = ({name}) => {

    const buttonRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            buttonRef.current,
            { y: 150, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.5,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: buttonRef.current,
                    start: "top 90%",
                },
            }
        );
    }, []);

    return (
        <div className="h-[68px] overflow-hidden">
            <button ref={buttonRef} className="w-[254px] h-[68px] px-[30px] rounded-[40px] text-[16px] font-bold leading-[20px] tracking-[0%] text-white bg-[#F15A29]">
                <div className="flex justify-between items-end">
                    {name}
                    <RightArrow/>
                </div>                
            </button>
        </div>
    )
}

GoButton.propTypes = {
    name: PropTypes.string.isRequired,
}

export default GoButton