import { useEffect } from "react";
import { gsap } from "gsap"

const useHeroRotate = ({ visible = true } = {}) => {
    useEffect(() => {
		gsap.fromTo(
			"#hero-rotate",
			{ scale: 0, opacity: 0 },
			visible
				? 
				{ scale: 1, opacity: 1, duration: 1, ease: "back.out(1.7)" } 
				: { scale: 0, opacity: 0, duration: 0, ease: "back.out(1.7)" }
		);
	},[visible]);
}

export default useHeroRotate;
