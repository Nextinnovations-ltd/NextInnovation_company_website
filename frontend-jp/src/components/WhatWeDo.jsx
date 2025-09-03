import SectionTitle from "./SectionTitle"
import Earth from "/images/earth.gif"

const WhatWeDo = () => {
    return (
        <div style={{background: `url(${Earth})`, backgroundPosition: '140% 0%', backgroundRepeat: 'no-repeat'}}>
            <div className="max-w-[1238px] mx-auto mt-[376px] text-[#444444]">
                <SectionTitle jp="私たちだからできること" eng="WHAT WE DO" />
                <div className="max-w-[679px] text-[21px] font-normal leading-[34px] tracking=[0%] mt-[50px]">
                    <p>
                        海外人材の採用やマネジメントには、不安やハードルがつきものです。私たちはミャンマーを中心とした東南アジアの優秀な人材を、日本企業が安心して活用できる仕組みを提供しています。
                    </p><br/>
                    <p>
                        EOR（Employer of  Record）を基盤とした独自の「安心ラボ型」「伴走型」プランで、人材の採用から定着・育成・成果創出までを一気通貫で支援。さらに受託開発やUI/UXデザインなどのDX支援も加えることで、単なる外注先ではなく貴社のチームとして共に成長するパートナーと
                        <br/>なります。
                    </p><br/>
                    <p>
                        長年の現地経験と日本企業案件で培ったノウハウを活かし、国内採用の限界を超える新しい働き方を実現すること。<br/>
                        それが、私たちNext Innovationsにしかできない強みです。
                    </p>
                </div>
            </div>
        </div>
    )
}

export default WhatWeDo