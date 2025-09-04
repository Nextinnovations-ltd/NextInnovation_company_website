import { useState, useEffect } from "react";
import { Link } from "react-router-dom"

const Footer = () => {

    const [showFooter, setShowFooter] = useState(false);
    useEffect(() => {
      const timer = setTimeout(() => {
        setShowFooter(true);
      }, 5000);
      return () => clearTimeout(timer); // cleanup on unmount
    }, []);

    if (!showFooter) return null;
  
    return (
        <div className="bg-[#1E2C44] fixed -z-[100] bottom-0 right-0 left-0">
          <div className="max-w-[1420px] mx-auto text-white pt-[105px] pb-[50px]">
            <div className="max-w-[1266px] mx-auto">
              <div className="flex justify-between">
                <div>
                  <p className="text-[18px] font-bold leading-[26px] tracking-[1%]">サービス</p>
                  <div className="flex flex-col gap-[13px] mt-[17px]">
                    <Link className="text-[15px] font-normal leading-[26px] tracking-[1%]">EOR（雇用代行）</Link>
                    <Link className="text-[15px] font-normal leading-[26px] tracking-[1%]">安心ラボ型EOR</Link>
                    <Link className="text-[15px] font-normal leading-[26px] tracking-[1%]">DX支援</Link>
                    <Link className="text-[15px] font-normal leading-[26px] tracking-[1%]">受託開発</Link>
                    <Link className="text-[15px] font-normal leading-[26px] tracking-[1%]">UIUXデザイン</Link>
                  </div>
                </div>
                <div>
                  <p className="text-[18px] font-bold leading-[26px] tracking-[1%]">プロダクト</p>
                  <div className="flex flex-col gap-[13px] mt-[17px]">
                    <Link className="text-[15px] font-normal leading-[26px] tracking-[1%]">Talent Cloud</Link>
                  </div>
                </div>
                <div>
                  <p className="text-[18px] font-bold leading-[26px] tracking-[1%]">導入事例</p>
                  <div className="flex flex-col gap-[13px] mt-[17px]">
                    <Link className="text-[15px] font-normal leading-[26px] tracking-[1%]">EOR事例</Link>
                    <Link className="text-[15px] font-normal leading-[26px] tracking-[1%]">受託開発事例</Link>
                    <Link className="text-[15px] font-normal leading-[26px] tracking-[1%]">UI/UXデザイン事例</Link>
                  </div>
                </div>
                <div>
                  <p className="text-[18px] font-bold leading-[26px] tracking-[1%]">会社情報</p>
                  <div className="flex flex-col gap-[13px] mt-[17px]">
                    <Link className="text-[15px] font-normal leading-[26px] tracking-[1%]">会社概要</Link>
                    <Link className="text-[15px] font-normal leading-[26px] tracking-[1%]">経営方針</Link>
                    <Link className="text-[15px] font-normal leading-[26px] tracking-[1%]">代表メッセージ</Link>
                  </div>
                </div>
                <div>
                  <p className="text-[18px] font-bold leading-[26px] tracking-[1%]">情報</p>
                  <div className="flex flex-col gap-[13px] mt-[17px]">
                    <Link className="text-[15px] font-normal leading-[26px] tracking-[1%]">ニュース</Link>
                    <Link className="text-[15px] font-normal leading-[26px] tracking-[1%]">ブログ</Link>
                    <Link className="text-[15px] font-normal leading-[26px] tracking-[1%]">FAQ</Link>
                  </div>
                </div>
                <div>
                  <p className="text-[18px] font-bold leading-[26px] tracking-[1%]">法務関連</p>
                  <div className="flex flex-col gap-[13px] mt-[17px]">
                    <Link className="text-[15px] font-normal leading-[26px] tracking-[1%]">プライバシーポリシー</Link>
                    <Link className="text-[15px] font-normal leading-[26px] tracking-[1%]">セキュリティポリシー</Link>
                    <Link className="text-[15px] font-normal leading-[26px] tracking-[1%]">利用規約</Link>
                  </div>
                </div>
                <div>
                  <p className="text-[18px] font-bold leading-[26px] tracking-[1%]">お問い合わせ</p>
                  <div className="flex flex-col gap-[13px] mt-[17px]">
                    <Link className="text-[15px] font-normal leading-[26px] tracking-[1%]"> 無料相談フォーム</Link>
                  </div>
                </div>
            </div>
            <div className="flex justify-between items-center mt-[80px] mb-[30px]">
              <p className="roboto text-[18px] font-normal leading-[26px] tracking-[1%]">Copyright © Next Innovations</p>
              <p className="roboto text-[18px] font-normal leading-[26px] tracking-[1%]">Let’s grab high achievements together!</p>
              <div className="roboto underline text-[18px] font-normal leading-[26px] tracking-[1%] flex gap-2">
                <Link>Facebook</Link>
                <Link>Instagram</Link>
                <Link>Youtube</Link>
                <Link>LinkedIn</Link>
              </div>
            </div>
            </div>
            <div className="montserrat text-[131px] font-bold leading-[100%] tracking-[-3%] uppercase">DRIVEN DX WITH US</div>
          </div>
        </div>
    )
}

export default Footer