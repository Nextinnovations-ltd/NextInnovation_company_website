import {PropTypes} from "prop-types"
import CircleButton from "../svg/CircleButton";
import { Link } from "react-router-dom";

const OtherServiceCard = ({title,description,image,link=""}) => {
    return (
        <div className="other-service-card relative lg:w-[396px] shadow-[0px_3px_21px_4px_#1E2C441A] rounded-[15px]">
            <div className="pt-[34px] ps-[26px] pe-[38px] text-[#444444]">
                <h3 className="text-[26px] lg:text-[32px] font-bold leading-[125%] tracking-[0%] mb-3 lg:mb-4">{title}</h3>
                <p className="text-[12px] lg:text-[15px] min-h-[72px] font-normal leading-[22px] lg:leading-[24px] tracking-[0%]">{description}</p>
            </div>
            <div className="overflow-hidden rounded-b-[15px]">
                <Link to={link}>
                    <img src={image} alt="" className="rounded-b-[15px] hover:scale-110 transition-transform duration-300 ease-in-out" />
                </Link>
            </div>
            <div className="absolute bottom-[33px] right-[22px]">
                <CircleButton link={link} />
            </div>
        </div>
    );
}

OtherServiceCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    link: PropTypes.string,
}

export default OtherServiceCard;
