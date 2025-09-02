import Pythonb from "../../../public/images/pythonb.png"
import Djangob from "../../../public/images/djangob.png"
import Flutterb from "../../../public/images/flutterb.png"
import Phpb from "../../../public/images/php-b.png"
import Laravelb from "../../../public/images/Laravel-b.png"
import Windowb from "../../../public/images/windowb.png"
import Macb from "../../../public/images/macb.png"
import Linuxb from "../../../public/images/linuxb.png"
import Awsb from "../../../public/images/awsb.png"
import Mysqlb from "../../../public/images/mysqlb.png"
import Postgreb from "../../../public/images/postgreb.png"
import Mongodbb from "../../../public/images/mongodbb.png"
import Reactb from "../../../public/images/react-b.png"
import IconDiv from "./IconDiv"

const OurRequirementSystem = () => {
    return (
        <div className="other-sections mx-auto px-[25px] xl:px-0">
            <div className="our-website-requirements-section">
                <h2 className="text-[35px] lg:text-[40px] xl:text-[48px] font-semibold leading-[48px] tracking-[-0.96px] uppercase text-center">Our system Requirements</h2>
                <div className="items-center grid grid-cols-1 gap-[20px] md:gap-0 md:grid-cols-2 mt-[40px] md:mt-[80px] border-b-[2px] border-[#212121] pb-[33px]">
                    <h4 className="text-[24px] font-semibold leading-[30px] tracking-[-0.48px] uppercase">Language</h4>
                    <div className="flex gap-[16px] flex-wrap">
                        <IconDiv image={Pythonb} title="Python" />
                        <IconDiv image={Djangob} title="Django" />
                        <IconDiv image={Phpb} title="PHP" />
                        <IconDiv image={Laravelb} title="Laravel" />
                    </div>
                </div> 
                <div className="items-center grid grid-cols-1 gap-[20px] md:gap-0 md:grid-cols-2   border-b-[2px] border-[#212121] py-[27px]">
                    <h4 className="text-[24px] font-semibold leading-[30px] tracking-[-0.48px] uppercase">Platforms</h4>
                    <div className="flex gap-[16px] flex-wrap">
                        <IconDiv image={Windowb} title="Windows" />
                        <IconDiv image={Macb} title="macOS" />
                        <IconDiv image={Linuxb} title="Linux" />
                    </div>
                </div> 
                <div className="items-center grid grid-cols-1 gap-[20px] md:gap-0 md:grid-cols-2   border-b-[2px] border-[#212121] py-[27px]">
                    <h4 className="text-[24px] font-semibold leading-[30px] tracking-[-0.48px] uppercase">Cloud Services</h4>
                    <div className="flex gap-[16px] flex-wrap">
                        <IconDiv image={Awsb} title="AWS" />
                    </div>
                </div>
                <div className="items-center grid grid-cols-1 gap-[20px] md:gap-0 md:grid-cols-2   border-b-[2px] border-[#212121] py-[27px]">
                    <h4 className="text-[24px] font-semibold leading-[30px] tracking-[-0.48px] uppercase">Database</h4>
                    <div className="flex gap-[16px] flex-wrap">
                        <IconDiv image={Mysqlb} title="MySQL" />
                        <IconDiv image={Postgreb} title="PostgreSQL" />
                        <IconDiv image={Mongodbb} title="MongoDB" />
                    </div>
                </div> 
                <div className="items-center grid grid-cols-1 gap-[20px] md:gap-0 md:grid-cols-2   border-b-[2px] border-[#212121] py-[27px]">
                    <h4 className="text-[24px] font-semibold leading-[30px] tracking-[-0.48px] uppercase">Mobile</h4>
                    <div className="flex gap-[16px] flex-wrap">
                        <IconDiv image={Reactb} title="React Native" />
                        <IconDiv image={Flutterb} title="Flutter" />
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default OurRequirementSystem