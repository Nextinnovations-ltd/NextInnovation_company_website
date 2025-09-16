import { useEffect } from "react";
import {gsap} from "gsap"

const useParagraphAnimation = (containerRef,selector,options = {}) => {
    useEffect(() => {
        if (!containerRef.current) return;
        const paragraphs = containerRef.current.querySelectorAll(selector);
        gsap.fromTo(
            paragraphs,
            { y: 150, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.5,
                ease: "power3.out",
                stagger: 0.3, // animate one by one
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 20%",
                    ...options,
                },
            }
        );
    },[containerRef,selector,options])
}

export default useParagraphAnimation;
