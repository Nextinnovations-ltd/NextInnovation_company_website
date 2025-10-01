import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { Link } from "react-router-dom";
import "./Home.css";
import PowerFullProduct from "/images/powerful-product.png";
import marqueeLogo1 from "/images/Group-logo.png";
import marqueeLogo2 from "/images/Screenshot (117) 1.png";
import marqueeLogo3 from "/images/glambar 1.png";
import marqueeLogo4 from "/images/trustmyanmarpartners 1.png";
import marqueeGradientLeft from "/images/Rectangle 4681.png";
import marqueeGradientRight from "/images/Rectangle 4682.png";
import Gif from "../../components/Gif"
import Hero from "../../components/Hero";
import LetWorkTogether from "../../components/LetWorkTogether";
import OurService from "../../components/OurService";
import sliderImg3 from "/images/slider1.png"
import sliderImg4 from "/images/slider2.png"
import HomeCareer from '../../components/HomeCareer';
import useVisiter from '../../hooks/useVisiter';
import GoButton from '../../components/GoButton';
import WhatWeDo from '../../components/WhatWeDo';
import CaseStudy from '../../components/eor/CaseStudy';
import SectionTitle from '../../components/SectionTitle';
import FAQ from '../../components/FAQ';
import Media from '../../components/Media';
import useSectionTitleAnimation from '../../hooks/useSectionTitleAnimation';
import useGoButtonAnimation from '../../hooks/useGoButtonAnimation';
import HeroMobile from '../../components/HeroMobile';
import SliderMobile from '../../components/SliderMobile';
import CsImg1 from "/images/eor-cs1.png"
import CsImg2 from "/images/eor-cs2.png"
import CsImg3 from "/images/eor-cs3.png"

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Home = () => {
	const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
	const trustClientTitleRef = useRef(null)
	const ourProductTitleRef = useRef(null)
	const goButtonRef1 = useRef(null)
	const goButtonRef2 = useRef(null)
	const goButtonRef3 = useRef(null)

	const caseStudy = [
		{
			image: CsImg1,
			title: "小規模web開発を短納期で構築実現",
			text1: "スタートアップ",
			text2: "UI/UXデザイン、受託開発"
		},
		{
			image: CsImg2,
			title: "SaaSダッシュボードUI刷新で利用率向上",
			text1: "スタートアップ",
			text2: "UI/UXデザイン"
		},
		{
			image: CsImg3,
			title: "伝統的なECサイトをSHOPIFYでリニュアル",
			text1: "小売",
			text2: "UI/UXデザイン、受託開発"
		},
	];

	useVisiter('home');
	useSectionTitleAnimation(trustClientTitleRef, { start: "top+=300 top" })
	useSectionTitleAnimation(ourProductTitleRef, { start: "top+=300 top" })
	useGoButtonAnimation(goButtonRef1, { start: "top 90%" })
	useGoButtonAnimation(goButtonRef2, { start: "top 90%" })
	useGoButtonAnimation(goButtonRef3, { start: "top+=300 top" })

	/* TEXT AND LINE ANIMATION */
	const textRefs = useRef([]);
	const addToRefs = (el) => {
		if (el && !textRefs.current.includes(el)) {
			textRefs.current.push(el);
		}
	};

	useEffect(() => {

		// Create array to store all timelines for cleanup
		const allTimelines = [];

		// 1. TEXT ANIMATIONS (improved version)
		textRefs.current.forEach((textElement) => {
			if (!textElement) return;

			// Skip if already animated (in case this runs multiple times)
			if (textElement.classList.contains('has-animated')) return;
			textElement.classList.add('has-animated');

			// Preserve original HTML structure but wrap lines
			const lines = textElement.innerHTML.split('<br>');
			textElement.innerHTML = lines.map(line =>
				line.trim() ? `<div class="line-container"><div class="line">${line}</div></div>` : '<br>'
			).join('');

			const containers = textElement.querySelectorAll('.line-container');
			const lineElements = textElement.querySelectorAll('.line');

			// Set initial state
			gsap.set(containers, {
				height: 0,
				overflow: 'hidden'
			});

			gsap.set(lineElements, {
				y: '100%',
				opacity: 0
			});

			// Create timeline with more reliable ScrollTrigger
			const textTl = gsap.timeline({
				scrollTrigger: {
					trigger: textElement,
					start: "top -20%", // Adjusted to trigger when element enters viewport
					end: "bottom 20%",
					toggleActions: "play none none none",
					markers: false, // Set to true for debugging
					once: true // Ensure it only animates once
				}
			});

			containers.forEach((container, i) => {
				const line = container.querySelector('.line');
				if (!line.textContent.trim()) return; // Skip empty lines

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
					}, i * 0.2); // Simplified stagger timing
			});

			allTimelines.push(textTl);
		});

		// Refresh ScrollTriggers after setup to ensure they detect properly
		setTimeout(() => {
			ScrollTrigger.refresh();
		}, 500);

		// 2. SECTION ::BEFORE ANIMATION (your new animation)
		const sections = document.querySelectorAll('.work-blogs-section .work,.home .our-powerful-product .main-left');

		sections.forEach(section => {
			const sectionTl = gsap.timeline({
				scrollTrigger: {
					trigger: section,
					start: "bottom 0%",
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
		/* TEXT AND LINE ANIMATION */

		/*SCROLL PARALLAX ANIMATION  */

		// Initialize animations when component mounts
		const init = () => {
			gsap.set(".stage", { autoAlpha: 1 });
			initSlides();
			initParallax();
		};

		const initSlides = () => {

			// First, verify elements exist
			const slides = document.querySelectorAll(".slide");
			if (!slides.length) {
				console.warn("No .slide elements found");
				return;
			}

			slides.forEach((slide, i) => {
				// Verify child elements exist before animating
				const title = slide.querySelector(".col__content-title");
				const lines = slide.querySelectorAll(".line__inner");
				const content = slide.querySelectorAll(".col__content-txt");
				// const links = slide.querySelectorAll(".slide-link");


				// Set initial visible state before hiding for animation
				gsap.set([title, lines, content], {
					opacity: 1,
					y: 0,
					x: 0
				});

				let tl = gsap.timeline({
					scrollTrigger: {
						trigger: slide,
						start: "top 75%",

					},
				});

				// Simplified animations with better defaults
				if (title) {
					tl.from(title, {
						y: 100,
						opacity: 0,
						duration: 1,
						ease: "power2.out",
					});
				}

				if (lines.length) {
					tl.from(lines, {
						y: 100,
						opacity: 0,
						duration: 0.6,
						stagger: 0.1,
						ease: "power2.out",
					}, "-=0.5"); // Overlap with previous animation
				}

				if (content.length) {
					tl.from(content, {
						x: 50,
						opacity: 0,
						duration: 0.8,
						stagger: 0.05,
						ease: "power2.out",
					}, "-=0.3");
				}
			});
		};

		const initParallax = () => {
			const slides = document.querySelectorAll(".slide");

			slides.forEach((slide, i) => {
				let imageWrappers = slide.querySelectorAll(".col__image-wrap");

				gsap.fromTo(
					imageWrappers,
					{ y: "-50vh" },
					{
						y: "50vh",
						scrollTrigger: {
							trigger: slide,
							scrub: true,
							start: "top bottom",
							snap: {
								snapTo: 0.1,
								duration: 1,
								ease: "power4.inOut",
							},
						},
						ease: "none",
					}
				);
			});
		};
		init();
		/*SCROLL PARALLAX ANIMATION  */

		/* BLOCK REVEAL // BLOG REVEAL  */

		// Initialize all reveal elements
		const reveals = document.querySelectorAll('.blockReveal');

		// Set initial state
		gsap.set('.blockReveal', {
			yPercent: 100,  // Start 100% below (fully hidden)
			opacity: 0,
			scale: 1.2      // Optional: slight zoom effect
		});

		reveals.forEach(img => {
			gsap.to(img, {
				yPercent: 0,   // Animate to normal position
				opacity: 1,
				scale: 1,
				duration: 1.5,
				ease: "power3.out",
				scrollTrigger: {
					trigger: img,
					start: "top 40%",  // When top of image hits 80% of viewport
					// Animation completes by 30%
					toggleActions: "play none none none",
					markers: false     // Set to true for debugging positions
				}
			});
		});


		return () => {
			allTimelines.forEach(tl => tl.kill());

			// Cleanup
			ScrollTrigger.getAll().forEach(trigger => trigger.kill());
			gsap.killTweensOf('.blockReveal');
		};
	}, []);

	return (
		<div className="home">
			<div className="hidden md:block">
				<Hero />
			</div>
			<div className="block md:hidden">
				<HeroMobile />
			</div>

			{/* Slider Section */}
			<div className="stage text-white hidden md:block">
				<section className="slide slide--4" id="slide-4">
					<div className="col col--1">
						<div className="col__content col__content--4">
							<h2 className="col__content-title">
								<span className="line__inner text-[24px] font-bold leading-[44px] tracking-[-2%]">EOR/ 海外人材雇用代行</span>
							</h2>
							<p className="col__content-txt w-[477px] text-[14px] font-normal leading-[31px] tracking-[0%] mt-[18px] mb-[40px]">
								現地法人を設立せずに、東南アジアの優秀な人材を
								採用可能。最短1ヶ月で稼働を開始でき、給与支払い
								や法務手続きもすべて代行。独自の安心ラボ型・
								伴走型プランにより、採用からチームビルディング、
								人材定着、教育、成果創出まで、海外人材活用と
								チーム化を一気通貫でサポートします。
							</p>
							<div className="h-[68px] overflow-hidden">
								<div ref={goButtonRef1}>
									<GoButton name="詳しく見る" link="/eor" />
								</div>
							</div>
						</div>
					</div>
					<div className="col col--2">
						<div className="col__image-wrap" >
							<img
								className="img img--1"
								src={sliderImg3}
								alt="EOR"
							/>
						</div>
					</div>
				</section>
				<section className="slide slide--2 rounded-b-[80px]" id="slide-2">
					<div className="col col--1">
						<div className="col__content col__content--2">
							<h2 className="col__content-title">
								<span className="line__inner text-[24px] font-bold leading-[44px] tracking-[-2%]">DX支援 / 受託開発<br/>・UI/UXデザイン</span>
							</h2>
							<p className="col__content-txt w-[477px] text-[14px] font-normal leading-[31px] tracking-[0%] mt-[18px] mb-[40px]">
								日本案件経験豊富なエンジニアとデザイナーが
								在籍。Figmaを用いた最新UI/UX設計から、Web
								開発、クロスプラットフォーム開発など一貫対応。
								EORと組み合わせれば、採用・開発・デザインを
								ワンストップで実現し、企業のDX推進とチームの
								成長を強力にバックアップします。
							</p>
							<div className="h-[68px] overflow-hidden">
								<div ref={goButtonRef2}>
									<GoButton name="詳しく見る" link="/dx-support" />
								</div>
							</div>
						</div>
					</div>
					<div className="col col--2">
						<div className="col__image-wrap">
							<img
								className="img img--1"
								src={sliderImg4}
								alt="EOR"
							/>
						</div>
					</div>
				</section>
			</div>
			<div className="block md:hidden">
				<SliderMobile />
			</div>

			<LetWorkTogether />

			<WhatWeDo />

			<OurService />

			<CaseStudy caseStudy={caseStudy} />

			<div className="bg-[#1E2C44]">
				<div className="trusted-clients-section pt-[73px] lg:pt-[147px] pb-[36px] lg:pb-[180px] bg-white overflow-hidden flex flex-col gap-[46px] lg:gap-y-20 px-[24px] xl:px-0 rounded-b-[40px] lg:rounded-b-[80px]">
					<div className="w-[1126px] mx-auto">
						<div className="overflow-hidden">
							<div ref={trustClientTitleRef}>
								<SectionTitle jp="取引先/パートナー一覧" />
							</div>
						</div>
						<h1 ref={addToRefs} className="mt-[10px] roboto">
							trusted Clients<span>50+</span>
						</h1>
					</div>
					<div className="marquee-logo-container max-w-[1400px] mx-auto ">
						<div className="marquee-animation flex items-center justify-between gap-24">
							<img src={marqueeLogo1} alt="" />
							<div className="logo-divider"></div>
							<img src={marqueeLogo2} alt="" />
							<div className="logo-divider"></div>
							<img src={marqueeLogo3} alt="" />
							<div className="logo-divider"></div>
							<img src={marqueeLogo4} alt="" />
							<div className="logo-divider"></div>
							<img src={marqueeLogo1} alt="" />
							<div className="logo-divider"></div>
							<img src={marqueeLogo2} alt="" />
							<div className="logo-divider"></div>
							<img src={marqueeLogo3} alt="" />
							<div className="logo-divider"></div>
							<img src={marqueeLogo4} alt="" />
							<div className="logo-divider"></div>
						</div>
						<img src={marqueeGradientLeft} alt="" className="coverLeft hidden lg:block" />
						<img src={marqueeGradientRight} alt="" className="coverRight hidden lg:block" />
					</div>
				</div>
			</div>

			{/* start our powerful section */}
			<div className="bg-white">
				<div className="our-powerful-product-section w-full pt-[70px] lg:pt-[100px] pb-[103px] lg:pb-[216px] rounded-b-[40px] lg:rounded-b-[80px] px-6 lg:px-0">
					<div className="our-powerful-product mx-auto lg:pl-[63px]">
						<div className="overflow-hidden lg:hidden">
							<div ref={ourProductTitleRef}>
								<SectionTitle jp="プロダクト" eng="OUR PRODUCT" jpcolor="text-white" engcolor="text-white" />
							</div>
						</div>
						<div className="flex flex-col-reverse lg:flex-row lg:gap-[55px]">
							<div className="lg:w-[483px]">
								<div className="overflow-hidden hidden lg:block">
									<div ref={ourProductTitleRef}>
										<SectionTitle jp="プロダクト" eng="OUR PRODUCT" jpcolor="text-white" engcolor="text-white" />
									</div>
								</div>
								<div className="main-left mt-[50px]">
									<h3 ref={addToRefs} className="roboto text-[24px] md:text-[38px] xl:text-[48px] font-normal mb-6 xl:mb-8 lg:pt-[64px]">
										Talent Cloud
									</h3>
									<span ref={addToRefs} className="text-[14px] md:text-[21px] xl:text-[18px] font-normal leading-[34px] tracking-[0%]">
										Talent Cloudは、ミャンマーの優秀なエンジニア・専門人材と、海外企業をつなぐことを目的とした
										クラウド型人材プラットフォームです。
										「グローバルに活躍したい個人」と「信頼できる海外人材を確保したい企業」、双方のニーズをスムーズに結びつけることを使命としています。
									</span>
									<div className="mt-[48px] lg:mt-[60px] h-[68px] overflow-hidden">
										<div ref={goButtonRef3}>
											<GoButton name="β版を見てみる" link="http://staging.talent-cloud.asia/emp/lp" target="_blank" />
										</div>
									</div>
								</div>
							</div>
							<div className="w-full mt-[26px] lg:mt-0 border-t-[2px] lg:border-t-0 pt-[70px] lg:pt-0 border-[#EDEDED] lg:w-[728px] relative">
								<div className="image-container rounded-l-[16px] overflow-hidden">
									<img src={PowerFullProduct} alt="" className="blockReveal w-full" />
								</div>
								<Link to="http://staging.talent-cloud.asia/emp/lp" target="_blank" className="coming-soon absolute md:text-2xl uppercase font-normal px-6 py-4 rounded-lg">
									Coming Soon
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* end our powerful section */}

			<HomeCareer />

			<Media />

			<FAQ
				faqData={
					[
						{
							question: "ミャンマーにおける当社のEORサービスを利用する利点は何ですか？",
							subTitles: ["特典には以下が含まれます："],
							answers: [
								"現地法人を設立せずに迅速な採用を行う。",
								"現地の労働法および規制への完全な遵守。",
								"コスト効率の良い、熟練した現地人材へのアクセス。",
								"法的リスク及び業務上のリスクの軽減。",
							],
						},
						{
							question: "ミャンマーの電力課題にどう対処していますか？",
							subTitles: [],
							answers: ["当社は必要に応じて電力に関する必要なサポートを提供します。"],
						},
						{
							question: "従業員の採用と管理をどのように行っていますか？",
							subTitles: ["当社は次の行動に包括的しています："],
							answers: [
								"バックグラウンドチェックの実施と資格の検証。",
								"onboarding（入社手続き）の円滑化。",
								"給与、福利厚生、書類の管理。",
								"継続的な人事支援と業績評価を提供する。",
							],
						},
						{
							question: "職場の課題に関して、従業員にはどのような支援がありますか？",
							subTitles: ["当社は次の点を提供しています："],
							answers: [
								"定期的なチェックインとフィードバック",
								"抵触解決と職場の課題に対する支援",
								"キャリア開発の機会に関するガイダンス",
							],
						},
						{
							question: "どのような人事サービスを提供していますか？",
							subTitles: ["当社は次の点を含むエンドツーエンドの人事管理を扱っています："],
							answers: [
								"従業員の onboarding（入社手続き）と offboarding（退職手続き）",
								"契約書作成（ミャンマー労働法に準拠）",
								"休暇管理と出勤状況の追跡",
								"業績の監視と抵触解決",
								"従業員の雇用と福利厚生の調整",
							],
						},
					]
				}
			/>

			<Gif round />

		</div>
	);
}

export default Home;














