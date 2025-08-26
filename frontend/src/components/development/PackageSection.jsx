import {PropTypes} from "prop-types"
import ConsultfreeBtn from "./ConsultfreeBtn"
const PackageSection = ({image,mobile_image,title,mini_title,price,description}) => {
    return (
        <div className="max-w-[1367px] mx-auto">
            <div className="text-[#F0F0F0] grid grid-cols-1 lg:grid-cols-12 items-center">
                <div className="col-span-7">
                    <img src={image} className="hidden lg:block" alt="" />
                    <img src={mobile_image} className="lg:hidden w-full" alt="" />
                </div>
                <div className="col-span-5 bg-[#0F0F0F] px-[40px] xl:px-[60px] py-[50px] xl:py-[64px]">
                    <div className="text-[40px] xl:text-[48px] font-semibold leading-[48px] tracking-[-0.96px] uppercase pt-[32px] mb-[40px] xl:mb-[64px] border-t-[2px] border-[#FFF]">{title}</div>
                    <p className="text-[18px] font-normal leading-[26px] tracking-[0.18px] opacity-[0.8]">{mini_title}</p>
                    <h4 className="text-[48px] text-[#FD5C47] font-semibold leading-[48px] tracking-[-0.96px] mt-[8px] mb-[50px] xl:mb-[72px] uppercase">{price}</h4>
                    <p className="text-[16px] xl:text-[18px] font-normal leading-[26px] tracking-[0.18px] opacity-[0.8] mb-[24px]">{description}</p>
                    <ConsultfreeBtn/>
                </div>
            </div>
        </div>
    )
}

PackageSection.propTypes = {
    image: PropTypes.string.isRequired,
    mobile_image: PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
    mini_title:PropTypes.string.isRequired,
    price:PropTypes.string.isRequired,
    description:PropTypes.string.isRequired
}

export default PackageSection