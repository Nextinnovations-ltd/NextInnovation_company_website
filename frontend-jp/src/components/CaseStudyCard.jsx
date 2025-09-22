import {PropTypes} from "prop-types"
const CaseStudyCard = ({image,title,text1,text2}) => {
    return (
        <div className="lg:w-[404px] case-study-card">
            <img src={image} alt="" />
            <p className="text-[12px] font-normal leading-[22px] tracking-[0%] text-[#444444] mt-4">株式会社Release</p>
            <h3 className="text-[20px] lg:text-[20px] font-bold leading-[44px] tracking-[-2%] uppercase mb-[14px]">{title}</h3>
            <div className="space-y-2 lg:space-y-3">
                <div className="flex gap-[20px] items-start">
                    <h4 className="w-[68px] text-[12px] lg:text-[15px] font-medium leading-[22px] lg:leading-[24px] tracking-[0%]">業 種</h4>
                    <p className="w-[296px] text-[#02021E] text-[12px] lg:text-[15px] font-normal leading-[22px] lg:leading-[24px] tracking-[0%]">{text1}</p>
                </div>
                <div className="flex gap-[20px] items-start">
                    <h4 className="w-[68px] text-[12px] lg:text-[15px] font-medium leading-[22px] lg:leading-[24px] tracking-[0%]">種  別</h4>
                    <p className="w-[296px] text-[#02021E] text-[12px] lg:text-[15px] font-normal leading-[22px] lg:leading-[24px] tracking-[0%]">{text2}</p>
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