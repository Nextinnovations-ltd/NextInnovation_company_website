import {PropTypes} from "prop-types"
import { Link } from "react-router-dom";
import BreadcrumbRightArrow from "./svg/BreadcrumbRightArrow";

const Breadcrumb = ({routes,current}) => {
    return (
        <div className="text-[13px] font-normal leading-[22px] tracking-[0%] flex gap-2 items-center">
            <Link to="">TOP</Link>
            <BreadcrumbRightArrow/>
            {routes.map((route, index) => (
                <div key={index} className="flex gap-2 items-center">
                    <Link to={route.link}>{route.name}</Link>
                    <BreadcrumbRightArrow/>
                </div>
            ))}
            <p className="font-medium">{current}</p>
        </div>
    );
}

Breadcrumb.propTypes = {
    routes: PropTypes.array.isRequired,
    current: PropTypes.string.isRequired,
}

export default Breadcrumb;
