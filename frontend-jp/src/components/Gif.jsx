import NiLoop from "../../public/images/Ni-loop.gif";
import Hand from "../../public/images/hand.png";
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types"

const Gif = ({ round = false }) => {

	const buttonRef = useRef(null);
	const contentRefs = useRef([]);
	const moveMagnetRef = useRef(null);

	useEffect(() => {
		const button = buttonRef.current;
		const contentElements = contentRefs.current;
		const strength = 120; // Increased base strength for more noticeable effect

		const moveMagnet = (event) => {
			const bounding = button.getBoundingClientRect();
			const magnetsStrength = parseFloat(button.getAttribute("data-magnetic-value")) || 0.3;

			// Calculate movement values
			const x = ((event.clientX - bounding.left) / button.offsetWidth - 0.5) * strength * magnetsStrength;
			const y = ((event.clientY - bounding.top) / button.offsetHeight - 0.5) * strength * magnetsStrength;

			// Move the entire button
			gsap.to(button, 1.5, {
				x: x,
				y: y,
				ease: 'Power4.easeOut'
			});

			// Add additional movement to inner elements for enhanced effect
			contentElements.forEach((el, index) => {
				if (el) {
					const elementStrength = index === 0 ? 1.2 : 1; // Make image move slightly more
					gsap.to(el, 1.5, {
						x: x * elementStrength,
						y: y * elementStrength,
						ease: 'Power4.easeOut'
					});
				}
			});
		};

		const resetMagnet = () => {
			gsap.to(button, 1.5, {
				x: 0,
				y: 0,
				ease: 'Elastic.easeOut'
			});
			contentElements.forEach(el => {
				if (el) {
					gsap.to(el, 1.5, {
						x: 0,
						y: 0,
						ease: 'Elastic.easeOut'
					});
				}
			});
		};

		moveMagnetRef.current = moveMagnet;

		if (window.innerWidth > 540 && button) {
			button.addEventListener('mousemove', moveMagnetRef.current);
			button.addEventListener('mouseleave', resetMagnet);
		}

		return () => {
			if (button) {
				button.removeEventListener('mousemove', moveMagnetRef.current);
				button.removeEventListener('mouseleave', resetMagnet);
			}
		};
	}, []);

	const addContentRef = (el) => {
		if (el && !contentRefs.current.includes(el)) {
			contentRefs.current.push(el);
		}
	};

	return (
		// <div className={`gif-section bg-cover bg-center w-full h-[500px] lg:h-screen bg-no-repeat relative ${round ? 'rounded-b-[40px] lg:rounded-b-[80px]' : ''}`}>
		// 	<div className="rotate absolute">
		// 		<img src={NiLoop} alt="" />
		// 	</div>
		// 	<div ref={buttonRef} data-magnetic-value="0.5" className="magnetic-button consult-free cursor-default absolute">
		// 		<div className="flex gap-3 md:gap-x-4 lg:gap-x-6 xl:gap-x-8 justify-center items-center">
		// 			<img ref={addContentRef} src={Hand} alt="Hand pointing" className="w-[48px] md:w-[64px] lg:w-[70px] xl:w-[85px]" />
		// 			<Link ref={addContentRef} to="/contact" className="text-[28px] text-nowrap md:text-[35px] lg:text-[46px] uppercase font-semibold leading-[52.67px] tracking-[-2%]">
		// 				consult free
		// 			</Link>
		// 		</div>
		// 	</div>

		// </div>

		<div className={`gif-section bg-cover bg-center w-full h-[500px] lg:h-screen bg-no-repeat relative ${round ? 'rounded-b-[40px] lg:rounded-b-[80px]' : ''}`}>
			<div className="rotate absolute">
				<img src={NiLoop} alt="" />
			</div>
			<div ref={buttonRef} data-magnetic-value="0.5" className="magnetic-button consult-free cursor-default absolute">
				<div className="flex gap-3 md:gap-x-4 lg:gap-x-6 justify-center items-center">
					<img ref={addContentRef} src={Hand} alt="Hand pointing" className="w-[48px] md:w-[64px] lg:w-[70px]" />
					<Link to="/contact" ref={addContentRef} className="text-[28px] text-nowrap md:text-[35px] lg:text-[40px] xl:text-[46px] leading-[52px] tracking-[-2%] uppercase font-semibold">
						consult free
					</Link>
				</div>
			</div>
		</div>
	)
}

Gif.propTypes = {
	round: PropTypes.bool,
}

export default Gif