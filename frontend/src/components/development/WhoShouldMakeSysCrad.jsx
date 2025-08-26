import {PropTypes} from "prop-types"
const WhoShouldMakeSysCrad = ({title, image}) => {
    return (
        <div className="flex flex-col gap-[24px] pt-[24px] border-t-[2px] border-[#1A1A1A]">
            <h4 className="text-[24px] min-h-[64px] font-normal leading-[32px]">{title}</h4>
            <img src={image} className="w-full" alt="" />
        </div>
    )
}

WhoShouldMakeSysCrad.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
}

export default WhoShouldMakeSysCrad