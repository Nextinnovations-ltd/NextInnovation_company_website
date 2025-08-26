import {PropTypes} from "prop-types"
const WhoShouldMakeExplain = ({title, description}) => {
    return (
        <div className="lg:flex lg:justify-between">
            <h3 className="w-[300px] md:w-[400px] xl:w-[475px] text-[30px] md:text-[40px] xl:text-[48px] font-semibold leading-[30px] md:leading-[38px] xl:leading-[48px] tracking-[-0.96px] uppercase">{title}</h3>
            <p className="lg:w-[501px] text-[16px] md:text-[18px] font-normal leading-[26px] tracking-[0.18px] mt-[20px] lg:mt-0 ms-[64px] md:ms-[200px] lg:ms-0">{description}</p>
        </div>
    )
}

WhoShouldMakeExplain.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

export default WhoShouldMakeExplain