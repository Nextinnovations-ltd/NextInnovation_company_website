import { PropTypes } from "prop-types"

const ContactLabel = ({name="",label,require=false,textColor="text-[#000000CC]"}) => {
    return (
        <label htmlFor={name} className={`${textColor} text-[12px] lg:text-[14px] font-normal leading-[16px] lg:leading-[31px] tracking-[0%]`}>{label} <span className="text-[#FF0000CC]">{require ? '*' : ''}</span></label>
    );
}

ContactLabel.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string.isRequired,
    require: PropTypes.bool,
    textColor: PropTypes.string,
}

export default ContactLabel;
