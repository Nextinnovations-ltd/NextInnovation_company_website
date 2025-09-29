import {PropTypes} from "prop-types"
import LineLeft from "../svg/LineLeft";
import LineRight from "../svg/LineRight";
import CircleCorrect from "../svg/CircleCorrect";

const EorCard = ({title,image,text1,text1Next,text2,text2Next,text3,text3Next}) => {
    return (
        <div className="eor-card">
            {title != 'EORのみ' && (
                <div className="flex justify-center gap-[20px] items-end mb-2 lg:mb-[10px]">
                    <LineLeft/>
                    <p className="text-[16px] lg:text-[16px] font-bold leading-[24px] lg:leading-[25px] tracking-[3%] text-[#F15A29] mb-1 lg:mb-[7px]">当社現場管理</p>
                    <LineRight/>
                </div>
            )}
            <div className={`lg:w-[361px] bg-white rounded-[30px] pt-[29px] ps-[34.5px] pb-[50px] ${title != 'EORのみ' ? 'border-[5px] border-[#F15A29]' : 'mt-[44px]'}`}>
                <h4 className="text-[20px] text-[#02021E] text-center font-bold leading-[28px] lg:leading-[34px] tracking-[-2%] uppercase">{title}</h4>
                <img src={image} alt="" className="my-[28px] lg:my-[31px] text-center" />
                <div className="text-[#1E2C44]">
                    <p className="text-[12px] lg:text-[14px] font-bold leading-[22px] lg:leading-[31px] tracking-[0%] mb-3 lg:mb-[14.5px]">こんな方におすすめ</p>
                    <div className="text-[12px] lg:text-[13px] font-medium leading-[22px] lg:leading-[28px] tracking-[0%] space-y-[5px]">
                        <div className="flex gap-[12px] items-start">
                            <div className="w-[21px] mt-1">
                                <CircleCorrect/>
                            </div>
                            <p>{text1}<br/>{text1Next}</p>
                        </div>
                        <div className="flex gap-[12px] items-start">
                            <div className="w-[21px] mt-1">
                                <CircleCorrect/>
                            </div>
                            <p>{text2}<br/>{text2Next}</p>
                        </div>
                        <div className="flex gap-[12px] items-start">
                            <div className="w-[21px] mt-1">
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
