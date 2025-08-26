import { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import gsap from 'gsap';
const CompanyOverview = () => {
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
          start: "top 0%", // Adjusted to trigger when element enters viewport
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
    <div className="company-overview flex flex-col gap-[30px] md:gap-0 md:flex-row mt-[64px]">
        <h2 ref={addToRefs} className="text-[38px] xl:text-[48px] max-w-[300px] xl:max-w-[399px] font-semibold leading-[48px] tracking-[-0.96px] uppercase">Company Overview</h2>
        <span ref={addToRefs} className="text-[20px] md:max-w-[400px] lg:max-w-[700px] xl:max-w-[820px] font-normal leading-[32px] tracking-[0.2px]">
          We are Next Innovations Japanese Company located in Myanmar specialized in IT field which provide high quality and innovative web designs, web marketing and video production services with our professional teams and satisfied customers. Our Company have been funded by Mr. Yuta Mukai from 2020 and our business have made more than 2,000 brands 
          in both local and Japan. We are aiming to be No.1 in IT field and to satisfy every single customer.
        </span>
    </div>
  )
}
export default CompanyOverview