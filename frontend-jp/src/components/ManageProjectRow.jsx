import {PropTypes} from "prop-types"
const ManageProjectRow = ({title, description, border = "border-b", width = "w-auto"}) => {
    
    return (
        <div className={`grid grid-cols-3 gap-[10px] md:gap-[20px] xl:gap-0 items-center py-[24px] ${border} border-[#CDCDCD]`}>
            <h4 className={`col-span-3 md:col-span-1 ${width} text-[16px] lg:text-[18px] font-semibold leading-[18px] tracking-[0.18px] uppercase`}>{title}</h4>
            <p className="col-span-3 md:col-span-2 text-[22px] lg:text-[24px] font-normal leading-[32px]">{description}</p>
        </div>
    )
}

ManageProjectRow.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    border: PropTypes.string,
    width: PropTypes.number,
}

export default ManageProjectRow