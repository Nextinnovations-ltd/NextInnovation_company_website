import {useState, useEffect,useRef } from 'react';
import Blur1 from "../../public/images/Blur1.svg"
import Blur2 from "../../public/images/Blur2.svg"
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLocation, useNavigate } from 'react-router-dom';

const Confirm = () => {

    const location = useLocation()
    const navigate = useNavigate()
    const formData = location.state
    
    let [loading,setLoading] = useState(false)
    const interestOptions = {
        1: 'EOR',
        2: 'Development',
        3: 'UI/UX',
        4: 'Testing'
    };

    useEffect(() => {
        if (!formData) {
            navigate('/contact')
        }else {
            if (window.innerWidth <= 768) {
                window.scrollTo({ top: 700, behavior: 'smooth' })
            }
        }
    }, [formData,navigate]);

    let goBack = (e) => {
        e.preventDefault()
        navigate('/contact', { state : formData })
    }

    let sendMessage = (e) => {
        setLoading(true)
        e.preventDefault();
        fetch('http://127.0.0.1:8000/api/contact', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(data => {
            setLoading(false)
            navigate('/contact/success', { state: data.data })
        })
        .catch(err => {
            console.log(err);
            setLoading(false)
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    const formatBudget = (budget) => {
        if (!budget) return '';
    
        // Match number part + any characters after (currency)
        const match = budget.match(/^(\d+)(.*)$/);
        if (!match) return budget; // If it doesn't match, return original
    
        const [, numberPart, currencyPart] = match;
    
        const formattedNumber = Number(numberPart).toLocaleString();
    
        return `${formattedNumber}${currencyPart}`;
    };

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
        <div className="contact">
            <div className="flex justify-center items-center h-[1160px] md:h-[1250px] lg:h-[630px] xl:h-[800px] overflow-hidden relative">
                <img src={Blur1} alt="" className="relative w-[24%] left-[3%] top-[-460px] md:top-[-420px] lg:top-[0%]" />
                <img src={Blur2} alt="" className="relative w-[70%] right-[2%] top-[-460px] md:top-[-420px] lg:top-[0%]" />
            </div>
            <div className="confirm hero-text absolute">
                <div className="flex flex-col items-start lg:flex-row gap-[50px] xl:gap-[71px]">
                    <div className="flex flex-col gap-[40px] md:gap-[104px] lg:h-[730px] xl:h-[860px]">
                        <h1 ref={addToRefs} className="w-[390px] md:w-[660px] lg:w-[480px] xl:w-[660px] text-[100px] md:text-[125px] xl:text-[135px] font-bold leading-[100px] md:leading-[115px] xl:leading-[128.64px] uppercase">Reach out to us</h1>
                        <p ref={addToRefs} className="w-[390px] md:w-[546px] lg:w-[500px] xl:w-[546px] text-[18px] font-normal leading-[26px] tracking-[0.18px]">We have a well-coordinated team with streamline processes which makes working with us a lot of easier and overall great service - in other words, it’s the best one-stop digital service company you can find.</p>
                    </div>

                    <div className="w-[390px] md:w-[505px] lg:w-[400px] xl:w-[505px] relative">
                        <div>
                            <h3 ref={addToRefs} className="text-[20px] md:text-[24px] text-[#1A1A1A] font-semibold leading-[30px] tracking-[-0.48px] uppercase mb-[40px]">Please Confirm Your form</h3>
                            {!!formData && (
                                <div className="space-y-5 md:space-y-10 text-[16px] md:text-[20px] font-semibold leading-[32px] tracking-[1%]">
                                    <p>Your name - <span className="font-medium">{formData.name}</span></p>
                                    <p>Email address - <span className="font-medium">{formData.email}</span></p>
                                    <p>Mobile number - <span className="font-medium">{formData.phone}</span></p>
                                    <p>Country - <span className="font-medium">{formData.country}</span></p>
                                    <p>Budget - <span className="font-medium">{formatBudget(formData.budget)}</span></p>
                                    <p>Select Your Interested Service - 
                                        <span className="font-medium">
                                            {' '+interestOptions[formData.interest] || ''}
                                        </span>
                                    </p>
                                    <p>Message - <span className="font-medium">{formData.message}</span></p>
                                    {!!loading && (
                                        <div className="flex gap-[13px] mt-[32px]">
                                            <button className="cursor-not-allowed flex items-center justify-center w-full bg-[#f4f0f0] text-[#8b8888] py-[16px] md:py-[20px] text-[16px] md:text-[20px] font-semibold rounded-[8px]" disabled>
                                                Go Back
                                            </button>
                                            <button className="cursor-not-allowed flex items-center justify-center w-full bg-[#b87768] text-[#FFF] py-[16px] md:py-[20px] text-[16px] md:text-[20px] font-semibold rounded-[8px]" disabled>
                                                <>
                                                    <svg aria-hidden="true" role="status" className="inline w-5 h-5 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                                                    </svg>
                                                    Sending...
                                                </>
                                            </button>
                                        </div>
                                    )}

                                    {!loading && (
                                        <div className="flex gap-[13px] mt-[32px]">
                                            <button onClick={(e)=>goBack(e)} className="flex items-center justify-center w-full bg-[#E9E9E9] text-[#000000] py-[16px] md:py-[20px] text-[16px] md:text-[20px] font-semibold rounded-[8px]">
                                                Go Back
                                            </button>
                                            <button onClick={(e)=>sendMessage(e)} className="flex items-center justify-center w-full bg-[#E84721] text-[#FFF] py-[16px] md:py-[20px] text-[16px] md:text-[20px] font-semibold rounded-[8px]">
                                                Submit
                                            </button>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
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

export default Confirm