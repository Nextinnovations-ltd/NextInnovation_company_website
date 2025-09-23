import {PropTypes} from "prop-types"

const DeliverableCard = ({image,title,description}) => {
    return (
        <div className="deliverable-card w-[397px] px-8 pt-8 pb-[60px]">
            <img src={image} alt="" />
            <h3 className="text-[20px] font-bold leading-[34px] tracking-[-2%] text-[#02021E] mt-6 mb-[15px]">{title}</h3>
            <p className=" text-[15px] font-normal leading-[24px] tracking-[0%] text-[#444444]">{description}</p>
        </div>
    );
}

DeliverableCard.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}

export default DeliverableCard;
