import {PropTypes} from "prop-types"

const StrengthCard = ({image,title,description,descriptionBold="",height="lg:min-h-[390px]"}) => {
    return (
        <div className={`lg:w-[601px] ${height} text-[#444444] bg-[#F5F5F7] rounded-[18px] pt-[25px] lg:pt-[36px] pb-[45px] lg:pb-[74px] px-[26px] lg:px-[44px]`}>
            <img src={image} alt="" className="w-[90px] lg:w-[116px] h-[90px] lg:h-[116px] mx-auto" />
            <h3 className="text-[16px] lg:text-[20px] font-bold leading-[24px] lg:leading-[34px] tracking-[-2%] text-center mt-[14px] mb-[24px]">{title}</h3>
            <p className="text-[12px] lg:text-[15px] font-normal leading-[22px] lg:leading-[24px] tracking-[0%]">
                {description}
                <span className="font-bold">{descriptionBold}</span>
            </p>
        </div>
    );
}

StrengthCard.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    descriptionBold: PropTypes.string,
    height: PropTypes.string,
}

export default StrengthCard;
