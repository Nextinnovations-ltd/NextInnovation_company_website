import StickGradient from "../../../public/images/stick-gradient.png"

const OurProcess = () => {
    return (
        <div className="our-process max-w-[1372px] mx-auto pt-[100px] md:pt-[170px] pb-[100px] md:pb-[154px] px-[25px] xl:px-0">
            <h2 className="text-[35px] lg:text-[40px] xl:text-[48px] text-center font-semibold leading-[48px] tracking-[-0.96px] uppercase">Our process</h2>
            <div className="flex overflow-x-auto">
                <div className="flex flex-col items-center w-[226px] gap-[20px] pt-[142px]">
                    <p className="text-[14px] lg:text-[18px] text-center font-semibold leading-[18px] tracking-[0.18px] uppercase py-[18px] px-[40px] bg-[#E84721] rounded-[80px]">Requirement Analysis</p>
                    <span className="text-[14px] font-normal leading-[16.8px] tracking-[0.14px] opacity-[0.8] ms-[16px]">Understand your needs and goals.</span>
                </div>
                <img src={StickGradient} alt="" />
                <div className="flex flex-col items-center min-w-[170px] max-w-[221px] gap-[20px] pt-[222px]">
                    <p className="text-[14px] lg:text-[18px] text-center font-semibold leading-[18px] tracking-[0.18px] uppercase py-[27px] px-[30px] bg-[#212121] rounded-[80px]">Design & Plan</p>
                    <span className="text-[14px] font-normal leading-[16.8px] tracking-[0.14px] opacity-[0.8] ms-[6.5px]">Create user-focused designs and plans.</span>
                </div>
                <img src={StickGradient} alt="" />
                <div className="flex flex-col items-center w-[219px] gap-[20px] pt-[142px]">
                    <p className="text-[14px] lg:text-[18px] text-center font-semibold leading-[18px] tracking-[0.18px] uppercase py-[27px] px-[30px] bg-[#212121] rounded-[80px]">Development</p>
                    <span className="text-[14px] font-normal leading-[16.8px] tracking-[0.14px] opacity-[0.8] ms-[5.5px]">Build with the latest technologies.</span>
                </div>
                <img src={StickGradient} alt="" />
                <div className="flex flex-col items-center w-[171px] gap-[20px] pt-[222px]">
                    <p className="text-[14px] lg:text-[18px] text-center font-semibold leading-[18px] tracking-[0.18px] uppercase py-[27px] px-[35px] bg-[#212121] rounded-[80px]">Testing</p>
                    <span className="text-[14px] font-normal leading-[16.8px] tracking-[0.14px] opacity-[0.8] ms-[22px]">Ensure security, performance, and functionality.</span>
                </div>
                <img src={StickGradient} alt="" />
                <div className="flex flex-col items-center w-[215px] gap-[20px] pt-[142px]">
                    <p className="text-[14px] lg:text-[18px] text-center font-semibold leading-[18px] tracking-[0.18px] uppercase py-[27px] px-[34px] bg-[#212121] rounded-[80px]">Deployment</p>
                    <span className="text-[14px] font-normal leading-[16.8px] tracking-[0.14px] opacity-[0.8] ms-[16px]">Launch your website or system smoothly.</span>
                </div>
                <img src={StickGradient} alt="" />
                <div className="flex flex-col items-center w-[214px] gap-[20px] ps-[10px] pt-[222px]">
                    <p className="text-[14px] lg:text-[18px] text-center font-semibold leading-[18px] tracking-[0.18px] uppercase py-[18px] px-[34px] bg-[#212121] rounded-[80px]">Support & Maintenance</p>
                    <span className="text-[14px] font-normal leading-[16.8px] tracking-[0.14px] opacity-[0.8] ms-[16px]">Provide the completed website to the client.</span>
                </div>
            </div>
        </div>
    )
}

export default OurProcess