import { PropTypes } from "prop-types"

const ContactButton = ({children,buttonFunc}) => {
    return (
        <button onClick={(e)=>buttonFunc(e)} className="text-[16px] lg:text-[20px] font-bold leading-[22px] tracking-[-2%] text-white w-full rounded-[40px] py-5 bg-[#E84721] hover:bg-[#F15A29]">{children}</button>
    );
}

ContactButton.propTypes = {
    children: PropTypes.node,
    buttonFunc: PropTypes.func,
}

export default ContactButton;
