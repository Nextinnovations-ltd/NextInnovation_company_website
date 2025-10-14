import {PropTypes} from "prop-types"

const DeliverableCard = ({image,title,description}) => {
    return (
        <div className="deliverable-card px-[28px] pt-[28px] pb-[32px]">
            <img src={image} alt="" />
            <h3 className="text-[20px] font-bold leading-[34px] tracking-[-2%] text-[#02021E] mt-[22px] mb-[13px]">{title}</h3>
            <p className=" text-[14px] font-normal leading-[31px] tracking-[0%] text-[#444444]">{description}</p>
        </div>
    );
}

DeliverableCard.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}

export default DeliverableCard;
