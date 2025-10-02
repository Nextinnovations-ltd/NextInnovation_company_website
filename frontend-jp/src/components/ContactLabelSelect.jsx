import { PropTypes } from "prop-types"
import ContactLabel from "./ContactLabel";

const ContactLabelSelect = ({children,label,name,require=false}) => {
    return (
        <div className="flex flex-col gap-3 text-[14px] font-normal leading-[31px] tracking-[0%]">
            <ContactLabel label={label} name={name} require={require} />
            <div className="relative w-full">
                <select id={name} name="name" className="appearance-none text-[14px] font-normal leading-[31px] tracking-[0%] bg-transparent text-[#7F7F7F] border-[2px] border-[#00000014] rounded-[8px] h-[71px] px-4 focus:outline-none w-full">
                    {children}
                </select>
                <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
                    <svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 13L12 18L12 8.5" stroke="#444444" strokeWidth="1.5" />
                    </svg>
                </div>
            </div>
        </div>
    );
}

ContactLabelSelect.propTypes = {
    children: PropTypes.node,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    require: PropTypes.bool,
}

export default ContactLabelSelect;
