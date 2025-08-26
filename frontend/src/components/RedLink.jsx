import { Link } from 'react-router-dom'
import {PropTypes} from "prop-types"

const RedLink = ({link,title}) => {
    return (
        <Link to={link} className="flex gap-[16px] items-center">
            <p className="text-[20px] lg:text-[23px] xl:text-[24px] text-[#E84721] font-normal leading-[32px]">{title}</p>
            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 8.5H14L11.2 4.5" stroke="#E84721" strokeWidth="1.5"/>
            </svg>
        </Link>
    )
}

RedLink.propTypes = {
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
}

export default RedLink