import {PropTypes} from "prop-types"
const CaseStudyCard = ({image, title, description, text1, text1Next='', text2, text2Next='', text3}) => {
    return (
        <div>
            <img src={image} alt="" />
            <h3 className="text-[24px] font-bold leading-[44px] tracking-[-2%] mt-[19px] mb-[12px]">{title}</h3>
            <div className="text-[15px] font-normal leading-[24px] tracking-[0%] space-y-3">
                <p className="mb-1">{description}</p>
                <div className="flex gap-3 items-start">
                    <h5 className="text-[16px] font-medium tracking-[0%]">課題</h5>
                    <p>
                        {text1}
                        {!!text1Next && (
                            <>
                                <br/>
                                {text1Next}
                            </>
                        )}
                    </p>
                </div>
                <div className="flex gap-3 items-start">
                    <h5 className="text-[16px] font-medium tracking-[0%]">成果</h5>
                    <p>
                        {text2}
                        {!!text2Next && (
                            <>
                                <br/>
                                {text2Next}
                            </>
                        )}
                    </p>
                </div>
                <div className="flex gap-3 items-start">
                    <h5 className="text-[16px] font-medium tracking-[0%]">提供</h5>
                    <p>{text3}</p>
                </div>
            </div>
        </div>
    )
}

CaseStudyCard.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    text1: PropTypes.string.isRequired,
    text1Next: PropTypes.string,
    text2: PropTypes.string.isRequired,
    text2Next: PropTypes.string,
    text3: PropTypes.string.isRequired,
}

export default CaseStudyCard