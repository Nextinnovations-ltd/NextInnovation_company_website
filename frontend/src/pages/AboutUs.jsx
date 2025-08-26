import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AllMember from "../../public/images/all-members.png"
import Officerow from "../../public/images/office-row.png"
import AboutUsBubble from "../components/AboutUsBubble"
import Office1 from "../../public/images/office1.png"
import Office2 from "../../public/images/office2.png"
import Office3 from "../../public/images/office3.png"
import AboutUsCardText from "../components/AboutUsCardText"
import CompanyOutlineRow from "../components/CompanyOutlineRow"
import YutaSan from "../components/YutaSan"
import CompanyOverview from '../components/CompanyOverview';
import Address from '../components/CompanyAddress';

const AboutUs = () => {


      /* TEXT AND LINE ANIMATION */
      const textRefs = useRef([]);
      const addToRefs = (el) => {
        if (el && !textRefs.current.includes(el)) {
          textRefs.current.push(el);
        }
    };
    const sectionsRef = useRef([]);
     const imgToRefs = (el) => {
        if (el && !sectionsRef.current.includes(el)) {
          sectionsRef.current.push(el);
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
        const sections = document.querySelectorAll('.border-line,.border-orange-line');
      
        sections.forEach(section => {
          const sectionTl = gsap.timeline({
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
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

          
          
          
          
          
      sectionsRef.current.forEach((section) => {
          const content = section.querySelector('.parallax-content');
          if (!content) return;

          const heightDiff = content.offsetHeight - section.offsetHeight;
      
          gsap.fromTo(content, { 
            y: -heightDiff  * 0.8
          }, {
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              end: "bottom top",
              scrub: true
            },
            y: 0,
            ease: "none"
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
        <div className='aboutUs-page'>
             <div className="section-parallax " ref={imgToRefs} style={{height:'90vh',overflow:'hidden'}}>
                <img 
                ref={imgToRefs} src={AllMember}
                  className="w-full parallax-content object-cover" 
                            alt="Office row with parallax effect" 
                style={{height:'110vh'}}
                />
              </div>
                        
           

            <div className="max-w-[1240px] mx-auto px-[25px] xl:px-0">
                <div className="grid grid-cols-1 md:grid-cols-3 mt-[80px] lg:mt-[136px] mb-[100px] lg:mb-[176px]">
                    <div>
                      <h2 ref={addToRefs} className="text-[38px] md:text-[48px] font-semibold leading-[48px] tracking-[-0.96px] uppercase">about us</h2>
                    </div>
                    <div className="col-span-2 ms-[0px] md:ms-0 mt-[40px] md:mt-[80px] border-orange-line">
                      <span ref={addToRefs} className="text-[20px] md:text-[22px] xl:text-[24px] text-[#575757] font-normal leading-[32px]">
                        As a professional company, we understand the business idea behind the project and how it will affect our client’s value. We also propose and optimize useful features to get the best results. The ability to think outside the box and offer new fresh ideas. Beautiful end result with a well-thought UX logic, an attractive UI design and top-notch technical realization are what you’re getting working with us. 
                      </span>
                    </div>
                </div>
            </div>

            <div className="max-w-[1305px] mx-auto px-[25px] xl:px-0">
                <div className="grid grid-cols-1 md:grid-cols-11 border-line">
                    <div className="col-span-6 border-right-line ">
                        <div className="pt-[50px] xl:pt-[68px]  pb-[60px] md:pb-0 ">
                            <AboutUsBubble title="our vision" />
                            <p ref={addToRefs} className="text-[24px] lg:text-[32px] xl:text-[48px] font-light leading-[40px] xl:leading-[57.6px] tracking-[-0.48px] max-w-[300px] lg:max-w-[400px] xl:max-w-[609px] mt-[100px] md:mt-[140px] xl:mt-[174px]">We will make the <span className="text-[#E84721]">lives of people</span> more convenient and prosperous through the web. Become a company that <span className="text-[#E84721]">creates success</span> for our customers through the web.</p>
                        </div>
                    </div>
                    <div className="col-span-5 bg-[#F1F1F1] border-t-[2px] border-[#000] md:border-t-0">
                        <div className="max-w-[300px] lg:max-w-[410px] xl:max-w-[527px]">
                            <div className="pt-[50px] xl:pt-[63px] ps-[50px] xl:ps-[66px] pb-[50px] md:pb-[90px] lg:pb-[125px]">
                                <AboutUsBubble title="our mission" />
                                <p ref={addToRefs} className="text-[24px] lg:text-[32px] xl:text-[48px] font-light leading-[40px] xl:leading-[57.6px] tracking-[-0.48px] md:max-w-[210px] lg:max-w-[270px] xl:max-w-[401px] mt-[100px] md:mt-[140px] xl:mt-[174px]">Create a <span className="text-[#E84721]">future</span> that doesn&apos;t exist here now. Drive the next wave of innovation! Become innovators!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div  className="max-w-[1240px] mx-auto mt-[100px] lg:mt-[136px] mb-[110px] lg:mb-[164px] px-[25px] xl:px-0">
             <div className="" style={{ overflow: 'hidden' }}>
              <div className="card-image-wrapper section-parallax " ref={imgToRefs} >
                <img 
                  src={Officerow} 
                  className="w-full parallax-content" 
                            alt="Office row with parallax effect" 
                />
              </div>
            </div>
              <CompanyOverview/>
            </div>

            <div className="max-w-[1031px] mx-auto px-[25px] xl:px-0">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-[40px] lg:gap-[73px]">
                    <div className="space-y-[24px]">
                         <div className="section-parallax " ref={imgToRefs}>
                            <img 
                              src={Office1} 
                              className="w-full parallax-content" 
                              alt="Office row with parallax effect" 
                            />
                          </div>
                        
                        <AboutUsCardText text1="Be Honest" text2="Keep our promise." />
                    </div>
                    <div className="space-y-[24px] mt-[54px]">
                        <AboutUsCardText text1="Be Kind" text2="Do the right thing." />
                     
                        
                         <div className="section-parallax" ref={imgToRefs}>
                            <img 
                              src={Office2} 
                              className="w-full parallax-content" 
                              alt="Office row with parallax effect" 
                            />
                          </div>
                    </div>
                    <div className="space-y-[24px]">
                         <div className="section-parallax" ref={imgToRefs}>
                            <img 
                              src={Office3} 
                              className="w-full parallax-content" 
                              alt="Office row with parallax effect" 
                            />
                          </div>
                        <AboutUsCardText text1="Be Smart" text2="Make things better." />
                    </div>
                </div>
            </div>

            <div className="max-w-[1240px] mx-auto text-[#1A1A1A] mt-[130px] lg:mt-[192px] mb-[130px] lg:mb-[184px] px-[25px] xl:px-0">
                <h2 ref={addToRefs} className="text-[38px] lg:text-[48px] text-[#121212] font-semibold leading-[48px] tracking-[-0.96px] mb-[32px] uppercase">Company Outline</h2>
                <CompanyOutlineRow title="company name" description="Next Innovations. Ltd" />
                <CompanyOutlineRow title="established" description="January 1, 2020" />
                <Address/>
                <div className="grid md:grid-cols-5 xl:grid-cols-4  pb-[32px]">
                    <iframe className="md:col-span-3 md:col-start-3 xl:col-start-2 w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3818.2974840422876!2d96.15543147461591!3d16.861172417752115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1933ef77e5147%3A0x2a6d94f48d039f50!2sNext%20Innovations%20co.%2C%20Ltd!5e0!3m2!1sen!2smm!4v1740366893508!5m2!1sen!2smm" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <CompanyOutlineRow title="telephone number" description="+959 451663606" link="tel:09451663606" />
                {/* <CompanyOutlineRow title="whats app number" description="+65 9774 0528" /> */}
                <div className="hidden lg:block">
                  <CompanyOutlineRow title="email address" description="info@next-innovations.ltd" link="https://mail.google.com/mail/?view=cm&to=info@next-innovations.ltd" />
                </div>
                <div className="lg:hidden">
                  <CompanyOutlineRow title="email address" description="info@next-innovations.ltd" link="mailto:info@next-innovations.ltd" />
                </div>
            </div>

            <div className="max-w-[1240px] mx-auto">
                <YutaSan/>
            </div>

            <div className=" mt-[100px] lg:mt-[184px] mb-[80px] lg:mb-[126px]">
                 <div className="section-parallax " ref={imgToRefs} style={{height:'90vh',overflow:'hidden'}}>
                    <img 
                    ref={imgToRefs} src={AllMember}
                      className="w-full parallax-content object-cover" 
                                alt="Office row with parallax effect" 
                    style={{height:'110vh'}}
                    />
                  </div>
            </div>

        </div>
    )
}

export default AboutUs