import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useCardAnimation = (containerRef, cardSelector, options = {}) => {
    useEffect(() => {
        if (!containerRef.current) return;

        const cards = containerRef.current.querySelectorAll(cardSelector);

        if (!cards.length) return;

        const ctx = gsap.context(() => {
        gsap.fromTo(
            cards,
            { scale: 0.1, opacity: 0 },
            {
            scale: 1,
            opacity: 1,
            duration: 1,
            // ease: "back.out(1.1)",
            stagger: 0.1,
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top+=400 top",
                ...options,
            },
            }
        );
        }, containerRef);

        return () => ctx.revert();
    }, [containerRef, cardSelector, options]);
}

export default useCardAnimation;
