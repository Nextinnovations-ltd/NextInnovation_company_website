import { Link } from "react-router-dom";
import GoButton from "../GoButton";
import PowerFullProduct from "/images/powerful-product.png";

const Platform = () => {
    return (
        <div className="bg-[#1E2C44] rounded-b-[80px] pt-[120px] pb-[136px]">
            <div className="max-w-[1366px] mx-auto px-[64px]">
                <h1 className="text-[38px] font-bold leading-[58px] tracking-[-1%] text-[#EDEDED]">東南アジア発、人材活用プラットフォームのご紹介<br/>よりスピーディに、より安心・便利に。</h1>
                <div className="flex gap-[54px] mt-[90px]">
                    <div className="w-[484px] text-[21px] font-normal leading-[34px] tracking-[0%] text-white">
                        <p className="mb-[30px]">当社では、東南アジア初となる 人材データベースと企業をつなぐプラットフォーム を開発・運用しています。</p>
                        <p className="mb-[26px]">
                            このプラットフォームにより、企業様は必要な人材をスピーディに検索・採用でき、従来の煩雑な
                            プロセスを大幅に効率化できます。<br/>
                                •	企業様向けアカウント／管理画面：現在開発中<br/>
                                •	人材向けプラットフォーム：2025年8月にβ版リリース済み<br/>
                            今後はEORサービスとの連携を強化し、採用から
                            雇用、定着、活躍までを一気通貫で支援できる
                            仕組みを目指しています。
                        </p>
                        <GoButton name="β版を見てみる" link="http://staging.talent-cloud.asia/emp/lp" target="_blank" />
                    </div>
                    <div className="w-[728px] relative">
                        <img src={PowerFullProduct} alt="" />
                        <Link to="http://staging.talent-cloud.asia/emp/lp" target="_blank" className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-[24px] font-normal leading-[110%] tracking-[-2%] uppercase px-[24px] py-[16px] text-white bg-[#00000066] rounded-[8px]">COMING SOON</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Platform;
