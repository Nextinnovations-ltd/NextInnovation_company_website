import {PropTypes} from "prop-types"

const UseCaseCard = ({title,description,image,text1,text1Next='',text2,footer}) => {
    return (
        <div className="w-[393px] bg-white rounded-[20px] pt-[36px] pb-[50px] px-[30px]">
            <div className="flex flex-col items-center gap-[6px] mb-[24px]">
                <h3 className="text-[19px] font-bold leading-[34px] tracking-[-2%]">{title}</h3>
                <p className="text-[#F15A29] text-[14px] font-bold leading-[34px] tracking-[-2%]">{description}</p>
            </div>
            <img src={image} alt="" className="mx-auto" />
            <ul className="min-h-[72px] list-disc text-[15px] font-normal leading-[24px] tracking-[0%] text-[#1E2C44] pl-[30px] mt-[30px] mb-[36px]">
                <li>
                    {text1}<br/>{text1Next}
                </li>
                <li>{text2}</li>
            </ul>
            <p className="text-[15px] text-[#1E2C44] font-bold leading-[28px] tracking-[3%] pt-[18px] border-t-[1px] border-[#E2E2E2]">{footer}</p>
        </div>
    );
}

UseCaseCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    text1: PropTypes.string.isRequired,
    text1Next: PropTypes.string,
    text2: PropTypes.string.isRequired,
    footer: PropTypes.string.isRequired,
}

export default UseCaseCard;
