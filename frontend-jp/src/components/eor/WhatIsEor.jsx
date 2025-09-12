import SectionTitle from "../SectionTitle";

const WhatIsEor = () => {
    return (
        <div className="text-[#444444] pt-[180px]">
            <SectionTitle jp="EORとは？" eng="what is eor?" />
            <div className="flex justify-end mt-[36px]">
                <p className="w-[819px] text-[24px] font-normal leading-[42px] tracking-[0%] pt-[28px] border-t-[2px] border-[#E84721]">
                    Employer of Record（EOR）は、現地に法人を設立せずに海外人材を雇用できる仕組みです。採用・雇用契約・給与支払・法務対応を当社が代行し、
                    日本企業は人材を自社スタッフのように活用できます。ただし、EOR単体では 勤怠管理や人材定着、マネジメント部分が不十分 になるケースが多々
                    あります。そこで当社は「安心ラボ型」「プロジェクト伴走型」を用意し、EORの利点を最大化しています。<span className="font-bold">ラボ型でのEORが海外人材活用の最適解</span>だという考えに当社は辿り着きました。
                </p>
            </div>
        </div>
    );
}

export default WhatIsEor;
