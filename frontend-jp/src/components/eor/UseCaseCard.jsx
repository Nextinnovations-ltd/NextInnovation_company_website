import {PropTypes} from "prop-types"

const UseCaseCard = ({title,description,image,text1,text2,footer}) => {
    return (
        <div className="w-full usecase-card bg-white rounded-[20px] pt-[31px] lg:pt-[33px] pb-[40px] lg:pb-[50px] px-[26px] md:px-3 lg:px-[27px]">
            <div className="flex flex-col items-center gap-[5px] mb-[24px] md:min-h-[120px] lg:min-h-[130px] xl:min-h-[104px]">
                <h3 className="text-[#02021E] text-center text-[16px] lg:text-[21px] font-bold leading-[24px] lg:leading-[34px] tracking-[-2%]">{title}</h3>
                <p className="text-[#F15A29] text-[12px] lg:text-[13px] font-bold leading-[30px] tracking-[-2%]">{description}</p>
            </div>
            <div className="overflow-hidden rounded-[12px]">
                <img src={image} alt="" className="mx-auto hover:scale-110 transition-transform duration-300 ease-in-out" />
            </div>
            <ul className="lg:min-h-[72px] list-disc text-[12px] lg:text-[14px] font-normal leading-[22px] lg:leading-[31px] tracking-[0%] text-[#1E2C44] pl-[30px] md:pl-4 lg:pl-[30px] mt-[21px] lg:mt-[30px] mb-[16px]">
                <li>
                    {text1}
                </li>
                <li>{text2}</li>
            </ul>
            <p className="text-[13px] lg:text-[14px] text-[#1E2C44] font-bold leading-[24px] lg:leading-[31px] tracking-[0%] pt-[14px] lg:pt-[18px] border-t-[1px] border-[#E2E2E2]">{footer}</p>
        </div>
    );
}

UseCaseCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    text1: PropTypes.string.isRequired,
    text2: PropTypes.string.isRequired,
    footer: PropTypes.string.isRequired,
}

export default UseCaseCard;
