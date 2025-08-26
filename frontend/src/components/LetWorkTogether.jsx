import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const LetWorkTogether = () => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);
    const textRefs = useRef([]);

    const addToRefs = (el) => {
      if (el && !textRefs.current.includes(el)) {
        textRefs.current.push(el);
      }
    };

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
            start: "top 100%",
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
      const sections = document.querySelectorAll('.home .vision-mission-section .section');
      
      sections.forEach(section => {
        const sectionTl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "bottom 60%",
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



  
 const svgRef = useRef(null);
const pathRef = useRef(null);

useEffect(() => {
  const svg = svgRef.current;
  const path = pathRef.current;
  if (!svg || !path) return;

  const workSection = document.querySelector('#letWorkTogether');
  if (!workSection) return;

  // Initialize path styles
  const pathLength = path.getTotalLength();
  path.style.strokeDasharray = pathLength;
  path.style.strokeDashoffset = pathLength;

  // Speed multiplier (higher = faster animation)
  const speedMultiplier = 2; // Adjust this value (1 = normal, 2 = 2x faster, etc.)

  const scroll = () => {
    const sectionRect = workSection.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const sectionHeight = sectionRect.height;

    // Calculate when middle of section reaches middle of viewport
    const sectionMiddle = sectionRect.top + sectionHeight / 2;
    const viewportMiddle = windowHeight / 2;

    if (sectionMiddle <= viewportMiddle) {
      // Calculate progress with speed multiplier
      const scrollPastTrigger = viewportMiddle - sectionMiddle;
      const maxScrollPast = (sectionHeight + windowHeight) / speedMultiplier;
      const scrollProgress = Math.min(scrollPastTrigger / maxScrollPast, 1);

      path.style.strokeDashoffset = pathLength * (1 - scrollProgress);
    } else {
      path.style.strokeDashoffset = pathLength;
    }
  };

  scroll();
  window.addEventListener('scroll', scroll);
  return () => window.removeEventListener('scroll', scroll);
}, []); 


// Empty dependency array means this runs once on mount
  return (
<div className="" id='letWorkTogether' >
  <div  className="about-us flex justify-between lg:px-[25px] xl:px-0">
      <div className="title-section">
             <h1  ref={addToRefs}  style={{ whiteSpace: 'pre-line' }}>
            Let&apos;s work<br />
            together<br />
            and grab the<br />
              <div className="flag" >
               success
                <svg 
                  xmlns="http://www.w3.org/2000/svg"
                  width="95"
                  height="58"
                  viewBox="0 0 95 58"
                  fill="none"
                >
                  <path
                    d="M9.60595 57.7208L1.73419 5.23093C0.746209 5.0712 -0.00479357 4.22536 2.30379e-05 3.2096C0.00802926 2.08602 0.940759 1.17962 2.08654 1.18506C3.23143 1.19293 4.15378 2.10957 4.14661 3.23559C4.1418 3.99723 3.71426 4.65503 3.08337 5.00122L10.9601 57.5093L9.60595 57.7208ZM7.48911 26.3486C8.29135 25.4052 16.7476 21.9808 17.4441 21.9274C20.0678 21.7299 22.6139 22.6859 24.6161 24.3305C26.2742 25.6932 27.6897 26.521 28.9363 26.9671C31.2653 27.7941 33.0011 27.285 34.6 26.4171C35.5296 25.9144 57.4389 17.2663 60.6199 16.8556C61.9098 16.6896 63.8241 16.4622 64.6503 17.7219C65.4822 18.991 64.5262 20.7661 66.3621 21.4805C68.1811 22.1871 70.5181 21.4522 72.2939 20.9132C74.5733 20.2192 94.4523 10.5091 94.4523 10.5091C94.4523 10.5091 83.4924 13.8885 79.7992 14.7721C70.6905 16.9516 69.8265 13.4109 69.764 12.3739C69.7544 12.2048 69.7656 12.1017 69.7656 12.1017C69.4069 10.2951 67.4094 9.54052 65.7978 9.17856C62.9875 8.55067 43.502 11.698 40.7924 11.757C38.023 11.82 36.4563 11.152 35.3466 9.4807C34.1608 7.69617 33.7189 5.56697 32.751 3.68423C30.6228 -0.457517 25.9999 -0.122344 21.9616 0.138706C16.2163 0.511669 4.33483 5.1619 3.89518 5.35527C4.17541 7.02254 4.45803 8.68748 4.73825 10.3531C5.24666 13.3328 7.40522 26.0008 7.49007 26.3484L7.48911 26.3486Z"
                    fill="#E84721"
                  />
                </svg>
           </div>
          </h1>
      </div>
      <div className="vision-mission-section ">
          <div className="section p-10 flex flex-col " >
              <div  ref={addToRefs}  className="title flex justify-start items-center gap-4">
                  <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="47"
                  height="30"
                  viewBox="0 0 47 30"
                  fill="none"
                  >
                  <circle
                      cx="14.0712"
                      cy="15.0001"
                      r="13.7194"
                      fill="#E84721"
                      stroke="#E84721"
                      strokeWidth="0.703558"
                  />
                  <circle
                      cx="32.2814"
                      cy="15.0001"
                      r="13.7212"
                      stroke="#E84721"
                      strokeWidth="0.7"
                  />
                  </svg>
                  <h1>(OUR VISION)</h1>
              </div>
                    
              <p ref={addToRefs} className='lg:w-[407px]'>
                We will make the <span>lives of people in Myanmar </span> more convenient and prosperous through the web. Become a company that <span>creates success</span> for our customers through the web.
              </p>
                  
                  
          </div>
          <div className="section p-10 flex flex-col ">
              <div ref={addToRefs} className="title flex justify-start items-center gap-4">
                  <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="47"
                  height="30"
                  viewBox="0 0 47 30"
                  fill="none"
                  >
                  <circle
                      cx="14.0712"
                      cy="15.0001"
                      r="13.7194"
                      fill="#E84721"
                      stroke="#E84721"
                      strokeWidth="0.703558"
                  />
                  <circle
                      cx="32.2814"
                      cy="15.0001"
                      r="13.7212"
                      stroke="#E84721"
                      strokeWidth="0.7"
                  />
                  </svg>
                  <h1>(OUR MISSION)</h1>
              </div>
              <p ref={addToRefs} className='lg:w-[392px]'>Create a<span> future </span> that doesn&apos;t exist here now. Drive the next wave of innovation! Become innovators!</p>
          </div>
  </div>
     <svg ref={svgRef} className="squiggle" width="1365" height="730" viewBox="0 0 1365 730" fill="none"><path   ref={pathRef} d="M0.5 19.5005C90.6667 18.3338 283.5 40 365.5 100.5C467.509 175.764 484.531 280.966 453 371C411.5 489.5 291 508.339 215 465C152.5 429.36 103.872 333.551 164.5 250.5C274 100.501 519 158 611.5 250.5C694.567 333.567 725 479.5 790 515.5C874.475 562.286 982.125 508.074 1017 489.5C1063 465 1140 431.717 1202.5 489.5C1255.5 538.5 1235.5 582.5 1339.5 646.5C1422.7 697.7 1471.5 710.5 1485.5 710.5" stroke="#A1E3F9" strokeWidth="38"
      strokeLinejoin="round"
      strokeLinecap="round"  
      />
    </svg>
  </div>
</div>
      
    )
}

export default LetWorkTogether




