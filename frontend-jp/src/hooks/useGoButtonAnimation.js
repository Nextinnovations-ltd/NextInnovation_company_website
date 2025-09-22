import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useGoButtonAnimation = (ref, options = {},time = 0.5) => {
    useEffect(() => {
        if (!ref.current) return;
        gsap.fromTo(
            ref.current,
            { y: 150, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: time,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ref.current,
                    start: "top 90%",
                    ...options,
                },
            }
        );
    }, [ref, options,time]);
}

export default useGoButtonAnimation;
