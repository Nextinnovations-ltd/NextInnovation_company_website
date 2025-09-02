import { useState,useEffect,useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from "react-router-dom"
import SuccessfulWorkCard from "./development/SuccessfulWorkCard"
import { API_BASE_URL } from '../config';


const  HomeWork = () => {

    let [work,setWork] = useState([])
    
    useEffect(() => {
        fetch(`${API_BASE_URL}/api/works`)
        .then(res => res.json())
        .then(data => {
            setWork(data.data.slice(0, 4));
        })
        .catch(err => {
            console.log(err);
        });
    }, []);



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
        <div className="successful-works-section flex flex-col gap-12 px-[25px] xl:px-0">
            <div className="flex justify-between items-end">
                <div  ref={addToRefs} className="title font-semibold uppercase text-[32px] md:text-[46px] xl:text-[56px]">
                Successful Works 
                </div>
                <Link  to="/works">
                    <div ref={addToRefs}  className="group see-more-link hidden md:flex space-x-3 items-center mb-3">
                        <div ref={addToRefs} className="view-more hover:text-[#E84721] text-[14px] md:text-[16px] font-semibold uppercase">
                        See All Works
                        </div>
                        <svg className="block group-hover:hidden" xmlns="http://www.w3.org/2000/svg" width="16" height="6" viewBox="0 0 16 6" fill="none">
                            <path d="M0 5H14L11.2 1" stroke="#121212" strokeWidth="1.5" />
                        </svg>
                        <svg className="hidden group-hover:block" xmlns="http://www.w3.org/2000/svg" width="16" height="6" viewBox="0 0 16 6" fill="none">
                            <path d="M0 5H14L11.2 1" stroke="#E84721" strokeWidth="1.5" />
                        </svg>
                    </div>
                </Link>
            </div>

            <div className="card-transition grid grid-cols-1 lg:grid-cols-2 gap-x-[20px] gap-y-[30px] md:gap-y-[50px]">
                {!!work.length && work.map(item => (
                    <a href={item.link} key={item.id} target="__blank">
                        <SuccessfulWorkCard image={item.image} category={item.category} title ={item.title} language={item.language} />
                    </a>
                ))}
            </div>

            <Link to="/works">
                <div className="md:hidden flex space-x-3 items-center">
                    <div  className="view-more text-[14px] md:text-[16px] font-semibold uppercase">
                    See All Works
                    </div>
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="6"
                    viewBox="0 0 16 6"
                    fill="none"
                    >
                    <path d="M0 5H14L11.2 1" stroke="#121212" strokeWidth="1.5" />
                    </svg>
                </div>
            </Link>
        </div>
    )
}

export default HomeWork