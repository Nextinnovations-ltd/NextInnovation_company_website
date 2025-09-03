import RightArrow from "./svg/RightArrow"
import {PropTypes} from "prop-types"

const MediaButton = ({bgColor}) => {
    return (
        <button className={`${bgColor} rounded-[40px] flex justify-between items-end w-full py-6 ps-[211px] pe-[27px]`}>
            詳しく見る
            <RightArrow/>
        </button>
    )
}

MediaButton.propTypes = {
    bgColor: PropTypes.string.isRequired
}

export default MediaButton