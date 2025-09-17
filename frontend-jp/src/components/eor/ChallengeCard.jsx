import {PropTypes} from "prop-types"

const ChallengeCard = ({image,title,description}) => {
    return (
        <div className="lg:w-[397px] challenge-card bg-white px-[28px] lg:px-[32px] pt-[28px] lg:pt-[32px] pb-[60px] rounded-[18px]">
            <div className="overflow-hidden rounded-[15px]">
                <img src={image} alt="" className="rounded-[10px] hover:scale-110 transition-transform duration-300 ease-in-out" />
            </div>
            <h3 className="text-center text-[16px] lg:text-[20px] font-bold leading-[24px] lg:leading-[34px] tracking-[-2%] mt-[24px] mb-[15px]">{title}</h3>
            <p className="text-[12px] lg:text-[15px] font-normal leading-[22px] lg:leading-[24px] tracking-[0%]">{description}</p>
        </div>
    );
}

ChallengeCard.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}

export default ChallengeCard;
