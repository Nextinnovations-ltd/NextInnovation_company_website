import { useRef } from "react";
import GoButton from "./GoButton";
import useGoButtonAnimation from "../hooks/useGoButtonAnimation";
import useHorizontalAnimation from "../hooks/useHorizontalAnimation";

const SliderMobile = () => {

    const titleRef1 = useRef();
    const descriptionRef1 = useRef();
    const buttonRef1 = useRef();
    const titleRef2 = useRef();
    const descriptionRef2 = useRef();
    const buttonRef2 = useRef();

    useGoButtonAnimation(titleRef1, {start: "top 90%"})
    useGoButtonAnimation(buttonRef1, {start: "top 90%"})
    useHorizontalAnimation(descriptionRef1, {start: "top 90%"})
    useGoButtonAnimation(titleRef2, {start: "top 90%"})
    useGoButtonAnimation(buttonRef2, {start: "top 90%"})
    useHorizontalAnimation(descriptionRef2, {start: "top 90%"})

    return (
        <div className="bg-[#1E2C44] text-white px-[24px] rounded-b-[40px]">
            <div className="py-[50px]">
                <div className="h-[35px] overflow-hidden">
                    <h2 ref={titleRef1} className="text-[20px] font-bold leading-[38.65px] tracking-[-2%]">EOR/ 海外人材雇用代行</h2>
                </div>
                <p ref={descriptionRef1} className="text-[14px] font-normal leading-[19.62px] tracking-[0%] mt-[16px] mb-[29px]">
                    現地法人を設立せずに、東南アジアの優秀な人材を
                    採用可能。最短1ヶ月で稼働を開始でき、給与支払い
                    や法務手続きもすべて代行。独自の安心ラボ型・
                    伴走型プランにより、採用からチームビルディング、
                    人材定着、教育、成果創出まで、海外人材活用と
                    チーム化を一気通貫でサポートします。
                </p>
                <div className="overflow-hidden">
                    <div ref={buttonRef1}>
                        <GoButton name="詳しく見る" link="" />
                    </div>
                </div>
            </div>
            <div className="py-[50px]">
                <div className="h-[80px] overflow-hidden">
                    <h2 ref={titleRef2} className="text-[20px] font-bold leading-[38.65px] tracking-[-2%]">DX支援 / 受託開発<br/>・UI/UXデザイン</h2>
                </div>
                <p ref={descriptionRef2} className="text-[14px] font-normal leading-[19.62px] tracking-[0%] mt-[16px] mb-[29px]">
                    日本案件経験豊富なエンジニアとデザイナーが
                    在籍。Figmaを用いた最新UI/UX設計から、Web
                    開発、クロスプラットフォーム開発など一貫対応。
                    EORと組み合わせれば、採用・開発・デザインを
                    ワンストップで実現し、企業のDX推進とチームの
                    成長を強力にバックアップします。
                </p>
                <div className="overflow-hidden">
                    <div ref={buttonRef2}>
                        <GoButton name="詳しく見る" link="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SliderMobile;
