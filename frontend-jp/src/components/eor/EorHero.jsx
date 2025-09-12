import Breadcrumb from "../Breadcrumb";
import GoButton from "../GoButton";

const EorHero = () => {
    return (
        <div className="bg-white pt-[90px] pb-[149px] rounded-b-[80px]">
            <div className="max-w-[1366px] mx-auto text-[#444444] px-[64px]">
                <Breadcrumb
                    routes={[
                        { name: "サービス", link: "" }
                    ]}
                    current="EOR（雇用代行）"
                />

                <h1 className="text-[64px] font-bold leading-[83px] tracking-[-4%] mt-[46px] mb-[50px]">
                    海外人材活用を、もっと<br/>
                    シンプルに、もっと安心に。
                </h1>
                <div className="flex justify-between items-center">
                    <p className="text-[15px] font-normal leading-[24px] tracking-[0%]">
                        EOR（雇用代行）サービスで、採用から契約・給与支払・<br/>
                        現場サポートまでワンストップで提供。<br/>
                        貴社に最適なチーム形成を実現します。
                    </p>
                    <GoButton name="無料相談する" link="" />
                </div>
            </div>
        </div>
    );
}

export default EorHero;
