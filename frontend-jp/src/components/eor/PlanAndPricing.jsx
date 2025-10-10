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
                <div className="max-w-[1366px] mx-auto px-[24px] xl:px-[121px] pb-[80px] lg:pb-[137px]">
                    <div className="overflow-hidden">
                        <div ref={titleRef}>
                            <SectionTitle jp="プランと料金" eng="Plans and Pricing" />
                        </div>
                    </div>
                    <div ref={containerRef} className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-0 mt-[50px] lg:mt-[68px]">

                        <div className="plan-price-card shadow-[0px_3px_21px_4px_#1E2C441A] rounded-[16px] lg:rounded-[0px] lg:rounded-l-[20px] pb-[50px] lg:mt-[97px]">
                            <div className="text-white bg-[#1E2C44] flex flex-col gap-[9px] items-center rounded-t-[16px] lg:rounded-t-[0px] lg:rounded-tl-[20px] py-[22px]">
                                <p className="text-[11px] lg:text-[12px] font-normal leading-[22px] lg:leading-[23px] tracking-[1%] uppercase">EOR only Monthly</p>
                                <h2 className="text-[24px] lg:text-[25px] font-bold leading-[34px] lg:leading-[36px] tracking-[1%]">EOR単体</h2>
                                <p className="text-[12px] lg:text-[14px] font-medium leading-[21px] lg:leading-[25px] tracking-[3%] opacity-70">最低3ヶ月〜、1名から利用可能</p>
                            </div>
                            
                            <div className="text-center my-[25px] lg:my-[27px] text-[#313131]">
                                <p className="text-[35px] lg:text-[38px] font-bold leading-[45px] lg:leading-[50px] tracking-[3%]">¥50,000</p>
                                <p className="text-[10px] font-medium leading-[18px] tracking-[3%] text-[#7C7C7C] mt-[4px]">
                                    本金額は雇用代行手数料となります。<br/>
                                    採用人材の給与は別途ご負担が必要となります。<br/>
                                    本金額は月額の費用となります。
                                </p>
                            </div>
                            <PricingPlanButton
                                link="/contact?from=5"
                                bgColor="bg-white"
                                hoverBgColor="hover:bg-[#F15A29]"
                                textColor="text-[#F15A29]"
                                hoverTextColor="hover:text-white"
                            />

                            <div className="px-[31px]">
                                <div className="text-[12px] lg:text-[14px] text-[#1E2C44] font-medium leading-[22px] lg:leading-[25px] tracking-[0%] border-t-[1px] border-[#E2E2E2] pt-[24px] lg:pt-[30px] sapce-y-[5px] mt-[30px] mb-[24px] lg:mb-[36px]">
                                    <div className="flex items-start gap-[12px]">
                                        <div className="mt-1">
                                            <CircleCorrect/>
                                        </div>
                                        <p>採用活動代行</p>
                                    </div>
                                    <div className="flex items-start gap-[12px]">
                                        <div className="mt-1">
                                            <CircleCorrect/>
                                        </div>
                                        <p>雇用契約代行（現地法準拠）</p>
                                    </div>
                                    <div className="flex items-start gap-[12px]">
                                        <div className="mt-1">
                                            <CircleCorrect/>
                                        </div>
                                        <p>給与計算・支払代行（現地通貨）</p>
                                    </div>
                                    <div className="flex items-start gap-[12px]">
                                        <div className="mt-1">
                                            <CircleCorrect/>
                                        </div>
                                        <p>税務・社会保険対応</p>
                                    </div>
                                    <div className="flex items-start gap-[12px]">
                                        <div className="mt-1">
                                            <CircleCorrect/>
                                        </div>
                                        <p>労務コンプライアンス対応</p>
                                    </div>
                                    <div className="flex items-start gap-[12px]">
                                        <div className="mt-1">
                                            <CircleCorrect/>
                                        </div>
                                        <p>現地交渉サポート（月1回まで）</p>
                                    </div>
                                    <div className="flex items-start gap-[12px]">
                                        <div className="mt-1">
                                            <CircleCorrect/>
                                        </div>
                                        <p>緊急時のトラブル連絡代行</p>
                                    </div>
                                </div>
                            </div>
                            <PlanAndPricingGreenCard
                                text1="・"
                                text1Next="海外人材を雇いたいが、現地法人を設立する予定はない"
                                text2="・"
                                text2Next="雇用契約・給与計算・社会保険などの煩雑な手続きを任せたい"
                                text3="・"
                                text3Next="海外人材のマネージメントに自信あり、自社で業務上の管理/運営をリモートで可能"
                            />
                        </div>

                        <div className="plan-price-card">
                            <div className="flex justify-center gap-[20px] items-end mb-2 lg:mb-3">
                                <LineLeft/>
                                <p className="text-[16px] lg:text-[18px] font-bold leading-[22px] lg:leading-[25px] tracking-[3%] text-[#F15A29] mb-1 lg:mb-[7px]">オススメ !</p>
                                <LineRight/>
                            </div>
                            <div className="shadow-[0px_3px_21px_4px_#1E2C441A] border-[8px] lg:border-[9px] border-[#F15A29] rounded-t-[20px] pb-[50px]">
                                <div className="text-white bg-[#F15A29] relative">
                                    <img src={Crown} alt="" className="w-[51px] h-[44px] mx-auto absolute top-[-16px] left-1/2 -translate-x-1/2" />
                                    <div className="flex flex-col gap-[9px] items-center pb-[25px] pt-[64px]">
                                        <p className="text-[11px] lg:text-[12px] font-normal leading-[22px] lg:leading-[23px] tracking-[1%] uppercase">Safe laboratory-type EOR</p>
                                        <h2 className="text-[24px] lg:text-[25px] font-bold leading-[34px] lg:leading-[36px] tracking-[1%]">安心ラボ型EOR</h2>
                                        <p className="text-[12px] lg:text-[14px] font-medium leading-[21px] lg:leading-[25px] tracking-[3%] opacity-70">最低12ヶ月〜、1名から利用可能</p>
                                    </div>
                                </div>
                                <div className="text-center my-[26px] text-[#313131]">
                                    <p className="text-[35px] lg:text-[38px] font-bold leading-[45px] lg:leading-[50px] tracking-[3%]">¥150,000～</p>
                                    <p className="text-[12px] font-medium leading-[25px] tracking-[3%] text-[#444444]">1名あたりの金額です。</p>
                                    <p className="text-[10px] font-medium leading-[18px] tracking-[3%] text-[#7C7C7C]">
                                        給与込み、ただし採用人材のレベル、スキルにより価格は変動します。<br/>
                                        本金額は月額の費用となります。
                                    </p>
                                </div>
                                <PricingPlanButton
                                    link="/contact?from=6"
                                    bgColor="bg-[#F15A29]"
                                    hoverBgColor="hover:bg-[#D95125]"
                                    textColor="text-white"
                                    hoverTextColor="hover:text-white"
                                />

                                <div className="px-[31px]">
                                    <div className="text-[12px] lg:text-[14px] text-[#1E2C44] font-medium leading-[22px] lg:leading-[25px] tracking-[0%] border-t-[1px] border-[#E2E2E2] pt-[24px] lg:pt-[30px] sapce-y-[5px] mt-[30px] mb-[24px] lg:mb-[36px]">
                                        <div className="flex items-start gap-[12px]">
                                            <div className="mt-1">
                                                <CircleCorrect/>
                                            </div>
                                            <p>「EORのみ」の全サービス</p>
                                        </div>
                                        <div className="flex items-start gap-[12px]">
                                            <div className="mt-1">
                                                <CircleCorrect/>
                                            </div>
                                            <p>勤怠管理（当社HRスタッフ）</p>
                                        </div>
                                        <div className="flex items-start gap-[12px]">
                                            <div className="mt-1">
                                                <CircleCorrect/>
                                            </div>
                                            <p>現場サポート（基本現場管理•人材の悩み・課題対応）</p>
                                        </div>
                                        <div className="flex items-start gap-[12px]">
                                            <div className="mt-1">
                                                <CircleCorrect/>
                                            </div>
                                            <p>労働環境サポート（オフィス・停電対策など）</p>
                                        </div>
                                        <div className="flex items-start gap-[12px]">
                                            <div className="mt-1">
                                                <CircleCorrect/>
                                            </div>
                                            <p>福利厚生支援（食事会・イベント等）</p>
                                        </div>
                                        <div className="flex items-start gap-[12px]">
                                            <div className="mt-1">
                                                <CircleCorrect/>
                                            </div>
                                            <p>PC調達・配布代行（実費のみ、手数料なし）</p>
                                        </div>
                                    </div>
                                </div>
                                <PlanAndPricingGreenCard
                                    text1="・"
                                    text1Next="長期的に海外エンジニアを“自社チーム”の一員として定着させたい"
                                    text2="・"
                                    text2Next="勤怠管理・福利厚生・現場サポートまでトータルで任せたい"
                                    text3="・"
                                    text3Next="海外人材活用に不慣れで、安心できるサポート体制を求めている"
                                />
                            </div>
                        </div>

                        <div className="plan-price-card shadow-[0px_3px_21px_4px_#1E2C441A] rounded-[16px] lg:rounded-[0px] lg:rounded-r-[20px] pb-[50px] lg:mt-[97px]">
                            <div className="text-white bg-[#1E2C44] flex flex-col gap-[9px] items-center rounded-t-[16px] lg:rounded-t-[0px] lg:rounded-tr-[20px] py-[22px]">
                                <p className="text-[11px] lg:text-[12px] font-normal leading-[22px] lg:leading-[23px] tracking-[1%] uppercase">Project-accompanying EOR</p>
                                <h2 className="text-[24px] lg:text-[25px] font-bold leading-[34px] lg:leading-[36px] tracking-[1%]">プロジェクト伴走型EOR</h2>
                                <p className="text-[12px] lg:text-[14px] font-medium leading-[21px] lg:leading-[25px] tracking-[3%] opacity-70">最低6ヶ月〜、3名から利用可能</p>
                            </div>
                            
                            <div className="text-center my-[25px] lg:my-[27px] text-[#313131]">
                                <p className="text-[35px] lg:text-[38px] font-bold leading-[45px] lg:leading-[50px] tracking-[3%]">￥300,000～</p>
                                <p className="text-[12px] font-medium leading-[25px] tracking-[3%] text-[#444444]">1名あたりの金額です。</p>
                                <p className="text-[10px] font-medium leading-[18px] tracking-[3%] text-[#7C7C7C]">
                                    給与込み、ただし人材のレベル、スキルにより価格は変動します。<br/>
                                    本金額は月額の費用となります。
                                </p>
                            </div>
                            <PricingPlanButton
                                link="/contact?from=7"
                                bgColor="bg-white"
                                hoverBgColor="hover:bg-[#F15A29]"
                                textColor="text-[#F15A29]"
                                hoverTextColor="hover:text-white"
                            />

                            <div className="px-[31px]">
                                <div className="text-[12px] lg:text-[14px] text-[#1E2C44] font-medium leading-[22px] lg:leading-[25px] tracking-[0%] border-t-[1px] border-[#E2E2E2] pt-[24px] lg:pt-[30px] sapce-y-[5px] mt-[25px] lg:mt-[30px] mb-[24px] lg:mb-[36px]">
                                    <div className="flex items-start gap-[12px]">
                                        <div className="mt-1">
                                            <CircleCorrect/>
                                        </div>
                                        <p>「安心ラボ型」の全サービス</p>
                                    </div>
                                    <div className="flex items-start gap-[12px]">
                                        <div className="mt-1">
                                            <CircleCorrect/>
                                        </div>
                                        <p>当社担当によるPM支援（進捗・品質・リスク管理）</p>
                                    </div>
                                    <div className="flex items-start gap-[12px]">
                                        <div className="mt-1">
                                            <CircleCorrect/>
                                        </div>
                                        <p>プロジェクト完了後のラボ型移行サポート</p>
                                    </div>
                                </div>
                            </div>
                            <PlanAndPricingGreenCard
                                text1="・"
                                text1Next="チームにノウハウを溜めながらプロジェクト単位で確実に成果を出したい"
                                text2="・"
                                text2Next="専任PMによる進行・品質・リスク管理を任せたい"
                                text3="・"
                                text3Next="社内のマネジメントリソースが不足している"
                            />
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PlanAndPricing;
