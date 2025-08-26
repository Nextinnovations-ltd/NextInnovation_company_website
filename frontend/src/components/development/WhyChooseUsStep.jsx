import {PropTypes} from "prop-types"
const WhyChooseUsStep = ({step, title}) => {
    return (
        <div className="py-[30px] md:py-[48px] flex justify-between items-center border-b-[2px] border-[#000000]">
            <p className="text-[16px] md:text-[18px] font-semibold leading-[18px] tracking-[0.18px]">{step}</p>
            <h3 className="text-start w-[300px] md:w-[570px] lg:w-[600px] xl:w-[711px] text-[26px] md:text-[46px] lg:text-[48px] xl:text-[56px] font-light tracking-[-1.12px] italic">{title}</h3>
        </div>
    )
}

WhyChooseUsStep.propTypes = {
    title: PropTypes.string.isRequired,
    step: PropTypes.string.isRequired
}

export default WhyChooseUsStep