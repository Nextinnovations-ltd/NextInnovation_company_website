import {useState, useEffect,useRef } from 'react';
import Blur1 from "../../public/images/Blur1.svg"
import Blur2 from "../../public/images/Blur2.svg"
import ContactInput from "../components/ContactInput"
import ContactSelect from "../components/ContactSelect"
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Contact = () => {

    const navigate = useNavigate()
    const location = useLocation()
    let editFormData = location.state
    let [error,setError] = useState('')
    let [loading,setLoading] = useState(false)
    let [check,setCheck] = useState(false)
    let [formData,setFormData] = useState({
        name : '',
        email : '',
        phone : '',
        interest : '',
        country : '',
        budget : '',
        message : ''
    })    
    
    useEffect(() => {
        if (editFormData) {
            setFormData(editFormData)
        }else {
            setFormData({
                name : '',
                email : '',
                phone : '',
                interest : '',
                country : '',
                budget : '',
                message : ''
            })
        }
    }, [editFormData]);

    let validate = (e) => {
        setLoading(true)
        e.preventDefault();
        fetch('http://127.0.0.1:8000/api/contact/validation', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(data => {
            if (data.data) {
                setError('')
                setCheck(false)
                navigate('/contact/confirm', { state: formData })
            }else {
                setError(data.errors)
                if (window.innerWidth <= 768) {
                    window.scrollTo({ top: 500, behavior: 'smooth' })
                }else {
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                }
            }
            setLoading(false)
        })
        .catch(err => {
            console.log(err);
            setLoading(false)
            window.scrollTo({ top: 0, behavior: 'smooth' })
        });
    }

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

            <div className="flex justify-center items-center h-[1500px] lg:h-[900px] xl:h-[1000px] overflow-hidden relative">
                <img src={Blur1} alt="" className="relative w-[24%] left-[3%] top-[-620px] md:top-[-550px] lg:top-[-150px] xl:top-[-100px]" />
                <img src={Blur2} alt="" className="relative w-[70%] right-[2%] top-[-620px] md:top-[-550px] lg:top-[-150px] xl:top-[-100px]" />
            </div>
            <div className="hero-text absolute">
                <div className="flex flex-col items-start lg:flex-row gap-[50px] xl:gap-[71px]">
                    <div className="flex flex-col gap-[40px] md:gap-[104px] lg:h-[730px] xl:h-[860px]">
                        <h1 ref={addToRefs} className="w-[390px] md:w-[660px] lg:w-[480px] xl:w-[660px] text-[100px] md:text-[125px] xl:text-[135px] font-bold leading-[100px] md:leading-[115px] xl:leading-[128.64px] uppercase">Reach out to us</h1>
                        <p ref={addToRefs} className="w-[390px] md:w-[546px] lg:w-[500px] xl:w-[546px] text-[18px] font-normal leading-[26px] tracking-[0.18px]">We have a well-coordinated team with streamline processes which makes working with us a lot of easier and overall great service - in other words, it’s the best one-stop digital service company you can find.</p>
                    </div>

                    <div className="w-[390px] md:w-[505px] lg:w-[400px] xl:w-[505px] relative">
                        <div>
                            <h3 ref={addToRefs} className="text-[20px] md:text-[24px] text-[#1A1A1A] font-semibold leading-[30px] tracking-[-0.48px] uppercase mb-[40px]">Please Fill this form</h3>
                            <form>
                                <div  className="space-y-[24px]">
                                    <ContactInput type="text" placeholder="Your Name *" state={formData.name} setState={(value) => setFormData(prev => ({ ...prev, name: value }))} error={error.name || []}/>
                                    <ContactInput type="email" placeholder="Email Address *" state={formData.email} setState={(value) => setFormData(prev => ({ ...prev, email: value }))} error={error.email || []}/>
                                    <ContactInput type="text" placeholder="Mobile Number *" state={formData.phone} setState={(value) => setFormData(prev => ({ ...prev, phone: value }))} error={error.phone || []}/>
                                    <ContactInput type="text" placeholder="Country" state={formData.country} setState={(value) => setFormData(prev => ({ ...prev, country: value }))} error={error.country || []}/>
                                    <ContactInput type="text" placeholder="Budget" state={formData.budget} setState={(value) => setFormData(prev => ({ ...prev, budget: value }))} error={error.budget || []}/>
                                    
                                    {/* <div>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none text-[25px]">$</div>
                                            <input 
                                                type="text" 
                                                placeholder="Budget" 
                                                className={`${error.budget ? 'border border-red-600' : 'border-2 border-black/10'} w-full ps-10 py-[16px] md:py-[20px] placeholder-[#000000CC]
                                                placeholder:text-[16px] md:placeholder:text-[20px] placeholder:font-normal rounded-[8px] text-[16px] md:text-[20px] bg-transparent focus:outline-none`}
                                                onChange={(e)=>setFormData(prev => ({ ...prev, budget: e.target.value }))} value={formData.budget}
                                            />
                                        </div>
                                        {error.budget && (
                                            <p className="text-red-600">{error.budget}</p>
                                        )}  
                                    </div> */}

                                    <div className="relative w-full">
                                        <ContactSelect state={formData.interest} setState={(value) => setFormData(prev => ({ ...prev, interest: value }))} error={error.interest || []}>
                                            <option value="">Select Your Interested Service *</option>
                                            <option value="1">EOR</option>
                                            <option value="2">Development</option>
                                            <option value="3">UI/UX</option>
                                            <option value="4">Testing</option>
                                        </ContactSelect>
                                    </div>

                                    <div>
                                        <textarea id="message" rows="4" 
                                            className={`block p-2.5 w-full border-2 ${error.message ? 'border-red-600' : 'border-black/10'} 
                                            bg-transparent rounded-[8px] placeholder-[#000000CC] placeholder:text-[16px] md:placeholder:text-[20px] 
                                            placeholder:font-normal focus:outline-none`} placeholder="Message here..."
                                            value={formData.message} 
                                            onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}>
                                        </textarea>
                                        {error.message && (
                                            <p className="text-red-600">{error.message}</p>
                                        )}
                                    </div>

                                    <div className="flex items-center mb-5">
                                        <div className="flex items-center h-5">
                                        <input id="terms" type="checkbox" checked={check} onChange={(e) => setCheck(e.target.checked)} className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 " />
                                        </div>
                                        <label htmlFor="terms" className="ms-2 text-[16px] font-medium text-gray-900">I agree to the <Link to="/privacy" className="text-blue-600 hover:underline">privacy policy</Link></label>
                                    </div>
                                </div>

                                {/* {!!message && (
                                    <div className="mt-[24px] flex items-center p-4 mb-4 text-sm text-green-800 border border-green-300 rounded-lg bg-green-50" role="alert">
                                        <svg className="shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                                        </svg>
                                        <span className="sr-only">Info</span>
                                        <div>{message.success}</div>
                                    </div>
                                )} */}

                                {(!!loading || !check) && (
                                    <button onClick={(e)=>validate(e)} className="cursor-not-allowed flex items-center justify-center w-full bg-[#b87768] text-[#FFF] py-[16px] md:py-[20px] text-[16px] md:text-[20px] font-semibold rounded-[8px] mt-[32px]" disabled>
                                        {!!loading && (
                                            <>
                                                <svg aria-hidden="true" role="status" className="inline w-5 h-5 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                                                </svg>
                                                Sending...
                                            </>
                                        )}
                                        {!check && (
                                            <>Submit</>
                                        )}
                                    </button>
                                )}

                                {!loading && check && (
                                    <button onClick={(e)=>validate(e)} className="flex items-center justify-center w-full bg-[#E84721] text-[#FFF] py-[16px] md:py-[20px] text-[16px] md:text-[20px] font-semibold rounded-[8px] mt-[32px]">
                                        Submit
                                    </button>
                                )}

                            </form>
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
                                {/* <p className="text-[14px] text-[#999] font-semibold tracking-[0.14px] "  ref={addToRefs} >WhatsApp NO.</p>
                                <div className="text-[18px] font-normal leading-[26px] tracking-[0.18px]">
                                    <p  ref={addToRefs} >+65 9774 0528</p>
                                </div> */}
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

export default Contact