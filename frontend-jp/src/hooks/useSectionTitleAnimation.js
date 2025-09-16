import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useSectionTitleAnimation = (ref, options = {},yValue = -50,time = 0.7) => {
	useEffect(() => {
		if (!ref.current) return;

		gsap.fromTo(
			ref.current,
			{ y: yValue, opacity: 0 },
			{
				y: 0,
				opacity: 1,
				duration: time,
				ease: "power3.out",
				scrollTrigger: {
					trigger: ref.current,
					start: "top+=50 top",
					...options, // allow overriding
				},
			}
		);
	}, [ref, options, yValue, time]);
};

export default useSectionTitleAnimation;
