import CircleButton from "../svg/CircleButton";
import {PropTypes} from "prop-types"
import { Link } from "react-router-dom";

const ServiceOverviewCard = ({title,description,text1,text2,image,link=""}) => {
    return (
        <div className="service-overview-card lg:w-[546px] min-h-[220px] lg:min-h-[350px] relative bg-white flex rounded-[16px] lg:rounded-[26px] shadow-[0px_3px_21px_4px] shadow-[#1E2C441A]">
            <div className="z-[5] text-[#444444] ps-[27px] pt-[43px]">
                <h3 className="text-[16px] lg:text-[28px] font-bold leading-[125%] tracking-[0%]">{title}</h3>
                <p className="text-[10px] lg:text-[14px] w-[190px] lg:w-[301px] font-normal leading-[18px] lg:leading-[31px] tracking-[0%] mt-[14px] mb-[36px]">{description}</p>
                <h4 className="text-[20px] lg:text-[38px] font-bold leading-[31px] lg:leading-[48px] tracking-[3%]">{text1}<span className="text-[10px] lg:text-[16px] font-medium leading-[16px] lg:leading-[25px] tracking-[3%]">{text2}</span></h4>
            </div>
            <div className="absolute rounded-r-[16px] lg:rounded-r-[26px] top-0 right-0 z-[2] overflow-hidden">
                <Link to={link}>
                    <img src={image} alt="" className="rounded-r-[16px] lg:rounded-r-[30px] h-[220px] lg:h-[350px] hover:scale-110 transition-transform duration-300 ease-in-out" />
                </Link>
            </div>
            <div className="absolute z-[3] bottom-4 lg:bottom-6 right-4 lg:right-6">
                <CircleButton link={link} />
            </div>
        </div>
    );
}

ServiceOverviewCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    text1: PropTypes.string.isRequired,
    text2: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    link: PropTypes.string,
}

export default ServiceOverviewCard;
