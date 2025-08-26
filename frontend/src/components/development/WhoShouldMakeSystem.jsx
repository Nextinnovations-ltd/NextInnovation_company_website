import Wsm1 from "../../../public/images/wsm-1.png"
import Wsm2 from "../../../public/images/wsm-2.png"
import Wsm3 from "../../../public/images/wsm-3.png"
import WhoShouldMakeExplain from "./WhoShouldMakeExplain"
import WhoShouldMakeSysCrad from "./WhoShouldMakeSysCrad"
const WhoShouldMakeSystem = () => {
    return (
        <div className="who-should-make">
            <WhoShouldMakeExplain
                title = "Who should make a system?"
                description = "System development is essential for businesses, organizations, and developers looking to automate processes, manage data, and optimize operations."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] mt-[88px] mb-[120px] lg:mb-[224px]">
                <WhoShouldMakeSysCrad title="Businesses and Enterprises" image={Wsm1} />
                <WhoShouldMakeSysCrad title="Software Developers" image={Wsm2} />
                <WhoShouldMakeSysCrad title="Organizations" image={Wsm3} />
            </div>
        </div>
    )
}

export default WhoShouldMakeSystem