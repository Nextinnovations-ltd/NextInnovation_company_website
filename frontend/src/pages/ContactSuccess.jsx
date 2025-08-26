import { useEffect,useRef } from 'react';
import Blur1 from "../../public/images/Blur1.svg"
import Blur2 from "../../public/images/Blur2.svg"
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const ContactSuccess = () => {

    const location = useLocation()
    const navigate = useNavigate()
    const message = location.state

    useEffect(() => {
        if (!message) {
            navigate('/contact')
        }else {
            if (window.innerWidth <= 768) {
                window.scrollTo({ top: 500, behavior: 'smooth' })
            }
        }
    }, [message,navigate]);

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
              start: "top 90%",
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
        const sections = document.querySelectorAll('.contact .contact-info');
      
        sections.forEach(section => {
          const sectionTl = gsap.timeline({
            scrollTrigger: {
              trigger: section,
              start: "top 70%",
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
      
      }, []);
 
    return (
        <div className="contact" >

            <div className="flex justify-center items-center h-[900px] md:h-[850px] lg:h-[520px] xl:h-[760px] overflow-hidden relative">
                <img src={Blur1} alt="" className="relative w-[24%] left-[3%] top-[-320px] md:top-[-190px] lg:top-[0%]" />
                <img src={Blur2} alt="" className="relative w-[70%] right-[2%] top-[-320px] md:top-[-190px] lg:top-[0%]" />
            </div>
            <div className="success hero-text absolute">
                <div className="flex flex-col items-start lg:flex-row gap-[50px] xl:gap-[71px]">
                    <div className="flex flex-col gap-[40px] md:gap-[104px] lg:h-[730px] xl:h-[860px]">
                        <h1 ref={addToRefs} className="w-[390px] md:w-[660px] lg:w-[480px] xl:w-[660px] text-[100px] md:text-[125px] xl:text-[135px] font-bold leading-[100px] md:leading-[115px] xl:leading-[128.64px] uppercase">Reach out to us</h1>
                        <p ref={addToRefs} className="w-[390px] md:w-[546px] lg:w-[500px] xl:w-[546px] text-[18px] font-normal leading-[26px] tracking-[0.18px]">We have a well-coordinated team with streamline processes which makes working with us a lot of easier and overall great service - in other words, it’s the best one-stop digital service company you can find.</p>
                    </div>

                    {!!message && (
                        <div className="w-[390px] md:w-[505px] lg:w-[400px] xl:w-[505px] relative">
                            <div className='flex flex-col items-center'>
                                <h3 ref={addToRefs} className="text-[20px] md:text-[24px] text-[#1A1A1A] font-semibold leading-[30px] tracking-[-0.48px] uppercase ">Thank you for submitting!</h3>
                                <div className="flex flex-col items-center gap-[21px] mt-[16px] mb-[50px]">
                                    <svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="37.5" cy="37.5" r="37.5" fill="#40D029"/>
                                        <path d="M37.5 0C16.7895 0 0 16.7895 0 37.5C0 58.2117 16.7895 75 37.5 75C58.2117 75 75 58.2117 75 37.5C75 16.7895 58.2117 0 37.5 0ZM37.5 70.3863C19.4074 70.3863 4.6875 55.5926 4.6875 37.4999C4.6875 19.4073 19.4074 4.68735 37.5 4.68735C55.5926 4.68735 70.3125 19.4073 70.3125 37.4999C70.3125 55.5924 55.5926 70.3863 37.5 70.3863ZM52.466 23.7785L30.464 45.9187L20.5558 36.0105C19.6406 35.0953 18.157 35.0953 17.2406 36.0105C16.3253 36.9258 16.3253 38.4094 17.2406 39.3246L28.8409 50.9262C29.7562 51.8402 31.2398 51.8402 32.1562 50.9262C32.2616 50.8207 32.352 50.7058 32.434 50.5863L55.7824 27.0937C56.6965 26.1784 56.6965 24.6948 55.7824 23.7785C54.866 22.8633 53.3824 22.8633 52.466 23.7785Z" fill="white"/>
                                    </svg>
                                    <div className="bg-[#EDFFEA] w-[323px] border-[2px] border-[#2FC816] rounded-[5px] px-[22px] py-[10px]">
                                        <p className="text-[#379D26] text-[14px] font-normal leading-[19px] tracking-[0%] text-center px-[22px]">{message.success}</p>
                                    </div>
                                </div>
                                <Link to="/" className="flex items-center justify-center w-full bg-[#E84721] text-[#FFF] py-[16px] md:py-[20px] text-[16px] md:text-[20px] font-semibold rounded-[8px]">
                                    Go To Home Page
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div className="max-w-[1240px] mx-auto md:mt-[200px] xl:mt-[100px] mb-[100px] lg:mb-[144px]">
                <div className="flex flex-col lg:flex-row gap-[80px] lg:gap-[21px] text-[#000] px-[25px] xl:px-0">
                    <div className="lg:w-[710px] pt-[39px] contact-info">
                        <h3 ref={addToRefs} className="text-[32px] font-semibold leading-[35px] uppercase">contact info</h3>
                        <div  className="flex flex-col md:flex-row gap-[50px] md:gap-[145px] mt-[40px] md:mt-[70px] lg:mt-[100px] ">
                            <div className="space-y-[16px]" >
                                <p  ref={addToRefs}  className="text-[14px] text-[#999] font-semibold tracking-[0.14px] uppercase">mail</p>
                                <a href="https://mail.google.com/mail/?view=cm&to=info@next-innovations.ltd" target="__blank" ref={addToRefs}  className="hidden lg:block text-[18px] text-blue-500 hover:text-blue-600 hover:underline font-normal leading-[26px] tracking-[0.18px]">info@next-innovations.ltd</a>
                                <a href="mailto:info@next-innovations.ltd" target="__blank" ref={addToRefs}  className="lg:hidden text-[18px] text-blue-500 hover:text-blue-600 hover:underline font-normal leading-[26px] tracking-[0.18px]">info@next-innovations.ltd</a>
                            </div>
                            <div className="space-y-[16px]">
                                <p  ref={addToRefs}  className="text-[14px] text-[#999] font-semibold tracking-[0.14px] uppercase">phone no.</p>
                                <div className="text-[18px] text-blue-500 hover:text-blue-600 hover:underline font-normal leading-[26px] tracking-[0.18px]">
                                    <a href="tel:09451663606" target="__blank" ref={addToRefs} >+959 451 663 606</a>
                                </div>
                                <p className="text-[14px] text-[#999] font-semibold tracking-[0.14px] "  ref={addToRefs} >WhatsApp NO.</p>
                                <div className="text-[18px] font-normal leading-[26px] tracking-[0.18px]">
                                    <p  ref={addToRefs} >+65 9774 0528</p>
                                </div>
                            </div>
                        </div>
                        <div  className="space-y-[16px] mt-[48px]">
                            <p className="text-[14px] text-[#999] font-semibold tracking-[0.14px] uppercase"  ref={addToRefs} >address</p>
                            <p className="text-[18px] font-normal leading-[26px] tracking-[0.18px]"  ref={addToRefs} >Room No (602), Gandamar Residence, Gandamar Road, Mayangone Township, Yangon, Myanmar</p>
                        </div>
                    </div>

                    <div  className="w-full lg:w-[505px]">
                        <iframe   ref={addToRefs} className="w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3818.2974840422876!2d96.15543147461591!3d16.861172417752115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1933ef77e5147%3A0x2a6d94f48d039f50!2sNext%20Innovations%20co.%2C%20Ltd!5e0!3m2!1sen!2smm!4v1740103470409!5m2!1sen!2smm" width="600" height="450" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactSuccess