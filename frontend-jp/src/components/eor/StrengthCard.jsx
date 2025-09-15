import {PropTypes} from "prop-types"

const StrengthCard = ({image,title,description}) => {
    return (
        <div className="w-[601px] text-[#444444] bg-[#F5F5F7] rounded-[18px] pt-[36px] pb-[74px] px-[44px]">
            <img src={image} alt="" className="w-[116px] h-[116px] mx-auto" />
            <h3 className="text-[20px] font-bold leading-[34px] tracking-[-2%] text-center mt-[14px] mb-[24px]">{title}</h3>
            <p className="text-[15px] font-normal leading-[24px] tracking-[0%]">{description}</p>
        </div>
    );
}

StrengthCard.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}

export default StrengthCard;
