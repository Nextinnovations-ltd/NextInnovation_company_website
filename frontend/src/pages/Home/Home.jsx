import { useEffect,useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { Link } from "react-router-dom";
import "./Home.css";
import YutaSan from "../../components/YutaSan";
import FlutterLogo from "../../../public/images/flutter.png";
import WordpressLogo from "../../../public/images/wordpress.png";
import BootstrapLogo from "../../../public/images/bootstrap5.png";
import MaterialLogo from "../../../public/images/materialui.png";
import ReactLogo from "../../../public/images/react-logo.png";
import TailwindLogo from "../../../public/images/tailwind.png";
import PhpLogo from "../../../public/images/php.png";
import JsLogo from "../../../public/images/js.png";
import LaravelLogo from "../../../public/images/laravel.png";
import NodejsLogo from "../../../public/images/nodejs.png";
import DjangoLogo from "../../../public/images/django.png";
import PythonLogo from "../../../public/images/python-icon.png";
import AwsLogo from "../../../public/images/aws.png";
import CpanelLogo from "../../../public/images/cpanel.png";
import MysqlLogo from "../../../public/images/mysql.png";
import MongodbLogo from "../../../public/images/mongodb.png";
import PostgreLogo from "../../../public/images/postgresql.png";
import AzureLogo from "../../../public/images/azure.png";
import DigitalOceanLogo from "../../../public/images/digitalocean.png";
import AdobeLogo from "../../../public/images/adobe.png";
import PremiereProLogo from "../../../public/images/premiere-pro.png";
import PhotoShopLogo from "../../../public/images/ps.png";
import AiLogo from "../../../public/images/ai.png";
import IdLogo from "../../../public/images/indesign.png";
import LrLogo from "../../../public/images/lightroom.png";
import FigmaLogo from "../../../public/images/figma.png";
import CanvaLogo from "../../../public/images/canva.png";
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
import sliderImg from "../../../public/images/video section.png";
import sliderImg2 from "../../../public/images/video section (2).png";
import sliderImg3 from "../../../public/images/eor-slider.png"
import sliderImg4 from "../../../public/images/development-slider.png"
import Instagram from "../../components/Instagram"
import HomeCareer from '../../components/HomeCareer';
import HomeWork from '../../components/HomeWork';
import Logo from '../../components/Logo';
import useVisiter from '../../hooks/useVisiter';

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
  /*   // Create array to store all timelines for cleanup
    const allTimelines = [];


    // 1. TEXT ANIMATIONS (your existing animation)

    console.log(textRefs.current)
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
          start: "top -50%",
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
 */
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
            const links = slide.querySelectorAll(".slide-link");
    
         
            // Set initial visible state before hiding for animation
            gsap.set([title, lines, content, links], { 
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

            if (links.length) {
              tl.from(links, {
                x: -50,
                opacity: 0,
                duration: 0.5,
                stagger: 0.05,
                ease: "power2.out",
              }, "-=0.9");
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
       <div className="stage">
     
        

        <section className="slide slide--4" id="slide-4">
          <div className="col col--1">
            <div className="col__content col__content--4">
              <h2 className="col__content-title">
                <span className="line__inner">EOR</span>
              </h2>
              <div className="col__content-wrap">
                <p className="col__content-txt">
                  An Employer of Record (EOR) manages legal, administrative, and HR tasks for employees abroad, ensuring compliance with local laws.
                </p>
                <Link to="/eor" className="slide-link">
                  <div className="slide-link__circ"></div>
                  <div className="slide-link__line"></div>
                </Link>
              </div>
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

        <section className="slide slide--2" id="slide-2">
          <div className="col col--1">
            <div className="col__content col__content--2">
              <h2 className="col__content-title">
                <span className="line__inner">Development</span>
              </h2>
              <div className="col__content-wrap">
                <p className="col__content-txt">
                  Speak with our web development experts for a free consultation. Get valuable advice from industry-leading professionals today!
                </p>
                <Link to="/development/website" className="slide-link">
                  <div className="slide-link__circ"></div>
                  <div className="slide-link__line"></div>
                </Link>
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
        </section>


         <section className="slide slide--1" id="slide-1">
          <div className="col col--1">
            <div className="col__content col__content--1">
              <h2 className="col__content-title" >
                <span className="line__inner" >UI/UX </span>
                <span className="line__inner" >Design</span>
              </h2>
              <div className="col__content-wrap">
                <p className="col__content-txt" >
                  Consult with our UI/UX design experts today! Get valuable insights and professional advice to enhance your user experience.


                </p>
                <Link to="/ui-ux" className="slide-link">
                  <div className="slide-link__circ"></div>
                  <div className="slide-link__line"></div>
                </Link>
              </div>
            </div>
          </div>
          <div className="col col--2">
            <div className="col__image-wrap">
              <img
                className="img img--1"
                src={sliderImg}
                alt="UI/UX Design"
              />
            </div>
          </div>
        </section>

        <section className="slide slide--3" id="slide-3">
          <div className="col col--1">
            <div className="col__content col__content--3">
              <h2 className="col__content-title">
                <span className="line__inner">Testing</span>
              </h2>
              <div className="col__content-wrap">
                <p className="col__content-txt">
                  Get a free consultation with our software testing experts for tailored solutions ensuring your software is reliable, secure, and bug-free.
                </p>
                <Link to="/testing" className="slide-link">
                  <div className="slide-link__circ"></div>
                  <div className="slide-link__line"></div>
                </Link>
              </div>
            </div>
          </div>
          <div className="col col--2">
            <div className="col__image-wrap">
              <img
                className="img img--1"
                src={sliderImg2}
                alt="Testing"
              />
            </div>
          </div>
        </section>
      </div>

      <LetWorkTogether/>

      <OurService/>

      {/* Successful works */}
      <HomeWork/>

      {/* Trusted clients section */}
      <div className="trusted-clients-section overflow-hidden  my-[168px] flex flex-col gap-y-20 px-[24px] xl:px-0">
        <h1 className="w-[1240px] mx-auto"  ref={addToRefs}>
          trusted Clients<span>50+</span>
        </h1>
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

      {/* start our powerful section */}
      <div className="our-powerful-product-section w-full pt-24 pb-44 lg:pt-[200px] lg:pb-[212px]">
        <div className="our-powerful-product mx-auto lg:pl-[63px]">
          <div  ref={addToRefs} className="mx-[25px] xl:mx-0 title text-[32px] md:text-[46px] xl:text-[56px] font-semibold uppercase lg:mb-20 xl:mb-24">
            OUR POWERFUL PRODUCTS
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5 main-left mt-5 mx-[25px] xl:mx-0">
              <h3  ref={addToRefs} className="text-[24px] md:text-[38px] xl:text-[48px] font-light mt-10 mb-6 xl:mt-16 xl:mb-8">
                Talent Cloud
              </h3>
              <span ref={addToRefs}  className="text-[14px] md:text-[16px] xl:text-[18px] lg:w-[320px] xl:w-[398px] font-normal">
                Talent Cloud is a smart and seamless job portal connecting skilled professionals from Myanmar with remote work opportunities in oversea countries. We simplify the hiring process, ensuring smooth collaboration between businesses and talent— without the need for a local presence. Start your global career or build your remote team effortlessly with Talent Cloud 
              </span>
              <Link >
                <div ref={addToRefs} className="flex items-center gap-x-3 mt-10 view-more-btn">
                  <span  className="text-[14px] lg:text-[16px] font-semibold uppercase" ref={addToRefs}>
                    View More
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="6"
                    viewBox="0 0 16 6"
                    fill="none"
                  >
                    <path
                      d="M0 4.81543H14L11.2 0.81543"
                      stroke="#EEEEEE"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
              </Link>
            </div>

            <div className="lg:col-span-7 relative ms-[25px]">
              <div className="image-container rounded-l-[16px] overflow-hidden">
                <img src={PowerFullProduct} alt="" className="lg:h-full xl:w-[850px] xl:h-[478px] rounded-start-2xl blockReveal"/>
              </div>
              <Link to="" className="coming-soon absolute md:text-2xl uppercase font-normal px-6 py-4 rounded-lg">
                Coming Soon
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* end our powerful section */}

      {/* start language service section */}
      <div className="language-service mx-auto mt-[121px] mb-40 lg:mb-[233px] px-[25px] xl:px-0">
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-10">

          <div className="card border-2 border-solid rounded-3xl p-8" style={{ overflow: 'hidden' }}>
            <h3 className="text-[32px] font-semibold uppercase mb-6" ref={addToRefs}>Frontend</h3>
            <div className=" blockReveal grid grid-cols-3 md:grid-cols-4 gap-6"  style={{ width: '100%', display: 'grid' }}>
              <Logo image={BootstrapLogo} title="Bootstrap" />
              <Logo image={MaterialLogo} title="Material Ui" />
              <Logo image={TailwindLogo} title="Tailwind" />
              <Logo image={WordpressLogo} title="Wordpress" />
              <Logo image={ReactLogo} title="React" />
              <Logo image={FlutterLogo} title="FLUTTER" />
              <Logo image={ReactLogo} title="React Native" />
            </div>
          </div>
          <div className="card border-2 border-solid rounded-3xl p-8" style={{ overflow: 'hidden' }}>
            <h3 className="text-[32px] font-semibold uppercase mb-6" ref={addToRefs}>Backend</h3>
            <div className="grid grid-cols-3 md:grid-cols-4 gap-6 blockReveal" style={{ width: '100%', display: 'grid' }}>
              <Logo image={JsLogo} title="Javascript" />
              <Logo image={NodejsLogo} title="Node Js" />
              <Logo image={PythonLogo} title="Python" />
              <Logo image={DjangoLogo} title="Django" />
              <Logo image={PhpLogo} title="PHP" />
              <Logo image={LaravelLogo} title="Laravel" />
            </div>
          </div>
          <div className="card border-2 border-solid rounded-3xl p-8" style={{ overflow: 'hidden' }}>
            <h3 ref={addToRefs} className="text-[32px] font-semibold uppercase mb-6">
              Server Side
            </h3>
            <div className="grid grid-cols-3 md:grid-cols-4 gap-6 blockReveal" style={{ width: '100%', display: 'grid' }}>
              <Logo image={AwsLogo} title="Aws" />
              <Logo image={AzureLogo} title="Azure" />
              <Logo image={DigitalOceanLogo} title="Digital Ocean" />
              <Logo image={CpanelLogo} title="Cpanel" />
              <Logo image={MysqlLogo} title="Mysql" />
              <Logo image={MongodbLogo} title="Mongo Db" />
              <Logo image={PostgreLogo} title="Postgresql" />
            </div>
          </div>
          <div className="card border-2 border-solid rounded-3xl p-8" style={{ overflow: 'hidden' }}>
            <h3 ref={addToRefs} className="text-[32px] font-semibold uppercase mb-6">Design</h3>
            <div className="grid grid-cols-3 md:grid-cols-4 gap-6 blockReveal" style={{ width: '100%', display: 'grid' }}>
              <Logo image={AdobeLogo} title="Adobe" />
              <Logo image={PremiereProLogo} title="Premiere Pro" />
              <Logo image={PhotoShopLogo} title="Photoshop" />
              <Logo image={AiLogo} title="Illustrator" />
              <Logo image={IdLogo} title="Indesign" />
              <Logo image={LrLogo} title="Lightroom" />
              <Logo image={FigmaLogo} title="Figma" />
              <Logo image={CanvaLogo} title="Canva" />
            </div>
          </div>
        </div>
      </div>
      {/* end language service section */}

      <Gif/>

      {/* start company overview section */}
      <div className="" id="yutasan-section" >
        <div className="company-overview max-w-[1240px] mx-auto text-[#000] mt-[198px] ">
          <div ref={addToRefs } className="title text-[32px] tracking-[-1.12px] text-[#121212] md:text-[46px] xl:text-[56px] font-semibold uppercase mb-14 ps-6 xl:ps-0">
              Company Overview
          </div>
          <YutaSan/>
        </div>
         <svg ref={svgRef}  className="squiggle2"  xmlns="http://www.w3.org/2000/svg" width="1366" height="1068" viewBox="0 0 1366 1068" fill="none">
          <path ref={pathRef}  d="M1379.5 17C1290.33 65.3243 1144.35 178.349 1098.5 276.405C1051 378 1021.5 545.5 1204 596C1334 631.974 1345.19 896.319 1098.5 875C977 864.5 770.009 770.501 654.5 758.5C577.5 750.5 383.291 809.608 301.5 961.064C223.5 1105.5 94 1025.68 -2.5 1036.5" stroke="#90FEFE" strokeWidth="38"
          strokeLinejoin="round"
          strokeLinecap="round"  />
        </svg>
      </div>
      {/* end company overview section */}

      <Instagram/>

      <HomeCareer/>

    </div>
    
  );
}

export default Home;














