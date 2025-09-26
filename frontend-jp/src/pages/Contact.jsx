import {useState, useEffect,useRef } from 'react';
import ContactInput from "../components/ContactInput"
import ContactSelect from "../components/ContactSelect"
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { API_BASE_URL } from '../config';
import ReachOut from "/images/Reach-out-to-us.png"
import Breadcrumb from '../components/Breadcrumb';
import useCardAnimation from '../hooks/useCardAnimation';

const Contact = () => {

    const ref1 = useRef(null)
    const ref2 = useRef(null)
    const containerRef = useRef(null)
    useCardAnimation(containerRef,".map",{start: "top 80%"})
    useEffect(() => {
        const tl = gsap.timeline();
        tl.fromTo(
            ref1.current,
            { y: 100, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
        )
        .fromTo(
            ref2.current,
            { y: -100, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
            "-=0.1"
        )
    },[])

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
        fetch(`${API_BASE_URL}/api/contact/validation/jp`, {
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
        <>
            <div className="contact relative">
                <div className="!bg-cover !bg-no-repeat bg-[url('/images/contact-bg.png')]">
                    <div className="max-w-[1366px] mx-auto px-6 lg:px-[64px] pt-[100px] pb-[112px] lg:pb-[150px] text-[#444444]">
                        <Breadcrumb current="お問い合わせ"  />
                        <div className="mt-[51px] lg:flex lg:justify-between">
                            <div>
                                <img ref={ref1} src={ReachOut} alt="" />
                                <p ref={ref2} className="lg:w-[546px] mt-[107px] text-[#000000] text-[15px] font-normal leading-[24px] tracking-[0%]">
                                    当社は緊密に連携したチームと効率的なプロセスを有しており、これにより当社との業務が格段に容易になり、総合的に優れたサービスを提供します。つまり、当社こそが最高のワンストップデジタルサービス企業なのです。
                                </p>
                            </div>
                            
                            <div className="md:w-[505px] lg:w-[400px] xl:w-[505px]">
                                <div>
                                    <h3 ref={addToRefs} className="text-[20px] md:text-[24px] text-[#1A1A1A] font-semibold leading-[44px] tracking-[-2%] mb-[40px]">このフォームにご記入ください</h3>
                                    <form>
                                        <div className="space-y-[24px]">
                                            <ContactInput type="text" placeholder="お名前 *" state={formData.name} setState={(value) => setFormData(prev => ({ ...prev, name: value }))} error={error.name || []}/>
                                            <ContactInput type="email" placeholder="メールアドレス *" state={formData.email} setState={(value) => setFormData(prev => ({ ...prev, email: value }))} error={error.email || []}/>
                                            <ContactInput type="text" placeholder="電話番号 *" state={formData.phone} setState={(value) => setFormData(prev => ({ ...prev, phone: value }))} error={error.phone || []}/>
                                            <ContactInput type="text" placeholder="お国" state={formData.country} setState={(value) => setFormData(prev => ({ ...prev, country: value }))} error={error.country || []}/>
                                            <ContactInput type="text" placeholder="ご予算" state={formData.budget} setState={(value) => setFormData(prev => ({ ...prev, budget: value }))} error={error.budget || []}/>
                                            <div className="relative w-full">
                                                <ContactSelect state={formData.interest} setState={(value) => setFormData(prev => ({ ...prev, interest: value }))} error={error.interest || []}>
                                                    <option value="">ご興味のあるサービスをお選びください *</option>
                                                    <option value="5">EOR</option>
                                                    <option value="6">安心ラボ型EOR</option>
                                                    <option value="7">プロジェクト伴走型EOR</option>
                                                    <option value="8">EOR代理店制度</option>
                                                    <option value="9">DX支援</option>
                                                    <option value="10">受託開発</option>
                                                    <option value="11">UI/UXデザイン</option>
                                                </ContactSelect>
                                            </div>
        
                                            <div>
                                                <textarea id="message" rows="4" 
                                                    className={`block p-2.5 w-full border-2 ${error.message ? 'border-red-600' : 'border-black/10'} 
                                                    bg-transparent rounded-[8px] placeholder-[#000000CC] placeholder:text-[15px] 
                                                    placeholder:font-normal focus:outline-none`} placeholder="メッセージ"
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
                </div>

                <div className="bg-white rounded-b-[40px] lg:rounded-b-[80px]">
                    <div className="max-w-[1240px] mx-auto pb-[158px]">
                        <div className="flex flex-col lg:flex-row gap-[80px] lg:gap-[21px] text-[#444444] px-[25px] xl:px-0">
                            <div className="lg:w-[710px] pt-[24px] contact-info">
                                <p className="text-[12px] lg:text-[16px] font-medium leading-[31px] tracking-[0%] text-[#444444] mb-[10px]">連絡先情報</p>
                                <h3 ref={addToRefs} className="roboto text-[32px] lg:text-[58px] font-medium lg:font-bold leading-[38px] lg:leading-[67px] tracking-[0%] lg:tracking-[-1%] uppercase">contact info</h3>
                                <div  className="flex flex-col md:flex-row gap-[50px] md:gap-[145px] mt-[40px] md:mt-[70px] lg:mt-[100px] ">
                                    <div className="space-y-[16px]" >
                                        <p  ref={addToRefs}  className="text-[14px] text-[#999] font-bold tracking-[0.14px] uppercase">メール</p>
                                        <a href="https://mail.google.com/mail/?view=cm&to=info@next-innovations.ltd" target="__blank" ref={addToRefs}  className="hidden lg:block text-[18px] text-blue-500 hover:text-blue-600 hover:underline font-normal leading-[26px] tracking-[0.18px]">info@next-innovations.ltd</a>
                                        <a href="mailto:info@next-innovations.ltd" target="__blank" ref={addToRefs}  className="lg:hidden text-[18px] text-blue-500 hover:text-blue-600 hover:underline font-normal leading-[26px] tracking-[0.18px]">info@next-innovations.ltd</a>
                                    </div>
                                    <div className="space-y-[16px]">
                                        <p  ref={addToRefs}  className="text-[14px] text-[#999] font-bold tracking-[0.14px] uppercase">電話番号</p>
                                        <div className="text-[18px] text-blue-500 hover:text-blue-600 hover:underline font-normal leading-[26px] tracking-[0.18px]">
                                            <a href="tel:09451663606" target="__blank" ref={addToRefs} >+959 451 663 606</a>
                                        </div>
                                    </div>
                                </div>
                                <div  className="space-y-[16px] mt-[48px]">
                                    <p className="text-[14px] text-[#999] font-bold tracking-[0.14px] uppercase"  ref={addToRefs} >住所</p>
                                    <p className="text-[18px] font-normal leading-[26px] tracking-[0.18px]"  ref={addToRefs} >Room No (602), Gandamar Residence, Gandamar Road, Mayangone Township, Yangon, Myanmar</p>
                                </div>
                            </div>

                            <div ref={containerRef} className="w-full lg:w-[505px]">
                                <iframe className="w-full map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3818.2974840422876!2d96.15543147461591!3d16.861172417752115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1933ef77e5147%3A0x2a6d94f48d039f50!2sNext%20Innovations%20co.%2C%20Ltd!5e0!3m2!1sen!2smm!4v1740103470409!5m2!1sen!2smm" width="600" height="450" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact