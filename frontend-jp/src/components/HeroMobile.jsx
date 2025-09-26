import { useRef } from "react"
import DrivingDXwith from "/images/DrivingDXwith-mobile.png"
import HeroBg from "/images/hero-mobile-bg.png"
import HeroStar from "/images/hero-star.png"
import useHeroAnimation from "../hooks/useHeroAnimation"
import logo from '../../public/images/Group 34121.svg'; // 
const HeroMobile = () => {

    const drivingRef = useRef(null);
    const SouthEastRef = useRef(null);
    const StarRef = useRef(null);
    const TalentRef = useRef(null);
    const ParaRef = useRef(null);

    useHeroAnimation(drivingRef,SouthEastRef,StarRef,TalentRef,ParaRef);

    return (
        <div className="bg-[#1E2C44]">
            <div className="bg-white rounded-b-[40px] pt-[60px] relative overflow-hidden">
                 <div className="w-full  absolute ">

                    {[...Array(10)].map((_, i) => (
                        <img
                            key={i}
                            src={logo}
                            alt="Floating Logo"
                            className="floating-logo"
                            style={{
                                width: `${Math.random() * 400 + 380}px`, // random size
                                left: `${Math.random() * 100}%`, // random horizontal position
                                animationDuration: `${Math.random() * 8 + 10}s`, // random speed
                                rotate: `${Math.random() * 90 - 15}deg`, // random tilt (-15° to 15°)
                            }}
                        />
                    ))}
                 </div>
                <div className="px-3 pt-[30px] pb-[105px] " >
                 
               
                    

                    <div className="h-[125px] overflow-hidden">
                        <img src={DrivingDXwith} alt="" ref={drivingRef} />
                    </div>
                    <div className="montserrat h-[130px] overflow-hidden mt-[11px] text-[#444444] text-[60px] font-bold leading-[119%] tracking-[-3%] uppercase">
                        <div ref={SouthEastRef}>
                            <p>Southeast</p>
                            <p className="ps-7">Asian</p>
                        </div>
                    </div>
                    <div className="flex gap-[15px] items-center ps-7 mt-[11px] overflow-hidden">
                        <img ref={StarRef} src={HeroStar} className="w-[36px]" alt="" />
                        <p ref={TalentRef} className="montserrat text-[60px] text-[#096FCA] font-bold leading-[120%] tracking-[-3%] uppercase">Talent</p>
                    </div>
                    <div className="mt-[30px] text-[#444444] px-2">
                        <div ref={ParaRef}>
                            <h3 className="text-[20px] font-bold leading-[29px] tracking-[0%]">グローバル人材で、DXを加速する。</h3>
                            <div className="w-[320px] border-t-[2px] border-[#444444] pt-[16px] mt-[12px]">
                                <p className="text-[12px] font-medium leading-[21px] tracking-[-4%]">
                                    EORを基盤に、東南アジアの優秀なタレント<br/>
                                    と共に、企業のDX推進から受託開発、UI/UX <br/>
                                    デザインまでを 一貫してサポート。国境を<br/>
                                    越えた新しいチームで、未来の成長と挑戦を<br/>
                                    共に実現します。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroMobile;
