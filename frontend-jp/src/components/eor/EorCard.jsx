import {PropTypes} from "prop-types"
import LineLeft from "../svg/LineLeft";
import LineRight from "../svg/LineRight";
import CircleCorrect from "../svg/CircleCorrect";

const EorCard = ({title,image,text1,text1Next,text2,text2Next,text3,text3Next}) => {
    return (
        <div className="eor-card">
            {title != 'EORのみ' && (
                <div className="flex justify-center gap-[20px] items-end mb-2 lg:mb-3">
                    <LineLeft/>
                    <p className="text-[16px] lg:text-[20px] font-bold leading-[24px] lg:leading-[28px] tracking-[3%] text-[#F15A29] mb-1 lg:mb-2">当社現場管理</p>
                    <LineRight/>
                </div>
            )}
            <div className={`lg:w-[397px] bg-white rounded-[30px] pt-[32px] ps-[28px] pe-[13px] ${title != 'EORのみ' ? 'border-[6px] lg:border-[10px] border-[#F15A29] pb-[40px]' : 'mt-[48px] pb-[60px]'}`}>
                <h4 className="text-[20px] lg:text-[24px] text-center font-bold leading-[28px] lg:leading-[34px] tracking-[-2%] uppercase">{title}</h4>
                <img src={image} alt="" className="my-[28px] lg:my-[31px] text-center" />
                <div className="text-[#1E2C44]">
                    <p className="text-[12px] lg:text-[15px] font-bold leading-[22px] lg:leading-[28px] tracking-[0%] mb-3 lg:mb-4">こんな方におすすめ</p>
                    <div className="text-[12px] lg:text-[15px] font-medium leading-[22px] lg:leading-[28px] tracking-[0%] space-y-[6px]">
                        <div className="flex gap-[12px] items-start">
                            <div className="w-[21px] lg:w-[24px]">
                                <CircleCorrect/>
                            </div>
                            <p>{text1}<br/>{text1Next}</p>
                        </div>
                        <div className="flex gap-[12px] items-start">
                            <div className="w-[24px]">
                                <CircleCorrect/>
                            </div>
                            <p>{text2}<br/>{text2Next}</p>
                        </div>
                        <div className="flex gap-[12px] items-start">
                            <div className="w-[24px]">
                                <CircleCorrect/>
                            </div>
                            <p>{text3}<br/>{text3Next}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

EorCard.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    text1: PropTypes.string.isRequired,
    text1Next: PropTypes.string.isRequired,
    text2: PropTypes.string.isRequired,
    text2Next: PropTypes.string.isRequired,
    text3: PropTypes.string.isRequired,
    text3Next: PropTypes.string.isRequired,
}

export default EorCard;
