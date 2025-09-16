import { useEffect } from "react";
import { gsap } from "gsap"

const useHorizontalAnimation = (ref, options = {},value = 150) => {
    useEffect(() => {
        gsap.fromTo(
            ref.current,
            { x: value, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ref.current,
                    start: "top 60%",
                    ...options,
                },
            }
        );
    }, [ref,options,value]);
}

export default useHorizontalAnimation;
