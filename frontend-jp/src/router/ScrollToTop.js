import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0 });
        // Fade-in animation using GSAP
        gsap.fromTo(
            ".page-transition",
            { opacity: 0 },
            { opacity: 1, duration: 1.5, ease: "power2.out" }
        );
    }, [pathname]);

    // refresh same page
    useEffect(() => {
        window.onbeforeunload = () => {
            setTimeout(() => {
                window.scrollTo({ top: 0, left: 0 });
            }, 10)
        };
    }, []);

    return null;
};

export default ScrollToTop;
