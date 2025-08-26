import {PropTypes} from 'prop-types'

const IconDiv = ({image,title}) => {
    return (
        <div className="flex flex-col items-center">
            <img src={image} className="w-[70px] h-[70px] lg:w-[90px] lg:h-[90px] xl:w-[100px] xl:h-[100px]" alt="" />
            <span className="text-[16px] lg:text-[18px] font-normal leading-[26px] tracking-[0.18px] mt-[8px] opacity-[0.8]">{title}</span>
        </div>
    )
}

IconDiv.propTypes = {
    image: PropTypes.string.isRequired,
    title:PropTypes.string.isRequired
}

export default IconDiv