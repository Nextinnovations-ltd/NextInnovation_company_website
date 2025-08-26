import {PropTypes} from "prop-types"
import { Fragment } from "react"
import { useEffect,useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
const SuccessfulWorkCard = ({ image, category, title, language }) => {

      /* TEXT AND LINE ANIMATION */
      const textRefs = useRef([]);
      const revealRef = useRef(null);
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
            line.trim() ? `<div class="line-container"><div class="line text-limit-one">${line}</div></div>` : '<br>'
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
              start: "top 120%", // Adjusted to trigger when element enters viewport
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
        const sections = document.querySelectorAll('.home .successful-works-section');
      
        sections.forEach(section => {
          const sectionTl = gsap.timeline({
            scrollTrigger: {
              trigger: section,
              start: "top -90%",
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










      /* BLOCK REVEAL // BLOG REVEAL  */

 

        if (!revealRef.current) return;

        // Set initial state
        gsap.set(revealRef.current, {
          yPercent: 100,
          opacity: 0,
          scale: 1.2
        });

        // Create animation
        const animation = gsap.to(revealRef.current, {
          yPercent: 0,
          opacity: 1,
          scale: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: revealRef.current,
            start: "top 120%",
            toggleActions: "play none none none",
            markers: false
          }
        });

        // Cleanup function
        return () => {
          animation.kill();
          ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
        
        
    }, []);
 
  return (
      <div className=""  ref={revealRef}>
      
         <div  className="blockReveal successful-work-card pb-[15px] md:pb-[20px]">
            <div className="overflow-hidden h-[240px] md:h-[390px] lg:h-[370px] ">
                <img src={image} className="h-[250px] md:h-[400px] lg:h-[380px] w-full hover:scale-110 ease-in-out duration-300" alt="" />
            </div>
            <h3 className="text-[32px] font-medium leading-[100%] mt-[32px] text-limit-one">{title}</h3>
            <div  className="flex items-center gap-4 my-[16px]">
                {category.map((item, index) => (
                    <Fragment key={index}>
                        <p className="uppercase text-[16px] text-[#E84721] font-semibold leading-[100%] tracking-[1%]">
                            {item}
                        </p>
                        {index != category.length - 1 && (
                            <svg width="4" height="5" viewBox="0 0 4 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="2" cy="2.09229" r="2" fill="#E84721"/>
                            </svg>
                        )}
                    </Fragment>
                ))}
 
        </div>
            <div  className="flex gap-[8px]">
            {language.map((item, index) => (
                <p key={index} className="text-[14px] text-[#121212] font-semibold leading-[22px] tracking-[1%] px-[16px] py-[8px] rounded-[32px] border border-[#121212]">
                    {item}
                </p>
            ))}
            </div>
        </div>

      </div>
       
    )
}

SuccessfulWorkCard.propTypes = {
    image: PropTypes.string.isRequired,
    category:PropTypes.array.isRequired,
    language:PropTypes.array.isRequired,
    title:PropTypes.string.isRequired
}

export default SuccessfulWorkCard