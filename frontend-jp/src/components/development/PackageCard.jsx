import {PropTypes} from "prop-types"
import ConsultFreeGradient from "../../../public/images/consult-free-gradient.png"
import { Link } from "react-router-dom"
const PackageCard = ({title, pages, period, price}) => {
    return (
        <div className="px-[14px] pt-[14px] xl:px-[20px] xl:pt-[20px] border-[2px] rounded-[24px] border-[#CCC]">
            <p className="px-[18px] py-[16px] xl:px-[24px] xl:py-[24px] text-[16px] xl:text-[18px] font-semibold leading-[21.6px] tracking-[0.09px] bg-[#1A1A1A] text-[#F0F0F0] rounded-[9px]">{title}</p>
            <div className="grid grid-cols-2 text-[16px] xl:text-[18px]">
                <div className=" py-[24px] font-normal leading-[26px] tracking-[0.18px] border-b-[2px] border-[#CCC] ms-[13px] me-[30px]">
                    <p className="text-[#999999] text-nowrap">Pages</p>
                    <p>{pages}</p>
                </div>
                <div className=" py-[24px] font-normal leading-[26px] tracking-[0.18px] border-b-[2px] border-[#CCC] me-[16px]">
                    <p className="text-[#999999] text-nowrap">Production Period</p>
                    <p>{period}</p>
                </div>
                <div className=" py-[24px] font-normal leading-[26px] tracking-[0.18px] ms-[13px]">
                    <p className="text-[#999999] text-nowrap">Price</p>
                    <p>{price}</p>
                </div>
                <Link to="/contact" className="pt-[38px]">
                    <img src={ConsultFreeGradient} alt="" />
                </Link>
            </div>
        </div>
    )
}

PackageCard.propTypes = {
    pages: PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
    period:PropTypes.string.isRequired,
    price:PropTypes.string.isRequired
}

export default PackageCard