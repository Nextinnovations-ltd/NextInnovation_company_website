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
import FAQ from '../../components/FAQ';
import Media from '../../components/Media';

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
      <Hero/>

      {/* Slider Section */}
      <div className="stage text-white">
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
      </div>

      <LetWorkTogether/>

      <WhatWeDo/>

      <OurService/>

      <CaseStudy/>

      <div className="bg-[#1E2C44]">
        <div className="trusted-clients-section pt-[147px] pb-[180px] bg-white overflow-hidden flex flex-col gap-y-20 px-[24px] xl:px-0 rounded-b-[80px]">
          <div className="w-[1240px] mx-auto">
            <SectionTitle jp="取引先/パートナー一覧" />
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
                  <div className="mt-[60px]">
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
      </div>
      {/* end our powerful section */}

      <HomeCareer/>
      
      <Media/>

      <div className="-mb-[60px] relative z-[1]">
        <FAQ/>
      </div>

      <Gif/>

      <div className="mb-[580px]"></div>

    </div>
  );
}

export default Home;














