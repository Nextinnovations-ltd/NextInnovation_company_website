import { PropTypes } from "prop-types"
import ContactLabel from "./ContactLabel";

const ContactLabelInput = ({label,placeholder,type,name,require=false}) => {
    return (
        <div className="flex flex-col gap-3">
            <ContactLabel label={label} name={name} require={require} />
            <input id={name} type={type} name={name} className="bg-transparent text-[#7F7F7F] text-[14px] font-normal leading-[31px] tracking-[0%] border-[2px] border-[#00000014] rounded-[8px] h-[71px] px-4 focus:outline-none" placeholder={placeholder} />
        </div>
    );
}

ContactLabelInput.propTypes = {
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    require: PropTypes.bool,
}

export default ContactLabelInput;
