import { useState,useEffect,useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from "react-router-dom"
import CareerCard from "./CareerCard";
import { API_BASE_URL } from '../config';
import SectionTitle from './SectionTitle';
import GoButton from './GoButton';

const HomeCareer = () => {

    let [career,setCareer] = useState([])

    useEffect(() => {
        fetch(`${API_BASE_URL}/api/news`)
        .then(res => res.json())
        .then(data => {
            setCareer(data.data.slice(0, 3));
        })
        .catch(err => {
            console.log(err);
        });
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


     const revealRef = useRef(null);
      useEffect(() => {
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
            start: "top 70%",
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
        <div  className="home-news mb-[100px] mx-auto px-[25px] xl:px-0 mt-[120px]">
            <SectionTitle jp="ニュース" eng="NEWS" />
            <div ref={revealRef} className="card-transition grid md:grid-cols-2 lg:grid-cols-3 gap-[40px] text-[#444444] mt-[50px]">
                {!!career.length && career.map(item => (
                    <Link key={item.id} to={`/news/${item.id}`}>
                        <CareerCard title={item.title} image={item.feature} date={item.created_at} category={item.category} />
                    </Link>
                ))}
            </div>

            <div className="text-end mt-[65px]">
              <GoButton name="続きを見る" />
            </div>
        </div>
    )
}

export default HomeCareer