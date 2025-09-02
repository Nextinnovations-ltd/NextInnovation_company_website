import { Link } from "react-router-dom"
import {PropTypes} from "prop-types"
const DropDownMenu = ({name,path,toggleDropdown}) => {
    return (
        <div className="py-1 navbar-about-subHeader hover:bg-gray-100" role="none">
            <Link to={path} onClick={toggleDropdown} className="block px-4 py-2 text-nowrap" role="menuitem" tabIndex="-1" id="menu-item-0">{name}</Link>
        </div>
    )
}

DropDownMenu.propTypes = {
    name: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    toggleDropdown: PropTypes.func.isRequired
}

export default DropDownMenu