import { useRef } from "react";
import Logoimage1 from "/images/Blur1.svg";
import Logoimage2 from "/images/Blur2.svg";
import DrivingDXwith from "/images/DrivingDXwith.png";
import HeroStar from "/images/hero-star.png";
import useHeroAnimation from "../hooks/useHeroAnimation";

const Hero = () => {

  const drivingRef = useRef(null);
  const SouthEastRef = useRef(null);
  const StarRef = useRef(null);
  const TalentRef = useRef(null);
  const ParaRef = useRef(null);

  useHeroAnimation(drivingRef,SouthEastRef,StarRef,TalentRef,ParaRef);

  return (
    <div className="bg-white pt-[80px]">
      <div className="NI-homepage-background-logo-container relative flex w-full h-[650px] md:h-[110vh] justify-center items-center overflow-hidden">
        <img src={Logoimage1} alt="" className="logo1 layer w-[24%] left-[3%] relative opacity-60" />
        <img src={Logoimage2} alt="" className="logo2 layer w-[70%] right-[2%] relative opacity-60" />
      </div>
      <div className="absolute top-[140px] left-[72px] right-[66px]">
        <div className="relative">
          <div className="h-[100px] overflow-hidden">
            <img src={DrivingDXwith} alt="" ref={drivingRef} />
          </div>
          <div className="ms-[103px] relative w-[1120px]">
            <div className="h-[120px] overflow-hidden">
              <h1 ref={SouthEastRef} className="text-[110px] text-[#444444] font-bold leading-[117%] tracking-[-3%] uppercase montserrat">Southeast Asian</h1>
            </div>
            <div className="flex gap-4 justify-end items-center ms-[103px] overflow-hidden">
              <img ref={StarRef} src={HeroStar} alt="" className="w-[99px] h-[108px]" />
              <h1 ref={TalentRef} className="text-[110px] text-[#096FCA] font-bold leading-[117%] tracking-[-3%] uppercase montserrat">Talent</h1>
            </div>
          </div>
        </div>

        <div className="mt-[70px] text-[#444444]">
          <div ref={ParaRef}>
            <h3 className="text-[40px] font-bold leading-[56px] tracking-[0%]">グローバル人材で、DXを加速する。</h3>
            <div className="border-t-[2px] border-[#444444] w-[620px] pt-[16px] mt-[12px]">
              <p className="text-[20px] font-medium leading-[40px] tracking-[1%]">
                EORを基盤に、東南アジアの優秀なタレントと共に、企業のDX推進<br/>
                から受託開発、UI/UXデザインまでを 一貫してサポート。国境を<br/>
                越えた新しいチームで、未来の成長と挑戦を共に実現します。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero