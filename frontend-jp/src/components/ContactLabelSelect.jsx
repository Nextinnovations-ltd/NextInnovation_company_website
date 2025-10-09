import { PropTypes } from "prop-types"
import ContactLabel from "./ContactLabel";
import Danger from "./svg/Danger";

const ContactLabelSelect = ({children,label,require=false,state,setState,error=[]}) => {
    return (
        <div className="flex flex-col gap-3">
            <ContactLabel label={label} require={require} />
            <div className="relative w-full">
                <select value={state} onChange={(e)=>setState(e.target.value)} className={`${error.length > 0 ? 'border-[#E32222CC]' : 'border-[#00000014]'} appearance-none text-[12px] lg:text-[14px] font-normal leading-[16px] lg:leading-[31px] tracking-[0%] bg-transparent text-[#02021E] placeholder:text-[#7F7F7F] border-[2px] rounded-[8px] h-[44px] lg:h-[71px] px-4 focus:outline-none w-full`}>
                    {children}
                </select>
                <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
                    <svg className="w-[17px] lg:w-auto" width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 13L12 18L12 8.5" stroke="#444444" strokeWidth="1.5" />
                    </svg>
                </div>
            </div>
            {error.length > 0 && (
                <p className="text-[#E01C1CCC] flex items-center gap-[13px]">
                    <Danger/>
                    {error}
                </p>
            )}
        </div>
    );
}

ContactLabelSelect.propTypes = {
    children: PropTypes.node,
    label: PropTypes.string.isRequired,
    require: PropTypes.bool,
    state: PropTypes.string.isRequired,
    setState: PropTypes.func.isRequired,
    error: PropTypes.array
}

export default ContactLabelSelect;
