import { gsap } from "gsap"
import { useEffect } from "react";

const useServiceHeroAnimation = (ref1,ref2,ref3) => {
    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();
            tl.fromTo(
                ref1.current,
                { y: 100, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" }
            )
            .fromTo(
                ref2.current,
                { y: -100, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" },
                "-=0.1"
            )
            .fromTo(
                ref3.current,
                { y: -100, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" },
                "-=0.1"
            )
        });
        return () => ctx.revert();
    }, [ref1,ref2,ref3]);
}

export default useServiceHeroAnimation;
