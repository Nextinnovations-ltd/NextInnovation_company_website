import { gsap } from "gsap"
import { useEffect } from "react";

const useHeroAnimation = (drivingRef,SouthEastRef,StarRef,TalentRef,ParaRef) => {
    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();
            tl.fromTo(
                drivingRef.current,
                { y: 100, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" }
            )
            .fromTo(
                SouthEastRef.current,
                { y: 100, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" },
                "-=0.1"
            )
            .fromTo(
                StarRef.current,
                { y: 100, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" },
                "-=0.1"
            )
            .fromTo(
                TalentRef.current,
                { y: 100, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" },
                "-=0.1"
            )
            .fromTo(
                ParaRef.current,
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
    }, [drivingRef,SouthEastRef,StarRef,TalentRef,ParaRef]);
}

export default useHeroAnimation;
