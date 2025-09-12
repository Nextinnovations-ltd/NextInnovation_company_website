import EorDiagram from "/images/eor-diagram.png"

const Diagram = () => {
    return (
        <div className="bg-white text-[#444444] px-[98px] py-[120px] rounded-[80px] mt-[66px]">
            <p className="w-[553px] mx-auto text-center text-[15px] font-normal leading-[24px] tracking-[0%] mb-[60px]">
                当社が雇用主として人材を確保。それぞれのプランにより対応範囲が異なります。<br/>
                安心ラボ型、伴走型はオフィススペースの提供や現場管理まで担当しますので<br/>
                御社の海外拠点のような感覚で安心して海外人材活用が可能です。
            </p>
            <img src={EorDiagram} alt="" />
        </div>
    );
}

export default Diagram;
