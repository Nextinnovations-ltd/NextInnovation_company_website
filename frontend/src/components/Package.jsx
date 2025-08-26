import PackageData from "./PackageData"
import { useEffect,useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
const Package = () => {


    const revealRef = useRef(null);
    useEffect(() => {
    /* BLOCK REVEAL // BLOG REVEAL  */
        if (!revealRef.current) return;

        // Set initial state
        gsap.set(revealRef.current, {
            y: 600,
            opacity: 0,
            scale: 1.2
        });

        // Create animation
        const animation = gsap.to(revealRef.current, {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
                trigger: revealRef.current,
                start: "top 900px",
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
        <div className="bg-[#F7F4FC] py-[130px] px-6 xl:px-0">
            <div className="max-w-[1240px] mx-auto">
                <div ref={revealRef} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div>
                        <div className="bg-[#E84721] p-5 w-full rounded text-white hover:scale-105 ease-in duration-200">
                            <h2 className="text-[18px] inline px-3 py-1 rounded bg-[#8f3420] font-medium leading-[100%] uppercase">Basic Package</h2>
                            <p className="text-[40px] font-semibold leading-[100%] mt-[30px]">$ 500 <span className="text-[25px]">++</span></p>
                        </div>
                        <div className="p-7 space-y-4 bg-white rounded-b shadow-lg">
                            <PackageData text="Up to 4 Web Pages" />
                            <PackageData text="Fully Responsive Design" />
                            <PackageData text="Basic UI/UX design" />
                            <PackageData text="Social Media Integration" />
                            <PackageData text="Friendly SEO Setup" />
                            <PackageData text="Admin Authentication" svg="false" />
                            <PackageData text="Custom Features" svg="false" />
                            <PackageData text="User Authentication" svg="false" />
                            <PackageData text="Third Party API Integration" svg="false" />
                            <PackageData text="Share Hosting" />
                            <PackageData text="Server Deployment" />
                            <PackageData text="SSL Certificate Installation" />
                            <PackageData text="1 Revision Round" />
                        </div>
                    </div>
                    <div>
                        <div className="bg-[#E84721] p-5 w-full rounded text-white hover:scale-105 ease-in duration-200">
                            <h2 className="text-[18px] inline px-3 py-1 rounded bg-[#8f3420] font-medium leading-[100%] uppercase">Standard Package</h2>
                            <p className="text-[40px] font-semibold leading-[100%] mt-[30px]">$ 1,000 <span className="text-[25px]">++</span></p>
                        </div>
                        <div className="p-7 space-y-4 bg-white rounded-b shadow-lg">
                            <PackageData text="Up to 8 Web Pages" />
                            <PackageData text="Fully Responsive Design" />
                            <PackageData text="Custom UI/UX design" />
                            <PackageData text="Social Media Integration" />
                            <PackageData text="Friendly SEO Setup" />
                            <PackageData text="Admin Authentication" />
                            <PackageData text="Basic Custom Features" />
                            <PackageData text="User Authentication" svg="false" />
                            <PackageData text="Third Party API Integration" svg="false" />
                            <PackageData text="VPS (Aws,Azure,etc...)" />
                            <PackageData text="Server Deployment" />
                            <PackageData text="SSL Certificate Installation" />
                            <PackageData text="2 Revision Round" />
                        </div>
                    </div>
                    <div>
                        <div className="bg-[#E84721] p-5 w-full rounded text-white hover:scale-105 ease-in duration-200">
                            <h2 className="text-[18px] inline px-3 py-1 rounded bg-[#8f3420] font-medium leading-[100%] uppercase">Premium Package</h2>
                            <p className="text-[40px] font-semibold leading-[100%] mt-[30px]">$ 2,000 <span className="text-[25px]">++</span></p>
                        </div>
                        <div className="p-7 space-y-4 bg-white rounded-b shadow-lg">
                            <PackageData text="Up to 20 Web Pages" />
                            <PackageData text="Fully Responsive Design" />
                            <PackageData text="Custom UI/UX design" />
                            <PackageData text="Social Media Integration" />
                            <PackageData text="Friendly SEO Setup" />
                            <PackageData text="Admin Authentication" />
                            <PackageData text="Advanced Custom Features" />
                            <PackageData text="User Authentication" />
                            <PackageData text="Third Party API Integration" />
                            <PackageData text="VPS (Aws,Azure,etc...)" />
                            <PackageData text="Server Deployment" />
                            <PackageData text="SSL Certificate Installation" />
                            <PackageData text="3 Revision Round" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Package