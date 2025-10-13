import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GoButton from './GoButton';
import UseGoButtonAnimation from '../hooks/useGoButtonAnimation';
import VisionIcon from '/images/vision.svg'
import MissionIcon from '/images/mission.svg'

const LetWorkTogether = () => {

	const goButtonRef = useRef(null)
	UseGoButtonAnimation(goButtonRef, { start: "top 50%" })

	// Register ScrollTrigger plugin
	gsap.registerPlugin(ScrollTrigger);
	const textRefs = useRef([]  );

	const addToRefs = (el) => {
		if (el && !textRefs.current.includes(el)) {
			textRefs.current.push(el);
		}
	};

	useEffect(() => {
		// Create array to store all timelines for cleanup
		const allTimelines = [];

		// 1. TEXT ANIMATIONS (your existing animation)
		textRefs.current.forEach((textElement) => {
			if (!textElement) return;

			const lines = textElement.innerHTML.split('<br>');
			textElement.innerHTML = lines.map(line =>
				line ? `<div class="line-container"><div class="line">${line}</div></div>` : '<br>'
			).join('');

			const containers = textElement.querySelectorAll('.line-container');
			const lineElements = textElement.querySelectorAll('.line');

			gsap.set(containers, {
				height: 0,
				overflow: 'hidden'
			});

			gsap.set(lineElements, {
				y: '100%',
				opacity: 0
			});

			const textTl = gsap.timeline({
				scrollTrigger: {
					trigger: textElement,
					start: "top 75%",
					toggleActions: "play none none none"
				}
			});

			containers.forEach((container, i) => {
				const line = container.querySelector('.line');
				textTl.to(container, {
					height: 'auto',
					duration: 0.4,
					ease: "power2.out"
				}, i * 0.2)
					.to(line, {
						y: 0,
						opacity: 1,
						duration: 0.6,
						ease: "power2.out"
					}, `-=${i === 0 ? 0 : 0.5}`);
			});

			allTimelines.push(textTl);
		});

		// 2. SECTION ::BEFORE ANIMATION (your new animation)
		const sections = document.querySelectorAll('.home .vision-mission-section .section');

		sections.forEach(section => {
			const sectionTl = gsap.timeline({
				scrollTrigger: {
					trigger: section,
					start: "bottom 60%",
					toggleActions: "play none none none"
				}
			});

			sectionTl.to(section, {
				'--before-width': '100%',
				duration: 1,
				ease: "power2.out"
			});

			allTimelines.push(sectionTl);
		});

		// Cleanup function for all timelines
		return () => {
			allTimelines.forEach(tl => tl.kill());
		};
	}, []);

	// scroll svg path animation
	const pathRef = useRef(null);
	const mobilePathRef = useRef(null);

	useEffect(() => {
		const path = pathRef.current;
		const mobilePath = mobilePathRef.current;
		if (!mobilePath || !path) return;

		const workSection = document.querySelector('#letWorkTogether');
		if (!workSection) return;

		// Initialize path styles
		const pathLength = path.getTotalLength();
		path.style.strokeDasharray = pathLength;
		path.style.strokeDashoffset = pathLength;

		const mobilePathLength = mobilePath.getTotalLength();
		mobilePath.style.strokeDasharray = mobilePathLength;
		mobilePath.style.strokeDashoffset = mobilePathLength;

		// Speed multiplier (higher = faster animation)
		const speedMultiplier = 2.3; // Adjust this value (1 = normal, 2 = 2x faster, etc.)

		const scroll = () => {
			const sectionRect = workSection.getBoundingClientRect();
			const windowHeight = window.innerHeight;
			const sectionHeight = sectionRect.height;

			// Calculate when middle of section reaches middle of viewport
			const sectionMiddle = sectionRect.top + sectionHeight / 2;
			const viewportMiddle = windowHeight / 2;

			if (sectionMiddle <= viewportMiddle) {
				// Calculate progress with speed multiplier
				const scrollPastTrigger = viewportMiddle - sectionMiddle;
				const maxScrollPast = (sectionHeight + windowHeight) / speedMultiplier;
				const scrollProgress = Math.min(scrollPastTrigger / maxScrollPast, 1);

				path.style.strokeDashoffset = pathLength * (1 - scrollProgress);
				mobilePath.style.strokeDashoffset = mobilePathLength * (1 - scrollProgress);
			} else {
				path.style.strokeDashoffset = pathLength;
				mobilePath.style.strokeDashoffset = mobilePathLength;
			}
		};

		scroll();
		window.addEventListener('scroll', scroll);
		return () => window.removeEventListener('scroll', scroll);
	}, []);


	// Empty dependency array means this runs once on mount
	return (
		<div className="bg-white z-0" id='letWorkTogether' >
			<div className="about-us grid grid-cols-1 md:grid-cols-2 gap-[57px] md:gap-0 lg:px-[25px] xl:px-0">
				<div className="title-section">
					<h1 ref={addToRefs} className="roboto text-[#444444] uppercase text-[40px] lg:text-[56px] font-bold leading-[48px] lg:leading-[65px] tracking-[-1%]" style={{ whiteSpace: 'pre-line' }}>
						Beyond Borders, <br />
						Creating<br />
						a New <br />
						<div className="flex gap-3 items-end lg:items-start" >
							Future
							<div className="w-[62px] h-[37px] lg:w-[93px] lg:h-[57px]">
								<svg width="108" height="66" viewBox="0 0 108 66" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M10.9838 66L1.98293 5.98122C0.853241 5.79859 -0.00548113 4.83142 2.63423e-05 3.66997C0.00918093 2.38523 1.0757 1.34882 2.38582 1.35504C3.69493 1.36404 4.74958 2.41216 4.74137 3.69969C4.73588 4.57057 4.24701 5.32272 3.52563 5.71857L12.5321 65.7581L10.9838 66ZM8.5633 30.1278C9.48061 29.0491 19.1498 25.1336 19.9462 25.0726C22.9462 24.8468 25.8575 25.9399 28.1469 27.8203C30.0429 29.3785 31.6614 30.325 33.0868 30.8352C35.7498 31.7807 37.7346 31.1986 39.5629 30.2063C40.6257 29.6314 65.6777 19.7429 69.3149 19.2733C70.7898 19.0834 72.9787 18.8234 73.9234 20.2638C74.8746 21.715 73.7815 23.7446 75.8807 24.5616C77.9606 25.3695 80.6328 24.5292 82.6633 23.9129C85.2696 23.1194 108 12.0165 108 12.0165C108 12.0165 95.4681 15.8805 91.2451 16.8909C80.8299 19.383 79.8421 15.3345 79.7706 14.1488C79.7596 13.9553 79.7724 13.8375 79.7724 13.8375C79.3623 11.7718 77.0782 10.909 75.2354 10.4951C72.0221 9.77713 49.7417 13.3759 46.6435 13.4434C43.4768 13.5154 41.6853 12.7515 40.4165 10.8406C39.0607 8.80007 38.5554 6.36546 37.4486 4.21267C35.0152 -0.523141 29.7292 -0.139892 25.1116 0.158601C18.5422 0.58506 4.95659 5.90229 4.45389 6.1234C4.77431 8.02981 5.09746 9.93356 5.41788 11.8381C5.99921 15.2452 8.46738 29.7302 8.56441 30.1277L8.5633 30.1278Z" fill="#096FCA" />
								</svg>
							</div>
						</div>
					</h1>
				</div>
				<div className="vision-mission-section lg:max-w-[503px] text-[#444444] px-[20.5px] md:px-0">
					<div className="section flex flex-col" >
						<div ref={addToRefs} className="title flex justify-start items-center gap-4">
							<img src={VisionIcon} className="w-[24px] h-[15px] lg:w-[46px] lg:h-[28px] animate-fade" alt="" />
							<h1 className="roboto text-[20px] lg:text-[24px] font-semibold leading-[15.39px] lg:leading-[29.55px] tracking-[-2%] uppercase">(OUR VISION)</h1>
						</div>
						<p ref={addToRefs} className="text-[12px] lg:text-[14px] font-normal leading-[17.71px] lg:leading-[31px] tracking-[0%]">
							東南アジアの優秀な人材と共に、<br />
							日本企業のDXを加速させ、未来の競争力を創出する。<br />
							国境を越えたチームづくりを通じて、持続的な成長を実現します。
						</p>
					</div>
					<div className="section flex flex-col mt-[32px] lg:mt-[60px] mb-[43px] lg:mb-[56px]" >
						<div ref={addToRefs} className="title flex justify-start items-center gap-4">
							<img src={MissionIcon} className="w-[24px] h-[15px] lg:w-[46px] lg:h-[28px] animate-fade" alt="" />
							<h1 className="roboto text-[20px] lg:text-[24px] font-semibold leading-[15.39px] lg:leading-[29.55px] tracking-[-2%] uppercase">(OUR MISSION)</h1>
						</div>
						<p ref={addToRefs} className="text-[12px] lg:text-[14px] font-normal leading-[17.71px] lg:leading-[31px] tracking-[0%]">
							「海外人材活用は難しい・不安」と感じる日本企業
							に、EORをはじめとする最適な仕組みを提供し、採用
							から定着・教育・成果創出までを一気通貫で支援す
							る。誰もがボーダーレスに働ける世界を実現します。
						</p>
					</div>
					<div className="h-[68px] overflow-hidden">
						<div ref={goButtonRef}>
							<GoButton name="私たちについて" link="" />
						</div>
					</div>
				</div>

				<svg className="squiggle hidden lg:block" width="1365" height="730" viewBox="0 0 1365 730" fill="none">
					<path ref={pathRef} d="M0.5 19.5005C90.6667 18.3338 283.5 40 365.5 100.5C467.509 175.764 484.531 280.966 453 371C411.5 489.5 291 508.339 215 465C152.5 429.36 103.872 333.551 164.5 250.5C274 100.501 519 158 611.5 250.5C694.567 333.567 725 479.5 790 515.5C874.475 562.286 982.125 508.074 1017 489.5C1063 465 1140 431.717 1202.5 489.5C1255.5 538.5 1235.5 582.5 1339.5 646.5C1422.7 697.7 1471.5 710.5 1485.5 710.5" stroke="#096FCA" strokeWidth="38" strokeLinejoin="round" strokeLinecap="round" />
				</svg>

				<svg className="md:hidden absolute top-[220px] -right-[50px]" width="503" height="653" viewBox="0 0 503 653" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path ref={mobilePathRef} d="M481.5 11.43C467.5 11.43 432.5 2.46853 385.5 29.4126C337.5 56.9299 329.465 123.072 341 164.43C361.5 237.93 412.395 237.881 458.5 265.931C530 309.43 487 566.43 354.5 622.93C236.378 673.3 68 542.93 9 647.43" stroke="#096FCA" strokeWidth="19" strokeLinejoin="round" strokeLinecap="round" />
				</svg>
			</div>
		</div>
	)
}

export default LetWorkTogether




