import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Logoimage1 from "/images/Blur1.svg";
import Logoimage2 from "/images/Blur2.svg";
import DrivingDXwith from "/images/DrivingDXwith.png";
import HeroStar from "/images/hero-star.png";
import NILoop from "/images/Ni-loop.gif";
import Hand from "/images/hand.svg";
import { Link } from "react-router-dom";

const Hero = () => {

  const drivingRef = useRef(null);
  const SouthEastRef = useRef(null);
  const StarRef = useRef(null);
  const TalentRef = useRef(null);
  const ParaRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      drivingRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" }
    )
    .fromTo(
      SouthEastRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" },
      "-=0.1"
    )
    .fromTo(
      StarRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" },
      "-=0.1"
    )
    .fromTo(
      TalentRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" },
      "-=0.1"
    )
    .fromTo(
      ParaRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" },
      "-=0.1"
    )
    .fromTo(
      "#hero-rotate",
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" }, // grow to normal
      "<"
    );
  }, []);

  return (
    <div className="bg-white">
      <div className="NI-homepage-background-logo-container relative flex w-full h-[650px] md:h-[110vh] justify-center items-center overflow-hidden">
        <img src={Logoimage1} alt="" className="logo1 layer w-[24%] left-[3%] relative" />
        <img src={Logoimage2} alt="" className="logo2 layer w-[70%] right-[2%] relative" />
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
            <div className="flex gap-4 justify-end ms-[103px] overflow-hidden">
              <img ref={StarRef} src={HeroStar} alt="" />
              <h1 ref={TalentRef} className="text-[110px] text-[#096FCA] font-bold leading-[117%] tracking-[-3%] uppercase montserrat">Talent</h1>
            </div>
          </div>
        </div>

        <div className="mt-[70px] text-[#444444] flex justify-between items-center">
          <div ref={ParaRef} className="">
            <h3 className="text-[45px] font-bold leading-[76px] tracking-[0%]">グローバル人材で、DXを加速する。</h3>
            <div className="border-t-[2px] border-[#444444] w-[700px] pt-[20px] mt-[16px]">
              <p className="text-[24px] font-medium leading-[40px] tracking-[1%]">
                EORを軸に、東南アジアのタレントを活かした<br/>DX推進・受託開発・UI/UXをワンストップで提供します。
              </p>
            </div>
          </div>
          <div id="hero-rotate">
            <div className="relative">
              <img src={NILoop} alt="" className="relative w-[277px] mix-blend-difference" />
              <Link className="flex gap-[12px] items-center absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
                <img src={Hand} alt="" />
                <p className="text-[16px] font-semibold leading-[20px] tracking-[-2%] uppercase text-nowrap">consult free</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero