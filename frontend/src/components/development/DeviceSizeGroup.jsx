import {PropTypes} from "prop-types"
const DeviceSizeGroup = ({title, size}) => {
    return (
        <div>
            <p className="text-[14px] md:text-[16px] lg:text-[18px] text-[#E84721] font-normal leading-[26px] tracking-[0.18px] opacity-[0.8]">{title}</p>
            <p className="text-[14px] md:text-[16px] lg:text-[18px] font-normal leading-[26px] tracking-[0.18px] opacity-[0.8]">{size}</p>
        </div>
    )
}

DeviceSizeGroup.propTypes = {
    title: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired
}

export default DeviceSizeGroup