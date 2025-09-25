// import { useState, useEffect } from "react";
import { Link } from "react-router-dom"

const Footer = () => {
	
	return (
		// <div className="bg-[#1E2C44] lg:fixed -z-20 lg:inset-0 -mt-[35px] lg:mt-0">
		<div className="bg-[#1E2C44] -mt-[70px]">
			<div className="max-w-[1420px] mx-auto text-white pb-[54px] pt-[105px] lg:pb-[50px]">
				<div className="max-w-[1266px] mx-auto px-6 lg:px-0">
					<div className="grid grid-cols-2 gap-y-[66px] lg:gap-y-0 lg:flex lg:justify-between">
						<div>
							<p className="text-[18px] font-bold leading-[26px] tracking-[1%]">サービス</p>
							<div className="flex flex-col gap-[22px] mt-[24px]">
								<Link to="/eor" className="text-[15px] font-normal leading-[26px] tracking-[1%]">EOR（雇用代行）</Link>
								<Link to="/eor" className="text-[15px] font-normal leading-[26px] tracking-[1%]">安心ラボ型EOR</Link>
								<Link to="/eor" className="text-[15px] font-normal leading-[26px] tracking-[1%]">プロジェクト伴走型EOR</Link>
								<Link to="/" className="text-[15px] font-normal leading-[26px] tracking-[1%]">EOR代理店制度</Link>
								<Link to="/dx-support" className="text-[15px] font-normal leading-[26px] tracking-[1%]">DX支援</Link>
								<Link to="/development" className="text-[15px] font-normal leading-[26px] tracking-[1%]">受託開発</Link>
								<Link to="/uiux" className="text-[15px] font-normal leading-[26px] tracking-[1%]">UI/UXデザイン</Link>
							</div>
						</div>
						<div>
							<p className="text-[18px] font-bold leading-[26px] tracking-[1%]">プロダクト</p>
							<div className="flex flex-col gap-[22px] mt-[24px]">
								<Link to="http://staging.talent-cloud.asia/emp/lp" className="text-[15px] font-normal leading-[26px] tracking-[1%]">Talent Cloud</Link>
							</div>
						</div>
						<div>
							<p className="text-[18px] font-bold leading-[26px] tracking-[1%]">導入事例</p>
							<div className="flex flex-col gap-[22px] mt-[24px]">
								<Link to="/eor" className="text-[15px] font-normal leading-[26px] tracking-[1%]">EOR事例</Link>
								<Link to="/development" className="text-[15px] font-normal leading-[26px] tracking-[1%]">受託開発事例</Link>
								<Link to="/uiux" className="text-[15px] font-normal leading-[26px] tracking-[1%]">UI/UXデザイン事例</Link>
							</div>
						</div>
						<div>
							<p className="text-[18px] font-bold leading-[26px] tracking-[1%]">会社情報</p>
							<div className="flex flex-col gap-[22px] mt-[24px]">
								<Link className="text-[15px] font-normal leading-[26px] tracking-[1%]">会社概要</Link>
								<Link className="text-[15px] font-normal leading-[26px] tracking-[1%]">経営方針</Link>
								<Link className="text-[15px] font-normal leading-[26px] tracking-[1%]">代表メッセージ</Link>
							</div>
						</div>
						<div>
							<p className="text-[18px] font-bold leading-[26px] tracking-[1%]">情報</p>
							<div className="flex flex-col gap-[22px] mt-[24px]">
								<Link to="/news" className="text-[15px] font-normal leading-[26px] tracking-[1%]">ニュース</Link>
								<Link to="https://demo-site.next-innovations.ltd/ni-blog/" className="text-[15px] font-normal leading-[26px] tracking-[1%]">ブログ</Link>
								<Link to="/" className="text-[15px] font-normal leading-[26px] tracking-[1%]">FAQ</Link>
							</div>
						</div>
						<div>
							<p className="text-[18px] font-bold leading-[26px] tracking-[1%]">法務関連</p>
							<div className="flex flex-col gap-[22px] mt-[24px]">
								<Link to="/privacy" className="text-[15px] font-normal leading-[26px] tracking-[1%]">プライバシーポリシー</Link>
								<Link to="/security-policy" className="text-[15px] font-normal leading-[26px] tracking-[1%]">セキュリティポリシー</Link>
								<Link to="/terms" className="text-[15px] font-normal leading-[26px] tracking-[1%]">利用規約</Link>
							</div>
						</div>
						<div>
							<p className="text-[18px] font-bold leading-[26px] tracking-[1%]">お問い合わせ</p>
							<div className="flex flex-col gap-[22px] mt-[24px]">
								<Link className="text-[15px] font-normal leading-[26px] tracking-[1%]"> 無料相談フォーム</Link>
							</div>
						</div>
					</div>
					<div className="flex flex-col-reverse gap-[32px] lg:gap-0 lg:flex-row justify-between items-center mt-[50px] lg:mt-[100px] mb-[36px] lg:mb-[50px]">
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
				<div className="montserrat text-center text-[37px] lg:text-[131px] font-bold leading-[100%] tracking-[-3%] uppercase">DRIVEN DX WITH US</div>
			</div>
		</div>
	)
}

export default Footer