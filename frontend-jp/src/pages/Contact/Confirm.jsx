import { useState,useEffect } from "react";
import { useLocation,useNavigate } from "react-router-dom";
import ContactConfirmInfo from "../../components/ContactConfirmInfo";
import ContactFrame from "./ContactFrame";
import { API_BASE_URL } from "../../config";

const Confirm = () => {

    const location = useLocation()
    const navigate = useNavigate()
    const formData = location.state
    
    let [loading,setLoading] = useState(false)

    const budgetOptions = {
        1: '50万未満',
        2: '100万未満',
        3: '100万円',
        4: '200万円',
        5: '300万円',
        6: '400万円',
        7: '500万円',
        8: '600万円',
        9: '700万円',
        10: '800万円',
        11: '900万円',
        12: '1000万円以上',
        13: '未定',
        14: '応相談',
    }
    const hopeOptions = {
        1: '資料送付',
        2: '見積依頼',
        3: '打ち合せ希望',
        4: 'その他',
    }
    const interestOptions = {
        5: 'EORのみ',
        6: '安心ラボ型EOR',
        7: 'プロジェクト伴走型EOR',
        8: 'UI/UXデザイン',
        9: 'サイト制作・リニューアル',
        10: 'システム開発・DX支援',
        11: 'EOR代理店制度について',
        12: 'その他',
    };
    const knownOptions = {
        1: 'ご紹介',
        2: 'SNS',
        3: 'その他媒体',
        4: '営業',
    }

    useEffect(() => {
        if (!formData) {
            navigate('/contact')
        }else {
            if (window.innerWidth <= 768) {
                window.scrollTo({ top: 700, behavior: 'smooth' })
            }
        }
    }, [formData,navigate]);

    let goBack = (e) => {
        e.preventDefault()
        navigate('/contact', { state : formData })
    }

    let sendMessage = (e) => {
        setLoading(true)
        e.preventDefault();
        fetch(`${API_BASE_URL}/api/contact/jp`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(data => {
            setLoading(false)
            navigate('/contact/success', { state: data.data })
        })
        .catch(err => {
            console.log(err);
            setLoading(false)
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
    
    return (
        <ContactFrame
            children2={
                <p>
                    内容ご確認の上、お間違い無ければ送信ボタンを押して下さい。以下の内容でお問い合わせを承ります。
                    ご入力内容にお間違いがないかご確認ください。<br className="hidden lg:block" />
                    記載内容を修正する場合は「戻る」を、
                    この内容で送信してよろしければ「送信する」を押してください。
                </p>
            }
        >
            <p className="text-[#444444] text-[20px] lg:text-[24px] font-bold leading-[29px] lg:leading-[44px] tracking-[-2%]">内容をご確認下さい</p>
            <div className="space-y-6 mt-[40px]">
                <ContactConfirmInfo label="会社名" text={formData?.company_name} />
                <ContactConfirmInfo label="お名前" text={formData?.name} />
                <ContactConfirmInfo label="メールアドレス" text={formData?.email} />
                <ContactConfirmInfo label="電話番号" text={formData?.phone} />
                <ContactConfirmInfo label="ご予算" text={budgetOptions[formData?.budget_jp]} />
                <ContactConfirmInfo label="ご希望形式" text={hopeOptions[formData?.hope]} />
                <ContactConfirmInfo label="ご相談サービス" text={interestOptions[formData?.interest]} />
                <ContactConfirmInfo label="知ったきっかけ" text={knownOptions[formData?.known]} />
                <ContactConfirmInfo label="お問い合わせ内容詳細" text={formData?.message} />
            </div>
            {!!loading && (
                <div className="flex gap-[13px] mt-[32px]">
                    <button className="cursor-not-allowed flex items-center justify-center w-full bg-[#f4f0f0] text-[#8b8888] py-[16px] md:py-[20px] text-[16px] md:text-[20px] font-semibold rounded-[8px]" disabled>
                        戻る
                    </button>
                    <button className="cursor-not-allowed flex items-center justify-center w-full bg-[#b87768] text-[#FFF] py-[16px] md:py-[20px] text-[16px] md:text-[20px] font-semibold rounded-[8px]" disabled>
                        <>
                            <svg aria-hidden="true" role="status" className="inline w-5 h-5 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                            </svg>
                            送信中...
                        </>
                    </button>
                </div>
            )}

            {!loading && (
                <div className="flex gap-[13px] mt-[32px]">
                    <button onClick={(e)=>goBack(e)} className="flex items-center justify-center w-full bg-[#E9E9E9] text-[#444444] py-[16px] md:py-[20px] text-[16px] md:text-[20px] font-semibold rounded-[8px]">
                        戻る
                    </button>
                    <button onClick={(e)=>sendMessage(e)} className="flex items-center justify-center w-full bg-[#E84721] text-[#FFF] py-[16px] md:py-[20px] text-[16px] md:text-[20px] font-semibold rounded-[8px]">
                        送信する
                    </button>
                </div>
            )}
        </ContactFrame>
    );
}

export default Confirm;
