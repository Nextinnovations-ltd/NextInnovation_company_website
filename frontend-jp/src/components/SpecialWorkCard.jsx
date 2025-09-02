import {PropTypes} from "prop-types"
const SpecialWorkCard = ({title1,title2,step,image}) => {
    return (
        <div>
            <div className="flex justify-between items-center px-[8px] xl:px-[16px]">
                <p className="text-[16px] md:text-[22px] xl:text-[24px] font-semibold leading-[20px] md:leading-[30px] tracking-[-0.48px] uppercase">
                    <span>{title1}</span><br/>
                    <span>{title2}</span>
                </p>
                <h3 className="text-[46px] xl:text-[56px] text-[#626262] font-semibold leading-[40px] md:leading-[64px]">{step}</h3>
            </div>
            <img src={image} className="w-full mt-[10px] md:mt-[16px]" alt="" />
        </div>
    )
}

SpecialWorkCard.propTypes = {
    title1: PropTypes.string.isRequired,
    title2: PropTypes.string.isRequired,
    step: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
}

export default SpecialWorkCard