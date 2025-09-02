import {PropTypes} from "prop-types"
const WhatYouCanDo = ({title, description}) => {
    return (
        <div className="what-you-can-do">
            <div className="lg:flex lg:justify-between">
                <h3 className="lg:w-[577px] text-[30px] md:text-[40px] xl:text-[48px] font-semibold leading-[48px] tracking-[-0.96px] uppercase">{title}</h3>
                <p className="lg:w-[503px] text-[16px] md:text-[18px] font-normal leading-[26px] tracking-[0.18px] mt-[20px] lg:mt-0">{description}</p>
            </div>
        </div>
    )
}

WhatYouCanDo.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

export default WhatYouCanDo