import Wsm1 from "../../../public/images/wsm-1.png"
import Wsm2 from "../../../public/images/wsm-2.png"
import Wsm3 from "../../../public/images/wsm-3.png"
import WhoShouldMakeExplain from "./WhoShouldMakeExplain"
const WhoShouldMakeWebsite = () => {
    return (
        <div className="who-should-make">
            <WhoShouldMakeExplain
                title = "Who should make a website?"
                description = "A website is vital for businesses, professionals, and creators to build credibility, promote services, showcase skills, and share content. It connects audiences and drives growth in the digital world."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] mt-[88px] mb-[120px] lg:mb-[224px]">
                <div className="flex flex-col gap-[24px] pt-[24px] border-t-[2px] border-[#1A1A1A]">
                    <h4 className="text-[24px] w-[200px] font-normal leading-[32px]">Bussinesses and Brands</h4>
                    <img src={Wsm1} className="w-full" alt="" />
                </div>
                <div className="flex flex-col gap-[24px] pt-[24px] border-t-[2px] border-[#1A1A1A]">
                    <h4 className="text-[24px] w-[230px] font-normal leading-[32px]">Aspiring successful website</h4>
                    <img src={Wsm2} className="w-full" alt="" />
                </div>
                <div className="flex flex-col gap-[24px] pt-[24px] border-t-[2px] border-[#1A1A1A]">
                    <h4 className="text-[24px] w-[260px] font-normal leading-[32px]">Marketing and branding professional</h4>
                    <img src={Wsm3} className="w-full" alt="" />
                </div>
            </div>
        </div>
    )
}

export default WhoShouldMakeWebsite