import {PropTypes} from "prop-types"
const Logo = ({image,title}) => {
    return (
        <div className="flex flex-col items-center">
            <div className="img-div flex items-center">
                <img src={image} alt="" />
            </div>
            <span className="text-[14px] font-semibold text-nowrap">
                {title}
            </span>
        </div>
    )
}

Logo.propTypes = {
    image : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
}

export default Logo