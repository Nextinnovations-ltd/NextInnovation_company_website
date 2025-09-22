import SectionTitle from '../SectionTitle';
import CircleCorrect from '../svg/CircleCorrect';
import LineLeft from '../svg/LineLeft';
import LineRight from '../svg/LineRight';
import Crown from '/images/crown.png'
import { useRef } from 'react';
import useSectionTitleAnimation from '../../hooks/useSectionTitleAnimation';
import useCardAnimation from '../../hooks/useCardAnimation';
import PricingPlanButton from './PricingPlanButton';
import PlanAndPricingGreenCard from './PlanAndPricingGreenCard';

const PlanAndPricing = () => {
    const titleRef = useRef(null)
    const containerRef = useRef(null)
    useSectionTitleAnimation(titleRef,{start: "top 70%"})
    useCardAnimation(containerRef,".plan-price-card",{start: "top 70%"})
    return (
        <div className="bg-[#1E2C44]">
            <div className="bg-white rounded-b-[40px] lg:rounded-b-[80px]">
                <div className="max-w-[1366px] mx-auto px-[24px] lg:px-[64px] pb-[80px] lg:pb-[137px]">
                    <div className="overflow-hidden">
                        <div ref={titleRef}>
                            <SectionTitle jp="プランと料金" eng="Plans and Pricing" />
                        </div>
                    </div>
                    <div ref={containerRef} className="lg:flex mt-[50px] lg:mt-[68px]">

                        <div className="plan-price-card lg:w-[407px] shadow-[0px_3px_21px_4px_#1E2C441A] rounded-[16px] lg:rounded-[0px] lg:rounded-l-[20px] pb-[50px] lg:mt-[97px]">
                            <div className="text-white bg-[#1E2C44] flex flex-col gap-[10px] items-center rounded-t-[16px] lg:rounded-t-[0px] lg:rounded-tl-[20px] py-[25px]">
                                <p className="text-[11px] lg:text-[13px] font-normal leading-[22px] lg:leading-[26px] tracking-[1%] uppercase">EOR only Monthly</p>
                                <h2 className="text-[24px] lg:text-[28px] font-bold leading-[34px] lg:leading-[40px] tracking-[1%]">EOR単体</h2>
                                <p className="text-[12px] lg:text-[15px] font-medium leading-[21px] lg:leading-[28px] tracking-[3%] opacity-70">最低3ヶ月〜、1名から利用可能</p>
                            </div>
                            
                            <div className="text-center my-[25px] lg:my-[30px] text-[#313131]">
                                <p className="text-[35px] lg:text-[42px] font-bold leading-[45px] lg:leading-[54px] tracking-[3%]">¥50,000</p>
                                <p className="text-[10px] font-medium leading-[20px] tracking-[3%] text-[#7C7C7C] mt-[6px]">
                                    本金額は雇用代行手数料となります。<br/>
                                    採用人材の給与は別途ご負担が必要となります。<br/>
                                    本金額は月額の費用となります。
                                </p>
                            </div>
                            <PricingPlanButton
                                link=""
                                bgColor="bg-white"
                                hoverBgColor="hover:bg-[#F15A29]"
                                textColor="text-[#F15A29]"
                                hoverTextColor="hover:text-white"
                            />

                            <div className="ps-[35px] pe-[51px]">
                                <div className="text-[12px] lg:text-[15px] text-[#1E2C44] font-medium leading-[22px] lg:leading-[28px] tracking-[0%] border-t-[1px] border-[#E2E2E2] pt-[24px] lg:pt-[30px] sapce-y-[6px] mt-[30px] mb-[24px] lg:mb-[36px]">
                                    <div className="flex items-start gap-[12px]">
                                        <CircleCorrect/>
                                        <p>採用活動代行</p>
                                    </div>
                                    <div className="flex items-start gap-[12px]">
                                        <CircleCorrect/>
                                        <p>雇用契約代行（現地法準拠）</p>
                                    </div>
                                    <div className="flex items-start gap-[12px]">
                                        <CircleCorrect/>
                                        <p>給与計算・支払代行（現地通貨）</p>
                                    </div>
                                    <div className="flex items-start gap-[12px]">
                                        <CircleCorrect/>
                                        <p>税務・社会保険対応</p>
                                    </div>
                                    <div className="flex items-start gap-[12px]">
                                        <CircleCorrect/>
                                        <p>労務コンプライアンス対応</p>
                                    </div>
                                    <div className="flex items-start gap-[12px]">
                                        <CircleCorrect/>
                                        <p>現地交渉サポート（月1回まで）</p>
                                    </div>
                                    <div className="flex items-start gap-[12px]">
                                        <CircleCorrect/>
                                        <p>緊急時のトラブル連絡代行</p>
                                    </div>
                                </div>
                            </div>
                            <PlanAndPricingGreenCard
                                text1="・海外人材を雇いたいが、現地法人を"
                                text1Next="設立する予定はない"
                                text2="・雇用契約・給与計算・社会保険などの"
                                text2Next="煩雑な手続きを任せたい"
                                text3="・小規模からリスクを抑えて海外"
                                text3Next="人材活用を試したい"
                            />
                        </div>

                        <div className="plan-price-card my-[28px] lg:my-0">
                            <div className="flex justify-center gap-[20px] items-end mb-2 lg:mb-3">
                                <LineLeft/>
                                <p className="text-[16px] lg:text-[20px] font-bold leading-[22px] lg:leading-[28px] tracking-[3%] text-[#F15A29] mb-1 lg:mb-2">オススメ !</p>
                                <LineRight/>
                            </div>
                            <div className="lg:w-[424px] shadow-[0px_3px_21px_4px_#1E2C441A] border-[8px] lg:border-[10px] border-[#F15A29] rounded-t-[20px] pb-[50px]">
                                <div className="text-white bg-[#F15A29] relative">
                                    <img src={Crown} alt="" className="w-[67px] h-[57px] mx-auto absolute top-[-20px] left-1/2 -translate-x-1/2" />
                                    <div className="flex flex-col gap-[10px] items-center pb-[25px] pt-[64px]">
                                        <p className="text-[11px] lg:text-[13px] font-normal leading-[22px] lg:leading-[26px] tracking-[1%] uppercase">Safe laboratory-type EOR</p>
                                        <h2 className="text-[24px] lg:text-[28px] font-bold leading-[34px] lg:leading-[40px] tracking-[1%]">安心ラボ型EOR</h2>
                                        <p className="text-[12px] lg:text-[15px] font-medium leading-[21px] lg:leading-[28px] tracking-[3%] opacity-70">最低12ヶ月〜、1名から利用可能</p>
                                    </div>
                                </div>
                                <div className="text-center mt-[30px] mb-[30px] text-[#313131]">
                                    <p className="text-[35px] lg:text-[42px] font-bold leading-[45px] lg:leading-[54px] tracking-[3%]">¥150,000～</p>
                                    <p className="text-[13px] font-medium leading-[28px] tracking-[3%] text-[#444444]">1名あたりの金額です。</p>
                                    <p className="text-[10px] font-medium leading-[20px] tracking-[3%] text-[#7C7C7C]">
                                        給与込み、ただし採用人材のレベル、スキルにより価格は変動します。<br/>
                                        本金額は月額の費用となります。
                                    </p>
                                </div>
                                <PricingPlanButton
                                    link=""
                                    bgColor="bg-[#F15A29]"
                                    hoverBgColor="hover:bg-[#D95125]"
                                    textColor="text-white"
                                    hoverTextColor="hover:text-white"
                                />

                                <div className="ps-[35px] pe-[51px]">
                                    <div className="text-[12px] lg:text-[15px] text-[#1E2C44] font-medium leading-[22px] lg:leading-[28px] tracking-[0%] border-t-[1px] border-[#E2E2E2] pt-[24px] lg:pt-[30px] sapce-y-[6px] mt-[30px] mb-[24px] lg:mb-[36px]">
                                        <div className="flex items-start gap-[12px]">
                                            <CircleCorrect/>
                                            <p>「EORのみ」の全サービス</p>
                                        </div>
                                        <div className="flex items-start gap-[12px]">
                                            <CircleCorrect/>
                                            <p>勤怠管理  (当社HRスタッフ)</p>
                                        </div>
                                        <div className="flex items-start gap-[12px]">
                                            <CircleCorrect/>
                                            <p>現場サポート<br/>(基本現場管理•人材の悩み・課題対応)</p>
                                        </div>
                                        <div className="flex items-start gap-[12px]">
                                            <CircleCorrect/>
                                            <p>労働環境サポート<br/>(オフィス・停電対策など)</p>
                                        </div>
                                        <div className="flex items-start gap-[12px]">
                                            <CircleCorrect/>
                                            <p>福利厚生支援（食事会・イベント等）</p>
                                        </div>
                                        <div className="flex items-start gap-[12px]">
                                            <CircleCorrect/>
                                            <p>PC調達・配布代行<br/>(実費のみ、手数料なし)</p>
                                        </div>
                                    </div>
                                </div>
                                <PlanAndPricingGreenCard
                                    text1="・長期的に海外エンジニアを“自社チーム”の"
                                    text1Next="一員として定着させたい"
                                    text2="・勤怠管理・福利厚生・現場サポートまで"
                                    text2Next="トータルで任せたい"
                                    text3="・海外人材活用に不慣れで、安心できる"
                                    text3Next="サポート体制を求めている"
                                />
                            </div>
                        </div>

                        <div className="plan-price-card lg:w-[407px] shadow-[0px_3px_21px_4px_#1E2C441A] rounded-[16px] lg:rounded-[0px] lg:rounded-r-[20px] pb-[50px] lg:mt-[97px]">
                            <div className="text-white bg-[#1E2C44] flex flex-col gap-[10px] items-center rounded-t-[16px] lg:rounded-t-[0px] lg:rounded-tr-[20px] py-[25px]">
                                <p className="text-[11px] lg:text-[13px] font-normal leading-[22px] lg:leading-[26px] tracking-[1%] uppercase">Project-accompanying EOR</p>
                                <h2 className="text-[24px] lg:text-[28px] font-bold leading-[34px] lg:leading-[40px] tracking-[1%]">プロジェクト伴走型EOR</h2>
                                <p className="text-[12px] lg:text-[15px] font-medium leading-[21px] lg:leading-[28px] tracking-[3%] opacity-70">最低6ヶ月〜、3名から利用可能</p>
                            </div>
                            
                            <div className="text-center mt-[25px] lg:mt-[30px] mb-[30px] text-[#313131]">
                                <p className="text-[35px] lg:text-[42px] font-bold leading-[45px] lg:leading-[54px] tracking-[3%]">￥300,000～</p>
                                <p className="text-[13px] font-medium leading-[28px] tracking-[3%] text-[#444444]">1名あたりの金額です。</p>
                                <p className="text-[10px] font-medium leading-[20px] tracking-[3%] text-[#7C7C7C]">
                                    給与込み、ただし人材のレベル、スキルにより価格は変動します。<br/>
                                    本金額は月額の費用となります。
                                </p>
                            </div>
                            <PricingPlanButton
                                link=""
                                bgColor="bg-white"
                                hoverBgColor="hover:bg-[#F15A29]"
                                textColor="text-[#F15A29]"
                                hoverTextColor="hover:text-white"
                            />

                            <div className="ps-[35px] pe-[51px]">
                                <div className="text-[12px] lg:text-[15px] text-[#1E2C44] font-medium leading-[22px] lg:leading-[28px] tracking-[0%] border-t-[1px] border-[#E2E2E2] pt-[24px] lg:pt-[30px] sapce-y-[6px] mt-[25px] lg:mt-[30px] mb-[24px] lg:mb-[36px]">
                                    <div className="flex items-start gap-[12px]">
                                        <CircleCorrect/>
                                        <p>「安心ラボ型」の全サービス</p>
                                    </div>
                                    <div className="flex items-start gap-[12px]">
                                        <CircleCorrect/>
                                        <p>当社担当によるPM支援<br/>（進捗・品質・リスク管理）</p>
                                    </div>
                                    <div className="flex items-start gap-[12px]">
                                        <CircleCorrect/>
                                        <p>プロジェクト完了後のラボ型移行サポート</p>
                                    </div>
                                </div>
                            </div>
                            <PlanAndPricingGreenCard
                                text1="・チームにノウハウを溜めながらプロジェク"
                                text1Next="ト単位で確実に成果を出したい"
                                text2="・専任PMによる進行・品質・リスク管理を"
                                text2Next="任せたい"
                                text3="・社内のマネジメントリソースが"
                                text3Next="不足している"
                            />
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PlanAndPricing;
