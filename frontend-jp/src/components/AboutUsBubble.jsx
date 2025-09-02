import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PropTypes } from "prop-types"
const AboutUsBubble = ({ title }) => {
       /* TEXT ANIMATION */
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
              start: "top 60%", // Adjusted to trigger when element enters viewport
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



      /* TEXT ANMATION */

        return () => {
          allTimelines.forEach(tl => tl.kill());

          // Cleanup
          ScrollTrigger.getAll().forEach(trigger => trigger.kill());
          gsap.killTweensOf('.blockReveal');
        };
      }, []);
    return (
        <div ref={addToRefs}  className="flex gap-[24px] our-vision-mission">
            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="28" viewBox="0 0 45 28" fill="none">
                <circle cx="13.3926" cy="14" r="13.0578" stroke="#E84721" strokeWidth="0.669631"/>
                <circle cx="30.7247" cy="14" r="13.0578" fill="#E84721" stroke="#E84721" strokeWidth="0.669631"/>
            </svg>
            <p   className="text-[24px] font-semibold leading-[30px] uppercase">{title}</p>
        </div>
    )
}

AboutUsBubble.propTypes = {
    title: PropTypes.string.isRequired,
}

export default AboutUsBubble