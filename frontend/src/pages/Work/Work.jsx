import { useState,useEffect,useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Main from "../../components/development/Main"
import WorksBg from "../../../public/images/WorksBg.png"
import { useSearchParams } from "react-router-dom"
import SuccessfulWorkCard from "../../components/development/SuccessfulWorkCard"
import Gif from "../../components/Gif"
import gsap from "gsap"

const Work = () => {
    let [url,setUrl] = useState('https://demo-site.next-innovations.ltd/ni-backend/public/api/works');
    let [works,setWorks] = useState([]);
    let [category,setCategory] = useState('');
    let [currentPage,setCurrentPage] = useState('');
    let [lastPage,setLastPage] = useState('');
    let [prevPage,setPrevPage] = useState('');
    let [nextPage,setNextPage] = useState('');
    let [searchParams, setSearchParams] = useSearchParams();

    let categoryMap = {
        website: "1",
        system: "2",
        uiux: "3",
        eor: "4",
        testing: "5"
    };

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setWorks(data);
            setCurrentPage(data.meta.current_page);
            setLastPage(data.meta.last_page);
            setPrevPage(data.links.prev);
            setNextPage(data.links.next);
        })
    }, [url]);
    
    let link = (page) => {
        setUrl('https://demo-site.next-innovations.ltd/ni-backend/public/api/works?category='+category+'&page='+page);
        pageTransition();
    }

    let categoryFilter = (slug) => {
        const value = slug ? categoryMap[slug] : ''; // convert "news" to "1"
        setCategory(value);
        setSearchParams({ category: slug });
        setUrl('https://demo-site.next-innovations.ltd/ni-backend/public/api/works?category='+value);
        pageTransition();
    }

    useEffect(() => {
      const slug = searchParams.get("category");
      const value = categoryMap[slug] || '';
      setCategory(value);
      setUrl(`https://demo-site.next-innovations.ltd/ni-backend/public/api/works?category=${value}`);
    }, []);

    let pageTransition = () => {
        window.scrollTo({ top: 700, left: 0 });
        gsap.to(".card-transition", {
            opacity: 0,
            duration: 0.4,
            ease: "sine.out",
            onComplete: () => {
                // After fade out is done, fade in
                gsap.to(".card-transition", {
                    opacity: 1,
                    duration: 0.8,
                    ease: "sine.inOut"
                });
            }
        });
    }
    


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
              start: "top 50%", // Adjusted to trigger when element enters viewport
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
            start: "top 240%",
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
        <div className="development">
            
            <Main title="Works" image={WorksBg} mobileImage={WorksBg} />

            <div className="works-list max-w-[1240px] mx-auto mt-[104px] px-[25px] xl:px-0">
                <div className="works-nav flex flex-wrap gap-[12px] md:gap-[32px] text-[12px] md:text-[14px] lg:text-[18px] text-[#8D8D8D] font-semibold leading-[18px] tracking-[0.18px] uppercase">
              
                  <div className={`category-link text-[12px] md:text-[14px] lg:text-[16px] ${category == '' ? 'active' : ''}`} onClick={() => categoryFilter('')}>
                    <span className="original">ALL</span>
                    <span className="duplicate">ALL</span>
                  </div>
                  <div className={`category-link text-[12px] md:text-[14px] lg:text-[16px] ${category == '4' ? 'active' : ''}`} onClick={() => categoryFilter('eor')}>
                    <span className="original">EOR</span>
                    <span className="duplicate">EOR</span>
                  </div>
                  <div className={`category-link text-[12px] md:text-[14px] lg:text-[16px] ${category == '1' ? 'active' : ''}`} onClick={() => categoryFilter('website')}>
                    <span className="original">WEB Development</span>
                    <span className="duplicate">WEB Development</span>
                  </div>
                  <div className={`category-link text-[12px] md:text-[14px] lg:text-[16px] ${category == '2' ? 'active' : ''}`} onClick={() => categoryFilter('system')}>
                    <span className="original">System Development</span>
                    <span className="duplicate">System Development</span>
                  </div>
                  <div className={`category-link text-[12px] md:text-[14px] lg:text-[16px] ${category == '3' ? 'active' : ''}`} onClick={() => categoryFilter('uiux')}>
                    <span className="original">UI/UX DESIGN</span>
                    <span className="duplicate">UI/UX DESIGN</span>
                  </div>
                  <div className={`category-link text-[12px] md:text-[14px] lg:text-[16px] ${category == '5' ? 'active' : ''}`} onClick={() => categoryFilter('testing')}>
                    <span className="original">Testing</span>
                    <span className="duplicate">Testing</span>
                  </div>
                </div>

                <div   className="card-transition grid grid-cols-1 lg:grid-cols-2 gap-x-[20px] gap-y-[30px] md:gap-y-[50px] mt-[48px]">
                    {!!works.data && works.data.map(work => (
                        <a    href={work.link} key={work.id} target="__blank">
                            <SuccessfulWorkCard image={work.image} category={work.category} title ={work.title} language={work.language} />
                        </a>
                    ))}
                </div>

                {(!works.data || !works.data.length) && (
                    <div className="bg-gray-200 h-[400px] flex justify-center items-center mb-[100px]">
                        <h1 className="text-[40px] font-medium">Data not Found</h1>
                    </div>
                )}

                {!!works.data && !!works.data.length && (
                    <div className="text-[#000] flex gap-[32px] items-center mt-[80px] mb-[100px] md:mb-[164px] justify-center">
                        <p onClick={()=>{setUrl(prevPage); pageTransition();}} className={`${prevPage == null ? 'cursor-not-allowed opacity-40' : 'cursor-pointer'} text-[16px] font-semibold leading-[20px] tracking-[0.16px] uppercase`}>Previous</p>
                        <div className="flex gap-[16px]">
                        {Array.from({ length: lastPage }).map((_, i) => (
                            
                            <p key={i+1} onClick={()=>link(i+1)} className={`${currentPage == i+1 ? 'text-[#E84721] border-b border-b-[#E84721]' : ''} cursor-pointer p-[8px] text-center text-[18px] font-semibold leading-[21.6px] tracking-[0.09px] w-[40px] h-[40px]`}>
                                {i+1}
                            </p>
                        ))}
                        </div>
                        <p onClick={()=>{setUrl(nextPage); pageTransition();}} className={`${nextPage == null ? 'cursor-not-allowed opacity-40' : 'cursor-pointer'} text-[16px] font-semibold leading-[20px] tracking-[0.16px] uppercase`}>Next</p>
                    </div>
                )}

            </div>

            <div className='mb-[100px]'>
                <Gif/>
            </div>

        </div>
    )
}

export default Work