import {PropTypes} from "prop-types"
import CircleButton from "../svg/CircleButton";

const OtherServiceCard = ({title,description,image}) => {
    return (
        <div className="relative w-[396px] shadow-[0px_3px_21px_4px_#1E2C441A] rounded-[15px]">
            <div className="pt-[34px] ps-[26px] pe-[38px] text-[#444444]">
                <h3 className="text-[32px] font-bold leading-[125%] tracking-[0%] mb-4">{title}</h3>
                <p className="text-[15px] min-h-[72px] font-normal leading-[24px] tracking-[0%]">{description}</p>
            </div>
            <img src={image} alt="" className="rounded-b-[15px]" />
            <div className="absolute bottom-[33px] right-[22px]">
                <CircleButton/>
            </div>
        </div>
    );
}

OtherServiceCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
}

export default OtherServiceCard;
