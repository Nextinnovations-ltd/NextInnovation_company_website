import Logoimage1 from "../../public/images/Blur1.svg";
import Logoimage2 from "../../public/images/Blur2.svg";
import HeroPageSign from "../../public/images/Frame 34765.png";
import HeroPageTitle from "../../public/images/innovations.png";
import HeroPageRotateCircle from "../../public/images/Group.png";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';
gsap.registerPlugin(ScrollTrigger);
const Hero = () => {


    //Smooth scrolling 
     useEffect(() => {
        const lenis = new Lenis({
          lerp: 0.1, // Adjust smoothness (lower = smoother)
          smoothWheel: true
        });

        const raf = (time) => {
          lenis.raf(time);
          requestAnimationFrame(raf);
        };

        requestAnimationFrame(raf);

        return () => lenis.destroy();
      }, []);

    const mouseMoveBgAnimation = () => {
        const jqueryScript = document.createElement("script");
        jqueryScript.src = "https://code.jquery.com/jquery-3.6.0.min.js";
        jqueryScript.onload = () => {
        // Load GSAP after jQuery is ready
        const gsapScript = document.createElement("script");
        gsapScript.src =
            "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.7.1/gsap.min.js";
        gsapScript.onload = () => {
            // Initialize Parallax Effect
            window.$.fn.parallax = function (resistance, mouse) {
            const $el = $(this);
            window.TweenLite.to($el, 0.6, {
                x: -((mouse.clientX - window.innerWidth / 2) / resistance),
                y: -((mouse.clientY - window.innerHeight / 2) / resistance),
            });
            };

            $(".NI-homepage-background-logo-container").mousemove(function (e) {
            $(".logo1").parallax(50, e);
            $(".logo2").parallax(40, e);
            });
        };
        document.body.appendChild(gsapScript);
        };
        document.body.appendChild(jqueryScript);
    }

    useEffect(() => {
        mouseMoveBgAnimation();
    }, []);


    /* Intro animation  */
      const signRef = useRef(null);
      const titleRef = useRef(null);
      const textRef = useRef(null);
    const globalRef = useRef(null);
    const containerRef = useRef(null);
     const logoRef = useRef(null);
     const paraRef = useRef(null);

      useEffect(() => {
        // Animation timeline
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

        // Set initial state (hidden below)
        gsap.set([signRef.current, titleRef.current, textRef.current, globalRef.current, logoRef.current,paraRef.current], { 
          y: 100, 
          opacity: 0 
        });

        // Animate elements in sequence with slight overlaps
          tl.to(signRef.current, { 
              y: 0, 
              opacity: 1, 
              duration: 0.8 
            })
            .to(titleRef.current, { 
              y: 0, 
              opacity: 1, 
              duration: 0.8 
            },'-=0.5')
        .to(textRef.current, { 
          y: 0, 
          opacity: 1, 
          duration: 0.8 
        }, "-=0.5")
        .to(globalRef.current, { 
          y: 0, 
          opacity: 1, 
          duration: 0.8,
        }, "-=0.5")
        .to(logoRef.current, { 
          y: 0, 
            scale: 1, 
        opacity:1,
          duration: 0.8,
        }, "-=0.5")
        .to(paraRef.current, { 
          y: 0, 
            scale: 1, 
        opacity:1,
          duration: 0.8,
        }, "-=0.5")
        
       
      }, []);
    
    /* Scroll animation */
     useEffect(() => {
        // Animation timeline
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current || textRef.current,
            start: "top bottom", // when top of element hits bottom of viewport
            end: "bottom top",  // when bottom of element hits top of viewport
            scrub: 1, // smooth scrubbing, takes 1 second to catch up
            markers: false // set to true to see trigger positions (for debugging)
          }
        });

      /*   // Animate both images to the left
        tl.to([signRef.current, titleRef.current], {
            x: -200, // adjust this value based on how far you want it to move
            
          ease: "none" // linear movement for scroll-linked animations
        });
        tl.to([textRef.current, globalRef.current], {
          x: 200, // adjust this value based on how far you want it to move
          ease: "none" // linear movement for scroll-linked animations
        },0); */
         // Add separate faster animation for the text box
          tl.to(paraRef.current, {
           
            y: -100, // Optional: Add some vertical movement
            ease: "none"
          }, 0);
          tl.to(logoRef.current, {
           
            y: -150, // Optional: Add some vertical movement
            ease: "none"
          }, 0);


        // Cleanup
        return () => {
          tl.kill();
        };
      }, []);
    
    

    return (
        <>
            <div className="NI-homepage-background-logo-container">
                <img   src={Logoimage1} alt="" className="logo1 layer" />
                <img   src={Logoimage2} alt="" className="logo2 layer" />
            </div>
            <div className="heroSection">
                <div className="w-full">
                
                 <div className="heroSection-img flex gap-x-3.5 justify-end" ref={containerRef}>
                  <img 
                    ref={signRef} 
                    src={HeroPageSign} 
                    alt="" 
                    className=" object-contain" 
                  />
                  <img 
                    ref={titleRef} 
                    src={HeroPageTitle} 
                    alt="" 
                    className=" object-contain" 
                  />
                </div>

                
                      <div className="heroSection-text flex">
                        <h1  ref={textRef} className=" text-[40px] sm:text-[60px] md:text-[100px] xl:text-[135px]">
                          DX With{" "}
                         
              </h1>
              <span 
                            ref={globalRef}
                            className="text-[40px] sm:text-[60px] md:text-[80px] xl:text-[135px]"
                          >
                            #GLOBAL
                          </span>
                      </div>
                </div>
                
                <div className="text-box flex flex-col gap-4 mt-6 text-center"   ref={paraRef} >
                    <h1>今ここにない未来を創る</h1>
                    <div className="line w-24 h-[2px] bg-gray-500 mx-auto"></div>
                    <h2>Web and Marketing Agency</h2>
                    <p>
                    We are a professional web & marketing company from Japan. Have
                    “fun”, get “excited”, make “happy” to all related to us.
                    </p>
                </div>
                <div className="rotate-circle mt-6" ref={logoRef}>
                    <img src={HeroPageRotateCircle} alt="" className="w-[100px] md:w-[200px]" />
                </div>
            </div>
        </>
    )
}

export default Hero