import {PropTypes} from "prop-types"
const WorkDetailGrid = ({title, children}) => {
    return (
        <div className="flex flex-col items-start pt-[24px] border-t-[2px] border-[#000000]">
            <p className="text-[16px] lg:text-[18px] text-[#999999] font-semibold leading-[18px] tracking-[0.18px] uppercase mb-[24px]">{title}</p>
            {children}
        </div>
    )
}

WorkDetailGrid.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
}

export default WorkDetailGrid