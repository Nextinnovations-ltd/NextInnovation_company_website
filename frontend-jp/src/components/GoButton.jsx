import {PropTypes} from "prop-types";
const GoButton = ({name}) => {
    return (
        <button className="w-[254px] h-[68px] px-[30px] rounded-[40px] text-[16px] font-bold leading-[20px] tracking-[0%] text-white bg-[#F15A29]">
            <div className="flex justify-between items-end">
                {name}
                <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_191_485)">
                <path d="M0 4H14L11.2 0" stroke="white" strokeWidth="1.5"/>
                </g>
                <defs>
                <clipPath id="clip0_191_485">
                <rect width="16" height="14" fill="white"/>
                </clipPath>
                </defs>
                </svg>
            </div>                
        </button>
    )
}

GoButton.propTypes = {
    name: PropTypes.string.isRequired,
}

export default GoButton