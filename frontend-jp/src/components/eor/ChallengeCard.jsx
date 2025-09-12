import {PropTypes} from "prop-types"

const ChallengeCard = ({image,title,description}) => {
    return (
        <div className="w-[397px] bg-white px-[32px] pt-[32px] pb-[60px] rounded-[18px]">
            <img src={image} alt="" className="rounded-[10px]" />
            <h3 className="text-center text-[20px] font-bold leading-[34px] tracking-[-2%] mt-[24px] mb-[15px]">{title}</h3>
            <p className="text-[15px] font-normal leading-[24px] tracking-[0%]">{description}</p>
        </div>
    );
}

ChallengeCard.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}

export default ChallengeCard;
