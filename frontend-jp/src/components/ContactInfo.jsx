import { useRef } from "react";
import useLineAnimation from "../hooks/useLineAnimation";
import { Link } from "react-router-dom";

const ContactInfo = () => {
    const topLineRef = useRef(null)
    useLineAnimation(topLineRef,{start: "top 90%"})

    return (
        <div className="relative mt-[117px] lg:mt-[122px] text-[#444444] pt-[24px]">
            <span ref={topLineRef} className="absolute top-0 left-0 h-[1px] lg:h-[2px] bg-[#1E2C44] block"></span>
            <p className="text-[12px] lg:text-[16px] font-medium leading-[31px] tracking-[0%] mb-[10px]">連絡先情報</p>
            <h3 className="roboto text-[32px] lg:text-[58px] font-medium lg:font-bold leading-[38px] lg:leading-[67px] tracking-[0%] lg:tracking-[-1%] uppercase">contact info</h3>
            <div className="mt-[32px] space-y-[32px] lg:space-y-0 lg:mt-[98px] lg:flex lg:justify-between lg:items-start">
                <div className="space-y-4">
                    <p className="text-[#999999] text-[14px] font-bold leading-[100%] tracking-[1%]">メール</p>
                    <Link to="https://mail.google.com/mail/?view=cm&to=info@next-innovations.ltd" className="roboto text-[18px] font-normal leading-[26px] tracking-[1%] hidden lg:inline-block" target="__blank">info@next-innovations.ltd</Link>
                    <Link to="mailto:info@next-innovations.ltd" className="roboto text-[18px] font-normal leading-[26px] tracking-[1%] inline-block lg:hidden" target="__blank">info@next-innovations.ltd</Link>
                </div>
                <div className="space-y-4">
                    <p className="text-[#999999] text-[14px] font-bold leading-[100%] tracking-[1%]">電話番号</p>
                    <p className="roboto text-[18px] font-normal leading-[26px] tracking-[1%]">09 451 663 606 </p>
                </div>
            </div>
            <div className="space-y-4 mt-[48px]">
                <p className="text-[#999999] text-[14px] font-bold leading-[100%] tracking-[1%]">住所</p>
                <p className="roboto text-[18px] font-normal leading-[28px] tracking-[1%]">Room No (602), Gandamar Residence, Gandamar Road, <br/>Mayangone Township, Yangon, Myanmar</p>
            </div>
        </div>
    );
}

export default ContactInfo;
