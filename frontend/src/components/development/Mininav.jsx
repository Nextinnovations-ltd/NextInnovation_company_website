import { NavLink } from "react-router-dom"

const Mininav = () => {
    return (
        <div className="mini-nav flex justify-center">
            <NavLink to="/development/website" className="hover:text-[#E84721] text-[12px] md:text-[22px] xl:text-[24px] px-[18px] py-[10px] md:px-[24px] md:py-[12px] border border-[#E84721] rounded-[5px]">Website Development</NavLink>
            <NavLink to="/development/system" className="hover:text-[#E84721] text-[12px] md:text-[22px] xl:text-[24px] px-[18px] py-[10px] md:px-[24px] md:py-[12px] border border-[#E84721] rounded-[5px]">System Development</NavLink>
        </div>
    )
}

export default Mininav