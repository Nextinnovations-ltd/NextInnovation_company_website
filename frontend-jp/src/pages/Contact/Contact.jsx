import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ReachOut from "/images/Reach-out-to-us.png"
import Breadcrumb from "../../components/Breadcrumb";
import { useRef } from "react";
import useLineAnimation from "../../hooks/useLineAnimation";
import ContactLabelInput from "../../components/ContactLabelInput";
import ContactLabelSelect from "../../components/ContactLabelSelect";
import ContactLabel from "../../components/ContactLabel";
import ContactRadio from "../../components/ContactRadio";
import { Link } from "react-router-dom";
import { API_BASE_URL } from "../../config";
import Danger from "../../components/svg/Danger";

const Contact = () => {
    const topLineRef = useRef(null)
    useLineAnimation(topLineRef,{start: "top 90%"})

    const navigate = useNavigate()
    const location = useLocation()
    const queryParams = new URLSearchParams(location.search);
    const from = queryParams.get("from"); 
    let editFormData = location.state
    let [error,setError] = useState('')
    let [loading,setLoading] = useState(false)
    let [check,setCheck] = useState(false)
    let [formData,setFormData] = useState({
        company_name : '',
        name : '',
        email : '',
        phone : '',
        interest : '',
        budget_jp : '',
        hope : '',
        known : '',
        message : ''
    })

    useEffect(() => {
        if (editFormData) {
            setFormData(editFormData)
        }else if (from) {
            setFormData((prev) => ({ ...prev, interest: from }));
        }
    }, [editFormData,from]);

    let validate = (e) => {
        setLoading(true)
        e.preventDefault();
        fetch(`${API_BASE_URL}/api/contact/validation/jp`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(data => {
            if (data.data) {
                setError('')
                setCheck(false)
                navigate('/contact/confirm', { state: formData })
            }else {
                setError(data.errors)
                console.log(error);
                
                if (window.innerWidth <= 768) {
                    window.scrollTo({ top: 500, behavior: 'smooth' })
                }else {
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                }
            }
            setLoading(false)
        })
        .catch(err => {
            console.log(err);
            setLoading(false)
            window.scrollTo({ top: 0, behavior: 'smooth' })
        });
    }

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
                            <ContactLabelInput state={formData.company_name} setState={(value) => setFormData(prev => ({ ...prev, company_name: value }))} error={error.company_name || []} label="会社名" placeholder="株式会社 Next Innovations" type="text" name="companyName" />
                            <ContactLabelInput state={formData.name} setState={(value) => setFormData(prev => ({ ...prev, name: value }))} error={error.name || []} label="お名前" placeholder="田中太郎" type="text" name="name" require />
                            <ContactLabelInput state={formData.email} setState={(value) => setFormData(prev => ({ ...prev, email: value }))} error={error.email || []} label="メールアドレス" placeholder="tanaka@gmail.com" type="email" name="email" require />
                            <ContactLabelInput state={formData.phone} setState={(value) => setFormData(prev => ({ ...prev, phone: value }))} error={error.phone || []} label="電話番号 " placeholder="09012345678" type="text" name="phone" />
                            <ContactLabelSelect state={formData.budget_jp} setState={(value) => setFormData(prev => ({ ...prev, budget_jp: value }))} error={error.budget_jp || []} label="ご予算">
                                <option value="">選択してください</option>
                                <option value="1">50万未満</option>
                                <option value="2">100万未満</option>
                                <option value="3">100万円</option>
                                <option value="4">200万円</option>
                                <option value="5">300万円</option>
                                <option value="6">400万円</option>
                                <option value="7">500万円</option>
                                <option value="8">600万円</option>
                                <option value="9">700万円</option>
                                <option value="10">800万円</option>
                                <option value="11">900万円</option>
                                <option value="12">1000万円以上</option>
                                <option value="13">未定</option>
                                <option value="14">応相談</option>
                            </ContactLabelSelect>
                            <ContactLabelSelect state={formData.hope} setState={(value) => setFormData(prev => ({ ...prev, hope: value }))} error={error.hope || []} label="ご希望形式">
                                <option value="">ご希望のご提案形式を選択して下さい</option>
                                <option value="1"> 資料送付</option>
                                <option value="2">見積依頼</option>
                                <option value="3">打ち合せ希望</option>
                                <option value="4">その他</option>
                            </ContactLabelSelect>
                            <ContactLabelSelect state={formData.interest} setState={(value) => setFormData(prev => ({ ...prev, interest: value }))} error={error.interest || []} label="ご相談サービス" require>
                                <option value="">ご興味のあるサービスをお選びください</option>
                                <option value="5">EORのみ</option>
                                <option value="6">安心ラボ型EOR</option>
                                <option value="7">プロジェクト伴走型EOR</option>
                                <option value="8">UI/UXデザイン</option>
                                <option value="9">サイト制作・リニューアル</option>
                                <option value="10">システム開発・DX支援</option>
                                <option value="11">EOR代理店制度について</option>
                                <option value="12">その他</option>
                            </ContactLabelSelect>
                            <div className="flex flex-col gap-3 pb-6">
                                <ContactLabel label="知ったきっかけ" name="known" require />
                                <ContactRadio setState={(value) => setFormData(prev => ({ ...prev, known: value }))} error={error.known || []} label="ご紹介" name="introduction" value="1" />
                                <ContactRadio setState={(value) => setFormData(prev => ({ ...prev, known: value }))} error={error.known || []} label="SNS" name="sns" value="2" />
                                <ContactRadio setState={(value) => setFormData(prev => ({ ...prev, known: value }))} error={error.known || []} label="その他媒体" name="other" value="3" />
                                <ContactRadio setState={(value) => setFormData(prev => ({ ...prev, known: value }))} error={error.known || []} label="営業" name="marketing" value="4" />
                                {/* {!!error.known  && (
                                    <p className="text-[#E01C1CCC] flex items-center gap-[13px]">
                                        <Danger/>
                                        {error}
                                    </p>
                                )} */}
                            </div>
                            <div className="flex flex-col gap-3">
                                <ContactLabel label="お問い合わせ内容詳細 " name="message" />
                                <textarea value={formData.message} onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))} className="w-[510px] h-[130px] px-4 py-5 text-[#7F7F7F] text-[14px] font-normal leading-[31px] tracking-[0%] bg-transparent border-[2px] border-[#00000014] rounded-[8px] focus:outline-none" placeholder="ご依頼内容の詳細についてお聞かせください"></textarea>
                            </div>
                            <div className="flex gap-[10px] items-center">
                                <input type="checkbox" checked={check} onChange={(e) => setCheck(e.target.checked)} id="terms" className="w-4 h-4 border-[1px] border-[#DFE4EA] rounded-[4px]" />
                                <div className="text-[14px] font-normal leading-[31px] tracking-[0%] text-[#111928]"><Link to="/privacy" className="text-blue-600 hover:font-semibold">プライバシーポリシー</Link>に同意する</div>
                            </div>
                            {(!!loading || !check) && (
                                <button className="text-[20px] font-bold leading-[22px] tracking-[-2%] text-white w-full rounded-[40px] py-5 bg-[#b87768] cursor-not-allowed" disabled>
                                    {!!loading && (
                                        <>
                                            <svg aria-hidden="true" role="status" className="inline w-5 h-5 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                                            </svg>
                                            送信中...
                                        </>
                                    )}
                                    {!check && (
                                        <>確認する</>
                                    )}
                                </button>
                            )}
                            {!loading && check && (
                                <button onClick={(e)=>validate(e)} className="text-[20px] font-bold leading-[22px] tracking-[-2%] text-white w-full rounded-[40px] py-5 bg-[#E84721] hover:bg-[#F15A29]">確認する</button>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
