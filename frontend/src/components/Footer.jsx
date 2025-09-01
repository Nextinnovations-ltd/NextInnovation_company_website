import { Link } from "react-router-dom"
import { useEffect, useState,useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
const Footer = () => {
      // Register ScrollTrigger plugin
       gsap.registerPlugin(ScrollTrigger);
      const textRefs = useRef([]);

      // const addToRefs = (el) => {
      //   if (el && !textRefs.current.includes(el)) {
      //     textRefs.current.push(el);
      //   }
      // };

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
              start: "top -90%",
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

   


        // Cleanup function for all timelines
        return () => {
          allTimelines.forEach(tl => tl.kill());
        };
      }, []);

    const textRef = useRef(null);
    const [isInViewport, setIsInViewport] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setIsInViewport(true);
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );

      if (textRef.current) {
        observer.observe(textRef.current);
      }

      return () => {
        if (textRef.current) {
          observer.unobserve(textRef.current);
        }
      };
    }, []);

    useEffect(() => {
      if (isInViewport && textRef.current) {
        // Initial state (offscreen and squished)
        gsap.set(textRef.current, {
          y: 1000,
          scaleY: 0.2,
          opacity: 0
        });

        // Create timeline for sequenced animations
        const tl = gsap.timeline();
      
        // Main slide-up animation (overshoot slightly)
        tl.to(textRef.current, {
          y: 0, // Overshoot the target by 50px
          scaleY: 1.2, // Slightly overexpand
          opacity: 1,
          duration: 0.8,
          ease: "power2.out"
        })
        // Settle back to final position
        .to(textRef.current, {
          y: 0,
          scaleY: 1,
          duration: 0.4,
          ease: "power1.inOut"
        });
      }
    }, [isInViewport]);
  
    return (
        <div className="footer mx-auto px-[25px] xl:px-0">
          <div>
            <div className="ft-navbar italic font-light text-[40px] lg:text-[46px] xl:text-[56px] flex flex-wrap space-x-5 md:space-x-7 xl:space-x-10 gap-y-2 justify-center lg:justify-between items-center">
              <Link to="/eor" className="title">
                  Services
              </Link>
              <span>/</span>
              <Link to="/works" className="title">
                  Works
              </Link>
              <span >/</span>
              <Link to="/about-us" className="title">
                  About
              </Link>
              <span >/</span>
              <Link to="/news" className="title">
                  News
              </Link>
              <span >/</span>
              <Link to="/contact" className="title" >
                  Contact
              </Link>
            </div>
          </div>
          <div className="small-text text-[18px] font-normal flex flex-col items-center space-y-4 lg:space-y-0 lg:flex-row lg:justify-between mt-20">
            <div>Copyright © Next Innovations</div>
            <div className="flex space-x-4">
                <a href="https://www.facebook.com/NextInnovationsMM" className="hover:text-[#E84721] underline" target="__blank">
                Facebook
                </a>
                <a href="https://www.instagram.com/next_innovations_myanmar/" className="hover:text-[#E84721] underline" target="__blank">
                Instagram
                </a>
                <a href="https://www.youtube.com/@nextinnovations/videos" className="hover:text-[#E84721] underline" target="__blank">
                Youtube
                </a>
                <a href="https://www.linkedin.com/company/next-innovations2020/posts/?feedView=all" className="hover:text-[#E84721] underline" target="__blank">
                LinkedIn
                </a>
            </div>
            <Link to="/privacy" className="hover:text-[#E84721] underline">Privacy Policy</Link>
          </div>
          <div className="flex items-center justify-center mt-[70px]">
            <div 
              ref={textRef}
              className="we-are-top bebas_neue font-bold transform origin-bottom"
            >
              WE ARE TOP
            </div>
        </div>
      </div>
    )
}

export default Footer