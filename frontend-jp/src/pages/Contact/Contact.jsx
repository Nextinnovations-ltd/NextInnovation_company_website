import ReachOut from "/images/Reach-out-to-us.png"
import Breadcrumb from "../../components/Breadcrumb";
import { useRef } from "react";
import useLineAnimation from "../../hooks/useLineAnimation";
import ContactLabelInput from "../../components/ContactLabelInput";
import ContactLabelSelect from "../../components/ContactLabelSelect";
import ContactLabel from "../../components/ContactLabel";
import ContactRadio from "../../components/ContactRadio";
import { Link } from "react-router-dom";

const Contact = () => {
    const topLineRef = useRef(null)
    useLineAnimation(topLineRef,{start: "top 90%"})
    return (
        <div className="bg-[url('/images/contact-bg.png')] bg-cover bg-no-repeat bg-fixed rounded-b-[80px] relative pb-[172px]">
            <div className="max-w-[1240px] mx-auto pt-[130px]">
                <Breadcrumb current="お問い合わせ" />
                <div className="mt-[38px] flex justify-between">
                    <div className="w-[546px] pt-[13px]">
                        <img src={ReachOut} alt="" />
                        <div className="mt-[64px] space-y-[18px] text-[#000000] text-[14px] font-normal leading-[31px] tracking-[0%]">
                            <p className="">
                                ご入力は約2分で完了します。<br/>
                                お問い合わせ内容に応じて、担当より 2営業日以内にご連絡いたします。
                            </p>
                            <p>
                                ご入力いただいた情報は厳重に管理し、他の目的で利用することはありませんので、安心してご記入ください。また、受託開発・UI/UXデザイン・サイトリニューアル等のお問い合わせにつきましては、
                                <span className="font-semibold">対象となるURL（新規の場合は「このようなサイトを作りたい」という参考サービスのリンク）、ご希望のご予算などをできるだけ具体的にご記入いただけますと、</span>
                                スムーズにご提案が可能です。
                            </p>
                        </div>
                        <div className="relative mt-[122px] text-[#444444] pt-[24px]">
                            <span ref={topLineRef} className="absolute top-0 left-0 h-[2px] bg-[#1E2C44] block"></span>
                            <p className="text-[16px] font-medium leading-[31px] tracking-[0%] mb-[10px]">連絡先情報</p>
                            <h3 className="roboto text-[58px] font-bold leading-[67px] tracking-[-1%] uppercase">contact info</h3>
                            <div className="mt-[98px] flex justify-between items-start">
                                <div className="space-y-4">
                                    <p className="text-[#999999] text-[14px] font-bold leading-[100%] tracking-[1%]">メール</p>
                                    <p className="roboto text-[18px] font-normal leading-[26px] tracking-[1%]">info@next-innovations.ltd</p>
                                </div>
                                <div className="space-y-4">
                                    <p className="text-[#999999] text-[14px] font-bold leading-[100%] tracking-[1%]">電話番号</p>
                                    <p className="roboto text-[18px] font-normal leading-[26px] tracking-[1%]">09 451 663 606 </p>
                                </div>
                            </div>
                            <div className="space-y-4 mt-[48px]">
                                <p className="text-[#999999] text-[14px] font-bold leading-[100%] tracking-[1%]">住所</p>
                                <p className="roboto text-[18px] font-normal leading-[28px] tracking-[1%]">Room No (602), Gandamar Residence, Gandamar Road, <br/>Mayangone Township, Yangon, Myanmar</p>
                            </div>

                        </div>
                    </div>
                    <div className="w-[510px]">
                        <p className="text-[#444444] text-[24px] font-bold leading-[44px] tracking-[-2%]">こちらのフォームへご記入下さい</p>
                        <form className="mt-[40px] space-y-[24px]">
                            <ContactLabelInput label="会社名" placeholder="株式会社 Next Innovations" type="text" name="companyName" />
                            <ContactLabelInput label="お名前" placeholder="田中太郎" type="text" name="name" require />
                            <ContactLabelInput label="メールアドレス" placeholder="tanaka@gmail.com" type="email" name="email" require />
                            <ContactLabelInput label="電話番号 " placeholder="09012345678" type="text" name="phone" />
                            <ContactLabelSelect label="ご予算" name="budget">
                                <option value="">選択してください。</option>
                                <option value="5">50万未満</option>
                                <option value="6">100万未満</option>
                                <option value="7">100万円</option>
                                <option value="8">200万円</option>
                                <option value="9">300万円</option>
                                <option value="10">400万円</option>
                                <option value="11">500万円</option>
                                <option value="11">600万円</option>
                                <option value="11">700万円</option>
                                <option value="11">800万円</option>
                                <option value="11">900万円</option>
                                <option value="11">1000万円以上</option>
                                <option value="11">未定</option>
                                <option value="11">応相談</option>
                            </ContactLabelSelect>
                            <ContactLabelSelect label="ご希望形式" name="budget">
                                <option value="">ご希望のご提案形式を選択して下さい。</option>
                                <option value="5">50万未満</option>
                                <option value="6">100万未満</option>
                                <option value="7">100万円</option>
                                <option value="8">200万円</option>
                                <option value="9">300万円</option>
                                <option value="10">400万円</option>
                                <option value="11">500万円</option>
                                <option value="11">600万円</option>
                                <option value="11">700万円</option>
                                <option value="11">800万円</option>
                                <option value="11">900万円</option>
                                <option value="11">1000万円以上</option>
                                <option value="11">未定</option>
                                <option value="11">応相談</option>
                            </ContactLabelSelect>
                            <ContactLabelSelect label="ご相談サービス" name="services" require>
                                <option value="">ご興味のあるサービスをお選びください。</option>
                                <option value="5">EOR</option>
                                <option value="6">安心ラボ型EOR</option>
                                <option value="7">プロジェクト伴走型EOR</option>
                                <option value="8">EOR代理店制度</option>
                                <option value="9">DX支援</option>
                                <option value="10">受託開発</option>
                                <option value="11">UI/UXデザイン</option>
                            </ContactLabelSelect>
                            <div className="flex flex-col gap-3 pb-6">
                                <ContactLabel label="知ったきっかけ" name="known" require />
                                <ContactRadio label="ご紹介" name="sns" />
                                <ContactRadio label="SNS" name="sns" />
                                <ContactRadio label="その他媒体" name="sns" />
                                <ContactRadio label="営業" name="sns" />
                            </div>
                            <div className="flex flex-col gap-3">
                                <ContactLabel label="お問い合わせ内容詳細 " name="message" />
                                <textarea className="w-[510px] h-[130px] px-4 py-5 text-[#7F7F7F] text-[14px] font-normal leading-[31px] tracking-[0%] bg-transparent border-[2px] border-[#00000014] rounded-[8px] focus:outline-none" placeholder="ご依頼内容の詳細についてお聞かせください。"></textarea>
                            </div>
                            <div className="flex gap-[10px] items-center">
                                <input type="checkbox" id="terms" className="w-4 h-4 border-[1px] border-[#DFE4EA] rounded-[4px]" />
                                <div className="text-[14px] font-normal leading-[31px] tracking-[0%] text-[#111928]"><Link to="/privacy" className="text-blue-600 hover:font-semibold">プライバシーポリシー</Link>に同意する</div>
                            </div>
                            <button className="text-[20px] font-bold leading-[22px] tracking-[-2%] text-white w-full rounded-[40px] py-5 bg-[#E84721] hover:bg-[#F15A29]">確認する</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
