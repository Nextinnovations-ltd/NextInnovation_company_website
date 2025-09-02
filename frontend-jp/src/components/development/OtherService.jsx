import {PropTypes} from "prop-types"
import { Link } from "react-router-dom"

const OtherService = ({image1,title1,description1,link1,image2,title2,description2,link2,image3,title3,description3,link3}) => {
    return (
        <div className="other-sections other-services mx-auto mt-[150px] md:mt-[192px] mb-[150px] md:mb-[236px] px-[25px] xl:px-0">
            <h2 className="text-[38px] md:text-[40px] xl:text-[48px] font-semibold leading-[48px] tracking-[-0.96px] uppercase mb-[51px]">other services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[25px] text-[#FFFFFF]">
                <Link to={link1} className="relative overflow-hidden">
                    <img src={image1} className="w-full h-full hover:scale-110 ease-in-out duration-300" alt="" />
                    <div className="absolute z-[2] bottom-[32px] left-[20px] xl:left-[32px] right-[20px] xl:right-[32px] border-t-[2px] pt-[16px]">
                        <h4 className="text-[27px] xl:text-[32px] font-medium leading-[40px] mb-[16px]">{title1}</h4>
                        <p className="text-[16px] font-normal leading-[21px]">{description1}</p>
                    </div>
                </Link>
                <Link to={link2} className="relative overflow-hidden">
                    <img src={image2} className="w-full h-full hover:scale-110 ease-in-out duration-300" alt="" />
                    <div className="absolute z-[2] bottom-[32px] left-[20px] xl:left-[32px] right-[20px] xl:right-[32px] border-t-[2px] pt-[16px]">
                        <h4 className="text-[27px] xl:text-[32px] font-medium leading-[40px] mb-[16px]">{title2}</h4>
                        <p className="text-[16px] font-normal leading-[21px]">{description2}</p>
                    </div>
                </Link>
                <Link to={link3} className="relative overflow-hidden">
                    <img src={image3} className="w-full h-full hover:scale-110 ease-in-out duration-300" alt="" />
                    <div className="absolute z-[2] bottom-[32px] left-[20px] xl:left-[32px] right-[20px] xl:right-[32px] border-t-[2px] pt-[16px]">
                        <h4 className="text-[27px] xl:text-[32px] font-medium leading-[40px] mb-[16px]">{title3}</h4>
                        <p className="text-[16px] font-normal leading-[21px]">{description3}</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

OtherService.propTypes = {
    image1 : PropTypes.string.isRequired,
    title1 : PropTypes.string.isRequired,
    description1 : PropTypes.string.isRequired,
    link1 : PropTypes.string.isRequired,
    image2 : PropTypes.string.isRequired,
    title2 : PropTypes.string.isRequired,
    description2 : PropTypes.string.isRequired,
    link2 : PropTypes.string.isRequired,
    image3 : PropTypes.string.isRequired,
    title3 : PropTypes.string.isRequired,
    description3 : PropTypes.string.isRequired,
    link3 : PropTypes.string.isRequired,
}

export default OtherService