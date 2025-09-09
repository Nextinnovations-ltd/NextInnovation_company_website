import { PropTypes } from "prop-types";

const CareerCard = ({ title, image, category, date }) => {
    return (
      <div>
         <div>
            <div className="blockReveal overflow-hidden">
                <img src={image} className="w-full h-[400px] hover:scale-110 ease-in-out duration-300" alt="" />
            </div>
            <div className="roboto text-[#444444] flex gap-[16px] text-[12px] lg:text-[14px] font-semibold leading-[100%] tracking-[1%] uppercase mt-[34px] mb-2">
                <span>{date}</span>
                <span>{category}</span>
            </div>
            <h4 className="text-[24px] text-[#444444] font-bold leading-[44px] tracking-[-2%] text-limit min-h-[71px]">{title}</h4>
        </div>
       </div>
    )
}

CareerCard.propTypes = {
    image: PropTypes.string.isRequired,
    category:PropTypes.string.isRequired,
    date:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired
}

export default CareerCard