import { useEffect } from "react";
import {gsap} from "gsap";

const useTextSplitAnimation = (textRef,selector,duration = {},options = {}) => {
    useEffect(() => {
        if (!textRef.current) return;
        const chars = textRef.current.querySelectorAll(selector);
        gsap.fromTo(
            chars,
            { opacity: 0, y: 20 },
            {
                opacity: 1,
                y: 0,
                duration: 0.6,
                stagger: 0.004,
                ...duration,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: textRef.current,
                    start: "top 80%",
                    ...options,
                },
            }
        );
    },[textRef,selector,duration,options])
}

export default useTextSplitAnimation;
