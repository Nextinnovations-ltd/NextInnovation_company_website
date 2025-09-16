import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useCardAnimation = (containerRef, cardSelector, options = {}, time = 0.8,stagger = 0) => {
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
                    duration: time,
                    // ease: "back.out(1.1)",
                    stagger: stagger,
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top+=400 top",
                        ...options,
                    },
                }
            );
        }, containerRef);
        return () => ctx.revert();
    }, [containerRef, cardSelector, options,time,stagger]);
}

export default useCardAnimation;
