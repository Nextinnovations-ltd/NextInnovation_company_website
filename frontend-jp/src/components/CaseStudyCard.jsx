import {PropTypes} from "prop-types"
const CaseStudyCard = ({image,title,text1,text2,text3}) => {
    return (
        <div className="lg:w-[397px] case-study-card">
            <img src={image} alt="" />
            <h3 className="text-[20px] lg:text-[24px] font-bold leading-[44px] tracking-[-2%] uppercase mt-3 lg:mt-4 mb-2 lg:mb-3">{title}</h3>
            <div className="space-y-2 lg:space-y-3">
                <div className="flex gap-[19px] items-start">
                    <h4 className="w-[69px] text-[#02021E] text-[12px] lg:text-[16px] font-medium leading-[22px] lg:leading-[31px] tracking-[0%]">タイトル</h4>
                    <p className="w-[245px] lg:w-[296px] text-[12px] lg:text-[15px] font-normal leading-[22px] lg:leading-[24px] tracking-[0%]">{text1}</p>
                </div>
                <div className="flex gap-[19px] items-start">
                    <h4 className="w-[69px] text-[#02021E] text-[12px] lg:text-[16px] font-medium leading-[22px] lg:leading-[31px] tracking-[0%]">業 種</h4>
                    <p className="w-[245px] lg:w-[296px] text-[12px] lg:text-[15px] font-normal leading-[22px] lg:leading-[24px] tracking-[0%]">{text2}</p>
                </div>
                <div className="flex gap-[19px] items-start">
                    <h4 className="w-[69px] text-[#02021E] text-[12px] lg:text-[16px] font-medium leading-[22px] lg:leading-[31px] tracking-[0%]">利 用<br/>サービス</h4>
                    <p className="w-[245px] lg:w-[296px] text-[12px] lg:text-[15px] font-normal leading-[22px] lg:leading-[24px] tracking-[0%]">{text3}</p>
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
    text3: PropTypes.string.isRequired,
}

export default CaseStudyCard