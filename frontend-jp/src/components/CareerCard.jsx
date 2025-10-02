import { PropTypes } from "prop-types";

const CareerCard = ({image,date,title}) => {
    return (
        <div className="news-card text-[#444444]">
            <div className="overflow-hidden rounded-[12px]">
                <img src={image} alt="" className="rounded-[12px] w-[404px] h-[260px] hover:scale-110 duration-300 ease-in-out transition-transform" />
            </div>
            <p className="text-[12px] font-normal leading-[22px] tracking-[0%] mt-4">{date}</p>
            <h3 className="roboto text-limit  min-h-[65px] max-h-[65px] text-[20px] font-medium leading-[30px] tracking-[0%] uppercase">{title}</h3>
        </div>
    )
}

CareerCard.propTypes = {
    image: PropTypes.string.isRequired,
    date:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
}

export default CareerCard