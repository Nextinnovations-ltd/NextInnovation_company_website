import { Link } from 'react-router-dom';
import SectionTitle from '../SectionTitle';
import CircleCorrect from '../svg/CircleCorrect';
import LineLeft from '../svg/LineLeft';
import LineRight from '../svg/LineRight';
import Crown from '/images/crown.png'
import { useRef } from 'react';
import useSectionTitleAnimation from '../../hooks/useSectionTitleAnimation';
import useCardAnimation from '../../hooks/useCardAnimation';

const PlanAndPricing = () => {
    const titleRef = useRef(null)
    const containerRef = useRef(null)
    useSectionTitleAnimation(titleRef,{start: "top 70%"})
    useCardAnimation(containerRef,".plan-price-card",{start: "top 70%"})
    return (
        <div className="bg-white rounded-b-[80px]">
            <div className="max-w-[1366px] mx-auto px-[64px] pb-[137px]">
                <div className="overflow-hidden">
                    <div ref={titleRef}>
                        <SectionTitle jp="プランと料金" eng="Plans and Pricing" />
                    </div>
                </div>
                <div ref={containerRef} className="flex mt-[68px]">

                    <div className="plan-price-card w-[407px] shadow-[0px_3px_21px_4px_#1E2C441A] rounded-l-[20px] pb-[50px] mt-[97px]">
                        <div className="text-white bg-[#1E2C44] flex flex-col gap-[10px] items-center rounded-tl-[20px] py-[25px]">
                            <p className="text-[13px] font-normal leading-[26px] tracking-[1%]">EOR only Monthly</p>
                            <h2 className="text-[28px] font-bold leading-[40px] tracking-[1%]">EOR単体</h2>
                            <p className="text-[15px] font-medium leading-[28px] tracking-[3%] opacity-70">最低3ヶ月〜、1名から利用可能</p>
                        </div>
                        
                        <div className="text-center mt-[30px] mb-[59px] text-[#313131]">
                            <p className="text-[42px] font-bold leading-[54px] tracking-[3%]">¥50,000</p>
                            <p className="text-[13px] font-medium leading-[28px] tracking-[3%]">／人 ＋ 人材給与（税抜）</p>
                        </div>
                        <div className="ps-[45px] pe-[61px]">
                            <Link to="">
                                <div className="text-[18px] hover:bg-[#F15A29] hover:text-white text-[#F15A29] font-bold leading-[30px] tracking-[3%] py-[14px] px-[58px] border-[2px] border-[#F15A29] rounded-[40px] transition-colors duration-400 ease-in-out">このプランで相談する</div>
                            </Link>
                        </div>

                        <div className="ps-[35px] pe-[51px]">
                            <div className="text-[15px] text-[#1E2C44] font-medium leading-[28px] tracking-[0%] border-y-[1px] border-[#E2E2E2] py-[30px] sapce-y-[6px] mt-[30px]">
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
                            <div className="mt-[18px]">
                                <p className="text-[16px] text-[#FF0000] font-medium leading-[28px] tracking-[3%]">
                                    ※本金額は雇用代行手数料となります。<br/>
                                    ※採用人材の給与は別途ご負担が必要と<br/>
                                    なります。<br/>
                                    ※本金額は月額の費用となります。
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="plan-price-card">
                        <div className="flex justify-center gap-[20px] items-end mb-3">
                            <LineLeft/>
                            <p className="text-[20px] font-bold leading-[28px] tracking-[3%] text-[#F15A29] mb-2">オススメ !</p>
                            <LineRight/>
                        </div>
                        <div className="w-[424px] shadow-[0px_3px_21px_4px_#1E2C441A] border-[10px] border-[#F15A29] rounded-t-[20px] pb-[84px]">
                            <div className="text-white bg-[#F15A29] relative">
                                <img src={Crown} alt="" className="w-[67px] h-[57px] mx-auto absolute top-[-20px] left-1/2 -translate-x-1/2" />
                                <div className="flex flex-col gap-[10px] items-center pb-[25px] pt-[64px]">
                                    <p className="text-[13px] font-normal leading-[26px] tracking-[1%]">Safe laboratory-type EOR</p>
                                    <h2 className="text-[28px] font-bold leading-[40px] tracking-[1%]">安心ラボ型EOR</h2>
                                    <p className="text-[15px] font-medium leading-[28px] tracking-[3%] opacity-70">最低12ヶ月〜、1名から利用可能</p>
                                </div>
                            </div>
                            <div className="text-center mt-[30px] mb-[30px] text-[#313131]">
                                <p className="text-[42px] font-bold leading-[54px] tracking-[3%]">¥150,000</p>
                                <p className="text-[13px] font-medium leading-[28px] tracking-[3%]">／人（給与込み、ただし採用人材のレベル、<br/>スキルにより価格は変動）</p>
                            </div>
                            <div className="ms-[45px] me-[58px]">
                                <Link to="">
                                    <div className="bg-[#F15A29] hover:bg-[#D95125] text-[18px] text-white font-bold leading-[30px] tracking-[3%] py-[14px] px-[58px] border-[2px] border-[#F15A29] rounded-[40px]">このプランで相談する</div>
                                </Link>
                            </div>

                            <div className="ps-[35px] pe-[51px]">
                                <div className="text-[15px] text-[#1E2C44] font-medium leading-[28px] tracking-[0%] border-y-[1px] border-[#E2E2E2] py-[30px] sapce-y-[6px] mt-[30px]">
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
                                <div className="mt-[18px]">
                                    <p className="text-[16px] text-[#FF0000] font-medium leading-[28px] tracking-[3%]">
                                        ※本金額は月額の費用となります。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="plan-price-card w-[407px] shadow-[0px_3px_21px_4px_#1E2C441A] rounded-r-[20px] pb-[50px] mt-[97px]">
                        <div className="text-white bg-[#1E2C44] flex flex-col gap-[10px] items-center rounded-tr-[20px] py-[25px]">
                            <p className="text-[13px] font-normal leading-[26px] tracking-[1%]">Project-accompanying EOR</p>
                            <h2 className="text-[28px] font-bold leading-[40px] tracking-[1%]">プロジェクト伴走型EOR</h2>
                            <p className="text-[15px] font-medium leading-[28px] tracking-[3%] opacity-70">最低6ヶ月〜、3名から利用可能</p>
                        </div>
                        
                        <div className="text-center mt-[30px] mb-[59px] text-[#313131]">
                            <p className="text-[42px] font-bold leading-[54px] tracking-[3%]">￥300,000～</p>
                            <p className="text-[13px] font-medium leading-[28px] tracking-[3%]">／人（給与込み＋当社担当PM支援料）</p>
                        </div>
                        <div className="ps-[45px] pe-[61px]">
                            <Link to="">
                                <div className="text-[18px] hover:bg-[#F15A29] hover:text-white text-[#F15A29] font-bold leading-[30px] tracking-[3%] py-[14px] px-[58px] border-[2px] border-[#F15A29] rounded-[40px] transition-colors duration-400 ease-in-out">このプランで相談する</div>
                            </Link>
                        </div>

                        <div className="ps-[35px] pe-[51px]">
                            <div className="text-[15px] text-[#1E2C44] font-medium leading-[28px] tracking-[0%] border-y-[1px] border-[#E2E2E2] py-[30px] sapce-y-[6px] mt-[30px]">
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
                            <div className="mt-[18px]">
                                <p className="text-[16px] text-[#FF0000] font-medium leading-[28px] tracking-[3%]">
                                    ※本金額は月額の費用となります。
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default PlanAndPricing;
