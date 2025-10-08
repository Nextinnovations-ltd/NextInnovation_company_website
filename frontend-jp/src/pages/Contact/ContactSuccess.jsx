import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import ContactFrame from "./ContactFrame";
import ContactButton from "../../components/ContactButton";

const ContactSuccess = () => {

    const location = useLocation();
    const message = location.state
    const navigate = useNavigate()
    const goHome = () => {
        navigate('/')
    }
    
    useEffect(() => {
        if (!message) {
            navigate('/contact')
        } else {
            if (window.innerWidth <= 768) {
                window.scrollTo({ top: 500, behavior: 'smooth' })
            }
        }
    }, [message, navigate]);

    return (
        <ContactFrame>
            <div className="flex flex-col items-center">
                <p className="text-[#444444] text-[20px] lg:text-[24px] font-bold leading-[29px] lg:leading-[44px] tracking-[-2%]">お問い合わせありがとうございます！</p>
                <svg className="mt-8 mb-6" width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="37.5" cy="37.5" r="37.5" fill="#40D029"/>
                <path d="M37.5 0C16.7895 0 0 16.7895 0 37.5C0 58.2117 16.7895 75 37.5 75C58.2117 75 75 58.2117 75 37.5C75 16.7895 58.2117 0 37.5 0ZM37.5 70.3863C19.4074 70.3863 4.6875 55.5926 4.6875 37.4999C4.6875 19.4073 19.4074 4.68735 37.5 4.68735C55.5926 4.68735 70.3125 19.4073 70.3125 37.4999C70.3125 55.5924 55.5926 70.3863 37.5 70.3863ZM52.466 23.7785L30.464 45.9187L20.5558 36.0105C19.6406 35.0953 18.157 35.0953 17.2406 36.0105C16.3253 36.9258 16.3253 38.4094 17.2406 39.3246L28.8409 50.9262C29.7562 51.8402 31.2398 51.8402 32.1562 50.9262C32.2616 50.8207 32.352 50.7058 32.434 50.5863L55.7824 27.0937C56.6965 26.1784 56.6965 24.6948 55.7824 23.7785C54.866 22.8633 53.3824 22.8633 52.466 23.7785Z" fill="white"/>
                </svg>
                <div className="w-full bg-[#EDFFEA] border-[2px] border-[#2FC816] rounded-[5px] pt-6 pb-[45px] mb-[66px]">
                    <p className="w-[340px] text-[14px] font-normal leading-[31px] tracking-[0%] text-[#379D26] text-center mx-auto">
                        ご入力いただいた内容を受け付けました。<br/>
                        担当より、通常2営業日以内にご連絡差し上げます。<br/>
                        もし数日経っても返信がない場合は、恐れ入りますが
                        <Link to="https://mail.google.com/mail/?view=cm&to=info@next-innovations.ltd" className="text-[#0078D4] hidden lg:block" target="__blank">info@next-innovations.ltd</Link>
                        <Link to="mailto:info@next-innovations.ltd" className="text-[#0078D4] lg:hidden" target="__blank">info@next-innovations.ltd</Link>
                        までご連絡ください。<br/>
                        ▼ もう一度サービスを確認したい<br/>
                        
                    </p>
                    <p className="w-[265px] text-[14px] font-normal leading-[31px] tracking-[0%] text-[#379D26] ps-[20px] mx-auto">
                        ・<Link to="/eor" className="text-[#0078D4] underline">EORサービスについて詳しく見る</Link><br/>
                        ・<Link to="/dx-support" className="text-[#0078D4] underline">DX支援サービスについて詳しく見る</Link>
                    </p>
                </div>
                <ContactButton buttonFunc={goHome}>ホームページへ</ContactButton>
            </div>

        </ContactFrame>
    );
}

export default ContactSuccess;
