import { useEffect } from "react";
import {gsap} from "gsap"

const useLineAnimation = (lineRef,options={}) => {
    useEffect(() => {
        if (!lineRef.current) return;
        gsap.fromTo(
            lineRef.current,
            { width: 0 },
            {
                width: "100%",
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: lineRef.current,
                    start: "top 80%",
                    ...options,
                    toggleActions: "play none none reverse",
                },
            }
        );
    },[lineRef,options])
}

export default useLineAnimation;
