import GoButton from "./GoButton";

const SliderMobile = () => {
    return (
        <div className="bg-[#1E2C44] text-white px-[24px] rounded-b-[40px]">
            <div className="py-[50px]">
                <h2 className="text-[20px] font-bold leading-[38.65px] tracking-[-2%]">EOR/ 海外人材雇用代行</h2>
                <p className="text-[14px] font-normal leading-[19.62px] tracking-[0%] mt-[16px] mb-[29px]">
                    現地法人を設立せずに、東南アジアの優秀な人材を<br/>
                    採用可能。最短1ヶ月で稼働を開始でき、給与支払い<br/>
                    や法務手続きもすべて代行。独自の安心ラボ型・<br/>
                    伴走型プランにより、採用からチームビルディング、<br/>
                    人材定着、教育、成果創出まで、海外人材活用と<br/>
                    チーム化を一気通貫でサポートします。
                </p>
                <GoButton name="詳しく見る" />
            </div>
            <div className="py-[50px]">
                <h2 className="text-[20px] font-bold leading-[38.65px] tracking-[-2%]">DX支援 / 受託開発<br/>・UI/UXデザイン</h2>
                <p className="text-[14px] font-normal leading-[19.62px] tracking-[0%] mt-[16px] mb-[29px]">
                    日本案件経験豊富なエンジニアとデザイナーが<br/>
                    在籍。Figmaを用いた最新UI/UX設計から、Web<br/>
                    開発、クロスプラットフォーム開発など一貫対応。<br/>
                    EORと組み合わせれば、採用・開発・デザインを<br/>
                    ワンストップで実現し、企業のDX推進とチームの<br/>
                    成長を強力にバックアップします。
                </p>
                <GoButton name="詳しく見る" />
            </div>
        </div>
    );
}

export default SliderMobile;
