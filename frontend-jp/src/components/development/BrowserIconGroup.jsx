import {PropTypes} from "prop-types"
const BrowserIconGroup = ({image, title, version}) => {
    return (
        <div className="flex flex-col items-center">
            <img src={image} className="w-[70px] h-[70px] lg:w-[90px] lg:h-[90px] xl:w-[100px] xl:h-[100px]" alt="" />
            <span className="text-[14px] text-[#E84721] font-normal leading-[17px] tracking-[0.14px] mt-[8px] mb-[2px] opacity-[0.8]">{title}</span>
            <span className="text-[14px] font-normal leading-[17px] tracking-[0.14px] opacity-[0.8]">{version}</span>
        </div>
    )
}

BrowserIconGroup.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    version: PropTypes.string.isRequired
}

export default BrowserIconGroup