import { gsap } from "gsap"
import { useEffect } from "react";

const useServiceHeroAnimation = (ref1,ref2,ref3,ref4="") => {
    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();
            tl.fromTo(
                ref1.current,
                { y: 100, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" }
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
            .fromTo(
                ref4.current,
                { y: -100, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" },
                "-=0.1"
            )
            .fromTo(
                "#hero-rotate",
                { scale: 0, opacity: 0 },
                { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" },
                "<"
            );
        });
        return () => ctx.revert();
    }, [ref1,ref2,ref3,ref4]);
}

export default useServiceHeroAnimation;
