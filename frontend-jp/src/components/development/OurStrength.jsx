import Strength from "../../../public/images/strength.png"
import {PropTypes} from "prop-types"

const OurStrength = ({description}) => {
    return (
        <>
            <div className="our-strength max-w-[718px] mx-auto mt-[100px] md:mt-[160px] mb-[93px] text-center px-[25px] xl:px-0">
                <h3 className="text-[36px] md:text-[46px] xl:text-[56px] font-semibold leading-[64px] tracking-[-1.12px] uppercase">Our Strength</h3>
                <p className="text-[16px] md:text-[14px] lg:text-[18px] font-normal leading-[26px] tracking-[0.18px] mt-[24px]">{description}</p>
            </div>

            <div className="bg-[#0F0F0F] text-[#FFFFFF]">
                <div className="max-w-[1366px] mx-auto grid grid-cols-1 md:grid-cols-2">
                    <div className="grid grid-cols-2 pt-[34px] pb-[28px] h-[400px] md:h-auto">
                        <div className="flex flex-col justify-between">
                            <p className="text-[18px] lg:text-[24px] font-semibold leading-[30px] tracking-[-0.48px] uppercase ms-[26.56px]">strength 01</p>
                            <p className="text-[20px] lg:text-[28px] xl:text-[32px] font-semibold leading-[22px] lg:leading-[30px] xl:leading-[35px] uppercase ms-[32px] w-[120px] lg:w-[160px] xl:w-[200px]">giving one-stop services</p>
                        </div>
                        <div className="flex flex-col justify-between">
                            <p className="text-[18px] lg:text-[24px] font-semibold leading-[30px] tracking-[-0.48px] uppercase">strength 02</p>
                            <p className="text-[20px] lg:text-[28px] xl:text-[32px] font-semibold leading-[22px] lg:leading-[30px] xl:leading-[35px] uppercase w-[180px] lg:w-[230px] xl:w-[270px]">Providing Japan Quality</p>
                        </div>
                    </div>
                    <div className="relative">
                        <img src={Strength} alt="" />
                        <p className="absolute top-[34px] left-[26.56px] z-[2] text-[18px] lg:text-[24px] font-semibold leading-[30px] tracking-[-0.48px] uppercase">strength 03</p>
                        <div className="absolute z-[2] bottom-[32px] mx-[32px] border-t-[2px] pt-[14px] lg:pt-[24px]">
                            <h4 className="text-[20px] lg:text-[28px] xl:text-[32px] font-semibold leading-[22px] lg:leading-[30px] xl:leading-[35px] uppercase">Always Think</h4>
                            <h4 className="text-[20px] lg:text-[28px] xl:text-[32px] font-semibold leading-[22px] lg:leading-[30px] xl:leading-[35px] uppercase">About clients</h4>
                            <p className="text-[14px] lg:text-[18px] font-normal leading-[20px] lg:leading-[26px] tracking-[0.18px] mt-[14px] lg:mt-[24px] opacity-[0.8]">As a marketing company, in web creation, we prioritize the customer journey and personas, ensuring a tailored experience that guides them effectively.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

OurStrength.propTypes = {
    description: PropTypes.string.isRequired
}

export default OurStrength