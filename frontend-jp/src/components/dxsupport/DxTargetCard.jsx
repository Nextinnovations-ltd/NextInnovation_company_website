import {PropTypes} from "prop-types"

const DxTargetCard = ({title,image,description}) => {
    return (
        <div className="dx-target-card lg:w-[360px] px-[37px] pt-8 pb-[50px] bg-white rounded-[27px]">
            <h3 className="text-[#02021E] text-center text-[20px] font-bold leading-[28px] lg:leading-[34px] tracking-[-2%]">{title}</h3>
            <img src={image} alt="" className="my-[30px] mx-auto" />
            <p className="text-[#1E2C44] text-[12px] lg:text-[13px] font-medium leading-[22px] lg:leading-[28px] tracking-[0%]">{description}</p>
        </div>
    );
}

DxTargetCard.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}

export default DxTargetCard;
