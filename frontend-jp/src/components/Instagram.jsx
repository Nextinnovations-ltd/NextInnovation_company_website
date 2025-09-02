import { useState,useEffect,useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Instagram = () => {

    let [post,setPost] = useState([])
    let url = 'https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&limit=6&access_token=IGAAKld0Wp3MdBZAE5YUklLakNpV0N0SjVYUEpaX1VaY3V3c3NlTGpLNWJ1ZAlJSZAFFMSE11TE53NnJyZAWdiemIyRnBQVC1qWHRvNjZAGMDF0dWhoSkVfS3VYVFNxZA050TnU5Sm9XZA3c5N3JKWjU3OXlkekt0STlONS1kUjZA2RF9nYwZDZD'
    
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setPost(data.data);
        })
        .catch(err => {
            console.log(err);
        });
    }, [url]);






      /* TEXT ANIMATION */
      const textRefs = useRef([]);
      const addToRefs = (el) => {
        if (el && !textRefs.current.includes(el)) {
          textRefs.current.push(el);
        }
      };
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
              start: "top -80%", 
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
            start: "top 0%",
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
        <div className="max-w-[1240px] mx-auto mt-[120px] px-6 xl:px-0">
            <div className="flex justify-between items-end mb-12">
                <div ref={addToRefs} className="title font-semibold uppercase text-[32px] md:text-[46px] xl:text-[56px]">
                Instagram
                </div>
                <a href="https://www.instagram.com/next_innovations_myanmar/" target="__blank">
                <div ref={addToRefs} className="group see-more-link hidden md:flex space-x-3 items-center mb-3">
                    <div ref={addToRefs} className="hover:text-[#E84721] view-more text-[14px] md:text-[16px] font-semibold uppercase">
                    View More
                    </div>
                      <svg className="block group-hover:hidden" xmlns="http://www.w3.org/2000/svg" width="16" height="6" viewBox="0 0 16 6" fill="none">
                          <path d="M0 5H14L11.2 1" stroke="#121212" strokeWidth="1.5" />
                      </svg>
                      <svg className="hidden group-hover:block" xmlns="http://www.w3.org/2000/svg" width="16" height="6" viewBox="0 0 16 6" fill="none">
                          <path d="M0 5H14L11.2 1" stroke="#E84721" strokeWidth="1.5" />
                      </svg>
                </div>
                </a>
            </div>

            <div  ref={revealRef} className="blockReveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                {post?.map((item) => (
                    <a href={item.permalink}  className=" relative" target="__blank" key={item.id}>
                        {item.media_type == 'VIDEO' && (
                            <div className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                                <svg className="w-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="#ffffff" d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c7.6-4.2 16.8-4.1 24.3 .5l144 88c7.1 4.4 11.5 12.1 11.5 20.5s-4.4 16.1-11.5 20.5l-144 88c-7.4 4.5-16.7 4.7-24.3 .5s-12.3-12.2-12.3-20.9l0-176c0-8.7 4.7-16.7 12.3-20.9z"/>
                                </svg>
                            </div>
                        )}
                        <div className="bg-gray-400 rounded-lg overflow-hidden">
                            {item.media_type == 'IMAGE' && (
                                <img src={item.media_url} className="h-[400px] w-full rounded-lg hover:scale-110 ease-in-out duration-300" alt="" />
                            )}
                            {item.media_type == 'VIDEO' && (
                                <img src={item.thumbnail_url} className="h-[400px] w-full rounded-lg hover:scale-110 ease-in-out duration-300" alt="" />
                            )}
                        </div>
                    </a>
                ))}
            </div>

            <a href="https://www.instagram.com/next_innovations_myanmar/" target="__blank">
                <div className="md:hidden flex space-x-3 items-center mt-[40px]">
                    <div className="view-more text-[14px] md:text-[16px] font-semibold uppercase">
                        View More
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
            </a>

            
        </div>
    )
}

export default Instagram