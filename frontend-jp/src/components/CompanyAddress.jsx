import React from 'react'
import { useEffect, useState, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

const CompanyAddress = () => {

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
          start: "top -80%", // Adjusted to trigger when element enters viewport
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
<div  className="grid grid-cols-1 md:grid-cols-5 xl:grid-cols-4 gap-[15px] md:gap-0 py-[20px] md:py-[32px] items-center">
    <p ref={addToRefs} className="col-span-2 xl:col-span-1 text-[18px] text-[#999] font-semibold leading-[18px] tracking-[0.18px] uppercase">address</p>
    <p ref={addToRefs} className="col-span-3 text-[22px] lg:text-[24px] font-normal leading-[32px]">Room No (602), Gandamar Residence, Gandamar Road, Mayangone Township, Yangon, Myanmar</p>
</div>
  )
}

export default CompanyAddress