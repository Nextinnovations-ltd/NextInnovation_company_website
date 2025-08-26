import { PropTypes } from "prop-types";
import { useEffect,useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
const CareerCard = ({ title, image, category, date }) => {
      const revealRef = useRef(null);
      useEffect(() => {
    /* BLOCK REVEAL  */
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
            start: "top 100%",
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
          line.trim() ? `<div class="line-container"><div class="line text-limit">${line}</div></div>` : '<br>'
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
      <div ref={addToRefs}>
         <div >
            <div  className="blockReveal overflow-hidden">
                <img src={image} className="w-full h-[400px] hover:scale-110 ease-in-out duration-300" alt="" />
            </div>
            <div  className="flex gap-[16px] text-[14px] font-semibold leading-[14px] tracking-[0.14px] uppercase my-[24px]">
                <span >{date}</span>
                <span >{category}</span>
            </div>
            <h4   className="text-[24px] text-[#121212] font-normal leading-[145%] text-limit min-h-[71px]">{title}</h4>
        </div>
       </div>
    )
}

CareerCard.propTypes = {
    image: PropTypes.string.isRequired,
    category:PropTypes.string.isRequired,
    date:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired
}

export default CareerCard