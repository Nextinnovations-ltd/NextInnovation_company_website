import RightWhiteArrow from "../../../public/images/white-right-arrow.svg"
import { Link } from "react-router-dom"
const ConsultfreeBtn = () => {
    return (
        <Link to="/contact" className="flex gap-[8px]">
            <div className="text-[16px] font-medium leading-[22px] tracking-[-0.32px] px-[22px] py-[14px] bg-[#E84721]">Get Free Consultation</div>
            <div className="px-[20px] py-[18px] bg-[#E84721]">
                <img src={RightWhiteArrow} alt="" />
            </div>
        </Link>
    )
}

export default ConsultfreeBtn