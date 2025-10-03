import ContactLabel from "./ContactLabel";
import {PropTypes} from "prop-types"

const ContactRadio = ({label,name,value,setState}) => {
    return (
        <div className="flex gap-[10px] items-center">
            <input onChange={(e)=>setState(e.target.value)} value={value} type="radio" id={name} name="known" className="w-[20px] h-[20px] border-[1px] border-[#DFE4EA] rounded-full accent-[#F15A29]" />
            <ContactLabel label={label} name={name} textColor="text-[#7F7F7F]" />
        </div>
    );
}

ContactRadio.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    setState: PropTypes.func.isRequired,
}

export default ContactRadio;
