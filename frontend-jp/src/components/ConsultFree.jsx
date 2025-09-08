import NILoop from "/images/Ni-loop.gif";
import Hand from "/images/hand.svg";
import { Link } from "react-router-dom";

const ConsultFree = () => {
    return (
        <div id="hero-rotate" className="fixed right-[12px] md:right-[55px] bottom-[18.5px] md:bottom-[68px] z-[100]">
            <div className="relative">
                <img src={NILoop} alt="" className="relative w-[149px] lg:w-[277px] mix-blend-difference" />
                <Link className="flex gap-[6.5px] lg:gap-[12px] items-center absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
                    <img src={Hand} className="w-[13px] lg:w-full" alt="" />
                    <p className="text-[8.7px] lg:text-[16px] text-[#444444] font-semibold leading-[10.8px] lg:leading-[20px] tracking-[-2%] uppercase text-nowrap">consult free</p>
                </Link>
            </div>
        </div>
    )
}

export default ConsultFree