import YutaSanFullWidth from "../../public/images/yutasan-full-width.png"
import DotLine from "../../public/images/dot-line.png"
import SpecialWork1 from "../../public/images/special-work1.png"
import SpecialWork2 from "../../public/images/special-work2.png"
import SpecialWork3 from "../../public/images/special-work3.png"
import SpecialWork4 from "../../public/images/special-work4.png"
import ManageProjectRow from "../components/ManageProjectRow"
import SpecialWorkCard from "../components/SpecialWorkCard"

const Ceo = () => {
    return (
        <>
            <div className="relative">
                <img src={YutaSanFullWidth} className="w-full" alt="" />
                <div className="text-[#FFF] absolute bottom-[8%] lg:bottom-[10%] xl:bottom-[13%] right-[5%] md:right-[8%] lg:right-[13%] xl:right-[20%]">
                    <h2 className="flex flex-col text-[32px] md:text-[52px] lg:text-[62px] xl:text-[72px] font-bold leading-[28px] md:leading-[48px] lg:leading-[58px] xl:leading-[68.4px] uppercase">
                        <span>CEO</span>
                        <span>YUTA MUKAI</span>
                    </h2>
                    <p className="text-[14px] md:text-[18px] font-semibold leading-[18px] tracking-[0.18px] uppercase mt-[4px] md:mt-[16px]">NEXT INNOVATIONS. LTD</p>
                </div>
            </div>

            <div className="max-w-[1240px] mx-auto my-[80px] md:my-[104px] px-[25px] xl:px-0">
                <div className="flex flex-col md:flex-row gap-[50px] md:gap-0 md:justify-between">
                    <p className="text-[44px] lg:text-[54px] xl:text-[64px] md:max-w-[280px] lg:max-w-[380px] xl:max-w-[459px] text-[#1A1A1A] font-light leading-[55px] lg:leading-[60px] xl:leading-[73.6px] tracking-[-0.64px]">Perform unforgettable brand experiences and high valuable websites to our customers</p>
                    <p className="text-[16px] md:text-[18px] md:max-w-[400px] lg:max-w-[580px] xl:max-w-[610px] text-[#575757] font-normal leading-[26px] tracking-[0.18px] border-t-[2px] border-[#E84721] pt-[24px]">As the CEO, I stand before you with great pride, knowing that our dedicated team of professionals is committed to delivering exceptional results. With a profound understanding of the ever-evolving digital landscape, we craft innovative strategies that propel your brand to new heights. Our passion for creativity, data-driven insights, and cutting-edge technology fuels our relentless pursuit of excellence. Together, let&apos;s embark on a transformative journey, amplifying your brand&apos;s presence and connecting with your audience in meaningful ways. Join us as we redefine the future of digital marketing.</p>
                </div>
            </div>

            <div className="bg-[#1A1A1A] w-full pt-[80px] md:pt-[104px] pb-[100px] md:pb-[136px] px-[25px] xl:px-0">
                <div className="max-w-[1240px] mx-auto text-[#F5F5F5]">
                    <h4 className="text-[24px] font-semibold leading-[29.549px] tracking-[-0.48px] uppercase">CEO Biography</h4>
                    <div className="grid grid-cols-4 gap-[37px] mt-[66px]">
                        <div className="hidden md:block col-span-4 md:col-span-1">
                            <div className="flex justify-around md:justify-between">
                                <div className="text-[38px] lg:text-[48px] font-semibold leading-[48px] tracking-[-0.96px] uppercase">
                                    <p>2009</p>
                                    <p className="mt-[168px] mb-[248px]">2014</p>
                                    <p>2020</p>
                                </div>
                                <img src={DotLine} alt="" />
                            </div>
                        </div>
                        <div className="col-span-4 md:col-span-3">
                            <div className="text-[20px] lg:text-[22px] xl:text-[24px] text-[#E3E3E3] font-normal leading-[28px] lg:leading-[30px] xl:leading-[32px] flex flex-col gap-[88px]">
                                <div>
                                    <p className="md:hidden mb-[30px] text-[38px] lg:text-[48px] font-semibold leading-[48px] tracking-[-0.96px] uppercase">2009</p>
                                    <p>Joined GMO Internet Inc (<a href="https://www.gmo.jp/en/" target="__blank" className="text-blue-500 hover:text-blue-600 hover:underline">https://www.gmo.jp/en/</a>). Until October 2014, consistently achieved yearly sales of approximately 100 million yen as a player in the digital marketing industry. During my time with team, the annual sales reached an impressive range of 300 to 400 million yen.</p>
                                </div>
                                <div>
                                    <p className="md:hidden mb-[30px] text-[38px] lg:text-[48px] font-semibold leading-[48px] tracking-[-0.96px] uppercase">2014</p>
                                    <p>As the business manager of the Myanmar branch, I was based in Myanmar and primarily involved in the domain/server infrastructure business and web production business, contributing to the development of the internet in Myanmar.  Experienced in many web projects for well-known companies such as Myanmar Stock Exchange, JTB, Yadanapon Airlines and Samsung&apos;s general agent. Provide .com.mm system and conclude an advisory contract.</p>
                                </div>
                            </div>
                            <div className="mt-[90px] lg:mt-[121px]">
                                <p className="md:hidden mb-[30px] text-[38px] lg:text-[48px] font-semibold leading-[48px] tracking-[-0.96px] uppercase">2020</p>
                                <p className="text-[22px] lg:text-[24px] font-semibold leading-[29.549px] tracking-[-0.48px] uppercase">Started NEXT INNOVATIONS.LTD.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-[1240px] mx-auto mt-[80px] md:mt-[104px] mb-[90px] md:mb-[137px] px-[25px] xl:px-0">
                <h2 className="text-[38px] lg:text-[48px] text-[#000] font-semibold leading-[48px] tracking-[-0.96px] uppercase">Managed projects</h2>
                <div className="text-[#575757] mt-[32px]">
                    <ManageProjectRow title="Z.com Myanmar" description="Sales website" />
                    <ManageProjectRow title="Yadanapon Airlines" description="Website/booking system" />
                    <ManageProjectRow title="JTB Myanmar" description="JTB Myanmar website" />
                    <ManageProjectRow title="Samsung" description="Smartphone sales EC site/order inventory management system " />
                    <ManageProjectRow title="Myanmar government agencies" description="Official websites" />
                    <ManageProjectRow title="Myanmar Stock Exchange (YSX)" description="YSX Website" />
                    <ManageProjectRow title="Japanese educational materials company" description="Online learning Web application" width="w-auto md:w-[237px]" />
                    <ManageProjectRow title="Japanese SEO company" description="Production of WordPress templates for SEO" />
                    <ManageProjectRow title="Overseas travel insurance company" description="Business system development" border="border-none" width="width-auto md:w-[206px]" />
                </div>
            </div>

            <div className="bg-[#0F0F0F] w-full mb-[100px]">
                <div className="max-w-[1240px] mx-auto px-[8px] xl:px-0">
                    <div className="grid gap-[50px] lg:gap-0 lg:grid-cols-2 text-[#F5F5F5]">
                        <h1 className="text-[55px] md:text-[65px] xl:text-[72px] pt-[80px] max-w-[440px] xl:max-w-[502px] font-bold leading-[58px] md:leading-[68.4px] uppercase">Specialized area of work</h1>
                        <div>
                            <div className="grid grid-cols-2">
                                <div className="border-x-[2px] border-[#404040] pt-[200px] md:pt-[324px] pb-[100px] md:pb-[124px] flex flex-col gap-[90px] md:gap-[165px]">
                                    <SpecialWorkCard title1="WEB" title2="Development" step="02" image={SpecialWork1} />
                                    <SpecialWorkCard title1="Testing" title2="Service" step="04" image={SpecialWork2} />
                                </div>
                                <div className="flex flex-col gap-[90px] md:gap-[140px] pt-[70px] md:pt-[131px]">
                                    <SpecialWorkCard title1="EOR (Employer" title2="of Record)" step="01" image={SpecialWork4} />
                                    <SpecialWorkCard title1="System" title2="Development" step="03" image={SpecialWork3} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Ceo