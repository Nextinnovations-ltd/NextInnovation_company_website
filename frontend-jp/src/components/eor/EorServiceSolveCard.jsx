import {PropTypes} from "prop-types"

const EorServiceSolveCard = ({image,title,description1,description2, last = false}) => {
    return (
        <div className={`flex gap-[80px] py-[64px] border-[#1E2C44] ${last ? 'border-y-[1px]' : 'border-t-[1px]'}`}>
            <img src={image} alt="" />
            <div>
                <h3 className="text-[20px] font-bold leading-[34px] tracking-[-2%] mb-[15px]">{title}</h3>
                <p className="text-[15px] font-normal leading-[24px] tracking-[0%]">{description1}<br/>{description2}</p>
            </div>
        </div>
    );
}

EorServiceSolveCard.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description1: PropTypes.string.isRequired,
    description2: PropTypes.string.isRequired,
    last: PropTypes.bool,
}

export default EorServiceSolveCard;
