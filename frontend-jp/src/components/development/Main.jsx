import { PropTypes } from 'prop-types'
import { useEffect,useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from "gsap"

const Main = ({ title, image, mobileImage }) => {

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
              start: "top 80%", // Adjusted to trigger when element enters viewport
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

    
     
      /* TEXT ANIMATION */









        
        
    }, []);
    return (
        <>
          <div className="hidden md:block main-section bg-cover bg-center bg-no-repeat relative h-screen text-[#FFF]" style={{ backgroundImage: `url(${image})` }}>
              <div className="absolute main-title ">
                  <div className="w-[375px] md:w-[768px] lg:w-[1234px] text-[50px] md:text-[100px] lg:text-[120px] xl:text-[144px] text-center font-extrabold uppercase leading-[60px] md:leading-[100px] lg:leading-[120px] xl:leading-[139px] tracking-[-5px]">{title}</div>
                  <div ref={addToRefs} className="mt-[16px] flex justify-center gap-[32px] text-[16px] md:text-[24px] font-semibold uppercase leading-[30px] tracking-[-0.48px]">
                      <p>100+ PROJECTS</p>
                      <span>|</span>
                      <p>JAPAN QUALITY</p>
                  </div>
              </div>
          </div>
          <div className="md:hidden main-section bg-cover bg-center bg-no-repeat relative h-screen text-[#FFF]" style={{ backgroundImage: `url(${mobileImage})` }}>
              <div className="absolute main-title ">
                  <div className="w-[375px] md:w-[768px] lg:w-[1234px] text-[50px] md:text-[100px] lg:text-[120px] xl:text-[144px] text-center font-extrabold uppercase leading-[60px] md:leading-[100px] lg:leading-[120px] xl:leading-[139px] tracking-[-2px]">{title}</div>
                  <div ref={addToRefs} className="mt-[16px] flex justify-center gap-[32px] text-[16px] md:text-[24px] font-semibold uppercase leading-[30px] tracking-[-0.48px]">
                      <p>100+ PROJECTS</p>
                      <span>|</span>
                      <p>JAPAN QUALITY</p>
                  </div>
              </div>
          </div>
        </>
    )
}

Main.propTypes = {
    image: PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
    mobileImage:PropTypes.string.isRequired
}

export default Main