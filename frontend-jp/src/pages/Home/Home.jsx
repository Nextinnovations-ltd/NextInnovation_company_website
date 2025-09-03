import { useEffect,useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { Link } from "react-router-dom";
import "./Home.css";
import PowerFullProduct from "../../../public/images/powerful-product.png";
import marqueeLogo1 from "../../../public/images/Group-logo.png";
import marqueeLogo2 from "../../../public/images/Screenshot (117) 1.png";
import marqueeLogo3 from "../../../public/images/glambar 1.png";
import marqueeLogo4 from "../../../public/images/trustmyanmarpartners 1.png";
import marqueeGradientLeft from "../../../public/images/Rectangle 4681.png";
import marqueeGradientRight from "../../../public/images/Rectangle 4682.png";
import Gif from "../../components/Gif"
import Hero from "../../components/Hero";
import LetWorkTogether from "../../components/LetWorkTogether";
import OurService from "../../components/OurService";
import sliderImg3 from "../../../public/images/eor-slider.png"
import sliderImg4 from "../../../public/images/development-slider.png"
import HomeCareer from '../../components/HomeCareer';
import useVisiter from '../../hooks/useVisiter';
import GoButton from '../../components/GoButton';
import WhatWeDo from '../../components/WhatWeDo';
import CaseStudy from '../../components/CaseStudy';
import SectionTitle from '../../components/SectionTitle';
import Blog from "/images/blog.png"
import Note from "/images/note.png"
import MediaButton from '../../components/MediaButton';
import FAQ from '../../components/FAQ';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);


const Home = () => {
  useVisiter('home');
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
          start: "top -50%", // Adjusted to trigger when element enters viewport
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
                start: "top 90%",
               
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

            // if (links.length) {
            //   tl.from(links, {
            //     x: -50,
            //     opacity: 0,
            //     duration: 0.5,
            //     stagger: 0.05,
            //     ease: "power2.out",
            //   }, "-=0.9");
            // }
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
 
 
 



  //PATH SCROLLING ANIMATION
  const svgRef = useRef(null);
  const pathRef = useRef(null);


  useEffect(() => {
    const svg = svgRef.current;
    const path = pathRef.current;
    if (!svg || !path) return;

    const workSection = document.querySelector('#yutasan-section');
    if (!workSection) return;

    // Initialize path styles
    const pathLength = path.getTotalLength();
    path.style.strokeDasharray = pathLength;
    path.style.strokeDashoffset = pathLength;

    // Speed multiplier (higher = faster animation)
    const speedMultiplier = 2;
    // How early to start the animation (in pixels before section reaches top)
    const earlyStartOffset = 300; // Adjust this value as needed

    const scroll = () => {
      const sectionRect = workSection.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionHeight = sectionRect.height;

      // Calculate position relative to viewport with early start offset
      const sectionTopWithOffset = sectionRect.top - earlyStartOffset;
      const viewportTop = 0; // Top of viewport

      if (sectionTopWithOffset <= viewportTop) {
        // Calculate progress with speed multiplier
        const scrollPastTrigger = viewportTop - sectionTopWithOffset;
        const maxScrollPast = (sectionHeight + windowHeight + earlyStartOffset) / speedMultiplier;
        const scrollProgress = Math.min(scrollPastTrigger / maxScrollPast, 1);

        path.style.strokeDashoffset = pathLength * (1 - scrollProgress);
      } else {
        path.style.strokeDashoffset = pathLength;
      }
    };

    scroll();
    window.addEventListener('scroll', scroll);
    return () => window.removeEventListener('scroll', scroll);
  }, []);
  
  return (
    <div className="home">
      <Hero/>

      {/* Slider Section */}
      <div className="stage bg-[#1E2C44] text-white rounded-b-[80px]">
        <section className="slide slide--4" id="slide-4">
          <div className="col col--1">
            <div className="col__content col__content--4">
              <h2 className="col__content-title">
                <span className="line__inner text-[48px] font-bold leading-[67px] tracking-[-2%]">EOR/ 海外人材雇用代行</span>
              </h2>
              <p className="col__content-txt text-[21px] font-normal leading-[34px] tracking-[0%] mt-[28px] mb-[50px]">
                現地法人を設立せずに、東南アジアの優秀な人材を<br/>
                採用可能。最短1ヶ月で稼働を開始でき、給与支払い<br/>
                や法務手続きもすべて代行。独自の安心ラボ型・<br/>
                伴走型プランにより、採用からチームビルディング、<br/>
                人材定着、教育、成果創出まで、海外人材活用と<br/>
                チーム化を一気通貫でサポートします。
              </p>
              <GoButton name="詳しく見る" />
            </div>
          </div>
          <div className="col col--2">
            <div className="col__image-wrap">
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
                <span className="line__inner text-[48px] font-bold leading-[67px] tracking-[-2%]">DX支援 / 受託開発<br/>・UI/UXデザイン</span>
              </h2>
              <p className="col__content-txt text-[21px] font-normal leading-[34px] tracking-[0%] mt-[28px] mb-[50px]">
                日本案件経験豊富なエンジニアとデザイナーが<br/>
                在籍。Figmaを用いた最新UI/UX設計から、Web<br/>
                開発、クロスプラットフォーム開発など一貫対応。<br/>
                EORと組み合わせれば、採用・開発・デザインを<br/>
                ワンストップで実現し、企業のDX推進とチームの<br/>
                成長を強力にバックアップします。
              </p>
              <GoButton name="詳しく見る" />
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

        {/* <section className="slide slide--2" id="slide-2">
          <div className="col col--1">
            <div className="col__content col__content--2">
              <h2 className="col__content-title">
                <span className="line__inner">Development</span>
              </h2>
              <div className="col__content-wrap">
                <p className="col__content-txt">
                  現地法人を設立せずに、東南アジアの優秀な人材を採用可能。最短1ヶ月で稼働を開始でき、給与支払いや法務手続きもすべて代行。独自の安心ラボ型・
伴走型プランにより、採用からチームビルディング、人材定着、教育、成果創出まで、海外人材活用とチーム化を一気通貫でサポートします。
                </p>
                
              </div>
            </div>
          </div>
          <div className="col col--2">
            <div className="col__image-wrap">
              <img
                className="img img--1"
                src={sliderImg4}
                alt="Development"
              />
            </div>
          </div>
        </section> */}


        
      </div>

      <LetWorkTogether/>

      <WhatWeDo/>

      <OurService/>

      <CaseStudy/>

      <div className="bg-[#1E2C44]">
        <div className="trusted-clients-section pt-[147px] pb-[180px] bg-white overflow-hidden flex flex-col gap-y-20 px-[24px] xl:px-0 rounded-b-[80px]">
          <div ref={addToRefs} className="w-[1240px] mx-auto">
            <SectionTitle jp="取引先/パートナー一覧" />
            <h1 className="mt-[10px] roboto">
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
      <div className="our-powerful-product-section w-full pt-[100px] pb-[216px] rounded-b-[80px]">
        <div className="our-powerful-product mx-auto lg:pl-[63px]">
          <div className="flex gap-[55px]">
            <div className="w-[483px] mx-[25px] xl:mx-0">
              <SectionTitle jp="プロダクト" eng="OUR PRODUCT" jpcolor="text-white" />
              <div className="main-left mt-[50px]">
                <h3  ref={addToRefs} className="roboto text-[24px] md:text-[38px] xl:text-[48px] font-normal pt-[40px] mb-6 xl:mb-8">
                  Talent Cloud
                </h3>
                <span ref={addToRefs}  className="text-[14px] md:text-[21px] xl:text-[18px] font-normal leading-[34px] tracking-[0%]">
                  Talent Cloudは、ミャンマーの優秀なエンジニア・専門人材と、海外企業をつなぐことを目的とした
                  クラウド型人材プラットフォームです。
                  「グローバルに活躍したい個人」と「信頼できる海外人材を確保したい企業」、双方のニーズをスムーズに結びつけることを使命としています。
                </span>
                <div ref={addToRefs} className="mt-[60px]">
                  <GoButton name="詳しく見る" />
                </div>
              </div>
            </div>

            <div className="w-[728px] relative ms-[25px]">
              <div className="image-container rounded-l-[16px] overflow-hidden">
                <img src={PowerFullProduct} alt="" className="rounded-start-2xl blockReveal w-full"/>
              </div>
              <Link to="" className="coming-soon absolute md:text-2xl uppercase font-normal px-6 py-4 rounded-lg">
                Coming Soon
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* end our powerful section */}

      <HomeCareer/>

      {/* start media section */}
      <div className="bg-[#F7F7F7] z-0" id="yutasan-section" >
        <div className="max-w-[1240px] mx-auto pt-[140px] pb-[325px]">
          <div ref={addToRefs}><SectionTitle jp="メディア" eng="Media" /></div>
          <div className="flex justify-between mt-[50px]">
            <div className="w-[600px] py-[50px] ps-[41px] pe-[57px] bg-[#F15A29] rounded-[12px] text-white shadow-md">
              <div className="flex justify-between mb-[82px]">
                <div>
                  <h3 ref={addToRefs} className="text-[24px] font-bold leading-[120%] tracking-[-1%] mb-[24px]">ミャンマー人材活用ナビ</h3>
                  <p ref={addToRefs} className="text-[12px] font-bold leading-[24px] tracking-[0%]">採用・EOR・リモート開発の最新情報<br/>をお届けしています。</p>
                </div>
                <div>
                  <img src={Blog} alt="" />
                </div>
              </div>
              <MediaButton bgColor="bg-[#444444]" />
            </div>
            <div className="w-[600px] py-[50px] ps-[41px] pe-[57px] bg-white rounded-[12px] text-white shadow-md">
              <div className="flex justify-between mb-[36px]">
                <div className="w-[278px]">
                  <h3 ref={addToRefs} className="text-[#F15A29] text-[24px] font-bold leading-[120%] tracking-[-1%] mb-[24px]">ミャンマーで生きる<br/>独身IT社長日記</h3>
                  <p ref={addToRefs} className="text-[#444444] text-[12px] font-bold leading-[24px] tracking-[0%]">
                    ミャンマー在住11年／ミャンマーにてIT会社を単身起業。右葉曲線ミャンマーで10年以上、人材採用と運用支援に携わってきた経験をもとに、失敗しないコツや「ミャンマーのIT人材事情」「日本企業が活用する方法」などのビジネス話やミャンマーでの生活日記など現地にいるからわかる生の情報を発信しています。
                  </p>
                </div>
                <div className="flex items-center">
                  <img src={Note} alt="" />
                </div>
              </div>
              <MediaButton bgColor="bg-[#F15A29]" />
            </div>
          </div>
        </div>
        <svg ref={svgRef}  className="squiggle2"  xmlns="http://www.w3.org/2000/svg" width="1366" height="1068" viewBox="0 0 1366 1068" fill="none">
          <path ref={pathRef}  d="M1379.5 17C1290.33 65.3243 1144.35 178.349 1098.5 276.405C1051 378 1021.5 545.5 1204 596C1334 631.974 1345.19 896.319 1098.5 875C977 864.5 770.009 770.501 654.5 758.5C577.5 750.5 383.291 809.608 301.5 961.064C223.5 1105.5 94 1025.68 -2.5 1036.5" stroke="#096FCA" strokeWidth="38"
          strokeLinejoin="round"
          strokeLinecap="round"  />
        </svg>
      </div>
      {/* end media section */}

      <FAQ/>

      <Gif/>

    </div>
  );
}

export default Home;














