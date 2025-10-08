import { PropTypes } from "prop-types"

const ContactConfirmInfo = ({label,text=""}) => {
    return (
        <p className="px-4 py-5 text-[15px] font-bold leading-[27px] tracking-[0%]">{label}  - <span className="text-[14px] font-normal leading-[31px] tracking-[0%]">{text}</span></p>
    );
}

ContactConfirmInfo.propTypes = {
    label: PropTypes.string.isRequired,
    text: PropTypes.string,
}

export default ContactConfirmInfo;
