import {PropTypes} from "prop-types"
const CaseStudyCard = ({image,title,text1,text2}) => {
    return (
        <div className="lg:w-[366px] case-study-card">
            <div className="overflow-hidden rounded-[12px]">
                <img src={image} alt="" className="hover:scale-110 duration-300 ease-in-out transition-transform" />
            </div>
            <p className="text-[11px] font-normal leading-[20px] tracking-[0%] text-[#444444] mt-[14px]">株式会社Release</p>
            <h3 className="text-[18px] font-bold leading-[34px] tracking-[-2%] uppercase mb-[14px]">{title}</h3>
            <div className="space-y-2 lg:space-y-[11px]">
                <div className="flex gap-[20px] items-start">
                    <h4 className="w-[62px] text-[#444444] text-[12px] lg:text-[13px] font-normal leading-[22px] lg:leading-[28px] tracking-[0%]">業 種</h4>
                    <p className="text-[#02021E] text-[12px] lg:text-[13px] font-normal leading-[22px] lg:leading-[28px] tracking-[0%]">{text1}</p>
                </div>
                <div className="flex gap-[20px] items-start">
                    <h4 className="w-[62px] text-[#444444] text-[12px] lg:text-[13px] font-normal leading-[22px] lg:leading-[28px] tracking-[0%]">種  別</h4>
                    <p className="text-[#02021E] text-[12px] lg:text-[13px] font-normal leading-[22px] lg:leading-[28px] tracking-[0%]">{text2}</p>
                </div>
            </div>
        </div>
    )
}

CaseStudyCard.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text1: PropTypes.string.isRequired,
    text2: PropTypes.string.isRequired,
}

export default CaseStudyCard