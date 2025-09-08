import DrivingDXwith from "/images/DrivingDXwith-mobile.png"
import HeroBg from "/images/hero-mobile-bg.png"
import HeroStar from "/images/hero-star.png"

const HeroMobile = () => {
    return (
        <div className="bg-[#1E2C44]">
            <div className="bg-white rounded-b-[40px]">
                <div className="px-3 pt-[30px] pb-[77px]" style={{ background: `url(${HeroBg})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'top right' }}>
                    <img src={DrivingDXwith} alt="" />
                    <div className="montserrat mt-[11px] text-[#444444] text-[60px] font-bold leading-[119%] tracking-[-3%] uppercase">
                        <p>Southeast</p>
                        <p className="ps-7">Asian</p>
                    </div>
                    <div className="flex gap-[15px] items-center ps-7 mt-[11px]">
                        <img src={HeroStar} className="w-[36px]" alt="" />
                        <p className="montserrat text-[60px] text-[#096FCA] font-bold leading-[120%] tracking-[-3%] uppercase">Talent</p>
                    </div>
                    <div className="mt-[30px] text-[#444444] px-2">
                        <div>
                            <h3 className="text-[20px] font-bold leading-[29px] tracking-[0%]">グローバル人材で、DXを加速する。</h3>
                            <div className="border-t-[2px] border-[#444444] pt-[16px] mt-[12px]">
                                <p className="text-[12px] font-medium leading-[21px] tracking-[-4%]">
                                    EORを基盤に、東南アジアの優秀なタレント<br/>
                                    と共に、企業のDX推進から受託開発、UI/UX <br/>
                                    デザインまでを 一貫してサポート。国境を<br/>
                                    越えた新しいチームで、未来の成長と挑戦を<br/>
                                    共に実現します。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroMobile;
