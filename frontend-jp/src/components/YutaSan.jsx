import { Link } from "react-router-dom"
import YutaSanImg from "../../public/images/Yutasan.png";
import YutaSanImgMobile from "../../public/images/yutasan-mobile.png";
import { useEffect,useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
const YutaSan = () => {
      // Register ScrollTrigger plugin
      gsap.registerPlugin(ScrollTrigger);
      const textRefs = useRef([]);

      const addToRefs = (el) => {
        if (el && !textRefs.current.includes(el)) {
          textRefs.current.push(el);
        }
      };

    const imageRef = useRef(null)
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

        // 2. SECTION ::BEFORE ANIMATION (your new animation)
        const sections = document.querySelectorAll('.yutasan-info');
      
        sections.forEach(section => {
          const sectionTl = gsap.timeline({
            scrollTrigger: {
              trigger: section,
              start: "bottom -30%",
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

  //Img reveal
    useEffect(() => {
      const revealContainers = document.querySelectorAll(".reveal");
    
      // First reset all elements to their starting positions
      gsap.set(".reveal", {
        xPercent: -100,
        autoAlpha: 1
      });
    
      gsap.set(".reveal img", {
        xPercent: 100,
        scale: 1.3
      });

      revealContainers.forEach((container) => {
        const image = container.querySelector("img");
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            start: "top -60%", // Adjust this value as needed
            toggleActions: "play none none none",
          }
        });

        tl.to(container, {
          xPercent: 0,
          duration: 1.5,
          ease: "power2.out"
        })
        .to(image, {
          xPercent: 0,
          scale: 1,
          duration: 1.5,
          ease: "power2.out"
        }, "<"); // Start at same time as container animation
      });

     
    }, []);
 
  return (
    <div className="animation-trigger"   >
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-[80px] lg:gap-[70px]  lg:pe-[25px] xl:pe-0">
           <div className="hidden lg:block section-parallax reveal">
            <img 
            ref={imageRef} src={YutaSanImg}
            className="w-full 
               object-cover" 
            alt="Office row with parallax effect " 
            />
          </div>
           <div className="lg:hidden pe-[30px] section-parallax reveal mb-[50px]">
            <img 
            ref={imageRef} src={YutaSanImgMobile}
            className="w-full 
               object-cover" 
            alt="Office row with parallax effect " 
            />
          </div>
          <div className="pt-14 lg:pt-10 xl:pt-20 right-section yutasan-info ps-[40px] lg:ps-0">
              <div ref={addToRefs} className="name text-[40px] md:text-[50px] xl:text-[64px] leading-[73.6px] tracking-[-0.64px] font-light">
                  Yuta Mukai
              </div>
              <div ref={addToRefs} className="position text-[16px] md:text-[18px] font-semibold leading-[18px] tracking-[0.18px] uppercase mt-[16px] mb-[40px] lg:mb-[56px] xl:mb-[80px]">
                  CEO OF NEXT INNOVATIONS
              </div>
              <div className="description text-[18px] xl:text-[20px] xl:leading-[32px] tracking-[0.2px] font-normal">
                <p ref={addToRefs}>I came to Myanmar for the first time in November 2014.There was still only 3G internet, no wifi, and none of the convenient IT/web services that are common in Japan.</p><br className="hidden lg:block"/><br/>
                <p ref={addToRefs}>As of 2023, that hasn&apos;t changed much.With the motto of &quot;We ourselves will create the future that doesn&apos;t exist here now.&quot;, we aim to develop the web industry in Myanmar and to be a company that can enrich people&apos;s lives and lead their businesses to success by introducing the convenience and excellence of IT/websites to the people of Myanmar.</p>
              </div>
              <Link to="/ceo">
                  <div ref={addToRefs} className="group view-more-btn flex items-center gap-x-3 mt-10">
                    <span className="hover:text-[#E84721] text-[16px] font-semibold uppercase">
                        Get To Know More
                    </span>
                    <svg className="block group-hover:hidden" xmlns="http://www.w3.org/2000/svg" width="16" height="6" viewBox="0 0 16 6" fill="none">
                        <path d="M0 5H14L11.2 1" stroke="#121212" strokeWidth="1.5" />
                    </svg>
                    <svg className="hidden group-hover:block" xmlns="http://www.w3.org/2000/svg" width="16" height="6" viewBox="0 0 16 6" fill="none">
                        <path d="M0 5H14L11.2 1" stroke="#E84721" strokeWidth="1.5" />
                    </svg>
                  </div>
              </Link>
      </div>
       
      </div>
    </div> 
       
    )
}

export default YutaSan