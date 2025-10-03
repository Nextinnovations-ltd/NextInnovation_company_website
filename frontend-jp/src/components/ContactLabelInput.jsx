import { PropTypes } from "prop-types"
import ContactLabel from "./ContactLabel";
import Danger from "./svg/Danger"

const ContactLabelInput = ({label,placeholder,type,name,require=false,state,setState,error=[]}) => {

    let className = error.length > 0 ? 'border-[#E32222CC]' : 'border-[#00000014]';
    
    return (
        <div className="flex flex-col gap-3 text-[14px] font-normal leading-[31px] tracking-[0%]">
            <ContactLabel label={label} name={name} require={require} />
            <input id={name} type={type} 
                className={`${className} bg-transparent text-[#7F7F7F] border-[2px] rounded-[8px] h-[71px] px-4 focus:outline-none`} placeholder={placeholder}
                onChange={(e)=>setState(e.target.value)} value={state}
            />
            {error.length > 0 && (
                <p className="text-[#E01C1CCC] flex items-center gap-[13px]">
                    <Danger/>
                    {error}
                </p>
            )}
        </div>
    );
}

ContactLabelInput.propTypes = {
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    require: PropTypes.bool,
    state: PropTypes.string.isRequired,
    setState: PropTypes.func.isRequired,
    error: PropTypes.array
}

export default ContactLabelInput;
