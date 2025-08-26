import {PropTypes} from "prop-types"

const PackageData = ({text,svg = "true"}) => {

    let correctSvg = (
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="10" cy="10" r="10" fill="#1A1A1A"/>
        <path d="M5 9.25L8.84615 13L15 7" stroke="white" strokeWidth="2"/>
        </svg>
    )

    let crossSvg = (
        <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path fill="#e90c0c" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/>
        </svg>
    )

    return (
        <div className="flex items-start gap-4">
            <div>{svg == 'true' ? correctSvg : crossSvg}</div>
            <span className="text-[18px] font-medium leading-[100%]">{text}</span>
        </div>
    )
}

PackageData.propTypes = {
    text: PropTypes.string.isRequired,
    svg: PropTypes.string
}

export default PackageData