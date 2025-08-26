import { NavLink } from "react-router-dom"

const WorkNav = () => {
    return (
        <div className="works-nav flex flex-wrap gap-[32px] text-[14px] lg:text-[18px] text-[#8D8D8D] font-semibold leading-[18px] tracking-[0.18px] uppercase">
            <NavLink to="">All</NavLink>
            <NavLink to="">WEB DEVELOPMENT</NavLink>
            <NavLink to="">UI/UX DESIGN</NavLink>
            <NavLink to="">DIGITAL MARKETING</NavLink>
            <NavLink to="">VIDEO EDITING</NavLink>
        </div>
    )
}

export default WorkNav