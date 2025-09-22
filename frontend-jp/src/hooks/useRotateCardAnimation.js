import { useEffect } from "react";
import { gsap } from "gsap"

const useRotateCardAnimation = (ref, options = {}, xValue = -300, deg = -45, time = 1.5) => {
    useEffect(() => {
        if (!ref.current) return;
        gsap.fromTo(
            ref.current,
            { x: xValue, rotate: deg, opacity: 0 },
            {
                x: 0,
                rotate: 0,
                opacity: 1,
                duration: time,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ref.current,
                    start: "top+=300 top",
                    ...options,
                },
            }
        );
    },[ref,options,xValue,deg,time])
}

export default useRotateCardAnimation;
